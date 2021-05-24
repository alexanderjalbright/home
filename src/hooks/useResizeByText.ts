import React, { useRef, useEffect } from 'react';

const calcHeight = <T extends HTMLElement>(ref: React.RefObject<T>, heightLimit: string) => {
	// TODO: Find way to account for wordwrapping when scroll bar is shown, which can mess up the initial height
	if (ref?.current) {
		const nodeStyle = window.getComputedStyle(ref.current);
		const paddingTop = +nodeStyle.getPropertyValue('padding-top').replace('px', '');
		const paddingBottom = +nodeStyle.getPropertyValue('padding-bottom').replace('px', '');
		const paddingRight = +nodeStyle.getPropertyValue('padding-right').replace('px', '');
		const width = +nodeStyle.getPropertyValue('width').replace('px', '');
		console.log('width', width);
		const paddingY = paddingTop + paddingBottom;
		ref.current.style.height = `${paddingY}px`;
		ref.current.style.paddingRight = `${paddingRight - 12}px`;
		ref.current.style.width = `${width}px`;
		const scrollHeight = ref.current.scrollHeight;
		ref.current.style.height =
			ref.current.scrollHeight > 300 ? heightLimit : `${ref.current.scrollHeight + paddingY * 2}px`;
		ref.current.style.height = ref.current.scrollHeight > 300 ? heightLimit : `${scrollHeight + paddingY / 2}px`;
		ref.current.style.paddingRight = `${paddingRight}px`;
	}
};

export const useResizeByText = <T extends HTMLElement>(heightLimitPx: number, text: string | string[]) => {
	const ref = useRef<T>(null);

	const heightLimit = `${heightLimitPx}px`;

	useEffect(() => {
		calcHeight(ref, heightLimit);
	}, [heightLimit, text]);

	return { ref };
};
