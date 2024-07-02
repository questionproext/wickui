import '@testing-library/jest-dom/vitest'
import {render, screen} from '@testing-library/react'
import {describe, expect, it, vi} from 'vitest'
import {WuButton} from './WuButton'
import {EWuButtonIconPosition} from './types/EWuButtonIconPosition'
import {EWuButtonVariant} from './types/EWuButtonVariant'

describe('WuButton Render', () => {
  it('should render', () => {
    render(<WuButton>Hello</WuButton>)
    expect(true).toBe(true)
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument()
    expect(btn).toHaveTextContent('Hello')
  })
  it('should render with custom class', () => {
    render(<WuButton className="custom-class">Button text</WuButton>)

    expect(screen.getByRole('button', {name: 'Button text'})).toHaveClass(
      'custom-class',
    )
  })
  it('should render the spinner when loading is true', () => {
    render(<WuButton loading={true}>Button text</WuButton>)

    const spinner = screen.getByRole('spinner')
    expect(spinner).toBeInTheDocument()
  })
  it('should be disabled when loading is true', () => {
    render(<WuButton loading={true}>Button text</WuButton>)

    const btn = screen.getByRole('button')
    expect(btn).toBeDisabled()
  })
  it('should render the icon when icon is provided and iconPosition is left', () => {
    render(<WuButton icon="home">Button text</WuButton>)

    const btn = screen.getByRole('button')
    expect(btn.firstChild).toHaveClass('lucide')
  })
  it('should render the icon when icon is provided and iconPosition is right', () => {
    render(
      <WuButton icon="home" iconPosition={EWuButtonIconPosition.RIGHT}>
        Button text
      </WuButton>,
    )
    const btn = screen.getByRole('button')
    expect(btn.lastChild).toHaveClass('lucide')
  })
  it('should have background color when variant is primary', () => {
    render(<WuButton variant={EWuButtonVariant.PRIMARY}>Button text</WuButton>)
    const btn = screen.getByRole('button')
    expect(btn).toHaveClass('bg-p-blue-400')
  })
})

describe('WuButton Events', () => {
  it('should call onClick when clicked', async () => {
    const onClick = vi.fn()
    render(<WuButton onClick={onClick}>Button text</WuButton>)

    const btn = screen.getByRole('button')
    btn.click()
    expect(onClick).toHaveBeenCalled()
  })
  it('should not call onClick when disabled', async () => {
    const onClick = vi.fn()
    render(
      <WuButton onClick={onClick} disabled={true}>
        Button text
      </WuButton>,
    )

    const btn = screen.getByRole('button')
    btn.click()
    expect(onClick).not.toHaveBeenCalled()
  })
})
