import React, { useState } from 'react'
import { Button, Flex, Text } from "@react-native-material/core";
import { StyleSheet } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import StringsOfLanguages from '../utils/localizations';

export default function Schedule({navigation}) {
  const [selected, setSeletected ] = useState({})

  const onDayPress = (day) => {
    setSeletected({"selected":day.dateString})
    navigation.navigate('Slot', { bookingDate : day })
  }

    return (
      <>
        <Calendar
          onDayPress={onDayPress}
          style={styles.calendar}
          hideExtraDays
          markedDates={{selected : true}}
          theme={{
            selectedDayBackgroundColor: 'green',
            todayTextColor: 'green',
            arrowColor: 'green',
          }}
        />
        <Text style={{textAlign:'center', marginTop:20, fontSize:20}}>{StringsOfLanguages.current_appointments}</Text>
      </>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  calendar: {
    borderTopWidth: 1,
    paddingTop: 5,
    borderBottomWidth: 1,
    borderColor: '#eee',
    height: 350
  }
});