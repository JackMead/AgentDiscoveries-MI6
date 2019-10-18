import * as React from 'react';
import {Button, ControlLabel, Form, FormControl, FormGroup} from 'react-bootstrap';
import {apiPost} from '../utilities/request-helper';

export default class DecodeEnemyMessageForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            message: {},
            enemyMessage: ''
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.onEnemyMessageUpdate = this.onEnemyMessageUpdate.bind(this);
    }

    render() {
        return (
            <React.Fragment>
                <div className='col-md-12'>
                    <Form onSubmit={this.onSubmit}>
                        <h3>Decode Enemy Message</h3>
                        <FormGroup>
                            <ControlLabel>Enemy message</ControlLabel>
                            <FormControl type='text' required
                                componentClass='textarea'
                                placeholder='Enter enemy message to decode'
                                value={this.state.enemyMessage}
                                onChange={this.onEnemyMessageUpdate}
                                id='enemy-message'/>
                        </FormGroup>
                        <Button id="decode-button" type='submit'>Decode</Button>
                    </Form>
                    <div id='code-result'>
                        <br />
                        {this.state.result ? <h3>Result: </h3> : ''}
                        <h4>{this.state.result}</h4>
                    </div>
                </div>
            </React.Fragment>

        );
    }

    onEnemyMessageUpdate(event) {
        this.setState({ enemyMessage: event.target.value });
    }

    onSubmit(event) {
        event.preventDefault();

        const body = {
            message: this.state.enemyMessage
        };

        const request = apiPost('decodemessage/enemy', body);

        request
            .then(response => this.setState({ result: response.message }))
            .catch(error => this.setState({ result: error.message }));
    }
}
