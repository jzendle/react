import React, { Component } from 'react';
import Menu from './Menu';
import Home from './Home';
import Header from './Header';
import Contact from './Contact';
import Footer from './Footer';
import DishDetail from './DishDetail';
import About from './About';
// import { DISHES } from '../shared/dishes';
// import { COMMENTS } from '../shared/comments';
// import { PROMOTIONS } from '../shared/promotions';
// import { LEADERS } from '../shared/leaders';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addComment } from '../redux/ActionCreators';


const mapStateToProps = state => {
  return {
    comments: state.comments,
    dishes: state.dishes,
    promotions: state.promotions,
    leaders: state.leaders
  }
}


const mapDispatchToProps = dispatch => ({

  addCommentFunc: (dishId, rating, author, comment) => {
    // alert('wtf');
    dispatch(addComment(dishId, rating, author, comment))
  }

});


// const mapDispatchToProps = (dispatch) => {

//   console.log('mapDispatchToProps');

//   return {

//     addComment: (dishId, rating, author, comment) => {
//       const pay = addComment(dishId, rating, author, comment);
//       console.log(JSON.stringify(pay))
//       dispatch(pay);
//     }
//   }

// };


class Main extends Component {

  render() {
    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.props.promotions.filter((promo) => promo.featured)[0]}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }
    const DishWithId = ({ match }) => {
      return (
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
          addCommentFunc={this.props.addCommentFunc}
        />);
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          <Route path="/about" component={() => <About leaders={this.props.leaders} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

// export default Main;
// export default withRouter(connect(mapStateToProps)(Main));
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));

