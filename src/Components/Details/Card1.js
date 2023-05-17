import image1 from '../../Assets/image1.jpg';
export function Card(props) {
    return (
        <div class="mx-2">
            <div class="card ps-5 bg-dark text-light dummy" >
                <span className='pt-4'>{props.icon}</span>
                <div class="card-body">
                    <h5 class="card-title fw-bold">{props.title}</h5>
                    <p class="card-text text-muted fw-bold">{props.text}</p>
                    <a href="#0" class="btn btn-primary">{props.button}</a>
                </div>
            </div>
        </div>

    );
}