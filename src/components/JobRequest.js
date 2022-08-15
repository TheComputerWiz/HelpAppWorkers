import React, {useState} from 'react'
import { Button, Flex, Banner, Text, TextInput, Switch, ListItem } from "@react-native-material/core";
import { ScrollView, View, Image, StyleSheet } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';

export default function JobRequest({navigation}) {
  const [hourly, setHourly] = useState(25)
  const styles = StyleSheet.create({ 
    image:{
      height:100,
      width:100,
      borderColor:'black',
      borderWidth:1
    }
  })
    return (
      <Flex fill>
        <View style={{margin:20}}>
          <View style={{alignItems:'flex-start'}}>
            <Button title="Message" color='green' onPress={() => navigation.navigate("Message")} />
          </View>
          <View style={{alignItems:'flex-end', top:-35}}>
            <Button title="Reject" color='#e2202c' />
          </View>
        </View>
        <Flex fill>
          
          <Text style={{textAlign:'center'}}>Sarah Holmes</Text>
          <Text style={{textAlign:'center'}}>sarah@holmes.com</Text>
          <Text style={{textAlign:'center', marginBottom:20}}>123 Address, State, County, Zip code</Text>
          
          <Text style={{fontWeight:'bold'}}>Job Images</Text>
          <ScrollView horizontal={true} style={{height:200}}>
            <Image style={styles.image} source={{uri:"https://i1.wp.com/lanecdr.org/wp-content/uploads/2019/08/placeholder.png?"}} />
            <Image style={styles.image} source={{uri:"https://i1.wp.com/lanecdr.org/wp-content/uploads/2019/08/placeholder.png?"}} />
            <Image style={styles.image} source={{uri:"https://i1.wp.com/lanecdr.org/wp-content/uploads/2019/08/placeholder.png?"}} />
            <Image style={styles.image} source={{uri:"https://i1.wp.com/lanecdr.org/wp-content/uploads/2019/08/placeholder.png?"}} />
            <Image style={styles.image} source={{uri:"https://i1.wp.com/lanecdr.org/wp-content/uploads/2019/08/placeholder.png?"}} />
          </ScrollView>

          
          <ScrollView style={{marginBottom:20, marginRight:50, marginLeft:50}}>

            <Banner
              text="I need my sink fixed, as you see in the pictures there are a lot of leaks.
              I need my sink fixed, as you see in the pictures there are a lot of leaks.
              I need my sink fixed, as you see in the pictures there are a lot of leaks."
            />

            <View style={{padding:20}}>

                <Text>Hourly / ${hourly}{'{currency}'}</Text>

                <MultiSlider
                  min={20}
                  max={35}
                  step={1}
                  sliderLength={250}
                  values={[hourly]}
                  onValuesChange={(value) => setHourly(value)}
                />

            </View>

            <Button title="Accept Job" color="#1eaaf1" />

          </ScrollView>


        </Flex>

      </Flex>
    );
}