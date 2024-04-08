import { useAccordionContext } from "./Accordion.jsx";

export default function AccordionItem({ className, children }) {
  return <li className={className}>{children}</li>;
}
