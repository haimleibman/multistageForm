import {createPortal} from 'react-dom';

const Portal = (props) => {
    return createPortal(
        props.children,
        document.getElementById('root')
    )
}

export default Portal;