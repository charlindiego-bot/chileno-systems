# App.jsx COMPLETO — V2 PREMIUM FINAL COMPLETO

```jsx
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

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-purple-900/40 pt-40 pb-24">

        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-black to-black" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

          <div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight">
              <span className="text-white">Centralize.</span>
              <br />
              <span className="text-purple-500">Automatize.</span>
              <br />
              <span className="text-white">Venda mais.</span>
            </h1>

            <p className="mt-8 text-lg text-zinc-300 max-w-xl leading-relaxed">
              CRM, Inteligência Artificial e automação comercial para empresas.
            </p>

          </div>

          <div className="relative bg-zinc-950 border border-purple-800/30 rounded-3xl p-8 shadow-2xl shadow-purple-900/30">

            <div className="grid gap-4">

              <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                <div className="text-sm text-zinc-400 mb-2">Leads Hoje</div>
                <div className="text-5xl font-black text-purple-500">+{leadCount}</div>
              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                  <div className="text-sm text-zinc-400 mb-2">Conversões</div>
                  <div className="text-4xl font-bold">{conversionCount}%</div>
                </div>

                <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                  <div className="text-sm text-zinc-400 mb-2">Atendimento IA</div>
                  <div className="text-4xl font-bold text-purple-400">{hoursCount}h</div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* PLANOS */}
      <section id="planos" className="max-w-7xl mx-auto px-6 py-24">

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

              <h3 className="text-3xl font-black mb-4">
                {plan.title}
              </h3>

              <div className="text-5xl font-black mb-6">
                {plan.price}
              </div>

              <p className="mb-8 leading-relaxed text-zinc-200">
                {plan.description}
              </p>

              <div className="space-y-4 mb-10">

                {plan.features.map((feature, i) => (

                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span>{feature}</span>
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

        {/* DETALHES EXPANDIDOS */}
        {expandedPlan && (

          <div className="mt-16">

            {plans
              .filter(plan => plan.id === expandedPlan)
              .map((plan) => (

                <div
                  key={plan.id}
                  className="bg-zinc-950 border border-purple-900/30 rounded-3xl p-10 shadow-2xl shadow-purple-900/20"
                >

                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

                    <div>

                      <div className="text-purple-400 font-semibold mb-2">
                        {plan.title}
                      </div>

                      <h3 className="text-4xl font-black mb-4">
                        {plan.details.subtitle}
                      </h3>

                      <p className="text-zinc-400 text-lg leading-relaxed max-w-4xl">
                        {plan.details.text}
                      </p>

                    </div>

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
                            className="flex items-center gap-4 bg-black/40 border border-zinc-800 rounded-2xl px-5 py-4"
                          >

                            <div className="w-3 h-3 rounded-full bg-purple-500" />

                            <span className="text-zinc-200">
                              {item}
                            </span>

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
                            className="flex items-center gap-4 bg-black/40 border border-zinc-800 rounded-2xl px-5 py-4"
                          >

                            <div className="w-3 h-3 rounded-full bg-green-400" />

                            <span className="text-zinc-200">
                              {item}
                            </span>

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

    </div>
  )
}
```

```
  {/* FORMULÁRIO */}
  <section
    id="contato"
    className="max-w-7xl mx-auto px-6 py-24"
  >

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      <div>

        <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 mb-6">
          🚀 Demonstração estratégica
        </div>

        <h2 className="text-5xl font-black leading-tight mb-8">
          Descubra como sua empresa pode vender mais com IA
        </h2>

        <p className="text-zinc-400 text-lg leading-relaxed mb-10">
          Automatize atendimento, organize leads e transforme seu WhatsApp
          em uma central comercial inteligente.
        </p>

      </div>

      <div className="relative">

        <div className="absolute inset-0 blur-3xl bg-purple-700/20 rounded-full" />

        <div className="relative bg-zinc-950 border border-purple-900/30 rounded-3xl p-8 shadow-2xl shadow-purple-900/30">

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
              className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-purple-500 transition"
            />

            <input
              type="text"
              name="empresa"
              placeholder="Nome da empresa"
              required
              className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-purple-500 transition"
            />

            <input
              type="text"
              name="telefone"
              placeholder="WhatsApp"
              required
              className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-purple-500 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              required
              className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-purple-500 transition"
            />

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 transition py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-purple-900/40"
            >
              Solicitar Demonstração
            </button>

          </form>

        </div>

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
```

)
}

````

# GIT BASH

