import React, { Component } from 'react';

import {
    Button, Modal, ModalHeader, ModalBody,
    FormGroup, Input, Label
} from 'reactstrap';

import { Control, LocalForm, Errors } from 'react-redux-form';



class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
        }

        // this.comment = '';

        this.toggleCommentModal.bind(this);
        this.handleModal.bind(this);

        (JSON.stringify(props));

    }

    toggleCommentModal() {
        // alert('toggleCommentModal');
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleModal() {
        this.toggleCommentModal();
        // worked with LocalForm - regular Form caused page refresh and
        // POST results were not being able to be fetched
        this.props.postComment(this.props.dishId, 5 , 'JoeZ', this.comment.value);
    }

    // <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal.bind(this)}>
    // <ModalHeader toggle={this.toggleModal.bind(this)}>Login</ModalHeader>

    // Use LocalForm not Form - stops the page from being rerouted through Router
    // causing full page load
    render() {
        return (
            <React.Fragment>
                <Modal isOpen={this.state.isModalOpen} toggle={() => this.toggleCommentModal() }>
                    <ModalHeader toggle={() => this.toggleCommentModal() }>Comments</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => this.handleModal(values)}>
                            <FormGroup>
                                <Label htmlFor="comment">Comment</Label>
                                <Input type="textarea" id="comment" name="comment"
                                    innerRef={(input) => { this.comment = input } } />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Submit</Button>

                        </LocalForm>
                    </ModalBody>
                </Modal>
                {/* <Button onClick={(values) => this.toggleCommentModal(values) }>Add Comment</Button> */}
                <Button onClick={(values) => this.toggleCommentModal() }>Add Comment</Button>

            </React.Fragment>
        );
    }
}

export default CommentForm;