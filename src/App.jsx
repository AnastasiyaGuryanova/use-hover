import { useHover } from './hooks';
import './App.css';

export const App = () => {
	const { hovered, ref } = useHover();

	return (
		<div ref={ref}>{hovered ? 'На меня навели мышку' : 'Наведи мышкой на меня'}</div>
	);
};
