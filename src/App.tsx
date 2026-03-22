/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Check, Play, ShieldCheck, X, ChevronLeft, ChevronRight, BookOpen, Users, Download, RefreshCw, Zap, Award, Printer, PartyPopper, Heart, Book, Lock, CheckCircle } from "lucide-react";
import { useState, useEffect } from "react";

const testimonials = [
  "https://i.ibb.co/6c1xwp5v/Whats-App-Image-2026-03-22-at-15-39-00-1.jpg",
  "https://i.ibb.co/Kzr4z6vN/Whats-App-Image-2026-03-22-at-15-39-00-2.jpg",
  "https://i.ibb.co/B54Z6RyT/Whats-App-Image-2026-03-22-at-15-39-00-3.jpg",
  "https://i.ibb.co/hR4DKcnj/Whats-App-Image-2026-03-22-at-15-39-00.jpg"
];

export default function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

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
    <div className="min-h-screen font-sans">
      {/* Faixa de Alerta Superior */}
      <div className="bg-blue-royal text-white text-center py-2 text-xs md:text-sm font-bold uppercase tracking-widest">
        Oferta Especial - Por Tempo Limitado!
      </div>

      {/* Hero Section */}
      <section className="pt-12 pb-20 px-4 text-center max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-blue-royal font-bold uppercase text-sm mb-4"
        >
          Acesso Imediato - Via e-Mail
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="text-[26px] md:text-6xl font-black leading-tight mb-6 px-2"
        >
          +500 Atividades Completas para <span className="text-3xl md:text-7xl block mt-2">Reino Kids</span>
        </motion.h1>
        <p className="text-black text-lg mb-8 max-w-2xl mx-auto">
          <span className="font-black text-gray-800 text-xl block mb-2">O melhor material didático cristão</span> para educar e divertir seus pequenos. Ensine a palavra de Deus de forma lúdica e criativa.
        </p>

        {/* Video Principal */}
        <div className="relative max-w-3xl mx-auto mb-12 shadow-2xl rounded-[2rem] overflow-hidden border-8 border-white bg-black aspect-video">
          <iframe 
            className="w-full h-full"
            src="https://www.youtube.com/embed/A4fEPERjo0Q" 
            title="Vídeo de Apresentação"
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen
          ></iframe>
        </div>

        <motion.a 
          href="https://pay.cakto.com.br/ssyyogf_814327"
          animate={{ scale: [1, 1.08, 1], boxShadow: ["0px 0px 0px rgba(22, 163, 74, 0)", "0px 0px 20px rgba(22, 163, 74, 0.5)", "0px 0px 0px rgba(22, 163, 74, 0)"] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="inline-block bg-green-600 hover:bg-green-700 text-white font-black py-5 px-10 rounded-full text-xl md:text-2xl shadow-2xl transition-all uppercase tracking-tight cursor-pointer no-underline"
        >
          QUERO ACESSO AGORA!
        </motion.a>

        {/* Trust Bar */}
        <div className="mt-6 flex flex-wrap justify-center items-center gap-6 text-gray-500 font-bold text-xs md:text-sm uppercase tracking-wider">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-green-500" />
            Compra 100% Segura
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-500" />
            Acesso Imediato
          </div>
          <div className="flex items-center gap-2">
            <Award className="w-5 h-5 text-blue-royal" />
            Garantia 30 Dias
          </div>
        </div>
      </section>

      {/* O Que Você Vai Receber */}
      <section className="py-20 bg-white px-4 relative overflow-hidden">
        {/* Elementos Decorativos Infantis */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-blue-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-yellow-100 rounded-full blur-3xl opacity-50" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-16"
          >
            <BookOpen className="w-10 h-10 text-blue-royal" />
            <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight">
              O Que Você Vai <span className="text-blue-royal">Receber</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { 
                icon: <BookOpen className="w-8 h-8" />, 
                title: "+500 Atividades Completas", 
                desc: "Dinâmicas, jogos, histórias e atividades prontas para aplicar.",
                color: "bg-blue-50 text-blue-royal",
                borderColor: "border-blue-200"
              },
              { 
                icon: <Zap className="w-8 h-8" />, 
                title: "Guia de versiculos", 
                desc: "Um guia prático para memorização e ensino de versículos bíblicos.",
                color: "bg-purple-50 text-purple-600",
                borderColor: "border-purple-200"
              },
              { 
                icon: <Users className="w-8 h-8" />, 
                title: "+ 60 Dinâmicas", 
                desc: "Atividades interativas para envolver as crianças no aprendizado.",
                color: "bg-green-50 text-green-600",
                borderColor: "border-green-200"
              },
              { 
                icon: <Award className="w-8 h-8" />, 
                title: "Bobbie goodies 2026", 
                desc: "Material exclusivo e atualizado para o ano de 2026.",
                color: "bg-yellow-50 text-yellow-600",
                borderColor: "border-yellow-200"
              },
            ].map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`bg-white p-8 rounded-[2.5rem] shadow-2xl shadow-blue-100/50 border-2 ${item.borderColor} flex flex-col items-center text-center group transition-all`}
              >
                <div className={`p-5 rounded-2xl mb-6 transition-transform group-hover:rotate-6 ${item.color}`}>
                  {item.icon}
                </div>
                <h3 className="font-black text-lg mb-3 leading-tight text-gray-800">
                  {item.title}
                </h3>
                <p className="text-black text-sm font-medium leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Seção de Bônus */}
      <section className="bg-blue-royal py-16 text-white px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-black mb-12 uppercase">Bônus Exclusivos Grátis!</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { 
                id: 1, 
                title: "Potinho da Oração", 
                desc: "Esse material vai ajudar seu filho a fazer seu devocional pelas manhãs, juntinho com Jesus.",
                img: "https://i.ibb.co/Wpddm82k/potinnho.jpg" 
              },
              { 
                id: 2, 
                title: "Planejamento Anual", 
                desc: "Material onde você titia e professora vai se organizar o ano inteiro com as atividades.",
                img: "https://i.ibb.co/MDV3ynC4/plane.jpg" 
              },
              { 
                id: 3, 
                title: "Jogos Cristãos", 
                desc: "Os melhores jogos cristãos: Quiz, Uno da fé, Cruzadinhas e outros.",
                img: "https://i.ibb.co/hFcdxhk7/image.jpg" 
              },
            ].map((bonus) => (
              <div key={bonus.id} className="bg-white p-6 rounded-3xl text-gray-800 shadow-xl flex flex-col">
                <img 
                  src={bonus.img} 
                  alt={bonus.title}
                  className="rounded-xl mb-4 w-full aspect-[3/4] object-cover"
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
            href="https://pay.cakto.com.br/ssyyogf_814327"
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
      <section className="py-20 px-4 flex flex-col items-center bg-gray-50 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-black mb-4 uppercase tracking-tight">
            Quem Já Usa, <span className="text-blue-royal">Ama!</span>
          </h2>
          <p className="text-gray-500 font-bold uppercase text-sm tracking-widest">
            Veja o que Mães e Professoras estão vivendo com seus pequenos
          </p>
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
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
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
      <section className="py-12 md:py-20 px-4 max-w-7xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-[26px] md:text-4xl font-black mb-4 flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 leading-tight">
            <div className="flex items-center gap-2">
              <BookOpen className="w-6 h-6 md:w-8 md:h-8 text-black" />
              <span>Por Que Escolher a</span>
            </div>
            <span className="text-orange-500">Reino Kids Infantil?</span>
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-base md:text-lg font-medium px-2">
            Descubra por que professoras, líderes e mães cristãs estão usando este material para ensinar a Palavra de Deus com mais leveza e criatividade.
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
      <section className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-center text-3xl font-black mb-16 uppercase">Escolha o Seu Plano</h2>
        <div className="grid md:grid-cols-2 gap-10">
          {/* PACOTE BÁSICO */}
          <div className="bg-white p-10 rounded-[3rem] border-2 border-gray-100 text-center hover:border-blue-200 transition-all">
            <h3 className="text-2xl font-bold mb-4 uppercase">PACOTE BÁSICO</h3>
            <p className="text-4xl font-black mb-6">R$ 10,00</p>
            <ul className="text-left space-y-4 mb-8 text-gray-500 font-medium">
              <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5" /> Acesso a 100 Atividades</li>
              <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5" /> Formato Digital PDF</li>
              <li className="flex items-center gap-2 text-gray-300"><X className="text-red-500 w-5 h-5" /> Sem Bônus Inclusos</li>
            </ul>
            <a href="https://pay.cakto.com.br/ssyyogf_814327" className="inline-block w-full py-4 border-2 border-blue-royal text-blue-royal font-black rounded-full uppercase hover:bg-blue-royal hover:text-white transition-colors cursor-pointer no-underline">
              Comprar Agora
            </a>
          </div>
          {/* PACOTE COMPLETO */}
          <motion.div 
            whileHover={{ scale: 1.07 }}
            className="bg-white p-10 rounded-[3rem] border-4 border-blue-royal text-center relative shadow-2xl scale-105"
          >
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-blue-royal text-white px-6 py-1 rounded-full font-bold text-sm">MAIS VENDIDO</div>
            <h3 className="text-2xl font-bold mb-4 uppercase">PACOTE COMPLETO</h3>
            <p className="text-5xl font-black text-blue-royal mb-6">R$ 19,90</p>
            <ul className="text-left space-y-4 mb-8 font-bold">
              <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5" /> +500 Atividades Completas</li>
              <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5" /> Todos os 3 Bônus Grátis</li>
              <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5" /> Guia de versiculos</li>
              <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5" /> + 60 Dinâmicas</li>
              <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5" /> Bobbie goodies 2026</li>
              <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5" /> Acesso Vitalício</li>
              <li className="flex items-center gap-2"><Check className="text-green-500 w-5 h-5" /> Suporte Prioritário</li>
            </ul>
            <motion.a 
              href="https://pay.cakto.com.br/ssyyogf_814327"
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
          </motion.div>
        </div>
      </section>

      {/* Sobre a Autora */}
      <section className="py-20 bg-[#FAF9F6] px-4">
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
                    className="w-full h-full rounded-full object-cover"
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
                    Com anos de experiência no ensino bíblico infantil, <span className="font-bold text-gray-900">Ana Cristina</span> dedica sua caminhada a ajudar crianças a crescerem na fé desde cedo.
                  </p>
                  <p>
                    Ao longo do tempo, percebeu a dificuldade que muitas professoras, líderes e mães enfrentam ao preparar aulas envolventes e fundamentadas na Palavra de Deus.
                  </p>
                  <p>
                    Foi a partir dessa necessidade que nasceu a <span className="font-bold text-gray-900">Coleção Bíblica Infantil</span>, reunindo mais de <span className="font-bold text-gray-900">500 atividades bíblicas</span> prontas para imprimir e aplicar com facilidade.
                  </p>
                  <p>
                    Seu propósito é claro: <span className="font-bold text-gray-900 italic">Ensinar a Palavra de Deus de forma leve, criativa e significativa</span>, fortalecendo valores cristãos na vida das crianças.
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
      <section className="py-20 bg-[#F9F7F5] px-4">
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

    </div>
  );
}
