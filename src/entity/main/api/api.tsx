export async function fetchRepo(): Promise<Repo> {
    console.log('----- call fetchRepo');
    const res = await fetch(`http://localhost:4000/main`);

    if (!res.ok) {
        throw new Error(`Failed to fetch data`);
    }
    
    return res.json();
}

export async function fetchRepo2(): Promise<Repo> {
    console.log('----- call fetchRepo2');
    const res = await fetch(`http://localhost:4000/main2`);

    if (!res.ok) {
        throw new Error(`Failed to fetch data`);
    }
    
    return res.json();
}