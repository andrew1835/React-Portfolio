import React from "react";
import "../style.css"

function About() {
    return (
        <div>
            <main className="container">

                <section className="row">
                    <section className="col-md-12">
                        <h1>About Me</h1>
                    </section>
                </section>


                <hr></hr>

                <section className="row">
                    <section className="col-md-4">

                        <img src="https://github.com/andrew1835/Responsive_Portfolio_1/blob/main/Assets/Images/LinkedinProfile.JPG?raw=true"
                            alt="Picture of me" className="img-thumbnail"></img>
                    </section>
                    <section className="col-md-8">

                        <p>Hi, my name is Andrew Anthony and I'm a full-stack Web Development student at the University of
                        Washington's coding bootcamp.
            <br></br>
                                    I graduated from the University of Washington in June of 2020 with a degree in Marketing, however,
                                    my plan was to pursue a career in screenwriting and acting post graduation. In fact, during the fall
                                    of 2019, I was a Script Intern for Conan O' Brien in Los Angeles. Upon completing the internship, I
                                    decided that after I graduated from college, I would move back down to LA to pursue acting and
                                    screenwriting. Then COVID hit, and as with so many other people, I had to adjust and come up with a
                                    new plan.
                                    I spent a lot of time reflecting, and realized that, although I had enjoyed the small amount of
                                    coding I had been exposed to in my life, I had never seriously considered a career incoding. I had
                                    written it off years ago because I thought that it wasn't a creative path, but after completigin
                                    some coding tutorials, I discovered how innately creative coding truly is. I decided to go all in
                                    and signed up for this bootcamp, and I'm confident that upon graduation I'll be Employer-Competitive
                                    and looking ready to make an impact as a web developer.
        </p>
                    </section>
                </section>

                <br></br>


                <section className="row">
                    <section className="col-md-12">
                        <p>
                            I don't know where the future will take me exactly, but that's the fun of life. All I can do is make
                            sure I've acquired the skills necessary to navigate life and rise to meet opportunities that cross
                            my path. I'm confident that, when it comes to jobs, having my combination of storytelling,
                            marketing, and programming skills will make me a strong employee candidate, and a valuable addition
                            to any company that will hire me.
        </p>
                        <br></br>
                        <p>Resume: <a href="Assets/Images/Andrew_Coding_Resume.pdf" target="_blank">Click here to download</a>
                        </p>
                    </section>
                </section>
            </main>
        </div>
    );
}

export default About;
