import React from 'react'
import { add } from 'my-library'

interface IProps {}

const Demo: React.FC<IProps> = (props) => {
  return (
    <div>
      <p>This is demo for library function</p>
      <p>add(1, 1) {'->'} {add(1, 1)}</p>
    </div>
  )
}

export default Demo
