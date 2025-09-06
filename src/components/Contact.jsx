import React, { useState } from "react";
import { motion } from "framer-motion";
import "../App.css"
import {toast} from "react-hot-toast"
import {Mail, MapPin, Phone,} from "lucide-react"
// import { useScroll } from "framer-motion";

const Contact = () => {
    const [name,setName] = useState("")
    const [email,setEmail] = useState("")
    const [message,setMessage] = useState("")

  const submit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "1256a983-6769-4ac6-8200-87afa5596dc9");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
    //   console.log("Success", res);
      toast.success("Thank you ")
      setName("")
      setEmail("")
      setMessage("")
      
    }

  }
  return (
    <section id="contact">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch !
      </motion.h2>

      <motion.form 
        style={{ display: "flex", flexDirection: "column", width: "300px", margin: "auto" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        onSubmit={submit}
      >
      
        <input type="text" placeholder="Name" name="name" value={name} onChange={(e)=>setName(e.target.value)} required style={{ margin: "8px", padding: "8px" }} />
        <input type="email" placeholder="Email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} required style={{ margin: "8px", padding: "8px" }} />
        <textarea placeholder="Message" name="message" value={message} onChange={(e)=>setMessage(e.target.value)} required style={{ margin: "8px", padding: "8px" }}></textarea>
        <button type="submit">Send</button>
        
      </motion.form>

      <motion.div className="contact-info"
        style={{ marginTop: "30px"}}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <p><Mail size={20}/> Email: devparth1012@gmail.com</p>
        <p><Phone size={20}/> Phone: +91 8490056689</p>
        <p><MapPin size={20}/> Location: India</p>
      </motion.div>
    </section>
  );
};

export default Contact;