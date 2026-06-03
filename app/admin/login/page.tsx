export const dynamic = "force-dynamic";

export default function AdminLogin({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  const error = searchParams?.error;
  return (
    <main className="min-h-screen flex items-center justify-center px-6"
      style={{
        background:
          "radial-gradient(ellipse at 30% 0%, #fde4c5 0%, transparent 55%), radial-gradient(ellipse at 80% 100%, #f8c8a0 0%, transparent 55%), #fff7ec",
      }}
    >
      <form
        action="/api/admin/login"
        method="POST"
        className="w-full max-w-sm bg-white/80 backdrop-blur rounded-3xl p-8 shadow-xl border border-stone-200"
      >
        <p className="font-script text-2xl text-stone-500 text-center">Lidiya Farewell</p>
        <h1 className="font-serif text-3xl text-stone-800 text-center mb-6">Host Dashboard</h1>

        <label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">
          Enter email for Lidiya
        </label>
        <input
          name="email"
          type="email"
          required
          autoFocus
          autoComplete="email"
          className="w-full rounded-xl border border-stone-300 bg-white px-4 py-3 text-stone-800 focus:outline-none focus:border-amber-500"
        />

        {error && (
          <p className="mt-3 text-sm text-rose-600">This email is not authorized.</p>
        )}

        <button
          type="submit"
          className="mt-5 w-full py-3 rounded-full bg-stone-800 hover:bg-stone-900 text-white font-medium transition"
        >
          Enter
        </button>

        <p className="mt-4 text-xs text-stone-400 text-center">
          Allowed access email is set in <code>ADMIN_EMAIL</code>.
        </p>
      </form>
    </main>
  );
}
