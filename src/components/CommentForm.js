import React, { Component } from 'react';

import {
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label
} from 'reactstrap';


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
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleModal(values) {
        this.toggleCommentModal();
        // alert(JSON.stringify(this.props))
        this.props.addComment(this.props.dishId, 5 , 'JoeZ', this.comment.value);
    }

    // <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal.bind(this)}>
    // <ModalHeader toggle={this.toggleModal.bind(this)}>Login</ModalHeader>

    render() {
        return (
            <React.Fragment>
                <Modal isOpen={this.state.isModalOpen} toggle={() => this.toggleCommentModal() }>
                    <ModalHeader toggle={() => this.toggleCommentModal() }>Comments</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={() => this.handleModal()}>
                            <FormGroup>
                                <Label htmlFor="comment">Comment</Label>
                                <Input type="textarea" id="comment" name="comment"
                                    innerRef={(input) => { this.comment = input } } />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Submit</Button>

                        </Form>
                    </ModalBody>
                </Modal>
                <Button onClick={(values) => this.toggleCommentModal(values) }>Add Comment</Button>

            </React.Fragment>
        );
    }
}

export default CommentForm;