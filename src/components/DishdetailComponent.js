import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle, Row } from "reactstrap";

const Dishdetail = (props) => {
        const comments = props.comments;
        const listItems = comments.map((comment) =>
        <div>
          <p>{comment.comment}</p>
          <p>--{comment.author} , {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(comment.date)))}</p>
          <p></p>
          </div>
        );
  return (
    <div className="container">
      <div class="row">
        <div class="col-5">
          <Card>
            <CardImg top src={props.image} alt={props.name} />
            <CardBody>
              <CardTitle>{props.name}</CardTitle>
              <CardText>{props.description}</CardText>
            </CardBody>
          </Card>
        </div>
        <div class="col-5">
          <h3>Comments</h3>
        <ul>{listItems}</ul>
        </div>
      </div>
    </div>
  );
};

export default Dishdetail;
