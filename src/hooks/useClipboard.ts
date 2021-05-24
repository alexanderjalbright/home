import { useState } from 'react';

const defaultDisplayTime = () => {
	const now = new Date();
	const hours = now.getHours();

	const isPm = hours > 12;

	const displayHours = isPm ? hours - 12 : hours;
	const displayMins = now.getMinutes().toString().padStart(2, '0');
	const displaySecs = now.getSeconds().toString().padStart(2, '0');
	const displayMeridiem = isPm ? 'pm' : 'am';

	return `Copied @ ${displayHours}:${displayMins}:${displaySecs}${displayMeridiem}`;
};

export const useClipboard = (displayTimeHandler?: (isCleared?: boolean) => string) => {
	const [displayTime, setDisplayTime] = useState('');

	const addToClipboard = (text: string) => {
		navigator.clipboard.writeText(text);
		const timeStamp = displayTimeHandler ? displayTimeHandler() : defaultDisplayTime();
		setDisplayTime(timeStamp);
	};

	const clear = () => {
		navigator.clipboard.writeText('');
		setDisplayTime('');
	};

	return { addToClipboard, displayTime, clear };
};
