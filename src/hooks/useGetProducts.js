import React, { useState, useEffect} from 'react';
import axios from 'axios';

const useGetProducts = (API) => {
	const [products, setProducts] = useState([]); //Analizando la API y viendo que es un array de productos

	useEffect( async () => {
		const response = await axios(API); //Aqui se esta haciendo la peticion a la API y se espera la respuesta
		setProducts(response.data); //Se ejecuta setProducts y se le pasa la respuesta de la API
	}, []);//El [] porque no se va a escuchar sobre ningún elemento

    return products; //Se retorna el array de productos para que se pueda usar en el componente ProductList
};

export default useGetProducts;