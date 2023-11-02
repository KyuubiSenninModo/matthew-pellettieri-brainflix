import './header.scss';
import logo from '../../assets/Logo/BrainFlix-logo.svg';
import avatar from '../../assets/Images/Mohan-muruge.jpg';
import { Link } from 'react-router-dom';

function Header() {
    
    return (
        <header className='header'>
            <Link className='Link' to={'/'}>
                <div className='logo--container'>
                    <img className='header__logo' src={logo} alt='BrainFlix-logo' />
                </div>
            </Link>
            <div className='searchbar--container'>
            <Link className='Link' to={'/'}>
                <img className='header__logo--tablet' src={logo} alt='BrainFlix-logo' />
            </Link>
                <input type='text' className='searchbar' placeholder='Search' />
                <Link className='Link' to={'/upload'}>
                <button className='upload--button--tablet'>UPLOAD</button>
                </Link>
                <img className='avatar' src={avatar} alt='avatar' />
            </div>
            <Link className='Link' to={'/upload'}>
            <div className='button--container'>
                <button className='upload--button--mobile'>UPLOAD</button>
            </div>
            </Link>
        </header>
    );
}

export default Header;




