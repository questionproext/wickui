import '@testing-library/jest-dom/vitest'
import {render} from '@testing-library/react'
import {describe, expect, it} from 'vitest'
import {WuTooltip} from './WuTooltip'

describe('WuTooltip', () => {
  it('should render', () => {
    const {container} = render(<WuTooltip content="test">test</WuTooltip>)
    expect(container.firstChild).toBeInTheDocument()
  })
})
