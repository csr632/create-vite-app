import React from 'react'
import { Card } from 'my-library'

interface IProps {}

const Demo: React.FC<IProps> = (props) => {
  return (
    <Card>
      <h2>Card Demo</h2>
      <p>This is card demo.</p>
    </Card>
  )
}

export default Demo
