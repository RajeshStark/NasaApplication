import React from "react";
import axios, { AxiosResponse } from "axios";
import { getAsteroidData } from "../../src/Services";


jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('test suit for axios asteroid data', () => {
    test('get Asteroid test', async () => {

        let dataValue = {};
        
        const num = 200873;
        const MockedResponse : AxiosResponse = {
            data: dataValue,
            status: 200,
            statusText: 'OK',
            config: {},
            headers: {}
        }

        mockedAxios.get.mockResolvedValueOnce(MockedResponse);
        mockedAxios.get.mockRejectedValueOnce(new Error("Something Wrong"))

        const data = await getAsteroidData(num);
        expect(axios.get).toHaveBeenCalled();
        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(data).toMatchObject(dataValue)

    })
})