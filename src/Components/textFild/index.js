import "./textFild.css"

const TextFild = ({required, value, placeholder, label, whenChanged, type='text'}) => {

    const whenTyping = (e) => {
        whenChanged(e.target.value);
    }

    return (
        <div className="textfild">
            <label>{label}</label>
            <input type={type} required={required} value={value} onChange={e => whenTyping(e)} placeholder={placeholder}/>
        </div>
    )
}

export default TextFild