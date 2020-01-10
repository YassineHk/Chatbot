import React, { Component } from 'react'
// import Card from 'react-bootstrap/Card'
import {  Form } from 'react-bootstrap'
import './Card.css';
// import { FaBeer } from 'react-icons/fa';


export default class Cart extends Component {

    constructor(props) {
        super(props)
        this.state = {
            Question: "Quelle est le nom de votre société ?",
            Placeholder: "Nom de société",
            Note: "Conformément au Registre du commerce"
        }
    }

    componentDidUpdate() {
        if (this.props.ask.Question !== this.state.Question) {
            this.setState({
                Question: this.props.ask.Question,
                Placeholder: this.props.ask.Placeholder,
                Note: this.props.ask.Note
            })
        }
    }

    render() {
        return (
                    <div className="divCart">
                        <Form>
                        <Form.Group controlId="formBasicEmail">
                            <label >{this.state.Question}</label>
                            <Form.Text className="text-muted">
                            <input type="text" className="inputText" placeholder={this.state.Placeholder} />
                            </Form.Text>
                            {/* <Form.Text className="text-muted">
                                {this.state.Note}
                            </Form.Text> */}
                        </Form.Group>
                        {/* <Button className="btn" variant="primary" type="submit">
                            Suivant
                        </Button> */}
                    </Form>
                    </div>
        )
    }
}
