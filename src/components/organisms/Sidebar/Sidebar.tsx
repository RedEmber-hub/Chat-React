import { Button } from '@/components/atoms/Button';
import './Sidebar.scss';
import { InputField } from '@/components/atoms/InputField';
import { SidebarProps } from './Sidebar.type';
import { Dialog } from '@/components/molecules/Dialog';
import { useMemo, useState } from 'react';
import classNames from 'classnames';
import { Icon } from '@/components/atoms/Icon';

export default function Sidebar({ dialogs, onClickDialog }: SidebarProps) {
  // переключатель
  const [isMinimize, setIsMinimize] = useState(false);
  // поиск или фильтрация по имени
  const [search, setSearch] = useState('');

  const filteredDialogs = useMemo(() => {
    return dialogs.filter((dialog) => {
      return dialog.sender_name.toLowerCase().includes(search.toLowerCase());
    });
  }, [dialogs, search]);

  const className = classNames({
    sidebar: true,
    ['sidebar--minimized']: isMinimize,
  });

  function toggleMinimize() {
    setIsMinimize(!isMinimize);
  }

  return (
    <aside className={className}>
      <div className="sidebar__actions">
        <div className="sidebar__minimized-button">
          <Button size="s" icon="minimize" onClick={toggleMinimize} />
        </div>

        <div className="sidebar__search">
          <InputField size="s" color="secondary">
            <InputField.Slot>
              <Icon name="search" />
            </InputField.Slot>

            <InputField.Field placeholder="Поиск" value={search} onChangeValue={setSearch} />
          </InputField>
        </div>
      </div>

      <div className="dialog-list">
        {filteredDialogs.map((dialog) => {
          return <Dialog dialogProp={dialog} key={dialog.id} onClick={onClickDialog} />;
        })}
      </div>
    </aside>
  );
}
