import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 py-20">
      
      <section className="w-full max-w-3xl mx-auto flex flex-col items-center text-center gap-12 px-6 p-12 bg-white rounded-2xl shadow-xl">

        <div>
          <div className="flex flex-col items-center gap-5"> 
            
            <AlertTriangle size={60} className="text-orange-500" /> 
            
            <h1 className="text-8xl sm:text-9xl font-extrabold tracking-tight text-gray-900">
              404
            </h1>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6"> 
          <h2 className="text-2xl sm:text-4xl font-semibold text-gray-800">
            Página Não Encontrada
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-2xl">
            A página que você está procurando não existe ou foi movida. Verifique o endereço ou clique no botão abaixo para voltar à página inicial.
          </p>
        </div>

        <Link
          to="/"
          className="mt-8 inline-flex items-center justify-center px-8 py-4 border border-transparent text-lg font-bold rounded-xl shadow-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-offset-2 focus:ring-blue-500 transition-all duration-200 transform hover:scale-[1.02]"
        >
          Voltar para a Home
        </Link>
      </section>
    </main>
  );
}