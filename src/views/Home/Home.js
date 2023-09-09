import Button from '../../components/Button/Button';
import Navbar from '../../components/Navbar/Navbar';
import './Home.css';
export function Home() {
    return(
      <>
        <Navbar/>
        <div className="about">
            <h1 className="heading">Home Page</h1>
        </div>
        <Button/>
      </>
    )
}