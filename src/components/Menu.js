import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'

class Menu extends Component {

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
          <Card onClick={() => this.props.onClick(dish.id)  }>
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
      </div>
    );
  }
}

export default Menu;
