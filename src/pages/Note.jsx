import { useParams } from "react-router-dom";
import { useHeading } from "../context/HeadingContext";
import { useEffect } from "react";
import './styles/note-styles.css'
import HomeButton from "../components/HomeButton";
import { useGetANoteQuery } from "../features/api/apiSlice";

const Note = () => {
    const { updateHeading } = useHeading();
    const { id } = useParams()
    const { data: note, isLoading, isError, error } = useGetANoteQuery(id)

    useEffect(() => {
        updateHeading('Note details!')
    }, [])

    return (
        <div className="note">
            {!isLoading && <HomeButton />}

            {isLoading && <p>loading...</p>}
            {isError && <p>failed to fetch please try again 😞 {error}</p>}

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