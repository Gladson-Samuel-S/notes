import { FiTrash } from "react-icons/fi";
import './styles/card-styles.css'
import { AiOutlineLoading } from "react-icons/ai";
import { Link } from "react-router-dom";

const Card = ({
    id,
    highlightColor,
    category,
    description,
    title,
    onDelete,
    isDeletePending
}) => {
    return (
        <div className="card">
            <div className="card-highlight-area" style={{ backgroundColor: highlightColor }} />
            <div className="card-content">
                <div className="card-header">
                    {category && <h3 className="card-category">{category}</h3>}
                    <button onClick={() => {
                        onDelete(id)
                    }} className="delete-button">
                        {isDeletePending ? <AiOutlineLoading className="loader" /> : <FiTrash />}
                    </button>
                </div>
                {title && <Link className="card-title" to={`/note/${id}`}><h2>{title}</h2></Link>}
                {description && <p className="card-description">{description}</p>}
            </div>
        </div>
    )
}

export default Card;