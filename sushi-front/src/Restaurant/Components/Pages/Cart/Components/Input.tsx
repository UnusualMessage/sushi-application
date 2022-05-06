const Input = ({ value, onChange, placeholder, name, type }) => {
    return (
        <input className="cart-input" name={name} type={type} placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    );
}

export default Input;