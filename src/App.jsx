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
  ]

  const [notification, setNotification] = useState(notifications[0])
  const [visible, setVisible] = useState(true)

  const [leadCount, setLeadCount] = useState(0)
  const [conversionCount, setConversionCount] = useState(0)
  const [hoursCount, setHoursCount] = useState(0)

  const [expandedPlan, setExpandedPlan] = useState(null)

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
      id: 'starter',
      title: 'Starter',
      price: 'R$ 197/mês',

      description:
        'Ideal para pequenas empresas organizarem atendimento, leads e vendas.',

      features: [
        'CRM integrado',
        'WhatsApp conectado',
        'Funil comercial',
        'Gestão básica de leads',
      ],

      details: {
        subtitle: 'Plano ideal para começar a organizar o comercial',

        text:
          'Estruture seu atendimento e organize sua operação comercial com CRM integrado.',

        modules: [
          'CRM completo',
          'Pipeline comercial',
          'WhatsApp integrado',
          'Controle de leads',
          'Dashboard comercial',
        ],

        benefits: [
          'Mais organização',
          'Menos perda de leads',
          'Atendimento mais rápido',
        ],
      },
    },

    {
      id: 'business',
      title: 'Business',
      price: 'R$ 497/mês',
      popular: true,

      description:
        'Automação inteligente com foco em crescimento e escalabilidade.',

      features: [
        'CRM + IA',
        'Automação comercial',
        'Multi atendimento',
        'Dashboard completo',
      ],

      details: {
        subtitle: 'Automação inteligente para empresas em crescimento',

        text:
          'Automatize atendimento e escale sua operação com Inteligência Artificial.',

        modules: [
          'CRM avançado',
          'Automação de mensagens',
          'IA integrada',
          'WhatsApp multi usuários',
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

      description:
        'Implantação premium personalizada para empresas de alta performance.',

      features: [
        'IA personalizada',
        'Usuários ilimitados',
        'Treinamento completo',
        'Implantação estratégica',
      ],

      details: {
        subtitle: 'Estrutura premium de alta performance',

        text:
          'Implantação estratégica completa para operações comerciais avançadas.',

        modules: [
          'IA personalizada',
          'Fluxos avançados',
          'Integrações sob medida',
          'Consultoria estratégica',
        ],

        benefits: [
          'Escalabilidade total',
          'Alta performance',
          'Operação profissional',
        ],
      },
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/70 border-b border-purple-900/20">

        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          <img
            src={logo}
            alt="Chileno Systems"
            className="w-72"
          />

          <nav className="hidden lg:flex gap-8 text-zinc-300">

            <a href="#beneficios">
              Benefícios
            </a>

            <a href="#planos">
              Planos
            </a>

            <a href="#contato">
              Contato
            </a>

          </nav>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-purple-600 hover:bg-purple-700 px-5 py-3 rounded-xl font-semibold"
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

        <div className="bg-zinc-950 border border-purple-500/30 rounded-2xl px-5 py-4 shadow-2xl max-w-[320px]">

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

      {/* BOTÃO WHATSAPP */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50"
      >

        <div className="relative w-16 h-16 rounded-full bg-green-500 hover:bg-green-600 transition flex items-center justify-center shadow-2xl text-3xl">
          💬
        </div>

      </a>

      {/* HERO */}
      <section className="pt-40 pb-24 border-b border-purple-900/40">

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

          <div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[0.95]">

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

            <p className="mt-8 text-lg text-zinc-300 max-w-xl">
              CRM, Inteligência Artificial e automação comercial.
            </p>

          </div>

          <div className="bg-zinc-950 border border-purple-800/30 rounded-3xl p-6">

            <div className="grid gap-4">

              <div className="bg-zinc-900 rounded-2xl p-5">

                <div className="text-sm text-zinc-400 mb-2">
                  Leads Hoje
                </div>

                <div className="text-5xl font-black text-purple-500">
                  +{leadCount}
                </div>

              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="bg-zinc-900 rounded-2xl p-5">

                  <div className="text-sm text-zinc-400 mb-2">
                    Conversões
                  </div>

                  <div className="text-4xl font-bold">
                    {conversionCount}%
                  </div>

                </div>

                <div className="bg-zinc-900 rounded-2xl p-5">

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

      {/* PLANOS */}
      <section
        id="planos"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <div className="text-center mb-20">

          <h2 className="text-5xl font-black mb-6">
            Planos inteligentes
          </h2>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">

          {plans.map((plan, index) => (

            <div
              key={index}
              className={`rounded-3xl p-10 border relative overflow-hidden ${
                plan.popular
                  ? 'bg-purple-600 border-purple-400'
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

              <p className="mb-8">
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
                className={`w-full py-4 rounded-2xl font-bold ${
                  plan.popular
                    ? 'bg-white text-black'
                    : 'bg-purple-600'
                }`}
              >

                {expandedPlan === plan.id
                  ? 'Fechar detalhes'
                  : 'Conhecer Plano'}

              </button>

            </div>

          ))}

        </div>

        {/* DETALHES */}
        {expandedPlan && (

          <div className="mt-16">

            {plans
              .filter(plan => plan.id === expandedPlan)
              .map((plan) => (

                <div
                  key={plan.id}
                  className="bg-zinc-950 border border-purple-900/30 rounded-3xl p-10"
                >

                  <h3 className="text-4xl font-black mb-6">
                    {plan.details.subtitle}
                  </h3>

                  <p className="text-zinc-400 text-lg mb-10">
                    {plan.details.text}
                  </p>

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

        <div className="bg-zinc-950 border border-purple-900/30 rounded-3xl p-10">

          <h2 className="text-4xl font-black mb-10">
            Solicitar Demonstração
          </h2>

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
            className="space-y-5"
          >

            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              required
              className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4"
            />

            <input
              type="text"
              name="empresa"
              placeholder="Empresa"
              required
              className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4"
            />

            <input
              type="text"
              name="telefone"
              placeholder="WhatsApp"
              required
              className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4"
            />

            <input
              type="email"
              name="email"
              placeholder="E-mail"
              required
              className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4"
            />

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 py-5 rounded-2xl font-bold"
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
            className="w-52"
          />

          <div className="text-zinc-500 text-sm">
            © 2026 Chileno Systems. Todos os direitos reservados.
          </div>

        </div>

      </footer>

    </div>
  )
}