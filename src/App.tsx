/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Check, Play, ShieldCheck, X, ChevronLeft, ChevronRight, BookOpen, Users, Download, RefreshCw, Zap, Award, Printer, PartyPopper, Heart, Book, Lock, CheckCircle, Star, Sparkles } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  "https://i.ibb.co/6c1xwp5v/Whats-App-Image-2026-03-22-at-15-39-00-1.jpg",
  "https://i.ibb.co/Kzr4z6vN/Whats-App-Image-2026-03-22-at-15-39-00-2.jpg",
  "https://i.ibb.co/B54Z6RyT/Whats-App-Image-2026-03-22-at-15-39-00-3.jpg",
  "https://i.ibb.co/hR4DKcnj/Whats-App-Image-2026-03-22-at-15-39-00.jpg"
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showUpsell, setShowUpsell] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <div className="min-h-screen font-sans overflow-x-hidden">
      {/* Hero Section */}
      <section className="pt-8 md:pt-20 pb-16 px-5 max-w-5xl mx-auto text-center flex flex-col items-center">
        {/* Badge superior */}
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-blue-royal font-black uppercase text-xs md:text-sm mb-4 tracking-[0.2em]"
        >
          🚀 Acesso Imediato - Via e-Mail
        </motion.p>

        {/* Headline Principal */}
        <motion.h1 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="text-[28px] md:text-6xl font-black leading-[1.1] mb-6 text-gray-800 max-w-4xl"
        >
          <span className="text-blue-royal text-lg md:text-2xl block mb-2 font-black">REINO KIDS apresenta</span>
          💛 Transforme o momento de oração no instante mais especial do dia do seu filho
        </motion.h1>

        {/* Imagem do Produto (Posicionada abaixo da headline) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-[280px] md:max-w-md mb-6 relative"
        >
          <div className="absolute -inset-4 bg-blue-royal/5 rounded-full blur-2xl -z-10" />
          <div className="rounded-[2rem] overflow-hidden shadow-2xl border-4 md:border-8 border-white bg-white">
            <img 
              src="https://i.ibb.co/NdMj1xwg/Gemini-Generated-Image-6gv15o6gv15o6gv1.png" 
              alt="Potinho da Oração - Reino Kids" 
              className="w-full max-w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          {/* Badge de Oferta (Mobile small, Desktop visible) */}
          <div className="absolute -bottom-4 -right-4 bg-yellow-400 text-gray-900 font-black py-2 px-4 rounded-xl shadow-lg transform rotate-3 text-xs md:text-base">
            OFERTA EXCLUSIVA! 🎁
          </div>
        </motion.div>

        {/* Descrição e CTA */}
        <div className="w-full max-w-2xl flex flex-col items-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-2xl text-gray-600 mb-6 font-medium leading-relaxed"
          >
            Um jeito simples, lindo e educativo de ensinar seu pequeno a falar com Deus todos os dias 🙏
          </motion.p>

          <div className="mb-8 w-full">
            <p className="text-2xl md:text-3xl font-black text-blue-royal mb-4">
              por apenas <span className="text-3xl md:text-4xl text-green-600">R$ 10,00</span>
            </p>
            <motion.a 
              href="#pacotes"
              animate={{ 
                scale: [1, 1.05, 1], 
                boxShadow: ["0px 0px 0px rgba(34, 197, 94, 0)", "0px 0px 30px rgba(34, 197, 94, 0.4)", "0px 0px 0px rgba(34, 197, 94, 0)"] 
              }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              className="inline-block bg-green-500 hover:bg-green-600 text-white font-black py-5 px-8 md:py-6 md:px-14 rounded-full text-lg md:text-2xl shadow-2xl transition-all uppercase tracking-tight cursor-pointer no-underline min-h-[48px] flex items-center justify-center w-[90%] md:w-auto mx-auto"
            >
              QUERO ACESSO AGORA AO POTE 🏺
            </motion.a>
          </div>

          {/* Trust Bar (Compacta para Mobile) */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-gray-400 font-bold text-[10px] md:text-xs uppercase tracking-wider">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              Compra Segura
            </div>
            <div className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-yellow-500" />
              Acesso Imediato
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-4 h-4 text-blue-royal" />
              Garantia 30 Dias
            </div>
          </div>
        </div>
      </section>



      {/* Seção de Bônus */}
      <section className="bg-blue-royal py-16 text-white px-5">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-12 uppercase">Bônus Exclusivos Grátis!</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { 
                id: 1, 
                title: "+100 Dinâmicas Criativas! 🎨", 
                desc: "Este material ajudará você, líder, a elevar o desempenho e o engajamento dos seus alunos em sala de aula. Transforme seu Ministério Kids hoje mesmo!",
                img: "https://i.ibb.co/YBgcpqtC/Gemini-Generated-Image-mqsnwmmqsnwmmqsn.png" 
              },
              { 
                id: 2, 
                title: "Planejamento Anual", 
                desc: "Planejamento estruturado para que você, professora e líder, tenha organização total durante o ano letivo.",
                img: "https://i.ibb.co/MDV3ynC4/plane.jpg" 
              },
              { 
                id: 3, 
                title: "Jogos Cristãos", 
                desc: "Destaque seu ensino com Quiz, Uno da Fé, Cruzadinhas e outros jogos educativos fundamentados na Bíblia.",
                img: "https://i.ibb.co/hFcdxhk7/image.jpg" 
              },
            ].map((bonus) => (
              <div key={bonus.id} className="bg-white p-6 rounded-3xl text-gray-800 shadow-xl flex flex-col">
                <img 
                  src={bonus.img} 
                  alt={bonus.title}
                  className="rounded-xl mb-4 w-full max-w-full aspect-[3/4] object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <h4 className="font-black text-blue-royal uppercase text-sm mb-1">Bônus {bonus.id}</h4>
                <p className="font-black text-lg mb-2 uppercase leading-tight">{bonus.title}</p>
                <p className="text-black text-sm font-medium leading-relaxed">
                  {bonus.desc}
                </p>
              </div>
            ))}
          </div>
          <motion.a 
            href="#pacotes"
            animate={{ scale: [1, 1.05, 1], boxShadow: ["0px 0px 0px rgba(22, 163, 74, 0)", "0px 0px 20px rgba(22, 163, 74, 0.5)", "0px 0px 0px rgba(22, 163, 74, 0)"] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="inline-block bg-green-600 hover:bg-green-700 text-white font-black py-5 px-10 rounded-full text-xl md:text-2xl shadow-xl transition-all uppercase tracking-tight cursor-pointer no-underline"
          >
            QUERO ACESSO AGORA!
          </motion.a>

          {/* Trust Bar (Bonus Section) */}
          <div className="mt-6 flex flex-wrap justify-center items-center gap-6 text-white font-bold text-xs md:text-sm uppercase tracking-wider opacity-80">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-400" />
              Compra 100% Segura
            </div>
            <div className="flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              Acesso Imediato
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-white" />
              Garantia 30 Dias
            </div>
          </div>
        </div>
      </section>

      {/* Depoimento WhatsApp Carousel */}
      <section className="py-20 px-5 flex flex-col items-center bg-gray-50 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-4"
        >
          <h2 className="text-3xl md:text-5xl font-black mb-6 max-w-3xl leading-tight">
            O que dizem as pessoas que já <span className="text-blue-royal">compraram e aprovaram?</span>
          </h2>
          
          <div className="flex justify-center gap-1 mb-8">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 md:w-8 md:h-8 fill-blue-royal text-blue-royal" />
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex -space-x-4">
              <img className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-lg" src="https://i.pravatar.cc/150?u=a" alt="User" referrerPolicy="no-referrer" loading="lazy" />
              <img className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-lg" src="https://i.pravatar.cc/150?u=b" alt="User" referrerPolicy="no-referrer" loading="lazy" />
              <img className="w-12 h-12 rounded-full border-4 border-white object-cover shadow-lg" src="https://i.pravatar.cc/150?u=c" alt="User" referrerPolicy="no-referrer" loading="lazy" />
            </div>
            <p className="text-gray-800 font-bold text-lg">
              +3.000 pessoas já compraram e <span className="text-green-600">aprovaram ✅</span>
            </p>
          </div>
        </motion.div>
        
        <div className="relative w-full max-w-xs md:max-w-sm">
          <div className="relative shadow-2xl rounded-3xl overflow-hidden border-4 border-white bg-white aspect-[9/16]">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={testimonials[currentIndex]}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-contain max-w-full"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </AnimatePresence>
          </div>

          {/* Carousel Controls */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-[-20px] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-blue-royal hover:bg-blue-50 transition-colors z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextTestimonial}
            className="absolute right-[-20px] top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-blue-royal hover:bg-blue-50 transition-colors z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all ${currentIndex === idx ? 'bg-blue-royal w-4' : 'bg-gray-300'}`}
              />
            ))}
          </div>

          {/* New CTA Text */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <p className="text-xl md:text-2xl font-medium text-black italic tracking-tight">
              Muito lindo esses depoimentos, né? <span className="font-black not-italic text-orange-500">O próximo pode ser o seu!</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Por Que Escolher a Reino Kids Infantil ? */}
      <section className="py-12 md:py-20 px-5 max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[26px] md:text-4xl font-black mb-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 leading-tight">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-black" />
              <span>Por Que Escolher a</span>
            </div>
            <span className="text-blue-royal">Reino Kids Infantil?</span>
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-base md:text-lg font-medium px-2">
            Descubra por que professoras, líderes e mães cristãs confiam nesta coleção para transmitir a Palavra de Deus com leveza e criatividade.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
              <Users className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 leading-tight">Ideal para Ministério Infantil</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Atividades pensadas para Escola Dominical, cultos infantis e ensino cristão em casa.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
              <BookOpen className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 leading-tight">Fundamentado na Palavra</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Conteúdo baseado em histórias e princípios bíblicos para fortalecer valores cristãos.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
              <Printer className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 leading-tight">Pronto para Imprimir</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Material organizado e fácil de aplicar, sem precisar preparar nada do zero.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-[2rem] border border-gray-200 shadow-sm hover:shadow-md transition-all hover:-translate-y-1">
            <div className="w-14 h-14 bg-orange-500 rounded-2xl flex items-center justify-center mb-6">
              <PartyPopper className="text-white w-8 h-8" />
            </div>
            <h3 className="text-xl font-bold mb-4 leading-tight">Ensino Leve e Envolvente</h3>
            <p className="text-gray-500 text-sm leading-relaxed font-medium">
              Dinâmicas e atividades que tornam o aprendizado bíblico mais divertido e participativo.
            </p>
          </div>
        </div>
      </section>

      {/* Planos de Preço */}
      <section id="pacotes" className="py-20 px-5 max-w-5xl mx-auto">
        <h2 className="text-center text-3xl font-black mb-16 uppercase">ESCOLHA SEU PACOTE !!</h2>
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* PACOTE BÁSICO */}
          <div className="bg-white p-10 rounded-[3rem] border border-gray-200 text-center opacity-80 transition-all">
            <h3 className="text-2xl font-bold mb-4 uppercase">PACOTE BÁSICO</h3>
            <p className="text-4xl font-black mb-6">R$ 10,00</p>
            <ul className="text-left space-y-4 mb-8 text-gray-500 font-medium">
              <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5" /> Acesso Potinho de Oração</li>
              <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5" /> Formato Digital PDF</li>
              <li className="flex items-center gap-2 text-gray-300"><X className="text-red-500 w-5 h-5" /> Sem Bônus Inclusos</li>
            </ul>
            <button 
              onClick={() => setShowUpsell(true)}
              className="inline-block w-full py-4 border-2 border-gray-400 text-gray-500 font-black rounded-full uppercase hover:bg-gray-400 hover:text-white transition-colors cursor-pointer"
            >
              Comprar Agora
            </button>
          </div>

          {/* PACOTE COMPLETO */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-white p-10 rounded-[3rem] border-4 border-[#FF8C00] text-center relative shadow-2xl z-10"
          >
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FF8C00] text-white px-6 py-1 rounded-full font-bold text-sm shadow-lg">MAIS VENDIDO</div>
            <h3 className="text-2xl font-bold mb-4 uppercase">PACOTE COMPLETO</h3>
            <p className="text-5xl font-black text-blue-royal mb-6">R$ 27,90</p>
            
            <div className="text-left mb-6">
              <h4 className="font-black text-gray-800 uppercase text-sm mb-4 border-b border-gray-100 pb-2">PLANO DO MINISTÉRIO INFANTIL / PLANEJAMENTO ANUAL COMPLETO</h4>
              <ul className="space-y-4 font-bold">
                <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5" /> +500 Atividades Completas</li>
                <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5" /> Todos os 3 Bônus Grátis</li>
                <li className="text-blue-royal text-sm font-black pl-7 leading-tight">
                  Economize +10 horas de planejamento por semana com material pronto para o ano todo.
                </li>
                <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5" /> Guia de Versículos</li>
                <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5" /> + 100 Dinâmicas</li>
                <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5" /> Moldes Lembrancinha de Páscoa</li>
                <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5" /> Potinho da Oração</li>
                <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5" /> Acesso Vitalício</li>
              </ul>
              <p className="text-[10px] text-red-500 font-black mt-4 uppercase tracking-tighter text-center">
                Bônus garantidos apenas para compras nas próximas 12 horas.
              </p>
            </div>

            <motion.a 
              href="#pacotes"
              animate={{ scale: [1, 1.05, 1], boxShadow: ["0px 0px 0px rgba(22, 163, 74, 0)", "0px 0px 20px rgba(22, 163, 74, 0.5)", "0px 0px 0px rgba(22, 163, 74, 0)"] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="inline-block w-full py-5 bg-green-600 hover:bg-green-700 text-white font-black rounded-full uppercase shadow-lg shadow-green-200 transition-all cursor-pointer no-underline"
            >
              QUERO ACESSO AGORA!
            </motion.a>

            {/* Trust Bar (Pricing Section) */}
            <div className="mt-6 flex flex-wrap justify-center items-center gap-4 text-gray-400 font-bold text-[10px] uppercase tracking-wider">
              <div className="flex items-center gap-1">
                <ShieldCheck className="w-4 h-4 text-green-500" />
                Compra 100% Segura
              </div>
              <div className="flex items-center gap-1">
                <Zap className="w-4 h-4 text-yellow-500" />
                Acesso Imediato
              </div>
              <div className="flex items-center gap-1">
                <Award className="w-4 h-4 text-blue-royal" />
                Garantia 30 Dias
              </div>
            </div>
            <p className="mt-4 text-[10px] text-gray-500 font-bold text-center leading-tight">
              ⚠️ Oferta de Páscoa: Últimas unidades com preço promocional e entrega instantânea no seu e-mail
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sobre a Autora */}
      <section className="py-20 bg-[#FAF9F6] px-5">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-10 text-[#F27D26] font-black uppercase tracking-widest text-sm">
            <BookOpen className="w-5 h-5" />
            SOBRE A AUTORA
          </div>
          
          <div className="bg-white rounded-[2rem] shadow-xl shadow-black/5 p-8 md:p-12 relative overflow-hidden border border-[#F27D26]/20">
            <div className="flex flex-col md:flex-row gap-12 items-start relative z-10">
              {/* Foto da Autora */}
              <div className="relative flex-shrink-0 mx-auto md:mx-0">
                <div className="w-48 h-48 rounded-full p-1 border-4 border-[#F27D26] overflow-hidden shadow-2xl">
                  <img 
                    src="https://i.ibb.co/R4Nz5DLK/images.png" 
                    className="w-full max-w-full h-full rounded-full object-cover"
                    alt="Ana Cristina"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-[#F27D26] text-white text-[10px] font-black uppercase px-4 py-1 rounded-full shadow-lg">
                  Autora
                </div>
              </div>

              {/* Conteúdo */}
              <div className="flex-1">
                <h3 className="text-4xl font-black text-gray-900 mb-1">Ana Cristina</h3>
                <p className="text-[#F27D26] font-bold text-lg mb-6">Educadora Cristã e Líder de Ministério Infantil</p>
                
                <div className="space-y-4 text-gray-600 leading-relaxed text-lg">
                  <p>
                    Com vasta experiência no ensino bíblico infantil, <span className="font-bold text-gray-900">Ana Cristina</span> dedica sua vida a auxiliar crianças no crescimento genuíno da fé desde os primeiros anos.
                  </p>
                  <p>
                    Ao longo de sua jornada, compreendeu os desafios que muitas professoras, líderes e mães enfrentam ao preparar aulas que sejam, ao mesmo tempo, envolventes e profundamente fundamentadas na Palavra de Deus.
                  </p>
                  <p>
                    Foi desse desejo de servir que nasceu a <span className="font-bold text-gray-900">Coleção Bíblica Infantil</span>, um acervo com mais de <span className="font-bold text-gray-900">500 atividades bíblicas</span> prontas para imprimir e aplicar com excelência.
                  </p>
                  <p>
                    Seu propósito é inspirador: <span className="font-bold text-gray-900 italic">instruir as novas gerações no caminho de Deus de forma leve, criativa e transformadora</span>, consolidando valores cristãos eternos.
                  </p>
                </div>
              </div>
            </div>

            {/* Divisor */}
            <div className="h-px bg-gray-100 w-full my-12" />

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center p-6 border border-[#F27D26]/10 rounded-3xl bg-[#FAF9F6]/50 transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-[#FFF5F0] rounded-2xl flex items-center justify-center text-[#F27D26] mb-4">
                  <Heart className="w-6 h-6" />
                </div>
                <span className="text-3xl font-black text-gray-900 mb-1">10+</span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Anos Servindo no Ministério Infantil</span>
              </div>

              <div className="flex flex-col items-center text-center p-6 border border-[#F27D26]/10 rounded-3xl bg-[#FAF9F6]/50 transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-[#FFF5F0] rounded-2xl flex items-center justify-center text-[#F27D26] mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <span className="text-3xl font-black text-gray-900 mb-1">Centenas</span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">De Crianças Impactadas</span>
              </div>

              <div className="flex flex-col items-center text-center p-6 border border-[#F27D26]/10 rounded-3xl bg-[#FAF9F6]/50 transition-all hover:shadow-md">
                <div className="w-12 h-12 bg-[#FFF5F0] rounded-2xl flex items-center justify-center text-[#F27D26] mb-4">
                  <Book className="w-6 h-6" />
                </div>
                <span className="text-3xl font-black text-gray-900 mb-1">Bíblia</span>
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Ensino Fundamentado na Palavra</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Garantia (Igual à Imagem) */}
      <section className="py-20 bg-[#F9F7F5] px-5">
        <div className="max-w-3xl mx-auto text-center">
          {/* Ícone de Escudo Superior */}
          <div className="flex justify-center mb-8">
            <div className="w-20 h-20 bg-[#FF6B00] rounded-full flex items-center justify-center shadow-xl shadow-orange-200/50">
              <ShieldCheck className="w-10 h-10 text-white" />
            </div>
          </div>

          {/* Título */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="bg-white p-1 rounded-lg border-2 border-gray-800">
                <ShieldCheck className="w-8 h-8 text-red-600" />
            </div>
            <h2 className="text-3xl md:text-5xl font-black text-gray-800">
              Sua Compra <span className="text-[#FF6B00]">100% Segura</span>
            </h2>
          </div>

          {/* Descrição */}
          <div className="text-gray-500 text-lg md:text-xl mb-12 leading-relaxed font-medium">
            <p className="mb-2">Sua satisfação é garantida! Se por qualquer motivo você não ficar</p>
            <p className="mb-2">satisfeito com o material, tem <span className="font-black text-gray-800">7 dias para pedir seu dinheiro de volta</span>.</p>
            <p className="italic">Risco zero para você!</p>
          </div>

          {/* Botão */}
          <div className="flex justify-center mb-16">
            <motion.a 
              href="https://pay.cakto.com.br/ssyyogf_814327"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex bg-[#FF6B00] hover:bg-[#E66000] text-white font-black py-6 px-12 rounded-full text-xl md:text-2xl shadow-2xl items-center gap-4 uppercase tracking-tight transition-all cursor-pointer no-underline"
            >
              <Lock className="w-7 h-7" />
              Comprar com Segurança
            </motion.a>
          </div>

          {/* Ícones de Rodapé da Seção */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 font-bold text-sm uppercase tracking-widest">
            <div className="flex items-center gap-2">
              <Lock className="w-5 h-5 text-[#FF6B00]" />
              Compra Segura
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-[#FF6B00]" />
              Satisfação Garantida
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-5 h-5 text-[#FF6B00]" />
              Qualidade Premium
            </div>
          </div>
        </div>
      </section>

      {/* Upsell Modal */}
      <AnimatePresence>
        {showUpsell && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-5 bg-black/60 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="bg-white rounded-[2.5rem] p-8 md:p-12 max-w-2xl w-full shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-500" />
              
              <button 
                onClick={() => setShowUpsell(false)}
                className="absolute top-6 right-6 text-gray-400 hover:text-gray-600 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-6">
                  <PartyPopper className="w-8 h-8" />
                </div>
                
                <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-4 leading-tight">
                  Parabéns pelo seu Kit de Páscoa!
                </h2>
                
                <div className="bg-orange-50 border-2 border-orange-200 rounded-2xl p-6 mb-8">
                  <p className="text-orange-800 font-black text-lg md:text-xl mb-2">
                    Mas espere, só para você agora...
                  </p>
                  <p className="text-gray-700 font-medium text-base md:text-lg leading-relaxed">
                    Potencialize seu Ministério com mais de <span className="font-bold text-gray-900">500 atividades exclusivas</span> e o pacote completo por apenas <span className="text-green-600 font-black text-2xl">R$ 17,90</span>
                  </p>
                  <p className="text-gray-400 text-sm mt-2 line-through font-bold">
                    De R$ 27,90 por +R$ 17,90
                  </p>
                </div>

                <div className="flex flex-col gap-4">
                  <a 
                    href="https://pay.cakto.com.br/ssyyogf_814327"
                    className="bg-green-600 hover:bg-green-700 text-white font-black py-5 px-8 rounded-full text-lg md:text-xl shadow-xl shadow-green-200 transition-all uppercase no-underline"
                  >
                    Sim! Quero o Pacote Completo
                  </a>
                  
                  <a 
                    href="https://pay.cakto.com.br/basdj8y"
                    className="text-gray-400 hover:text-gray-600 font-bold text-sm uppercase tracking-widest transition-colors no-underline"
                  >
                    Não, quero apenas o kit básico
                  </a>
                </div>

                <div className="mt-8 flex items-center justify-center gap-4 text-gray-400 text-[10px] font-bold uppercase tracking-widest">
                  <div className="flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4" />
                    Pagamento Seguro
                  </div>
                  <div className="flex items-center gap-1">
                    <Zap className="w-4 h-4" />
                    Acesso Imediato
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
