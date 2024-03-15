import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { BASE_API_URL } from "../common/constants";
import { useHeading } from "../context/HeadingContext";
import { useEffect } from "react";
import './note-styles.css'
import HomeButton from "../components/HomeButton";

const Note = () => {
    const { updateHeading } = useHeading();
    const { id } = useParams()
    const { data: note = null, loading, error } = useFetch(`${BASE_API_URL}/${id}`)

    useEffect(() => {
        updateHeading('Note details!')
    }, [])

    return (
        <div className="note">
            {!loading && <HomeButton />}

            {loading && <p>loading...</p>}
            {error && <p>failed to fetch please try again 😞</p>}

            <div className="header" style={{ '--highlight': note?.highlightColor }}>
                <h2 className="note-title">{note?.title}</h2>
            </div>

            {note?.category && <p className="category">- {note.category}</p>}

            <div className="note-body">
                <p>{note?.description}</p>
            </div>
        </div>
    )
}

export default Note;