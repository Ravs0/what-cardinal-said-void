import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import WorldStageNav from "@/components/WorldStageNav";

/* ── Reusable article components ── */

const PullQuote = ({ children }: { children: React.ReactNode }) => (
  <div className="my-12 relative pl-6 border-l-2 border-cardinal/40">
    <p className="font-serif text-xl sm:text-2xl text-[hsl(var(--text-primary))] leading-relaxed italic">
      {children}
    </p>
  </div>
);

const SectionLabel = ({ number, label }: { number: string; label: string }) => (
  <div className="flex items-center gap-3 mt-16 mb-6">
    <span className="font-mono text-xs text-cardinal tracking-widest">{number}</span>
    <span className="h-px flex-1 bg-[hsl(var(--divider))]" />
    <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--text-muted))]">{label}</span>
  </div>
);

const KeyPoint = ({ children }: { children: React.ReactNode }) => (
  <div className="my-8 surface rounded-lg p-6 border-l-4 border-cardinal/50">
    <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">{children}</p>
  </div>
);

const SourceRef = ({ children }: { children: React.ReactNode }) => (
  <span className="text-cardinal/70 text-sm italic">{children}</span>
);

const FlowBox = ({ title, children, accent = false }: { title: string; children: React.ReactNode; accent?: boolean }) => (
  <div className={`rounded-lg p-5 ${accent ? "bg-cardinal/5 border border-cardinal/20" : "surface"}`}>
    <h4 className={`font-mono text-[10px] uppercase tracking-[0.2em] mb-2 ${accent ? "text-cardinal" : "text-[hsl(var(--text-muted))]"}`}>{title}</h4>
    <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">{children}</p>
  </div>
);

const FlowArrow = () => (
  <div className="flex justify-center py-2">
    <svg width="20" height="24" viewBox="0 0 20 24" className="text-cardinal/40">
      <path d="M10 0 L10 18 M4 14 L10 20 L16 14" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  </div>
);

/* ── Resolution Timeline ── */

const RESOLUTIONS = [
  { id: "660", date: "2 Aug 1990", title: "Condemns invasion", nature: "condemnation", desc: "Demanded immediate and unconditional withdrawal of Iraqi forces from Kuwait." },
  { id: "661", date: "6 Aug 1990", title: "Comprehensive sanctions", nature: "coercion", desc: "Imposed mandatory economic embargo under Chapter VII — the sharpest sanctions regime of the period." },
  { id: "678", date: "29 Nov 1990", title: "Authorizes force", nature: "force", desc: "Authorized states cooperating with Kuwait to use 'all necessary means' if Iraq did not withdraw by 15 January 1991." },
  { id: "687", date: "3 Apr 1991", title: "Ceasefire architecture", nature: "structure", desc: "Transformed victory into a dense framework: weapons inspections, boundary demarcation, compensation, continuing sanctions." },
  { id: "688", date: "5 Apr 1991", title: "Civilian repression", nature: "stretch", desc: "Condemned repression of Iraqi civilians. Later used to justify no-fly zones — without explicit force authorization." },
  { id: "986", date: "14 Apr 1995", title: "Oil-for-Food", nature: "humanitarian", desc: "Created the humanitarian management mechanism — an admission that the sanctions regime needed supplementation." },
];

const NATURE_COLORS: Record<string, string> = {
  condemnation: "bg-[hsl(var(--text-muted))]/20 text-[hsl(var(--text-secondary))]",
  coercion: "bg-cardinal/10 text-cardinal",
  force: "bg-cardinal/20 text-cardinal",
  structure: "bg-amber-500/10 text-amber-400",
  stretch: "bg-amber-500/10 text-amber-400/80",
  humanitarian: "bg-emerald-500/10 text-emerald-400",
};

