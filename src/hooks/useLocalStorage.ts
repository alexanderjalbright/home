import { useReducer, useEffect, Reducer } from 'react';

export const saveLocalStorage = <T>(localKey: string, newValue: T) => {
	localStorage.setItem(localKey, JSON.stringify(newValue));
	console.log(`${localKey} saved to local storage`);
};

export const loadLocalStorage = <T>(localKey: string, defaultValue: T) => {
	const value = localStorage.getItem(localKey);
	if (value) {
		const userValue = JSON.parse(value);
		return (userValue as T) ? (userValue as T) : defaultValue;
	}
	return defaultValue;
};

interface Action<T> {
	type: string;
	payload: T;
}

interface DefaultAction<State> extends Action<State> {
	type: 'replace';
	payload: State;
}

export const useLocalStorage = <State, CustomAction extends Action<State>>(
	localKey: string,
	defaultValue: State,
	reducer?: Reducer<State, CustomAction>
) => {
	const defaultReducer: Reducer<State, DefaultAction<State>> = (state, action) => {
		switch (action.type) {
			case 'replace':
				return action.payload;
		}
	};

	const [state, dispatch] = useReducer(reducer ? reducer : defaultReducer, defaultValue);

	useEffect(() => dispatch({ type: 'replace', payload: loadLocalStorage<State>(localKey, defaultValue) }), [
		defaultValue,
		localKey,
	]);

	return reducer
		? [
				state,
				(action: CustomAction) => {
					dispatch(action);
					saveLocalStorage<State>(localKey, action.payload);
				},
		  ]
		: [
				state,
				(newState: State) => {
					dispatch({ type: 'replace', payload: newState });
					saveLocalStorage<State>(localKey, newState);
				},
		  ];
};
