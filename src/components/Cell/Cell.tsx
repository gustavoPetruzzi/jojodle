import { ChangeEvent } from "react";
import styles from './Cell.module.css';


interface CellProps {
  onChange: (value: string) => void;
}

const Cell = ({ onChange }: CellProps) => {

  const onCellChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  }

  return (
    <input
      className={styles.cell}
      type="text"
      maxLength={1}
      onChange={onCellChange}
    />
  )
}

export default Cell;