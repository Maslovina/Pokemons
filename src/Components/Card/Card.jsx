import React from 'react'
import style from './Card.module.css'

export default function Card({name,pic,id,height,attack,series}) {
  return (
    <div className={style.card}>
      <h2 className={style.title}>{ name }</h2>
      <div className={style.imgwrapper}><img className={style.pic} src={ pic } alt="" /></div>
      <ul className={style.info}>
        <li>Снялся в {series} сериях </li>
        <li>Id: { id }</li>
        <li>height: {height}</li>
        <li>attack: { attack }</li>
      </ul>
    </div>
  );
}
