import React, { Component } from "react";
// import * as emailjs from "emailjs-com";
import emailjs from "emailjs-com";
import img from "../../assets/contact/contact4-smaller.jpg";
import { Button } from "../../components/generalStyles/Button.styles";
import { H1 } from "../../components/generalStyles/Fonts.styles";
import {
  Layout,
  Form,
  FormGroup,
  Label,
  Input,
  TextArea,
  Container,
  MainContainer,
  Img,
} from "./contact.styles";
class Contact extends Component {
  state = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };
  handleSubmit(e) {
    e.preventDefault();

    const { name, email, subject, message } = this.state;
    let templateParams = {
      from_name: email,
      to_name: name,
      subject: subject,
      message_html: message,
    };
    if (
      templateParams.from_name &&
      templateParams.to_name &&
      templateParams.subject &&
      templateParams.message_html !== ""
    ) {
      emailjs
        .send(
          "gmail",
          "template_G0k6egH5",
          templateParams,
          "user_WFFheQZ2ZvuYZQPZ31qJ3"
        )
        .then(
          (result) => {
            console.log(result.text);
          },
          (error) => {
            console.log(error.text);
          }
        );
      this.resetForm();
      alert("Formularz został wysłany");
    } else {
      alert("Uzupełnij wszystkie pola formularza kontaktowego");
    }
  }
  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }
  handleChange = (param, e) => {
    this.setState({ [param]: e.target.value });
  };
  render() {
    return (
      <Layout>
        <MainContainer>
          <Img src={img} alt="" />
          <Container empty></Container>
          <Container>
            <H1 quaternary className="p-heading1">
              Kontakt
            </H1>
            <Form onSubmit={this.handleSubmit.bind(this)}>
              {/* <Form onSubmit={() => this.handleSubmit}> */}
              <FormGroup controlId="formBasicEmail">
                <Label className="text-muted">E-mail</Label>
                <Input
                  type="email"
                  name="email"
                  value={this.state.email}
                  className="text-primary"
                  onChange={this.handleChange.bind(this, "email")}
                  placeholder="Enter email"
                />
              </FormGroup>
              <FormGroup controlId="formBasicName">
                <Label className="text-muted">Imię</Label>
                <Input
                  type="text"
                  name="name"
                  value={this.state.name}
                  className="text-primary"
                  onChange={this.handleChange.bind(this, "name")}
                  placeholder="Name"
                />
              </FormGroup>
              <FormGroup controlId="formBasicSubject">
                <Label className="text-muted">Temat</Label>
                <Input
                  type="text"
                  name="subject"
                  className="text-primary"
                  value={this.state.subject}
                  onChange={this.handleChange.bind(this, "subject")}
                  placeholder="Subject"
                />
              </FormGroup>
              <FormGroup secondary controlId="formBasicMessage">
                <Label className="text-muted">Wiadomość</Label>
                <TextArea
                  type="textarea"
                  name="message"
                  className="text-primary"
                  value={this.state.message}
                  onChange={this.handleChange.bind(this, "message")}
                  placeholder="Message"
                />
              </FormGroup>
              <Button tertiary variant="primary" type="submit">
                Wyślij
              </Button>
            </Form>
          </Container>
        </MainContainer>
      </Layout>
    );
  }
}

export default Contact;

// https://medium.com/@eesh.t/send-email-using-emailjs-and-react-form-9993bb6929d8
// https://blog.mailtrap.io/react-contact-form/
