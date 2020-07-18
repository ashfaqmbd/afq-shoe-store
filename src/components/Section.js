import React, { Component } from 'react';
//import { render } from '@testing-library/react';
import Products from './section/Products';
import Details from './section/Details';
import {Route} from 'react-router-dom';
import Cart from './section/Cart'
import Payment from './section/Payment'



export class Section extends Component
 {
     render(){
    return (
      <section>
        <Route exact path="/product" component={Products} />
        <Route path="/product/:id" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route path="/payment" component={Payment} />

      </section>
    );
}}

export default Section;
