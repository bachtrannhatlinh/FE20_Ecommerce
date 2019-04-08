import {connect} from 'react-redux';
import {addToCart, deleteProduct} from '../actions';
import ShoppingCartComponent from  '../components/ShoppingCartComponent'

const mapStateToProps = (state) =>({
    addedProducts : state.shoppingCartReducer.addedProducts,
    total : state.shoppingCartReducer.total,
});


const mapDispatchToProps = (dispatch) =>({
    addToCart : (product , quantity) => dispatch(addToCart(product,quantity)),
    deleteProduct : (id) => dispatch(deleteProduct(id)),
});

export default connect(mapStateToProps , mapDispatchToProps)(ShoppingCartComponent);
