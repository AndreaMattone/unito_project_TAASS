import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import 'react-calendar/dist/Calendar.css';
const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%'
    },
  });

export default function ReservationDeleted(){
    return(
        <View style={styles.container}>
            <Text style={{marginBottom:'5%'}}>RESERVATION DELETED</Text>
        </View>
    );
}