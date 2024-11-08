import "./searchbox.css";

export function SearchBox() {
    return (
      <div className="flex search_box flex-col md:h-2/6 h-3/6">
        <div className="flex md:flex-row flex-col justify-around w-full tabs">
          <div className="w-full highlighted"><h2 className="text-xl text-center">Autóvásárlás</h2></div>
          <div className="w-full"><h2 className="text-xl text-center">Autó eladás</h2></div>
          <div className="w-full"><h2 className="text-xl text-center">További lehetőségek</h2></div>
        </div>
        <div className="w-full h-2/4 flex flex-col p-1 md:p-2">
          <h1 className="text-2xl font-semibold text-center">Keresés kulcsszavak alapján</h1>
          <div>
            <input type="text" id="small-input" className="w-5/6 p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
            <button className="w-1/12 bg-purple-500 p-2 ml-6">Keresés</button>
          </div>
        </div>
      </div>
    );
}