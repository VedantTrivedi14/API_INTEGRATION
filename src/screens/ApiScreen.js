import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const getMoviesFromApi = () => {
  console.log('Fetch API Call');

  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: "Abhi",
      OS: "Android"
    })
  };

  fetch('https://reactnative.dev/movies.json', requestOptions)
    .then((response) => response.json())
    .then((json) => {
      console.log('Fetch API Response', json.movies);
      console.log('Fetch API Response', json.title);
      console.log('Fetch API Response', json.description);
    })
    .catch((error) => {
      console.error(error);
    });
}




const postUser = () => {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408' },
    body: JSON.stringify({
      email: "vedanttrivedi83065@gmail.com",
      name: "ved",
      gender: 'male',
      status: 'active'
    })
  };

  fetch('https://gorest.co.in/public/v1/users', requestOptions)
    .then((response) => response.json())
    .then((json) => {
      console.log('Fetch API Response', json.data);
    })
    .catch((error) => {
      console.error(error);
    });

}


const getUsers = () => {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408' },
  };

  fetch('https://gorest.co.in/public/v1/users', requestOptions)
    .then((response) => response.json())
    .then((json) => {
      console.log('Fetch API Response', json.data);
    })
    .catch((error) => {
      console.error(error);
    });

}

const UpdateUser = () => {

  const requestOptions = {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408' },
    body: JSON.stringify({
      email: "vedantpersonal14@gmail.com",
      name: "vedant",
      gender: 'male',
      status: 'inactive'
    })
  };

  fetch('https://gorest.co.in/public/v1/users/8969', requestOptions)
    .then((response) => response.json())
    .then((json) => {
      console.log('Fetch API Response', json.data);
    })
    .catch((error) => {
      console.error(error);
    });
}

const deleteUser = () => {
  const requestOptions = {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json', 'Accept': 'application/json', 'Authorization': 'Bearer d484c6e730cc22caf59cce6ee33c6ed1142a56f77dee4ac6b86ea8341492e408' },
  };

  fetch('https://gorest.co.in/public/v1/users/8986', requestOptions)
    .then(response => response.ok)
    .catch((error) => {
      console.error(error);
    });


}



const ApiScreen = ({navigation}) => {
  return (
    <View>
      <Text style={{ fontWeight: 'bold', fontSize: 20, color: 'black', margin: 5 }}>Fetch API for your networking Data.
        API Credit: GoRest https://gorest.co.in</Text>
      <View style={{ marginTop: 20, padding: 10, marginHorizontal: 16 }} >
        <Button
          title='POST: Create User'
          onPress={() => postUser()}
        />
      </View>

      <View style={{ marginTop: 5, padding: 5, marginHorizontal: 16 }} >
        <Button
          title='Get: Get UserList'
          onPress={() => getUsers()}
        />
      </View>

      <View style={{ marginTop: 5, padding: 5, marginHorizontal: 16 }} >
        <Button
          title='PUT / PATCH: Update user'
          onPress={() => UpdateUser()}
        />
      </View>

      <View style={{ marginTop: 5, padding: 5, marginHorizontal: 16 }} >
        <Button
          title='Delete: Delete user'
          onPress={() => deleteUser()}
        />
      </View>

      <View style={{ marginTop: 5, padding: 5, marginHorizontal: 16 }} >
        <Button
          title='Api Axios'
          onPress={() => navigation.navigate("Api Axios")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({

});

export default ApiScreen;
