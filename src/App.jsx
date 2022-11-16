import React from "react";

const App = () => {
  return (
    <section className="bg-white dark:bg-gray-900 h-[100vh] overflow-hidden">
      <nav className="container p-6 mx-auto lg:flex lg:justify-between lg:items-center fle">
        <div className="flex items-center justify-between">
          <div>
            <a
              className="text-2xl font-bold text-gray-800 dark:text-white lg:text-3xl hover:text-gray-700 dark:hover:text-gray-300"
              href="#"
            >
              Brand
            </a>
          </div>
        </div>
      </nav>

      <div className="container px-6 py-16 mx-auto text-center">
        <div className="max-w-lg mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 dark:text-white lg:text-4xl">
            Eius, placeat. Quas, sequi perferendis labore?
          </h1>
          <p className="mt-6 text-gray-500 dark:text-gray-300">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Libero
            similique obcaecati illum mollitia.
          </p>
          <button className="px-9 py-2.5 mt-6 text-sm font-medium leading-5 text-center text-white capitalize bg-blue-600/75  rounded-lg hover:bg-blue-500/80 lg:mx-0 lg:w-auto focus:outline-none">
            ENTER
          </button>
        </div>

        <div className="flex justify-center mt-10">
          <img
            className="object-cover w-full h-96 rounded-xl lg:w-4/5"
            src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80"
          />
        </div>
      </div>
      <footer className="text-gray-500 dark:text-gray-400">
        <div className="text-center text-xs p-2">
          Made with TailwindCSS by {""}
          <a
            className="text-blue-400 from-teal-500"
            target="_blank"
            rel="noreferrer"
            href="/christopheralphonse.com"
          >
            Christopher Alphonse
          </a>
        </div>
      </footer>
    </section>
  );
};

export default App;
