import React from "react";
import "../style.css"

function Contact() {
    return (
        <div>
            <main className="container">

                <section className="row">
                    <section className="col-md-12">
                        <h1>Contact</h1>
                    </section>
                </section>

                <hr></hr>

                <section className="contactInfo">
                    <h4>Feel free to contact me with any questions/inquiries using the contact information below:</h4>
                    <br></br>
                    <p>Name: Andrew Anthony</p>
                    <p>Email: a.anthony1835@gmail.com</p>
                    <p>Phone number: (360)-390-8833</p>
                    <p><a href="https://github.com/andrew1835" target="_blank">Github</a></p>
                    <p><a href="https://linkedin.com/in/andrew-anthony-a62357159" target="_blank">LinkedIn</a></p>
                </section>
            </main>
        </div>
    );
}

export default Contact;
