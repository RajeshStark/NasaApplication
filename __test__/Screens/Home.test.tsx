import React from "react";
import axios, { AxiosResponse } from "axios";
import { getRandomAsteroid } from "../../src/Services";


jest.mock('axios');

const mockedAxios = axios as jest.Mocked<typeof axios>;
describe('test suit for axios random asteroid', () => {
    test('Random Asteroid test', async () => {

        let dataValue = {};
        const MockedResponse : AxiosResponse = {
            data: dataValue,
            status: 200,
            statusText: 'OK',
            config: {},
            headers: {}
        }

        mockedAxios.get.mockResolvedValueOnce(MockedResponse);
        mockedAxios.get.mockRejectedValueOnce(new Error("Something Wrong"))

        const data = await getRandomAsteroid();
        expect(axios.get).toHaveBeenCalled();
        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(data).toMatchObject(dataValue)

    })
})