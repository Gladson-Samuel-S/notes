import { BASE_API_URL } from "../common/constants";
import { getResponse } from "../common/utils";
import Card from "../components/Card";
import useFetch from "../hooks/useFetch";

const Index = () => {
  const { data: notes = null, loading, error, updateData, updateError } = useFetch()

  const handleNoteDelete = async (id) => {
    updateData(notes.map((note) => note.id === id ? { ...note, isDeletePending: true } : note))
    const response = await getResponse(`${BASE_API_URL}/${id}`, 'DELETE');
    if (response.ok) {
      updateData(notes.filter((note) => note.id !== id))
    } else {
      updateError('Not able to delete note please try again later 😞');
    }
  }

  return (
    <div className="Index-container">
      {loading && <p>loading...</p>}
      {error && <p>failed to fetch please try again 😞</p>}

      <div className="cards-container">
        {!loading && !error && notes?.map(({
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
    </div>
  )
}

export default Index;