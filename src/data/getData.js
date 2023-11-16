export default async function getData(query, variables = {}) {
    const res = await fetch(process.env.NEXT_PUBLIC_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables,
        }),
        next: { revalidate: 0 },
    })
    if (!res.ok) {
        return null
    }

    return res.json()
}