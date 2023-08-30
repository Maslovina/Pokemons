import React from 'react'
import style from './ButtonContainer.module.css'

export default function ButtonContainer({children}) {
    return <div className={style.container}>{ children }</div>;
}
