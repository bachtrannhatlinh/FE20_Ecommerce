import * as ActionTypes from '../constants/actionTypes';

const defaultState ={
  //sản phẩm đầu tiên bỏ vào giỏ hàng ? ( thường null)
    addedProducts :[],
    total :0,
    //xđ ban đầu đồi với 1 giỏ hàng , nó gồm những cái gì ???
};


var updateTotal = (items) =>{
    return items.reduce((total,item) =>(total+((item.product.price * item.quantity)*(100-item.product.discount)/100)),0);
}

const shoppingCartReducer = (state = defaultState , action) =>{
  switch(action.type){
    case ActionTypes.ADD_PRODUCT_TO_CART:
    //FIND ITEM BEFORE ADD TO CART , IF EXITS THEN UPDATE QUANTITY , ELSE ADD NEW ITEM WITH QUAITITY = 1
      var found = [...state.addedProducts].find(item => item.product.id === action.product.id);//đi vào giỏ hàng , đi tìm nếu có id cũ thì tăng object ( quantity lên 1)
      if(found){
          found.quantity++;
          var total = updateTotal([...state.addedProducts]);//update tổng số tiền phải trả
          return{//trả về các giá trị 
            ...state,//có cái gì thì giữ lại(... giữ hiện trạng của mảng cũ và mình add thêm 1 cái mới)
            addedProducts : [...state.addedProducts],//đang giữ cái cũ và thêm cái mới ( thêm 1 phần tử vào mảng)
            total : total//update lại total
          }
       }
    //ELSE ADD NEW ITEM WITH QUANTITY = 1
      var addedProducts = [...state.addedProducts , {product : action.product , quantity : action.quantity}];//trong trường hợp không tìm thấy thì mình tăng số lượng sản phẩm
      var total1 = updateTotal(addedProducts);
      return {//trả về các giá trị
        ...state,
        addedProducts : addedProducts,
        total : total1 
      };

      default : 
      return state;
  }
};

export default shoppingCartReducer; 