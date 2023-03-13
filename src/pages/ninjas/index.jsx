import Head from "next/head";
import Link from "next/link";

export const getStaticProps = async () => {

    const res = await fetch("https://jsonplaceholder.typicode.com/users") ; 
    const data = await res.json() ; 

    return {
        props: {ninjas: data}
    }
}

export default function Ninjas ({ ninjas }) {

    return (
        <>
            <Head>
                <title>NextNet-Ninja | List </title>
            </Head>
            <div>
                <h1 className="mb-6 text-center font-bold text-2xl">Ninjas List  </h1>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                    {ninjas.map((ninja) => (
                      <div
                        className="rounded-2xl bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 p-1 shadow-xl"
                        key={ninja.id}
                      >
                            <Link className="block rounded-xl bg-white p-4 sm:p-6 lg:p-8" href="">
                            <div className="mt-16" >
                                <h3 className="text-lg font-bold text-gray-900 sm:text-xl">
                                 { ninja.name }
                                </h3>
                        
                                <p className="mt-2 text-sm text-gray-500">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, adipisci.
                                </p>
                            </div>
                            </Link>
                      </div>
                      
                    ))}
                </div>
            </div>
        </>
        
    )
}