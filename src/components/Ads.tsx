import { ArrowDown } from "lucide-react";

export default function Ads() {
    const ad = Math.round(Math.random() * 10);
    return (
        <div>

            {ad <= 3 &&
                <div className="hidden lg:block place-self-center bg-blue-100 border-2 border-blue-300 rounded-lg h-32 w-[1000px]">
                    <div className="grid grid-cols-3  h-full mx-5">

                        <div className="content-center col-span-2">
                            <p className="text-3xl text-blue-600 font-semibold">Hirdesd autód nálunk</p>
                            <p className="text-lg text-blue-500 font-semibold">Pár kattintással az összes felhasználónk láthatja az autódat</p>
                        </div>

                        <div className="content-center">

                            <a href="#" className=" content-center flex items-center justify-center h-12 w-full bg-blue-600 text-white text-center font-semibold text-xl rounded-lg hvr-glow">
                                Kattints ide!
                            </a>

                        </div>
                    </div>
                </div>
            }
            {ad >= 7 &&
                <div className="hidden lg:block place-self-center bg-blue-100 border-2 border-blue-300 rounded-lg h-32 w-[1000px]">
                    <div className="grid grid-cols-3  h-full mx-5">

                        <div className="content-center col-span-2">
                            <p className="text-3xl text-blue-600 font-semibold">Ez a felület bérelhető</p>
                            <div className="text-base text-blue-500 font-semibold "> <p className="inline-">További információkért írjon az e-mail címünkre</p> <p className="inline-block">info@korporgo@gmail.com</p></div>
                        </div>

                        <div className="content-center">
                            <div className="mb-3 text-center text-blue-500"> <ArrowDown className="inline-block animate-bounce"/> <p className="inline-block">Ha nálunk szeretnéd eladni autód</p> <ArrowDown className="inline-block animate-bounce"/> </div>
                            <a href="#" className=" content-center flex items-center justify-center h-12 w-full bg-blue-600 text-white text-center font-semibold text-xl rounded-lg hvr-glow">
                                Kattints ide!
                            </a>

                        </div>
                    </div>
                </div>
            }

            {ad <= ad &&
                <div className="hidden place-self-center bg-blue-100 border-2 border-blue-300 rounded-lg h-32 w-[1000px]">
                    <div className="grid grid-cols-3  h-full mx-5">

                        <div className="content-center col-span-2">
                            <p className="text-3xl text-blue-600 font-semibold">Tudta?</p>
                            <p className="text-base text-blue-500 font-semibold">Az első gyorshajtás 12km/h volt ami az akkor sebbségkorlát négyszerese volt.</p>
                        </div>

                        <div className="content-center">
                            <div className="mb-3 text-center text-blue-500"> <ArrowDown className="inline-block animate-bounce"/> <p className="inline-block">Ha nálunk szeretnéd eladni autód</p> <ArrowDown className="inline-block animate-bounce"/> </div>
                            <a href="#" className=" content-center flex items-center justify-center h-12 w-full bg-blue-600 text-white text-center font-semibold text-xl rounded-lg hvr-glow">
                                Kattints ide!
                            </a>

                        </div>
                    </div>
                </div>
            }


        </div>
    )
}