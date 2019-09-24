import React from 'react'
import { MDBNavbar, MDBNavbarBrand, } from 'mdbreact';
import { Button, InputPage, Paper } from '../../Components'
import Grid from '@material-ui/core/Grid';
import './Login.css'
import { LoginFunc } from '../../Store/Actions/auth-action'
import { connect } from 'react-redux';

class userSignup extends React.Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: '',
            disableEmail: false,
            disablePassword: true,
            disableBtn: true

        }
    }



    saveEmail = (e) => {
        this.setState({
            email: e.target.value,
            disablePassword: false
        })

    }


    savePassword = (e) => {
        this.setState({
            password: e.target.value,
            disableBtn: false

        })
    }

    loginbtn = () => {
        let { email, password } = this.state
        let data = {
            email,
            password
        }
        this.props.LoginFunc(data, this.props.history)

    }


    render() {
        return (
            <div>


                <div>
                    <MDBNavbar color="pink darken-3" dark>
                        <MDBNavbarBrand href="#">
                            <img src="https://irp-cdn.multiscreensite.com/54b01053/dms3rep/multi/favicon.png" height="30" alt="" />
                        </MDBNavbarBrand>
                    </MDBNavbar>
                </div>

                <div className='box' >
                    <Grid justify='center' container>
                        <Grid item xs={12} sm={12} lg={5} md={10}>
                            <Paper>
                                <p className="h4 text-center py-4">Login Now</p>
                                <InputPage
                                    label="Enter email"
                                    group
                                    type="email"
                                    className='input'
                                    disabled={this.state.disableEmail}
                                    onChange={this.saveEmail}

                                />

                                <InputPage
                                    label="Your password"
                                    className='input'
                                    type="password"
                                    validate
                                    onChange={this.savePassword}
                                    disabled={this.state.disablePassword}

                                />
                                <div className="text-center py-4 mt-3">

                                    <Button disabled={this.state.disableBtn} click={this.loginbtn} size='lg' color='unique'>
                                        Login Now
                                    </Button>

                                </div>

                                <p className="h6 text-center py-2" onClick={() => this.props.history.push('/account')} >Create your Account </p>

                            </Paper>
                        </Grid>
                    </Grid>
                    <div id="snackbar" className={this.props.name}>{this.props.message}</div>
                </div>




            </div >



        )
    }
}

const mapStateToProps = state => {
    return {
        name: state.AuthReducer.name,
        message: state.AuthReducer.message
    }

}

const mapDispatchToProps = dispatch => {
    return {
        LoginFunc: (data, path) => dispatch(LoginFunc(data, path))
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(userSignup)




