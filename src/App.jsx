import { useEffect, useState } from 'react'
import logo from './assets/logo.png'

export default function ChilenoSystemsLandingPage() {
  const whatsappLink =
    'https://wa.me/5515920004506?text=Olá%20Diego,%20quero%20conhecer%20a%20Chileno%20Systems'

  const notifications = [
    '🏢 Empresa de Alphaville/SP solicitou automação comercial',
    '🚀 Empresa de São Paulo/SP avaliando CRM com IA',
    '💬 Clínica em Barueri/SP iniciou integração WhatsApp',
    '📈 Lead de Sorocaba/SP solicitou demonstração',
    '🤖 Empresa de Campinas/SP ativou atendimento inteligente',
    '🏥 Clínica em Cerquilho/SP avaliando automação de atendimento',
    '🧠 Empresa de Tatuí/SP interessada em IA para vendas',
    '📊 Empresa de Boituva/SP solicitou proposta comercial',
    '⚡ Empresa de Alphaville/SP iniciou avaliação do CRM',
    '💼 Nova empresa em São Paulo/SP entrou em contato',
  ]

  const [notification, setNotification] = useState(notifications[0])
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false)

      setTimeout(() => {
        const random =
          notifications[Math.floor(Math.random() * notifications.length)]

        setNotification(random)
        setVisible(true)
      }, 500)
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">

      {/* POPUP */}
      <div
        className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${
          visible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="backdrop-blur-xl bg-zinc-950/90 border border-purple-500/30 rounded-2xl px-5 py-4 shadow-2xl shadow-purple-900/40 max-w-[320px]">

          <div className="flex items-center gap-2 mb-2">
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />

            <span className="text-green-400 text-sm font-semibold">
              Atividade recente
            </span>
          </div>

          <p className="text-sm text-zinc-200 leading-relaxed">
            {notification}
          </p>

          <div className="mt-3 text-xs text-zinc-500">
            há alguns segundos
          </div>

        </div>
      </div>

      {/* WHATSAPP FLOAT */}
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

        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-black to-black" />

        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-3xl" />

        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-6 lg:py-10 grid lg:grid-cols-2 gap-10 items-center min-h-screen">

          {/* ESQUERDA */}
          <div>

            <div className="flex justify-center lg:justify-start mb-2">

              <img
                src={logo}
                alt="Chileno Systems"
                className="w-[420px] lg:w-[560px] drop-shadow-[0_0_55px_rgba(168,85,247,0.5)] hover:scale-105 transition duration-500"
              />

            </div>

            <div className="inline-flex items-center rounded-full border border-purple-500/40 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 mb-6">
              CRM • IA • WhatsApp • Automação
            </div>

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

            <p className="mt-8 text-lg text-zinc-300 max-w-xl leading-relaxed">
              A Chileno Systems ajuda empresas a organizarem atendimento,
              automatizarem processos e aumentarem resultados através de CRM,
              Inteligência Artificial e WhatsApp integrado.
            </p>

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

      {/* BENEFÍCIOS */}
      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-16">

          <h2 className="text-4xl font-black mb-4">
            Tudo que sua empresa precisa
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Automatize processos, centralize atendimento e aumente resultados.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            'CRM Inteligente',
            'WhatsApp Integrado',
            'Automação IA',
            'Gestão de Conversões',
          ].map((item, index) => (

            <div
              key={index}
              className="bg-zinc-950 border border-purple-900/30 rounded-3xl p-8 hover:border-purple-500 transition"
            >

              <div className="w-14 h-14 rounded-2xl bg-purple-600/20 border border-purple-600/40 flex items-center justify-center text-purple-400 text-2xl font-black mb-6">
                +
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item}
              </h3>

              <p className="text-zinc-400">
                Solução moderna para empresas que querem crescer com tecnologia.
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* COMO FUNCIONA */}
      <section className="bg-zinc-950 border-y border-purple-900/30">

        <div className="max-w-7xl mx-auto px-6 py-24">

          <div className="text-center mb-20">

            <h2 className="text-4xl font-black mb-4">
              Como funciona
            </h2>

            <p className="text-zinc-400 text-lg">
              Simples, rápido e eficiente.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {[
              'Implantamos',
              'Automatizamos',
              'Escalamos',
            ].map((item, index) => (

              <div
                key={index}
                className="bg-black rounded-3xl border border-purple-900/30 p-10"
              >

                <div className="text-6xl font-black text-purple-600/30 mb-8">
                  0{index + 1}
                </div>

                <h3 className="text-3xl font-bold mb-4">
                  {item}
                </h3>

                <p className="text-zinc-400 text-lg">
                  Estruturamos sua operação para crescer com automação.
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA FINAL */}
      <section className="relative overflow-hidden border-t border-purple-900/30">

        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-black" />

        <div className="relative max-w-5xl mx-auto px-6 py-28 text-center">

          <h2 className="text-5xl font-black leading-tight">
            Sua empresa pronta para o próximo nível.
          </h2>

          <p className="mt-8 text-zinc-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Organize atendimento, automatize processos e aumente vendas.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-purple-600 hover:bg-purple-700 transition px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-purple-700/30"
            >
              Solicitar Demonstração
            </a>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-purple-900/20 bg-black py-10">

        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row justify-between items-center gap-6">

          <img
            src={logo}
            alt="Chileno Systems"
            className="w-52 opacity-90"
          />

          <div className="text-zinc-500 text-sm">
            © 2026 Chileno Systems. Todos os direitos reservados.
          </div>

        </div>

      </footer>

    </div>
  )
}