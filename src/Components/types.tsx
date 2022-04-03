

export type btnTypes = {
	title: string;
	onPress: () => void;
	disabled?: boolean;
}

export type inputTypes = {
	value: string;
	onChangeText: (txt : string) => void;
	label: string;
	placeholder: string;
	testID?: string;
}