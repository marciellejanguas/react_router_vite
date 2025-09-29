function Home() {
  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold text-purple-500 mb-4">
        Página Inicial
      </h1>
      <p className="text-lg text-gray-700">
        Bem-vindo ao meu primeiro app com React Router criado em 29 de setembro de 2025!
      </p>
      <p className="text-lg text-gray-700">
        Meu nome é Marcielle Janguas e sou estudante de engenharia de software!
      </p>
      <div className="mt-8 p-6 bg-purple-50 rounded-lg">
        <h2 className="text-xl text-purple-500 font-semibold mb-2">O que você encontra aqui:</h2>
        <ul className="text-left space-y-2">
          <li>✅ Navegação simples</li>
          <li>✅ Múltiplas páginas</li>
          <li>✅ React Router</li>
        </ul>
      </div>
    </div>
  );
}

export default Home;