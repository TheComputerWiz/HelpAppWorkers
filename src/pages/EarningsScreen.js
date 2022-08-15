import React from 'react'
import { Flex, Text, ListItem, Avatar } from "@react-native-material/core";
import { ScrollView, StyleSheet } from 'react-native';

export default function EarningsScreen({navigation}) {
  const styles = StyleSheet.create({
    text_center:{
      marginLeft:10,
      fontSize:20,
    }
  })

    return (
      <Flex fill>
      <Flex fill>
        <Text style={styles.text_center}>Commissions Owed</Text>
        <ScrollView>
        <ListItem
          title="Job Title, Date, Customer Name"
          secondaryText="$100.00"
        />
        <ListItem
          title="Job Title, Date, Customer Name"
          secondaryText="$50.00"
        />
        <ListItem
          title="Job Title, Date, Customer Name"
          secondaryText="$10.00"
        />
        <ListItem
          title="Job Title, Date, Customer Name"
          secondaryText="$500.00"
        />
        <ListItem
          title="Job Title, Date, Customer Name"
          secondaryText="$125.00"
        />
        <ListItem
          title="Job Title, Date, Customer Name"
          secondaryText="$25.00"
        />
        <ListItem
          title="Job Title, Date, Customer Name"
          secondaryText="$15.00"
        />
        </ScrollView>
      </Flex>
      <Flex fill>
        <Text style={styles.text_center}>Customers</Text>
        <ScrollView>
          <ListItem
            leadingMode="avatar"
            leading={
              <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
            }
            title="Job Title, Date, Customer Name"
            secondaryText="Total paid: $1,000"
          />
          <ListItem
            leadingMode="avatar"
            leading={
              <Avatar image={{ uri: "https://mui.com/static/images/avatar/2.jpg" }} />
            }
            title="Job Title, Date, Customer Name"
            secondaryText="Total paid: $100"
          />
          <ListItem
            leadingMode="avatar"
            leading={
              <Avatar image={{ uri: "https://mui.com/static/images/avatar/3.jpg" }} />
            }
            title="Job Title, Date, Customer Name"
            secondaryText="Total paid: $150"
          />
          <ListItem
            leadingMode="avatar"
            leading={
              <Avatar image={{ uri: "https://mui.com/static/images/avatar/1.jpg" }} />
            }
            title="Job Title, Date, Customer Name"
            secondaryText="Total paid: $1,500"
          />
          <ListItem
            leadingMode="avatar"
            leading={
              <Avatar image={{ uri: "https://mui.com/static/images/avatar/2.jpg" }} />
            }
            title="Job Title, Date, Customer Name"
            secondaryText="Total paid: $700"
          />
          <ListItem
            leadingMode="avatar"
            leading={
              <Avatar image={{ uri: "https://mui.com/static/images/avatar/3.jpg" }} />
            }
            title="Job Title, Date, Customer Name"
            secondaryText="Total paid: $1,000"
          />
        </ScrollView>
      </Flex>
    </Flex>
    );
}