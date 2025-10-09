import './Avatar.scss';
import { AvatarProps } from './Avatar.types';
import classNames from 'classnames';

export default function Avatar({ src, user_name, size, children }: AvatarProps) {
  const hasImage = src && src.trim() !== '';

  const className = classNames({
    avatar: true,
    [`avatar--${size}`]: size,
    'avatar--initial': !hasImage && !children, // модификатор для инициалов
  });

  function getInitial() {
    return (
      user_name &&
      user_name
        .split(' ')
        .map((name) => name[0])
        .join('')
        .toUpperCase()
    );
  }

  return (
    <>
      <div className={className}>
        {children ? children : hasImage ? <img src={src} alt={`Аватарка пользователя: ${user_name}`} /> : getInitial()}
      </div>
    </>
  );
}
