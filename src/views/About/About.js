import './About.css';
import './../../components/Button/Button';
import Button from './../../components/Button/Button';
import Navbar from '../../components/Navbar/Navbar';
export function About() {
    return(
      <>
        <Navbar/>
        <div className="about">
            <h1 className="heading">About Page</h1>
        </div>
        <Button />
      </>
    )
}