import React, { useState, useEffect } from 'react'
import { ListItem, TextInput, Flex, Spacer, Avatar } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/FontAwesome';
import { create } from '../redux/message/messageSlice';
import { useDispatch, useSelector } from 'react-redux'

export default function HelpScreen() {
  const dispatch = useDispatch()
  const message = useSelector((state) => state.message)

  const [messageInput, setMessageInput] = useState('')

  const handleMessage = () => {
    dispatch(create({message:messageInput}))
  }

  useEffect(() => {
    console.log(message)
  }, [message])
  

    return (
          <Flex fill>
            <Flex fill>
              <Spacer />
              <ListItem
                leadingMode="avatar"
                leading={
                  <Avatar image={{ uri: "https://mui.com/static/images/avatar/2.jpg" }} />
                }
                secondaryText="Hi my name is Ralph, how can I help you…"
              />

              <ListItem
                leadingMode="avatar"
                leading={
                  <Avatar image={{ uri: "https://mui.com/static/images/avatar/2.jpg" }} />
                }
                secondaryText="Hi my name is Ralph, how can I help you…"
              />
              <TextInput
                leadingMode="icon"
                leading={props => <Icon name="microphone" {...props} />}
                label="Enter Text"
                onChangeText={(value) => setMessageInput(value)}
                value={messageInput}
                trailing={props => <Icon name="send" {...props} onPress={handleMessage} />}
              />
            </Flex>
          </Flex>
    );
}