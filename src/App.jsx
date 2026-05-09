import logo from './assets/logo.png'

export default function ChilenoSystemsLandingPage() {

  const whatsappLink =
    'https://wa.me/5515920004506?text=Olá%20Diego,%20quero%20conhecer%20a%20Chileno%20Systems'

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
      >

        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />

        <div className="relative w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 transition flex items-center justify-center shadow-2xl shadow-green-500/40">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-9 h-9 fill-white"
          >
            <path d="M16.004 3C8.82 3 3 8.82 3 16.004c0 2.823.902 5.438 2.438 7.57L3 29l5.617-2.367a12.944 12.944 0 0 0 7.387 2.305H16c7.184 0 13.004-5.82 13.004-13.004S23.184 3 16 3zm0 23.633a10.58 10.58 0 0 1-5.39-1.477l-.387-.23-3.332 1.403 1.414-3.25-.25-.399a10.566 10.566 0 1 1 7.945 3.953zm5.8-7.89c-.317-.16-1.875-.926-2.164-1.031-.29-.106-.5-.16-.71.158-.211.317-.816 1.031-1 1.242-.184.21-.367.237-.684.079-.317-.16-1.34-.493-2.555-1.57-.946-.844-1.586-1.887-1.77-2.203-.183-.317-.02-.488.138-.648.142-.141.317-.367.474-.55.158-.185.211-.317.317-.528.105-.21.052-.395-.026-.554-.079-.16-.71-1.715-.973-2.348-.256-.614-.517-.53-.71-.54l-.606-.01c-.21 0-.553.079-.843.395-.29.317-1.105 1.078-1.105 2.625 0 1.547 1.132 3.04 1.29 3.25.158.211 2.227 3.402 5.398 4.77.754.325 1.342.52 1.8.665.756.24 1.444.206 1.988.125.607-.09 1.875-.766 2.137-1.504.264-.74.264-1.373.185-1.504-.078-.132-.288-.21-.605-.37z" />
          </svg>

        </div>

      </a>

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-purple-900/40">

        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-black to-black" />

        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-3xl" />

        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-3xl" />

        {/* CONTEÚDO */}
        <div className="relative max-w-7xl mx-auto px-6 py-6 lg:py-10 grid lg:grid-cols-2 gap-10 items-center min-h-screen">

          {/* ESQUERDA */}
          <div>

            {/* LOGO */}
            <div className="flex justify-center lg:justify-start mb-2">

              <img
                src={logo}
                alt="Chileno Systems"
                className="w-[420px] lg:w-[560px] drop-shadow-[0_0_55px_rgba(168,85,247,0.5)] hover:scale-105 transition duration-500"
              />

            </div>

            {/* TAG */}
            <div className="inline-flex items-center rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 mb-6">
              CRM • IA • WhatsApp • Automação
            </div>

            {/* TÍTULO */}
            <h1 className="text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight">

              <span className="text-white">
                Centralize.
              </span>

              <br />

              <span className="text-purple-500">
                Automatize.
              </span>

              <br />

              <span className="text-white">
                Venda mais.
              </span>

            </h1>

            {/* TEXTO */}
            <p className="mt-8 text-lg text-zinc-300 max-w-xl leading-relaxed">
              A Chileno Systems ajuda empresas a organizarem atendimento,
              automatizarem processos e aumentarem resultados através de CRM,
              Inteligência Artificial e WhatsApp integrado.
            </p>

            {/* BOTÕES */}
            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-purple-700/30"
              >
                Solicitar Demonstração
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-purple-600 hover:bg-purple-600/10 transition px-8 py-4 rounded-2xl font-bold text-lg"
              >
                Falar no WhatsApp
              </a>

            </div>

          </div>

          {/* DIREITA */}
          <div className="relative flex justify-center">

            <div className="absolute inset-0 blur-3xl bg-purple-700/20 rounded-full" />

            {/* DASHBOARD */}
            <div className="relative bg-zinc-950 border border-purple-800/30 rounded-3xl p-5 scale-95 shadow-2xl shadow-purple-900/30 w-full max-w-[620px]">

              <div className="flex items-center gap-2 mb-6">

                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />

              </div>

              <div className="grid gap-4">

                <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">

                  <div className="text-sm text-zinc-400 mb-2">
                    Leads Hoje
                  </div>

                  <div className="text-5xl font-black text-purple-500">
                    +128
                  </div>

                </div>

                <div className="grid grid-cols-2 gap-4">

                  <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">

                    <div className="text-sm text-zinc-400 mb-2">
                      Conversões
                    </div>

                    <div className="text-4xl font-bold">
                      78%
                    </div>

                  </div>

                  <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">

                    <div className="text-sm text-zinc-400 mb-2">
                      Atendimento IA
                    </div>

                    <div className="text-4xl font-bold text-purple-400">
                      24h
                    </div>

                  </div>

                </div>

                <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">

                  <div className="flex justify-between items-center">

                    <div>

                      <div className="text-zinc-400 text-sm">
                        WhatsApp Integrado
                      </div>

                      <div className="text-2xl font-bold mt-1">
                        Atendimento Centralizado
                      </div>

                    </div>

                    <div className="w-16 h-16 rounded-2xl bg-purple-600 flex items-center justify-center text-3xl font-black shadow-lg shadow-purple-700/40">
                      AI
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>
    </div>
  )
}