type InputGroupType = 'header' | 'chat';

export interface InputGroupProps {
  InputGroupType: InputGroupType;
  placeholder: string;
  leftbutton?: boolean;
  rightbutton?: boolean;
}
