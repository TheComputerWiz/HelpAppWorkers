import React from 'react'
import { ListItem, TextInput, Flex, Spacer, Avatar } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Message() {
    return (
      <Flex fill>
        <Flex fill>
          <Spacer />
          <ListItem
            leadingMode="avatar"
            leading={
              <Avatar image={{ uri: "https://mui.com/static/images/avatar/3.jpg" }} />
            }
            title="Sarah"
            secondaryText="I need help, can you help me?"
          />
          <TextInput
            leadingMode="icon"
            leading={props => <Icon name="microphone" {...props} />}
            label="Enter Text"
            trailing={props => <Icon name="send" {...props} />}
          />
        </Flex>
      </Flex>
    );
}