import { useMemo } from 'react';
import './Avatar.scss';
import { AvatarProps } from './Avatar.types';
import classNames from 'classnames';

export default function Avatar({ src, user_name, size, children }: AvatarProps) {
  // Проверка наличия изображения(src), если нет, то отображается инициалы
  const hasImage = src?.trim() !== '';

  const colors = ['#8df9f9ff', '#96e258ff', '#ea63c6ff', '#e9de63ff', '#ea6363ff', '#6373eaff'];
  const randomColor = useMemo(() => {
    return colors[Math.floor(Math.random() * colors.length)];
  }, []);

  const className = classNames({
    avatar: true,
    [`avatar--${size}`]: size,
    'avatar--initial': !hasImage && !children, // модификатор для инициалов
  });

  // Получение инициалов
  const getInitials = useMemo(() => {
    return user_name
      ?.split(' ')
      .map((name) => name[0])
      .join('')
      .toUpperCase();
  }, [user_name]);

  return (
    <>
      <div className={className} style={{ backgroundColor: hasImage ? '' : randomColor }}>
        {children && children}
        {hasImage ? <img src={src} alt={`Аватарка пользователя: ${user_name}`} /> : getInitials}
      </div>
    </>
  );
}
