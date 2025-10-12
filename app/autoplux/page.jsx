/*
import Section from "../components/Section";
import FeatureCard from "../components/FeatureCard";
import Button from "../components/Button";

export default function AutopluxPage() {
  return (
    <>
      <section className="relative h-[60vh] overflow-hidden">
        <div className="absolute inset-0">
          <img src="/hero.jpg" alt="Autoplux" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 h-full flex items-end pb-16">
          <div>
            <h1>Autoplux Marketplace</h1>
            <p className="mt-3 text-neutral-300">
              Genuine parts, trusted mechanics, and effortless discovery.
            </p>
          </div>
        </div>
      </section>

      <Section
        id="categories"
        eyebrow="Categories"
        title="Everything you need for your vehicle"
        subtitle="Discover curated inventories and vetted services near you."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard title="Spare parts" desc="OEM & high-quality aftermarket parts." icon="🔩" />
          <FeatureCard title="Mechanics" desc="Certified pros with transparent pricing." icon="🧰" />
          <FeatureCard title="Diagnostics" desc="Modern tools for quick, accurate checks." icon="🛰️" />
        </div>
        <div className="mt-10 flex gap-4">
          <Button href="#sell">Sell with Autoplux</Button>
          <Button href="#partners" variant="outline">Become a partner</Button>
        </div>
      </Section>
    </>
  );
}
*/

export default function AutopluxPage() {
  return (
    <main className="flex flex-col bg-black text-white">
      {/* Hero */}
      <section className="relative h-[90vh] flex items-center justify-center text-center px-6">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/handshake.jpg"
          autoPlay
          muted
          loop
          playsInline
          poster="/mechanic.jpg"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 max-w-3xl">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
            Drive without disruption.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-neutral-300">
            Autoplux connects car owners, mechanics, and dealers in one trusted community.
          </p>
          <div className="mt-8">
          <a
  href="mailto:edmich.com?subject=Join%20Autoplux%20Community&body=Hello%20Edmich%2C%20I%27d%20like%20to%20join%20the%20Autoplux%20community."
  className="btn btn-primary"
>
  Join the community
</a>


          </div>
        </div>
      </section>

      {/* Value Pillars */}
      <section className="py-24 px-6 md:px-12">
        <div className="grid gap-8 md:grid-cols-4 text-center">
          <div className="p-6 bg-neutral-900 rounded-xl">
            <div className="text-3xl mb-4">🔩</div>
            <h3 className="text-xl font-semibold mb-2">Spare Parts</h3>
            <p className="text-neutral-400">OEM & aftermarket parts from verified sellers.</p>
          </div>
          <div className="p-6 bg-neutral-900 rounded-xl">
            <div className="text-3xl mb-4">🧰</div>
            <h3 className="text-xl font-semibold mb-2">Mechanics</h3>
            <p className="text-neutral-400">Certified professionals with transparent pricing.</p>
          </div>
          <div className="p-6 bg-neutral-900 rounded-xl">
            <div className="text-3xl mb-4">🚙</div>
            <h3 className="text-xl font-semibold mb-2">Alternate Cars</h3>
            <p className="text-neutral-400">Stay mobile with temporary logistics support.</p>
          </div>
          <div className="p-6 bg-neutral-900 rounded-xl">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-2">Grow Your Reach</h3>
            <p className="text-neutral-400">Dealers & mechanics expand their audience.</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-neutral-950 px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-5xl font-semibold mb-12">How it works</h2>
        <div className="grid gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-xl font-semibold mb-2">1. Search</h3>
            <p className="text-neutral-400">Find parts, mechanics, or cars instantly.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">2. Connect</h3>
            <p className="text-neutral-400">Verified listings and transparent reviews.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">3. Drive On</h3>
            <p className="text-neutral-400">Get back on the road with confidence.</p>
          </div>
        </div>
      </section>

      {/* Soft Launch CTA */}
      <section id="signup" className="py-32 text-center px-6">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Be part of the first wave.
        </h2>
        <p className="max-w-xl mx-auto text-neutral-400 mb-10">
          Join Autoplux beta and shape the future of mobility.
        </p>
        <form className="flex flex-col md:flex-row justify-center gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-3 rounded-md text-black w-full"
          />
         <a
  href="mailto:edmich.com?subject=Autoplux%20Beta%20Access&body=Hello%20Edmich%2C%20I%27d%20like%20to%20request%20early%20access%20to%20Autoplux."
  className="btn btn-primary"
>
  Request Early Access
</a>

        </form>
      </section>
    </main>
  );
}
