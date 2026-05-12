import { useEffect, useState } from 'react'
import logo from './assets/logo.png'

export default function App() {

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
    '🎉 Empresa de Sorocaba/SP contratou implantação completa',
    '📝 Empresa de Jundiaí/SP solicitou demonstração de IA',
    '🤝 Empresa de Indaiatuba/SP iniciou conversa sobre automação',
  ]

  const [notification, setNotification] = useState(notifications[0])
  const [visible, setVisible] = useState(true)

  const [leadCount, setLeadCount] = useState(0)
  const [conversionCount, setConversionCount] = useState(0)
  const [hoursCount, setHoursCount] = useState(0)

  useEffect(() => {

    const hideInitial = setTimeout(() => {
      setVisible(false)
    }, 6000)

    const interval = setInterval(() => {

      const random =
        notifications[Math.floor(Math.random() * notifications.length)]

      setNotification(random)

      setVisible(true)

      setTimeout(() => {
        setVisible(false)
      }, 6000)

    }, 20000)

    return () => {
      clearTimeout(hideInitial)
      clearInterval(interval)
    }

  }, [])

  useEffect(() => {

    const leadsInterval = setInterval(() => {
      setLeadCount(prev => {
        if (prev >= 128) {
          clearInterval(leadsInterval)
          return 128
        }
        return prev + 2
      })
    }, 20)

    const conversionInterval = setInterval(() => {
      setConversionCount(prev => {
        if (prev >= 78) {
          clearInterval(conversionInterval)
          return 78
        }
        return prev + 1
      })
    }, 40)

    const hoursInterval = setInterval(() => {
      setHoursCount(prev => {
        if (prev >= 24) {
          clearInterval(hoursInterval)
          return 24
        }
        return prev + 1
      })
    }, 80)

  }, [])

  const plans = [
    {
      title: 'Starter',
      price: 'R$ 197/mês',
      desc:
        'Ideal para pequenas empresas organizarem atendimento, leads e vendas.',
      features: [
        'CRM integrado',
        'WhatsApp conectado',
        'Funil comercial',
        'Gestão básica de leads',
      ],
    },
    {
      title: 'Business',
      price: 'R$ 497/mês',
      desc:
        'Automação inteligente com foco em crescimento e escalabilidade.',
      features: [
        'CRM + IA',
        'Automação comercial',
        'Multi atendimento',
        'Dashboard completo',
      ],
      featured: true,
    },
    {
      title: 'Enterprise',
      price: 'Sob consulta',
      desc:
        'Implantação premium personalizada para empresas de alta performance.',
      features: [
        'IA personalizada',
        'Usuários ilimitados',
        'Treinamento completo',
        'Implantação estratégica',
      ],
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/70 border-b border-purple-900/20">

        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          <img
            src={logo}
            alt="Chileno Systems"
            className="w-64 lg:w-72 drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]"
          />

          <nav className="hidden lg:flex items-center gap-8 text-sm text-zinc-300">

            <a href="#beneficios" className="hover:text-purple-400 transition">
              Benefícios
            </a>

            <a href="#como-funciona" className="hover:text-purple-400 transition">
              Como Funciona
            </a>

            <a href="#planos" className="hover:text-purple-400 transition">
              Planos
            </a>

            <a href="#contato" className="hover:text-purple-400 transition">
              Contato
            </a>

          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 transition px-5 py-3 rounded-xl font-semibold text-sm shadow-lg shadow-purple-900/30"
          >
            Falar Agora
          </a>

        </div>

      </header>

      {/* POPUP */}
      <div
        className={`fixed bottom-6 left-6 z-50 transition-all duration-500 ${
          visible
            ? 'opacity-100 translate-y-0'
            : 'opacity-0 translate-y-5 pointer-events-none'
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

      {/* BOTÃO WHATS */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >

        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />

        <div className="relative w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 transition flex items-center justify-center shadow-2xl shadow-green-500/40">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-9 h-9 fill-white"
          >
            <path d="M16.004 3C8.82 3 3 8.82 3 16.004S8.82 29 16.004 29 29 23.18 29 16.004 23.18 3 16.004 3z" />
          </svg>

        </div>

      </a>

      {/* HERO */}
      <section className="relative overflow-hidden pt-44 pb-32">

        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-black to-black" />

        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-3xl" />

        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 items-center">

          <div>

            <div className="inline-flex items-center rounded-full border border-green-500/40 bg-green-500/10 px-4 py-2 text-sm text-green-400 mb-6">
              🟢 Especialista online agora
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
              CRM, automação comercial e Inteligência Artificial para empresas
              que querem escalar atendimento, gerar mais conversões e crescer com tecnologia.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#contato"
                className="bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-2xl font-bold text-lg shadow-2xl shadow-purple-700/30"
              >
                Solicitar Demonstração
              </a>

              <a
                href="#planos"
                className="border border-purple-600 hover:bg-purple-600/10 transition px-8 py-4 rounded-2xl font-bold text-lg"
              >
                Ver Planos
              </a>

            </div>

          </div>

          <div className="relative">

            <div className="bg-zinc-950 border border-purple-800/30 rounded-3xl p-6 shadow-2xl shadow-purple-900/30">

              <div className="grid gap-4">

                <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">

                  <div className="text-sm text-zinc-400 mb-2">
                    Leads Hoje
                  </div>

                  <div className="text-5xl font-black text-purple-500">
                    +{leadCount}
                  </div>

                </div>

                <div className="grid grid-cols-2 gap-4">

                  <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">

                    <div className="text-sm text-zinc-400 mb-2">
                      Conversões
                    </div>

                    <div className="text-4xl font-bold">
                      {conversionCount}%
                    </div>

                  </div>

                  <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">

                    <div className="text-sm text-zinc-400 mb-2">
                      Atendimento IA
                    </div>

                    <div className="text-4xl font-bold text-purple-400">
                      {hoursCount}h
                    </div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* BENEFÍCIOS */}
      <section
        id="beneficios"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <div className="text-center mb-16">

          <h2 className="text-5xl font-black mb-6">
            Tudo que sua empresa precisa
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Automatize atendimento, organize vendas e transforme sua operação comercial.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            'CRM Inteligente',
            'WhatsApp Integrado',
            'Automação IA',
            'Gestão Comercial',
          ].map((item, index) => (

            <div
              key={index}
              className="bg-zinc-950 border border-purple-900/30 rounded-3xl p-8 hover:border-purple-500 transition hover:-translate-y-2 duration-300"
            >

              <div className="w-14 h-14 rounded-2xl bg-purple-600/20 border border-purple-600/40 flex items-center justify-center text-purple-400 text-2xl font-black mb-6">
                +
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item}
              </h3>

              <p className="text-zinc-400">
                Solução moderna para empresas que querem crescer usando tecnologia e automação.
              </p>

            </div>

          ))}

        </div>

      </section>

      {/* COMO FUNCIONA */}
      <section
        id="como-funciona"
        className="bg-zinc-950 border-y border-purple-900/20 py-24"
      >

        <div className="max-w-7xl mx-auto px-6">

          <div className="text-center mb-20">

            <h2 className="text-5xl font-black mb-6">
              Como funciona a implantação
            </h2>

            <p className="text-zinc-400 text-lg max-w-3xl mx-auto">
              Estruturamos toda operação comercial da sua empresa para transformar
              atendimento em conversão.
            </p>

          </div>

          <div className="grid lg:grid-cols-4 gap-6">

            {[
              {
                title: 'Diagnóstico',
                text: 'Analisamos atendimento, operação e fluxo comercial.',
              },
              {
                title: 'Estruturação',
                text: 'Configuramos CRM, funis, usuários e automações.',
              },
              {
                title: 'Integração',
                text: 'Conectamos WhatsApp, IA e canais de atendimento.',
              },
              {
                title: 'Escala',
                text: 'Sua equipe começa a vender com mais velocidade.',
              },
            ].map((step, index) => (

              <div
                key={index}
                className="bg-black border border-purple-900/30 rounded-3xl p-8"
              >

                <div className="text-purple-500 text-5xl font-black mb-6">
                  0{index + 1}
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  {step.title}
                </h3>

                <p className="text-zinc-400 leading-relaxed">
                  {step.text}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>

      {/* PLANOS */}
      <section
        id="planos"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <div className="text-center mb-20">

          <h2 className="text-5xl font-black mb-6">
            Planos inteligentes
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Escolha o plano ideal para escalar sua empresa com tecnologia.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => (

            <div
              key={index}
              className={`rounded-3xl p-10 border transition hover:-translate-y-2 duration-300 relative overflow-hidden ${
                plan.featured
                  ? 'bg-purple-600 border-purple-400 shadow-2xl shadow-purple-900/40 scale-105'
                  : 'bg-zinc-950 border-purple-900/30'
              }`}
            >

              {plan.featured && (

                <div className="absolute top-4 right-4 bg-white text-black text-xs font-bold px-3 py-1 rounded-full">
                  MAIS POPULAR
                </div>

              )}

              <h3 className="text-3xl font-black mb-4">
                {plan.title}
              </h3>

              <div className="text-5xl font-black mb-6">
                {plan.price}
              </div>

              <p className={`mb-8 leading-relaxed ${
                plan.featured
                  ? 'text-purple-100'
                  : 'text-zinc-400'
              }`}>
                {plan.desc}
              </p>

              <div className="space-y-4 mb-10">

                {plan.features.map((feature, i) => (

                  <div key={i} className="flex items-center gap-3">

                    <div className="w-2 h-2 rounded-full bg-green-400" />

                    <span>
                      {feature}
                    </span>

                  </div>

                ))}

              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full block text-center py-4 rounded-2xl font-bold transition ${
                  plan.featured
                    ? 'bg-white text-black hover:bg-zinc-200'
                    : 'bg-purple-600 hover:bg-purple-700'
                }`}
              >
                Solicitar Demonstração
              </a>

            </div>

          ))}

        </div>

      </section>

      {/* CONTATO */}
      <section
        id="contato"
        className="bg-zinc-950 border-t border-purple-900/20 py-24"
      >

        <div className="max-w-4xl mx-auto px-6 text-center">

          <h2 className="text-5xl font-black mb-6">
            Vamos transformar sua operação?
          </h2>

          <p className="text-zinc-400 text-lg mb-12">
            Fale agora e descubra como automatizar atendimento,
            estruturar vendas e aumentar conversões.
          </p>

          <form
            onSubmit={(e) => {

              e.preventDefault()

              const nome = e.target.nome.value
              const empresa = e.target.empresa.value
              const telefone = e.target.telefone.value

              const mensagem =
                `Olá Diego! Quero uma demonstração.%0A%0A` +
                `👤 Nome: ${nome}%0A` +
                `🏢 Empresa: ${empresa}%0A` +
                `📞 WhatsApp: ${telefone}`

              window.open(
                `https://wa.me/5515920004506?text=${mensagem}`,
                '_blank'
              )

            }}
            className="grid gap-5"
          >

            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              required
              className="bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-purple-500 transition"
            />

            <input
              type="text"
              name="empresa"
              placeholder="Empresa"
              required
              className="bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-purple-500 transition"
            />

            <input
              type="text"
              name="telefone"
              placeholder="WhatsApp"
              required
              className="bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-purple-500 transition"
            />

            <button
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 transition py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-purple-900/40"
            >
              Solicitar Demonstração
            </button>

          </form>

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