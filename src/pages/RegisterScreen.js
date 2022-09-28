import React, { useState, useEffect } from 'react'
import { ScrollView, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Button, VStack, HStack, TextInput, Text } from "@react-native-material/core";
import { register } from '../redux/auth/authSlice';
import { useDispatch } from 'react-redux'
import CheckBox from '@react-native-community/checkbox';
import DocumentPicker from 'react-native-document-picker';
import { getDataAPI, postDataAPI } from '../utils/apiCalls';
import StringsOfLanguages from '../utils/localizations';
import {Picker} from '@react-native-picker/picker';
import { sendSmsVerification } from '../utils/verify';

export default function RegisterScreen(){
  
  const dispatch = useDispatch()
  const [toggleCheckBox, setToggleCheckBox] = useState(false)
  const [DOBFile, setDOBFile] = useState(null);
  const [certFile, setCertFile] = useState(null);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [password, setPassword] = useState('')
  const [address, setAddress] = useState('')
  const [user, setUser] = useState('')
  const [pageOne, setPageOne] =useState(true)
  const [pageTwo, setPageTwo] =useState(false)
  const [selectedLanguage, setSelectedLanguage] =useState('')
  const formattedValue = /^\+[1-9]\d{1,14}$/
  const [code, setCode] = useState('')
  const [showVerificationCode, setShowVerificationCode]= useState(false)
  const [verification, setVerification] = useState(false)

  const getUsers = async () => {
    const results = await postDataAPI("worker/user/add_user", {name, phone_number:Number(phoneNumber), email, username:email, password, address, language:selectedLanguage})
    setUser(results)
  }

  const handleRegsiter = () => {
    if(!verification){
      Alert.alert('Your phone number is not verified')
      return
    }
    if(!toggleCheckBox){
      Alert.alert(StringsOfLanguages.agree_to_terms_alert)
      return
    }
    getUsers()
  }

  const handlePhoneInput = async() => {
    if(formattedValue.test(phoneNumber)){
      await getDataAPI('verify/'+phoneNumber)
      setShowVerificationCode(true)
    } else {
        return Alert.alert('Your phone number is not formatted correctly.')
    }

  }

  const verifyCode = async() => {
    const res = await getDataAPI('verify/check/'+phoneNumber+"/"+code)
    if(res.status === 'approved'){
      setVerification(true)
    }
  }

  useEffect(() => {
    if(user){
      dispatch(register({name, username:name, phoneNumber, password, address, _id:user._id}))
    }
  }, [user])

  useEffect(() => {
    console.log(typeof Number(phoneNumber))
  }, [phoneNumber])
  
  

  const uploadImage = async (filetype) => {
    // Check if any file is selected or not
    if (filetype === 'DOBFile' ? DOBFile : certFile != null) {
      // If file selected then create FormData
      const fileToUpload = filetype === 'DOBFile' ? DOBFile : certFile;
      const data = new FormData();
      data.append('name', 'Image Upload');
      data.append('file_attachment', fileToUpload);
      // Please change file upload URL
      let res = await fetch(
        'http://localhost/upload.php',
        {
          method: 'post',
          body: data,
          headers: {
            'Content-Type': 'multipart/form-data; ',
          },
        }
      );
      let responseJson = await res.json();
      if (responseJson.status == 1) {
        alert(StringsOfLanguages.upload_success);
      }
    } else {
      // If no file selected the show alert
      alert(StringsOfLanguages.select_file_first);
    }
  };
 
  const selectFile = async (filetype) => {
    // Opening Document Picker to select one file
    try {
      const res = await DocumentPicker.pick({
        // Provide which type of file you want user to pick
        type: [DocumentPicker.types.allFiles],
        // There can me more options as well
        // DocumentPicker.types.allFiles
        // DocumentPicker.types.images
        // DocumentPicker.types.plainText
        // DocumentPicker.types.audio
        // DocumentPicker.types.pdf
      });
      // Printing the log realted to the file
      console.log('res : ' + JSON.stringify(res));
      // Setting the state to show single file attributes
      filetype === 'DOBFile' ? setDOBFile(res) : setCertFile(res);
    } catch (err) {
      filetype === 'DOBFile' ? setDOBFile(res) : setCertFile(res);
      // Handling any exception (If any)
      if (DocumentPicker.isCancel(err)) {
        // If user canceled the document selection
        alert('Canceled');
      } else {
        // For Unknown Error
        alert('Unknown Error: ' + JSON.stringify(err));
        throw err;
      }
    }
  };
  
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
      marginTop:20
    },
  })

    return (
        <ScrollView>
          {pageOne &&
          <>
           <Text style={{fontSize:20, textAlign:'center', marginTop:30}}>{StringsOfLanguages.choose_language}</Text>
            <View style={{borderColor:'black', borderWidth:1, marginTop:20, margin:30}}>
              <Picker
                selectedValue={selectedLanguage}
                onValueChange={(itemValue, itemIndex) => {
                  setSelectedLanguage(itemValue)
                  setPageOne(false)
                  setPageTwo(true)
                  console.log(itemValue)
                  StringsOfLanguages.setLanguage(itemValue)
                }}
                style={{color:'black', backgroundColor:"white"}}
                dropdownIconColor="black"
              >
                <Picker.Item label={StringsOfLanguages.choose_one} value="none" />
                <Picker.Item label="English" value="en" />
                <Picker.Item label="French" value="fr" />
                <Picker.Item label="Arabic" value="ar" />
              </Picker>
            </View>
          </>
          }
          {pageTwo &&
          <>
            <HStack>
              <View style={styles.box}></View>
              <View style={styles.box}>
                <Image style={styles.logo} source={require('../../assets/images/logo.png')} />
              </View>
              <View style={styles.box}></View>
            </HStack>
            <Text style={{textAlign:'center', fontSize:60}}>{StringsOfLanguages.HELP}</Text>
            <Text style={{textAlign:'center', fontSize:20}}>{StringsOfLanguages.register}</Text>
            <VStack>
              <View style={{margin:50, marginBottom:50, marginTop:10}}>
                <TextInput color='black' variant="outlined" label={StringsOfLanguages.full_name} onChangeText={(value) => setName(value)} style={{ margin: 6 }} value={name} />
                {!verification && 
                  <TextInput color='black' variant="outlined" tyle="tel" label={StringsOfLanguages.phone_number} onChangeText={(value) => setPhoneNumber(value)} style={{ margin: 6 }} value={phoneNumber} placeholder="+10000000" />
                }

                {showVerificationCode && !verification &&
                  <TextInput color='black' variant="outlined" label={StringsOfLanguages.code} onChangeText={(value) => setCode(value)} style={{ margin: 6 }} value={code} />
                }

                {!showVerificationCode && !verification &&
                <Button 
                  onPress={handlePhoneInput}
                  title="Verify Phone Number"
                />
                }

                {showVerificationCode && !verification &&
                <Button 
                  onPress={verifyCode}
                  title="Submit Verification Code"
                />
                }

                {verification && 
                <Button 
                  title={verification ? "Successful verification" : "Not able to verify"}
                />
                }

                <TextInput color='black' variant="outlined" label={StringsOfLanguages.email} onChangeText={(value) => setEmail(value)} style={{ margin: 6 }} value={email} />
                <TextInput color='black' variant="outlined" label={StringsOfLanguages.password} onChangeText={(value) => setPassword(value)} style={{ margin: 6 }} value={password} />
                <TextInput color='black' variant="outlined" label={StringsOfLanguages.address} onChangeText={(value) => setAddress(value)} style={{ margin: 6 }} value={address} />
                {DOBFile != null ? (
                  <Text>
                    {StringsOfLanguages.file_name}: {DOBFile[0].name ? DOBFile[0].name : ''}
                    {'\n'}
                    {StringsOfLanguages.type}: {DOBFile[0].type ? DOBFile[0].type : ''}
                    {'\n'}
                    {StringsOfLanguages.file_size}: {DOBFile[0].size ? DOBFile[0].size : ''}
                    {'\n'}
                    {StringsOfLanguages.uri}: {DOBFile[0].uri ? DOBFile[0].uri : ''}
                    {'\n'}
                  </Text>
                ) : null}
                {!DOBFile ?
                <>
                <Text style={{textAlign:'center'}}>D.O.B</Text>
                <Button 
                  title={StringsOfLanguages.select_dob}
                  onPress={() => selectFile('DOBFile')} 
                  color='black'
                />
                </>
                :
                DOBFile.length > 1 ?
                <Button 
                  title={StringsOfLanguages.upload} 
                  onPress={() => uploadImage('DOBFile')} 
                />
                :
                <Text>DOB {StringsOfLanguages.upload}</Text>
                }
                {<Text></Text>}
                {certFile != null ? (
                  <Text>
                    {StringsOfLanguages.file_name}: {certFile[0].name ? certFile[0].name : ''}
                    {'\n'}
                    {StringsOfLanguages.type}: {certFile[0].type ? certFile[0].type : ''}
                    {'\n'}
                    {StringsOfLanguages.file_size}: {certFile[0].size ? certFile[0].size : ''}
                    {'\n'}
                    {StringsOfLanguages.uri}: {certFile[0].uri ? certFile[0].uri : ''}
                    {'\n'}
                  </Text>
                ) : null}
                {!certFile ?
                <>
                <Text style={{textAlign:'center'}}>{StringsOfLanguages.ID_police_cert}</Text>
                <Button 
                  title={StringsOfLanguages.select_files} 
                  onPress={() => selectFile('certFile')} 
                  color='black'
                />
                </>
                :
                certFile.length > 1 ?
                <Button 
                  title={StringsOfLanguages.upload_files}  
                  onPress={() => uploadImage('certFile')} 
                />
                :
                <Text>{StringsOfLanguages.ID_police_cert_uploaded}</Text>
                }
                <CheckBox
                  disabled={false}
                  value={toggleCheckBox}
                  onValueChange={(newValue) => setToggleCheckBox(newValue)}
                  style={styles.checkbox}
                  lineWidth={2}
                  hideBox={false}
                  tintColors={'#9E663C'}
                />
                <Text style={{textAlign:'center', color:'black', fontSize:15, marginBottom:20}}>{StringsOfLanguages.agree_to_terms}</Text>
                <Button color="black" title={StringsOfLanguages.create_account} style={{padding:10, marginTop:20}} onPress={handleRegsiter} />
              </View>
            </VStack>
          </>
          }
        </ScrollView>
    )
}