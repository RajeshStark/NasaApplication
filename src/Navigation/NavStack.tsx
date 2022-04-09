import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../Screens/Home/Home';
import AsteroidDetails from '../Screens/AsteroidDetails/AsteroidDetails';
import { StackNavigationDetails } from './types';

const Stack = createNativeStackNavigator<StackNavigationDetails>();

function MyStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="AsteroidDetails" component={AsteroidDetails} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default MyStack;