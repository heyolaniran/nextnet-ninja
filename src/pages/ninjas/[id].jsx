
export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users') ; 
    const data = await res.json() ; 

    const paths  = (data.map(ninja => {
            return {
                params: {
                    id: ninja.id.toString()
                }
            }
        }))

    return {
        paths , 
        fallback: false 
    }
    
}

export const getStaticProps = async (context) => {
    const id = context.params.id 

    const res = await fetch("https://jsonplaceholder.typicode.com/users/"+ id) ; 
    const data = await res.json() ; 
    
    return {
        props: { ninja: data }
    }
}

export default function Details ( {ninja} ) {

    return (
        <div className="details">
            
            <h1 className="text-center text-xl font-medium">
                Ninja Details n° { ninja.id }

                <div className="mt-4 justify-center">
                     <h1 className="text-center text-2xl"> {ninja.name} </h1>
                     <p> { ninja.email }</p>
                     <p> { ninja.address.city }</p>
                </div>
               
            </h1>
        </div>
    )
}