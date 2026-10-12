import SceneHero from "@/components/scene-hero";
import WorkRail from "@/components/work-rail";
import ExperienceRail from "@/components/experience-rail";
import ContactCTA from "@/components/contact-cta";
import FocusStrip from "@/components/focus-strip";

export default function HomePage() {
  return (
    <>
      <SceneHero />
      <WorkRail />
      <FocusStrip />
      <ExperienceRail />
      <ContactCTA />
    </>
  );
}
