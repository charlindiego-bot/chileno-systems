import logo from './assets/logo.png'

export default function ChilenoSystemsLandingPage() {
  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">

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

              <button className="bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-purple-700/30">
                Solicitar Demonstração
              </button>

              <button className="border border-purple-600 hover:bg-purple-600/10 transition px-8 py-4 rounded-2xl font-bold text-lg">
                Falar no WhatsApp
              </button>

            </div>

          </div>

          {/* DIREITA */}
          <div className="relative flex justify-center">

            <div className="absolute inset-0 blur-3xl bg-purple-700/20 rounded-full" />

            {/* DASHBOARD */}
            <div className="relative bg-zinc-950 border border-purple-800/30 rounded-3xl p-5 scale-95 shadow-2xl shadow-purple-900/30 w-full max-w-[620px]">

              {/* TOP */}
              <div className="flex items-center gap-2 mb-6">

                <div className="w-3 h-3 rounded-full bg-red-500" />

                <div className="w-3 h-3 rounded-full bg-yellow-500" />

                <div className="w-3 h-3 rounded-full bg-green-500" />

              </div>

              {/* GRID */}
              <div className="grid gap-4">

                {/* CARD */}
                <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">

                  <div className="text-sm text-zinc-400 mb-2">
                    Leads Hoje
                  </div>

                  <div className="text-5xl font-black text-purple-500">
                    +128
                  </div>

                </div>

                {/* LINHA */}
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

                {/* CARD FINAL */}
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
            Tudo que sua empresa precisa em um só lugar
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Centralize atendimento, automatize tarefas e aumente suas vendas
            com uma plataforma inteligente.
          </p>

        </div>

        {/* CARDS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            {
              title: 'CRM Inteligente',
              desc: 'Gerencie leads, oportunidades e funis de vendas.',
            },
            {
              title: 'WhatsApp Integrado',
              desc: 'Centralize conversas e automatize atendimento.',
            },
            {
              title: 'Agente IA',
              desc: 'Atendimento automático inteligente 24 horas.',
            },
            {
              title: 'Gestão de Conversões',
              desc: 'Descubra quais campanhas geram mais resultados.',
            },
          ].map((item, index) => (

            <div
              key={index}
              className="bg-zinc-950 border border-purple-900/30 rounded-3xl p-8 hover:border-purple-500 transition"
            >

              <div className="w-14 h-14 rounded-2xl bg-purple-600/20 border border-purple-600/40 flex items-center justify-center text-purple-400 text-2xl font-black mb-6">
                +
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item.title}
              </h3>

              <p className="text-zinc-400 leading-relaxed">
                {item.desc}
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
              Estrutura simples, rápida e eficiente.
            </p>

          </div>

          <div className="grid lg:grid-cols-3 gap-8">

            {[
              {
                step: '01',
                title: 'Implantamos',
                desc: 'Configuramos toda a estrutura da sua operação.',
              },
              {
                step: '02',
                title: 'Automatizamos',
                desc: 'Criamos fluxos inteligentes e atendimento automatizado.',
              },
              {
                step: '03',
                title: 'Escalamos',
                desc: 'Sua empresa ganha produtividade e aumenta resultados.',
              },
            ].map((item, index) => (

              <div
                key={index}
                className="bg-black rounded-3xl border border-purple-900/30 p-10"
              >

                <div className="text-6xl font-black text-purple-600/30 mb-8">
                  {item.step}
                </div>

                <h3 className="text-3xl font-bold mb-4">
                  {item.title}
                </h3>

                <p className="text-zinc-400 text-lg leading-relaxed">
                  {item.desc}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-t border-purple-900/30">

        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-black" />

        <div className="relative max-w-5xl mx-auto px-6 py-28 text-center">

          <h2 className="text-5xl font-black leading-tight">
            Sua empresa pronta para o próximo nível.
          </h2>

          <p className="mt-8 text-zinc-300 text-xl max-w-3xl mx-auto leading-relaxed">
            Organize sua operação, automatize seu atendimento e aumente seus
            resultados com a Chileno Systems.
          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <button className="bg-purple-600 hover:bg-purple-700 transition px-10 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-purple-700/30">
              Solicitar Demonstração
            </button>

            <button className="border border-purple-500 hover:bg-purple-600/10 transition px-10 py-5 rounded-2xl font-bold text-lg">
              Falar com Especialista
            </button>

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