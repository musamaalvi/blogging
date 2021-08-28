import React, { useEffect, useState } from 'react'
import './about.css';
import image2 from '../../assets/images/team2.jpg'
import image3 from '../../assets/images/team3.jpg'
import image1 from '../../assets/images/team1.jpg'
const About = () => {

    const [aboutUsData, setaboutUsData] = useState([]);
    useEffect(() => {
        console.log("process env ", process.env)
        fetch(process.env.REACT_APP_API_URL + 'blogging/items')
            .then(res => res.json())
            .then((res: any) => {
                console.log("api respose", res)
                setaboutUsData(res)
            })
    }, [])


    return (
        <React.Fragment>
            <div className="about-section">
                <h1>About Us Page</h1>
                <p>Some text about who we are and what we do.</p>
                <p>Resize the browser window to see that this page is responsive by the way.</p>
            </div>

            <h2 style={{ "textAlign": "center" }}>Our Team</h2>

            <div className="row">

                {aboutUsData.map((data: any, index) => {

                    return (
                        <div className="column" key={data.id}>
                            <div className="card">
                                <img src={require(`../../assets/images/${data.image}`).default} alt="Jane" style={{ width: "100%" }} />
                                <div className="container">
                                    <h2>{data.nam}</h2>
                                    <p className="title">{data.title}</p>
                                    <p>{data.description}</p>
                                    <p>{data.email}</p>
                                    <p><button className="button">Contact</button></p>

                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
}




export default About;