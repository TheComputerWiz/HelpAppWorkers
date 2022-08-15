import React, {useState} from 'react'
import { Button, Flex, Text } from "@react-native-material/core";
import { ScrollView, View, StyleSheet, Dimensions, Image } from 'react-native';
import DatePicker from 'react-native-date-picker'

export default function MoreTime() {
  const [date, setDate] = useState(new Date())
  const windowWidth = Dimensions.get('window').width;

  const styles = StyleSheet.create({
    middleAlign: {
      justifyContent: 'center', //Centered horizontally
      alignItems: 'center', //Centered vertically
    },
    footerImage :{
      width:windowWidth,
      height:250
    }
  })
    return (
      <Flex fill>
        <View style={{alignItems:'center'}}>
          <ScrollView>
            <Text style={{textAlign:'center', marginTop:20, fontSize:30}}>New Completion Time:</Text>
            <Text style={{textAlign:'center', marginTop:20}}>Please share your new completion time.</Text>
            <DatePicker style={{alignContent:'center'}} textColor='black' date={date} onDateChange={setDate} />
            <Button title="Request more time" color="black" />
          </ScrollView>
        </View>
        <View style={[styles.middleAlign, {backgroundColor:'lightgray', height:250, marginTop:10}]}>
          <Image style={styles.footerImage} source={require('../../assets/images/construction-worker.jpg')} />
        </View>
      </Flex>
    );
}