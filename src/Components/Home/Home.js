import { Main } from './Main';
import Nav from './Navbar';
import { Link } from './Link';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';


export function Home() {
  return (
    <div>
      <Nav />
      <div className='homepage'>
        <Main />
        <Link />
      </div>
    </div>
  );
}