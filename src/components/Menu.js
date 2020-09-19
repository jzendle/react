import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'
import DishDetail from '../components/DishDetail';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDish: null
    }
    console.log('ctor')
    console.log(this)
  }

  setSelected = (selection) => {
    this.setState({ selectedDish: selection })
  }

  componentDidMount() {
    console.log('componentDidMount')
  }
  
  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-5 m-1">
          <Card onClick={() => { console.log(dish); this.setSelected(dish) }}>
            <CardImg width="100%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });

    console.log('render')
    return (
      <div className="container">
        <div className="row">
          {menu}
        </div>
        <DishDetail dish={ this.state.selectedDish } />
      </div>
    );
  }
}

export default Menu;