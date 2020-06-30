import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';


export default function ErrorScreen() {

  return (
    <View style={styles.centered}>
      <Text>Something run wrong.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    centered:{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff"
     },
  });