import { Link } from "react-router-dom";
import bgImage from "../../assets/images/bg.png";
import Header from "../../components/Header";
import { Button, Col, Container, Image, Row } from "react-bootstrap";

const Welcome = () => {
  return (
    <Container fluid>
      <Row>
        <Col
          className="welcome-container"
          style={{ position: "relative", margin: 0, padding: 0 }}
        >
          <Header />
          <Image
            src={bgImage}
            alt="bg"
            style={{
              width: "100%",
              height: "100vh",
              objectFit: "cover",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: -1,
            }}
          />
          <Row
            className="text-center"
            style={{
              width: "100vw",
              height: "90vh",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Col>
              <p
                className="text-white"
                style={{ fontSize: "96px", fontWeight: "700", fontFamily: "Inter" }}
              >
                Best Foods
              </p>
              <p style={{
                fontSize: "24px",
                fontFamily: "Inter",
                fontWeight: "600",
                color: "white",
                marginTop: -50,
              }}>in one place</p>
              <Link to="shop" className="shop-link">
                <Button style={{
                    borderRadius: "7px",
                    backgroundColor: "rgba(215, 0, 0, 0.92)",
                    border: "none",
                    width: "180px",
                    height: "40px",
                    marginTop: "40px",
                }}>Eat Now</Button>
              </Link>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Welcome;
