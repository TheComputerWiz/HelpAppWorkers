import AsyncStorage from '@react-native-async-storage/async-storage';

export const getMyStringValue = async (key) => {
    try {
      return await AsyncStorage.getItem(key)
    } catch(e) {
      // read error
      return(e)
    }
}

export const getMyObject = async (value) => {
    try {
        const jsonValue = await AsyncStorage.getItem(value)
        return jsonValue != null ? JSON.parse(jsonValue) : null
    } catch(e) {
        // read error
        return(e)
    }
}

export const setStringValue = async (key, value) => {
    try {
      return await AsyncStorage.setItem(key, value)
    } catch(e) {
      // save error
        return(e)
    }
}

export const setObjectValue = async (key, value) => {
    try {
      const jsonValue = JSON.stringify(value)
      return await AsyncStorage.setItem(key, jsonValue)
    } catch(e) {
      // save error
        return(e)
    }  
}

export const removeValue = async (value) => {
    try {
      return await AsyncStorage.removeItem(value)
    } catch(e) {
      // remove error
        return(e)
    }
}

export const getAllKeys = async () => {
    let keys = []
    try {
      keys = await AsyncStorage.getAllKeys()
    } catch(e) {
      // read key error
    }
  
    console.log(keys)
    return(keys)
    // example console.log result:
    // ['@MyApp_user', '@MyApp_key']
}