import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import {Button,Form} from 'react-bootstrap'

export default class Cart extends Component {
    render() {
        return (
            <Card>
                <Card.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="text" placeholder="Nom de la société" />
                            <Form.Text className="text-muted">
                                conformément au Registre du commerce
                            </Form.Text>
                        </Form.Group>
                        
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Card.Body>
            </Card>
        )
    }
}
