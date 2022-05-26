import './button.css'

const Button = ({value, someFuction }) => {
    return (
        <div className='button'>
            <input type='submit' value={value} onClick={ someFuction }></input>
        </div>
    )
}

export default Button