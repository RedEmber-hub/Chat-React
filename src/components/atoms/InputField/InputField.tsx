import './InputField.scss';
import { InputFieldProps, FieldProps } from './InputField.types';
import classNames from 'classnames';

// обертка-контейнер, которая отвечает за стили
function Root({ size, color, children }: InputFieldProps) {
  const className = classNames({
    input: true,
    [`input--${size}`]: size,
    [`input--${color}`]: color,
  });

  return <div className={className}>{children}</div>;
}

// само поле ввода (внутри обертки Root)
//Иными словами: каждый раз, когда пользователь что-то вводит, компонент берёт значение из поля и передаёт его в твою функцию.
function Field({ onChangeValue, ...props }: FieldProps) {
  return (
    <div className="input__input-element">
      <input
        type="text"
        value={props.value}
        {...props}
        onInput={(event) => onChangeValue?.((event.target as HTMLInputElement).value)}
      />
    </div>
  );
}

// слот для вставки доп элементов: иконок и кнопок
function Slot({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

// объединение всех в один компонент
export const InputField = Object.assign(Root, {
  Field,
  Slot,
});
