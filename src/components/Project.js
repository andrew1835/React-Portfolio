import React from "react";
import "./style.css"


function Project(props) {
    return (
        <div>
            <main className="container">



                <section className="sampleWork">

                    <h4>{props.title}</h4>
                    <p>{props.description}
                    </p>
                    <p>Link to deployed site: <a href={props.siteLink}
                        target="_blank">{props.siteLink}</a></p>
                    <p>Link to repository: <a href={props.gitHub}
                        target="_blank">{props.gitHub}</a></p>
                    <img src={props.src} alt={props.imageDescription} className="screenshots"></img>

                    <br></br>
                    <hr></hr>

                </section>

            </main>
        </div>

    )
}

export default Project