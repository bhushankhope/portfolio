import '../css/getInTouch.css'
export default function GetInTouch() {
    return (
        <div className='touch-wrapper'>
            <h3 className='header'>Socials</h3>
            <div className='icons'>
                <a href="https://www.linkedin.com/in/bhushankhope/" target="_blank" className='logo-link linkedin' rel="noreferrer">
                    <span className='touch-icon'>
                        <i className="fa fa-linkedin" aria-hidden="true"></i>
                    </span>
                </a>
                <a href="https://github.com/bhushankhope" target="_blank" className='logo-link github' rel="noreferrer">
                    <span className='touch-icon'>
                        <i className="fa fa-github" aria-hidden="true"></i>
                    </span>
                </a>
                <a href="https://www.instagram.com/bhushankhope/" target="_blank" className='logo-link instagram' rel="noreferrer">
                    <span className='touch-icon'>
                        <i className="fa fa-instagram" aria-hidden="true"></i>
                    </span>
                </a>
                <a href="mailto:bhushankhope@gmail.com" target="_blank" className='logo-link email' rel="noreferrer">
                    <span className='touch-icon'>
                        <i className="fa fa-envelope" aria-hidden="true"></i>
                    </span>
                </a>
            </div>

        </div>
    )
}