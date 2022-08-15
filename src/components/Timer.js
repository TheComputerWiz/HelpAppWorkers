import React, {useState} from 'react'
import { Button, Flex, Text, Banner } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollView, View } from 'react-native';
import DatePicker from 'react-native-date-picker'

export default function Timer({navigation}) {
  const [date, setDate] = useState(new Date())
    return (
      <Flex fill>
        <View style={{alignItems:'center'}}>
          <ScrollView>
            <Text style={{textAlign:'center', marginTop:20}}>This is your reported start time</Text>
            <DatePicker style={{alignContent:'center', height:100}} textColor='black' date={date} onDateChange={setDate} />
            <Text style={{textAlign:'center', marginTop:20}}>This is your reported time end</Text>
            <DatePicker style={{alignContent:'center', height:100}} date={date} textColor='black' onDateChange={setDate} />
            <Text style={{textAlign:'center', marginTop:20}}>Review and comments</Text>
            <View style={{width:"100%"}}>
              <Banner
                text="Hey I really enjoyed working with this guy. I will hire again when I need more help."
              />
            </View>
          </ScrollView>
        </View>
        <View style={{backgroundColor:'black', height:180}}>
          <View style={{flexDirection:'row', justifyContent:'center', marginTop:20}}>
            <View>
              <Icon name="clock-o" size={140} />
            </View>
            <View style={{justifyContent:'space-evenly', marginLeft:10}}>
              <Button title="Request more time" color="white" onPress={() => navigation.navigate("Extend Time")} /> 
            </View>
          </View>
        </View>
      </Flex>
    );
}