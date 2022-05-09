import "./Input.scss";

const Input = ({ value, onChange, placeholder, name, type, error }) => {
    return (
        <div className="input-container">
            <input className="input" name={name} type={type} placeholder={placeholder}
                onChange={onChange}
                value={value}
                autoComplete="off"
            />
            <span className="input-error">{error}</span>
        </div>

    );
}

export default Input;