const ResolutionTimeline = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="my-10">
      <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-cardinal mb-6">
        Resolution Architecture · 1990–1995
      </h4>
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-[18px] top-2 bottom-2 w-px bg-[hsl(var(--divider))]" />

        <div className="space-y-1">
          {RESOLUTIONS.map((r) => (
            <button
              key={r.id}
              onClick={() => setExpanded(expanded === r.id ? null : r.id)}
              className="relative w-full text-left pl-10 pr-4 py-3 rounded-lg hover:bg-[hsl(var(--surface-raised))] transition-all group"
            >
              {/* Dot */}
              <div className={`absolute left-2.5 top-1/2 -translate-y-1/2 w-[13px] h-[13px] rounded-full border-2 transition-all ${
                expanded === r.id ? "border-cardinal bg-cardinal" : "border-[hsl(var(--text-muted))] bg-[hsl(var(--surface))]"
              }`} />

              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-mono text-[10px] text-[hsl(var(--text-muted))] shrink-0 w-20">{r.date}</span>
                <span className={`font-mono text-[9px] uppercase tracking-[0.15em] px-2 py-0.5 rounded ${NATURE_COLORS[r.nature]}`}>
                  Res. {r.id}
                </span>
                <span className="text-sm text-[hsl(var(--text-primary))] group-hover:text-foreground transition-colors">{r.title}</span>
              </div>

              {expanded === r.id && (
                <p className="mt-3 text-sm text-[hsl(var(--text-secondary))] leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                  {r.desc}
                </p>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── Enforcement Spectrum ── */

const SPECTRUM = [
  { phase: "Aggression Response", label: "660 · 661 · 678", strength: 95, legitimacy: 90 },
  { phase: "Ceasefire Architecture", label: "687 · UNCC", strength: 90, legitimacy: 70 },
  { phase: "Sanctions Regime", label: "661 (prolonged)", strength: 85, legitimacy: 35 },
  { phase: "No-Fly Zones", label: "688 (stretched)", strength: 70, legitimacy: 30 },
  { phase: "Oil-for-Food", label: "986", strength: 50, legitimacy: 45 },
];

const EnforcementSpectrum = () => (
  <div className="my-10 surface rounded-lg p-6">
    <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-cardinal mb-2">
      Enforcement Strength vs. Perceived Legitimacy
    </h4>
    <p className="text-[10px] text-[hsl(var(--text-muted))] mb-6 font-mono tracking-wider uppercase">
      How the Kuwait enforcement model evolved over the decade
    </p>
    <div className="space-y-5">
      {SPECTRUM.map((d) => (
        <div key={d.phase}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-sm text-[hsl(var(--text-primary))]">{d.phase}</span>
            <span className="font-mono text-[9px] text-[hsl(var(--text-muted))]">{d.label}</span>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="relative h-2.5 rounded-full bg-[hsl(var(--divider))] overflow-hidden">
                <div className="absolute inset-y-0 left-0 rounded-full bg-cardinal transition-all duration-500" style={{ width: `${d.strength}%` }} />
              </div>
              <span className="font-mono text-[8px] text-cardinal/60 mt-0.5 block">Strength: {d.strength}%</span>
            </div>
            <div>
              <div className="relative h-2.5 rounded-full bg-[hsl(var(--divider))] overflow-hidden">
                <div className="absolute inset-y-0 left-0 rounded-full bg-emerald-500/70 transition-all duration-500" style={{ width: `${d.legitimacy}%` }} />
              </div>
              <span className="font-mono text-[8px] text-emerald-500/60 mt-0.5 block">Legitimacy: {d.legitimacy}%</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ── Main Article ── */

const ArticleKuwait = () => {
  return (
    <Layout>
      <article className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[hsl(var(--text-muted))] hover:text-cardinal text-sm mt-8 mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span className="font-mono text-[10px] uppercase tracking-[0.15em]">Back to Index</span>
        </Link>

        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="tag-cardinal">The World Stage</span>
            <span className="tag">Part 6</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-[hsl(var(--text-primary))] leading-[1.1] tracking-tight mb-6">
            Kuwait, Sanctions, and the Unipolar Enforcement Model
          </h1>
          <p className="text-lg text-[hsl(var(--text-secondary))] leading-relaxed">
            How the strongest case of collective security became a template for prolonged coercive supervision — and why Iran read it as confirmation that the system worked unevenly
          </p>
        </header>

        {/* ── Body ── */}
        <div className="prose-cardinal">

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            The Iraq-Kuwait crisis occupies a strange place in the legal history of the post-Cold War Middle East. On one reading, it stands as the most persuasive example of the Charter system functioning as its architects intended. Iraq invaded Kuwait on 2 August 1990. The Security Council condemned the invasion in <SourceRef>Resolution 660 (1990)</SourceRef>, imposed mandatory sanctions in <SourceRef>Resolution 661 (1990)</SourceRef>, and in <SourceRef>Resolution 678 (1990)</SourceRef> authorized states cooperating with Kuwait "to use all necessary means" if Iraq did not withdraw by 15 January 1991. Coalition forces followed, and Kuwait was liberated.
          </p>

          <KeyPoint>
            In a series built largely around legal erosion, selective enforcement, and institutional hesitation, that record has to be confronted directly. The Council identified aggression, imposed coercive measures, and backed them with force in a manner that looked, at least in formal terms, unusual for how the UN has worked in the region.
          </KeyPoint>

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            And yet the Iraq-Kuwait episode cannot be reduced to a success story. The reason is not that the initial legal response was insincere or that Iraq's invasion somehow became ambiguous in hindsight. The reason is that the decade that followed changed the meaning of the episode. <SourceRef>Resolution 687 (1991)</SourceRef> transformed the ceasefire into a dense framework of demarcation, weapons inspections, compensation, continuing sanctions, and long-term supervision. <SourceRef>Resolution 688 (1991)</SourceRef> then addressed the repression of Iraqi civilians in language that later became central to coalition arguments surrounding the no-fly zones, even though that resolution did not itself provide the kind of explicit authorization that 678 had supplied for the liberation of Kuwait. <SourceRef>Resolution 986 (1995)</SourceRef> created the Oil-for-Food framework in response to the humanitarian pressure generated by the sanctions regime.
          </p>

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            By the late 1990s, what had begun as an unusually clear case of collective security had become something larger and more contested: a model of overwhelming, prolonged, and increasingly controversial enforcement.
          </p>

          <ResolutionTimeline />

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            The 1980s had already taught Tehran that the international system could hesitate over attribution, move slowly against chemical-weapons use, and fail to stabilize fractured political theatres in ways that favoured networked regional power. Kuwait taught a different lesson. It showed that when the political alignment existed, the Security Council could act with unusual speed, clarity, and force. It also showed that the same system could sustain sanctions, inspection regimes, compensation structures, and later, legally controversial coercive practices over many years.
          </p>

          {/* ── Section 01 ── */}
          <SectionLabel number="01" label="The Clearest Charter Case" />

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            It is worth stating plainly why Kuwait remains so important. Many episodes in the modern Middle East involve competing narratives about initiation, attribution, or the scope of self-defence. Kuwait does not present that difficulty in the same way. Iraq's invasion was open, interstate, and immediate. The Council's legal response in 660, 661, and 678 accordingly had a clarity that later crises often lacked. <SourceRef>The United Nations Blue Book on the Iraq-Kuwait conflict</SourceRef> still reads like a record of the Charter system operating at unusual intensity.
          </p>

          <PullQuote>
            Post 6 cannot be built around the now-familiar claim that international law only appears when it is convenient. The Kuwait episode shows something more difficult and more interesting. International law did appear, and it appeared in a form that many lawyers would recognize as doctrinally strong.
          </PullQuote>

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            The Council condemned aggression, imposed sanctions under Chapter VII, and later authorized force. If a series on the regional order is to remain honest, it has to acknowledge this as one of the strongest recent examples of collective-security enforcement. But a far stronger claim is that this was due to how much interest other powers had in the region. That begs the question, whether such an action would have been allowed or not for the interest. The evidence does not look that positive.
          </p>

          {/* ── Section 02 ── */}
          <SectionLabel number="02" label="Resolution 687 — Victory into Structure" />

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            <SourceRef>Resolution 687 (1991)</SourceRef> is the hinge of the entire episode. It did not merely terminate hostilities but also built an institutional structure. The resolution established the ceasefire terms, demanded the destruction or removal of Iraq's chemical and biological weapons and ballistic missiles beyond specified ranges, created inspection obligations, endorsed the work of the boundary demarcation commission, and maintained sanctions pending Iraqi compliance. It also affirmed that Iraq was liable under international law "for any direct loss, damage, including environmental damage and the depletion of natural resources" resulting from its unlawful invasion and occupation of Kuwait.
          </p>

          <KeyPoint>
            Through the United Nations Compensation Commission, the Council did not merely denounce Iraqi wrongdoing. It helped create the most elaborate war claims and compensation mechanism of the period. Iraq's invasion thus generated not only military defeat, but a dense legal and administrative afterlife.
          </KeyPoint>

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            This is where the meaning of the Kuwait episode changes. In its first phase, the crisis looks like a straightforward vindication of collective security. In its second phase, it begins to resemble a template for structured coercive supervision. The Council did not stop at reversing aggression. It reconfigured the post-war relationship between Iraq and the international system, focusing on inspections, liability, restrictions, and ongoing economic pressure.
          </p>

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            One can defend that move as entirely warranted — Iraq had committed open aggression, it had used chemical weapons in the preceding decade, it had destabilized the Gulf, it had to be contained. That is the strongest version of the case for 687, and it should be taken seriously. But the longer that architecture remained in place, the harder it became to treat it simply as the clean continuation of the original enforcement moment. A war-authorizing resolution aimed at ending aggression gave way to a supervisory regime that touched weapons, trade, public administration, humanitarian distribution, and the basic structure of Iraqi post-war existence.
          </p>

          <EnforcementSpectrum />

          {/* ── Section 03 ── */}
          <SectionLabel number="03" label="Sanctions and the Crisis of Legitimacy" />

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            The sanctions regime marks the point at which the legal clarity of the opening phase gave way to the controversy that would define much of the 1990s. <SourceRef>Resolution 661 (1990)</SourceRef> established a comprehensive economic embargo under Chapter VII. At first, that looked like the normal accompaniment to a campaign of coercion directed at reversing aggression. Over time, however, sanctions stopped functioning merely as a pre-war pressure mechanism and became part of the enduring post-war settlement.
          </p>

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            That is where the humanitarian problem entered. The scholarship on Iraq sanctions remains divided, but it divides along recognizable lines. A powerful critical line, reflected in <SourceRef>Joy Gordon's EJIL article, "A Decade of Sanctions against Iraq: Never Again!"</SourceRef> and <SourceRef>Geoff Simons' The Scourging of Iraq</SourceRef>, argues that Iraq became the paradigmatic case through which comprehensive sanctions lost legitimacy because the civilian cost grew too great. Another line insists that no serious account can ignore Iraqi regime manipulation, distributive control, diversion, and political exploitation of suffering. <SourceRef>Hans von Sponeck's discussion of the humanitarian exception</SourceRef> captures the institutional and humanitarian tension especially well.
          </p>

          <PullQuote>
            The better interpretation does not choose one pole and erase the other. It accepts that the Iraqi regime's conduct complicates any simple attribution of humanitarian suffering to sanctions design alone. It also accepts that Iraq transformed the reputational and legal politics of sanctions because it became impossible to maintain that comprehensive economic coercion remained normatively uncomplicated once prolonged civilian harm entered the centre of the debate.
          </PullQuote>

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            That is why <SourceRef>Resolution 986 (1995)</SourceRef>, which created the Oil-for-Food arrangement, belongs at the core of the analysis rather than as an administrative afterthought. Oil-for-Food did not solve the sanctions controversy. It exposed it. The need for such a mechanism showed that the system had arrived at a point where coercion still continued, but had to be supplemented by an explicit humanitarian management device. The problem was no longer only whether sanctions were lawful. The problem was whether the way they were being maintained remained politically and morally defensible.
          </p>

          <KeyPoint>
            Once the analysis reaches that stage, the phrase "unipolar enforcement model" starts to make sense. The term does not deny the clarity of the original aggression or the legality of the initial Council response. It describes the way in which enforcement outgrew its original posture and became a sustained architecture of supervision, distribution, and coercion.
          </KeyPoint>

          {/* ── Section 04 ── */}
          <SectionLabel number="04" label="Resolution 688 and Legal Stretching" />

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            If sanctions damaged the legitimacy of the post-war order from one direction, the no-fly zones damaged it from another. <SourceRef>Resolution 688 (1991)</SourceRef> condemned Iraqi repression of its civilian population and demanded that Iraq allow immediate access by international humanitarian organizations. It spoke in the language of human distress and regional stability. What it did not do, at least not in terms comparable to 678, was clearly authorize the use of force to establish or maintain the no-fly zones later enforced by coalition powers.
          </p>

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            That distinction is essential. The controversy over the no-fly zones cannot be resolved by simply appealing to the morality of protecting vulnerable populations. Nor can it be erased by retroactively folding the zones into the original authorization for Kuwaiti liberation. The legal basis was weaker and more contested. <SourceRef>Michael Byers and Simon Chesterman's EJIL article, "Changing the Rules about Rules?"</SourceRef> and <SourceRef>Gregory Fox's "Close Encounters of a Sovereign Kind"</SourceRef> remain valuable precisely because they show how the 1990s became a period in which states increasingly stretched existing Council language to justify coercive practices not squarely authorized in the original terms.
          </p>

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            This is the point at which Kuwait stops being only the strongest case of lawful collective enforcement and becomes a bridge to later debates about extra-textual justification, humanitarian necessity, and the erosion of Charter discipline. The sequence matters: 660, 661, and 678 established a rare moment of legal clarity; 687 institutionalized a dense supervisory order; 688 became part of a more contested justificatory landscape. The analysis must keep those phases distinct. If it romanticizes the opening phase, it misses the controversy. If it fixates on later legal stretching, it loses the exceptional clarity of the initial aggression response.
          </p>

          {/* ── Section 05 ── */}
          <SectionLabel number="05" label="Why Iran Noticed" />

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            For Iran, the Kuwait episode produced a different kind of strategic education from the one delivered by the Iran-Iraq War. The 1980s had shown Tehran delay, asymmetry, and weak timely enforcement. Kuwait showed that when the political will of the major powers converged, the Council could move quickly, identify aggression, impose sanctions, authorize force, supervise compliance, and build compensation machinery on a scale almost unimaginable elsewhere in the region.
          </p>

          <PullQuote>
            Iranian distrust of international law does not rest on a simple belief that the system never works. It rests on the belief that the system works unevenly — forcefully and sometimes overwhelmingly where the political alignment exists, and hesitantly where it does not.
          </PullQuote>

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            That contrast matters because Tehran could see that the same legal order that had moved slowly over Iraqi aggression in 1980 could move with extraordinary discipline against Iraq in 1990. At the same time, Kuwait also showed Iran what that discipline could become in extended form. Sanctions, inspections, aerial monitoring, compensation regimes, and the normalization of long-duration coercion formed a toolkit that later Iranian officials would view with deep suspicion. Tehran did not read the Kuwait episode as only a lawful correction of Iraqi aggression. It also read it as the emergence of a model of externally managed order that could be defended through law and still produce prolonged and highly intrusive pressure.
          </p>

          {/* ── Flowchart ── */}
          <div className="my-12 space-y-0">
            <FlowBox title="1980s Lesson">
              Legal clarity and timely enforcement often diverged. Norms existed but protection was delayed or absent.
            </FlowBox>
            <FlowArrow />
            <FlowBox title="Kuwait Phase I — Vindication">
              The Charter system operated at full intensity: condemnation, sanctions, authorized force, compensation.
            </FlowBox>
            <FlowArrow />
            <FlowBox title="Kuwait Phase II — Overreach">
              Enforcement outgrew the original posture. Sanctions persisted, inspections deepened, no-fly zones stretched legal basis.
            </FlowBox>
            <FlowArrow />
            <FlowBox title="Iranian Strategic Inference" accent>
              The system works unevenly. It can be absent or overwhelming. Either way, legal language alone does not tell the whole story.
            </FlowBox>
          </div>

          {/* ── Section 06 ── */}
          <SectionLabel number="06" label="The Double Legacy" />

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            The strongest reading of Iraq-Kuwait is therefore a double one. The first half is not complicated. The episode remains one of the clearest recent vindications of the Charter system against open aggression. The second half is the one that reshapes the region. The sanctions regime, the humanitarian controversy, the inspection model, the compensation machinery, and the later no-fly-zone practice converted a moment of legal clarity into a broader and more controversial enforcement order.
          </p>

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            That is why Kuwait has to be written carefully. It cannot serve as a morality tale about the success of the United Nations, and it cannot serve as a simple story about coercive hypocrisy. It has to be written as both the high point of lawful collective enforcement and one of the beginnings of a unipolar regional order in which legality, coercion, and legitimacy increasingly pulled in different directions.
          </p>

          <KeyPoint>
            For Iran, that was the crucial lesson. The international system could be delayed and selective. It could also be swift and overwhelming. Either way, Tehran learned that legal language alone did not tell the whole story. One had to watch who was being restrained, who was being supervised, who was being punished, and how long the exceptional measures remained in place after the original emergency had formally ended.
          </KeyPoint>

          {/* ── Sources ── */}
          <SectionLabel number="—" label="Sources" />
          <div className="surface rounded-lg p-6 space-y-1.5">
            {[
              "UN Charter, Article 2(4)",
              "UNSC Resolution 660 (1990)",
              "UNSC Resolution 661 (1990)",
              "UNSC Resolution 678 (1990)",
              "UNSC Resolution 687 (1991)",
              "UNSC Resolution 688 (1991)",
              "UNSC Resolution 986 (1995)",
              "United Nations Blue Book: The Iraq-Kuwait Conflict",
              "United Nations Compensation Commission (UNCC) records",
              "Joy Gordon, 'A Decade of Sanctions against Iraq: Never Again!' (EJIL)",
              "Geoff Simons, The Scourging of Iraq",
              "Hans von Sponeck, humanitarian exception discussion",
              "Michael Byers & Simon Chesterman, 'Changing the Rules about Rules?' (EJIL)",
              "Gregory Fox, 'Close Encounters of a Sovereign Kind'",
            ].map((s) => (
              <p key={s} className="text-sm text-[hsl(var(--text-muted))] font-mono leading-relaxed">{s}</p>
            ))}
          </div>
        </div>

        {/* Series navigation */}
        <WorldStageNav currentSlug="kuwait-sanctions-enforcement" />
      </article>
    </Layout>
  );
};

export default ArticleKuwait;
