import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Home from '../components/Home'
import { expect } from '@jest/globals'

describe('Unit Test <Home /> Component', () => {
    test('should mount <Home /> correctly', () => {

        const wrapper = shallow(<Home />)

        expect(wrapper).toMatchSnapshot() 
        
    })    
})