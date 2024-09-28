import React from 'react'

const Cards = () => {

    const data = [{ image: 'https://images.unsplash.com/photo-1648091856362-62436bfb145a?q=80&w=2120&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Amazon Bascis', description: 'nbfdf ssljfbf sfbf jsbfsf dbddf fjfd sadhsafj ljjfbfa', stock: true },
    { image: 'https://images.unsplash.com/photo-1721332154161-847851ea188b?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'Apple', description: 'nbfdf ssljfbf sfbf jsbfsf dbddf fjfd sadhsafj ljjfbfa', stock : false },
    { image: 'https://images.unsplash.com/photo-1593642532842-98d0fd5ebc1a?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', name: 'SamSung', description: 'nbfdf ssljfbf sfbf jsbfsf dbddf fjfd sadhsafj ljjfbfa', stock: true }
    ]

    const ans = data.map((elem, index) => 
         (
        <div className='w-56 overflow-hidden rounded bg-zinc-400'>
            <div className='w-full h-32 bg-zinc-900'>
                <img className='w-full h-full object-cover' src={elem.image} alt="" />
            </div>
            <h1 className='text-2xl font-medium px-1 mt-5'>{elem.name}</h1>
            <p className='text-sm px-1 pb-2 '>{elem.description}</p>
            <button className={`text-xs px-4 ml-1 py-2 text-zinc-300 ${elem.stock ? "bg-blue-600" : "bg-red-600"}`}>
                {elem.stock? "In Stock" : "Out of Stock"}
            </button>
        </div>
        )
    )

  

    return (

        <div className='w-full flex items-center justify-center gap-10 h-screen bg-zinc-600 '>

        {ans}


        </div>


    )
}

export default Cards