import React from 'react';
import CustomBtn from '../src/Components/CustomBtn';
import { render, fireEvent, waitFor, cleanup } from '@testing-library/react-native';
import axios from 'axios'
import { btnTypes, inputTypes } from '../src/Components/types'
import CustomInput from '../src/Components/CustomTxtInput';

afterEach(cleanup);

describe('<Button /> - ', () => {
    let state = false
    const onPressMock = jest.fn(() => {
      state = !state
    })
    const props: btnTypes = {
      title: 'Submit',
      onPress: onPressMock
    }

    it('should become enabled', () => {
      // act: render container
      const { container } = render(<CustomBtn {...props} disabled />)

      // assert 1: check if button receives {isDisabled}
      expect(container.props.disabled).toEqual(true)

      // act2: fire callback
      fireEvent(container, 'changeText')

      // assert 2: "state" should remain as false.
      expect(state).toEqual(false)
    })
  })


describe('<TextInput/> ', () => {
    it('text input', async () => {
        const mock = jest.fn()
        const props: inputTypes = {
            value: '',
            onChangeText: mock,
            label: 'Enter Country',
            placeholder: 'Enter Country',
            testID: "1"
        }
        const component = render(<CustomInput {...props} />)
        fireEvent.changeText(await component.findByTestId('1'), 'india')
        expect(mock).toHaveBeenCalledWith('india')
    })
})