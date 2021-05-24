import { Story, Meta } from '@storybook/react';

import { ClipboardCopy, ClipboardCopyProps } from '../components/clipboard/ClipboardCopy';

export default {
	title: 'Clipboard Copy',
	component: ClipboardCopy,
} as Meta;

const Template: Story<ClipboardCopyProps> = (args) => <ClipboardCopy {...args} />;

export const WithTime = Template.bind({});
WithTime.args = {
	label: 'Click to copy',
	id: 'WithTime',
	text: 'npx create-react-app my-app',
};

export const AsArray = Template.bind({});
AsArray.args = {
	label: 'Click to copy',
	id: 'test',
	text: ['hello', 'how', 'are', 'you'],
};
