import '@testing-library/jest-dom/vitest'
import {render} from '@testing-library/react'
import {describe, expect, it} from 'vitest'
import {WuCheckbox} from './WuCheckbox'

describe('WuCheckbox', () => {
  it('should render', () => {
    const {container} = render(<WuCheckbox />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
