import { View, Text, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { AsteroidDetailsProp } from '../../Navigation/types'
import { getAsteroidData } from '../../Services';
import { Card } from 'react-native-paper';
import { styles } from './styles';

export default function AsteroidDetails({ route }: AsteroidDetailsProp) {
  const [data, setData] = useState([] as any);
  const { item } = route.params;

  useEffect(() => {

    getAsteroidData(item)
      .then((res) => {
        console.log(res);
        setData([res])

      })
      .catch((err) => {
        console.log(err);

      })

  }, [])

  return (
    <View>
      <FlatList 
        data={data}
        renderItem={({item} : any) => 
        <Card style={styles.card}>
          <Text style={styles.txt}>Name: {item.name}</Text>
          <Text style={styles.txt}>Nasa Jpl Url: {item.nasa_jpl_url}</Text>
          <Text style={styles.txt}>is potentially hazardous asteroid: {item.is_potentially_hazardous_asteroid ? 'yes' : 'No'}</Text>
        </Card>
        }
      />
    </View>
  )
}