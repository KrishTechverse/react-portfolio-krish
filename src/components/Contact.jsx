import { CONTACT } from "../constants"
import { motion } from "framer-motion";

const Contact = () => {
  return <div className="border-b border-neutral-900 pb-20">
    <motion.h1
    whileInView={{opacity: 1, y: 0 }}
    initial={{opacity: 0, y: -100 }}  
    transition={{ duration: 0.5 }}
    className="my-10 text-center text-4x1">
      Get in Touch
      </motion.h1>
    <div className="text-center tracking-tighter">
        <motion.p
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 1 }}
        className="my-4"><a href="https://maps.app.goo.gl/4o6GbW3r6dRLpnt38">{CONTACT.address}</a></motion.p>
        <motion.p 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 1 }}
        className="my-4"><a href="tel: 917879285574">{CONTACT.phoneNo}</a></motion.p>
        <a href="mailto: krishnasingh2007m@gmail.com" className="border-b">{CONTACT.email}</a>
    </div>
  </div>
}

export default Contact
