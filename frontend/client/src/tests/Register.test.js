import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Register from '../components/Register'
import { expect } from '@jest/globals'

describe('Unit Test <Register /> Component', () => {

    let wrapper;
    beforeEach( () => {
        wrapper = shallow(<Register />)
    })

    test('should mount <Register /> correctly', async() => {        

        expect(wrapper).toMatchSnapshot()    
    })

    test('should show title register component ', () => {

        const expectedTitle = 'Regístrese'        
        const title = wrapper.find('h3').text().trim()    

        expect(title).toBe(expectedTitle)        
    })    
})
