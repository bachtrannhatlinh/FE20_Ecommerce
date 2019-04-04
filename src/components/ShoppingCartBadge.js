import React, { Component } from 'react'
import {connect} from 'react-redux';
import {Badge, Icon} from 'antd';
import {Link} from 'react-router-dom'

class ShoppingCartBadge extends Component {
  render() {
    return (
     <Link to='/shopping-cart'>
        <Badge count={this.props.addedProducts.length}>
          <Icon style={{fontSize : 25}} type="shopping-cart"></Icon>
        </Badge>                            
    </Link> 
    )
  }
}

const mapStateToProps = (state) =>({
    addedProducts : state.shoppingCartReducer.addedProducts,//danh sách các sản phẩm trong giỏ hàng
    // total : state.shoppingCartReducer.total,//tổng số tiền
  });
  
  //Nối các functions vào props (functions) của View Component
  const mapDispatchToProps = (dispatch) =>({
    // addToCart : (product , quantity) => dispatch(addToCart(product,quantity)),//khi truyền vào là dispatch và addtocart
  });
  
  export default connect(mapStateToProps , mapDispatchToProps)(ShoppingCartBadge);
