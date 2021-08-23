const Input = (props) => {
	return (
		<div>
			<label htmlFor={props.label}>{props.label}</label>
			<input
				type={props.type}
				onChange={props.onChange}
				name={props.label}
				placeholder={props.placeholder}
				onBlur={props.onBlur}
			/>
			{props.errorCondition && <p>{props.errorMessage}</p>}
		</div>
	);
};

export default Input;
