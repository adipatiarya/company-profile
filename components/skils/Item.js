export default function item(props) {

    return (
        <div className="item">
            <h3 className="level-title">{props.title}<span className="level-label"><i className="fas fa-info-circle"></i>{props.level}</span></h3>

            <div className="level-bar progress">
                <div className="progress-bar level-bar-inner" role="progressbar" style={{width:`${props.percent}%`}} aria-valuenow={props.percent}  aria-valuemin="0" aria-valuemax={props.percent}></div>
            </div>
        </div>
    );
};