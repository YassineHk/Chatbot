import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import {Button,Form} from 'react-bootstrap'
import './Card.css';

export default class Cart extends Component {
    render() {
        return (
            <Card style={{width: "70%"}}>
                <Card.Body className="Card" >
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label style={{color: "#000000"}}>Quelle est le nom de votre société ?</Form.Label>
                            <Form.Control type="text" placeholder="Nom de la société" />
                            <Form.Text className="text-muted">
                                Conformément au Registre du commerce
                            </Form.Text>
                        </Form.Group>
                        <Button className="btn" variant="primary" type="submit">
                            Suivant
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
}
