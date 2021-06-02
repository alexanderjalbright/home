import { FunctionComponent } from 'react';

interface ExternalLinkProps {
	href: string;
	text: string;
}

export const ExternalLink: FunctionComponent<ExternalLinkProps> = ({ href, text }) => {
	return (
		<a href={href} target="_blank" rel="noopener noreferrer">
			{text}
		</a>
	);
};
