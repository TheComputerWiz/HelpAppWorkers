import React, { useState, useEffect } from 'react';
import { Button, Flex, Text } from "@react-native-material/core";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { Image, StyleSheet } from 'react-native';
import { register, update } from '../redux/auth/authSlice';
import { useDispatch } from 'react-redux'

export default function UploadImage({dispatchCall, field}) {
    const [response, setResponse] = useState(null);
    const dispatch = useDispatch()

    useEffect(() => {
        response?.assets.map(({ uri }) => (
            dispatch(dispatchCall({[field]:uri}))
        ))
    }, [response])
    

    return(
        <Flex>
            <Button 
                title="camera" 
                onPress={() => {
                    launchCamera({
                        saveToPhotos: true,
                        mediaType: 'photo',
                        includeBase64: false,
                    }, setResponse)
                }}
            />
            
            <Button 
                title="Image Libraray" 
                onPress={() => {
                    launchImageLibrary({
                        selectionLimit: 0,
                        mediaType: 'photo',
                        includeBase64: false,
                    }, setResponse)
                }} 
            />
        </Flex>
    )
}

const styles = StyleSheet.create({
    image: {
        marginVertical: 24,
        alignItems: 'center',
    }
})