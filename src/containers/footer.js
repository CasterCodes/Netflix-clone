import React from "react";

import { Footer } from "../components";

export const FooterContainer = () => {
  return (
    <Footer>
      <Footer.Title>Question ? Contact Us</Footer.Title>
      <Footer.Break />
      <Footer.Row>
        <Footer.Column>
          <Footer.Link>FAQs</Footer.Link>
          <Footer.Link>Investor Relations</Footer.Link>
          <Footer.Link>Ways to Watch</Footer.Link>
          <Footer.Link>Coporate Information</Footer.Link>
          <Footer.Link>Netflix Originals</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link>Help Center</Footer.Link>
          <Footer.Link>Terms of use</Footer.Link>
          <Footer.Link>Jobs</Footer.Link>
          <Footer.Link>Contact Us</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link>Account</Footer.Link>
          <Footer.Link>Redeem Gift Cards</Footer.Link>
          <Footer.Link>Privancy </Footer.Link>
          <Footer.Link>Speed Test</Footer.Link>
        </Footer.Column>
        <Footer.Column>
          <Footer.Link href="./media">Media Center</Footer.Link>
          <Footer.Link>Buy Gifts Cards</Footer.Link>
          <Footer.Link>Cookie Preferences</Footer.Link>
          <Footer.Link>Legal Notices</Footer.Link>
        </Footer.Column>
      </Footer.Row>
      <Footer.Break />
      <Footer.Text>Netflix Kenya</Footer.Text>
    </Footer>
  );
};
