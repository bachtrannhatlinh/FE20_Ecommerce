//đi kết nối state với 1 component nào đó 
import {connect} from 'react-redux';
import {addToCart, deleteProduct} from '../actions';
import ShoppingCartComponent from  '../components/ShoppingCartComponent'

const mapStateToProps = (state) =>({//được sử dụng để chọn phần dữ liệu từ cửa hàng mà thành phần được kết nối cần
    addedProducts : state.shoppingCartReducer.addedProducts,//danh sách các sản phẩm trong giỏ hàng
    total : state.shoppingCartReducer.total,//tổng số tiền
});

//Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) =>({
    addToCart : (product , quantity) => dispatch(addToCart(product,quantity)),//khi truyền vào là dispatch và addtocart
    deleteProduct : (id) => dispatch(deleteProduct(id)),
});

export default connect(mapStateToProps , mapDispatchToProps)(ShoppingCartComponent);

 //kết nối component view nào đó , để component view đó có 1 function view addtocart 
 //nó có thêm 2 function , thuộc tính là addedProduct và total (bổ sung thêm các props)