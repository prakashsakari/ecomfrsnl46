export const filterReducer = (state, action) => {
    switch(action.type){
        case "lth":
            return {
                ...state,
                sortByPrice: 'lth'
            }
        case 'htl':
            return {
                ...state,
                sortByPrice: 'htl'
            }
        case 'DISCOUNT':
            return {
                ...state,
                discount: action.payload
            }
        case 'CLEAR_ALL':
            return {
                ...state,
                sortByPrice: '',
                discount: 0
            }
        default:
            return state
    }
}