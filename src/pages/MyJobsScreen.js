import React from 'react'
import { ScrollView, View } from 'react-native';
import { ListItem, Text, Badge, Button, Flex, Banner, HStack } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/FontAwesome';
import StringsOfLanguages from '../utils/localizations';

export default function MyJobsScreen({navigation}) {
    return (
      <>
      <View>
        <Text style={{textAlign:'center', fontSize:20, margin:20}}>{StringsOfLanguages.latest_messages}</Text>
      </View>
      <ScrollView style={{height:260}}>
        <ListItem 
          leadingMode={'icon'}
          leading={<Icon color='red' name="envelope-open" size={20} />}
          title="Sarah"
          trailing={props => <Icon name="chevron-right" {...props} />} 
          onPress={() => navigation.navigate("Message")}
        />
        <ListItem 
          title="Sarah"
          trailing={props => <Icon name="chevron-right" {...props} />} 
          onPress={() => navigation.navigate("Message")}
        />
        <ListItem 
          title="Sarah"
          trailing={props => <Icon name="chevron-right" {...props} />} 
          onPress={() => navigation.navigate("Message")}
        />
        <ListItem 
          title="Sarah"
          trailing={props => <Icon name="chevron-right" {...props} />} 
          onPress={() => navigation.navigate("Message")}
        />
      </ScrollView>
      <View style={{alignItems:'center', marginTop:10}}>
        <Button color="black" title={StringsOfLanguages.all_messages} onPress={() => navigation.navigate("Messages")} />
      </View>
      <View>
        <Text style={{textAlign:'center', fontSize:20, margin:20}}>{StringsOfLanguages.job_request}</Text>
      </View>
      <ScrollView>
      <Flex fill>
        <Flex fill style={{ padding:20, backgroundColor:'lightgray' }}>
          <View style={{width:100, marginBottom:-10, zIndex:1}}>
            <Badge label={StringsOfLanguages.emergency} color="error" />
          </View>
          <Banner
            text="Sarah Holmes : I need a plumber to come by my place immediately."
            buttons={
              <HStack spacing={2}>
                <Button color="black" key="fix-it" variant="text" title={StringsOfLanguages.view_more} compact onPress={() => navigation.navigate("Job Request")} />
                <Button color="black" key="learn-more" variant="text" title={StringsOfLanguages.reject} compact />
              </HStack>
            }
            style={{marginBottom:20}}
          />
          <View style={{width:100, marginBottom:-10, zIndex:1}}>
            <Badge label={StringsOfLanguages.today} color="green" />
          </View>
          <Banner
            text="Sarah Holmes : I need a plumber to come by my place immediately."
            buttons={
              <HStack spacing={2}>
                <Button color="black" key="fix-it" variant="text" title={StringsOfLanguages.view_more} compact onPress={() => navigation.navigate("Job Request")} />
                <Button color="black" key="learn-more" variant="text" title={StringsOfLanguages.reject} compact />
              </HStack>
            }
            style={{marginBottom:20}}
          />
          <View style={{width:100, marginBottom:-10, zIndex:1}}>
            <Badge label={StringsOfLanguages.sameday} color="blue" />
          </View>
          <Banner
            text="Sarah Holmes : I need a plumber to come by my place immediately."
            buttons={
              <HStack spacing={2}>
                <Button color="black" key="fix-it" variant="text" title={StringsOfLanguages.view_more} compact onPress={() => navigation.navigate("Job Request")} />
                <Button color="black" key="learn-more" variant="text" title={StringsOfLanguages.reject} compact />
              </HStack>
            }
            style={{marginBottom:20}}
          />
          <View style={{width:100, marginBottom:-10, zIndex:1}}>
            <Badge label={StringsOfLanguages.scheduled} color="black" />
          </View>
          <Banner
            text="Sarah Holmes : I need a plumber to come by my place immediately."
            buttons={
              <HStack spacing={2}>
                <Button color="black" key="fix-it" variant="text" title={StringsOfLanguages.view_more} compact onPress={() => navigation.navigate("Job Request")} />
                <Button color="black" key="learn-more" variant="text" title={StringsOfLanguages.reject} compact />
              </HStack>
            }
            style={{marginBottom:20}}
          />
        </Flex>
      </Flex>
      </ScrollView>
      </>
    );
}