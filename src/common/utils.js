export const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
export const getResponse = async (url, method, body = {}) => {
    await delay(3000)
    const response = await fetch(url, {
        method,
        body: JSON.stringify(body)
    })

    return response
}