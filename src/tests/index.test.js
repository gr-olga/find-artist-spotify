// import { render, screen } from "@testing-library/react";
import { getByText, render, screen } from '@testing-library/react'
import Home from '../pages/index'
import '@testing-library/jest-dom'
import { describe, it } from 'node:test'

describe('Connection', () => {
  it('renders a link', () => {
    render(<Home />)
    expect(screen.getByText('Connect'))
    expect(screen.getByTestId('connect')).toBeInTheDocument()
  })
})
