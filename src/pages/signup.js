import React, { useContext, useState } from "react";
import HeaderContainer from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import { FirebaseContext } from "../context/firebase";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../constants/routes";

const Signup = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [error, setError] = useState("");
  const { firebase } = useContext(FirebaseContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === "" || password === "" || firstName === "") {
      setError("Please fill all the fields");
    }

    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user.updateProfile({
          displayName: firstName,
          photoURL: Math.floor(Math.random() * 5) + 1,
        });
      })
      .then(() => {
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmail("");
        setPassword("");
        setFirstName("");
        setError(error.message);
      });
  };
  const isInvalid = email === "" || password === "" || firstName === "";
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSubmit}>
            <Form.Input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <Form.Input
              type="text"
              placeholder="Enter email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
            <Form.Submit disable={isInvalid}>Sign Up</Form.Submit>
          </Form.Base>
          <Form.Text>
            Already user? <Form.Link to="/signin">Sign in now !</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you not a bot.
            Learm more
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
};

export default Signup;
