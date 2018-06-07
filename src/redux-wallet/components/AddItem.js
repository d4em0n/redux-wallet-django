import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, InputGroupText, Input, Button } from 'reactstrap';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.handler = this.props.onClickHandler;
        this.clickHandler = this.clickHandler.bind(this);
        this.state = {
            item: {amount: 0, description: ''}
        }
    }

    clickHandler(event) {
        event.preventDefault();
        let nodeAmount = this.amount; // this.refs.amount
        let nodeDesc = this.desc; // this.refs.desc
        let amount = parseInt(nodeAmount.value) || 0;
        let desc = nodeDesc.value;
        console.log(amount)
        console.log(desc);
        this.state.item.amount = amount;
        this.state.item.description = desc;
        this.handler(this.state.item);
        // Clear state and input
        this.setState({item: {amount: 0, description: ''}});
        nodeAmount.value = '';
        nodeDesc.value = '';
    }

    render() {
        return (
            <div>
                <form onSubmit={this.clickHandler}>
                    <InputGroup>
                        <Input placeholder="Salary" name="desc" id="desc" ref="desc" innerRef={(input) => (this.desc = input)} autoComplete="off"/>
                        <InputGroupAddon addonType="append">Description</InputGroupAddon>
                        <Input placeholder="300"
                            type="number" step="1"
                            name="amount" id="amount"
                            ref="amount"
                            innerRef={(input) => (this.amount = input)}
                            autoComplete="off"/>
                        <InputGroupAddon addonType="append">Rp.</InputGroupAddon>
                    </InputGroup>
                    <Button type="submit" color="primary" block>Add</Button>
                </form>
            </div>
        );
    }
}

export default AddItem;
