/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'

const Slug = () => {
    const [planetDetails, setPlanetDetails] = useState();
    const [IsLoading, setIsLoading] = useState(false);
    const router = useRouter();
    const planetName = router.query.slug || 'Tatooine';
    console.log(planetName)


    useEffect(() => {
        fetchPlanetData();
    }, [])

    const fetchPlanetData = async () => {
        try {
            setIsLoading(true)
            const endpoint = `https://swapi.dev/api/planets/?search=${planetName}`;
            const res = await axios.get(endpoint);
            const data = res.data.results[0];
            console.log(data)
            setPlanetDetails(data)

            setIsLoading(false)

        } catch (error) {
            console.log("Some Error Occurred!")
        }
    }





    return (
        <section className="text-gray-600 body-font overflow-hidden">

            {IsLoading &&
                <div role="status" className='absolute  left-[50%] top-[50%]'>
                    <svg aria-hidden="true" className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                </div>
            }

            <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                    <img alt="ecommerce" src='/tatooine.jpg' className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" />
                    <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                        <h2 className="text-sm title-font text-gray-500 tracking-widest">{planetDetails?.diameter}</h2>
                        <h1 className="text-white text-3xl title-font font-medium mb-1">{planetDetails?.name}</h1>

                        <p className="leading-relaxed">{planetDetails?.name} is a fictional {planetDetails?.terrain} planet in the Star Wars universe, renowned for its harsh environment, twin suns, and iconic landscapes. It serves as a key location in several Star Wars films, including the original trilogy and the prequel trilogy.</p>
                        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                            <div className="flex items-center text-slate-400 ">
                                <span className="mr-3 text-white">Climate : </span>
                                {planetDetails?.climate}
                            </div>
                            <div className="flex ml-6 items-center text-slate-400 ">
                                <span className="mr-3 text-white">Population : </span>
                                {planetDetails?.population}
                            </div>
                        </div>
                        <div className="flex flex-row justify-between px-4">
                            <div>
                                <h3 className='text-white font-semibold text-lg'>Residents</h3>
                                <div className="flex flex-col text-slate-300 py-4">
                                    <span>Sky Walker</span>
                                    <span>Obi-One</span>
                                    <span>Darth-Vedar</span>
                                    <span>B968p</span>
                                    <span>Jodia</span>
                                </div>
                            </div>
                            <div>
                                <h3 className='text-white font-semibold text-lg'>Films</h3>
                                <div className="flex flex-col text-slate-300 py-4">
                                    <span>Return of the Jedi</span>
                                    <span>The Empire Strikes Back</span>
                                    <span>The Phantom Menace</span>
                                    <span>Revenge of the Sith</span>
                                    <span>Attack of the Clones</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Slug