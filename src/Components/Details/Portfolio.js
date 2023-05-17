import Nav from "../Home/Navbar";
export function Portfolio() {
    return (
        <div>
            <div className="background">
                <Nav />
                <h2 className='text-center fw-light fs-6 mt-5'>Showcasing some of my best work</h2>
                <h1 className='text-center fw-bold'>Portfolio</h1>
                <div class="progress mx-auto" style={{width:"160px"}}>
                    <div class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100" style={{width: "100%"}}></div>
                </div>
                <div className="text-center mt-4">
                    <a href="#0" className="px-2 fw-bold"> All</a>
                    <a href="#0" className="px-2 fw-bold">Brand</a> 
                    <a href="#0" className="px-2 fw-bold">Design</a>
                    <a href="#0" className="px-2 fw-bold">Photos</a>
                </div>
            </div>
        </div>
    );
} 