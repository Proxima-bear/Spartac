import React from "react";



function CardProgram(proops) {
  return (
    <div tabIndex={0} className="collapse   border bg-gray-100 opacity-80  rounded-[25px] ">
      <div className=" w-full flex basis-1/2 space-x-5 ">
        <div className="flex flex-col w-[65%]">
          <span className="font-extrabold text-grey text-[25px] mt-[10px] ml-[20px]">
            {proops.title}
          </span>
          <p className="font-bold text-black text-[13px] mt-[10px] ml-[20px]">
            {proops.description}
          </p>

          <div className="collapse-title flex flex-col space-y-[10px] ">
          <span className=" w-[90px] text-[20px] ml-[10px] font-bold mt-[20px] text-black ">
              {proops.price}
            </span>
            <button className="w-[100px] h-[45px] px-[5px]  text-[13px] text-white bg-black boeder-[2px] rounded-[10px]">
              {proops.btntext}
            </button>

           
          </div>

        </div>

        <div className="flex basis-1/2 h-full w-full">
          <img className=""
            src={proops.imageurl}
          />
        </div>


      </div>
      <div className="collapse-content ">
        <p>Тут будет какой-то контент который может быть длинным и не очень.
          Это в целом по вашему желанию и сюда же мы добавили кнопку купить
        </p>
        <button className=" w-[100px] h-[45px] mt-[20px]  text-[13px] text-white bg-black boeder-[2px] rounded-[10px]">
          {proops.buyopen}
        </button>
      </div>

    </div>


  );
}

export default CardProgram;