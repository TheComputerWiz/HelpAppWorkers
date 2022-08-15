import React from 'react'
import { View, ScrollView } from 'react-native';
import { ListItem } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/FontAwesome';

export default function Messages({navigation}) {
    return (
      <View>
        <ScrollView>
          <ListItem 
            leadingMode={'icon'}
            leading={<Icon color='red' name="envelope-open" size={20} />}
            title="Sarah"
            trailing={props => <Icon name="chevron-right" {...props} />} 
            onPress={() => navigation.navigate("Message")}
          />
          <ListItem 
            leadingMode={'icon'}
            leading={<Icon color='red' name="envelope-open" size={20} />}
            title="Sarah"
            trailing={props => <Icon name="chevron-right" {...props} />} 
            onPress={() => navigation.navigate("Message")}
          />
          <ListItem 
            leadingMode={'icon'}
            leading={<Icon color='red' name="envelope-open" size={20} />}
            title="Sarah"
            trailing={props => <Icon name="chevron-right" {...props} />} 
            onPress={() => navigation.navigate("Message")}
          />
          <ListItem 
            leadingMode={'icon'}
            leading={<Icon color='red' name="envelope-open" size={20} />}
            title="Sarah"
            trailing={props => <Icon name="chevron-right" {...props} />} 
            onPress={() => navigation.navigate("Message")}
          />
          <ListItem 
            title="Sarah"
            trailing={props => <Icon name="chevron-right" {...props} />} 
            onPress={() => navigation.navigate("Message")}
          />
          <ListItem 
            title="Sarah"
            trailing={props => <Icon name="chevron-right" {...props} />} 
            onPress={() => navigation.navigate("Message")}
          />
          <ListItem 
            title="Sarah"
            trailing={props => <Icon name="chevron-right" {...props} />} 
            onPress={() => navigation.navigate("Message")}
          />
          <ListItem 
            title="Sarah"
            trailing={props => <Icon name="chevron-right" {...props} />} 
            onPress={() => navigation.navigate("Message")}
          />
          <ListItem 
            title="Sarah"
            trailing={props => <Icon name="chevron-right" {...props} />} 
            onPress={() => navigation.navigate("Message")}
          />
          <ListItem 
            title="Sarah"
            trailing={props => <Icon name="chevron-right" {...props} />} 
            onPress={() => navigation.navigate("Message")}
          />
          <ListItem 
            title="Sarah"
            trailing={props => <Icon name="chevron-right" {...props} />} 
            onPress={() => navigation.navigate("Message")}
          />
          <ListItem 
            title="Sarah"
            trailing={props => <Icon name="chevron-right" {...props} />} 
            onPress={() => navigation.navigate("Message")}
          />
          <ListItem 
            title="Sarah"
            trailing={props => <Icon name="chevron-right" {...props} />} 
            onPress={() => navigation.navigate("Message")}
          />
          <ListItem 
            title="Sarah"
            trailing={props => <Icon name="chevron-right" {...props} />} 
            onPress={() => navigation.navigate("Message")}
          />
        </ScrollView>
      </View>
    );
}