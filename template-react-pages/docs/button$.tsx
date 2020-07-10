import React from 'react'
import { Button } from 'my-library'

interface IProps {}

const Demo: React.FC<IProps> = (props) => {
  return (
    <div>
      <Button
        onClick={() => {
          console.log('button onClick!')
        }}
      >
        This is button component demo
      </Button>
    </div>
  )
}

export default Demo
