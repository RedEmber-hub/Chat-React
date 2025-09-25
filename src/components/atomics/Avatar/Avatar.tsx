import './Avatar.scss';
import { AvatarProps } from './Avatar.types';
import classNames from 'classnames';

export default function Avatar({ src, user_name, size, children }: AvatarProps) {
  const className = classNames({
    avatar: true,
    [`avatar--${size}`]: size,
  });

  return (
    <>
      <div className={className}>
        {children ? children : <img src={src} alt={`Аватарка пользователя: ${user_name}`} />}
      </div>
    </>
  );
}
