import React, { Component } from 'react';
import { ListGroup, ListGroupItem, Container, Row, Col, Table } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

class ItemsList extends Component {
    constructor(props) {
        super(props);
        this.deleteHandler = this.props.onDelete;
        this.clickHandler = this.clickHandler.bind(this);
    }
    clickHandler(item) {
        this.deleteHandler(item);
    }

    renderList() {
        let style = {
            paddingTop: '10px',
            paddingBottom: '10px',
        };
        let i = 0;
        return this.props.items.map((item) => {
            i += 1;
            let amountType = item.amount > 0 ? 'text-success' : 'text-danger';
            return (
                <Row key={item.id} style={style} className="item border-bottom">
                    <Col>{i}. <NavLink to={"/edit/"+item.id} className="item-desc">{capitalizeFirstLetter(item.description)}</NavLink></Col>
                    <Col className="text-right font-weight-bold"><span className={amountType}>Rp.{item.amount} </span><span className="item-delete" onClick={() => this.clickHandler(item)}>&times;</span></Col>
                </Row>
            );
        });
    }
    render() {
        return (
            <Container className="pt-5">
                <Col sm={{ size: 4, offset: 4}}>
                {this.renderList()}
                </Col>
            </Container>
        );
    }
}

export default ItemsList;
