import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Register from '../components/Register'
import { expect } from '@jest/globals'

describe('Unit Test <Register /> Component', () => {
    test('should mount <Register /> correctly', async() => {
      
        const wrapper = shallow(<Register />)

        expect(wrapper).toMatchSnapshot()    
    })

    test('should show title register component ', () => {

        const expectedTitle = 'Regístrese'
        const wrapper = shallow(<Register />)
        const title = wrapper.find('h3').text().trim()
        console.log(title)

        expect(title).toBe(expectedTitle)        
    })    
})
