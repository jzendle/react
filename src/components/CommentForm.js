import React, { Component } from 'react';

import {
    Button, Modal, ModalHeader, ModalBody,
    Form, FormGroup, Input, Label
} from 'reactstrap';

const RenderButton = (props) => {
    return (<Button outline onClick={this.toggleModal()}>Add Comment</Button>);

}

class CommentForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isModalOpen: false,
            comment: 'fill me'
        }

        this.toggleCommentModal.bind(this)
        this.handleModal.bind(this)

    }

    toggleCommentModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleModal() {
        alert(this.comment.value)
        this.toggleCommentModal();
        this.setState({ comment: this.comment.value })
        alert(this.state.comment);
    }

    // <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal.bind(this)}>
    // <ModalHeader toggle={this.toggleModal.bind(this)}>Login</ModalHeader>

    render() {
        return (
            <React.Fragment>
                <Modal isOpen={this.state.isModalOpen} toggle={() => this.toggleCommentModal().bind(this)}>
                    <ModalHeader toggle={() => this.toggleCommentModal().bind(this)}>Comments</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={() => this.handleModal()}>
                            <FormGroup>
                                <Label htmlFor="comment">Comment</Label>
                                <Input type="textarea" id="comment" name="comment"
                                    innerRef={(input) => this.comment = input} />
                            </FormGroup>
                            <Button type="submit" value="submit" color="primary">Submit</Button>

                        </Form>
                    </ModalBody>
                </Modal>
                <Button onClick={() => { this.toggleCommentModal() }}>Add Comment</Button>

            </React.Fragment>
        );
    }
}

export default CommentForm;