import React from "react"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const CartWidget = () => {
    return (
        <div className="divCarrito">
            <p className="pCarrito">5</p>
            <Link to={"/cart"}>
                <ShoppingCartIcon className="carritoLogo" color="action" sx={{ fontSize: 100 }} />
            </Link>
        </div>

    )
}

export default CartWidget