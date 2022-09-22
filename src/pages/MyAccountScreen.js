import React, { useEffect, useState } from 'react'
import { ListItem, Text, Banner, Button, Flex, Avatar, HStack, VStack, TextInput } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/FontAwesome';
import { Image, ScrollView, StyleSheet, View } from 'react-native';
import { logout } from '../redux/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'
import { update } from '../redux/auth/authSlice';
import UploadImage from '../components/UploadImage';
import { patchDataAPI } from '../utils/apiCalls';

export default function MyAccountScreen() {
  const auth = useSelector((state) => state.auth)
  const certifiedLabel = <Icon name="star" />
  const dispatch = useDispatch()

  const [edit, setEdit] = useState(false)
  const [name, setName] = useState(auth.data.name)

  const handleSave = async() => {
    //dispatch(update({name}))
    const local = await patchDataAPI("worker/user/update_user", {_id:auth.data._id, avatar:auth.data.avatar, example_of_work_images:auth.data.example_of_work_images}, {"x-access-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjMyYTFhM2Q4MTBkN2Y2YjllZmY5YTYxIiwiZW1haWwiOiJFbWFpbCAiLCJpYXQiOjE2NjM3MDM2MTMsImV4cCI6MTY2MzcxMDgxM30.36vCCJgJv3hFOHp6F1oYi51loXb_4B4hNLn9CaLN4UY"})
    setEdit(false)
  }
  
  const styles = StyleSheet.create({
    marginTop:{
      marginTop:10
    },
    image:{
      height:100,
      width:100,
      borderColor:'black',
      borderWidth:1
    }
  })
    return (
      <ScrollView>
      {edit ?
      <Flex fill >
        <View style={{margin:20, marginBottom:0}}>
          <View style={{alignItems:'flex-start'}}>
            <Button title="Save" color='orange' onPress={handleSave} />
          </View>
          <View style={{alignItems:'flex-end', top:-35}}>
            <Button title="Log out" color='#e2202c' onPress={() => dispatch(logout())} />
          </View>
        </View>
        <Flex fill style={{alignItems:'center'}}>
          <HStack>
            <Avatar size={130} image={{ uri: auth.data.avatar }} />
          </HStack>
          <HStack>
            <UploadImage dispatchCall={update} field='avatar' button_title="Change profile image" />
          </HStack>
          <HStack style={styles.marginTop}>
            <Button title='Certified' color="black" />
          </HStack>
          <VStack style={{width:200}}>
            <TextInput label="name" placeholder={name} value={name} onChangeText={(value) => setName(value)} />
          </VStack>
          <HStack style={styles.marginTop}>
            <ScrollView horizontal={true}>
              {auth.data.example_of_work_images && auth.data.example_of_work_images.map((item, index) => <Image key={index} style={styles.image} source={{uri:item}} />)}
            </ScrollView>
          </HStack>
          <HStack>
            <UploadImage dispatchCall={update} field='example_of_work_images' button_title="Upload job photos" />
          </HStack>
          <HStack style={styles.marginTop}>
            <Icon color={'black'} size={30} name="star" />
            <Icon color={'black'} size={30} name="star" />
            <Icon color={'black'} size={30} name="star" />
            <Icon color={'black'} size={30} name="star" />
            <Icon color={'black'} size={30} name="star-half-o" />
          </HStack>
          <ScrollView>
            <VStack style={styles.marginTop}>
              <Banner
                text="This is a review. I really enjoyed working with this guy. He was really fast"
                style={{width:200}}
              />
              <Banner
                text="This is a review. I really enjoyed working with this guy. He was really fast"
                style={{width:200}}
              />
              <Banner
                text="This is a review. I really enjoyed working with this guy. He was really fast"
                style={{width:200}}
              />
              <Banner
                text="This is a review. I really enjoyed working with this guy. He was really fast"
                style={{width:200}}
              />
              <Banner
                text="This is a review. I really enjoyed working with this guy. He was really fast"
                style={{width:200}}
              />
            </VStack>
          </ScrollView>
        </Flex>
      </Flex>
      :
      <Flex fill >
        <View style={{margin:20, marginBottom:0}}>
          <View style={{alignItems:'flex-start'}}>
            <Button title="Edit" color='green' onPress={() => setEdit(true)} />
          </View>
          <View style={{alignItems:'flex-end', top:-35}}>
            <Button title="Log out" color='#e2202c' onPress={() => dispatch(logout())} />
          </View>
        </View>
        <Flex fill style={{alignItems:'center'}}>
          <HStack>
            <Avatar size={130} image={{ uri: auth.data.avatar }} />
          </HStack>
          <HStack style={styles.marginTop}>
            <Button title='Certified' color="black" />
          </HStack>
          <HStack style={styles.marginTop}>
            <Text>{auth.data.name}</Text>
          </HStack>
          <HStack style={styles.marginTop}>
            <ScrollView horizontal={true}>
              {auth.data.example_of_work_images && auth.data.example_of_work_images.map((item, index) => <Image key={index} style={styles.image} source={{uri:item}} />)}
            </ScrollView>
          </HStack>
          <HStack style={styles.marginTop}>
            <Icon color={'black'} size={30} name="star" />
            <Icon color={'black'} size={30} name="star" />
            <Icon color={'black'} size={30} name="star" />
            <Icon color={'black'} size={30} name="star" />
            <Icon color={'black'} size={30} name="star-half-o" />
          </HStack>
          <ScrollView>
            <VStack style={styles.marginTop}>
              <Banner
                text="This is a review. I really enjoyed working with this guy. He was really fast"
                style={{width:200}}
              />
              <Banner
                text="This is a review. I really enjoyed working with this guy. He was really fast"
                style={{width:200}}
              />
              <Banner
                text="This is a review. I really enjoyed working with this guy. He was really fast"
                style={{width:200}}
              />
              <Banner
                text="This is a review. I really enjoyed working with this guy. He was really fast"
                style={{width:200}}
              />
              <Banner
                text="This is a review. I really enjoyed working with this guy. He was really fast"
                style={{width:200}}
              />
            </VStack>
          </ScrollView>
        </Flex>
      </Flex>
      }
      </ScrollView>
    );
}