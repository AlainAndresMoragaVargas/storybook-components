import { ComponentMeta, ComponentStory } from '@storybook/react';
import MyLabel from '../components/MyLabel/MyLabel';

export default {
  title: 'UI/MyLabel',
  component: MyLabel,
  argTypes: {
    color: { control: 'select' }
  }
} as ComponentMeta<typeof MyLabel>;


const Template: ComponentStory<typeof MyLabel> = (args) => <MyLabel {...args} />

export const Basic = Template.bind({});
Basic.args = {
  size: 'h1',
  color: 'primary'
}

export const Test = Template.bind({});
Test.args = {
  size: 'h1',
  color: 'secondary'
}
