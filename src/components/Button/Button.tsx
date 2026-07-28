import './Button.css'

type ButtonProps = {
    texto: string
}

function Button({texto} : ButtonProps){

    return(
        <button className='menu-button'>
            {texto}
        </button>
    )

}

export default Button