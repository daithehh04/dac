export const fetchData = async (query, variables = {}) => {
    const res = await fetch(process.env.NEXT_PUBLIC_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query,
            variables,
        }),
        next: { revalidate: 3600 },
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}