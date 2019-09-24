import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import firebaseApp from '../../Config/Firebase/Firebase';
import { connect } from 'react-redux'
import { GetProducts,deleteProduct } from '../../Store/Actions/main-action'




class Table extends React.Component {
  constructor() {
    super()
    this.state = {
      name: 'snackbar',
      products: ''
    }
  }


  async componentDidMount() {
    let user = await localStorage.getItem('user')
    user = JSON.parse(user)
    this.props.GetProducts(user)
  }



  deleteClass = (val, i) => {

    this.props.deleteProduct(val,i)
  

    // setTimeout(() => { this.setState({ name: 'snackbar' }) }, 3000);
    // this.setState({
    //   allClasses,
    //   name: 'show',
    //   message: "Class Deleted Succesfully"
    // })
  }


  render() {
    return (
      <div>

        <table className="table table-bordered table-responsive-md table-striped text-center">

          <thead>
            <tr>
              <th>#</th>
              <th className="text-center">Product Name</th>
              <th className="text-center">Product Price</th>
              <th className="text-center">Product Catogery</th>
              <th className="text-center">Delete</th>
            </tr>
          </thead>

          <tbody>

            {this.props.products.map((val, ind) => {
              return <tr key={ind}>
                <th scope="row" >{ind}</th>
                <td>{val.ProductName}</td>
                <td>{val.ProductPrice}</td>
                <td>{val.ProductCatogery}</td>
                <td><DeleteIcon onClick={() => this.deleteClass(val, ind)} /></td>
              </tr>
            })
            }


          </tbody>

        </table>
        <div id="snackbar" className={this.state.name}>{this.state.message}</div>






      </div>

    )
  }
}




const mapStateToProps = state => {
  return {
    products: state.MainReducer.products
  }

}
const mapDispatchToProps = dispatch => {
  return {
    GetProducts: (data) => dispatch(GetProducts(data)),
    deleteProduct : (val,i)=> dispatch(deleteProduct(val,i))

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Table)