import React from 'react';
import ProductItem from '@components/ProductItem';
import useGetProducts from '@hooks/useGetProducts';
import '@styles/ProductList.scss';

const API = 'https://api.escuelajs.co/api/v1/products';

const ProductList = () => {

	const products = useGetProducts(API);

	return (
		<section className="main-container">
			<div className="ProductList">
				{products.map(product=>(
					<ProductItem product={product} key={product.id}/> // key es una propiedad que se usa para identificar un elemento
					// Por medio de product={product} se envía cada objeto producto a ProductItem
				))}
			</div>
		</section>
	);
}

export default ProductList;