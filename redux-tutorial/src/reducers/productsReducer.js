export default function productsReducer(state = [], { type, payload }) {

    switch(type) {
        case 'UPDATE_PRODUCTS':
            return payload.newProducts;
        case 'CLEAR_PRODUCTS':
            return [];
        default:
            return state;
    }
}
