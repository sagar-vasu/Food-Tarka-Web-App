import React from 'react'
import { Navbar, Tab, FooterPagePro } from '../../../Components'

import './Home.css'



class ResHome extends React.Component {
    render() {
        return (
            <div>
                <Navbar path={this.props.history} link='/profile' list={[{ name: 'Add Product', path: '/add' }, { name: 'Delete Product', path: '/delete' }]} />

                <div style={{ marginTop: '50px' }}>
                    <Tab />

                </div>

                <div style={{ marginTop: '50px' }}>

                    <FooterPagePro />
                </div>
            </div>
        )
    }
}


export default ResHome