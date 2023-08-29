import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../Context/ShoppingCartContext"

const CartWidget = ({}) => {
    
    const [cart, setCart] = useContext(CartContext);

    return (
        <div className="divCarrito">
            <p className="pCarrito">
                {
                    cart.length > 0 ? 
                    cart.length 
                    :
                    " "
                }
            </p>
            <Link to={"/cart"}>
                <ShoppingCartIcon className="carritoLogo" color="action" sx={{ fontSize: 100 }} />
            </Link>
        </div>
    )
}

export default CartWidget