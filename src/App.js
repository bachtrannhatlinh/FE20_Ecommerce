import React, { Component } from 'react';
import axios from 'axios';
import { BrowserRouter as Router  ,Route} from "react-router-dom";
import {Provider} from 'react-redux';
import { Layout } from 'antd';
import './App.css';

import Products from './components/Products'
import ShoppingCartBadge from './components/ShoppingCartBadge'
import store from './store';
import ShoppingCartPage from './pages/ShoppingCartPage';

const {Header , Content , Footer} = Layout;
const url='http://5ca56e54ddab6d0014bc853f.mockapi.io/v1/Products';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      products : null
  }
}

componentWillMount(){
  axios.get(url).then(response =>{
    this.setState({products : response.data});
  });
}

render() {
  return (
    <Provider store={store}>
      <Layout>
        <Router>
        <Header>
          <div style={{marginLeft:700 , marginTop:10}}>
          <ShoppingCartBadge>
          </ShoppingCartBadge>
          </div>
        </Header>
        <Content>   
            <div>
            <Route exact path="/" render={() => <Products products={this.state.products}/>}/>
            <Route path="/shopping-cart" component={ShoppingCartPage}></Route>
            </div>
        </Content> 
          <Footer>

          </Footer>
        </Router>
      </Layout>
    </Provider>
    );
  }
}

export default App;
