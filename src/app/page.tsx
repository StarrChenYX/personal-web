export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center gap-8 py-32 px-8 bg-white dark:bg-black">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-zinc-900 text-3xl font-bold text-white dark:bg-zinc-100 dark:text-black">
            PW
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Personal Web
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Welcome to my personal website. This is a modern Next.js app with
            TypeScript and Tailwind CSS — ready for development.
          </p>
        </div>
        <div className="flex gap-4">
          <a
            className="flex h-12 items-center justify-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition-colors hover:bg-zinc-700 dark:bg-zinc-100 dark:text-black dark:hover:bg-zinc-300"
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="flex h-12 items-center justify-center rounded-full border border-zinc-200 px-6 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900"
            href="#about"
          >
            About Me
          </a>
        </div>
        <section id="about" className="mt-16 w-full max-w-2xl text-center">
          <h2 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
            About
          </h2>
          <p className="mt-4 text-zinc-600 dark:text-zinc-400">
            This personal website is built with Next.js 16, React 19,
            TypeScript, and Tailwind CSS 4. It&apos;s ready for you to customize
            with your own content, projects, and blog posts.
          </p>
        </section>
      </main>
    </div>
  );
}
