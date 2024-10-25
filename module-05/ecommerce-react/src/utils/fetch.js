export async function fetchData(url) {
    try {
        const res = await fetch(url);
        if (!res.ok) throw new Error('Request failed');
        const data = await res.json();
        return {data};
    } catch (error) {
        return {error};
    }
}
