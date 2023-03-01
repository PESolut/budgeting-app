import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <nav>
            <div className='home-button'>
                <Link to='/'>Home</Link>
            </div>
            <div className='new-button'>
                <Link to='/new'>New Transaction</Link>
            </div>
        </nav>
    );
};

export default Nav;