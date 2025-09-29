import classNames from 'classnames';
import { Button } from '../Button';
import './InputGroup.scss';
import { InputGroupProps } from './InputGroup.type';

export default function InputGroup({ InputGroupType, placeholder, leftbutton, rightbutton }: InputGroupProps) {
  const className = classNames({
    [`inputGroup`]: true,
    [`inputGroup--${InputGroupType}`]: InputGroupType,
  });

  return (
    <div className={className}>
      {leftbutton ? <Button size="s" icon="search" /> : null}

      <div className="inputGroup__input">
        <input type="text" placeholder={placeholder} />
      </div>

      {rightbutton ? <Button size="s" icon="send-icon" /> : null}
    </div>
  );
}
