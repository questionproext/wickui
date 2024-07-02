#!/bin/bash
name=$1
folder="src/components/"$name
mkdir $folder

comp=${name^}
touch $folder/index.ts $folder/Wu$comp.tsx $folder/Wu$comp.module.css $folder/Wu$comp.stories.tsx $folder/Wu$comp.test.tsx

echo "
import React from 'react'
import styles from './Wu$comp.module.css'

export interface IWu$comp"Props"
  extends React.HTMLAttributes<HTMLBaseElement> {}

export const Wu$comp: React.FC<IWu$comp"Props"> = ({...otherProps}) => {
  return (
    <div className={styles.container}>
      <h1>$comp</h1>
    </div>
  )
}
" >> $folder/Wu$comp.tsx

# echo for test file
echo "
import React from 'react'
import { render } from '@testing-library/react'
import {Wu$comp } from './Wu$comp'

describe('Wu$comp', () => {
  it('renders without crashing', () => {
    const { container } = render(<Wu$comp />)
    expect(container.firstChild).toBeInTheDocument()
  })
})" >> $folder/Wu$comp.test.tsx

# echo for stories file
echo "
import {Meta, StoryObj} from '@storybook/react'
import {Wu$comp} from './Wu$comp'

const meta: Meta<typeof Wu$comp> = {
  component: Wu$comp,
  parameters: {
    layout: 'fullscreen',
  },
  args: {},
}
// eslint-disable-next-line import/no-default-export
export default meta
type IStory = StoryObj<typeof Wu$comp>

export const $comp: IStory = {
  args: {},
}
" >> $folder/Wu$comp.stories.tsx

# echo to css file with basic container class
echo ".container {  
  padding: 8px;
  border: 1px solid #000;
}" >> $folder/Wu$comp.module.css

# echo for index file
echo "
export { Wu$comp, IWu$comp"Props" } from './Wu$comp'
" >> $folder/index.ts

# add import line to main index file
echo "export * from './components/$name'" >> src/index.ts