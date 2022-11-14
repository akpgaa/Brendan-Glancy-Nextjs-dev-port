import { feedbacks } from "../portfolio";
import React from "react";
import { Col, Container, Row } from "reactstrap";
import FeedbackCard from "../components/FeedbackCard";
import { Fade } from "react-reveal";

const Feedbacks = () => {
  return (
    <section className="section section-lg">
      <Container>
        <Fade bottom duration={1000} distance="40px">
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="fa fa-star text-primary" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-primary">Recommendations</h4>
            </div>
          </div>
          <Row className="row-grid align-items-center">
            {feedbacks.map((data, i) => {
              return (
                <Col key={i} lg={6}>
                  <FeedbackCard data={data} />
                </Col>
              );
            })}
          </Row>
        </Fade>
      </Container>
    </section>
  );
};

export default Feedbacks;
