import Accordion from "./components/Accordion/Accordion";
import AccordionItem from "./components/Accordion/AccordionItem";

function App() {
  return (  
    <main>
      <seciton>
        <h2>Why work with us?</h2>
        <Accordion className="accordion">
          <AccordionItem className="accordion-item" title="We got 20 years experience">
            <article>
              <p>You can&apos;t go wrong with us.</p>
              <p>We are in the business of planning highly individualised  vaction trips for more han 20 years.</p>
            </article>
          </AccordionItem>
          <AccordionItem className="accordion-item" title="We're wokring with local guides">
            <article>
              <p>We are not doing this along from our office.</p>
              <p>Instead we are working with local guides to ensure a safe and pleasant vacation.</p>
            </article>
          </AccordionItem>
        </Accordion>
      </seciton>
    </main>
  )
}

export default App;
