'use client';

import { FC } from 'react';
import styles from './editableList.module.css';
import { useAppDispatch, useAppSelector } from '@/lib/hooks';
import { add, remove, selectList } from '@/lib/features/editableList/editableListSlice';

export const EditableList: FC = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector(selectList);

  return (
    <div className={styles.listEditable}>
      <div className={styles.controls}>
        <button className={styles.button} onClick={() => dispatch(add())} disabled={list.length > 4}>Add</button>
        <button className={styles.button} onClick={() => dispatch(remove())}>Remove</button>
      </div>
      <div className={styles.list}>
        {list.map(item => {
          return <div key={item} className={styles.item} style={{ backgroundColor: item }} />;
        })}
      </div>
    </div>
  );
};