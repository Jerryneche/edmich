import Link from "next/link";

export default function ThanksPage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6 text-center">
      <h1 className="text-5xl md:text-6xl font-semibold mb-6">Thank you!</h1>
      <p className="text-lg md:text-xl text-neutral-400 max-w-xl mb-10">
        We’ve received your request. Our team will reach out to you shortly.
      </p>
      <Link href="/" className="btn btn-primary">
        Back to Home
      </Link>
    </main>
  );
}
