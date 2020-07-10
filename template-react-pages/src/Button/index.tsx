import React from 'react'
import s from './index.module.css'

interface IProps {}

const Button: React.FC<IProps & React.HTMLProps<HTMLButtonElement>> = (props) => {
  return (
    <button
      {...props as any}
      className={[s.button, props.className].filter(Boolean).join(' ')}
    >
      {props.children}
    </button>
  )
}

export default Button
