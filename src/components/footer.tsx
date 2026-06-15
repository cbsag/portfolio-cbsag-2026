export default function Footer() {
  return (
    <footer className="border-t border-[rgba(var(--line),0.10)] py-10">
      <div className="container flex flex-col gap-2 text-sm text-[rgb(var(--muted))]">
        <div>© {new Date().getFullYear()} Ganesh Chandrasekar</div>
        <div className="text-xs uppercase tracking-[0.18em]">Portfolio for AI systems, software work, and research</div>
      </div>
    </footer>
  );
}
