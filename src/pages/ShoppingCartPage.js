import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Table , Divider } from 'antd';
import axios from 'axios';
const url ="http://5c9d92423be4e30014a7d3bd.mockapi.io/api/products";



class ShoppingCartPage extends Component {

  componentWillMount(){
    axios.get(url).then(response =>{
      this.setState({products : response.data});
    });
  }
  
  render() {
    const columns =[{
      title :'Name',
      dataIndex : 'product.name',
      key : 'name',
      render : text => <a href="javascript:;">{text}</a>,
    },{
      title:'Price',
      dataIndex:'product.price',
      key:'price',
    },{
      title:'Quantity',
      dataIndex:'quantity',
      key:'quantity',
    },{
      title:'Action',
      key:'action',
      render:(text,record)=>(
        <span>
          <a href="javascript:;">+</a>
          <Divider type="vertical"></Divider>
          <a href="javascript:;">-</a>
        </span>
      ),
    }
  ];
    return (
      <div style={{display:'flex',flex:1}}>
        <Table columns={columns} dataSource={this.props.addedProducts}></Table>
      </div>
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
  
export default connect(mapStateToProps , mapDispatchToProps)(ShoppingCartPage);