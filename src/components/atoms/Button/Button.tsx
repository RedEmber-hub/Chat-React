import { Icon } from '../Icon';
import './Button.scss';
import { ButtonProps } from './Button.types';
import classNames from 'classnames';

export default function Button({ size, icon, onClick }: ButtonProps) {
  const className = classNames({
    button: true,
    [`button--${size}`]: size,
  });

  return (
    <button className={className} onClick={onClick}>
      <Icon name={icon} />
    </button>
  );
}
