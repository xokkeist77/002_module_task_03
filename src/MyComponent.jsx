import { useState } from 'react';
import styles from './MyComponent.module.css';

export const MyComponent = () => {
	const [showRedText, setShowRedText] = useState(false);
	const onClick = () => {
		setShowRedText(!showRedText);
	};

	const text = <div className={showRedText ? styles.red : styles.blue}>Шаблон проекта на vite</div>;

	return (
		<>
			{text}
			<button onClick={onClick}>Изменить цвет текста</button>
		</>
	);
};
