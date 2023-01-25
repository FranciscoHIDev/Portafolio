function Home() {
  return (
    <div className="flex py-10 flex-col mx-10 text-white"  id="home">
      <p className="text-2xl"> Hola! mi nombre es</p>

      <p className="text-3xl">Isidoro Francisco</p>
      <p className="text-4xl">FULL STACK DEVELOPER</p>
      <div className="flex py-10 text-white">     
        <a href="#cv" className="border-solid border-2  border-purple-800 m-3 p-2 text-lg rounded-xl bg-purple-800 hover:bg-violet-600 hover:border-violet-600">DESCARGAR CV</a>
        <a href="#contac" className="border-solid border-2  border-purple-800 m-3 p-2 text-lg rounded-xl bg-purple-800 hover:bg-violet-600 hover:border-violet-600">CONTACTO</a>
      </div>
    </div>
  );
}

export default Home;
