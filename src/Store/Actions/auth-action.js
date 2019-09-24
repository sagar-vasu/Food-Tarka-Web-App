import firebaseApp from "../../Config/Firebase/Firebase";






//  Resturant Signup

const ResSignup = (data, path) => {





    return dispatch => {
        if (data.password === data.confirmPassword) {


            navigator.geolocation.getCurrentPosition((position) => {
                data.location = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                }
            });
            // var flag = true
            // firebaseApp.firestore().collection('resturants').where('name', "==", data.name).get().then((res) => {
            //     res.forEach(doc => {
            //         if (doc.data().name === data.name) {
            //             dispatch({ type: 'ShowalreadyName' })

            //             setTimeout(() => {
            //                 dispatch({
            //                     type: 'HidealreadyName',
            //                 })


            //             }, 3000);
            //         }
            //         else{
            //             flag=false
            //         }

            //     })
            // }
            // )

            console.log(data, 'check')

            firebaseApp.auth().createUserWithEmailAndPassword(data.email, data.password).then((res) => {
                data.check = res.user.emailVerified
                data.account = 'resturant account'
                firebaseApp.firestore().collection('users').doc(res.user.uid).set(data).then(

                    firebaseApp.auth().currentUser.sendEmailVerification().then(function () {
                        console.log(`Email Sent ==>`)
                        dispatch({ type: 'addResturant' })
                        // Email sent.
                        path.push('/')
                        dispatch({ type: 'addResturant' })

                    })
                )
            }).catch((err) => {
                dispatch({
                    type: 'showEmail-err',
                    payload: err.code
                })

                setTimeout(() => {
                    dispatch({
                        type: 'hideEmail-err',

                    })


                }, 3000);

            })
        }
        else {

            dispatch({ type: 'showPass-err' })

            setTimeout(() => {
                dispatch({ type: 'hidePass-err' })
            }, 3000);


        }

    }



}




//  User Signup


const UserSignup = (data, path) => {

    return dispatch => {

        if (data.password === data.confirmPassword) {
            firebaseApp.auth().createUserWithEmailAndPassword(data.email, data.password).then((res) => {
                data.account = 'user account'
                firebaseApp.firestore().collection('users').doc(res.user.uid).set(data).then(
                    firebaseApp.auth().currentUser.sendEmailVerification().then(function () {
                        dispatch({ type: 'addUser' })
                        // Email sent.
                        path.push('/')

                    })
                )
            }).catch((err) => {
                dispatch({
                    type: 'showUserEmailerr',
                    payload: err.code
                })

                setTimeout(() => {
                    dispatch({
                        type: 'hideUserEmailerr',
                    })


                }, 3000);

            })
        }
        else {

            dispatch({ type: 'showUserPasserr' })

            setTimeout(() => {
                dispatch({ type: 'hideUserPasserr' })
            }, 3000);

        }

    }
}




const LoginFunc = (data, path) => {

    return dispatch => {
        firebaseApp.auth().signInWithEmailAndPassword(data.email, data.password).then(resolve => {
            console.log(resolve.user)
            if (resolve.user.emailVerified === true) {

                firebaseApp.firestore().collection('users').doc(resolve.user.uid).get().then(res => {
                    let checkData = res.data()
                    localStorage.setItem('user', JSON.stringify(checkData))
                    if (checkData.account == 'resturant account') {
                        dispatch({
                            type: 'Login',
                            payload: checkData
                        })
                        path.push('/resturant-home')
                    } else {
                        path.push('/user-home')
                        dispatch({
                            type: 'Login',
                            payload: checkData
                        })

                    }
                })

            }
            else {
                path.push('/verify-email')
            }


        }).catch((err) => {
            dispatch({
                type: 'showEmail-err',
                payload: err.code
            })

            setTimeout(() => {
                dispatch({
                    type: 'hideEmail-err',

                })


            }, 3000);

        })
    }
}




// Logout

const Logout = (path)=>{

    return dispatch=>{
        firebaseApp.auth().signOut().then(function() {
            dispatch({type:'logout'})
            path.push('/')
          }, function(error) {
            console.error('Sign Out Error', error);
        });

    }

}



export {
    ResSignup,
    UserSignup,
    LoginFunc,
    Logout
}