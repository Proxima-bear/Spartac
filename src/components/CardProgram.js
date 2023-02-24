/**
 * Imports : React
 */
import React from "react";

const CardProgram = (props) =>

  <div tabIndex={0} className="collapse border bg-sky-200 opacity-80 rounded-[25px] p-[20px]">

    <div className="relative collapse-title p-0">

      <div className="flex flex-col grow space-y-[20px]">

        <span className="font-extrabold text-[18px]">
          {props.title}
        </span>

        <p className="font-bold text-[14px]">
          {props.description}
        </p>

        <div className="flex justify-between items-center" >

          <div className="w-[150px] p-[10px] text-[14px] text-white bg-violet-400 border-2 rounded-[10px] flex justify-center items-center">
            Подробнее
          </div>

          <span className="text-[32px] font-bold ">
            {props.price} Р
          </span>

        </div>

      </div>

      <div className='absolute top-0 right-0 bottom-0 opacity-20 -z-10'>
        <img
          src={props.imageUrl}
          alt={props.title} />
      </div>

    </div>

    <div className="collapse-content p-0">

      <button className="w-[150px] p-[10px] text-[14px] text-white bg-violet-400 border-2 rounded-[10px] mt-[20px]">
        Купить
      </button>


    </div>

  </div>

export default CardProgram;