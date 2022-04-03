import React, { useState } from 'react';
import { SafeAreaView, Text } from 'react-native';
import { styles } from './styles';
import CustomInput from '../../Components/CustomTxtInput'
import CustomBtn from '../../Components/CustomBtn'
import { homeProps } from '../../Navigation/types';
import { getAsteroidData, getRandomAsteroid } from '../../Services';

export default function Home({ navigation }: homeProps) {
    const [value, setValue] = useState<string>('');

    const getRandomData = () => {
        getRandomAsteroid()
            .then((res) => {
                const NUM = res[0].near_earth_objects.length;
                const random = Math.floor(Math.random() * NUM);
                console.log(random);
                navigation.navigate('AsteroidDetails', {
                    item: res[0].near_earth_objects[random].id
                })
            })
            .catch((err) => {
                console.log(err);
            })
    }


    return (
        <SafeAreaView style={styles.main}>

            <CustomInput
                value={value}
                onChangeText={(txt) => setValue(txt)}
                label="Enter Asteroid ID"
                placeholder="Enter Asteroid ID"
            />

            <CustomBtn
                title="Submit"
                onPress={() => navigation.navigate('AsteroidDetails', {
                    item: value
                })}
                disabled={value === '' ? true : false}
            />

            <CustomBtn
                title="Random Asteroid*"
                onPress={() => getRandomData()}
                disabled={false}
            />

        </SafeAreaView>
    )
}