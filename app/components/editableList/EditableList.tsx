'use client';

import { FC, useState } from 'react';
import styles from './editableList.module.css';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { add, remove, selectList } from '@/lib/features/editableList/editableListSlice';
import { getRandomVibrantColor } from '@/app/components/editableList/utils';

export const EditableList: FC = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector(selectList);

  const [removingList, setRemovingList] = useState<string[]>([]);
  const [isAdding, setIsAdding] = useState(false);

  const onAdd = () => {
    const { hue, saturation, lightness } = getRandomVibrantColor();
    const newItem = `hsl(${hue}, ${saturation}%, ${lightness}%)`;
    dispatch(add(newItem));
    setIsAdding(true);
  };

  const onRemove = () => {
    const lastItem = list[list.length - 1];
    if (!lastItem) {
      return;
    }
    dispatch(remove(lastItem));
    setRemovingList(prevState => {
      return [lastItem, ...prevState];
    });
  };

  return (
    <div className={styles.listEditable}>
      <div className={styles.controls}>
        <button className={styles.button} onClick={onAdd} disabled={list.length > 4}>Add</button>
        <button className={styles.button} onClick={onRemove} disabled={!list.length}>Remove</button>
      </div>
      <div
        className={styles.wrapper}
        onAnimationEnd={() => setIsAdding(false)}
      >
        <div className={`${styles.list} ${isAdding ? styles.adding : ''}`}>
          {list.map(item => {
            return (
              <div
                key={item}
                className={styles.item}
                style={{ backgroundColor: item }}
              />
            );
          })}
          {removingList.map(item => {
            return (
              <div
                key={item}
                className={`${styles.item} ${styles.removing}`}
                style={{ backgroundColor: item }}
                onAnimationEnd={() => {
                  setRemovingList(prevState => {
                    return prevState.filter(v => v !== item);
                  });
                }}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};