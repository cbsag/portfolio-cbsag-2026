import Nav from "@/components/nav";
import Footer from "@/components/footer";
import ScrollProgress from "@/components/scroll-progress";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Nav />
      <main className="pb-24">{children}</main>
      <Footer />
    </div>
  );
}
