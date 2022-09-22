import React, { useState, useEffect } from 'react';
import { ActivityIndicator, Button, Flex } from "@react-native-material/core";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux'

export default function UploadImage({dispatchCall, field, button_title}) {
    const [response, setResponse] = useState(null);
    const dispatch = useDispatch()
    const [showButtons, setShowButtons] = useState(false)
    const [loading, setLoading] = useState(false)

    const uploadImg = ( image ) => {
        const data = new FormData()
        data.append('file', image)
        data.append('upload_preset', 'cewqtwou')
        data.append('cloud_name', 'dwnqwem6e')

        fetch("https://api.cloudinary.com/v1_1/dwnqwem6e/image/upload",{
            method:'post',
            body:data
        }).then(res => res.json())
        .then(data => {
            dispatch(dispatchCall({[field]:data.secure_url}))
            setLoading(false)
        })
    }

    useEffect(() => {
        response?.assets.map(({ uri, type, fileName }) => {
            let newfile = {uri, type, name:fileName}
            uploadImg(newfile)
            setLoading(true)
        })
        setShowButtons(false)
    }, [response])
    

    return(
        <Flex style={{justifyContent:'center'}}>
            {loading && <Button title={<ActivityIndicator color="black" />} color="white" />}
            {!showButtons && !loading &&
                <Button 
                    title={button_title} 
                    onPress={() => {
                        if(showButtons){
                            setShowButtons(false)
                        } else {
                            setShowButtons(true)
                        }
                    }}
                    color="white"
                />
            }
            {showButtons &&
            <>
                <Button 
                    title="camera" 
                    onPress={() => {
                        launchCamera({
                            saveToPhotos: true,
                            mediaType: 'photo',
                            includeBase64: false,
                        }, setResponse)
                    }}
                    variant="outlined"
                    color="black"
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
                    variant="outlined"
                    color="black"
                />
            </>
            }
        </Flex>
    )
}

const styles = StyleSheet.create({
    image: {
        marginVertical: 24,
        alignItems: 'center',
    }
})