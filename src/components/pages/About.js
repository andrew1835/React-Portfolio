import React from "react";
import "../style.css"
import Image from "../Images/Andrew_Coding_Resume.pdf"

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

                        <p>Hi, my name is Andrew Anthony and I'm a front-end web developer with a certificate in full-stack developement from the University of Washington's coding bootcamp.
            <br></br><br></br>
                                    I earned my bachelor's degree in marketing from the University of Washington in June of 2020 with interdiscplinary honors, however,
                                    my original plan was to pursue a career in screenwriting and acting post graduation. In fact, during my senior year I took a quarter off to be a Script Intern for Conan O' Brien in Los Angeles. Upon completing the internship, I
                                    decided that after I graduated from college, I would move back down to LA to pursue acting and
                                    screenwriting. Then COVID hit, and as with so many other people, I had to adjust and come up with a
                                    new plan.
                                    I spent a lot of time reflecting, and I realized that I had never seriously considered a career in coding. I had
                                    written it off years ago because I thought that it wasn't a creative path, but after completing
                                    some coding tutorials, I discovered how innately creative coding truly is. I decided to go all in
                                    and signed up for UW's coding bootcamp. I couldn't be happier with the results. It was challenging and more demanding than any job or class I've ever had before, but it was well worth it. Week after week I fell more in love with the creativity, problem-solving, and continual growth that is intrinsic to coding as a discpline, and I'm extremely excited to continue down this path as a software engineer.
        </p>
                    </section>
                </section>




                <section className="row">
                    <section className="col-md-12">

                        <br></br>
                        <p>Resume: <a href={Image} target="_blank">Click here to download</a>
                        </p>
                    </section>
                </section>
            </main>
        </div>
    );
}

export default About;
