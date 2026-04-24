import { Link } from 'react-router-dom';
import { useReveal } from '../hooks/useReveal';

export default function Home() {
  useReveal();

  return (
    <main className="-mt-[78px]">
      <section className="hero flex items-center justify-center text-center px-4">
        <div className="text-white mt-14">
          <p className="serif text-4xl md:text-5xl leading-tight">Le Pilates pour la Force,</p>
          <p className="serif text-3xl md:text-5xl italic leading-tight">la Mobilité et l'Équilibre Hormonal.</p>
          <Link to="/services" className="inline-block mt-8 border border-white/80 rounded-sm px-7 py-2 text-[11px] tracking-[0.2em] uppercase hover:bg-white hover:text-[#12322f] transition">Découvrir les cours</Link>
        </div>
      </section>

      <section className="section-wrap py-16">
        <div className="grid gap-5 md:grid-cols-3">
          <article className="lift-card reveal">
            <h3 className="serif text-center text-2xl mb-4">pilates au sol</h3>
            <img src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?auto=format&fit=crop&w=700&q=80" alt="Mat pilates class" className="h-44 w-full object-cover rounded" />
            <div className="text-center mt-4">
              <Link to="/services" className="inline-block border border-[#b7aaa0] px-5 py-2 text-[11px] tracking-[0.16em] uppercase rounded-sm hover:bg-white">Voir le Programme</Link>
            </div>
          </article>
          <article className="lift-card reveal">
            <h3 className="serif text-center text-2xl mb-4">reformer</h3>
            <img src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=700&q=80" alt="Pilates reformer" className="h-44 w-full object-cover rounded" />
            <div className="text-center mt-4">
              <Link to="/services" className="inline-block border border-[#b7aaa0] px-5 py-2 text-[11px] tracking-[0.16em] uppercase rounded-sm hover:bg-white">Voir le Programme</Link>
            </div>
          </article>
          <article className="lift-card reveal">
            <h3 className="serif text-center text-2xl mb-4">pilates prénatal</h3>
            <img src="https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=700&q=80" alt="Prenatal pilates session" className="h-44 w-full object-cover rounded" />
            <div className="text-center mt-4">
              <Link to="/services" className="inline-block border border-[#b7aaa0] px-5 py-2 text-[11px] tracking-[0.16em] uppercase rounded-sm hover:bg-white">Voir le Programme</Link>
            </div>
          </article>
        </div>
      </section>

      <section className="section-wrap py-16">
        <div className="bg-white rounded-xl shadow-md overflow-hidden grid md:grid-cols-2 reveal">
          <div className="min-h-[320px] md:min-h-[420px]">
            <img src="/assets/model.jpg" alt="Way of life pilates model" className="w-full h-full object-cover" />
          </div>
          <div className="bg-[#f6f0ea] p-8 md:p-10 flex flex-col justify-center">
            <h2 className="serif text-4xl leading-none mb-4">studio de pilates reformer à yaoundé.</h2>
            <p className="text-sm leading-relaxed text-[#6c6059]">Coffee&amp;matcha Space 686153232, immeuble ACE bastos.</p>
            <p className="text-sm leading-relaxed text-[#6c6059] mt-3">Relax with Pilate - un espace pour respirer, bouger et retrouver l'alignement.</p>
          </div>
        </div>
      </section>

      <section className="section-wrap py-16 text-center">
        <h2 className="uppercase tracking-[0.2em] text-sm text-[#7b7068]">Rejoignez notre</h2>
        <p className="serif text-5xl -mt-1 mb-8 italic">communauté pilates.</p>
        <div className="grid md:grid-cols-3 gap-5">
          <article className="pricing-card bg-[var(--brown)] text-white p-7">
            <p className="serif text-2xl mb-4">pilates à la séance</p>
            <p className="serif text-4xl leading-none mb-6">15 000 XAF</p>
            <Link to="/contact" className="inline-block border border-white/70 px-5 py-2 text-[11px] uppercase tracking-[0.16em]">Réserver</Link>
          </article>
          <article className="pricing-card bg-[var(--rose)] text-white p-7">
            <p className="serif text-2xl mb-4">carte 3 séances</p>
            <p className="serif text-4xl leading-none mb-6">39 000 XAF</p>
            <Link to="/contact" className="inline-block border border-white/70 px-5 py-2 text-[11px] uppercase tracking-[0.16em]">Choisir le pack</Link>
          </article>
          <article className="pricing-card bg-[var(--taupe)] text-white p-7">
            <p className="serif text-2xl mb-4">carte 5 séances</p>
            <p className="serif text-4xl leading-none mb-6">65 000 XAF</p>
            <Link to="/contact" className="inline-block border border-white/70 px-5 py-2 text-[11px] uppercase tracking-[0.16em]">S'inscrire</Link>
          </article>
        </div>
        <div className="bg-white mt-6 p-6 rounded shadow-sm text-left reveal">
          <p className="text-sm text-[#6c6059] mb-2"><strong>Carte 10 séances:</strong> 120 000 XAF</p>
          <p className="text-sm text-[#6c6059] mb-2"><strong>Adhésion way of life:</strong> 5 000 XAF / an</p>
          <p className="text-sm text-[#6c6059]">Réservations WhatsApp: <strong>+237 686 15 32 32</strong> | Horaires: <strong>7h30 - 18h30</strong></p>
        </div>
      </section>

      <section className="relative">
        <div className="h-[290px] bg-cover bg-center" style={{ backgroundImage: "linear-gradient(to right, rgba(45, 25, 14, .2), rgba(45, 25, 14, .25)), url('https://images.unsplash.com/photo-1524863479829-916d8e77f114?auto=format&fit=crop&w=1900&q=80')" }}></div>
        <div className="section-wrap absolute inset-0 flex items-center justify-between text-white px-4">
          <p className="serif text-4xl md:text-5xl leading-none">suivez nos<br /><span className="italic">réseaux pilates.</span></p>
          <div className="flex flex-col gap-3">
            <a href="https://www.instagram.com/wayoflifepilates?igsh=c3plNWQ2Yno2aGNy" target="_blank" rel="noreferrer" className="bg-white/85 text-[#4e3b31] px-6 py-2 text-xs uppercase tracking-[0.16em] rounded-sm text-center">Instagram</a>
            <a href="https://www.tiktok.com/@wayoflife337?_r=1&_d=ehad3m8l6541a7&sec_uid=MS4wLjABAAAAjpdOeCbUXe0CEkrNTCUbOcr0JOoqSS1LETHdF494xai9NTBTPsqc3EatrpEPtvzH&share_author_id=7604076124834219026&sharer_language=en&source=h5_m&u_code=dgd6h6i43de230&item_author_type=2&utm_source=copy&tt_from=copy&enable_checksum=1&utm_medium=ios&share_link_id=A6310553-3FE0-4284-9C15-652CB60320FD&user_id=6915772933369840646&sec_user_id=MS4wLjABAAAAMHHoCHELVGnKza5lVaGe6xYAxevNKVsB0PZVM7yLk6_9qwAaTAqmnjaRoG1gz-iS&social_share_type=5&ug_btm=b2001,b5836&utm_campaign=client_share&share_app_id=1233" target="_blank" rel="noreferrer" className="bg-[#f2d8ca] text-[#4e3b31] px-6 py-2 text-xs uppercase tracking-[0.16em] rounded-sm text-center">TikTok</a>
          </div>
        </div>
      </section>
    </main>
  );
}
