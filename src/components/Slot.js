import { Button } from '@react-native-material/core'
import React, { useState, useEffect } from 'react'
import { View, StyleSheet, Alert } from 'react-native'
import { useSelector } from 'react-redux'

const jsonData = { "slots" : {
    "slot1": "9:00am to 9:30am",
    "slot2": "9:30am to 10:00am",
    "slot3": "10:00am to 10:30am",
    "slot4": "10:30am to 11:00am",
    "slot5": "11:00am to 11:30am",
    "slot6": "11:30am to 12:00pm"
 }
}

export default function Slot ({route}) {
    const { bookingDate } = route.params;
    const [month, setMonth] = useState(bookingDate.month)
    const [date, setDate] = useState(bookingDate.day)
    const auth = useSelector((state) => state.auth)
    
    const bookSlot = (status,key,value) => {
        return (
            Alert.alert(
                "Manage your calendar",
                "You choose "+key+" at "+value,
                [
                  {
                    text: "Block",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                  },
                  { text: "Make Available", onPress: () => console.log("OK Pressed") }
                ]
              )
        )
    }

    const slots = jsonData.slots

    return (
        Object.keys(slots).map( function(k) {
            return (  <View key={k} style={{margin:5}}>
                        <Button color={"green"}  onPress={(status) => bookSlot(status,k,slots[k]) } title={slots[k]} />
                      </View>)
          })
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1
    }
  });