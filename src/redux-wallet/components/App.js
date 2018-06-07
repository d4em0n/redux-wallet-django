import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNewItem, deleteItem, editItem, setItemState, addItemId } from '../actions/walletActions';
import { bindActionCreators } from 'redux';
import { Container, Row, Col } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import ItemsList from './ItemsList';
import AddItem from './AddItem';
import EditItem from './EditItem';
import {getTotalBudget, store} from '../stores/store';

import {getAllWallet, postWallet, deleteWallet, editWallet} from '../util/walletApi';

class App extends Component {
    componentDidMount() {
        getAllWallet().then(data => {
            this.props.dispatch(setItemState(data));
        });
    }
    render() {
        let total = getTotalBudget();
        let totalType = total > 0 ? 'text-success' : 'text-danger';
        return (
            <Router>
                <Container className="pt-5">
                    <div className="text-center">
                        <h3 className="text-muted">Redux Wallet</h3>
                        <h4 className={totalType + ' font-weight-bold'}>Rp.{total}</h4>
                        <Switch>
                            <Route exact path="/" component={(props) =>
                                    <AddItem onClickHandler={(item) => postWallet(item.description, item.amount).then((data) => {
                                        this.props.dispatch(addItemId(data));
                                    })} {...props}/>}
                            />
                            <Route exact path="/edit/:id" component={(props) => <EditItem onSave={(item) => {
                                editWallet(item.id, item.description, item.amount).then((data) => {
                                    this.props.dispatch(editItem(data));
                                })}
                            } {...props}/>} />
                        </Switch>
                    </div>
                <ItemsList items={this.props.items} onDelete={(item) => deleteWallet(item.id).then((data) => { this.props.dispatch(deleteItem(item)) })}/>
                </Container>
            </Router>
        )
    }
}

function mapStateToProps(state) {
    return {
        items: state.walletItems
    }
}

export default connect(mapStateToProps)(App);
