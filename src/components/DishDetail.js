import React from 'react'
import CommentForm from './CommentForm';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import { addComment } from '../redux/ActionCreators';

const RenderDish = (props) => {
    return (
        <Card>
            <CardImg width="100%" src={props.dish.image} alt={props.dish.name} />
            <CardBody>
                <CardTitle>{props.dish.name}</CardTitle>
                <CardText>{props.dish.description}</CardText>
            </CardBody>
        </Card>
    );
}
function RenderComments({comments, addCommentFunc, dishId}) {

// const RenderComments = (props) => {
    return (
        <React.Fragment>
            <h4>Customer Comments</h4>
            { comments.map(
                (comment) => {
                    return (
                        <div key={comment.id}> <p> {comment.comment}</p></div>
                    )
                }
            )
            }
        </React.Fragment>
    )
}

const DishDetail = (props) => {
    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>

                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish={props.dish} />
                </div>
                <div className="col col-md-5 m-1">
                    <RenderComments comments={props.comments}
                    addCommentFunc={props.addCommentFunc} 
                    dishId={props.dish.id} />
                    <CommentForm dishId={props.dish.id} addCommentFunc={props.addCommentFunc}/>
                </div>
            </div>
        </div>

    )
}

export default DishDetail;
