export default async function getDataHomePage(lang, query) {
    const res = await fetch(process.env.NEXT_PUBLIC_API, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            query: query,
            variables: { language: lang }
        }),
        next: { revalidate: 0 }
    })
    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }
    return res.json()
}
