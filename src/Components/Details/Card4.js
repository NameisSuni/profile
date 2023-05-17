
function Card4(props){
    return(
        <div>
            <div className="card">
                <div className="card-header">
                    <a href="https://nameissuni.github.io/react-weather" target="_blank" className="nav-link">{props.img}
                        <h5 className="card-title nav-link fs-3 fw-bold text-primary">{props.title}</h5>
                    </a>
                </div>
                <div className="card-body">
                    <p className='card-text fw-light fs-4 pad'>{props.details}</p>
                </div>
            </div>
        </div>
    );
}

export default Card4;