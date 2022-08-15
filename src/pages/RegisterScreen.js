import React, { useState } from 'react'
import { ScrollView, View, StyleSheet, Image } from 'react-native';
import { Button, VStack, HStack, TextInput, Text } from "@react-native-material/core";
import { register } from '../redux/auth/authSlice';
import { useDispatch } from 'react-redux'
import CheckBox from '@react-native-community/checkbox';

export default function RegisterScreen(){
  
  const dispatch = useDispatch()
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [name, setName] = useState('')
  const [username, setUsername] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')

  const handleRegsiter = () => {
    dispatch(register({name, username, phoneNumber, password}))
  }
  
  const styles = StyleSheet.create({
    box : {
      height:100,
      width:'33%',
      justifyContent: 'center', //Centered horizontally
      alignItems: 'center', //Centered vertically
      flex:1,
      margin:10
    },
    text: {
      color:'black',
    },
    middleAlign: {
      justifyContent: 'center', //Centered horizontally
      alignItems: 'center', //Centered vertically
    },
    logo: {
      width:100,
      height:100,
    },
    checkbox: {
      alignSelf: "center",
    },
  })

    return (
        <ScrollView>
          
          <HStack>
            <View style={styles.box}></View>
            <View style={styles.box}>
              <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
            </View>
            <View style={styles.box}></View>
          </HStack>
          <Text style={{textAlign:'center', fontSize:60}}>HELP</Text>
          <Text style={{textAlign:'center', fontSize:20}}>REGISTER HERE</Text>
          <VStack>
            <View style={{margin:50, marginBottom:50, marginTop:10}}>
              <TextInput variant="outlined" label="Full Name" onChangeText={(value) => setName(value)} style={{ margin: 6 }} value={name} />
              <TextInput variant="outlined" label="Phone Number" onChangeText={(value) => setPhoneNumber(value)} style={{ margin: 6 }} value={phoneNumber} />
              <TextInput variant="outlined" label="Email" onChangeText={(value) => setUsername(value)} style={{ margin: 6 }} value={username} />
              <TextInput variant="outlined" label="Password" onChangeText={(value) => setPassword(value)} style={{ margin: 6 }} value={password} />
              <TextInput variant="outlined" label="Address" style={{ margin: 6 }} />
              <TextInput variant="standard" label="DOB" style={{ margin: 6 }} />
              <TextInput variant="standard" label="I.D. / Police Report / Certification" style={{ margin: 6 }} />
              <CheckBox
                disabled={false}
                value={toggleCheckBox}
                onValueChange={(newValue) => setToggleCheckBox(newValue)}
                style={styles.checkbox}
                tintColor={"red"}
                onCheckColor={"red"}
                onFillColor={"red"}
                onTintColor={"red"}
              />
              <Text style={{textAlign:'center', color:'black', fontSize:15, marginTop:20, marginBottom:20}}>I agree to terms and conditions</Text>
              <Button color="black" title="CREATE AN ACCOUNT" style={{padding:10, marginTop:20}} onPress={handleRegsiter} />
            </View>
          </VStack>
        </ScrollView>
    )
}