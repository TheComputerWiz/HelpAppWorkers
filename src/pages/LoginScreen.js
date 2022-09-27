import React, { useState, useEffect } from 'react';
import { ScrollView, View, StyleSheet, Image, Dimensions } from 'react-native';
import { Button, VStack, HStack, TextInput, Switch, ListItem, Text } from "@react-native-material/core";
import {Picker} from '@react-native-picker/picker';
import { useDispatch } from 'react-redux'
import { login } from '../redux/auth/authSlice';
import { getAllKeys, getMyObject, removeValue, setObjectValue } from '../utils/deviceStorage';
import { postDataAPI } from '../utils/apiCalls'
import StringsOfLanguages from '../utils/localizations';

export default function LoginScreen({navigation}) {
    const dispatch = useDispatch()

    const [selectedLanguage, setSelectedLanguage] = useState();
    const [checked, setChecked] = useState(true);
    const [pageOne, setPageOne] = useState(true)
    const [pageTwo, setPageTwo] = useState(false)
    const [pageThree, setPageThree] = useState(false)
    const windowWidth = Dimensions.get('window').width;
    const [tryLoggingIn, setTryLoggingIn] = useState(false)

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const getValue = async () => {
      const res = await getMyObject('authLogin')
      const {email, password} = res
      setUsername(email)
      setPassword(password)
      handleSignIn()
    }

    const getAllLocalKeys = async() => {
      const allKeys = await getAllKeys()
      allKeys.filter((item) => {
        if(item === 'authLogin'){
          setTryLoggingIn(true)
        }
      })
    }

    useEffect(() => {
      getAllLocalKeys()
      if(tryLoggingIn){
        getValue()
      }
    }, [tryLoggingIn, password])
    
  
    const handleSignIn = async () => {
      const data = await postDataAPI("worker/user/login", { email:username.toLowerCase(), password })
      const user = Object.values(data)[0].user
      dispatch(login({_id: user._id, name:user.name, username: user.name, token:user.token, avatar:user.avatar, example_of_work_images: user.example_of_work_images, language:user.language }))
      setObjectValue('authLogin', { email:username.toLowerCase(), password })
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
            <Text style={{fontSize:50, fontFamily:'sans-serif'}}>{StringsOfLanguages.HELP}</Text>
          </View>
          {pageOne &&
          <>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:50 }}>
              <Text style={{fontSize:18, fontWeight:'bold'}}>{StringsOfLanguages.homepage_title}</Text>
              <Text style={{fontSize:13}}>{StringsOfLanguages.homepage_sentence_one}</Text>
              <Text style={{fontSize:13}}>{StringsOfLanguages.homepage_sentence_two}</Text>
              
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop:25, marginBottom:25 }}>
              <Button color="white" title={StringsOfLanguages.get_started} onPress={() => {
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
                  console.log(itemValue)
                  StringsOfLanguages.setLanguage(itemValue)
                }}
                style={{color:'black', backgroundColor:"white"}}
                dropdownIconColor="black"
              >
                <Picker.Item label="Choose one..." value="none" />
                <Picker.Item label="English" value="en" />
                <Picker.Item label="French" value="fr" />
                <Picker.Item label="Arabic" value="ar" />
              </Picker>
            </View>
          </>
          }
          
          {pageThree &&
          <>
            <Text style={{fontSize:20, textAlign:'center', marginTop:30}}>{StringsOfLanguages.login_signup}</Text>
            <View style={{ margin: 16, marginRight:50, marginLeft:50 }}>
              <TextInput variant="outlined" label={StringsOfLanguages.email_phone} onChangeText={(value) => setUsername(value)} value={username} />
              <TextInput variant="outlined" secureTextEntry={true} label={StringsOfLanguages.password} style={{ marginTop:10 }} onChangeText={(value) => setPassword(value)} value={password} />
            </View>
            <View style={{margin:50, marginBottom:0, marginTop:0}}>
              <View style={{flexDirection:'row'}}>
                <Switch value={checked} onValueChange={() => setChecked(!checked)} />
                <Text>{StringsOfLanguages.remember_me}</Text>
              </View>
              
              <Button 
                style={{marginTop:30}} 
                color="black" 
                title={StringsOfLanguages.sign_in} 
                onPress={handleSignIn}
              />
            </View>
            <Text style={[styles.text, {color:'black', textAlign:'center', marginTop:20}]}>{StringsOfLanguages.forgot_password}</Text>
            <View style={{backgroundColor:'black', padding:50, marginTop:30, paddingBottom:70}}>
              <View>
                <Text style={{textAlign:'center', color:'white', fontSize:20}}>
                  {StringsOfLanguages.no_account}
                </Text>
                <Button 
                  style={{marginTop:30}} 
                  color="white" 
                  variant='outlined' 
                  title={StringsOfLanguages.create_account}
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