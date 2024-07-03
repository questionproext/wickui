/* eslint-disable no-undef */
import {promises as fs} from 'fs' // Use promises for cleaner async/await syntax
import {join} from 'path'

const componentName = process.argv[2]

if (!componentName) {
  console.error('Please provide a component name as an argument.')
  process.exit(1)
}

const componentPath = join('src', 'components', componentName)
const capitalizedComponentName =
  componentName.charAt(0).toUpperCase() + componentName.slice(1)

// Create component directory if it doesn't exist (using async/await)
;(async () => {
  try {
    await fs.access(componentPath) // Check if directory exists
    console.log(`Component '${componentName}' already exists.`)
    return
  } catch (err) {
    if (err.code === 'ENOENT') {
      // Directory not found, create it
      await fs.mkdir(componentPath)
    } else {
      throw err // Re-throw other errors
    }
  }

  // Create component files with async/await for each file
  const files = [
    {
      name: 'index.ts',
      content: `
        export { Wu${capitalizedComponentName} } from './Wu${capitalizedComponentName}';
        export type { IWu${capitalizedComponentName}Props } from './Wu${capitalizedComponentName}';
      `,
    },
    {
      name: 'Wu' + capitalizedComponentName + '.tsx',
      content: `
        import React from 'react';
        import styles from './Wu${capitalizedComponentName}.module.css';
  
        export interface IWu${capitalizedComponentName}Props
          extends React.HTMLAttributes<HTMLBaseElement> {}
  
        export const Wu${capitalizedComponentName}: React.FC<IWu${capitalizedComponentName}Props> = ({
          ...props,
        }) => {
          return (
            <div className={styles.container}>
              <h1>${capitalizedComponentName}</h1>
            </div>
          );
        };
      `,
    },
    {
      name: 'Wu' + capitalizedComponentName + '.test.tsx',
      content: `
        import '@testing-library/jest-dom/vitest';
        import { render } from '@testing-library/react';
        import { describe, expect, it } from 'vitest';
        import { Wu${capitalizedComponentName} } from './Wu${capitalizedComponentName}';
  
        describe('Wu${capitalizedComponentName}', () => {
          it('should render', () => {
            const { container } = render(<Wu${capitalizedComponentName} />);
            expect(container.firstChild).toBeInTheDocument();
          });
        });
      `,
    },
    {
      name: 'Wu' + capitalizedComponentName + '.stories.tsx',
      content: `
        import { Meta, StoryObj } from '@storybook/react';
        import { Wu${capitalizedComponentName} } from './Wu${capitalizedComponentName}';
  
        const meta: Meta<typeof Wu${capitalizedComponentName}> = {
          component: Wu${capitalizedComponentName},
        };
  
        export default meta;
        type IStory = StoryObj<typeof meta>;
  
        const options: Partial<IStory> = {
          args: {},
        };
        export const Default: IStory = {
          ...options,
        };
      `,
    },
    {
      name: 'Wu' + capitalizedComponentName + '.module.css',
      content: `
        .container {
          padding: 8px;
          border: 1px solid #000;
        }
      `,
    },
  ]

  for (const file of files) {
    const filePath = join(componentPath, file.name)
    await fs.writeFile(filePath, file.content, 'utf8')
  }

  // Update main index.ts (using async/await for readFile and appendFile)
  const indexPath = join('src', 'index.ts')
  const importLine = `export * from './components/${componentName}';`

  let indexContent
  try {
    indexContent = await fs.readFile(indexPath, 'utf8')
  } catch (err) {
    if (err.code === 'ENOENT') {
      // index.ts not found, create it
      await fs.writeFile(indexPath, importLine, 'utf8')
      return
    } else {
      throw err
    }
  }

  if (!indexContent.includes(importLine)) {
    await fs.appendFile(indexPath, '\n' + importLine, 'utf8')
  }

  console.log(`Component '${componentName}' created successfully!`)
})()
