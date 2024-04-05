import { useEffect } from "react";
import { BASE_API_URL } from "../common/constants";
import { getResponse } from "../common/utils";
import Card from "../components/Card";
import { useHeading } from "../context/HeadingContext";
import useFetch from "../hooks/useFetch";
import { useDeleteNoteMutation, useGetNotesQuery } from "../features/api/apiSlice";

const Index = () => {
  const {
    data: notes,
    isLoading,
    isSuccess,
    isError,
    error
  } = useGetNotesQuery();
  const { updateHeading } = useHeading()
  const [deleteNote, {
    isLoading: isDeletePending,
    data: deletedNote
  }] = useDeleteNoteMutation()

  const handleNoteDelete = async (id) => {
    deleteNote({
      id
    })
  }

  useEffect(() => {
    updateHeading('Notes')
  }, [])

  const renderContent = () => {
    if (isLoading) return <p>loading...</p>;
    if (isError) return <p>failed to fetch please try again 😞 {error}</p>;
    if (isSuccess && notes?.length > 0) {
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
              isDeletePending={deletedNote?.id === id && isDeletePending}
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