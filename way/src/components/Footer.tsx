import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[#30d5c8] text-[#12322f] py-12 mt-10">
      <div className="section-wrap">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/10 pb-10">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="logo-font text-xl md:text-2xl text-[#12322f]">way of life</Link>
            <p className="text-xs mt-4 leading-relaxed opacity-80 uppercase tracking-wider">Studio de Pilates reformer à Yaoundé.</p>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-6 text-[#12322f]">Explorer</h4>
            <ul className="text-xs space-y-3 opacity-80 uppercase tracking-widest">
              <li><Link to="/" className="hover:text-white transition">Accueil</Link></li>
              <li><Link to="/services" className="hover:text-white transition">Planning</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">À propos</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Réserver</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-6 text-[#12322f]">Contact</h4>
            <ul className="text-xs space-y-3 opacity-80 uppercase tracking-widest">
              <li>Coffee&matcha Space</li>
              <li>immeuble ACE bastos</li>
              <li>686153232</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xs uppercase tracking-widest font-semibold mb-6 text-[#12322f]">Suivre</h4>
            <div className="flex gap-4 text-xs uppercase tracking-widest">
              <a href="https://www.instagram.com/wayoflifepilates?igsh=c3plNWQ2Yno2aGNy" target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100 transition">Instagram</a>
              <a href="https://www.tiktok.com/@wayoflife337?_r=1&_d=ehad3m8l6541a7&sec_uid=MS4wLjABAAAAjpdOeCbUXe0CEkrNTCUbOcr0JOoqSS1LETHdF494xai9NTBTPsqc3EatrpEPtvzH&share_author_id=7604076124834219026&sharer_language=en&source=h5_m&u_code=dgd6h6i43de230&item_author_type=2&utm_source=copy&tt_from=copy&enable_checksum=1&utm_medium=ios&share_link_id=A6310553-3FE0-4284-9C15-652CB60320FD&user_id=6915772933369840646&sec_user_id=MS4wLjABAAAAMHHoCHELVGnKza5lVaGe6xYAxevNKVsB0PZVM7yLk6_9qwAaTAqmnjaRoG1gz-iS&social_share_type=5&ug_btm=b2001,b5836&utm_campaign=client_share&share_app_id=1233" target="_blank" rel="noreferrer" className="opacity-80 hover:opacity-100 transition">TikTok</a>
            </div>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase tracking-widest opacity-60">
          <p>© 2024 way of life pilates studio. Tous droits réservés.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Mentions Légales</a>
            <a href="#" className="hover:text-white">Confidentialité</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
