import React, { useState } from 'react'
import { Button, Text, View } from 'react-native'

export const Counter = () => {
    const  [count, setCounter]= useState(10)
  return (
    <View style={{
      flex:1,
      backgroundColor: 'grey' ,   
      justifyContent: 'center'
          }}>

  <Text style={{
  fontSize:55,
  textAlign: 'center'
}}></Text>
<Button
  title="Click"
  onPress={()=> setCounter(count + 1)}
/>
</View>
  )
}
