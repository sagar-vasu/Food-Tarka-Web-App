import React from 'react'
import { AccountCard, Navbar, FooterPagePro } from '../../Components'
import { connect } from 'react-redux'



class MyAccount extends React.Component {
    constructor() {
        super()
        this.state = {
            user: ''
        }
    }


    componentDidMount() {
        let user = localStorage.getItem('user')
        user = JSON.parse(user)
        this.setState({
            user
        }
        )
    }



    render() {
        let { user } = this.state
        return (
            <div>
                <div>
                    <Navbar path={this.props.history} list={[{ name: 'Add Product', path: '/add' }, { name: 'Delete Product', path: '/delete' }]} />
                </div>
                <div style={{ marginTop: '50px' }}>
                    <AccountCard name={user.name} certificate={user.certificate} city={user.city} email={user.email} />
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
        name: state.MainReducer.name,
        user: state.AuthReducer.currentUser
    }

}

// const mapDispatchToProps = dispatch=>{
//     retun{


//     }
// }

export default connect(mapStateToProps)(MyAccount)