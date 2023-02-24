/**
 * Imports : React
 */
import React, { useEffect, useState } from "react";

/**
 * Imports : components
 */
import CardProgram from "../components/CardProgram";

/**
 * Imports : scripts
 */
import { fetchPrograms } from "../scripts/controller";


function Program() {

    const [program, setProgram] = useState([])

    useEffect(() => {
        fetchPrograms((data)=> setProgram(data))
    }, [])

    return (
        <div className="space-y-[20px] p-[20px]">

            {program.map(program => (
                <CardProgram
                    title={program.title}
                    description={program.description}
                    imageUrl={program.imageUrl}
                    price={program.price}
                />
            ))}

        </div>
    );

}

export default Program;
