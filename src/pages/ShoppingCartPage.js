import React, { Component } from 'react'
import {connect} from 'react-redux'
import { Table , Divider ,Icon} from 'antd';
// import { addedProducts } from '../modules/shoppingCart/reducers'
import { deleteProduct } from '../modules/shoppingCart/actions';
// import addToCart from '../modules/shoppingCart/actions'

import {store} from '../store'

class ShoppingCartPage extends Component {
  constructor(props) {
    super(props);
    // this.deleteProduct = this.deleteProduct.bind(this)
  }

// deleteProduct = id =>{
//   this.setState({
//     addToCart:[...addedProducts],
//     addedProducts : this.state.addedProducts.filter(addToCart => addToCart.id !==id)
//   });
//   // Mỗi lần addToCart thì setState lại (add product đó vào state). Khi ấn xóa product thì chỉ cần set lại state đó
// };
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
    },{
      title:'Delete',
      key:'detlete',
      render:(text, record)=>(
        <button data-id={record.product.id} onClick={deleteProductFunc} style={{fontSize:25 , borderRadius:300}}>
           {/* <Icon  type="close-circle"  /> */}
           Delete
        </button>
      ),
    }
  ];

  const { shoppingCartReducer } = store.getState();
  console.log(shoppingCartReducer)
    return (
      <div style={{display:'flex',flex:1}}>
        <Table columns={columns} dataSource={shoppingCartReducer.addedProducts}></Table>
      </div>
    )
  }
}

// const mapStateToProps = (state) =>({
//     addedProducts : state.shoppingCartReducer.addedProducts,//danh sách các sản phẩm trong giỏ hàng
//     // total : state.shoppingCartReducer.total,//tổng số tiền
//   });




  //Nối các functions vào props (functions) của View Component
  const mapDispatchToProps = (dispatch) =>({
     deleteProduct : (id) => dispatch(deleteProduct(id)),//khi truyền vào là dispatch và addtocart
  });

  function deleteProductFunc(event) {
    // trong mỗi thẻ hhtml đều có event
    // event.target.dataset là lấy tất cả data-... trong thẻ html, cụ thể mình set trong button là
    // data-id, nên ở dưới mình khai báo theo kiểu destructor
    const { id } = event.target.dataset; // tương đương const id = event.target.dataset.id
    // rồi truyền id qua action
    // rồi xử lý trong reducers
    // có nghĩa ở đây mình gọi hàm ra và lấy giá trị để đưa qua reducers xử lý phải ko a ?
    // ờ ờ, ý tưởng là mình lấy id của product cần xóa, qua bên reducer dựa vào id để filter lại mảng cart
    store.dispatch(deleteProduct(id));
  }
  
export default connect( mapDispatchToProps)(ShoppingCartPage);