import React from 'react'
import './Signup.css'
import Grid from '@material-ui/core/Grid';
import { MDBNavbar, MDBNavbarBrand, } from 'mdbreact';
import { Button, InputPage, DropdownPage, Paper } from '../../../Components'
import { connect } from 'react-redux'
import { ResSignup } from '../../../Store/Actions/auth-action'
import firebaseApp from '../../../Config/Firebase/Firebase';
import Multiselect from 'multiselect-dropdown-react';

class ResturantSignup extends React.Component {

    constructor() {
        super()
        this.state = {
            disableName: false,
            disableEmail: true,
            disableCity: true,
            disablePassword: true,
            disableConfirmPassword: true,
            disablefile: true,
            disableBtn: true,
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
            disablefile: false
        })

    }

    saveFile = async (e) => {
        let imageName = e.target.files[0].name
        console.log(imageName)
        let ref = firebaseApp.storage().ref('/').child(`ResturantCertification/${imageName}`)
        await ref.put(e.target.files[0])
        ref.getDownloadURL().then((url) => {
            console.log(url)
            this.setState({
                certificate: url,
                disableBtn: false
            })
        })

    }



    singupBtn = () => {
        let { name, email, city, password, confirmPassword, certificate } = this.state
        let tag =  localStorage.getItem('tags')
        tag = JSON.parse(tag)

        let resObj = {
            name,
            email,
            city,
            password,
            confirmPassword,
            certificate,
            tags :tag
        }
        console.log(resObj)
        this.props.ResSignup(resObj, this.props.history)
    }


    result(params) {
        localStorage.setItem('tags', JSON.stringify(params))
    }





    render() {
        const data1 = [{
            name: 'Pizza',
            value: 'Pizza'
        },
        {
            name: 'Burger',
            value: 'Burger'
        },
        {
            name: 'Biryani',
            value: 'Biryani'
        },
        {
            name: 'Chaat',
            value: 'Chaat'
        },
        {
            name: 'Sambosaa',
            value: 'Sambosaa',
        },
        {
            name: 'Malai Boti',
            value: 'Malai Boti'
        }];
    
        return (
            
            <div>

                <div>
                    <MDBNavbar color=" pink darken-3" dark>
                        <MDBNavbarBrand href="#">
                            <img src="https://irp-cdn.multiscreensite.com/54b01053/dms3rep/multi/favicon.png" width="60"  alt="" />
                        </MDBNavbarBrand>
                    </MDBNavbar>
                </div>

                <div className='box' >
                    <Grid justify='center' container>
                        <Grid item xs={12} sm={12} lg={5} md={10}>
                            <Paper>
                                <p className="h6 text-center py-2" >Create your Resturant  </p>



                                <InputPage
                                    label="Resturant name"
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
                                <div className="change">
                                    <Multiselect options={data1} className='ml' onSelectOptions={this.result} />
                                </div>

                                <InputPage

                                    className='input'
                                    group
                                    type="file"
                                    validate
                                    disabled={this.state.disablefile}
                                    onChange={this.saveFile}


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
        ResSignup: (data, path) => dispatch(ResSignup(data, path))
    }

}




export default connect(mapStateToProps, mapDispatchToProps)(ResturantSignup)




