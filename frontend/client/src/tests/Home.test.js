import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Home from '../components/Home'
import { expect } from '@jest/globals'

describe('Unit Test <Home /> Component', () => {

    let wrapper;
    beforeEach( () => {
        wrapper = shallow(<Home />)
    })

    test('should mount <Home /> correctly', () => {        

        expect(wrapper).toMatchSnapshot()    
    })    
})