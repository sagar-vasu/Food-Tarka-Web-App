import React from 'react'
import { Navbar, Paper, OutlinedTextFields, Button, MediaCard, Chip, FooterPagePro } from '../../../Components'
import Grid from '@material-ui/core/Grid';
import { MDBCard } from 'mdbreact'
import { AllProducts } from '../../../Store/Actions/main-action'
import './Home.css'
import { connect } from "react-redux";








class UserHome extends React.Component {
    constructor() {
        super()
        this.state = {
            products: []
        }

    }

    async componentDidMount() {

        await this.props.AllProducts()

    }


    render() {
        return (
            <div>
                <Navbar path={this.props.history} link='/user-profile' icon='home' list={[{ name: 'Resturant', val: '/user-home' }]} />
                <div>

                    <MDBCard className="card-image" style={{
                        backgroundImage:
                            "url(https://cdn.pixabay.com/photo/2014/06/11/17/00/cook-366875__340.jpg)"
                    }}>
                        <div className="text-white text-center d-flex align-items-center rgba-black-strong">
                            <Grid justify='center' container>
                                <Grid item xs={12} sm={12} lg={8} md={12}>
                                    <Paper>
                                        <OutlinedTextFields label='Search Your Resturant' style={{ width: '100%' }} />
                                        <Button color='unique' size='lg'  >Find Resturant</Button>
                                    </Paper>
                                    <br />
                                    <br />
                                    <br />
                                </Grid>
                            </Grid>
                        </div>
                    </MDBCard>

                </div>
                <div style={{ textAlign: 'center' }}>
                    <Chip catogery='list' />
                    <Chip catogery='list' />
                    <Chip catogery='list' />
                    <Chip catogery='list' />
                </div>

                <div style={{ marginTop: '50px' }}>

                    {
                        this.props.allProducts.map((val, i) => {
                            return <MediaCard click={() => this.props.history.push('/resturant-detail',{name:val.name,certificate:val.certificate})} name={val.name}
                                img={val.certificate}
                                tag={val.tags}

                            />
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
        allProducts: state.MainReducer.allProducts
    }

}

const mapDispatchToProps = dispatch => {
    return {
        AllProducts: () => dispatch(AllProducts()),
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserHome)