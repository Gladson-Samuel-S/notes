import { FiTrash } from "react-icons/fi";
import './card-styles.css'

const Card = ({
    highlightColor,
    category,
    description,
    title
}) => {
    return (
        <div className="card">
            <div className="card-highlight-area" style={{ backgroundColor: highlightColor }} />
            <div className="card-content">
                <div className="card-header">
                    <h3 className="card-category">{category}</h3>
                    <button className="delete-button"><FiTrash /></button>
                </div>
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
            </div>
        </div>
    )
}

export default Card;