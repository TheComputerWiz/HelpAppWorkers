import { Button, Flex, Text } from '@react-native-material/core'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/counter/counterSlice'

export function Counter() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <Flex>
        <Button
          title="Increment"
          onClick={() => dispatch(increment())}
        />
        <Text>{count}</Text>
        <Button
          title="Decrement"
          onClick={() => dispatch(decrement())}
        />
    </Flex>
  )
}
