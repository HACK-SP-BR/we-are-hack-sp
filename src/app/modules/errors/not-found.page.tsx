// src/modules/errors/not-found.page.tsx
import { Link } from "react-router-dom";
import { AlertTriangle } from "lucide-react";

export function NotFoundPage() {
  return (
    <main className="min-h-screen flex items-center justify-center px-lg">
      <section className="w-full max-w-xl mx-auto intro-y flex flex-col items-center text-center gap-md">

        {/* Ícone + 404 */}
        <div className="flex flex-col items-center gap-sm">
          <AlertTriangle size={48} />
          <h1 className="text-6xl font-black leading-none tracking-tight">404</h1>
        </div>

        {/* Texto */}
        <p className="text-lg">
          A página que você está procurando não existe ou foi movida.
        </p>

        {/* Botão */}
        <Link
          to="/"
          className="mt-xl inline-flex items-center justify-center px-xl py-lg rounded-xl bg-white shadow-md hover:shadow-lg transition-shadow font-bold"
        >
          Voltar para a Home
        </Link>
      </section>
    </main>
  );
}
