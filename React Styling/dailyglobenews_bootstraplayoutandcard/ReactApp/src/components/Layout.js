import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Layout = () => {
  // write your code here
  return (
    <Container fluid>
      {/* Header */}
      <Row className="bg-danger text-white py-3">
        <Col className="text-center">
          <h1>Daily Globe News</h1>
        </Col>
      </Row>

      {/* Body */}
      <Row>
        {/* Sidebar */}
        <Col md={3} className="bg-light p-3">
          <h4>Categories</h4>
          <ul className="list-unstyled">
            <li>World</li>
            <li>Politics</li>
            <li>Business</li>
            <li>Technology</li>
            <li>Sports</li>
          </ul>
        </Col>

        {/* Main Content */}
        <Col md={9}>
          <Row>
            {/* First Article */}
            <Col md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>Tech Giants Clash Over AI Regulation</Card.Title>
                  <Card.Text>
                    A heated debate between major tech companies unfolded at the AI Summit as regulatory proposals take center stage...
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>


            {/* Second Article */}
            <Col md={6}>
              <Card className="mb-3">
                <Card.Body>
                  <Card.Title>World Cup 2025: Early Predictions</Card.Title>
                  <Card.Text>
                    As the qualifiers begin, fans and analysts are already making predictions for the biggest tournament in the world...
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Footer */}
      <Row className="bg-dark text-white py-2 mt-4">
        <Col className="text-center">
          <small>© 2025 Daily Globe News | All rights reserved</small>
        </Col>
      </Row>
    </Container>
  );
};

export default Layout;
