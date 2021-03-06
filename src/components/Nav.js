import Modal from "./Modal";
import { useState, useEffect, useContext, useRef } from "react"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import {FavoriteContext} from '../utils/favoriteStore'


function Nav({ navProductType, totalCartItems}) {
    const [callModal, setCallModal] = useState(false);
    const [totalCartQuantity, setTotalCartQuantity] = useState();
    const inputEl = useRef()

    // useContext Logic
    const {toggleFavorite, setToggleFavorite, favoriteItemsArray} = useContext(FavoriteContext)

    useEffect(() => {
        setTotalCartQuantity(totalCartItems)
    }, [totalCartItems]);

    const handleMakeUpClick = (e) => {
        navProductType(e.target.innerText.toLowerCase())
        setToggleFavorite(true)
        handleScroll()
    }

    const handleFavClick = () => {
        setToggleFavorite(!toggleFavorite)
        handleScroll()
    }

    const handleScroll = () => {
        inputEl.current.scrollIntoView({block: "start", inline: "nearest", behavior:"smooth"})
    }

    const handleCartClick = () => {
        setCallModal(true)
    }


    return (
        <>
            <nav>
                <div className="navBelt">
                    <div className="wrapper">
                        <p>Nabila</p>
                        <ul>
                            <li className="navHeart"
                                onClick={handleFavClick}>
                                <FontAwesomeIcon icon={faHeart} />
                                {
                                    favoriteItemsArray.length  ?
                                    <span className="navHeartQuantity">
                                        {favoriteItemsArray.length}
                                    </span>
                                    :null
                                }
                            </li>
                            <li 
                                className="cart"
                                onClick={handleCartClick}>
                                <FontAwesomeIcon icon={faShoppingCart} />
                                {
                                    totalCartQuantity?
                                    <span className="cartQuantity">
                                        {totalCartQuantity}
                                    </span>
                                    :null
                                }
                            </li>
                        </ul>
                    </div>
                </div>
                <div id="banner" className="banner">
                    <div ref={inputEl} className="scrollToEl"></div>
                </div>
                <div className="navMain">
                    <ul className="navigation">
                        <li onClick={handleMakeUpClick}>Foundation</li>
                        <li onClick={handleMakeUpClick}>Blush</li>
                        <li onClick={handleMakeUpClick}>Lipstick</li>
                    </ul>
                </div>
            </nav>

            {
                callModal?
                    <Modal
                        onClose={() => setCallModal(false)}
                        forComponent="cart"
                        info= ""
                        checkCartQuantity={(cartQuantity) => setTotalCartQuantity(cartQuantity)}
                    />
                    : null
            }
        </>
    )
}

export default Nav
