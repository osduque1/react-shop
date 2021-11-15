import { useState } from 'react';

const InitialState = { // Un objeto con los estados iniciales
    cart: [],
};

const useInitialState = () => {
    const [state, setState] = useState(InitialState);

    const addToCart = (payLoad) => {
      setState({
        ...state, //Lo que está en el estado actual
        cart: [...state.cart, payLoad] // Lo que está en el estado actual + lo que se agrega
      });  
    };

    const removeFromCart = (payLoad) => {
      setState({
        ...state, //Lo que está en el estado actual
        cart: state.cart.filter(item => item.id !== payLoad.id) // Lo que está en el estado actual + lo que se agrega
      });
    };

    return {
        state,
        addToCart,
        removeFromCart
    };
};

export default useInitialState;