import '@testing-library/jest-dom/vitest'
import {render} from '@testing-library/react'
import {describe, expect, it} from 'vitest'
import {WuToggle} from './WuToggle'

describe('WuToggle', () => {
  it('should render', () => {
    const {container} = render(<WuToggle />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
