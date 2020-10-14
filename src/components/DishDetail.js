import React from 'react'
import CommentForm from './CommentForm';
import { Card, CardImg, CardBody, CardText, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import { baseUrl } from '../shared/baseurl';
import { FadeTransform, Fade, Stagger } from 'react-animation-components';

const RenderDish = (props) => {
    return (
        <div className="col-12 col-md-5 m-1" >
            <FadeTransform in
                transformProps={{
                    exitTransform: 'scale(0.5) translateY(-50%) '
                }} >
                <Card>
                    <CardImg width="100%" src={baseUrl + props.dish.image} alt={props.dish.name} />
                    <CardBody>
                        <CardTitle>{props.dish.name}</CardTitle>
                        <CardText>{props.dish.description}</CardText>
                    </CardBody>
                </Card>
            </FadeTransform>
        </div>
    );
}
function RenderComments({ comments, dishId, postComment }) {

    // const RenderComments = (props) => {
    return (
        <div className="col-12 col-md-5 m-1" >
            <h4>Customer Comments</h4>
            <ul className="list-unstyled">
                <Stagger in>
                    {comments.map(
                        (comment) => {
                            return (
                                <Fade in >
                                    <li key={comment.id}>
                                        <p> {comment.comment}</p>
                                        <p> {comment.author}, {comment.date}</p>
                                    </li>
                                </Fade>
                            )
                        }
                    )
                    }
                </Stagger>
            </ul>
            <CommentForm dishId={dishId} postComment={postComment} />
        </div>
    )
}

const DishDetail = (props) => {
    // alert('DishDetail postComment' + JSON.stringify(props.postComment))
    if (props.isLoading) {
        return (
            <div className="container">
                <div className="row">
                    <Loading />
                </div>
            </div>
        )
    }
    else if (props.errMess) {
        return (
            <div className="container">
                <div className="row">
                    <h4>{props.errMess} </h4>
                </div>
            </div>
        )
    }
    else
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
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.comments} dishId={props.dish.id} postComment={props.postComment} />
                </div>
            </div>

        )
}

export default DishDetail;
