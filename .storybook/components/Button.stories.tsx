// Button.stories.ts|tsx
 // @ts-nocheck
 import type { Meta,StoryObj } from '@storybook/react';

 import {Button} from './Button';
 
 const meta: Meta<typeof Button> = {
   component: Button,
   decorators: [
     (Story) => (
       <div style={{ margin: '3em' }}>
         {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
         <Story />
       </div>
     ),
   ],
   argTypes: {
     variant: {
       options: ['primary', 'secondary'],
       control: { type: 'radio' },
     },
   },
   parameters: {
     backgrounds: {
       values: [
         { name: 'red', value: '#f00' },
         { name: 'green', value: '#0f0' },
         { name: 'blue', value: '#00f' },
       ],
     },
   },
 };
 
 
 
 
 export default meta;
 type Story = StoryObj <typeof Button>;
 
 /*
  *👇 Render functions are a framework specific feature to allow you control on how the component renders.
  * See https://storybook.js.org/docs/react/api/csf
  * to learn how to use render functions.
  */
 export const Primary: Story = {
   args: {
     primary: true,
     label: 'Header',
   },
 };
 
 
 export const PrimaryLongName: Story = {
   args: {
     ...Primary.args,
     label: 'Primary with a really long name',
   },
 };