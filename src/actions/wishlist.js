export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST';

export function addToWishlist (product) {
    return {
        type: 'ADD_TO_WISHLIST',
        payload: product
    }
};

export const REMOVE_FROM_WISHLIST = 'REMOVE_FROM_WISHLIST';

export function removeFromWishlist (product) {
    return {
        type: 'REMOVE_FROM_WISHLIST',
        payload: product
    }
}