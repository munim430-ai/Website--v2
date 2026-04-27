export default function Page() {
  return (
    <main className="min-h-screen grid-bg px-6 md:px-12 py-24">
      <nav className="fixed top-0 left-0 right-0 z-50 px-6 md:px-12 py-5 flex items-center justify-between bg-[#050B1E]/80 backdrop-blur-xl border-b border-white/10">
        <a href="#home" className="font-bold tracking-tight">Keystone</a>
        <div className="hidden md:flex gap-7 text-sm text-slate-300">
          <a href="#products">Products</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center">
        <div className="max-w-6xl reveal">
          <p className="text-cyan-300 uppercase tracking-[0.35em] text-xs mb-6">Keystone Software Solutions</p>
          <h1 className="display font-semibold max-w-5xl">Ideas are easy. We build the hard part.</h1>
          <p className="text-slate-300 text-lg md:text-xl mt-8 max-w-2xl leading-relaxed">Premium software, AI products, and business systems for emerging markets.</p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a className="btn btn-primary" href="#contact">Start a Project</a>
            <a className="btn btn-ghost" href="#products">View Products</a>
          </div>
        </div>
      </section>

      <section id="products" className="py-28">
        <p className="text-cyan-300 uppercase tracking-[0.3em] text-xs mb-5">Products</p>
        <h2 className="section-title font-semibold mb-10">Software built for real operations.</h2>
        <div className="grid md:grid-cols-3 gap-5">
          <div className="glass rounded-3xl p-7"><h3 className="text-2xl font-semibold">AI MVPs</h3><p className="text-slate-400 mt-4">Fast prototypes that can become real products.</p></div>
          <div className="glass rounded-3xl p-7"><h3 className="text-2xl font-semibold">Automation</h3><p className="text-slate-400 mt-4">Systems that remove repetitive work.</p></div>
          <div className="glass rounded-3xl p-7"><h3 className="text-2xl font-semibold">Web Apps</h3><p className="text-slate-400 mt-4">Production-ready websites and dashboards.</p></div>
        </div>
      </section>

      <section id="services" className="py-28">
        <p className="text-cyan-300 uppercase tracking-[0.3em] text-xs mb-5">Services</p>
        <h2 className="section-title font-semibold mb-8">From concept to launch.</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <div className="glass rounded-2xl p-5">Strategy to prototype</div>
          <div className="glass rounded-2xl p-5">Full-stack development</div>
          <div className="glass rounded-2xl p-5">Dashboards and tools</div>
          <div className="glass rounded-2xl p-5">Deployment support</div>
        </div>
      </section>

      <section id="contact" className="py-28 border-t border-white/10">
        <p className="text-cyan-300 uppercase tracking-[0.3em] text-xs mb-5">Contact</p>
        <h2 className="section-title font-semibold mb-8">Build what matters.</h2>
        <a className="btn btn-primary" href="mailto:hello@keystone.systems">Email Keystone</a>
      </section>
    </main>
  );
}
