import { useEffect, useState } from "react";
import { delay } from "../common/utils";
import { BASE_API_URL } from "../common/constants";

const useFetch = () => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        try {
            setLoading(true)
            await delay(4000);
            const response = await fetch(BASE_API_URL)
            const data = await response.json()
            setLoading(false)
            setData(data)
            setError(null)
        } catch (error) {
            setLoading(false)
            setData(null)
            setError(error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const updateData = (newData) => setData(newData)
    const updateError = (newError) => setError(newError)

    return {
        data,
        loading,
        error,
        updateData,
        updateError
    }
}

export default useFetch