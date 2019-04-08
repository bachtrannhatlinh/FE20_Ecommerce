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
    addedProducts : state.shoppingCartReducer.addedProducts,
  });
  
const mapDispatchToProps = (dispatch) =>({
  });
  
export default connect(mapStateToProps , mapDispatchToProps)(ShoppingCartBadge);
