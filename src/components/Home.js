import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export const Home = () => {
    return <div><h1>Hello World</h1>
        <Link to="/Name"> <Button variant="outline-info">Name</Button></Link>
    </div>
}   