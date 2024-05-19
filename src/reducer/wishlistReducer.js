export const wishlistReducer = (state, action) => {
    switch(action.type){
        case 'ADD':
            return {
                ...state,
                wishlist: [...state.wishlist, action.payload]
            }
        case 'REMOVE':
            return {
                ...state,
                wishlist: state.wishlist.filter(product => product._id !== action.payload)
            }
        default:
            return state
    }
}