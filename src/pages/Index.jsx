import { useEffect } from "react";
import { BASE_API_URL } from "../common/constants";
import { getResponse } from "../common/utils";
import Card from "../components/Card";
import { useHeading } from "../context/HeadingContext";
import useFetch from "../hooks/useFetch";

const Index = () => {
  const { data: notes = null, loading, error, updateData, updateError } = useFetch()
  const { updateHeading } = useHeading()

  const handleNoteDelete = async (id) => {
    updateData(notes.map((note) => note.id === id ? { ...note, isDeletePending: true } : note))
    const response = await getResponse(`${BASE_API_URL}/${id}`, 'DELETE');
    if (response.ok) {
      updateData(notes.filter((note) => note.id !== id))
    } else {
      updateError('Not able to delete note please try again later 😞');
    }
  }

  useEffect(() => {
    updateHeading('Notes')
  }, [])

  const renderContent = () => {
    if (loading) return <p>loading...</p>;
    else if (error) return <p>failed to fetch please try again 😞</p>;
    else if (notes?.length > 0) {
      return (
        <div className="cards-container">
          {notes.map(({
            id,
            highlightColor,
            category,
            description,
            title,
            isDeletePending
          }) => (
            <Card
              id={id}
              key={id}
              highlightColor={highlightColor}
              category={category}
              description={description}
              title={title}
              onDelete={handleNoteDelete}
              isDeletePending={isDeletePending}
            />
          ))}
        </div>
      )
    }

    return null
  }

  return (
    <div className="Index-container">
      {renderContent()}
    </div>
  )
}

export default Index;