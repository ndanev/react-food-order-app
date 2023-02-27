import ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const Backgrop = (props) => {
    return <div onClick={props.onClose} className={classes.backdrop}></div>
}

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    )
}

const portElement = document.getElementById('overlays')

const Modal = (props) => {
    return (
        <>
            {ReactDOM.createPortal(<Backgrop onClose={props.onClose} />, portElement)}
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portElement)}
        </>
    )
}

export default Modal