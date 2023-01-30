function Home() {
  return (
    <div className="flex flex-col py-20" id="home">
      <div className="flex flex-col mx-20 text-white mt-20">
        <p className="text-2xl">¡Hola!</p>
        <p className="text-3xl"> Soy Isidoro Francisco Hilario</p>
        <p className="text-4xl font-bold ">FULL STACK DEVELOPER</p>
        <div className="flex py-10 text-white">
          <a
            href="#cv"
            className="border-solid border-2  border-purple-800 m-3 p-2 text-lg rounded-xl bg-purple-800 hover:bg-violet-600 hover:border-violet-600"
          >
            DESCARGAR CV
          </a>
          <a
            href="#contac"
            className="border-solid border-2  border-purple-800 m-3 p-2 text-lg rounded-xl bg-purple-800 hover:bg-violet-600 hover:border-violet-600"
          >
            CONTACTO
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
