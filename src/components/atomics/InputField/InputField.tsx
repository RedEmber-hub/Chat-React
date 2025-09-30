import './InputField.scss';
import { InputFieldProps, FieldProps } from './InputField.types';
import classNames from 'classnames';

function Root({ size, color, children }: InputFieldProps) {
  const className = classNames({
    input: true,
    [`input--${size}`]: size,
    [`input--${color}`]: color,
  });

  return <div className={className}>{children}</div>;
}

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

function Slot({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export const InputField = Object.assign(Root, {
  Field,
  Slot,
});
