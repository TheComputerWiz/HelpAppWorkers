import React from 'react'
import { ListItem, Flex, Spacer, Avatar } from "@react-native-material/core";
import TalkToText from './TalkToText';

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
          <TalkToText />
        </Flex>
      </Flex>
    );
}