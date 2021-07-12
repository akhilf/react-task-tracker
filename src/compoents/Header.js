
import PropTypes from 'prop-types'
import Button from './Button'

const onClick = (e) => {
    console.log(e);
}
const Header = ( {title}) => {
    return (
        <header className='header'>
           <h1>{title}</h1> 
           <Button text='Add' color="green" onClick={onClick} />
        </header>
    )
}

Header.defaultProps = {
    title : 'Task tracker'
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}
export default Header;