import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const CreateNoteLink = () => {
    return (
        <Link to={"/create"} className="icon-container">
            <FaPlus className="plus-icon" />
        </Link>
    )
}

export default CreateNoteLink;