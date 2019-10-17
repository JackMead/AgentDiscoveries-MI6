import * as React from 'react';
import SearchResult from './search-result';
import {currentAgentId} from '../utilities/user-helper.js';
import QueryString from 'query-string';
import {apiGet} from '../utilities/request-helper';

export default class AgentLocationReports extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            results: [{}],
            message: {}
        };
    }

    componentDidMount(){
        const params = {
            agentId: currentAgentId()
        };

        const url = 'reports/locationstatuses?' + QueryString.stringify(params);

        apiGet(url)
            .then(results => this.setState({ results: results, message: {} }))
            .catch(error => this.setState({ message: { message: error.message, type: 'danger' } }));
    }

    render() {
        return (
            <SearchResult results={this.state.results} />
        );
    }

}