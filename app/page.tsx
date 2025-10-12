/*
import Hero from "./components/Hero";
import Section from "./components/Section";
import FeatureCard from "./components/FeatureCard";
import Button from "./components/Button";

export default function HomePage() {
  return (
    <>
      <Hero />

      <Section
        id="solutions"
        eyebrow="Solutions"
        title="Integrated platforms, one philosophy"
        subtitle="From marketplaces to logistics, our systems prioritize speed, clarity, and trust."
      >
        <div className="grid md:grid-cols-3 gap-6">
          <FeatureCard
            title="Autoplux"
            desc="A curated automobile ecosystem connecting parts, mechanics, and owners."
            icon="🚗"
          />
          <FeatureCard
            title="Commerce engine"
            desc="High-performance checkout, anti-fraud, and vendor tooling."
            icon="🧠"
          />
          <FeatureCard
            title="Connectivity"
            desc="Realtime data, notifications, and service orchestration at scale."
            icon="⚡"
          />
        </div>
        <div className="mt-10">
          <Button href="/autoplux">Enter Autoplux</Button>
        </div>
      </Section>

      <Section
        id="industries"
        eyebrow="Industries"
        title="Designed for real-world complexity"
        subtitle="Automotive, mobility, and infrastructure — with modular workflows you control."
      >
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl overflow-hidden border border-neutral-800">
            <img
              src="/hero.jpg"
              alt="Mobility"
              className="h-64 w-full object-cover"
            />
          </div>
          <div className="rounded-2xl overflow-hidden border border-neutral-800">
            <img
              src="/grid.jpg"
              alt="Infrastructure"
              className="h-64 w-full object-cover"
            />
          </div>
        </div>
      </Section>

      <Section
        id="cta"
        eyebrow="Get started"
        title="Let’s build something inevitable"
        subtitle="Tell us what you’re aiming for. We’ll make it precise, beautiful, and unstoppable."
      >
        <div className="flex flex-wrap gap-4">
          <Button href="#contact">Contact us</Button>
          <Button href="/autoplux" variant="outline">
            Explore Autoplux
          </Button>
        </div>
      </Section>
    </>
  );
}
*/

export default function Home() {
  return (
    <main className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen w-full overflow-hidden">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/hero1.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/success.jpg"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white px-6">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight">
            Innovation that feels inevitable.
          </h1>
          <p className="mt-6 max-w-2xl text-lg md:text-xl text-neutral-300">
            Edmich builds connected experiences across mobility and
            infrastructure — elegant, fast, and human.
          </p>
          <div className="mt-8 flex gap-4">
            <a href="#solutions" className="btn btn-primary">
              Explore solutions
            </a>
            <a href="#autoplux" className="btn btn-outline">
              Autoplux marketplace
            </a>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section
        id="solutions"
        className="py-24 bg-black text-white px-6 md:px-12"
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">
          Integrated platforms, one philosophy
        </h2>
        <p className="text-center max-w-2xl mx-auto text-neutral-400 mb-16">
          From marketplaces to logistics, our systems prioritize speed, clarity,
          and trust.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-8 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition">
            <div className="text-3xl mb-4">🚗</div>
            <h3 className="text-xl font-semibold mb-2">Autoplux</h3>
            <p className="text-neutral-400">
              A curated automobile ecosystem connecting parts, mechanics, and
              owners.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-xl font-semibold mb-2">Commerce Engine</h3>
            <p className="text-neutral-400">
              High-performance checkout, anti-fraud, and vendor tooling.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">Connectivity</h3>
            <p className="text-neutral-400">
              Realtime data, notifications, and service orchestration at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section
        id="industries"
        className="py-24 bg-neutral-950 text-white px-6 md:px-12"
      >
        <h2 className="text-4xl md:text-5xl font-semibold text-center mb-12">
          Designed for real-world complexity
        </h2>
        <p className="text-center max-w-2xl mx-auto text-neutral-400 mb-16">
          Automotive, mobility, and infrastructure — with modular workflows you
          control.
        </p>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="p-8 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition">
            <h3 className="text-xl font-semibold mb-2">Automotive</h3>
            <p className="text-neutral-400">
              From OEMs to aftermarket, we streamline the entire vehicle
              lifecycle.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition">
            <h3 className="text-xl font-semibold mb-2">Mobility</h3>
            <p className="text-neutral-400">
              Ride-sharing, fleet management, and urban mobility solutions at
              scale.
            </p>
          </div>
          <div className="p-8 rounded-xl bg-neutral-900 hover:bg-neutral-800 transition">
            <h3 className="text-xl font-semibold mb-2">Infrastructure</h3>
            <p className="text-neutral-400">
              Smart grids, charging networks, and connected cities built for
              tomorrow.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-black text-center text-white px-6">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6">
          Let’s build something inevitable
        </h2>
        <p className="max-w-xl mx-auto text-neutral-400 mb-10">
          Tell us what you’re aiming for. We’ll make it precise, beautiful, and
          unstoppable.
        </p>
        <a
          href="https://wa.me/2348130578223?text=Hello%20Edmich%2C%20I%27m%20interested%20in%20your%20solutions.%20I%20just%20visited%20your%20site."
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
        >
          Contact us on WhatsApp
        </a>
      </section>
    </main>
  );
}
