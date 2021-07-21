import React, {useEffect} from 'react'
import './about.css';
import image2 from '../../assets/images/team2.jpg'
import image3 from '../../assets/images/team3.jpg'
import image1 from '../../assets/images/team1.jpg'
const About = () => {

    useEffect(() => {
        console.log("process env ",process.env)
        fetch(process.env.REACT_APP_API_URL + 'blogging/items')
        .then(res => res.json())
        .then((res: any) => {
            console.log("api respose", res)
        })
    }, [])

    return (
        <React.Fragment>
            <div className="about-section">
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>

            <h2 style={{"textAlign": "center"}}>Our Team</h2>
            <div className="row">
                <div className="column">
                    <div className="card">
                        <img src={image1} alt="Jane" style={{ width: "100%" }} />
                        <div className="container">
                            <h2>Jane Doe</h2>
                            <p className="title">CEO & Founder</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>jane@example.com</p>
                            <p><button className="button">Contact</button></p>

                        </div>
                    </div>
                </div>

                <div className="column">
                    <div className="card">
                        <img src={image2} alt="Mike" style={{ width: "100%" }} />
                        <div className="container">
                            <h2>Mike Ross</h2>
                            <p className="title">Art Director</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>mike@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>
                    </div>

                </div>

                <div className="column">
                    <div className="card">
                        <img src={image3} alt="John" style={{ width: "100%" }} />
                        <div className="container">
                            <h2>John Doe</h2>
                            <p className="title">Designer</p>
                            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                            <p>john@example.com</p>
                            <p><button className="button">Contact</button></p>
                        </div>

                    </div>
                </div>
            </div>
            </React.Fragment>
    )
}




export default About;