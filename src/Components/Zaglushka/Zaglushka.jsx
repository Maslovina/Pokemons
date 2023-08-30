import React from 'react'
import style from './Zaglushka.module.css'

export default function Zaglushka() {
  return (
    <div className={style.wrapper}>
      <button className={style.api} src="https://pokeapi.co/">
        ПОКЕМОНЫ API
      </button>
    </div>
  );
}
