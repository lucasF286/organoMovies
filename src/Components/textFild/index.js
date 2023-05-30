import "./textFild.css"

const TextFild = (props) => {

    const whenTyping = (e) => {
        props.whenChanged(e.target.value);
    }

    return (
        <div className="textfild">
            <label>{props.label}</label>
            <input required={props.required} value={props.value} onChange={e => whenTyping(e)} placeholder={props.placeholder}/>
        </div>
    )
}

export default TextFild