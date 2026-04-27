export default function Footer() {
  return (
    <footer className="bg-charcoal-900 text-stone-500 font-mono text-sm py-8 px-6 text-center">
      <p>
        Designed &amp; built by{" "}
        <span className="text-amber-500 font-semibold">Hayden</span> -
        "Just an ordinary learner - you can do this too."
      </p>
      <p className="mt-1 text-xs text-stone-600">
        © {new Date().getFullYear()} All rights reserved.
      </p>
    </footer>
  );
}
