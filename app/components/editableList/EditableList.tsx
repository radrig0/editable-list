'use client';

import { FC, useCallback, useState } from 'react';
import styles from './editableList.module.css';
import { getRandomVibrantColor } from './utils';

export const EditableList: FC = () => {
  const [list, setList] = useState<string[]>([]);

  const add = useCallback(() => {
    if (list.length > 4) {
      return;
    }
    setList(prevState => {
      const { hue, saturation, lightness } = getRandomVibrantColor();
      return [`hsl(${hue}, ${saturation}%, ${lightness}%)`, ...prevState];
    });
  }, [list.length]);

  const remove = useCallback(() => {
    setList(prevState => {
      return prevState.slice(0, -1);
    });
  }, []);

  return (
    <div className={styles.listEditable}>
      <div className={styles.controls}>
        <button className={styles.button} onClick={add} disabled={list.length > 4}>Add</button>
        <button className={styles.button} onClick={remove}>Remove</button>
      </div>
      <div className={styles.list}>
        {list.map(item => {
          return <div key={item} className={styles.item} style={{ backgroundColor: item }} />;
        })}
      </div>
    </div>
  );
};