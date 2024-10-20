import { useEffect, useState } from "react";

const Greeting = () => {

    const currentHour = new Date().getHours();

    const [greet, SetGreet] = useState('Good Morning')





    useEffect(() => {
        if (currentHour < 12) SetGreet('Good Morning')
        else if (currentHour < 18) SetGreet('Good Afternoon')
        else SetGreet('Good Evening')
    }, [currentHour])

    return (


        <>

            <div className="p-2 col-span-2">
            
                <h2 className="text-2xl font-bold "> {greet}, Jaimin</h2>
            </div>
        
        </>
    )





};

export default Greeting;