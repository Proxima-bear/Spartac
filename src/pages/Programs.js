import React, { useEffect, useState } from "react"
import { fetchPrograms } from "../scripts/controller";
import CardProgram from "../components/CardProgram";
import Whey from "../assets/img/whey.png"
import Logo from "../assets/img/logosport.png"
import Weight from "../assets/img/weight.png"
import Smoothies from "../assets/img/Smoothies.png"
function Program() {

    // const [program, setProgram] = useState([])


    // const fetchData = () => {
    //     setProgram(fetchPrograms((data)=> setProgram(data)))
    // }

    // useEffect(() => {
    //     fetchData()
    // }, [])




    return (

        <div className="space-y-[5%] p-[20px]">


            {/* {program.map(program => (
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
                btntext='Подробнее'
                collapse='Тут будет какой-то контент, который может быть длинным и не очень.
                Это в целом по вашему желанию. Сюда же мы добавили кнопку купить'
                buyopen='Купить'
            />

            <CardProgram
                title='Силовые'
                description='Некое краткое описание'
                imageurl={Logo}
                price='9990 р'
                btntext='Подробнее'
                collapse='Тут будет какой-то контент, который может быть длинным и не очень.
          Это в целом по вашему желанию. Сюда же мы добавили кнопку купить'
                buyopen='Купить'
            />

            <CardProgram
                title='Похудение'
                description='Некое краткое описание'
                imageurl={Weight}
                price='9990 р'
                btntext='Подробнее'
                collapse='Тут будет какой-то контент, который может быть длинным и не очень.
                Это в целом по вашему желанию. Сюда же мы добавили кнопку купить'
                buyopen='Купить'
            />

            <CardProgram
                title='Меню'
                description='Некое краткое описание'
                imageurl={Smoothies}
                price='9990 р'
                btntext='Подробнее'
                collapse='Тут будет какой-то контент, который может быть длинным и не очень.
                Это в целом по вашему желанию. Сюда же мы добавили кнопку купить'
                buyopen='Купить'
            />


        </div>




    );
}

export default Program;
