import "./BigInput.scss";

const BigInput = ({ value, onChange, placeholder, name, error }) => {
    return (
        <div className="input-container">
            <textarea className="big-input" name={name} placeholder={placeholder}
                onChange={onChange}
                value={value}
                rows={7}
                cols={20}>

            </textarea>

            <span className="input-error">{error}</span>
        </div>

    );
}

export default BigInput;