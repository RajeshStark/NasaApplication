import React from 'react';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react-native';
import { inputTypes } from '../../src/Components/types';
import CustomInput from '../../src/Components/CustomTxtInput';


afterEach(cleanup);


describe('<TextInput/> ', () => {
    it('text input', async () => {
        const mock = jest.fn()

        const props: inputTypes = {
            value: '',
            onChangeText: mock,
            label: 'Enter Asteroid ID',
            placeholder: 'Enter Asteroid ID',
            testID: "1"
        }
        const component = render(<CustomInput {...props} />)
        
        fireEvent.changeText(await component.findByTestId('1'), '2003456')
        expect(mock).toHaveBeenCalledWith('2003456')
    })
  
})