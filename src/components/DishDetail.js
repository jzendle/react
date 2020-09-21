import React from 'react'
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap'


const DishDetail = (props) => {


        let ret = <div className="row"></div>;
        if (!props.dish) // short circuit if there is no dish
            return ret;


        let review_txt = props.dish.reviews.map(
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
                        <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
                        <CardBody>
                            <CardTitle>props.dish.name}</CardTitle>
                            <CardText>{props.dish.description}</CardText>
                        </CardBody>

                    </Card>
                </div >
                <div className="col col-md-5 m-1">
                    <h1>Customer Reviews</h1>
                    {review_txt}
                </div>
            </div>

        return ret;
    };

export default DishDetail;
