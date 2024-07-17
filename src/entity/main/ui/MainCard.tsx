"use client"

export default function MainCard({ data }: {data: Repo}) {
    return (
        <>
            <h1>main card</h1>
            {data.name}
            {data.age}
        </>
    )

}