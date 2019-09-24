import React from 'react'
import './Signup.css'
import Grid from '@material-ui/core/Grid';
import { MDBNavbar, MDBNavbarBrand, } from 'mdbreact';
import { Button, InputPage, DropdownPage, Paper } from '../../../Components'
import { connect } from 'react-redux'
import { UserSignup } from '../../../Store/Actions/auth-action'
import firebaseApp from '../../../Config/Firebase/Firebase';



class userSignupCom extends React.Component {

    constructor() {
        super()
        this.state = {
            disableName: false,
            disableEmail: true,
            disableGender: true,
            disableCity: true,
            disablePassword: true,
            disableConfirmPassword: true,
            disableBtn: true
        }
    }


    saveName = (e) => {
        this.setState({
            name: e.target.value,
            disableEmail: false
        })
    }

    saveEmail = (e) => {
        this.setState({
            email: e.target.value,
            disableGender: false
        })
    }
    saveGender = (e) => {
        this.setState({
            gender: e.target.value,
            disableCity: false
        })
    }

    saveCity = (e) => {
        this.setState({
            city: e.target.value,
            disablePassword: false
        })
    }
    savePassword = (e) => {
        this.setState({
            password: e.target.value,
            disableConfirmPassword: false
        })
    }
    saveConfirmPassword = (e) => {
        this.setState({
            confirmPassword: e.target.value,
            disableBtn: false
        })
    }



    singupBtn = () => {
        let { name, email, password, confirmPassword, city, gender } = this.state
        let obj = {
            name,
            email,
            password,
            confirmPassword,
            city,
            gender
        }

        this.props.UserSignup(obj, this.props.history)
    }




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

                <div className='box' >
                    <Grid justify='center' container>
                        <Grid item xs={12} sm={12} lg={5} md={10}>
                            <Paper>


                                <InputPage
                                    label="Enter name"
                                    type="text"
                                    className='input'
                                    onChange={this.saveName}
                                />

                                <InputPage
                                    label="Enter email"
                                    group
                                    type="email"
                                    className='input'
                                    disabled={this.state.disableEmail}
                                    onChange={this.saveEmail}


                                />
                                <DropdownPage onChange={this.saveGender} disabled={this.state.disableGender} list={[{ name: 'Male' }, { name: 'Female' }]} className='input' label='Select Gender' />
                                <div style={{ marginTop: '13px' }}>

                                    <DropdownPage onChange={this.saveCity} disabled={this.state.disableCity} list={[{ name: 'Mithi' }, { name: 'Karachi' }, { name: 'Diplo' }, { name: 'Chachro' }, , { name: 'Lahore' }]} className='input' label='Select City' />
                                </div>
                                <InputPage
                                    label="Your password"
                                    className='input'
                                    type="password"
                                    validate
                                    disabled={this.state.disablePassword}
                                    onChange={this.savePassword}
                                />
                                <InputPage
                                    label="Confirm password"
                                    className='input'
                                    group
                                    type="password"
                                    validate
                                    disabled={this.state.disableConfirmPassword}
                                    onChange={this.saveConfirmPassword}
                                />
                                <div className="text-center py-4 mt-3">

                                    <Button click={this.singupBtn} disabled={this.state.disableBtn} size='lg' color='unique'>
                                        Register
                                    </Button>

                                </div>


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
        UserSignup: (data,path) => dispatch(UserSignup(data, path))
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(userSignupCom)