```bash
# App.jsx COMPLETO — V2 PREMIUM FINAL COMPLETO

```jsx
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

      {/* HERO */}
      <section className="relative overflow-hidden border-b border-purple-900/40 pt-40 pb-24">

        <div className="absolute inset-0 bg-gradient-to-br from-purple-950/40 via-black to-black" />

        <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">

          <div>

            <h1 className="text-5xl lg:text-7xl font-black leading-[0.95] tracking-tight">
              <span className="text-white">Centralize.</span>
              <br />
              <span className="text-purple-500">Automatize.</span>
              <br />
              <span className="text-white">Venda mais.</span>
            </h1>

            <p className="mt-8 text-lg text-zinc-300 max-w-xl leading-relaxed">
              CRM, Inteligência Artificial e automação comercial para empresas.
            </p>

          </div>

          <div className="relative bg-zinc-950 border border-purple-800/30 rounded-3xl p-8 shadow-2xl shadow-purple-900/30">

            <div className="grid gap-4">

              <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                <div className="text-sm text-zinc-400 mb-2">Leads Hoje</div>
                <div className="text-5xl font-black text-purple-500">+{leadCount}</div>
              </div>

              <div className="grid grid-cols-2 gap-4">

                <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                  <div className="text-sm text-zinc-400 mb-2">Conversões</div>
                  <div className="text-4xl font-bold">{conversionCount}%</div>
                </div>

                <div className="bg-zinc-900 rounded-2xl p-5 border border-zinc-800">
                  <div className="text-sm text-zinc-400 mb-2">Atendimento IA</div>
                  <div className="text-4xl font-bold text-purple-400">{hoursCount}h</div>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* PLANOS */}
      <section id="planos" className="max-w-7xl mx-auto px-6 py-24">

        <div className="text-center mb-20">

          <h2 className="text-5xl font-black mb-6">
            Planos inteligentes
          </h2>

          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Escolha a estrutura ideal para sua operação comercial.
          </p>

        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-start">

          {plans.map((plan, index) => (

            <div
              key={index}
              className={`rounded-3xl p-10 border transition duration-300 relative overflow-hidden ${
                plan.popular
                  ? 'bg-purple-600 border-purple-400 shadow-2xl shadow-purple-900/40 scale-105'
                  : 'bg-zinc-950 border-purple-900/30'
              }`}
            >

              <h3 className="text-3xl font-black mb-4">
                {plan.title}
              </h3>

              <div className="text-5xl font-black mb-6">
                {plan.price}
              </div>

              <p className="mb-8 leading-relaxed text-zinc-200">
                {plan.description}
              </p>

              <div className="space-y-4 mb-10">

                {plan.features.map((feature, i) => (

                  <div key={i} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-400" />
                    <span>{feature}</span>
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

        {/* DETALHES EXPANDIDOS */}
        {expandedPlan && (

          <div className="mt-16 lg:col-span-3">

            {plans
              .filter(plan => plan.id === expandedPlan)
              .map((plan) => (

                <div
                  key={plan.id}
                  className="bg-zinc-950 border border-purple-900/30 rounded-3xl p-10 shadow-2xl shadow-purple-900/20"
                >

                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-10">

                    <div>

                      <div className="text-purple-400 font-semibold mb-2">
                        {plan.title}
                      </div>

                      <h3 className="text-4xl font-black mb-4">
                        {plan.details.subtitle}
                      </h3>

                      <p className="text-zinc-400 text-lg leading-relaxed max-w-4xl">
                        {plan.details.text}
                      </p>

                    </div>

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
                            className="flex items-center gap-4 bg-black/40 border border-zinc-800 rounded-2xl px-5 py-4"
                          >

                            <div className="w-3 h-3 rounded-full bg-purple-500" />

                            <span className="text-zinc-200">
                              {item}
                            </span>

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
                            className="flex items-center gap-4 bg-black/40 border border-zinc-800 rounded-2xl px-5 py-4"
                          >

                            <div className="w-3 h-3 rounded-full bg-green-400" />

                            <span className="text-zinc-200">
                              {item}
                            </span>

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

    </div>
  )
}
```

```
  {/* FORMULÁRIO */}
  <section
    id="contato"
    className="max-w-7xl mx-auto px-6 py-24"
  >

    <div className="grid lg:grid-cols-2 gap-12 items-center">

      <div>

        <div className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 mb-6">
          🚀 Demonstração estratégica
        </div>

        <h2 className="text-5xl font-black leading-tight mb-8">
          Descubra como sua empresa pode vender mais com IA
        </h2>

        <p className="text-zinc-400 text-lg leading-relaxed mb-10">
          Automatize atendimento, organize leads e transforme seu WhatsApp
          em uma central comercial inteligente.
        </p>

      </div>

      <div className="relative">

        <div className="absolute inset-0 blur-3xl bg-purple-700/20 rounded-full" />

        <div className="relative bg-zinc-950 border border-purple-900/30 rounded-3xl p-8 shadow-2xl shadow-purple-900/30">

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
              className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-purple-500 transition"
            />

            <input
              type="text"
              name="empresa"
              placeholder="Nome da empresa"
              required
              className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-purple-500 transition"
            />

            <input
              type="text"
              name="telefone"
              placeholder="WhatsApp"
              required
              className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-purple-500 transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              required
              className="w-full bg-black border border-zinc-800 rounded-2xl px-5 py-4 outline-none focus:border-purple-500 transition"
            />

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 transition py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-purple-900/40"
            >
              Solicitar Demonstração
            </button>

          </form>

        </div>

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
```

)
}

````

# GIT BASH

```bash
git add .
git commit -m "V2 Premium corrigida"
git push
````

````
