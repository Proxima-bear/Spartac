import { useEffect, useState } from "react";
import { fetchProgramByid } from "../scripts/controller";
import CardProgram from "../components/CardProgram";

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
