import React from 'react'
import style from './Button.module.css'

export default function Button({value,handler}) {
  return (
    <button className={style.default} onClick={handler} value={value}>{value }</button>
  )
}
