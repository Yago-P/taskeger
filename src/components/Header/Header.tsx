import taskegerLogo from '../../assets/Subaru Brazil 2026.jpeg' 
import './Header.css'
import { Link } from 'react-router'
import Button from '../Button/Button'

function Header(){
    
    return(
        <>
            <header className='site-header'>
                <div className='header-content'>
                    <Link to={'/'} className='brand'>
                        <img src={taskegerLogo} alt="Logo Provisório do Taskeger" width="60" height="60" className='brand-icon'/>
                        <span className='brand-title'>
                            Taskeger
                        </span>
                    </Link>
                    
                    <div className='header-right'>
                        <div className='auth-actions'>
                            <Link to={'/login'} className='login-button' >Login</Link>

                            <Link to={'/sign-up'} className='sign-up-button' >Sign Up</Link>
                            
                        </div>
                    
                        <Button texto='☰'/>
                    </div>

                </div>
            </header>
        </>
    )
}

export default Header