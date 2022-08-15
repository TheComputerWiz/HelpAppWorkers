import React from 'react'
import { ScrollView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Button, VStack, HStack, ListItem, Avatar, Divider } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function HomeScreen({navigation}) {
  const styles = StyleSheet.create({
    grid: {
      height:80,
      width:80,
      justifyContent: 'center', //Centered horizontally
      alignItems: 'center', //Centered verticallyflex: 1,
      margin:15,
      borderRadius:10
    },
    text: {
      color:'black'
    }
  })

    return (
      <ScrollView>
        <View>
          <Text style={[styles.text, {textAlign:'center', padding:10}]}>Today's Jobs</Text>
          <Divider style={{ marginBottom: 5, marginTop:-5 }} leadingInset={16} />
        </View>
        <ScrollView horizontal={true}>
          <ListItem
            leadingMode="avatar"
            leading={
              <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
            }
            title="Job Title"
            secondaryText="I'll be in your neighborhood doing errands this…"
            trailing={props => <Icon name="chevron-right" {...props} />}
            onPress={() => navigation.navigate("Job Request")}
          />
          <ListItem
            leadingMode="avatar"
            leading={
              <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
            }
            title="Job Title"
            secondaryText="I'll be in your neighborhood doing errands this…"
            trailing={props => <Icon name="chevron-right" {...props} />}
            onPress={() => navigation.navigate("Job Request")}
          />
        </ScrollView>
        <View style={{alignItems:"center"}}>
        
          <Icon name="ellipsis-h" color="black" size={30} />

        </View>

        <View style={{marginTop:10}}>
          <Text style={[styles.text, {textAlign:'center', padding:10}]}>Sameday Jobs</Text>
          <Divider style={{ marginBottom: 5, marginTop:-5 }} leadingInset={16} />
        </View>
        <ScrollView horizontal={true} indicatorStyle={{backgroundColor:'black'}}>
          <ListItem
            leadingMode="avatar"
            leading={
              <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
            }
            title="Job Title"
            secondaryText="I'll be in your neighborhood doing errands this…"
            trailing={props => <Icon name="chevron-right" {...props} />}
            onPress={() => navigation.navigate("Job Request")}
          />
          <ListItem
            leadingMode="avatar"
            leading={
              <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
            }
            title="Job Title"
            secondaryText="I'll be in your neighborhood doing errands this…"
            trailing={props => <Icon name="chevron-right" {...props} />}
            onPress={() => navigation.navigate("Job Request")}
          />
        </ScrollView>
        <View style={{alignItems:"center"}}>
        
          <Icon name="ellipsis-h" color="black" size={30} />

        </View>

        <View style={{marginTop:20}}>
        <VStack>
          <HStack>
            <View style={styles.grid}>
            </View>
            <TouchableOpacity style={[styles.grid, {backgroundColor:'white'}]} onPress={() => navigation.navigate('My Jobs')}>
              <Icon name="newspaper-o" size={40} color="black" />
              <Text style={styles.text}>Jobs</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.grid, {backgroundColor:'white'}]} onPress={() => navigation.navigate('Schedule')}>
              <Icon name="calendar" size={40} color="black" />
              <Text style={styles.text}>Schedule</Text>
            </TouchableOpacity>
            <View style={styles.grid}>

            </View>
          </HStack>
          <HStack>
            <View style={styles.grid}>
            </View>
            <TouchableOpacity style={[styles.grid, {backgroundColor:'white'}]} onPress={() => navigation.navigate('Earnings')}>
              <Icon name="line-chart" size={40} color="black" />
              <Text style={styles.text}>Earnings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.grid, {backgroundColor:'white'}]} onPress={() => navigation.navigate('Timer')}>
              <Icon name="clock-o" size={40} color="black" />
              <Text style={styles.text}>Timer</Text>
            </TouchableOpacity>
            <View style={styles.grid}>

            </View>
          </HStack>
        </VStack>
        </View>
      </ScrollView>
    );
}