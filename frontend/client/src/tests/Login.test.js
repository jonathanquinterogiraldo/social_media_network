import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Login from '../components/Login'
import { expect } from '@jest/globals'

describe('Unit Test <Login /> Component', () => {

    let wrapper;
    beforeEach( () => {
        wrapper = shallow(<Login />)
    })

    test('should mount <Login /> correctly', () => {        

        expect(wrapper).toMatchSnapshot()         
    })   

    test('should show title <Login /> wcomponent ', () => {

        const expectedTitle = 'Inicio de Sesión'        
        const title = wrapper.find('h3').text().trim()        

        expect(title).toBe(expectedTitle)        
    })   
})
