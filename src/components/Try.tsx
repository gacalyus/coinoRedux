import React from 'react'



interface ITryProps {
    tryAgain: number
    name: string
    age: number
    address?: string
}
const Try: React.FC<ITryProps> = ({ tryAgain, name, age }) => {
    return (
        <div className="tryClass">
            Try {tryAgain}
            {name}
            {age}
        </div>
    )
}

export default Try
