import React from 'react'
import { Paper, Button } from '../../Components'
import Grid from '@material-ui/core/Grid';
import "./Account.css"
import { MDBNavbar, MDBNavbarBrand } from "mdbreact";



class Account extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <MDBNavbar color=" pink darken-3" dark>
                        <MDBNavbarBrand href="#">
                            <img src="https://irp-cdn.multiscreensite.com/54b01053/dms3rep/multi/favicon.png" width="60" alt="" />
                        </MDBNavbarBrand>
                    </MDBNavbar>
                </div>

                <Grid justify='center' container>
                    <Grid item xs={12} sm={12} lg={5} md={10}>
                        <Paper>
                            <div className='section'>
                                <img src="https://irp-cdn.multiscreensite.com/54b01053/dms3rep/multi/favicon.png" width="150px" className='img' alt="Logo" />
                            </div>
                            <div className='section1'>
                                <Button click={() => this.props.history.push('/resturant-signup')} color='unique' size="lg" className='btn1' >Restaurant Account</Button>
                                <br />
                                <Button click={() => this.props.history.push('/user-signup')} color='pink' size="lg" className='btn1'>User Account</Button>
                            </div>
                        </Paper>
                    </Grid>
                </Grid>

            </div>
        )
    }
}

export default Account
