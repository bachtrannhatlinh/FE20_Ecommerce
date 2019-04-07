import React, { Component } from 'react'
import { Card , Icon } from 'antd';
import {connect} from 'react-redux';
import { addToCart } from '../modules/shoppingCart/actions'
const { Meta } = Card;

class Product extends Component {
  render() {
    return (
      <Card
          hoverable
          style={{ width: 300 }}
          cover={<img alt="" src={this.props.product.img} />
        }
        actions={[//là mảng gồm các component
         <div style={{fontSize : 25}}>
          <Icon type="shopping-cart" onClick={()=>{
            this.props.addToCart(this.props.product , 1);
          }} /></div>
        ]}
        >
          <Meta
            title={this.props.product.name}
            description={this.props.product.price}
          />
          <div style={{paddingTop : 12}}>
            <p>Description...</p>
          </div>
        </Card>
    );
  }
}

const mapStateToProps = (state) =>({
  // addedProducts : state.shoppingCartReducer.addedProducts,//danh sách các sản phẩm trong giỏ hàng
  // total : state.shoppingCartReducer.total,//tổng số tiền
});

//Nối các functions vào props (functions) của View Component
const mapDispatchToProps = (dispatch) =>({
  addToCart : (product , quantity) => dispatch(addToCart(product,quantity)),//khi truyền vào là dispatch và addtocart
});

export default connect(mapStateToProps , mapDispatchToProps)(Product);
