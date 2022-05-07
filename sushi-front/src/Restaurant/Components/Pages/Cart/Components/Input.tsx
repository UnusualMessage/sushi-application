import "../Styles/Input.scss";

const Input = ({ value, onChange, placeholder, name, type, error }) => {
    return (
        <div className="cart-input-container">
            <input className="cart-input" name={name} type={type} placeholder={placeholder}
                onChange={onChange}
                value={value}
            />
            <span className="cart-input-error">{error}</span>
        </div>

    );
}

export default Input;