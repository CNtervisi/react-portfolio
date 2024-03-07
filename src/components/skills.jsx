import React, { useEffect } from 'react';

function Skills() {
    useEffect(() => {

        const setProgressWidth = () => {
            const progressBar = document.getElementsByClassName("progress");
            progressBar[0].style.width = "60%";
            progressBar[1].style.width = "34%";
            progressBar[2].style.width = "5%";
            progressBar[3].style.width = "56%";
            progressBar[4].style.width = "45%";
            progressBar[5].style.width = "67%";
        };

        setProgressWidth();
    }, []);

    return (
        <div className='container'>
            <div className="skills">
                <h1>
                    My Skillset
                </h1>
                <div className="skill">
                    <div>
                        <span>HTML</span>
                        <span className="progress">60%</span>
                    </div>

                    <div>
                        <span>css3</span>
                        <span className="progress">34%</span>
                    </div>

                    <div>
                        <span>javascript</span>
                        <span className="progress">5%</span>
                    </div>

                    <div>
                        <span>Python</span>
                        <span className="progress">56%</span>
                    </div>

                    <div>
                        <span>Laravel</span>
                        <span className="progress">45%</span>
                    </div>

                    <div>
                        <span>NodeJS</span>
                        <span className="progress">67%</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
