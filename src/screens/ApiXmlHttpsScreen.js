   
import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';

 //onload is the function called when an XMLHttpRequest transaction completes successfully.
 //The onreadystatechange function is called every time the readyState changes.
const postUser= () => {
    var request = new XMLHttpRequest();

    request.onreadystatechange = (e) => {
        if (request.readyState !== 4) {
            return;
        }
        request.onload = function(e) {
            console.log("request failed", this.status );
            // status 201(create)  is user successfully created in POST methos
            if (this.status == 201) { 
                var responeData = JSON.parse(this.response);
                console.log("response data", responeData)
            }else{
                console.log("request failed", request.responseText);
            }
        }
    }

    const bodyData = {
        email:"vedanttrivedi83065@gmail.com",
        name: "veda",
        gender: 'Male',
        status: 'Active'
    };  

    request.open("POST", "https://gorest.co.in/public/v1/users", true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Authorization' , 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408');
    request.send(JSON.stringify(bodyData));
}



//onload is the function called when an XMLHttpRequest transaction completes successfully.
//The onreadystatechange function is called every time the readyState changes.
const updateUser = () => {
    var request = new XMLHttpRequest();

    request.onreadystatechange = (e) => {
        if (request.readyState !== 4) {
            return;
        }
        request.onload = function(e) {
            console.log("request ", this.status );
            // status 201(create)  is user successfully created in POST methos
            if (this.status == 200) { 
                var responeData = JSON.parse(this.response);
                console.log("response data", responeData)
            }else{
                console.log("request failed", request.responseText);
            }
        }

    }

    const bodyData = {
        email:"vedantpersonal14@gmail.com",
        name: "vedanta",
        gender: 'Male',
        status: 'Active'
    };  

    request.open("PUT", "https://gorest.co.in/public/v1/users/1609", true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Authorization' , 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408');
    request.send(JSON.stringify(bodyData));
}

 //onload is the function called when an XMLHttpRequest transaction completes successfully.
//The onreadystatechange function is called every time the readyState changes.
const getUser = () => {
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
        if (request.readyState !== 4) {
            return;
        }

        request.onload = function(e) {
            console.log("request ", this.status );
            // status 201(create)  is user successfully created in POST methos
            if (this.status == 200) { 
                var responeData = JSON.parse(this.response);
                console.log("response data", responeData)
            }else{
                console.log("request failed", request.responseText);
            }
        }
    }

    request.open("GET", "https://gorest.co.in/public/v1/users", true);
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Authorization' , 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408');
    request.send();
}





export default class XMLHttpRequestExample extends Component{
    render(){
        return(
            <View >
                <Text style= {{fontWeight:'bold', fontSize:20, padding:5}}>XMLHttpRequest Networking API for your networking library/Data.
                   API Credit: GoRest https://gorest.co.in</Text>
                <View style={{ marginTop:20, padding:5, marginHorizontal: 16}} >
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

                <View style={{marginTop:5, padding:5, marginHorizontal: 16}} >
                     <Button 
                        title='PUT / PATCH: Update user' 
                        onPress={() => updateUser()}
                    />  
                </View>

                <View style={{ marginTop:5, padding:5, marginHorizontal: 16}} >
                     <Button 
                        title='Delete: Delete user' 
                         // onPress={() => deleteUser()}
                    />    
                </View>
            </View>
        )
    }
}
