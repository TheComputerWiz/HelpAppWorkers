import React, { useState } from 'react';
import { ScrollView, View, StyleSheet, Image, Dimensions } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import { Button, VStack, HStack, TextInput, Switch, ListItem, Text } from "@react-native-material/core";
import {Picker} from '@react-native-picker/picker';
import { useDispatch } from 'react-redux'
import { login } from '../redux/auth/authSlice';

export default function LoginScreen({navigation}) {
    const dispatch = useDispatch()

    const [selectedLanguage, setSelectedLanguage] = useState();
    const [checked, setChecked] = useState(true);
    const [pageOne, setPageOne] = useState(true)
    const [pageTwo, setPageTwo] = useState(false)
    const [pageThree, setPageThree] = useState(false)
    const windowWidth = Dimensions.get('window').width;

    const [username, setUsername] = useState('Email or Phone number')
    const [password, setPassword] = useState('Password')
  
    const handleSignIn = async () => {
      dispatch(login({username}))
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
      middleAlign: {
        justifyContent: 'center', //Centered horizontally
        alignItems: 'center', //Centered vertically
      },
      logo: {
        width:100,
        height:100
      },
      footerImage :{
        width:windowWidth,
        height:250
      }
    })

    return (
      <ScrollView>
        <VStack>
          <VStack>
            <HStack>
              <View style={styles.box}></View>
              <View style={styles.box}>
                <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
              </View>
              <View style={styles.box}></View>
            </HStack>
          </VStack>
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{fontSize:50, fontFamily:'sans-serif'}}>HELP</Text>
          </View>
          {pageOne &&
          <>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:50 }}>
              <Text style={{fontSize:18, fontWeight:'bold'}}>Looking for a professional handyman?</Text>
              <Text style={{fontSize:13}}>Quality handyman service you can trust.</Text>
              <Text style={{fontSize:13}}>Moving, cleaning, mounting, gardening and more</Text>
              
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:25, marginBottom:25 }}>
              <Button color="white" title="Get Started" onPress={() => {
                setPageOne(false)
                setPageTwo(true)
              }} />
            </View>

            <View style={[styles.middleAlign, {backgroundColor:'lightgray', height:250, marginTop:10}]}>
              <Image style={styles.footerImage} source={require('../../assets/images/construction-worker.jpg')} />
            </View>
          </>
          }
          
          {pageTwo &&
          <>
            <Text style={{fontSize:20, textAlign:'center', marginTop:30}}>CHOOSE A LANGUAGE</Text>
            <View style={{borderColor:'black', borderWidth:1, marginTop:20, margin:30}}>
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) => {
                  setSelectedLanguage(itemValue)
                  setPageTwo(false)
                  setPageThree(true)
                }}
                style={{color:'black', backgroundColor:"white"}}
                dropdownIconColor="black"
              >
                <Picker.Item label="Choose one..." value="none" />
                <Picker.Item label="English" value="english" />
                <Picker.Item label="French" value="french" />
                <Picker.Item label="Arabic" value="arabic" />
              </Picker>
            </View>
          </>
          }
          
          {pageThree &&
          <>
            <Text style={{fontSize:20, textAlign:'center', marginTop:30}}>LOGIN OR SIGNUP</Text>
            <View style={{ margin: 16, marginRight:50, marginLeft:50 }}>
              <TextInput variant="outlined" label="Email or Phone number" onChangeText={(value) => setUsername(value)} value={username} />
              <TextInput variant="outlined" label="Password" style={{ marginTop:10 }} onChangeText={(value) => setPassword(value)} value={password} />
            </View>
            <View style={{margin:50, marginBottom:0, marginTop:0}}>
              <View style={{flexDirection:'row'}}>
                <Switch value={checked} onValueChange={() => setChecked(!checked)} />
                <Text>Remember me</Text>
              </View>
              
              <Button 
                style={{marginTop:30}} 
                color="black" 
                title="SIGN ME IN" 
                onPress={handleSignIn}
              />
            </View>
            <Text style={[styles.text, {color:'black', textAlign:'center', marginTop:20}]}>Forgot your password? Tap to get it!</Text>
            <View style={{backgroundColor:'black', padding:50, marginTop:30, paddingBottom:70}}>
              <View>
                <Text style={{textAlign:'center', color:'white', fontSize:20}}>
                  Don't have an account?
                </Text>
                <Button 
                  style={{marginTop:30}} 
                  color="white" 
                  variant='outlined' 
                  title="CREATE NEW ACCOUNT" 
                  onPress={() => navigation.navigate("Register")}
                />
              </View>
            </View>
          </>
          }
  
        </VStack>
      </ScrollView>
    );
}