import classNames from 'classnames';
import './Badge.scss';
import { BadgeProps } from './Badge.types';

export default function Badge({ size, color, text }: BadgeProps) {
  const className = classNames({
    badge: true,
    [`badge--${size}`]: size,
    [`badge--${color}`]: color,
  });

  return (
    <div className={className}>
      <span className="caption">{text}</span>
    </div>
  );
}
