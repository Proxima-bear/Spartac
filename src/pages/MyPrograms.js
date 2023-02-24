import { useEffect, useState } from "react";
import { fetchProgramByid } from "../scripts/controller";
import CardProgram from "../components/CardProgram";
import Whey from "../assets/img/whey.png"
import Logo from "../assets/img/logosport.png"
import Weight from "../assets/img/weight.png"
import Smoothies from "../assets/img/Smoothies.png"

function Program() {
  // const [myPrograms, setMyPrograms] = useState([])

  // const fetchData = () => {

  //   setMyPrograms(fetchProgramByid(1))

  // }

  // useEffect(() => {
  //   fetchData()
  // }, [])

  return (

    <div className="space-y-[5%] p-[20px]">
      {/* {myPrograms.map(program => (
        <CardProgram
          title={program.title}
          description={program.description}
          imageurl={program.imageurl}
          price={program.price}
          btntext='Подробнее'
          buyopen='Купить'
        />
      ))} */}


<CardProgram
        title='Питание'
        description='Питание - залог успешного успеха'
        imageurl={Whey}
        price='9990 р'
        btntext='Открыть'
        collapse='Тут будет какой-то контент, который может быть длинным и не очень.
                Это в целом по вашему желанию. Сюда же мы добавили кнопку купить'
        buyopen='Смотреть'
      />

      <CardProgram
        title='Силовые'
        description='Некое краткое описание'
        imageurl={Logo}
        price='9990 р'
        btntext='Открыть'
        collapse='Тут будет какой-то контент, который может быть длинным и не очень.
                Это в целом по вашему желанию. Сюда же мы добавили кнопку купить'
        buyopen='Смотреть'
      />

      <CardProgram
        title='Похудение'
        description='Некое краткое описание'
        imageurl={Weight}
        price='9990 р'
        btntext='Открыть'
        collapse='Тут будет какой-то контент, который может быть длинным и не очень.
                Это в целом по вашему желанию. Сюда же мы добавили кнопку купить'
        buyopen='Смотреть'
      />

      <CardProgram
        title='Меню'
        description='Некое краткое описание'
        imageurl={Smoothies}
        price='9990 р'
        btntext='Открыть'
        collapse='Тут будет какой-то контент, который может быть длинным и не очень.
                Это в целом по вашему желанию. Сюда же мы добавили кнопку купить'
        buyopen='Смотреть'
      />


    </div>




  );
}

export default Program;
