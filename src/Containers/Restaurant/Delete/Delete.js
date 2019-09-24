import React from 'react'
import Grid from '@material-ui/core/Grid';
import { Table, Navbar, FooterPagePro } from '../../../Components'

class Products extends React.Component {

    constructor() {
        super()
        this.state = {

        }
    }






    render() {
        return (
            <div>

                <div>
                    <Navbar path={this.props.history} link='/profile' list={[{ name: 'Home', path: '/resturant-home' }, { name: 'Add Product', path: '/add' }]} />
                </div>

                <div style={{ marginTop: '50px' }} >

                    <Grid justify='center' container spacing={3}>
                        <Grid item xs={12} md={12} sm={12} lg={9} >
                            <Table products={this.props.products} />
                        </Grid>
                    </Grid>

                </div>


                <div style={{ marginTop: '50px' }} >
                    <FooterPagePro />
                </div>

            </div>
        )
    }
}


export default Products