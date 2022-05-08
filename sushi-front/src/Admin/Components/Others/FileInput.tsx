import "./FileInput.scss";

const FileInput = ({ name, onChange, error }) => {
    return (
        <div className="file-input-container">
            <input className="input" id="file" name={name} type={"file"}
                onChange={onChange} accept=".jpg,.jpeg,.png,.jfif"
            />
            <label className="input-tip" htmlFor="file">Загрузить изображение</label>
            <span className="input-error">{error}</span>
        </div>
    );
}

export default FileInput;