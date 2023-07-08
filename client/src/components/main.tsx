'use client'
import { useState, useEffect } from "react";

export default function Main() {

  const [timeLeft, setTimeLeft] = useState<number>(0);
  const newYears = 'December 31, 2023';

  useEffect(() => {
    const intervalId = setInterval(() => {
      const newYearsDate = new Date(newYears);
      const currentDate = new Date();
      const remainingTime = newYearsDate.getTime() - currentDate.getTime();
      setTimeLeft(remainingTime);

      // Verifica se o countdown chegou a zero
      if (remainingTime <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  // Função para formatar o tempo restante em dias, horas, minutos e segundos
  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return (
    <section className="flex h-[820px] items-center bg-[url('../assets/background.png')] bg-cover bg-right-center bg-no-repeat ">
        <div className="ml-[231.500px] mr-[231.500px] pb-8 pl-3 pr-3 pt-8">
          <div className="">
            <div>
              .{" "}
              <h1 className="mb-6 pl-[6px] pr-[12px] pt-[48px] text-7xl font-semibold text-white font-sora ">
                Inter Day 2023
              </h1>
            </div>

            <div className=" mb-4 pl-[6px] pr-[12px]">
              <p className=" mb-4 text-left text-xl leading-[25px] text-white">
                Um dia de Black Friday no meio de julho? <br /> O Inter Shop
                tem!
              </p>
              <span className=" text-[17px] font-bold text-white ">
                Faltam:
              </span>
            </div>

            <div>
              <div className=" flex ">
                <div className="flex h-[87px] w-[87px] flex-col items-center justify-center rounded-[8px] bg-[#854000]">
                  <span className=" text-[32px] font-bold leading-[40px] text-white">
                    {`${days}`}
                  </span>
                  <span className=" font-bold text-[12px] leading-4 text-white">dias</span>
                </div>

                <div className="ml-6 flex h-[87px] w-[87px] flex-col items-center justify-center rounded-[8px] bg-[#854000]">
                  <span className=" text-[32px] font-bold leading-[40px] text-white">
                    {`${hours}`}
                  </span>
                  <span className=" font-bold text-[12px] leading-4 text-white">horas</span>
                </div>

                <div className="ml-6 flex h-[87px] w-[87px] flex-col items-center justify-center rounded-[8px] bg-[#854000]">
                  <span className=" text-[32px] font-bold leading-[40px] text-white">
                    {`${minutes}`}
                  </span>
                  <span className=" font-bold text-[12px] leading-4 text-white">minutos</span>
                </div>

                <div className="ml-6 flex h-[87px] w-[87px] flex-col items-center justify-center rounded-[8px] bg-[#854000]">
                  <span className=" text-[32px] font-bold leading-[40px] text-white">
                    {`${seconds}`}
                  </span>
                  <span className=" font-bold text-[12px] leading-4 text-white">segundos</span>
                </div>
              </div>
              <div>
                <a
                  href=""
                  className=" mt-6  flex  h-12 w-[420px] items-center justify-center rounded-[8px] border-white bg-white px-[20px] pb-[7px] pt-[6px] text-[14px] font-bold leading-[17px] text-[#161616]  "
                >
                  Saiba Mais
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}