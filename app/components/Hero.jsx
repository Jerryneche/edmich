
export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[640px] overflow-hidden">
      {/* Cinematic background: use video if present, else image */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          src="/hero1.mp4"
          autoPlay
          muted
          loop
          playsInline
          poster="/success.jpg"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/40 to-black/75" />
        <div className="absolute inset-0 bg-texture" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 md:px-6 h-full flex flex-col justify-end pb-24">
        <div className="max-w-3xl">
          <h1 className="tracking-tight">
            Innovation that feels inevitable.
          </h1>
          <p className="mt-4 text-neutral-300">
            Edmich builds needed connection across mobility and infrastructure — Enabling Access, Creating Fast Frictionless Flow and Movement Evolution
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#solutions" className="btn btn-primary">Explore solutions</a>
            <a href="/autoplux" className="btn btn-outline">Autoplux marketplace</a>
          </div>
        </div>
      </div>
    </section>
  );
}
