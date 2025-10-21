import './Panel.scss';
import { PanelProps } from './Panel.type';

export default function Panel({ children }: PanelProps) {
  return <div className="panel">{children}</div>;
}
