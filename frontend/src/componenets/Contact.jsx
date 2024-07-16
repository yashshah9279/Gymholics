import React, { useState } from 'react'
import {ClipLoader } from 'react-spinners'
const Contact = () => {
    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [message,setMessage] = useState("");
    const [loading,setLoading] = useState(false);
  return (
     <section className="contact">
        <form>
            <h1>Contact Us</h1>
            <div>
                <label>Name</label>
                <input type="text"
                value={name} 
                onChange={(e)=> setName(e.target.value)}
                ></input>
            </div>
            <div>
                <label
                value={email} 
                onChange={(e)=> setEmail(e.target.value)}
                >Email</label>
                <input type="wmail"></input>
            </div>
            <div>
                <label>Message</label>
                <input type="text"
                value={message} 
                onChange={(e)=> setMessage(e.target.value)}
                ></input>
            </div>
            <button type='submit' disabled={loading}
            style={{ display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
            }}>
                {loading && <ClipLoader size={20} color="white"/>}
                Send Message
            </button>
        </form>
     </section>
  )
}

export default Contact