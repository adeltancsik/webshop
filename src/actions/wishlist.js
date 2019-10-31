export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';

export function addToWishlist (product) {
    return {
        type: 'ADD_TO_WISHLIST',
        payload: product
    }
}