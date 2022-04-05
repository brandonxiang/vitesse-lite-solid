import { fireEvent, render } from 'solid-testing-library'
import { describe, expect, it } from 'vitest'
import Counter from '../src/components/Counter'

describe('Counter', () => {
  it('should render', () => {
    const { getByText, unmount } = render(() => <Counter initial={10}/>)
    expect(getByText('10')).toBeDefined()
    unmount()
  })

  it('should be interactive', () => {
    const { getByText } = render(() => <Counter initial={0}/>)
    expect(getByText('0')).toBeDefined()

    fireEvent.click(getByText('+') as HTMLInputElement)

    expect(getByText('1')).toBeDefined()
  })
})
