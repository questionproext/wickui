import '@testing-library/jest-dom/vitest'
import {render} from '@testing-library/react'
import {describe, expect, it} from 'vitest'
import {WuToast} from './WuToast'

describe('WuToast', () => {
  it('should render', () => {
    const {container} = render(<WuToast />)
    expect(container.firstChild).toBeInTheDocument()
  })
})
