import React, {Component} from 'react';
import { View, Text, Button} from 'react-native';
import axios from 'axios';

const postUser=() => {
    axios({
      method: 'post',
      url: 'https://gorest.co.in/public/v1/users',
      data:{
        email: "vedanttrivedi83065@gmail.com",
        name: "ved",
        gender: 'Male',
        status: 'Active'
      },
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408"
      }
    })
    .then(function (response) {
      console.log("response", JSON.stringify(response.data))
    })
    .catch(function (error) {
      console.log("error", error)
    })
  }
  
  
  
  const updateUser=() => {
    axios({
      method: 'PUT',
      url: 'https://gorest.co.in/public/v1/users/2598',
      data:{
        email: "vedantpersonal14@gmail.com",
        name: "vedant",
        gender: 'Male',
        status: 'active'
      },
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408",
       
        
      }
    })
    .then(function (response) {
      console.log("response", JSON.stringify(response.data))
    })
    .catch(function (error) {
      console.log("error", error)
    })
  }



const getUser=() => {
  axios({
    method: 'get',
    url: 'https://gorest.co.in/public/v1/users',
    headers: {
      "Authorization": "Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408",
      "Accept": "application/json",
      "Content-Type": "application/json"
    }
  })
  .then(function (response) {
    console.log("response", JSON.stringify(response.data))
  })
  .catch(function (error) {
    console.log("error", error)
  })
}







const deleteUser=() => {
    axios({
        method: 'delete',
        url: 'https://gorest.co.in/public/v1/users/2598',
        headers: {
          "Authorization": "Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408",
          "Accept": "application/json",
          "Content-Type": "application/json"
        }
      })
      .then(function (response) {
        console.log("response",response.status )
        // console.log("response", JSON.stringify(response.data))
      })
      .catch(function (error) {
        console.log("error", error)
      })
}

const ApiUsingAxiosScreeen = () => {
    return (
        <View >
                <Text style= {{fontWeight:'bold', fontSize:20, color: 'black', margin: 5 }}>Axios Networking API for your networking library/Data.
                   API Credit: GoRest https://gorest.co.in</Text>
                <View style={{ padding:10, marginHorizontal: 16}} >
                    <Button 
                        title='POST: Create User' 
                          onPress={() => postUser()}
                    />
                </View>

                <View style={{ marginTop:5, padding:5, marginHorizontal: 16}} >
                     <Button 
                        title='Get: Get UserList' 
                          onPress={() => getUser() }
                    />  
                </View>

                <View style={{ marginTop:5, padding:5, marginHorizontal: 16}} >
                     <Button 
                        title='PUT / PATCH: Update user' 
                        onPress={() => updateUser()}
                    />  
                </View>

                <View style={{ marginTop:5, padding:5, marginHorizontal: 16}} >
                     <Button 
                        title='Delete: Delete user' 
                         onPress={() => deleteUser()}
                    />    
                </View>
            </View>
    );
  };
  
 
  
  export default ApiUsingAxiosScreeen;
  