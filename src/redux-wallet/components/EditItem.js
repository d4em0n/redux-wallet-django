import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';
import { getWalletId } from '../stores/store';
import { Redirect } from 'react-router';

class EditItem extends Component {
    constructor(props) {
        super(props);
        this.id = this.props.match.params.id;
        this.state = {item: getWalletId(this.id)};
        this.clickHandler = this.clickHandler.bind(this);
        this.handler = this.props.onSave;
        console.log(this.state);
    }

    componentWillReceiveProps (newProps) {
        this.id = newProps.match.params.id;
        this.setState({item: getWalletId(this.id)});
    }

    clickHandler(event) {
        event.preventDefault();
        let nodeAmount = this.amount; // this.refs.amount
        let nodeDesc = this.desc; // this.refs.desc
        let amount = parseInt(nodeAmount.value) || 0;
        let desc = nodeDesc.value;
        let item = {
            id: this.state.item.id,
            description: desc,
            amount: amount
        }
        console.log(amount)
        console.log(desc);
        this.handler(item);
        // Clear state and input
        this.setState({item: {id: 0, amount: 0, description: ''}});
        nodeAmount.value = '';
        nodeDesc.value = '';
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.clickHandler}>
                    {/*<input type="text" name="desc" placeholder="Description" ref="desc"/><br/>
                    <input type="text" name="amount" placeholder="Amount" ref="amount"/><br/>*/}
                    <InputGroup key={this.state.item.id}>
                        <Input placeholder="Salary" name="desc" id="desc" defaultValue={this.state.item.description} ref="desc" innerRef={(input) => (this.desc = input)} autoComplete="off"/>
                        <InputGroupAddon addonType="append">Description</InputGroupAddon>
                        <Input placeholder="300" type="number"
                            step="1" defaultValue={this.state.item.amount}
                            name="amount" id="amount" ref="amount"
                            innerRef={(input) => (this.amount = input)} autoComplete="off"/>
                        <InputGroupAddon addonType="append">Rp.</InputGroupAddon>
                    </InputGroup>
                    <Button type="submit" color="success" block>Save</Button>
                </form>
            </div>
        );
    }
}

export default EditItem;
