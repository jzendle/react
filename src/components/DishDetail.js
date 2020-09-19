
import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'


class DishDetail extends Component {



    render() {

        let ret = <div className="row"></div>;
        if (!this.props.dish) // short circuit if there is no dish
            return ret;


        let review_txt = this.props.dish.reviews.map(
            (review) => {
                return (<div key={review.id} >
                    <p> {review.text} </p>
                </div>)
            }
        )
        if ( !review_txt|| 0 === review_txt.length )
            review_txt = <div>no reviews yet. </div>;

        ret =
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg width="100%" src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>

                    </Card>
                </div >
                <div className="col col-md-5 m-1">
                    <h1>Customer Reviews</h1>
                    {review_txt}
                </div>
            </div>

        return ret;
    }
};

export default DishDetail;