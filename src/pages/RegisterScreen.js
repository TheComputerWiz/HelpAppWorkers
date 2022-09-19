import React, { useState, useEffect } from 'react'
import { ScrollView, View, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import { Button, VStack, HStack, TextInput, Text } from "@react-native-material/core";
import { register } from '../redux/auth/authSlice';
import { useDispatch } from 'react-redux'
import CheckBox from '@react-native-community/checkbox';
import DocumentPicker from 'react-native-document-picker';
import { postDataAPI } from '../utils/apiCalls';

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

  const getUsers = async () => {
    const results = await postDataAPI("worker/user/add_user", {name, phone_number:Number(phoneNumber), email, username:email, password, address})
    setUser(results)
  }

  const handleRegsiter = () => {
    if(!toggleCheckBox){
      Alert.alert('You must agree to terms and conditions')
      return
    }
    getUsers()
  }

  useEffect(() => {
    console.log(user._id)
    if(user){
      dispatch(register({name, username:name, phoneNumber, password, address, _id:user._id}))
    }
  }, [user])
  

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
        alert('Upload Successful');
      }
    } else {
      // If no file selected the show alert
      alert('Please Select File first');
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
              <TextInput color='black' variant="outlined" label="Full Name" onChangeText={(value) => setName(value)} style={{ margin: 6 }} value={name} />
              <TextInput color='black' variant="outlined" label="Phone Number" onChangeText={(value) => setPhoneNumber(value)} style={{ margin: 6 }} value={phoneNumber} />
              <TextInput color='black' variant="outlined" label="Email" onChangeText={(value) => setEmail(value)} style={{ margin: 6 }} value={email} />
              <TextInput color='black' variant="outlined" label="Password" onChangeText={(value) => setPassword(value)} style={{ margin: 6 }} value={password} />
              <TextInput color='black' variant="outlined" label="Address" onChangeText={(value) => setAddress(value)} style={{ margin: 6 }} value={address} />
              {DOBFile != null ? (
                <Text>
                  File Name: {DOBFile[0].name ? DOBFile[0].name : ''}
                  {'\n'}
                  Type: {DOBFile[0].type ? DOBFile[0].type : ''}
                  {'\n'}
                  File Size: {DOBFile[0].size ? DOBFile[0].size : ''}
                  {'\n'}
                  URI: {DOBFile[0].uri ? DOBFile[0].uri : ''}
                  {'\n'}
                </Text>
              ) : null}
              {!DOBFile ?
              <>
              <Text style={{textAlign:'center'}}>D.O.B</Text>
              <Button 
                title="Select DOB file" 
                onPress={() => selectFile('DOBFile')} 
                color='black'
              />
              </>
              :
              DOBFile.length > 1 ?
              <Button 
                title="Upload DOB" 
                onPress={() => uploadImage('DOBFile')} 
              />
              :
              <Text>DOB Uploaded</Text>
              }
              {<Text></Text>}
              {certFile != null ? (
                <Text>
                  File Name: {certFile[0].name ? certFile[0].name : ''}
                  {'\n'}
                  Type: {certFile[0].type ? certFile[0].type : ''}
                  {'\n'}
                  File Size: {certFile[0].size ? certFile[0].size : ''}
                  {'\n'}
                  URI: {certFile[0].uri ? certFile[0].uri : ''}
                  {'\n'}
                </Text>
              ) : null}
              {!certFile ?
              <>
              <Text style={{textAlign:'center'}}>I.D. / Police Report / Certification</Text>
              <Button 
                title="Select Files" 
                onPress={() => selectFile('certFile')} 
                color='black'
              />
              </>
              :
              certFile.length > 1 ?
              <Button 
                title="Upload Files" 
                onPress={() => uploadImage('certFile')} 
              />
              :
              <Text>I.D. / Police Report / Certification Uploaded</Text>
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
              <Text style={{textAlign:'center', color:'black', fontSize:15, marginBottom:20}}>I agree to terms and conditions</Text>
              <Button color="black" title="CREATE AN ACCOUNT" style={{padding:10, marginTop:20}} onPress={handleRegsiter} />
            </View>
          </VStack>
        </ScrollView>
    )
}