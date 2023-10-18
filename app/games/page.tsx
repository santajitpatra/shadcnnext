import Image from "next/image"

type Game = {
    id: number
    background_image: string
    rating: number
    name: string
}


const getData = async (): Promise<Game[]> => {
    const res = await fetch(`${process.env.RAWG_URL_WITH_API}`)

    if (!res.ok) {
        throw new Error('Failed to fetch data')
    }

    await new Promise((resolve) => setTimeout(resolve, 2000))
    const gameData = await res.json()
    return gameData.results
}



export default async function Games() {
    const data = await getData()
    console.log(data)
    return (
        <main className="m-24 rounded-md grid grid-cols-4 gap-12">
            {data.map((e) => (
                <div key={e.id} className="col-span-4 md:col-span-2 lg:col-span-1">
                    <h1>{e.name}</h1>
                    <p>Rating: {e.rating}</p>
                <div className="aspect-video relative">
                    <Image src={e.background_image} fill className="object-cover rounded-md"
                    alt={e.name}/>
                </div>
                
                </div>
            ))}
        </main>
    )
}
