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

    }, 20000)

    return () => {
      clearTimeout(hideInitial)
      clearInterval(interval)
    }

  }, [])

  /* CONTADORES */
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
          'O plano Starter foi desenvolvido para pequenas empresas que precisam centralizar atendimento, organizar contatos e iniciar uma estrutura comercial profissional.',

        modules: [
          'CRM completo com cadastro de clientes',
          'Pipeline de vendas visual',
          'WhatsApp integrado',
          'Controle de oportunidades',
          'Gestão de tarefas',
          'Dashboard comercial',
        ],

        benefits: [
          'Maior organização',
          'Menos perda de leads',
          'Atendimento mais rápido',
          'Visão completa das negociações',
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
          'O Business entrega uma operação comercial moderna com Inteligência Artificial, automações e centralização total do atendimento.',

        modules: [
          'CRM avançado',
          'WhatsApp multi usuários',
          'Automação de mensagens',
          'Distribuição automática de leads',
          'Atendimento com IA',
          'Funis inteligentes',
          'Relatórios avançados',
        ],

        benefits: [
          'Escalabilidade comercial',
          'Atendimento automatizado',
          'Redução operacional',
          'Mais conversão de vendas',
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
          'O Enterprise é uma implantação estratégica completa para empresas que precisam de automações avançadas, inteligência personalizada e crescimento escalável.',

        modules: [
          'Implantação completa',
          'IA personalizada',
          'Fluxos avançados',
          'Integrações sob medida',
          'Treinamento da equipe',
          'Suporte estratégico',
          'Consultoria comercial',
        ],

        benefits: [
          'Operação profissional',
          'Escalabilidade total',
          'Redução de custos',
          'Aumento de produtividade',
        ],
      },
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white font-sans overflow-hidden">

      {/* NAVBAR */}
      <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-black/70 border-b border-purple-900/20">

        <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

          <img
            src={logo}
            alt="Chileno Systems"
            className="w-72 lg:w-80 drop-shadow-[0_0_25px_rgba(168,85,247,0.35)]"
          />

          <nav className="hidden lg:flex items-center gap-8 text-sm text-zinc-300">

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
      <section className="relative overflow-hidden border-b border-purple-900/40 pt-40">

        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-black to-black" />

        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-3xl" />

        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 py-12 lg:py-20 grid lg:grid-cols-2 gap-10 items-center min-h-screen">

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
              CRM, Inteligência Artificial e automação comercial para empresas
              que querem escalar atendimento e aumentar vendas.
            </p>

          </div>

          <div className="relative flex justify-center">

            <div className="absolute inset-0 blur-3xl bg-purple-700/20 rounded-full" />

            <div className="relative bg-zinc-950 border border-purple-800/30 rounded-3xl p-5 scale-95 shadow-2xl shadow-purple-900/30 w-full max-w-[620px]">

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

      {/* PLANOS PREMIUM */}
      <section
        id="planos"
        className="max-w-7xl mx-auto px-6 py-24"
      >

        <div className="text-center mb-20">

          <h2 className="text-5xl font-black mb-6">
            Planos inteligentes
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Escolha a estrutura ideal para sua operação comercial.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">

          {plans.map((plan, index) => (

            <div
              key={index}
              className={`rounded-3xl p-10 border transition duration-300 relative overflow-hidden ${
                plan.popular
                  ? 'bg-purple-600 border-purple-400 shadow-2xl shadow-purple-900/40 scale-105'
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

                  <div key={i} className="flex items-center gap-3">

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

        {/* EXPANSÃO PREMIUM */}
        {expandedPlan && (

          <div className="mt-14 bg-zinc-950 border border-purple-900/30 rounded-3xl p-10 animate-fadeIn">

            {plans
              .filter(plan => plan.id === expandedPlan)
              .map((plan, index) => (

                <div key={index}>

                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">

                    <div>

                      <div className="text-purple-400 text-sm uppercase tracking-[4px] mb-4">
                        Plano {plan.title}
                      </div>

                      <h3 className="text-5xl font-black mb-4">
                        {plan.details.subtitle}
                      </h3>

                      <p className="text-zinc-400 text-lg max-w-3xl leading-relaxed">
                        {plan.details.text}
                      </p>

                    </div>

                    <a
                      href={whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-purple-600 hover:bg-purple-700 transition px-8 py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-purple-900/30 text-center"
                    >
                      Solicitar Demonstração
                    </a>

                  </div>

                  <div className="grid lg:grid-cols-2 gap-10">

                    <div>

                      <h4 className="text-3xl font-black mb-8">
                        O que está incluso
                      </h4>

                      <div className="space-y-5">

                        {plan.details.modules.map((module, i) => (

                          <div
                            key={i}
                            className="flex items-center gap-4 bg-black border border-zinc-800 rounded-2xl px-5 py-4"
                          >

                            <div className="w-4 h-4 rounded-full bg-purple-500 shadow-lg shadow-purple-500/40" />

                            <span className="text-lg">
                              {module}
                            </span>

                          </div>

                        ))}

                      </div>

                    </div>

                    <div>

                      <h4 className="text-3xl font-black mb-8">
                        Benefícios reais
                      </h4>

                      <div className="space-y-5">

                        {plan.details.benefits.map((benefit, i) => (

                          <div
                            key={i}
                            className="bg-gradient-to-r from-purple-900/30 to-black border border-purple-900/30 rounded-2xl p-6"
                          >

                            <div className="text-xl font-bold mb-2">
                              {benefit}
                            </div>

                            <p className="text-zinc-400">
                              Estrutura pensada para empresas modernas que
                              querem crescimento e escalabilidade.
                            </p>

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