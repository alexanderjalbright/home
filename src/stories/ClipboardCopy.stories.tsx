import { Story, Meta } from '@storybook/react';

import { ClipboardCopy, ClipboardCopyProps } from '../components/clipboard/ClipboardCopy';

export default {
	title: 'Home/Clipboard Copy',
	component: ClipboardCopy,
} as Meta;

const Template: Story<ClipboardCopyProps> = (args) => <ClipboardCopy {...args} />;

export const WithTime = Template.bind({});
WithTime.args = {
	label: 'Create react app from npx',
	id: 'With Time',
	text: 'npx create-react-app my-app',
};

export const AsArray = Template.bind({});
AsArray.args = {
	label: 'Welcome phrase',
	id: 'As Array',
	text: ['hello', 'how', 'are', 'you'],
};
