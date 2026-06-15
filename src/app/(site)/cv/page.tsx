import SectionHeader from "@/components/section-header";
import { Panel } from "@/components/ui/panel";
import { site } from "@/lib/site";

export default function CVPage() {
  return (
    <div className="container pt-10">
      <h1 className="text-3xl font-semibold tracking-tight">CV</h1>
      <p className="mt-2 max-w-2xl text-zinc-600 dark:text-zinc-400">
        The latest CV is embedded here, with direct PDF access if you prefer the raw file.
      </p>

      <div className="mt-10">
        <SectionHeader
          eyebrow="Resume"
          title="Current CV"
          desc="View it in the site, open the PDF directly, or download it."
        />

        <div className="mb-6 flex flex-wrap gap-3 text-sm">
          <a className="underline underline-offset-4" href={site.links.resumeFile} target="_blank" rel="noreferrer">
            Open PDF
          </a>
          <a className="underline underline-offset-4" href={site.links.resumeFile} download>
            Download PDF
          </a>
        </div>

        <Panel className="panel-tint panel-tint-publication overflow-hidden p-0">
          <iframe
            title={`${site.name} CV`}
            src={`${site.links.resumeFile}#view=FitH`}
            className="h-[78svh] w-full bg-white"
          />
        </Panel>
      </div>
    </div>
  );
}
