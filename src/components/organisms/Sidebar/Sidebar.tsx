import { Button } from '@/components/atoms/Button';
import './Sidebar.scss';
import { InputField } from '@/components/atoms/InputField';
import { SidebarProps } from './Sidebar.type';
import { Dialog } from '@/components/molecules/Dialog';
import { useState } from 'react';
import classNames from 'classnames';

export default function Sidebar({ dialogs }: SidebarProps) {
  // переключатель
  const [isMinimize, setIsMinimize] = useState(false);
  // поиск
  const [search, setSearch] = useState('');

  const className = classNames({
    sidebar: true,
    ['sidebar--minimized']: isMinimize,
  });

  function toggleMinimize() {
    setIsMinimize(!isMinimize);
  }

  function filteredDialogs() {
    return dialogs.filter((dialog) => {
      return dialog.sender_name.toLowerCase().includes(search.toLowerCase());
    });
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
              <img src="/icons/search.svg" alt="иконка лупы" />
            </InputField.Slot>

            <InputField.Field placeholder="Поиск" value={search} onChangeValue={setSearch} />
          </InputField>
        </div>
      </div>

      <div className="dialog-list">
        {filteredDialogs().map((dialog) => {
          return <Dialog dialogProp={dialog} key={dialog.id} />;
        })}
      </div>
    </aside>
  );
}
