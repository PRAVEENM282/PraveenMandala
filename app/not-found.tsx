import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 px-6 text-center">
      <p className="section-label">404</p>
      <h1 className="section-title text-3xl font-semibold sm:text-4xl">Page not found</h1>
      <p className="max-w-md text-sm text-slate-500">
        The page you are looking for has drifted out of orbit. Head back to the homepage to continue
        exploring.
      </p>
      <Link
        href="/"
        className="rounded-full border border-slate-200 px-6 py-2 text-sm text-slate-900 transition hover:border-blue-300 hover:text-blue-600"
      >
        Return home
      </Link>
    </div>
  );
}
