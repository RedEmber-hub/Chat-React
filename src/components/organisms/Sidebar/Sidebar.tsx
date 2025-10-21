import { Button } from '@/components/atoms/Button';
import './Sidebar.scss';
import { InputField } from '@/components/atoms/InputField';
import { SidebarProps } from './Sidebar.type';
import { Dialog } from '@/components/molecules/Dialog';
import { useMemo, useState } from 'react';
import classNames from 'classnames';
import { Icon } from '@/components/atoms/Icon';
import { useParams } from 'react-router';
import { Panel } from '@/components/atoms/Panel';

export default function Sidebar({ dialogs, onClickDialog }: SidebarProps) {
  const { id } = useParams();

  // переключатель
  const [isMinimize, setIsMinimize] = useState(false);
  // поиск или фильтрация по имени
  const [search, setSearch] = useState('');

  // показывать панель, если что-то введено в поиск
  const showPanel = search.length > 0;

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
        {/* кнопка для сворачивания */}
        <div className="sidebar__minimized-button">
          <Button size="s" icon="minimize" onClick={toggleMinimize} />
        </div>

        {/* инпут для поиска с фильтрацией */}
        <div className="sidebar__search">
          <InputField size="s" color="secondary">
            <InputField.Slot>
              <Icon name="search" />
            </InputField.Slot>

            <InputField.Field placeholder="Поиск" value={search} onChangeValue={setSearch} />

            {showPanel && (
              <div className="sidebar__panel">
                <Panel>
                  {filteredDialogs.length > 0 ? (
                    filteredDialogs.map((dialog) => (
                      <Dialog
                        key={dialog.id}
                        dialogProp={dialog}
                        onClick={onClickDialog}
                        isActive={Number(id) === dialog.id}
                      />
                    ))
                  ) : (
                    <span className="text icon">Ничего не найдено</span>
                  )}
                </Panel>
              </div>
            )}
          </InputField>
        </div>
      </div>

      <div className="dialog-list">
        {dialogs.map((dialog) => {
          return (
            <Dialog dialogProp={dialog} key={dialog.id} onClick={onClickDialog} isActive={Number(id) === dialog.id} />
          );
        })}
      </div>
    </aside>
  );
}
