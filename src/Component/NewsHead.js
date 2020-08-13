import React, { Component } from "react";
import { Accordion, Card, Button } from "react-bootstrap";

class NewsHead extends Component {
  render() {
    return (
      <div className="container">
        <Accordion>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant="link" eventKey={this.props.index}>
                <b>{this.props.index + 1}.</b> {this.props.title}
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey={this.props.index}>
              <Card.Body>{this.props.desc} <a target="blank" href={this.props.url}>click here</a></Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </div>
    );
  }
}

export default NewsHead;
