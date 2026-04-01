import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { ArrowRight, CheckCircle2, Lock, Play, Star, AlertCircle } from 'lucide-react';
import { Button, OptionButton, StepWrapper, ProgressBar, Header } from './components/ui';
import { questions } from './data';

export default function App() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [age, setAge] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const totalSteps = 19;

  const nextStep = () => {
    window.scrollTo(0, 0);
    setStep(s => s + 1);
  };

  const handleAnswer = (key: string, value: string) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    setTimeout(nextStep, 300);
  };

  const renderQuestion = (stepNum: number, questionKey: keyof typeof questions, stateKey: string) => {
    const q = questions[questionKey];
    return (
      <StepWrapper key={`step-${stepNum}`}>
        <ProgressBar current={stepNum} total={totalSteps} />
        <Header />
        <div className="p-6 flex flex-col flex-1">
          {q.title && <p className="text-[#E954A2] font-bold text-sm mb-2 uppercase tracking-wider">{q.title}</p>}
          <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">{q.question}</h2>
          {q.context && <p className="text-gray-600 mb-6 text-sm bg-gray-50 p-3 rounded-lg border border-gray-100">{q.context}</p>}
          <p className="text-sm text-gray-400 mb-4">(Selecione uma das opções abaixo)</p>
          <div className="space-y-3 mt-auto mb-8">
            {q.options.map((opt, idx) => (
              <OptionButton key={idx} onClick={() => handleAnswer(stateKey, opt)} selected={answers[stateKey] === opt}>
                {opt}
              </OptionButton>
            ))}
          </div>
        </div>
      </StepWrapper>
    );
  };

  const renderStep = () => {
    if (step === 0) {
      return (
        <StepWrapper key="step-0">
          <ProgressBar current={0} total={totalSteps} />
          <Header />
          <div className="p-6 flex flex-col flex-1">
            <h2 className="text-3xl font-black text-gray-900 leading-tight text-center mb-4 uppercase">
              Aumenta e levanta seu bumbum em apenas <span className="text-[#E954A2]">28 dias</span> e com apenas <span className="text-[#E954A2]">8 minutos</span> por dia
            </h2>
            <p className="text-center text-gray-600 font-medium mb-6 text-lg">Sem precisar de academia ou preenchimento!</p>
            <div className="relative rounded-2xl overflow-hidden mb-8 shadow-lg">
              <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop" alt="Treino" className="w-full h-64 object-cover" referrerPolicy="no-referrer" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur p-3 rounded-xl border-l-4 border-[#E954A2]">
                <p className="font-bold text-sm text-gray-800 flex items-center gap-2"><AlertCircle className="w-4 h-4 text-[#E954A2]" /> Só ativar essa região muscular</p>
              </div>
            </div>
            <div className="mt-auto">
              <p className="text-center text-sm text-gray-500 mb-3 font-medium">Responda ao teste rápido e receba já o seu treino personalizado!</p>
              <Button onClick={nextStep}>COMEÇAR AGORA! <ArrowRight className="w-5 h-5" /></Button>
            </div>
          </div>
        </StepWrapper>
      );
    }

    if (step === 1) {
      return (
        <StepWrapper key="step-1">
          <ProgressBar current={1} total={totalSteps} />
          <Header />
          <div className="p-6 flex flex-col flex-1">
            <h2 className="text-2xl font-black text-gray-900 mb-2 text-center">Conheça o Coach Nunzi</h2>
            <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop" alt="Coach Nunzi" className="w-full h-64 object-cover rounded-2xl mb-6 shadow-md" referrerPolicy="no-referrer" />
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-[#E954A2] shrink-0 mt-1" /><p className="text-gray-700"><strong>12 anos</strong> como educador físico.</p></div>
              <div className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-[#E954A2] shrink-0 mt-1" /><p className="text-gray-700">Mais de <strong>4 milhões</strong> de seguidores.</p></div>
              <div className="flex items-start gap-3"><CheckCircle2 className="w-6 h-6 text-[#E954A2] shrink-0 mt-1" /><p className="text-gray-700"><strong>50.000+ mulheres transformadas</strong> no Brasil e no mundo.</p></div>
            </div>
            <p className="text-gray-600 text-sm mb-8 bg-pink-50 p-4 rounded-xl border border-pink-100">Reconhecido como uma das maiores autoridades em treino feminino focado em glúteos, especializado em ativação, firmeza e projeção do bumbum sem academia.</p>
            <div className="mt-auto"><Button onClick={nextStep}>CONTINUAR <ArrowRight className="w-5 h-5" /></Button></div>
          </div>
        </StepWrapper>
      );
    }

    if (step === 2) return renderQuestion(2, 'q1', 'satisfacao');
    if (step === 3) return renderQuestion(3, 'q2', 'dor');
    if (step === 4) return renderQuestion(4, 'q3', 'autoestima');
    if (step === 5) return renderQuestion(5, 'q4', 'crenca');
    if (step === 6) return renderQuestion(6, 'q5', 'compromisso');

    if (step === 7) {
      return (
        <StepWrapper key="step-7">
          <ProgressBar current={7} total={totalSteps} />
          <Header />
          <div className="p-6 flex flex-col flex-1">
            <h2 className="text-2xl font-black text-gray-900 mb-6 text-center leading-tight">Veja os resultados de quem seguiu esses exercícios em casa</h2>
            <div className="grid grid-cols-2 gap-4 mb-8">
              <img src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=400&auto=format&fit=crop" alt="Resultado 1" className="w-full h-48 object-cover rounded-xl shadow-sm" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop" alt="Resultado 2" className="w-full h-48 object-cover rounded-xl shadow-sm" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=400&auto=format&fit=crop" alt="Resultado 3" className="w-full h-48 object-cover rounded-xl shadow-sm" referrerPolicy="no-referrer" />
              <img src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop" alt="Resultado 4" className="w-full h-48 object-cover rounded-xl shadow-sm" referrerPolicy="no-referrer" />
            </div>
            <div className="mt-auto">
              <p className="text-center font-bold text-gray-800 mb-4">Está pronta para turbinar o seu bumbum também?</p>
              <Button onClick={nextStep}>ESTOU PRONTA! <ArrowRight className="w-5 h-5" /></Button>
            </div>
          </div>
        </StepWrapper>
      );
    }

    if (step === 8) return renderQuestion(8, 'q6', 'tempo');
    if (step === 9) return renderQuestion(9, 'q7', 'frequencia');
    if (step === 10) return renderQuestion(10, 'q8', 'refeicoes');

    if (step === 11) {
      return (
        <StepWrapper key="step-11">
          <ProgressBar current={11} total={totalSteps} />
          <Header />
          <div className="p-6 flex flex-col flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-tight">Qual sua idade?</h2>
            <p className="text-sm text-gray-500 mb-8">Digite sua idade para continuar!</p>
            <input type="number" value={age} onChange={(e) => setAge(e.target.value)} placeholder="Digite sua idade..." className="w-full p-4 text-xl border-2 border-gray-200 rounded-xl focus:border-[#E954A2] focus:ring-2 focus:ring-pink-200 outline-none transition-all text-center mb-8" />
            <div className="mt-auto">
              <Button onClick={() => { if(age) { handleAnswer('idade', age); } else { alert('Por favor, insira sua idade.'); } }} className={!age ? 'opacity-50 cursor-not-allowed' : ''}>
                CONTINUAR <ArrowRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </StepWrapper>
      );
    }

    if (step === 12) {
      return (
        <StepWrapper key="step-12">
          <ProgressBar current={12} total={totalSteps} />
          <Header />
          <div className="p-6 flex flex-col flex-1">
            <h2 className="text-2xl font-black text-gray-900 mb-6 leading-tight">Você sabia disso sobre o bumbum feminino após os 30?</h2>
            <div className="space-y-4 text-gray-700 text-base mb-8">
              <p>Essa informação explica por que tantas mulheres treinam, suam... e mesmo assim não veem o bumbum reagir.</p>
              <p className="font-bold text-lg bg-pink-50 p-3 rounded-lg border-l-4 border-[#E954A2]">95% das mulheres acima dos 30 anos desenvolvem o chamado "bumbum tímido".</p>
              <p>Isso acontece porque, com o passar do tempo, o corpo passa a <strong>desativar o centro do glúteo</strong> e transferir o esforço para lombar, coxa ou quadril.</p>
              <p>O resultado é um treino que cansa — mas não empina, não projeta e não dá forma. A boa notícia é que você está numa idade em que a <strong>ativação do glúteo ainda pode ser completamente reprogramada</strong>.</p>
              <p className="font-bold text-[#E954A2]">Eu chamo de "Truque do bumbum sexy".</p>
            </div>
            <div className="space-y-3 mt-auto">
              <OptionButton onClick={() => handleAnswer('mecanismo', 'Já conhecia')}>Já conhecia essa informação</OptionButton>
              <OptionButton onClick={() => handleAnswer('mecanismo', 'Primeira vez')}>Primeira vez que ouço sobre isso</OptionButton>
            </div>
          </div>
        </StepWrapper>
      );
    }

    if (step === 13) {
      if (isAnalyzing) {
        return (
          <StepWrapper key="step-13-loading">
            <div className="flex-1 flex flex-col items-center justify-center p-6 bg-[#E954A2] text-white">
              <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1, ease: "linear" }} className="mb-6">
                <div className="w-16 h-16 border-4 border-white border-t-transparent rounded-full" />
              </motion.div>
              <h2 className="text-2xl font-bold text-center mb-2">Analisando seu perfil...</h2>
              <p className="text-pink-100 text-center">Cruzando dados com nosso método científico</p>
            </div>
          </StepWrapper>
        );
      }
      return (
        <StepWrapper key="step-13-result">
          <ProgressBar current={13} total={totalSteps} />
          <Header />
          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center justify-center gap-2 text-green-500 mb-4">
              <CheckCircle2 className="w-8 h-8" />
              <h2 className="text-2xl font-black text-gray-900">Análise Concluída!</h2>
            </div>
            <p className="text-gray-700 text-lg mb-8 text-center bg-green-50 p-4 rounded-xl border border-green-100">
              Mulheres na faixa dos <strong>{age || '30'} anos</strong>, apresentam uma predisposição genética favorável para o aumento acelerado do bumbum!
            </p>
            <div className="space-y-6 mb-8">
              <div>
                <div className="flex justify-between text-sm font-bold mb-1"><span className="text-red-500">7 DIAS</span><span className="text-red-500">20%</span></div>
                <div className="w-full bg-gray-200 rounded-full h-3"><motion.div initial={{ width: 0 }} animate={{ width: '20%' }} transition={{ duration: 1 }} className="bg-red-500 h-3 rounded-full" /></div>
                <p className="text-xs text-gray-500 mt-1">Bumbum ficará firme e durinho</p>
              </div>
              <div>
                <div className="flex justify-between text-sm font-bold mb-1"><span className="text-blue-500">21 DIAS</span><span className="text-blue-500">50%</span></div>
                <div className="w-full bg-gray-200 rounded-full h-3"><motion.div initial={{ width: 0 }} animate={{ width: '50%' }} transition={{ duration: 1, delay: 0.5 }} className="bg-blue-500 h-3 rounded-full" /></div>
                <p className="text-xs text-gray-500 mt-1">Rompimento das células de celulite</p>
              </div>
              <div>
                <div className="flex justify-between text-sm font-bold mb-1"><span className="text-green-500">30 DIAS</span><span className="text-green-500">96%</span></div>
                <div className="w-full bg-gray-200 rounded-full h-3"><motion.div initial={{ width: 0 }} animate={{ width: '96%' }} transition={{ duration: 1, delay: 1 }} className="bg-green-500 h-3 rounded-full" /></div>
                <p className="text-xs text-gray-500 mt-1">Bumbum empinado e volumoso</p>
              </div>
            </div>
            <div className="mt-auto">
              <p className="text-center text-sm font-bold text-gray-800 mb-4">Seu resultado foi surpreendente! Toque no botão para continuar 👇</p>
              <Button onClick={nextStep}>CONTINUAR <ArrowRight className="w-5 h-5" /></Button>
            </div>
          </div>
        </StepWrapper>
      );
    }

    if (step === 14) return renderQuestion(14, 'q12', 'fechamento');

    if (step === 15) {
      const goals = [
        { id: 'levantado', label: 'Levantado 🍑', desc: 'Para chamar a atenção à distância', img: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=400&auto=format&fit=crop' },
        { id: 'esculpido', label: 'Esculpido 💪🏽', desc: 'Com curvas marcadas e poderosas', img: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop' },
        { id: 'musculoso', label: 'Musculoso 🔥', desc: 'Definido e poderoso', img: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=400&auto=format&fit=crop' },
        { id: 'redondinho', label: 'Redondinho ✨', desc: 'Com volume e forma perfeita', img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=400&auto=format&fit=crop' },
      ];
      return (
        <StepWrapper key="step-15">
          <ProgressBar current={15} total={totalSteps} />
          <Header />
          <div className="p-6 flex flex-col flex-1">
            <h2 className="text-2xl font-bold text-gray-900 mb-2 leading-tight">Qual destes rabos sonhas em conseguir? 👇</h2>
            <p className="text-sm text-gray-500 mb-6">Escolhe o teu objetivo ideal, usaremos essa informação para criar um plano que funcione mesmo para ti.</p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {goals.map(goal => (
                <button key={goal.id} onClick={() => handleAnswer('objetivo', goal.id)} className={`flex flex-col items-center text-left rounded-xl border-2 overflow-hidden transition-all ${answers.objetivo === goal.id ? 'border-[#E954A2] ring-2 ring-pink-200' : 'border-gray-200 hover:border-pink-300'}`}>
                  <img src={goal.img} alt={goal.label} className="w-full h-32 object-cover" referrerPolicy="no-referrer" />
                  <div className="p-3 w-full bg-white">
                    <p className="font-bold text-gray-900 text-sm">{goal.label}</p>
                    <p className="text-xs text-gray-500 mt-1 leading-tight">{goal.desc}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </StepWrapper>
      );
    }

    if (step === 16) return renderQuestion(16, 'q14', 'obstaculo');
    if (step === 17) return renderQuestion(17, 'q15', 'compromissoFinal');

    if (step === 18) {
      return (
        <StepWrapper key="step-18">
          <ProgressBar current={18} total={totalSteps} />
          <Header />
          <div className="p-6 flex flex-col flex-1">
            <h2 className="text-xl font-bold text-gray-900 mb-1 text-center">Aqui está a análise do seu perfil:</h2>
            <p className="text-center text-[#E954A2] font-bold mb-8">Projeção da sua Evolução após 28 dias do Desafio</p>
            <div className="relative w-full h-64 bg-gray-50 rounded-xl border border-gray-200 p-4 mb-8 flex items-end">
              <div className="absolute left-2 top-4 bottom-8 flex flex-col justify-between text-xs text-gray-400">
                <span>100%</span><span>50%</span><span>0%</span>
              </div>
              <div className="ml-8 w-full h-full relative flex items-end justify-between pb-6">
                <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                  <motion.path initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} d="M 0 90 Q 20 80, 40 60 T 70 30 T 100 10" fill="none" stroke="#E954A2" strokeWidth="3" />
                  <motion.path initial={{ opacity: 0 }} animate={{ opacity: 0.1 }} transition={{ duration: 1.5, delay: 0.5 }} d="M 0 90 Q 20 80, 40 60 T 70 30 T 100 10 L 100 100 L 0 100 Z" fill="#E954A2" />
                </svg>
                <div className="relative z-10 flex flex-col items-center" style={{ height: '10%' }}><div className="w-3 h-3 bg-[#E954A2] rounded-full shadow-md"></div><span className="text-[10px] font-bold text-gray-500 mt-2 absolute -bottom-6 whitespace-nowrap">DIA 1</span></div>
                <div className="relative z-10 flex flex-col items-center" style={{ height: '25%' }}><div className="w-3 h-3 bg-[#E954A2] rounded-full shadow-md"></div><span className="text-[10px] font-bold text-gray-500 mt-2 absolute -bottom-6 whitespace-nowrap">DIA 3</span></div>
                <div className="relative z-10 flex flex-col items-center" style={{ height: '50%' }}><div className="w-3 h-3 bg-[#E954A2] rounded-full shadow-md"></div><span className="text-[10px] font-bold text-gray-500 mt-2 absolute -bottom-6 whitespace-nowrap">DIA 10</span></div>
                <div className="relative z-10 flex flex-col items-center" style={{ height: '75%' }}><div className="w-3 h-3 bg-[#E954A2] rounded-full shadow-md"></div><span className="text-[10px] font-bold text-gray-500 mt-2 absolute -bottom-6 whitespace-nowrap">DIA 17</span></div>
                <div className="relative z-10 flex flex-col items-center" style={{ height: '95%' }}><div className="w-4 h-4 bg-[#00FF00] rounded-full shadow-[0_0_10px_#00FF00] border-2 border-white"></div><span className="text-[10px] font-bold text-[#E954A2] mt-2 absolute -bottom-6 whitespace-nowrap">DIA 28</span></div>
              </div>
            </div>
            <div className="mt-auto">
              <Button onClick={nextStep}>ACESSAR PLANO PERSONALIZADO! <ArrowRight className="w-5 h-5" /></Button>
            </div>
          </div>
        </StepWrapper>
      );
    }

    if (step === 19) {
      return (
        <StepWrapper key="step-19">
          <div className="bg-[#E954A2] text-white p-4 text-center">
            <h1 className="font-black text-xl">DESAFIO BUMBUM SEXY</h1>
          </div>
          <div className="p-6 flex flex-col flex-1 bg-gray-50">
            <div className="bg-green-100 border border-green-200 text-green-800 p-3 rounded-xl flex items-center gap-3 mb-6">
              <CheckCircle2 className="w-6 h-6 shrink-0" />
              <p className="text-sm font-bold">Acesso liberado ao DESAFIO BUMBUM SEXY com SUCESSO! 😍</p>
            </div>
            <h2 className="text-2xl font-black text-gray-900 text-center mb-6 leading-tight">PARABÉNS! Você acaba de desbloquear uma vaga para o Desafio Bumbum Sexy em apenas 8 minutos!</h2>
            <div className="w-full aspect-video bg-black rounded-xl overflow-hidden relative mb-8 shadow-2xl">
              <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop" alt="Video Thumbnail" className="w-full h-full object-cover opacity-60" referrerPolicy="no-referrer" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 bg-[#E954A2] rounded-full flex items-center justify-center cursor-pointer hover:scale-110 transition-transform shadow-[0_0_20px_rgba(233,84,162,0.6)]">
                  <Play className="w-8 h-8 text-white ml-1" fill="currentColor" />
                </div>
              </div>
              <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">ASSISTA AO VÍDEO</div>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 mb-8 text-center">
              <p className="text-gray-500 line-through text-lg mb-1">De R$ 297,00</p>
              <div className="flex items-center justify-center gap-2 mb-2">
                <span className="text-gray-600 font-medium">Por apenas</span>
                <span className="text-4xl font-black text-[#E954A2]">R$ 27,90</span>
              </div>
              <p className="text-sm font-bold text-green-600 bg-green-50 inline-block px-3 py-1 rounded-full mb-6">Menos de R$ 0,97 por dia</p>
              <Button className="bg-[#00FF00] hover:bg-[#00DD00] text-black shadow-[0_4px_20px_rgba(0,255,0,0.4)] animate-pulse">
                QUERO GARANTIR MINHA VAGA <ArrowRight className="w-5 h-5" />
              </Button>
              <div className="flex items-center justify-center gap-2 mt-4 text-xs text-gray-500">
                <Lock className="w-4 h-4" /><span>Pagamento 100% Seguro</span>
              </div>
            </div>
            <div className="mb-8">
              <h3 className="text-center font-bold text-gray-800 mb-4">Elas já garantiram suas vagas:</h3>
              <div className="flex gap-2 overflow-x-auto pb-4 snap-x">
                {[1,2,3].map(i => (
                  <div key={i} className="min-w-[200px] bg-white p-3 rounded-xl shadow border border-gray-100 snap-center">
                    <div className="flex text-yellow-400 mb-2">
                      <Star className="w-4 h-4" fill="currentColor" /><Star className="w-4 h-4" fill="currentColor" /><Star className="w-4 h-4" fill="currentColor" /><Star className="w-4 h-4" fill="currentColor" /><Star className="w-4 h-4" fill="currentColor" />
                    </div>
                    <p className="text-sm text-gray-600 italic">"Melhor investimento que fiz! Em 2 semanas já notei muita diferença."</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </StepWrapper>
      );
    }
    return null;
  };

  useEffect(() => {
    if (step === 13) {
      setIsAnalyzing(true);
      const timer = setTimeout(() => {
        setIsAnalyzing(false);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [step]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <AnimatePresence mode="wait">
        {renderStep()}
      </AnimatePresence>
    </div>
  );
}
