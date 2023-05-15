import { Link } from 'react-router-dom';
import MarqueeHeader from '../components/MarqueeHeader';
import StatusHeader from '../components/StatusHeader';
import StoreHeader from '../components/StoreHeader';
import '../styles/LandingPage.css';

function NotFound(){
    return(
        <div className="App">

            <div className='headers'>
                <StoreHeader />
                <MarqueeHeader />
                <StatusHeader scenario={8}/>
            </div>

            <div className='app-contents'>
                <Link to='/'>
                    <button className='home-btn'>Back to order page</button>
                </Link>
            </div>
            
            <footer className="app-footer">
                All rights reserved 2020 @ KopeeTearia
            </footer>
        </div>
    );
}

export default NotFound;