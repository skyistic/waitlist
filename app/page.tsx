import WaitlistForm from "./waitlist-form";

const commitments = [
  "Adversarial glazing applied at ingest",
  "Scraper enforcement at the edge",
  "Verifiable no-training provenance",
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col lg:flex-row">
      <div className="relative h-[40vh] w-full shrink-0 overflow-hidden bg-zinc-200 lg:h-auto lg:min-h-dvh lg:w-1/2 dark:bg-zinc-900">
        <video
          className="absolute inset-0 size-full object-cover"
          src="https://res.cloudinary.com/dkme9rl68/video/upload/v1792890100/scene_8.mp4"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
        />
      </div>

      <div className="flex w-full flex-1 items-center px-7 py-16 sm:px-12 lg:w-1/2 lg:px-16 xl:px-24 bg-white">
        <div className="w-full max-w-md">

          <div className="">
            <img src="/logo.png" alt="Artiss logo" className="h-16 w-auto" />

            <h1 className="mt-2 text-4xl font-bold tracking-tight text-black sm:text-5xl">
              Artiss
            </h1>
          </div>

          <p className="mt-6 text-[17px] leading-7 text-zinc-600 dark:text-zinc-400">
            A marketplace for original work, built so that selling your art
            never means surrendering it. Every upload is protected the moment it
            lands &mdash; adversarial glazing at ingest, scraper enforcement at
            the edge, and provenance tooling we build in-house to keep your
            catalogue out of training sets.
          </p>

          <p className="mt-4 text-[17px] leading-7 text-zinc-600 dark:text-zinc-400">
            You keep the rights, the relationship, and the margin. The models
            get nothing.
          </p>

          <ul className="mt-8 space-y-2.5">
            {commitments.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 text-[15px] text-zinc-500 dark:text-zinc-400"
              >
                <span
                  aria-hidden="true"
                  className="size-1.5 shrink-0 rounded-full bg-zinc-300 dark:bg-zinc-700"
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-12 border-t border-black/[.08] pt-8 dark:border-white/10">
            <p className="mb-4 text-[15px] font-medium text-black">
              Interested? Leave your email.
            </p>
            <WaitlistForm />
          </div>
        </div>
      </div>
    </div>
  );
}
