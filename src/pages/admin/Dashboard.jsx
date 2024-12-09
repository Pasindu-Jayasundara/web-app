import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <Container fluid>
            <Row className="mt-4">
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Users</Card.Title>
                            <Card.Text>
                                Manage users and their permissions.
                            </Card.Text>
                            <Button variant="primary">Go to Users</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Settings</Card.Title>
                            <Card.Text>
                                Configure application settings.
                            </Card.Text>
                            <Button variant="primary">Go to Settings</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Reports</Card.Title>
                            <Card.Text>
                                View and generate reports.
                            </Card.Text>
                            <Button variant="primary">Go to Reports</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>Analytics</Card.Title>
                            <Card.Text>
                                Analyze application data.
                            </Card.Text>
                            <Button variant="primary">Go to Analytics</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;