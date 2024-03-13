import { useEffect, useState } from "react";
import { BASE_API_URL } from "../common/constants";
import Card from "../components/Card";

const Index = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

  const fetchNotes = async () => {
    try {
      setLoading(true)
      await delay(4000);
      const response = await fetch(BASE_API_URL)
      const notes = await response.json()
      setLoading(false)
      setNotes(notes)
      setError(null)
    } catch (error) {
      setLoading(false)
      setNotes([])
      setError(error)
    }
  }

  useEffect(() => {
    fetchNotes();
  }, [])

  return (
    <div className="Index-container">
      {loading && <p>loading...</p>}
      {error && <p>failed to fetch please try again 😞</p>}

      <div className="cards-container">
        {!loading && !error && notes.map(({
          highlightColor,
          category,
          description,
          title
        }, index) => (
          <Card
            key={index}
            highlightColor={highlightColor}
            category={category}
            description={description}
            title={title}
          />
        ))}
      </div>
    </div>
  )
}

export default Index;