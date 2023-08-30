import React from 'react'
import style from './ChipsContainer.module.css'

export default function ChipsContainer({children}) {
  return <div className={style.container}>{children}</div>;
}
