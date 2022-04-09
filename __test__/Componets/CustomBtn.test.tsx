import React from 'react';
import { render,cleanup, fireEvent } from '@testing-library/react-native';
import { btnTypes } from '../../src/Components/types';
import CustomBtn from '../../src/Components/CustomBtn';


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
      // fireEvent(container, 'changeText')
      

      // assert 2: "state" should remain as false.
      expect(state).toEqual(false)
    })
  })