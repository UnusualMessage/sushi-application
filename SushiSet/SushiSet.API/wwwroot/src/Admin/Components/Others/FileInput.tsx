import "./FileInput.scss";

const FileInput = ({ name, onChange, error, id }) => {
    return (
        <div className="file-input-container">
            <input className="input" id={"file-" + id} name={name} type={"file"}
                onChange={onChange} accept=".jpg,.jpeg,.png,.jfif"
            />
            <label className="input-tip" htmlFor={"file-" + id}>Загрузить изображение</label>
            <span className="input-error">{error}</span>
        </div>
    );
}

export default FileInput;