import React from "react";
import faqsData from "../fixtures/faqs.json";
import { Accordion } from "../components";

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
    </Accordion>
  );
};

export default AccordionContainer;
