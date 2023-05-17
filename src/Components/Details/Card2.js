import image1 from '../../Assets/image1.jpg';
export function Card2(props) {
    return (
        <div className="conatiner">
            <div className="cards">
                <div className="c1">
                    <img src={image1} className="card-img-top" alt="image1" />
                    <p className="card-text">{props.text}</p>
                    <h2 className="card-title">{props.title}</h2>
                    <h4 className="card-title fw-light">{props.details}</h4>
                    <i className="fa-sharp fa-solid fa-quote-right"></i>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
        </div>
    );
}