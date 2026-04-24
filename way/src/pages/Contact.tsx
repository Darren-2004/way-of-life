import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

export default function Contact() {
  useReveal();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const submitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappNumber = "237686153232";
    const prefilledMessage = [
      "Bonjour Way of Life,",
      "",
      "Je souhaite reserver un cours de Pilates.",
      "Nom: " + name,
      "Message: " + message,
      "",
      "Merci."
    ].join("\n");
    const whatsappUrl = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(prefilledMessage);
    window.open(whatsappUrl, "_blank");
  };

  return (
    <main className="section-wrap py-14 space-y-10">
      <section>
        <h1 className="serif text-5xl mb-3">contactez way of life</h1>
        <p className="text-[#6c6059] max-w-2xl mb-10">Des questions sur les cours de Pilates reformer ? Réservations directes par WhatsApp et accompagnement personnalisé.</p>
        <div className="grid md:grid-cols-2 gap-7">
          <div className="bg-white p-7 rounded shadow-sm lift-card reveal">
            <h2 className="serif text-3xl mb-5">détails du studio</h2>
            <p className="mb-2">Studio de Pilates reformer à Yaoundé</p>
            <p className="mb-2">Coffee&amp;matcha Space</p>
            <p className="mb-2">immeuble ACE bastos</p>
            <p>Relax with Pilate</p>
            <p className="mt-2 font-medium">WhatsApp: +237 686 15 32 32</p>
            <p className="mt-4 text-sm text-[#6c6059]">Horaires : 7h30 - 18h30</p>
          </div>
          <form id="whatsappForm" onSubmit={submitWhatsApp} className="bg-white p-7 rounded shadow-sm lift-card reveal">
            <h2 className="serif text-3xl mb-5">envoyer un message</h2>
            <input 
              value={name}
              onChange={e => setName(e.target.value)}
              className="w-full border border-[#d4c7be] px-4 py-2 mb-3" 
              type="text" 
              placeholder="Nom complet" 
              required 
            />
            <textarea 
              value={message}
              onChange={e => setMessage(e.target.value)}
              className="w-full border border-[#d4c7be] px-4 py-2 h-28 mb-4" 
              placeholder="Dites-nous quel cours vous intéresse (séance individuelle, carte 3, 5 ou 10)" 
              required
            ></textarea>
            <button type="submit" className="bg-[#30d5c8] text-[#12322f] px-6 py-2 uppercase tracking-[0.14em] text-xs">Réserver via WhatsApp</button>
          </form>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-5">
        <article className="bg-white p-6 rounded shadow-sm lift-card reveal">
          <h3 className="serif text-2xl mb-3">notre accompagnement</h3>
          <p className="text-[#6c6059]">Nous évaluons votre posture et votre mobilité pour recommander le parcours Pilates adapté à vos objectifs.</p>
        </article>
        <article className="bg-white p-6 rounded shadow-sm lift-card reveal">
          <h3 className="serif text-2xl mb-3">séances privées</h3>
          <p className="text-[#6c6059]">Besoin d'un suivi individuel ? Réservez des séances de reformer ou de mat pour une progression accélérée.</p>
        </article>
        <article className="bg-white p-6 rounded shadow-sm lift-card reveal">
          <h3 className="serif text-2xl mb-3">bien-être en entreprise</h3>
          <p className="text-[#6c6059]">Nous proposons des séances axées sur la posture pour les équipes afin de réduire le stress et la fatigue.</p>
        </article>
      </section>

      <section className="bg-white p-7 rounded shadow-sm reveal">
        <h2 className="serif text-3xl mb-4">tarifs officiels</h2>
        <div className="grid md:grid-cols-2 gap-4 text-[#6c6059]">
          <p>Séance individuelle: <strong>15 000 XAF</strong></p>
          <p>Carte 3 séances: <strong>39 000 XAF</strong></p>
          <p>Carte 5 séances: <strong>65 000 XAF</strong></p>
          <p>Carte 10 séances: <strong>120 000 XAF</strong></p>
          <p>Adhésion way of life: <strong>5 000 XAF / an</strong></p>
        </div>
        <ul className="mt-4 text-sm text-[#6c6059] list-disc list-inside space-y-1">
          <li>L'adhésion donne accès à une expérience plus exclusive.</li>
          <li>Invitations aux événements way of life.</li>
          <li>Accès prioritaire aux réservations.</li>
        </ul>
      </section>

      <section className="bg-white p-7 rounded shadow-sm reveal">
        <h2 className="serif text-3xl mb-4">visitez way of life</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-[#6c6059]">
            <p className="mb-3">Studio de Pilates reformer à Yaoundé - Coffee&amp;matcha Space, immeuble ACE bastos.</p>
            <p className="mb-3">Parking disponible à proximité. Veuillez arriver 10 à 15 minutes avant votre première séance.</p>
            <Link to="/services" className="inline-block mt-2 border border-[#b7aaa0] px-5 py-2 text-[11px] tracking-[0.16em] uppercase rounded-sm hover:bg-[#f8f4f0]">Voir le planning des cours</Link>
          </div>
          <div className="h-56 rounded bg-[#e9dfd7] flex items-center justify-center text-[#6c6059] text-sm">
            APERÇU DE LA CARTE - QUARTIER DU BIEN-ÊTRE, YAOUNDÉ
          </div>
        </div>
      </section>
    </main>
  );
}
