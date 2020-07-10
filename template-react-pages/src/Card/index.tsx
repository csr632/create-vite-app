import React from 'react'
import s from './index.module.css'

interface IProps {}

const Card: React.FC<IProps> = (props) => {
  return <div className={s.card}>{props.children}</div>
}

export default Card
