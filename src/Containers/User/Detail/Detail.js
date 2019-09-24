import React, { Component } from "react";
import { Navbar, Chip, DetailCard, FooterPagePro } from '../../../Components'
import { MDBCard } from 'mdbreact'
import { connect } from 'react-redux'

import { ResProducts } from '../../../Store/Actions/main-action'



class DetailRes extends Component {
    constructor() {
        super()
        this.state = {

        }
    }


    componentDidMount() {
        let name = this.props.location.state.name
        this.props.ResProducts(name)
    }
    render() {
        var x = this.props.location.state.certificate
        return (
            <div>
                <Navbar icon='home' link='/user-profile' list={[{ name: 'Resturant', val: '/user-home' }]} />
                <div>

                    <MDBCard className="card-image" style={{
                        backgroundImage:
                            `url(${x})`
                        
                    }}>
                        <div className="text-white text-center d-flex align-items-center rgba-black-strong">
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                    </MDBCard>

                </div>



                <div style={{ textAlign: 'center',marginBottom:'40px' }}>
                    {this.props.ResturentProducts.map((val, i) => {
                        return <Chip catogery={val.ProductCatogery} />

                    })}
                </div>



                <div>
                    {
                        this.props.ResturentProducts.map((val, i) => {
                            return <DetailCard tag={val.tad} name={val.ProductName} catogery={val.ProductCatogery} price={val.ProductPrice} img={val.ProductImage} />
                        })
                    }
                </div>




                <div style={{ marginTop: '50px' }}>

                    <FooterPagePro />
                </div>
            </div>
        )

    }

}


const mapStateToProps = state => {
    return {
        ResturentProducts: state.MainReducer.ResturentProducts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        ResProducts: (user) => dispatch(ResProducts(user))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(DetailRes)


