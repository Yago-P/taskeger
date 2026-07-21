import taskegerLogo from '../../assets/Subaru Brazil 2026.jpeg' 
import './Header.css'
import Button from '../Button/Button'
import React, { useState } from 'react'

function Header(){
    
    
    const [ logado, setLogado] = useState(false)

    function autenticar(event: React.MouseEvent){
        event.preventDefault()
        setLogado(true)
    }

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
                        {!logado ? 
                        <div className='auth-actions'>
                            <a href="/login" className='login-button' onClick={autenticar}>
                                Login
                            </a>

                            <a href="/sign-in" className='sign-in-button'>
                                Sign In
                            </a>
                        </div>
                        : 
                        <div className='user-actions'>
                            <a href="/user">
                                Yago
                            </a>

                            <a href="/homepage">
                                Sair
                            </a>
                        </div>}
                    
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