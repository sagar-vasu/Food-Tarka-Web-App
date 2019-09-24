const initalState = {
    name: 'main reducer',
    products: [],
    allProducts: [],
    ResturentProducts:[]
}

const MainReducer = (state = initalState, action) => {

    switch (action.type) {
        case "empty":
            state.allProducts = []
            state.ResturentProducts=[]
            return { ...state, products: [], allProducts: state.allProducts, ResturentProducts:state.ResturentProducts.concat() }
            break;
        case "AddProduct":
            return { ...state, products: state.products.concat() }
            break;

        case "getData":
            state.products.push(action.payload)
            return { ...state, products: state.products.concat() }
            break;

        case 'deleteProduct':
            state.products.splice(action.payload, 1)
            return { ...state, products: state.products.concat() }
            break;


        case 'allProduct':
            state.allProducts.push(action.payload)
            return { ...state, allProducts: state.allProducts.concat() }
            break;
        case "resProducts":
            state.ResturentProducts.push(action.payload)
            return { ...state, ResturentProducts: state.ResturentProducts.concat() }

        break;
        default: return state
    }

}

export default MainReducer