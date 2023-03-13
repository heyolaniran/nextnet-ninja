
const getStaticPaths = async () => {
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

export default function Details () {

    return (
        <div className="details">
            
            <h1 className="text-center text-xl font-medium">
                Ninja Details 
            </h1>
        </div>
    )
}