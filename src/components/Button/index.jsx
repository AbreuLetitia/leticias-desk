const Button = (props) => {
	return (
		<div>
			<button {...props} onClick={props.onClick}>
				{props.label}
			</button>
		</div>
	);
};

export default Button;
