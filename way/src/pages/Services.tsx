import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

export default function Services() {
  useReveal();

  return (
    <main className="section-wrap py-14 space-y-12">
      <section>
        <h1 className="serif text-5xl mb-3">pilates reformer - tarifs</h1>
        <p className="text-[#6c6059] max-w-2xl mb-10">Horaires : <strong>7h30 - 18h30</strong>. Choisissez votre rythme de Pilates hebdomadaire avec des séances adaptées à tous les niveaux.</p>

        <div className="grid md:grid-cols-3 gap-5">
          <article className="bg-white p-6 rounded shadow-sm lift-card reveal">
            <h2 className="serif text-2xl mb-2">pilates au sol fondamentaux</h2>
            <p className="text-sm text-[#6c6059]">Lun / Mer / Ven</p>
            <p className="text-2xl mt-4">08:00 - 09:00</p>
            <p className="text-sm text-[#6c6059] mt-3">Idéal pour les débutants, la correction de la posture et l'endurance du tronc.</p>
          </article>
          <article className="bg-white p-6 rounded shadow-sm lift-card reveal">
            <h2 className="serif text-2xl mb-2">pilates sur reformer</h2>
            <p className="text-sm text-[#6c6059]">Mar / Jeu</p>
            <p className="text-2xl mt-4">18:00 - 19:00</p>
            <p className="text-sm text-[#6c6059] mt-3">Cours sur machine pour sculpter la force et la stabilité.</p>
          </article>
          <article className="bg-white p-6 rounded shadow-sm lift-card reveal">
            <h2 className="serif text-2xl mb-2">pilates équilibre hormonal</h2>
            <p className="text-sm text-[#6c6059]">Samedi</p>
            <p className="text-2xl mt-4">10:00 - 11:15</p>
            <p className="text-sm text-[#6c6059] mt-3">Flux doux et restaurateur soutenant la santé du cycle et du système nerveux.</p>
          </article>
        </div>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <article className="bg-white p-7 rounded shadow-sm lift-card reveal">
          <h2 className="serif text-3xl mb-4">à quoi s'attendre</h2>
          <ul className="space-y-2 text-[#6c6059]">
            <li>Séances de 50 à 60 minutes guidées par des coachs certifiés.</li>
            <li>Petits groupes pour des corrections personnalisées et un mouvement sûr.</li>
            <li>Respiration, mobilité articulaire, activation profonde et retour au calme.</li>
            <li>Options pour débutants, clientes prénatales et récupération post-blessure.</li>
          </ul>
        </article>
        <article className="bg-white p-7 rounded shadow-sm lift-card reveal">
          <h2 className="serif text-3xl mb-4">guide du nouveau membre</h2>
          <ol className="space-y-2 text-[#6c6059] list-decimal list-inside">
            <li>Réservez votre premier cours via le planning.</li>
            <li>Arrivez 15 minutes à l'avance pour l'évaluation de posture.</li>
            <li>Portez des vêtements ajustés et apportez de l'eau.</li>
            <li>Informez votre coach de toute blessure ou symptôme particulier.</li>
          </ol>
        </article>
      </section>

      <section className="bg-white p-7 rounded shadow-sm reveal">
        <h2 className="serif text-3xl mb-4">abonnements et tarifs pilates</h2>
        <div className="grid md:grid-cols-3 gap-4 text-sm">
          <div className="border border-[#e4d7ce] p-4">
            <p className="uppercase tracking-[0.14em] text-xs text-[#6c6059] mb-2">Séance individuelle</p>
            <p className="serif text-4xl">15 000 XAF</p>
            <p className="text-[#6c6059] mt-2">Pass pour une séance reformer.</p>
          </div>
          <div className="border border-[#e4d7ce] p-4">
            <p className="uppercase tracking-[0.14em] text-xs text-[#6c6059] mb-2">Carte 3 séances</p>
            <p className="serif text-4xl">39 000 XAF</p>
            <p className="text-[#6c6059] mt-2">Idéal pour démarrer rapidement.</p>
          </div>
          <div className="border border-[#e4d7ce] p-4">
            <p className="uppercase tracking-[0.14em] text-xs text-[#6c6059] mb-2">Carte 5 séances</p>
            <p className="serif text-4xl">65 000 XAF</p>
            <p className="text-[#6c6059] mt-2">Le format le plus populaire.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-4 mt-4 text-sm">
          <div className="border border-[#e4d7ce] p-4">
            <p className="uppercase tracking-[0.14em] text-xs text-[#6c6059] mb-2">Carte 10 séances</p>
            <p className="serif text-4xl">120 000 XAF</p>
          </div>
          <div className="border border-[#e4d7ce] p-4">
            <p className="uppercase tracking-[0.14em] text-xs text-[#6c6059] mb-2">Adhésion way of life</p>
            <p className="serif text-4xl">5 000 XAF / an</p>
          </div>
        </div>
        <ul className="mt-5 text-[#6c6059] text-sm list-disc list-inside space-y-1">
          <li>L'adhésion donne accès à une expérience plus exclusive.</li>
          <li>Invitations aux événements way of life.</li>
          <li>Accès prioritaire aux réservations.</li>
        </ul>
        <p className="mt-4 text-sm text-[#6c6059]">Réservations WhatsApp : <strong>+237 686 15 32 32</strong></p>
      </section>

      <section className="grid md:grid-cols-2 gap-6">
        <article className="bg-white p-7 rounded shadow-sm lift-card reveal">
          <h2 className="serif text-3xl mb-4">questions fréquentes</h2>
          <div className="space-y-3 text-[#6c6059]">
            <p><strong>Ai-je besoin d'expérience ?</strong><br />Non, nous proposons des cours adaptés aux débutants chaque semaine.</p>
            <p><strong>Puis-je pratiquer pendant la grossesse ?</strong><br />Oui, nos cours prénataux sont adaptés par trimestre.</p>
            <p><strong>Et si j'ai mal au dos ?</strong><br />Prévenez votre coach avant le cours pour des adaptations spécifiques.</p>
          </div>
        </article>
        <article className="bg-[#30d5c8] text-[#12322f] p-7 rounded shadow-sm flex flex-col justify-between lift-card reveal">
          <div>
            <h2 className="serif text-3xl mb-4">prête à commencer ?</h2>
            <p className="text-[#12322f]/85">Rejoignez way of life et construisez un corps plus fort et équilibré grâce au mouvement conscient.</p>
          </div>
          <Link to="/contact" className="inline-block mt-5 border border-[#12322f]/70 px-5 py-2 text-xs uppercase tracking-[0.16em] w-fit">Réserver mon premier cours</Link>
        </article>
      </section>
    </main>
  );
}
