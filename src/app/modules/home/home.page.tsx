export const HomePage = () => {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-6 text-center bg-gradient-to-br from-gray-900 to-gray-800 text-white">
        
        <h1 className="text-5xl font-bold mb-4">
          <span className="text-sky-400">HACK SP</span>
        </h1>
  
        <h2 className="text-xl md:text-2xl max-w-xl leading-relaxed mb-4">
          Hackathons gratuitos para estudantes do ensino médio
        </h2>
  
        <p className="text-lg opacity-80 mb-8">
          📍 São Paulo, SP
        </p>
  
        <button className="px-6 py-3 bg-sky-400 text-black font-semibold rounded-lg shadow-lg hover:bg-sky-300 transition">
          Saiba Mais
        </button>
  
      </div>
    );
  }
  