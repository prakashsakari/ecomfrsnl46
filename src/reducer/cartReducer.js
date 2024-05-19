export const cartReducer = (state, action) => {
    switch(action.type){
        case 'ADD':
            return {
                ...state,
                cart: [...state.cart, {...action.payload, quantity: 1}]
            }
        case 'REMOVE':
            return {
                ...state,
                cart: state.cart.filter(product => product._id !== action.payload)
            }
        case 'CLEAR':
            return {
                ...state,
                cart: []
            }
        default:
            return state
    }
}