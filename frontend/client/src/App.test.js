import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import App from './App';
import { expect } from '@jest/globals'

describe('Unit Test <App /> Component', () => {

  let wrapper = shallow(<App />)

    beforeEach( () => {
        wrapper = shallow(<App />)
    })

  test('should mount <App /> correctly', async() => {  
  
    expect(wrapper).toMatchSnapshot()    
  })  
})


