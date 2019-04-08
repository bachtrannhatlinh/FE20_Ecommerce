import * as ActionTypes from '../constants/actionTypes';

const defaultState ={
    addedProducts :[],
    total :0,
};

var updateTotal = (items) =>{
    return items.reduce((total,item) =>(total+((item.product.price * item.quantity)*(100-item.product.discount)/100)),0);
}

const shoppingCartReducer = (state = defaultState , action) =>{
  switch(action.type){
    case ActionTypes.ADD_PRODUCT_TO_CART:
    //FIND ITEM BEFORE ADD TO CART , IF EXITS THEN UPDATE QUANTITY , ELSE ADD NEW ITEM WITH QUAITITY = 1
      var found = [...state.addedProducts].find(item => item.product.id === action.product.id);
      if(found){
          found.quantity++;
          var total = updateTotal([...state.addedProducts]);
          return{ 
            ...state,
            addedProducts : [...state.addedProducts],
            total : total
          }
       }
      //ELSE ADD NEW ITEM WITH QUANTITY = 1
      var addedProducts = [...state.addedProducts , {product : action.product , quantity : action.quantity}];
      var total1 = updateTotal(addedProducts);
      localStorage.setItem('product', JSON.stringify(addedProducts))
      return {
        ...state,
        addedProducts : addedProducts,
        total : total1
      };
    case ActionTypes.DELETE_PRODUCT:
      return {
        ...state,
        addedProducts: [...state.addedProducts].filter(item => item.product.id !== action.id)
      }
    default : 
      return state;
  }
};

export default shoppingCartReducer; 