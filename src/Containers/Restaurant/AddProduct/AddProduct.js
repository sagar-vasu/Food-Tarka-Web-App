import React, { Component } from 'react';
import Grid from "@material-ui/core/Grid";
import { Paper, InputPage, Button, Navbar, FooterPagePro } from '../../../Components'
import firebaseApp from '../../../Config/Firebase/Firebase'
import { connect } from "react-redux";
import { AddProduct } from '../../../Store/Actions/main-action'

import Multiselect from 'multiselect-dropdown-react';







class AddProdctCom extends Component {
    constructor() {
        super()
        this.state = {
            ProductName:'',
            ProductPrice: '',
            ProductCatogery: '',
            ProductImage: '',
            f1: false,
            pCatogery: true,
            pimg: true,
            pPrice: true,
            disableBtn: true,


        }


    }

    async componentDidMount() {
        let user = await localStorage.getItem('user')
        user = JSON.parse(user)
        this.setState({
            resName: user.name
        })
    }



    pname = (e) => {
        this.setState({
            ProductName: e.target.value,
            pCatogery: false

        })
    }




    catogery = (e) => {
        this.setState({
            ProductCatogery: e.target.value,
            pPrice: false

        })
    }

    price = (e) => {
        this.setState({
            ProductPrice: e.target.value,
            pimg: false

        })
    }




    getImageURL = async (e) => {
        let imageName = e.target.files[0].name
        let ref = firebaseApp.storage().ref('/').child(`productsImages/${imageName}`)
        await ref.put(e.target.files[0])
        ref.getDownloadURL().then((url) => {
            console.log(url)
            this.setState({
                ProductImage: url,
                disableBtn: false
            })
        })

    }

    saveProduct = async () => {
        let { ProductPrice, ProductCatogery, ProductImage, ProductName,resName} = this.state
        let tag = await localStorage.getItem('tags')
        tag = JSON.parse(tag)
        let data = {
            ProductPrice, ProductCatogery, ProductImage,ProductName,resName
        }
        console.log(data)

        await this.props.AddProduct(data, tag)
        this.setState({
            ProductName: '',
            ProductPrice: '',
            ProductCatogery: '',
            ProductDescription: '',
            ProductImage: ''
        })
    }

    result(params) {
        localStorage.setItem('tags', JSON.stringify(params))
    }


        


    render() {
        const data = [{
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
                    <Navbar path={this.props.history} link='/profile' list={[{ name: 'Home', path: '/resturant-home' }, { name: 'Delete Product', path: '/delete' }]} />
                </div>

                <Grid container justify="center" spacing={2}>
                    <Grid item xs={11} sm={12} md={8} lg={5}>
                        <Paper>
                            <div >
                                <InputPage className='input' value={this.state.ProductName} type='text' label="Product Name" onChange={this.pname} />
                                <InputPage className='input' value={this.state.ProductCatogery} type='text' disabled={this.state.pCatogery} label="Product Catogery" onChange={this.catogery} />
                                <InputPage className='input' value={this.state.ProductPrice} type='number' disabled={this.state.pPrice} label="Product Price" onChange={this.price} />
                                <InputPage className='input' disabled={this.state.pimg} type='file' onChange={this.getImageURL} />
                                <div className="change">
                                    <Multiselect options={data} className='ml' onSelectOptions={this.result} />
                                </div>
                                <br />
                                <div style={{ textAlign: 'center' }}>
                                    <Button click={this.saveProduct} disabled={this.state.disableBtn} color='unique'>Add Product</Button>
                                </div>

                            </div>
                        </Paper>
                    </Grid>
                </Grid>


                <div style={{ marginTop: '50px' }} >
                    <FooterPagePro />
                </div>



            </div>
        );
    }
}





const mapStateToProps = state => {
    return {
        name: state.MainReducer.name,
        user: state.AuthReducer.currentUser
    }

}

const mapDispatchToProps = dispatch=>{
    return{
        AddProduct : (data,tag)=>dispatch(AddProduct(data,tag)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddProdctCom)
