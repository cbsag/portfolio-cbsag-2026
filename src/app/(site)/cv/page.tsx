import PageIntro from "@/components/page-intro";
import { Panel } from "@/components/ui/panel";
import { site } from "@/lib/site";

export default function CVPage() {
  return (
    <div className="container pt-10">
      <PageIntro
        title="CV"
        desc="View the latest resume in the site, or open the raw PDF if you want the browser's full document viewer."
        actions={
          <>
            <a className="underline underline-offset-4" href={site.links.resumeFile} target="_blank" rel="noreferrer">
              Open PDF
            </a>
            <a className="underline underline-offset-4" href={site.links.resumeFile} download>
              Download PDF
            </a>
          </>
        }
      />

      <div className="mt-8 rounded-2xl border border-[rgba(var(--line),0.10)] bg-[rgba(var(--panel-a),0.18)] px-4 py-3 text-sm leading-relaxed text-zinc-600 dark:bg-[rgba(var(--panel-a),0.04)] dark:text-zinc-300">
        Best on desktop. On smaller screens, open the PDF directly for a cleaner reading view.
      </div>

      <div className="mt-6">
        <div className="mb-5 flex flex-wrap gap-3 text-sm md:hidden">
          <a className="underline underline-offset-4" href={site.links.resumeFile} target="_blank" rel="noreferrer">
            Open PDF
          </a>
          <a className="underline underline-offset-4" href={site.links.resumeFile} download>
            Download PDF
          </a>
        </div>

        <Panel className="panel-tint panel-tint-publication hidden overflow-hidden p-0 md:block">
          <iframe
            title={`${site.name} CV`}
            src={`${site.links.resumeFile}#view=FitH&toolbar=0&navpanes=0`}
            className="h-[calc(100svh-9rem)] min-h-[62rem] w-full bg-white lg:min-h-[72rem]"
          />
        </Panel>

        <Panel className="panel-tint panel-tint-publication p-6 md:hidden">
          <div className="text-sm leading-relaxed text-zinc-700 dark:text-zinc-200">
            Mobile PDF embeds are inconsistent, so this page falls back to direct access on small screens.
          </div>
        </Panel>
      </div>
    </div>
  );
}
