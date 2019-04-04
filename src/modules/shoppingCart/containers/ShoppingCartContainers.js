//đi kết nối state với 1 component nào đó 
import {connect} from 'react-redux';
import {addToCart} from '../actions';
import ShoppingCartComponent from  '../components/ShoppingCartComponent'

const mapStateToProps = (state) =>({
    addedProducts : state.shoppingCartReducer.addedProducts,//danh sách các sản phẩm trong giỏ hàng
    total : state.shoppingCartReducer.total,//tổng số tiền
});

//Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) =>({
    addToCart : (product , quantity) => dispatch(addToCart(product,quantity)),//khi truyền vào là dispatch và addtocart
});

export default connect(mapStateToProps , mapDispatchToProps)(ShoppingCartComponent);

//đây là 1 cách chúng ta kết nối đến 1 component view nào đó để component view đó có 1 function là addtocart và
//nó có 2 thuộc tính : addProducts và total 