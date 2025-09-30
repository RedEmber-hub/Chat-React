import classNames from 'classnames';
import { Button } from '../Button';
import './Input.scss';
import { InputProps } from './Input.type';

export default function Input({ size, color, leftIcon, rightIcon, ...props }: InputProps) {
  const className = classNames({
    input: true,
    [`input--${size}`]: size,
    [`input--${color}`]: color,
  });

  return (
    <div className={className}>
      {leftIcon && <Button size="s" icon={leftIcon} />}

      <div className="input__input-element">
        <input type="text" {...props} />
      </div>

      {rightIcon && <Button size="s" icon={rightIcon} />}
    </div>
  );
}
