import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM_QUANTITY } from "../ActionTypes";

const initialState = { 
    addItemToCart: []
};

export const Reducers = (state = initialState, { payload, type }) => {
    switch (type) {
        case ADD_ITEM: {
            const itemIndex = state.addItemToCart.findIndex(item => item.id === payload.id);
            console.log("itemIndex", payload)
            if (itemIndex !== -1) {
                const updatedState = state.addItemToCart.map((item, index) => 
                    index === itemIndex ? { ...item, quantity: item.quantity + 1 } : item
                );
                return { ...state, addItemToCart: updatedState };
            }
            return { ...state, addItemToCart: [...state.addItemToCart, { ...payload, quantity: 1 }] };
        }
        case UPDATE_ITEM_QUANTITY: {
            const updatedState = state.addItemToCart.map(item =>
                item.id === payload.id ? { ...item, quantity: payload.quantity } : item
            );
            return { ...state, addItemToCart: updatedState };
        }
        case REMOVE_ITEM: {
            const updatedState = state.addItemToCart.filter((_, index) => index !== payload);
            return { ...state, addItemToCart: updatedState };
        }
        default: {
            return state;
        }
    }
};
