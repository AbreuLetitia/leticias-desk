const Input = (props) => {
	return (
		<div>
			<label htmlFor={props.label}>{props.label}</label>
			<input
				type={props.type}
				onChange={props.onChange}
				name={props.label}
				placeholder={props.placeholder}
				{...props}
			/>
		</div>
	);
};

export default Input;
