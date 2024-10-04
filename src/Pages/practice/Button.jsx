import React, {useState} from 'react'

const content = [
    [
        "React is extremely popular",
        "React is extremely popular",
        "React is extremely popular",
        "React is extremely popular"
    ],
    [
        "This is child two",
        "This is child two",
        "This is child two",
        "This is child two"
    ],
    [
        "This is child three",
        "This is child three",
        "This is child three",
        "This is child three"
    ],
    [
        "This is child four",
        "This is child four",
        "This is child four",
        "This is child four"
    ]
]

const Button = () => {
    const [activeContentIndex, setActiveContentIndex] = useState(0)
    
  return (
    <>
        <div>
        <button className={activeContentIndex === 0 ? "active" : ""} 
        onClick={()=>setActiveContentIndex(0)}>Button 1</button>

        <button className={activeContentIndex === 1 ? "active" : ""} 
        onClick={()=>setActiveContentIndex(1)}>Button 2</button>

        <button className={activeContentIndex === 2 ? "active" : ""} 
        onClick={()=>setActiveContentIndex(2)}>Button 3</button>

        <button className={activeContentIndex === 3 ? "active" : ""} 
        onClick={()=>setActiveContentIndex(3)}>Button 4</button>
        </div>
        

        <div>
            {content[activeContentIndex].map((item, index)=>(
                <li key={index}>{item}</li>
            ))}
        </div>
    </>

  )
}

export default Button