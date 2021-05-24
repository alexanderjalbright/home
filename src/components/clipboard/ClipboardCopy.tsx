import React from 'react';
import '../../tailwind.css';
import { useClipboard } from 'hooks/useClipboard';
import { useResizeByText } from 'hooks/useResizeByText';
import { $i } from 'utils/common';

export interface ClipboardCopyProps {
	/**
	 * Label above clipboard copy area
	 */
	label?: string;
	/**
	 * Text to be converted to the html element id
	 */
	id: string;
	/**
	 * Text to be displayed and copied
	 */
	text: string | string[];
	/**
	 * Whether to append time copied message in label
	 */
	isTimeShown: boolean;
	/**
	 * Maximum pixel height to resize without scrollbar
	 */
	heightLimitPx: number;
}

const title = 'Click to copy to clipboard';

export const ClipboardCopy: React.FC<ClipboardCopyProps> = ({
	label,
	id,
	text,
	isTimeShown = true,
	heightLimitPx = 300,
}) => {
	const { addToClipboard, displayTime, clear } = useClipboard();

	const { ref } = useResizeByText<HTMLTextAreaElement>(heightLimitPx, text);

	const displayedText = Array.isArray(text) ? text.join('\r\n') : text;
	const generatedId = `clipboard-copy-${$i(id)}`;

	const onClickHandler = () => addToClipboard(displayedText);
	const onBlurHandler = () => clear();

	return (
		<>
			<div>
				<label htmlFor={generatedId} title={title}>
					{label}
					{isTimeShown && displayTime && ` | ${displayTime}`}
				</label>
			</div>
			<textarea
				id={generatedId}
				className="cursor-pointer text-blue-400 bg-gray-600 hover:text-blue-300 p-4"
				title={title}
				role="button"
				ref={ref}
				value={displayedText}
				readOnly
				onClick={onClickHandler}
				onBlur={onBlurHandler}
			/>
		</>
	);
};
