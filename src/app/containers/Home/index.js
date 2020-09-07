import React, { Component } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import './index.scss';
import Header from '../../components/RightContainer/Header';


class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }
    componentDidMount() {
    }

    render() {
        return (
            <div className="launch-dashboard-wrapper">
                <Header
                    routeName="HOME"
                />
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
    };
};

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
    },dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);