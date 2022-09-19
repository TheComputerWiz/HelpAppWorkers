import React from 'react'
import { ListItem, Flex, Spacer, Avatar } from "@react-native-material/core";
import { useSelector } from 'react-redux'
import { ScrollView } from 'react-native';
import TalkToText from '../components/TalkToText';

export default function HelpScreen() {
  const message = useSelector((state) => state.message)
  const auth = useSelector((state) => state.auth)
  
    return (
          <Flex fill>
            <ScrollView>
              <Spacer />
              <ListItem
                leadingMode="avatar"
                leading={
                  <Avatar image={{ uri: "https://mui.com/static/images/avatar/2.jpg" }} />
                }
                secondaryText="Hi my name is Ralph, how can I help you…"
              />

              {message.data.messageInput && message.data.messageInput.map((item, index) => 
                <ListItem
                  key={index}
                  leadingMode="avatar"
                  leading={
                    <Avatar image={{ uri: auth.data.avatar }} />
                  }
                  secondaryText={item}
                />
              )}
              <TalkToText />
            </ScrollView>
          </Flex>
    );
}