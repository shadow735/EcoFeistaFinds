import React, { useState } from "react";
import './Contact.css';
import axios from "axios";



function Contact() {

  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  // Define a function to handle form submission
  async function submit(e) {
    e.preventDefault();
  
    try {
      // Send the form data to the server
      const response = await axios.post("http://localhost:8000/contact", {
        fullname,
        email,
        message,
      });
  
      // Handle the response
      console.log("Submitted Successful");
      console.log(response.data); // Assuming the server responds with a message
    } catch (error) {
      console.error("Error submitting form:", error);
      // You can also display an error message to the user here
    }
  };

  return (
    <div>
      <section className="contact">
        <div className="content">
          <h2><strong> CONTACT US</strong></h2>
          <p>You can contact us from here. Join with us for this noble cause.</p>
        </div>
        <div className="container-contact">
          <div className="contact-info">
          
            {/* ... (rest of your code) */}
          </div>
          <div className="contact-form">
            <form onSubmit={submit}> {/* Changed action to onSubmit */}
              <h2> Send Message</h2>
              <div className="inputBox">
                <input type="text" name="Fullname" onChange={(e) => setFullname(e.target.value)}
                  required="required" placeholder="Full Name" />

              </div>
              <div className="inputBox">
                <input
                  type="email"
                  name="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  required="required"
                  placeholder="Email"
                />


              </div>
              <div className="inputBox">
                <input type="text" name="Message" onChange={(e) => setMessage(e.target.value)}
                  required="required" placeholder="Message" />

              </div>
              <div className="inputBox">
                <input type="submit" value="Submit" onClick={submit} />
              </div>
            </form>
          </div>
        </div>
      
      </section>
    </div>
    
  );
}

export default Contact;
