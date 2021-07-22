import React from 'react'
import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Login from '../components/Login'
import { expect } from '@jest/globals'

describe('Unit Test <Login /> Component', () => {



  let wrapper = shallow(<Login />)

  beforeEach(() => {
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

  // test('should call submit form', () => {

  //     const reactTestEnzymeWrapper = () => (
  //         shallow(<ReactTest />)
  //       );

  //     const onSubmit = jest.fn()
  //     const value = 'prueba@gmail.com'
  //     const inputEmail = wrapper.find('#email')
  //     //inputEmail.simulate('change', { target: { value: email }})
  //     inputEmail.simulate('change', { target: { value }})
  //     //const inputValue = wrapper.find('#email').props()
  //     //console.log(inputEmail.target.value) 



  //    // input.simulate('change', { target: { value: email }})
  //      const button = wrapper.find('#form')
  //      console.log(button) 
  //      button.simulate('submit', { preventDefault(){}})
  //     //  console.log(button)
  //       expect(onSubmit).toHaveBeenCalledTimes(1)
  // })

})
