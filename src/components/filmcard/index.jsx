import "./style.css";

export function Filmcard(props){

    console.log(props);

    return (
        <div className="filmcard">
            <h2>{props.title}</h2>
            <div>{props.director}</div>
            <div>{props.cast}</div>
            <div>{props.grade}</div>
        </div>
    );
}