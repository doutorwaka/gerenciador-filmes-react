import "./style.css";

export const MESSAGE_TYPE = {
    ERROR: "error-msg",
    SUCCESS: "success-msg"
}

export function Message(props) {

    return (
        <>
            <div className={props.type}>
                <h2>{props.title}</h2>
                <p>{props.message}</p>
            </div>
        </>
    )

}