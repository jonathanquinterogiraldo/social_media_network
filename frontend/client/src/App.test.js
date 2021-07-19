import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import App from './App';
import { expect } from '@jest/globals'

describe('', () => {
  test('should mount <App /> correctly', async() => {
      
    const wrapper = shallow(<App />)
  
    expect(wrapper).toMatchSnapshot()    
  })  
})


