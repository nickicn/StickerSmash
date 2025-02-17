import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Tela Sobre</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#25292e',
        justifyContent: 'center',
        alignContent: 'center'
    },
    text: {
        color: '#fff'
    }
})