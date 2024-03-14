import { Link } from "react-router-dom";
import { MdOutlineArrowBack } from "react-icons/md";
import './styles/home-button-styles.css'

const HomeButton = () => {
    return (
        <div className="CreateNote-container">
            <Link className="back-link-pill" to={'/'}>
                <MdOutlineArrowBack className="back-arrow" />
                <p className="back-link">Home</p>
            </Link>
        </div>
    )
}

export default HomeButton;