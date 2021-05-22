import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Card,
  CardBody,
  CardGroup,
  Col,
  Container,
  Form,
  Input,
  InputGroup,
  Row,
} from "reactstrap";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };

    this.update = this.update.bind(this);
    this.displayLogin = this.displayLogin.bind(this);
  }

  update(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({
      [name]: value,
    });
  }

  displayLogin(e) {
    e.preventDefault();
    console.log("You are logged in");
    console.log(this.state);
    if (
      this.state.email == "raju@gmail.com" &&
      this.state.password == "12345"
    ) {
      window.location.href = "/Details";
    } else {
      alert("invalid email and password");
    }
  }

  render() {
    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="9" lg="1" xl="6">
              <CardGroup>
            
                <Card className="center">
                <div className=" align-items-center">
                  <CardBody>
                    <Form onSubmit={this.displayLogin}>
                      <h1>Login</h1>

                      <InputGroup className="mb-3">
                        <Input
                          type="text"
                          placeholder="Username..."
                          value={this.state.email}
                          onChange={this.update}
                          name="email"
                        />
                      </InputGroup>
                      <InputGroup className="mb-4">
                        <Input
                          type="password"
                          placeholder="Password..."
                          value={this.state.password}
                          onChange={this.update}
                          name="password"
                        />
                      </InputGroup>
                      {/* <input type="submit" value="submit" /> */}
                      <Button color="success" block>
                        Login
                      </Button>
                    </Form>
                  </CardBody>
                  </div>
                </Card>
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
  // return (
  // 	<div className="login">
  // 		<form onSubmit={this.displayLogin}>
  // 			<h2>Login</h2>
  // 			<div className="username">
  // 				<input
  // 					type="text"
  // 					placeholder="Username..."
  // 					value={this.state.email}
  // 					onChange={this.update}
  // 					name="email"
  // 				/>
  // 			</div>

  // 			<div className="password">
  // 				<input
  // 					type="password"
  // 					placeholder="Password..."
  // 					value={this.state.password}
  // 					onChange={this.update}
  // 					name="password"
  // 				/>
  // 			</div>

  // <input type="submit" value="submit" />

  //         {/* window.location.href = "/Details"; */}
  // 			</form>

  // 			{/* <Link to="/Details">Details</Link> */}
  // 		</div>
  // 	);
  // }
}
export default Login;
