export const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 sm:p-10 text-center bg-gradient-to-br from-gray-900 via-gray-950 to-gray-800 text-white">

      <div className="flex flex-col items-center max-w-4xl gap-8 sm:gap-10">
      
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-extrabold leading-tight tracking-tight">
          <span className="text-sky-400 drop-shadow-lg">HACK SP</span>
        </h1>
  
        <h2 className="text-xl md:text-3xl max-w-3xl font-light leading-relaxed text-gray-300">
          Hackathons gratuitos focados em inovação para estudantes do ensino médio
        </h2>
  
        <p className="text-lg md:text-xl font-medium text-gray-400 mt-2">
          São Paulo, SP
        </p>
  
        <button className="mt-4 px-8 py-4 bg-sky-500 text-gray-900 font-bold text-lg rounded-xl shadow-2xl hover:bg-sky-400 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-sky-500 focus:ring-opacity-50">
          Saiba Mais e Participe
        </button>
      
      </div>

    </div>
  );
}