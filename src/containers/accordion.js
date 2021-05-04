import React from "react";
import faqsData from "../fixtures/faqs.json";
import { Accordion } from "../components";
import { OptForm } from "../components";

const AccordionContainer = () => {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map((item) => (
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>
            <Accordion.Text>{item.body}</Accordion.Text>
          </Accordion.Body>
        </Accordion.Item>
      ))}
      <OptForm>
        <OptForm.Text>
          Ready to watch ? Enter your email to create or restart your membership
        </OptForm.Text>
        <OptForm.Input placeholder="Enter your email" />
        <OptForm.Button>Try It Now !</OptForm.Button>
      </OptForm>
    </Accordion>
  );
};

export default AccordionContainer;
