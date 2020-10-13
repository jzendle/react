import React, { Component } from 'react';
import Menu from './Menu';
import Home from './Home';
import Header from './Header';
import Contact from './Contact';
import Footer from './Footer';
import DishDetail from './DishDetail';
import About from './About';
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';
import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';


const mapStateToProps = state => {
  return {
    comments: state.comments,
    dishes: state.dishes,
    promotions: state.promotions,
    leaders: state.leaders
  }
}


const mapDispatchToProps = dispatch => ({

  postComment: (dishId, rating, author, comment) => {
    // alert('mapDispatchToProps');
    dispatch(postComment(dishId, rating, author, comment));
  },
  fetchDishes: () => { dispatch(fetchDishes()) },
  fetchComments: () => { dispatch(fetchComments()) },
  fetchPromos: () => { dispatch(fetchPromos()) },
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },

});

class Main extends Component {

  componentDidMount() {
    // alert('componentDidMount: ' + JSON.stringify(this.props));
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }


  render() {
    //alert(JSON.stringify(this.props));

    const HomePage = () => {
      return (
        <Home
          dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
          dishesLoading={this.props.dishes.isLoading}
          dishesErrMess={this.props.dishes.errMess}
          promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
          promosLoading={this.props.promotions.isLoading}
          promosErrMess={this.props.promotions.errMess}
          leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    const DishWithId = ({ match }) => {
      return (
        <DishDetail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
          isLoading={this.props.dishes.isLoading}
          commentsErrMess={this.props.comments.errMess}
          errMess={this.props.dishes.errMess}
          comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
          postComment={ this.props.postComment }
        />
      );
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
          <Route path="/menu/:dishId" component={DishWithId} />
          <Route exact path="/contactus" component={() =>
            <Contact resetFeedbackForm={this.props.resetFeedbackForm} />} />
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

