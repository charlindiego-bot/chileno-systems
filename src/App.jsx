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

  const [expandedPlan, setExpandedPlan] = useState(null)

  /* POPUP */
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

    }, 18000)

    return () => {
      clearTimeout(hideInitial)
      clearInterval(interval)
    }

  }, [])

  /* CONTADORES */
  useEffect(() => {

    const leads = setInterval(() => {
      setLeadCount(prev => {
        if (prev >= 128) {
          clearInterval(leads)
          return 128
        }
        return prev + 2
      })
    }, 20)

    const conversions = setInterval(() => {
      setConversionCount(prev => {
        if (prev >= 78) {
          clearInterval(conversions)
          return 78
        }
        return prev + 1
      })
    }, 40)

    const hours = setInterval(() => {
      setHoursCount(prev => {
        if (prev >= 24) {
          clearInterval(hours)
          return 24
        }
        return prev + 1
      })
    }, 80)

  }, [])

  const plans = [
    {
      id: 'starter',
      title: 'Starter',
      price: 'R$ 197/mês',
      popular: false,

      description:
        'Ideal para pequenas empresas organizarem atendimento e vendas.',

      features: [
        'CRM integrado',
        'WhatsApp conectado',
        'Pipeline comercial',
        'Gestão de leads',
      ],

      details: {
        subtitle: 'Estruture seu comercial com tecnologia',

        text:
          'Organize atendimento, clientes e vendas em uma única plataforma moderna.',

        modules: [
          'CRM completo',
          'Funil de vendas',
          'Controle de leads',
          'Dashboard comercial',
          'WhatsApp integrado',
        ],

        benefits: [
          'Mais organização',
          'Menos perda de leads',
          'Maior produtividade',
        ],
      },
    },

    {
      id: 'business',
      title: 'Business',
      price: 'R$ 497/mês',
      popular: true,

      description:
        'Automação inteligente com IA para empresas em crescimento.',

      features: [
        'CRM + IA',
        'Automação comercial',
        'Multi atendimento',
        'Dashboard avançado',
      ],

      details: {
        subtitle: 'Escalabilidade e automação inteligente',

        text:
          'Automatize atendimento e acelere crescimento com Inteligência Artificial.',

        modules: [
          'CRM avançado',
          'Automação WhatsApp',
          'Atendimento IA',
          'Distribuição de leads',
          'Relatórios avançados',
        ],

        benefits: [
          'Escalabilidade',
          'Mais conversões',
          'Redução operacional',
        ],
      },
    },

    {
      id: 'enterprise',
      title: 'Enterprise',
      price: 'Sob consulta',
      popular: false,

      description:
        'Estrutura premium personalizada para operações avançadas.',

      features: [
        'IA personalizada',
        'Usuários ilimitados',
        'Consultoria estratégica',
        'Treinamento completo',
      ],

      details: {
        subtitle: 'Operação premium de alta performance',

        text:
          'Implantação estratégica para empresas que buscam escala profissional.',

        modules: [
          'Fluxos personalizados',
          'Integrações avançadas',
          'IA sob medida',
          'Consultoria estratégica',
          'Treinamento da equipe',
        ],

        benefits: [
          'Alta performance',
          'Escalabilidade total',
          'Operação profissional',
        ],
      },
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden scroll-smooth">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/70 border-b border-purple-900/30">

        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <img
            src={logo}
            alt="Chileno Systems"
            className="w-64 lg:w-72"
          />

          <nav className="hidden lg:flex items-center gap-8 text-zinc-300">

            <a href="#sobre" className="hover:text-purple-400 transition">
              Sobre Nós
            </a>

            <a href="#beneficios" className="hover:text-purple-400 transition">
              Benefícios
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
            className="bg-purple-600 hover:bg-purple-700 transition px-5 py-3 rounded-2xl font-semibold shadow-lg shadow-purple-900/30"
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

        <div className="bg-zinc-950/95 backdrop-blur-xl border border-purple-500/30 rounded-2xl px-5 py-4 shadow-2xl shadow-purple-900/30 max-w-[320px]">

          <div className="flex items-center gap-2 mb-2">

            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />

            <span className="text-green-400 text-sm font-semibold">
              Atividade recente
            </span>

          </div>

          <p className="text-sm text-zinc-200">
            {notification}
          </p>

        </div>

      </div>

      {/* WHATSAPP FLOAT */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >

        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-30" />

        <div className="relative w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 transition flex items-center justify-center shadow-2xl shadow-green-500/40 text-3xl">
          💬
        </div>

      </a>

      {/* HERO */}
      <section className="relative pt-40 pb-28 overflow-hidden">

        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-black to-black" />

        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-3xl" />

        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div>

            <div className="inline-flex items-center rounded-full border border-green-500/40 bg-green-500/10 px-4 py-2 text-sm text-green-400 mb-8">
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
              CRM, Inteligência Artificial e automação comercial para empresas
              que querem escalar atendimento e aumentar vendas.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
                href="#planos"
                className="bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-2xl font-bold shadow-2xl shadow-purple-700/30"
              >
                Ver Planos
              </a>

              <a
                href="#contato"
                className="border border-purple-600 hover:bg-purple-600/10 transition px-8 py-4 rounded-2xl font-bold"
              >
                Solicitar Demonstração
              </a>

            </div>

          </div>

          {/* RIGHT */}
          <div className="bg-zinc-950 border border-purple-900/30 rounded-3xl p-6 shadow-2xl shadow-purple-900/20">

            <div className="grid gap-4">

              <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">

                <div className="text-sm text-zinc-400 mb-2">
                  Leads Hoje
                </div>

                <div className="text-5xl font-black text-purple-500">
                  +{leadCount}
                </div>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">

                  <div className="text-sm text-zinc-400 mb-2">
                    Conversões
                  </div>

                  <div className="text-4xl font-bold">
                    {conversionCount}%
                  </div>

                </div>

                <div className="bg-zinc-900 rounded-2xl p-6 border border-zinc-800">

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

      </section>

      {/* SOBRE NÓS */}
      <section
        id="sobre"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <div className="bg-zinc-950 border border-purple-900/30 rounded-3xl p-10 lg:p-16 shadow-2xl shadow-purple-900/20">

          <div className="max-w-5xl">

            <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 mb-8">
              🚀 Sobre a Chileno Systems
            </div>

            <h2 className="text-5xl font-black mb-8 leading-tight">
              Tecnologia criada para simplificar operações comerciais
            </h2>

            <div className="space-y-6 text-zinc-300 text-lg leading-relaxed">

              <p>
                A Chileno Systems nasceu da necessidade real de empresas que enfrentavam dificuldades para organizar atendimento, vendas, processos internos e automações no dia a dia.
              </p>

              <p>
                Durante anos percebemos que muitas ferramentas disponíveis no mercado eram complexas, caras ou não entregavam integração eficiente entre CRM, Inteligência Artificial, WhatsApp e automação comercial.
              </p>

              <p>
                Com isso surgiu a ideia de criar uma estrutura moderna, intuitiva e inteligente, capaz de centralizar processos, automatizar operações e ajudar empresas a vender mais com tecnologia.
              </p>

              <p>
                Hoje a Chileno Systems entrega soluções voltadas para crescimento, produtividade e escalabilidade, utilizando automações inteligentes e IA aplicada ao comercial para transformar operações comuns em operações de alta performance.
              </p>

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
            Centralize atendimento, automatize processos e aumente conversões.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            'CRM Inteligente',
            'Automação IA',
            'WhatsApp Integrado',
            'Dashboard Comercial',
          ].map((item, index) => (

            <div
              key={index}
              className="bg-zinc-950 border border-purple-900/30 rounded-3xl p-8 hover:border-purple-500 transition hover:-translate-y-2"
            >

              <div className="w-14 h-14 rounded-2xl bg-purple-600/20 border border-purple-600/40 flex items-center justify-center text-purple-400 text-2xl font-black mb-6">
                +
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {item}
              </h3>

              <p className="text-zinc-400">
                Solução moderna para operações comerciais inteligentes.
              </p>

            </div>

          ))}

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

          <p className="text-zinc-400 text-lg">
            Escolha a estrutura ideal para sua empresa.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">

          {plans.map((plan) => (

            <div
              key={plan.id}
              className={`rounded-3xl p-10 border relative overflow-hidden transition hover:-translate-y-2 ${
                plan.popular
                  ? 'bg-purple-600 border-purple-400 shadow-2xl shadow-purple-900/40'
                  : 'bg-zinc-950 border-purple-900/30'
              }`}
            >

              {plan.popular && (

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
                plan.popular
                  ? 'text-purple-100'
                  : 'text-zinc-400'
              }`}>
                {plan.description}
              </p>

              <div className="space-y-4 mb-10">

                {plan.features.map((feature, i) => (

                  <div
                    key={i}
                    className="flex items-center gap-3"
                  >

                    <div className="w-2 h-2 rounded-full bg-green-400" />

                    <span>
                      {feature}
                    </span>

                  </div>

                ))}

              </div>

              <button
                onClick={() =>
                  setExpandedPlan(
                    expandedPlan === plan.id
                      ? null
                      : plan.id
                  )
                }
                className={`w-full py-4 rounded-2xl font-bold transition ${
                  plan.popular
                    ? 'bg-white text-black hover:bg-zinc-200'
                    : 'bg-purple-600 hover:bg-purple-700'
                }`}
              >

                {expandedPlan === plan.id
                  ? 'Fechar detalhes'
                  : 'Conhecer Plano'}

              </button>

            </div>

          ))}

        </div>

        {/* EXPANSÃO */}
        {expandedPlan && (

          <div className="mt-16 animate-fadeIn">

            {plans
              .filter(plan => plan.id === expandedPlan)
              .map((plan) => (

                <div
                  key={plan.id}
                  className="bg-zinc-950 border border-purple-900/30 rounded-3xl p-10 shadow-2xl shadow-purple-900/20"
                >

                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 mb-12">

                    <div>

                      <div className="text-purple-400 font-semibold mb-2">
                        {plan.title}
                      </div>

                      <h3 className="text-4xl font-black mb-4">
                        {plan.details.subtitle}
                      </h3>

                      <p className="text-zinc-400 text-lg max-w-4xl">
                        {plan.details.text}
                      </p>

                    </div>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-600 hover:bg-purple-700 transition px-8 py-4 rounded-2xl font-bold whitespace-nowrap"
                    >
                      Solicitar Demonstração
                    </a>

                  </div>

                  <div className="grid lg:grid-cols-2 gap-10">

                    <div>

                      <h4 className="text-2xl font-bold mb-6">
                        O que contempla
                      </h4>

                      <div className="space-y-4">

                        {plan.details.modules.map((item, index) => (

                          <div
                            key={index}
                            className="bg-black/40 border border-zinc-800 rounded-2xl px-5 py-4"
                          >
                            {item}
                          </div>

                        ))}

                      </div>

                    </div>

                    <div>

                      <h4 className="text-2xl font-bold mb-6">
                        Benefícios
                      </h4>

                      <div className="space-y-4">

                        {plan.details.benefits.map((item, index) => (

                          <div
                            key={index}
                            className="bg-black/40 border border-zinc-800 rounded-2xl px-5 py-4"
                          >
                            {item}
                          </div>

                        ))}

                      </div>

                    </div>

                  </div>

                </div>

              ))}

          </div>

        )}

      </section>

      {/* FORMULÁRIO */}
      <section
        id="contato"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <div className="bg-zinc-950 border border-purple-900/30 rounded-3xl p-10 shadow-2xl shadow-purple-900/20">

          <div className="text-center mb-12">

            <h2 className="text-5xl font-black mb-6">
              Solicitar Demonstração
            </h2>

            <p className="text-zinc-400 text-lg">
              Descubra como automatizar sua operação comercial.
            </p>

          </div>

          <form
            onSubmit={(e) => {

              e.preventDefault()

              const nome = e.target.nome.value
              const empresa = e.target.empresa.value
              const telefone = e.target.telefone.value
              const email = e.target.email.value

              const mensagem =
                `Olá Diego! Quero uma demonstração.%0A%0A` +
                `👤 Nome: ${nome}%0A` +
                `🏢 Empresa: ${empresa}%0A` +
                `📞 WhatsApp: ${telefone}%0A` +
                `📧 E-mail: ${email}`

              window.open(
                `https://wa.me/5515920004506?text=${mensagem}`,
                '_blank'
              )

            }}
            className="grid lg:grid-cols-2 gap-5"
          >

            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              required
              className="bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
            />

            <input
              type="text"
              name="empresa"
              placeholder="Nome da empresa"
              required
              className="bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
            />

            <input
              type="text"
              name="telefone"
              placeholder="WhatsApp"
              required
              className="bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              required
              className="bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
            />

            <button
              type="submit"
              className="lg:col-span-2 bg-purple-600 hover:bg-purple-700 transition py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-purple-900/40"
            >
              Solicitar Demonstração
            </button>

          </form>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="border-t border-purple-900/20 py-10">

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