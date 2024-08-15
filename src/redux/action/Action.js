// Actions.js
import { ADD_ITEM, REMOVE_ITEM, UPDATE_ITEM_QUANTITY } from "../ActionTypes";

export const addItemToCart = (item) => {
    const price = item.item_variations && item.item_variations.length > 0 ? item.item_variations[0].price : 0;
    return{

        type: ADD_ITEM,
        payload: {
            id: item._id,
            name: item.name,
            price: price,
            img: item.photo,
            images: item.images,
        },
    }
    };

// export const addItemToCart = result => ({
//     type: ADD_ITEM,
//     payload: { result }
//   })



export const updateItemQuantity = (itemId, quantity) => ({
    type: UPDATE_ITEM_QUANTITY,
    payload: {
        id: itemId,
        quantity,
    },
});

export const removeItemFromCart = (index) => ({
    type: REMOVE_ITEM,
    payload: index,
});
