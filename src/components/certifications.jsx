import React from 'react'

function Certifications() {
    return (
        <div className='container' >
            <h2 style={{ textAlign: "center" }}>Certifications & Acknowledgements</h2>
            <table className="certifications-table" style={{ margin: "auto" }}>
                <thead>
                    <tr>
                        <th>Years</th>
                        <th>Organization</th>
                        <th>Certification</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>2023 - 2024</td>
                        <td>EDX Bootcamp</td>
                        <td>Front-End Web Development</td>
                    </tr>
                    <tr>
                        <td>2021</td>
                        <td>Cisco Networking Academy</td>
                        <td>Networking Essentials</td>
                    </tr>
                    <tr>
                        <td>2021</td>
                        <td>Cisco Networking Academy</td>
                        <td>Cybersecurity Essentials</td>
                    </tr>
                    <tr>
                        <td>2021</td>
                        <td>The Open University</td>
                        <td>Introducting Computing and IT</td>
                    </tr>
                    <tr>
                        <td>2021</td>
                        <td>Programming Hub</td>
                        <td>Java</td>
                    </tr>
                    <tr>
                        <td>2021</td>
                        <td>Programming Hub</td>
                        <td>Python</td>
                    </tr>
                    <tr>
                        <td>2012</td>
                        <td>The University of Michigan</td>
                        <td>Cert. of Competency in English</td>
                    </tr>
                </tbody>
            </table>
        </div >
    )
}
export default Certifications
