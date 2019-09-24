import React from 'react'
import { MDBNavbar, MDBNavbarBrand, } from 'mdbreact';
import { Paper } from '../../Components'
import Grid from '@material-ui/core/Grid';
import firebaseApp from '../../Config/Firebase/Firebase';


class Verification extends React.Component {

    constructor() {
        super()

    }


    componentDidMount() {
        var user = firebaseApp.auth().currentUser;

        if (user) {
            console.log(user)
            if (user.emailVerified == true) {
                firebaseApp.firestore().collection('users').doc(user.uid).get().then((res) => {
                    console.log(res)
                    if (res.data().account === 'user account') {
                        this.props.history.push('/user-home')
                    }
                    else {
                        this.props.history.push('/resturent-home')
                    }
                })
            }
         
        } else {
            // No user is signed in.
        }
    }

    render() {
        return (
            <div>
                <div>
                    <MDBNavbar color=" pink darken-3" dark>
                        <MDBNavbarBrand href="#">
                            <img src="https://mdbootstrap.com/img/logo/mdb-transparent.png" height="30" alt="" />
                        </MDBNavbarBrand>
                    </MDBNavbar>
                </div>
                <div className='box' >
                    <Grid justify='center' container>
                        <Grid item xs={12} sm={12} lg={5} md={10}>
                            <Paper>
                                <p className="h4 text-center py-4">Verify Your Email</p>

                                <div style={{ textAlign: 'center' }}>
                                    <img width='100%' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRFDU7l-m5sCnkgkh-Pq-lIuoY3IACt2xen8nu-ROzs4N64WkaMA' alt='verify-email' />
                                </div>

                                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                                </div>

                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </div >



        )
    }
}



export default Verification




