import taskegerLogo from '../../assets/Subaru Brazil 2026.jpeg' 
import './Header.css'
import Button from '../Button/Button'

function Header(){
    
    return(
        <>
            <header className='site-header'>
                <div className='header-content'>
                    <a href="/home" className='brand'>
                        <img src={taskegerLogo} alt="Logo Provisório do Taskeger" width="60" height="60" className='brand-icon'/>
                        <span className='brand-title'>
                        Taskeger
                        </span>
                    
                    </a>
                    
                    <div className='header-right'>
                        <div className='auth-actions'>
                            <a href="/login" className='login-button'>
                            Login
                            </a>

                            <a href="/sign-in" className='sign-in-button'>
                            Sign In
                            </a>
                        </div>
                    
                        <button className='menu-button'>
                            ☰
                        </button>
                    </div>

                </div>

                <div>
                    <Button texto = 'Login' />
                    
                </div>    

            </header>
        </>
    )
}

export default Header