import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native' ;

export type StackNavigationDetails = {
    Home: undefined;
    AsteroidDetails: {item : Array<JSON> | any}
}


type HomeNavigationProp = NativeStackNavigationProp<StackNavigationDetails, 'Home'>
export  interface homeProps {
    navigation: HomeNavigationProp;
}

type AsteroidDetailsRouteProp = RouteProp<StackNavigationDetails, 'AsteroidDetails'>
export  interface AsteroidDetailsProp {
    route: AsteroidDetailsRouteProp;
}


