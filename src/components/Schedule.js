import React from 'react'
import { Button, Flex, Text } from "@react-native-material/core";
import { StyleSheet } from 'react-native';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';

export default function Schedule() {
  const styles = StyleSheet.create({
    button:{
      marginRight:50,
      marginLeft:50,
      margin:10,
      padding:10,
    }
  })

    return (
      <Flex fill>
        <Flex fill>
        <CalendarList
          current={'2021-19-07'}
          // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
          minDate={'2021-09-07'}
          // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
          maxDate={'2021-29-07'}
          // Handler which gets executed on day press. Default = undefined
          onDayPress={day => {
            console.log('selected day', day);
          }}
          // Handler which gets executed on day long press. Default = undefined
          onDayLongPress={day => {
            console.log('selected day', day);
          }}
          firstDay={1}
          enableSwipeMonths={true}
          theme={{
            textSectionTitleColor: "black",
            textSectionTitleDisabledColor: "black",
            selectedDayBackgroundColor: "black",
            selectedDayTextColor: "black",
            todayTextColor: "black",
            dayTextColor: "black",
            textDisabledColor: "black",
            dotColor: "black",
            selectedDotColor: "black",
            arrowColor: "rgb(101,180,84)",
            disabledArrowColor: 'red',
            monthTextColor: "black",
            indicatorColor: "blue",
            textDayFontFamily: "ProximaNova-Regular",
            textMonthFontFamily: "ProximaNova-Regular",
            textDayHeaderFontFamily: "ProximaNova-Regular",
            textDayFontWeight: "400",
            textMonthFontWeight: "bold",
            textDayHeaderFontWeight: "200",
            textDayFontSize: 15,
            textDayHeaderFontSize: 11,
          }}
              />
        </Flex>
        <Flex fill style={{backgroundColor:'black', paddingTop:30}}>
          <Button style={styles.button} title="Add same day availability" color="#1eaaf1" />
          <Button style={styles.button} title="Add unavailability" color="#e2202c" />
          <Button style={styles.button} title="Add availability" color="#35b736" />
        </Flex>
      </Flex>
    );
}