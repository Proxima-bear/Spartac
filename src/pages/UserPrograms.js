/**
 * Imports : React
 */
import  { useEffect, useState } from "react";

/**
 * Imports : components
 */
import CardProgram from "../components/CardProgram";

/**
 * Imports : scripts
 */
import { fetchProgramByid } from "../scripts/controller";


function Program() {
  const [myPrograms, setMyPrograms] = useState([])

  const fetchData = () => {
    setMyPrograms(fetchProgramByid(1))
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (

    <div className="space-y-[5%] p-[20px]">
      {myPrograms.map(program => (
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
