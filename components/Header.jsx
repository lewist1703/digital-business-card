export default function Header(){
    return(
        <div className="header">
            <h1 className="name">Thomas Lewis</h1>
            <h2 className="job">Software Engineer</h2>
            
            <div className="header-buttons">
                <div className="email-button">
                    <h3 className="email-logo">✉️</h3>
                    <a href="tmlewis4s@semo.edu" className="header--email">Email</a>
                </div>
                <div className="linkedin-button">
                    <h3 className="linkedin-logo">📲</h3>
                    <a href="tmlewis4s@semo.edu" className="header--linkedin">Linkedin</a>
                </div>
            </div>
        </div>
    )
}