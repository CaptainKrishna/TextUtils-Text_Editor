import React from "react";
const fruits = [
    {
        "id": 1,
        "name": "Banana",
        "price": 125,
        "href": "www.google.com",
        
    },
    {
        "id": 2,
        "name": "Apple",
        "price": 224,
        "href": "www.youtube.com",

    },
    {
        "id": 3,
        "name": "Papaya",
        "price": 125,
        "href": "www.instagram.com",

    }
]
export default function Practice() {
    return (
        <>
            {fruits.map((f) => (
                <div key={f.id} className="container mx-auto" >
                    <a href={f.href}>
                        <h2 className="text-3xl font-bold bg-yellow-300 ml-2">{f.name}</h2>
                        <h3 >{f.price}</h3>
                    </a>
                </div>
            ))}
        </>
    )
}