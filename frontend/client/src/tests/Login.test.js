import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Login from '../components/Login'
import { expect } from '@jest/globals'

describe('Unit Test <Login /> Component', () => {
    test('should mount <Login /> correctly', () => {

        const wrapper = shallow(<Login />)

        expect(wrapper).toMatchSnapshot() 
        
    })   

    test('should show title <Login /> wcomponent ', () => {

        const expectedTitle = 'Inicio de Sesión'
        const wrapper = shallow(<Login />)
        const title = wrapper.find('h3').text().trim()
        console.log(title)

        expect(title).toBe(expectedTitle)        
    })   
})
