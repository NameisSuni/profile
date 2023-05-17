import image1 from '../../Assets/image1.jpg';
export function Card3(props) {
    return (
        <div class="container">
            <div class="card-deck mb-3 text-center">
                <div class="card mb-4 box-shadow bg-dark text-light">
                    <div class="card-header">
                        <span>{props.icon}</span>
                    </div>
                    <div class="card-body">
                        <h1 class="card-title pricing-card-title fs-3 title1">{props.title} </h1>
                        <small class="text-light fs-5">{props.text}</small>
                        <ul class="list-unstyled mt-3 mb-4">
                            <li className='text-muted p-2'>{props.li1}</li>
                            <li className='text-muted p-2'>{props.li2}</li>
                            <li className='text-muted p-2'>{props.li3}</li>
                            <li className='text-muted p-2'>{props.li4}</li>
                            <li className='text-muted p-2'>{props.li5}</li>
                        </ul>
                        <button type="button" class="btn btn-lg btn-block btn-success rounded-pill mb-4">{props.button}</button>
                    </div>
                </div>
            </div>
        </div>
    );
}