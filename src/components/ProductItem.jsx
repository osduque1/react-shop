// import React, { useState } from 'react'; //Ejemplo de useState, Se agrega el hook de useState para poder utilizar el state
import React, { useContext } from 'react';
import AppContext from '../context/AppContext';
import '@styles/ProductItem.scss';

import addToCartImage from '@icons/bt_add_to_cart.svg';

const ProductItem = ({ product }) => { // Este recibe el producto que se le pasa desde el componente ProductList

	// const [cart, setCart] = useState([]);//Ejemplo de useState, Lo que se ponga entre () es el valor inicial del state


	const { addToCart } = useContext(AppContext); //Este es el contexto que se creo en el componente CartProvider

	const handleClick = item => {
		addToCart(item);
	};

	return (
		<div className="ProductItem">
			<img src={product.images[0]} alt={product.title} /> {/*//Se agrega el atributo src con la imagen del producto */}
			<div className="product-info">
				<div>
					<p>${product.price}</p>
					<p>{product.title}</p>
				</div>
				<figure onClick={()=>handleClick(product)}>
					<img src={addToCartImage} alt="" />
				</figure>
			</div>
		</div>
	);
}

export default ProductItem;