import firebaseApp from "../../Config/Firebase/Firebase"



const GetProducts = (user) => {
    console.log(user)
    return dispatch => {
        firebaseApp.firestore().collection('products').where('resName', "==", user.name).get().then((res) => {
                dispatch({type:'empty'})
            res.forEach(doc => {
               let data = doc.data()
               data.id= doc.id
               dispatch({ type: 'getData', payload: data })
            })

        })
    }
}


const deleteProduct = (val,i)=>{
    console.log(val,i)
    return dispatch =>{
        firebaseApp.firestore().collection('products').doc(val.id).delete().then(
            // this.props.products.splice(i, 1)
            dispatch({type:'deleteProduct',payload:i})
        )
    }
    
}


const AddProduct = (data, tags) => {
    data.tad = tags

    return dispatch => {

        firebaseApp.firestore().collection('products').add(data).then(
            dispatch({
                type: "addProduct",
                payload: data
            })

        )
    }

}


// User Section

const AllProducts = ()=>{
    return dispatch => {
        firebaseApp.firestore().collection('users').where('account',"==","resturant account").get().then((res) => {
            dispatch({type:'empty'})
            res.forEach(doc => {
               let data = doc.data()
               console.log(data.certificate)
               data.id= doc.id               
               dispatch({ type: 'allProduct', payload: data })
            })

        })
    }
}



// Per Res Products


const ResProducts = (name)=>{
    return dispatch => {
        firebaseApp.firestore().collection('products').where('resName',"==",name).get().then((res) => {
            dispatch({type:'empty'})
            res.forEach(doc => {
               let data = doc.data()
               console.log(data,'resProducts')
               data.id= doc.id               
               dispatch({ type: 'resProducts', payload: data })
            })

        })
    }

}




export {
    AddProduct,
    GetProducts,
    deleteProduct,
    AllProducts,
    ResProducts
}





