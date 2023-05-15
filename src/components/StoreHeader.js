import logo from '../assets/header-img.png';

function StoreHeader(){
    return(
        <header className="app-header">
          <img src={logo} alt="KT logo" />
        </header>
    );
}

export default StoreHeader;