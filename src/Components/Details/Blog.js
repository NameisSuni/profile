import  Nav  from "../Home/Navbar";
import Card4 from './Card4';
import Card5 from './Card5';
import image from '../../Assets/cold-bg.jpg';
import img from '../../Assets/bg-cal.jpg';

export function Blog() {
    return (
        <div>
            <div className="background">
                <Nav />
                <h2 className='text-center fw-light fs-6 mt-5'>Check out my latest blog posts</h2>
                <h1 className='text-center fw-bold'>My Projects</h1>
                <div className="progress mx-auto" style={{width:"160px"}}>
                    <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                </div>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <Card4 img={<img className="card-img-top" src={image} height={450}></img>}
                            title="Weather App" details="I have used the Open Weather Map API to make calls to a restful
                            API to return the current weather data. This uses the Modern
                            JavaScript Fetch API along with React hooks and conditionals."/>
                        </div>
                        <div className="col-12 col-md-6">
                            <Card5 img={<img className="card-img-top" src={img} height={450}></img>}
                            title="Calculator App" details="By using ReactJS application i have built the calculator app  that allows users to perform mathematical calculations 
                            through a graphical user interface. The calculator app typically includes a display area where users can view the input and output of 
                            the calculations, as well as a number of buttons that allow users to input different numbers, operations, and functions. 
                            The calculator app built using a combination of React components and event handlers to handle user input and perform the calculations."
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}