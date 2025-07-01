import { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

import CartContext from '../context/CartContext';
import Modal from './Modal'

function Cart() {

    const { quantity } = useContext(CartContext)
    const [showModal, setShowModal] = useState(false)

    return (
        <>
            <div className='cart_container' role="button" onClick={() => setShowModal(true)}>
                <FontAwesomeIcon icon={faShoppingCart} size="xl" />
                <div className='cart__badge'>
                    <span>{quantity}</span>
                </div>
                <Modal showModal={showModal} closeModal={() => setShowModal(false)} />
            </div>
        </>
    )
}

export default Cart