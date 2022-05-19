import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ApiScreen from './src/screens/ApiScreen';
import ApiUsingAxiosScreeen from './src/screens/ApiUsingAxiosScreen';
import ApiXmlHttpsScreen from './src/screens/ApiXmlHttpsScreen';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Api Integration">
                <Stack.Screen name="Api Integration" component={ApiScreen} />
                <Stack.Screen name="Api Axios" component={ApiUsingAxiosScreeen} />
                <Stack.Screen name="Api XmlHttps" component={ApiXmlHttpsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;