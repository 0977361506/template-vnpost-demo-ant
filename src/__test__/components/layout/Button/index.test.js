import React from 'react'
import { shallow, mount } from 'enzyme'
import { Provider } from 'react-redux'
import configureMockStore from 'redux-mock-store'
import { Button as ButtonAntd } from 'antd'

import Button from 'components/layout/Button'

const store = configureMockStore()({
  loading: {
    posting: true,
  },
})

let wrapper = shallow(
  <Provider store={store}>
    <Button />
  </Provider>,
)

describe('Button', () => {
  it('should render the Button component correctly', () => {
    expect(wrapper).toBeDefined()
  })

  it('should simulate onClick function', () => {
    const mockFn = jest.fn()
    wrapper = mount(
      <Provider store={store}>
        <Button onClick={mockFn} loadingName="test" />
      </Provider>,
    )
    wrapper.find(ButtonAntd).simulate('click')
    expect(mockFn).toHaveBeenCalled()
  })

  it('should be disabled', () => {
    wrapper = mount(
      <Provider store={store}>
        <Button disabled />
      </Provider>,
    )
    expect(wrapper.find(Button).props().disabled).toEqual(true)
  })
})
