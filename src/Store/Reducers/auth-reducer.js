const initalState = {
    name: 'snackbar',
    message: 'demo',
    currentUser: ''

}




const AuthReducer = (state = initalState, action) => {
    switch (action.type) {
        // res signup


        case "ShowalreadyName": state.message = 'Sorry Name Already Registerd'
            state.name = 'show'
            return { ...state, message: state.message, name: state.name.concat() }
            break;

        case "HidealreadyName": state.name = 'snackbar'
            return { ...state, name: state.name.concat() }
            break;

        case "addResturant":
            return state
            break;
        case "showPass-err": state.message = 'Password Not Match ❌ ❌ ❌'
            state.name = 'show'
            return { ...state, message: state.message, name: state.name.concat() }
            break;

        case "hidePass-err": state.name = 'snackbar'
            return { ...state, name: state.name.concat() }
            break;

        case "showEmail-err": state.message = `${action.payload} ❌ ❌ ❌`
            state.name = 'show'
            return { ...state, message: state.message, name: state.name.concat() }
            break;


        case "hideEmail-err": state.name = 'snackbar'
            return { ...state, name: state.name.concat() }
            break;


        // user signup


        case "addUser":
            return state
            break;

        case "showUserPasserr": state.message = 'Password Not Match ❌ ❌ ❌'
            state.name = 'show'
            return { ...state, message: state.message, name: state.name.concat() }
            break;

        case "hideUserPasserr": state.name = 'snackbar'
            return { ...state, name: state.name.concat() }
        case "showUserEmailerr": state.message = `${action.payload} ❌ ❌ ❌`
            state.name = 'show'
            return { ...state, message: state.message, name: state.name.concat() }
            break;


        case "hideUserEmailerr": state.name = 'snackbar'
            return { ...state, name: state.name.concat() }
            break;
        // user Login

        case 'Login': state.currentUser = action.payload

            return { ...state, currentUser: state.currentUser }
            break;


        case "logout":
            localStorage.removeItem('user')

            return state

        default: return { ...state }
    }


}

export default AuthReducer