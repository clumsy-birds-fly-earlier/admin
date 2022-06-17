import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import {render, screen} from '@testing-library/react'
import App from './App'

const setup = () => {
  return render(
    <Router>
      <App />
    </Router>
  )
}
describe('<App />', () => {
  it('should render correctly', () => {
    setup()

    expect(screen.getByRole('link', {name: '图书列表'})).toBeInTheDocument()
    expect(screen.getByRole('link', {name: '新增图书'})).toBeInTheDocument()
  })
})
