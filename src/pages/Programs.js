import React, { useEffect, useState } from "react"
import { fetchPrograms } from "../scripts/controller";
import CardProgram from "../components/CardProgram";


function Program() {

    const [program, setProgram] = useState([])


    const fetchData = () => {
        setProgram(fetchPrograms((data)=> setProgram(data)))
    }

    useEffect(() => {
        fetchData()
    }, [])




    return (

        <div className="space-y-[5%] p-[20px]">


            {program.map(program => (
                <CardProgram
                    title={program.title}
                    description={program.description}
                    imageurl={program.imageurl}
                    price={program.price}
                    btntext='Подробнее'
                    buyopen='Купить'
                />
            ))}


        </div>




    );
}

export default Program;
