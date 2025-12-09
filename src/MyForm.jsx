import { Form, Button, Container } from 'react-bootstrap';

   function ContactForm() {
     return (
       <Container className="my-5">
         <h2 className='tag'>GET IN TOUCH</h2>
         <Form>
           <Form.Control className="mb-3 rounded-pill w-50 myform" type="text" placeholder="Your Name" />
           <Form.Control className="mb-3 rounded-pill w-50 myform" type="email" placeholder="Your Email" />
           <Form.Control className="mb-3 rounded-pill w-50 myform" type="tel" placeholder="Your Phone" />
           <Form.Control className="mb-3 rounded w-50 myform" as="textarea" rows={3} placeholder="Message" />
           <Button variant="danger" className="p-2 px-4 py-4 myform1 ">Send</Button>
         </Form>
       </Container>
     );
   }
   export default ContactForm;