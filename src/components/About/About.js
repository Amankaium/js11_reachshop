import {useState} from 'react';


function About() {
    const [projectName, setProjectName] = useState("Реактивный магазин")

    return (
        <div>
            Добро пожаловать в наш {projectName}!
        </div>
    )
}

export default About;