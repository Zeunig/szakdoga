export default function SUC() {
    return (
        <div className="h-96">
            <div className="flex gap-3  border-gray-300 rounded-xl overflow-hidden items-center justify-start">
                <div className="relative w-72 h-72 flex-shrink-0">
                    <img className="absolute left-0 top-0 w-full h-full object-cover object-center transition duration-50" loading="lazy" src="suc.svg" alt="Site under construction" />
                </div>
                <div className="flex flex-col gap-2 py-2">
                    <p className="text-xl font-bold">Sajnáljuk! Ez az oldal jelenleg fejlesztews alat als!</p>
                    <p>Nézz vissza később, és reméljük hogy addigra elhárítjuk a problémát. 😊</p>
                    <span className="flex items-center justify-start text-gray-500">
                        <svg className="w-4 h-4 mr-1 mt-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
                        </svg>
                        <a href="/">Vissza a főoldalra</a>
                    </span>
                </div>
            </div>
        </div>
    )
}