export default (state=[], action ={}) => {
    switch (action.type){
        case 'ADD_TO_WISHLIST':
            return [...state,
                {...action.payload}]
        case 'REMOVE_FROM_WISHLIST':
            return state.filter((product)=>{
                return product !== action.payload
            })
        default:
            return state
    }
}