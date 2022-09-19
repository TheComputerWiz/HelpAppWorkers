import React, { useState, useEffect } from 'react'
import { TextInput } from "@react-native-material/core";
import { Text } from '@react-native-material/core'
import Icon from 'react-native-vector-icons/FontAwesome';
import { create } from '../redux/message/messageSlice';
import { useDispatch, useSelector } from 'react-redux'
import Voice from '@react-native-community/voice';


const TalkToText = ({messageValue}) => {
    const dispatch = useDispatch()
  
    const [messageInput, setMessageInput] = useState('')
  
    const [pitch, setPitch] = useState('');
    const [error, setError] = useState('');
    const [end, setEnd] = useState('');
    const [started, setStarted] = useState('');
    const [results, setResults] = useState([]);
    const [partialResults, setPartialResults] = useState([]);
  
    const [micOn, setMicOn] = useState(false)
  
    const  onSpeechStart = (e) => {
      setStarted('True')
    };
    const onSpeechEnd = () => {
        setStarted(null);
        setEnd('True');
    };
    const onSpeechError = (e) => {
        setError(JSON.stringify(e.error));
    };
    const onSpeechResults = (e) => {
        setResults(e.value)
        setMessageInput(e.value)
    };
    const onSpeechPartialResults = (e) => {
        setPartialResults(e.value)
    };
    const onSpeechVolumeChanged = (e) => {
        setPitch(e.value)
    };
  
    useEffect(() => {
      Voice.onSpeechStart = onSpeechStart;
      Voice.onSpeechEnd = onSpeechEnd;
      Voice.onSpeechError = onSpeechError;
      Voice.onSpeechResults = onSpeechResults;
      Voice.onSpeechPartialResults = onSpeechPartialResults;
      Voice.onSpeechVolumeChanged = onSpeechVolumeChanged;
    }, [])
  
    const startSpeechRecognizing = async () => {
      setPitch('')
      setError('')
      setStarted('')
      setResults([])
      setPartialResults([])
      setEnd('')
      setMicOn(true)
      try {
          await Voice.start('en-US');
          } catch (e) {
          console.error(e);
          }
    };
    
    const stopSpeechRecognizing = async () => {
      setMicOn(false)
        try {
          await Voice.stop();
          setStarted(null);
        } catch (e) {
          console.error(e);
        }
    };
    
  
    const handleMessage = () => {
      dispatch(create({messageInput:[messageInput]}))
    }
    return (
        
        <TextInput
        leadingMode="icon"
        leading={props => <Icon name={!micOn ? "microphone" : "stop"} color={!micOn && 'red'} {...props} onPress={!micOn ? startSpeechRecognizing : stopSpeechRecognizing } />}
        label="Enter Text"
        onChangeText={(value) => setMessageInput(value)}
        value={messageInput[0] }
        trailing={props => <Icon name="send" {...props} onPress={handleMessage} />}
      />
    )
}

export default TalkToText;