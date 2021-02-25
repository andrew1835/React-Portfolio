import React from "react";
import "../style.css"
import Project from "../Project"
import Footer from "../Footer"
import Memory from "../Images/MemoryBank.jpg"
import Home from "../Images/HomeScreen.jpg"
import Password from "../Images/Password_Gen.jpg"
import Image from "../Images/Andrew_Coding_Resume.pdf"
import Google from "../Images/GoogleLibrary.jpg"
// import "../Images"

function Portfolio() {
    return (
        <div>
            <main className="container">

                <section className="row">
                    <section className="col-md-12">
                        <h1>Projects</h1>
                    </section>
                </section>

                <hr></hr>

                <section className="sampleResume">
                    <p>Resume: <a href={Image} target="_blank">Click here to download</a></p>
                </section>
            </main>
            <Project
                // Not sure if you need to put curly brackets around the stuff after description
                title="MemoryBank"
                description="This was the second project I completed for University of Washington's full-stack coding bootcamp. It's a full
                stack web application allows the user to create an account, log journal entries and save a picture along with
                each entry. It's also connected to an astrology API that gives a new horrorscope each day based on the user's
                sign. The journal entries, photos, and horrorscope information is all stored in a database (Heroku) and can be
                accessed from the 'History' page on
                this application."
                siteLink="https://memorybank2021.herokuapp.com/"
                gitHub="https://github.com/andrew1835/code-refractor"
                src={Memory}
                imageDescription="Memorybank Home"
            />
            <Project
                // Not sure if you need to put curly brackets around the stuff after description
                title="In The Moment"
                description="This was the first major project I completed for the coding bootcamp. It utilizes multiple third party APIs to
                display a list of TicketMaster events in a designated city, along with a map of breweries in the area around the
                event location."
                siteLink="https://andrew1835.github.io/In_The_Moment/"
                gitHub="https://github.com/andrew1835/In_The_Moment"
                src={Home}
                imageDescription="In The Moment screenshot"
            />
            <Project
                // Not sure if you need to put curly brackets around the stuff after description
                title="React Google Library"
                description="This (nearly) fullstack MERN application built in React allows you to search Google's Library API for books. Soon, it will also allow the user to save books onto the 'Saved' page by saving the individual books to a database."
                siteLink="https://andrew-google-library-react.herokuapp.com/"
                gitHub="https://github.com/andrew1835/React-Google-Library-Search"
                src={Google}
                imageDescription="Google Library results"
            />
            <Project
                // Not sure if you need to put curly brackets around the stuff after description
                title="Password Generator"
                description="This was the first truly difficult homework assignment for the coding bootcamp. Although it would only take me
                a few minutes to create a password generator now, at the time it took me many hours to complete this assignment."
                siteLink="https://andrew1835.github.io/Password_Generator/"
                gitHub="https://github.com/andrew1835/Password_Generator"
                src={Password}
                imageDescription="Password Generator screenshot"
            />

            <Footer />
        </div>
    );
}

export default Portfolio;
