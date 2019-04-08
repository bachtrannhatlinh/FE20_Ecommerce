import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Table , Divider} from 'antd';
import { deleteProduct } from '../modules/shoppingCart/actions';

import {store} from '../store'

class ShoppingCartPage extends Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
    super(props);
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
      render:()=>(
        <span>
          <a href="javascript:;">+</a>
          <Divider type="vertical"></Divider>
          <a href="javascript:;">-</a>
        </span>
      ),
    },{
      title:'Delete',
      key:'detlete',
      render:( record)=>(
        <button data-id={record.product.id} onClick={deleteProductFunc} style={{fontSize:25 , borderRadius:300}}>
           Delete
        </button>
      ),
    }
  ];

  const { shoppingCartReducer } = store.getState();
    return (
      <div style={{display:'flex',flex:1}}>
        <Table columns={columns} dataSource={shoppingCartReducer.addedProducts}></Table>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) =>({
     deleteProduct : (id) => dispatch(deleteProduct(id)),
});

function deleteProductFunc(event) {
    const { id } = event.target.dataset; 
    store.dispatch(deleteProduct(id));
}
  
export default connect( mapDispatchToProps)(ShoppingCartPage);