import axios from 'axios';
import React from 'react';
import { API_KEY, ASTEROIDAPI, RANDOMAPI, } from '../Utils/Config';


export const getAsteroidData = async (asteroid: string | any) : Promise<any> => {
    try{
        const url = `${ASTEROIDAPI}${asteroid}/?api_key=${API_KEY}`
        const resp = await axios.get(url)
        if(resp.status !== 200){
            throw new Error("Something Wrong")
        }
        const data = await resp.data;
        return data;
    }
    catch(err){
        throw err
    }
}


export const getRandomAsteroid =  async () : Promise<any> => {
    try{
        const url = `${RANDOMAPI}${API_KEY}`
        const resp = await axios.get(url)
        if(resp.status !== 200){
            throw new Error("Something Wrong")
        }
        const data = await resp.data;
        return [data]
    }
    catch(err){
        throw err
    }
}
