const Input = (props) => {
	return (
		<div>
			<label htmlFor={props.label}>{props.label}</label>
			<input name={props.label} placeholder={props.placeholder} />
		</div>
	);
};

export default Input;
