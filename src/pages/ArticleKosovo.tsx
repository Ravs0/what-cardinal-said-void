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

/* ── Argumentative Sequence Diagram ── */

const SEQUENCE_STEPS = [
  { label: "Council Engagement", desc: "Security Council recognizes the crisis as a threat to international peace and security under Chapter VII.", icon: "🏛️" },
  { label: "Diplomatic Exhaustion", desc: "Negotiation, verification, and diplomatic channels are pursued and declared failed.", icon: "🤝" },
  { label: "Anticipated Veto", desc: "One or more permanent members signal they will block authorization of force.", icon: "🚫" },
  { label: "Humanitarian Urgency", desc: "The coalition frames inaction as the more irresponsible choice, shifting the burden.", icon: "⚠️" },
  { label: "Unauthorized Force", desc: "Military action proceeds without explicit Security Council authorization.", icon: "⚔️" },
  { label: "Post-Hoc Stabilization", desc: "The Council re-enters to regularize the aftermath, narrowing the appearance of rupture.", icon: "📜" },
];

const ArgumentSequence = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="my-10">
      <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-cardinal mb-2">
        The Kosovo Argumentative Template
      </h4>
      <p className="text-[10px] text-[hsl(var(--text-muted))] mb-6 font-mono tracking-wider uppercase">
        The repeatable sequence that made later interventions easier to mount
      </p>
      <div className="relative">
        {/* Vertical connector */}
        <div className="absolute left-6 top-6 bottom-6 w-px bg-[hsl(var(--divider))]" />

        <div className="space-y-1">
          {SEQUENCE_STEPS.map((step, i) => (
            <button
              key={step.label}
              onClick={() => setActiveStep(activeStep === i ? null : i)}
              className="relative w-full text-left pl-14 pr-4 py-3.5 rounded-lg hover:bg-[hsl(var(--surface-raised))] transition-all group"
            >
              {/* Step marker */}
              <div className={`absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full flex items-center justify-center text-sm transition-all ${
                activeStep === i
                  ? "bg-cardinal/20 ring-2 ring-cardinal/40"
                  : "bg-[hsl(var(--surface-raised))]"
              }`}>
                {step.icon}
              </div>

              <div className="flex items-center gap-3">
                <span className="font-mono text-[9px] text-[hsl(var(--text-muted))] w-4">{String(i + 1).padStart(2, "0")}</span>
                <span className={`text-sm transition-colors ${
                  activeStep === i ? "text-cardinal" : "text-[hsl(var(--text-primary))] group-hover:text-foreground"
                }`}>
                  {step.label}
                </span>
              </div>

              {activeStep === i && (
                <p className="mt-2 ml-7 text-sm text-[hsl(var(--text-secondary))] leading-relaxed animate-in fade-in slide-in-from-top-1 duration-200">
                  {step.desc}
                </p>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

/* ── Legal Basis Comparison ── */

const LEGAL_BASES = [
  { basis: "Self-Defence (Art. 51)", applicable: false, reason: "No NATO member alleged an armed attack by Yugoslavia." },
  { basis: "Explicit SC Authorization", applicable: false, reason: "Council never used 'all necessary means' language as in Res. 678." },
  { basis: "Cumulative Authority", applicable: false, reason: "Escalating concern ≠ permission. Replaces authorization with inference." },
  { basis: "Humanitarian Intervention", applicable: false, reason: "No established rule in positive law. Sympathetic scholars declined to assert it as doctrine." },
];

const LegalBasisTable = () => (
  <div className="my-10 surface rounded-lg overflow-hidden">
    <div className="px-6 pt-5 pb-3">
      <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-cardinal mb-1">
        Legal Basis Assessment
      </h4>
      <p className="text-[10px] text-[hsl(var(--text-muted))] font-mono tracking-wider uppercase">
        Every available justification — and why each fell short
      </p>
    </div>
    <div className="divide-y divide-[hsl(var(--divider))]">
      {LEGAL_BASES.map((b) => (
        <div key={b.basis} className="px-6 py-4 flex items-start gap-4">
          <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${
            b.applicable ? "bg-emerald-500/20 text-emerald-400" : "bg-cardinal/10 text-cardinal"
          }`}>
            <span className="text-xs">{b.applicable ? "✓" : "✗"}</span>
          </div>
          <div>
            <p className="text-sm text-[hsl(var(--text-primary))] font-medium">{b.basis}</p>
            <p className="text-xs text-[hsl(var(--text-muted))] mt-0.5 leading-relaxed">{b.reason}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ── Legality vs Legitimacy Tension ── */

const TensionDiagram = () => (
  <div className="my-12 surface rounded-lg p-6">
    <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-cardinal mb-6">
      The "Illegal but Legitimate" Paradox
    </h4>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="rounded-lg border border-cardinal/30 bg-cardinal/5 p-5">
        <h5 className="font-mono text-[9px] uppercase tracking-[0.2em] text-cardinal mb-3">Legality</h5>
        <ul className="space-y-2 text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
          <li>• No self-defence basis</li>
          <li>• No explicit SC authorization</li>
          <li>• Charter breach acknowledged</li>
          <li>• No customary law rule established</li>
        </ul>
      </div>
      <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/5 p-5">
        <h5 className="font-mono text-[9px] uppercase tracking-[0.2em] text-emerald-400 mb-3">Legitimacy</h5>
        <ul className="space-y-2 text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
          <li>• Council already recognized crisis</li>
          <li>• Diplomacy exhausted (Rambouillet)</li>
          <li>• Humanitarian catastrophe imminent</li>
          <li>• Veto foreclosed authorization</li>
        </ul>
      </div>
    </div>
    <div className="mt-5 rounded-lg bg-amber-500/5 border border-amber-500/20 p-4">
      <p className="text-xs text-amber-400/90 font-mono tracking-wider uppercase mb-1">The consequence</p>
      <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">
        Once legality and legitimacy are publicly separated, the crucial question is no longer whether a grave crisis exists — but whether the actor invoking the exception has the political weight to make the legitimacy claim stick.
      </p>
    </div>
  </div>
);

/* ── Main Article ── */

const ArticleKosovo = () => {
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
            <span className="tag">Part 7</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-[hsl(var(--text-primary))] leading-[1.1] tracking-tight mb-6">
            Kosovo and the Birth of the "Illegal but Legitimate" Age
          </h1>
          <p className="text-lg text-[hsl(var(--text-secondary))] leading-relaxed">
            How NATO's 1999 air campaign broke the Charter's monopoly on force authorization — and created an argumentative template that made every subsequent intervention easier to defend
          </p>
        </header>

        {/* ── Body ── */}
        <div className="prose-cardinal">

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            Kosovo forced international lawyers and governments into a corner from which an answer was absolutely needed, but as we will see, there was no good answer here. By the spring of 1999, the Security Council had already treated Kosovo as a matter of international peace and security, had imposed an arms embargo, had demanded an end to repression, and had endorsed international verification. Everyone could see that the crisis had crossed the threshold of ordinary internal disorder, and everyone could also see that the Council was not going to authorize force. When NATO launched its air campaign on 24 March 1999, the legal weakness of the operation was obvious in the same moment that its political appeal was equally undeniable, and Kosovo entered the law of force at precisely that point of collision, where the Charter still mattered yet the coalition that acted believed it could no longer wait for the institution the Charter placed at the center.
          </p>

          <KeyPoint>
            The events did not produce a novel legal rule in a literal capacity. Instead, they created a dangerous precedent — a repeatable rhetorical framework that a group of nations could utilize to justify military intervention without prior sanction.
          </KeyPoint>

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            This pattern began with the Security Council acknowledging the severity of a crisis, progressed through the exhaustion of diplomatic avenues, and culminated in a defense of force based on the premise that failing to act would be the more reckless path, followed by an anticipated veto that foreclosed authorization, followed by the claim that inaction was the more irresponsible choice. That sequence, once run through successfully by NATO and absorbed into respectable legal and political commentary, made later invocations of the same logic considerably easier to mount.
          </p>

          <ArgumentSequence />

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            From that moment, the discipline of the Charter no longer depended only on text, doctrine, and institutional procedure; it depended more heavily on whether the states capable of using force chose to restrain themselves when they could describe a case as exceptional.
          </p>

          <PullQuote>
            Kosovo was an important turning point as the post-World War II order that was to be based on "moral" responsibility was again shifting to the old deterrence through power.
          </PullQuote>

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            The familiar version of the case moves too quickly from Serbian repression to NATO action, as though the legal controversy arose from excessive formalism in the face of suffering, but that reading is far too easy. The real controversy concerned authority: once the Security Council had recognized the gravity of the crisis, yet still refused to authorize military action, who had the right to decide that the threshold had been crossed anyway? NATO answered that question for itself, and parts of the legal academy and later the <SourceRef>Independent International Commission on Kosovo</SourceRef> gave that choice a language in which it could be defended. The Charter was supposed to guide these issues, and yet, over time, it made itself, slowly but surely, ineffective to the point that no country with enough military control is afraid of it. What was once the domain of super-countries slowly started to turn into another version of a weaker country can bully another yet weaker country.
          </p>

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            The resonance of that shift extended far beyond the Balkan theater, fundamentally altering the environment in which subsequent military interventions would be interrogated and defended. By demonstrating that a specific argumentative sequence — incorporating prior engagement, claimed urgency, and institutional blockage — could be deployed successfully, it deepened a skepticism already prevalent in states such as Iran. To these observers, the legal order maintained its universalist rhetoric, yet its practical discipline appeared to yield more readily when the actors invoking the exception possessed sufficient rhetorical and military weight; in this context, terms like "humanitarian necessity" and "moral urgency" became part of a refined vocabulary for managing departures from the Charter.
          </p>

          {/* ── Section 01 ── */}
          <SectionLabel number="01" label="The Security Council's Prior Engagement" />

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            NATO did not enter a crisis that the United Nations had ignored; the Security Council had spent more than a year building a record of intervention short of force. Through <SourceRef>Resolution 1160 of 31 March 1998</SourceRef>, it imposed an arms embargo and brought Kosovo within Chapter VII, while the <SourceRef>Secretary-General's report S/1998/834</SourceRef> described large-scale displacement and worsening humanitarian conditions. <SourceRef>Resolution 1199</SourceRef>, adopted on 23 September 1998, demanded a ceasefire, humanitarian access, and withdrawal of units used for civilian repression, while warning of an "impending humanitarian catastrophe." <SourceRef>Resolution 1203</SourceRef>, adopted on 24 October 1998, endorsed the verification arrangements associated with the OSCE Kosovo Verification Mission and NATO air verification.
          </p>

          <KeyPoint>
            This prior record performed two functions at once. It gave NATO's supporters strong political ground — the Council had already identified the danger. At the same time, the same record sharpened the legal difficulty, because once the Council has taken a crisis that far, its refusal to authorize force becomes more rather than less consequential.
          </KeyPoint>

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            The Council's engagement had already converted Kosovo from an internal matter into an internationally recognized emergency, which meant that the absence of authorization was a deliberate choice rather than an oversight. Kosovo, therefore, did not present a void in which states acted because the United Nations had taken no action; it presented an impasse in which the Council had done a great deal and still refused to take the final step.
          </p>

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            The political justification for intervention grew stronger throughout early 1999, even as the legal deficiency remained unresolved. The Racak massacre heightened fears of an impending large-scale campaign of ethnic violence, a sentiment reinforced by the <SourceRef>Secretary-General's report S/1999/293 on 17 March 1999</SourceRef>, which documented persistent instability and inconsistent compliance. Following the collapse of the Rambouillet talks, NATO asserted that diplomatic options had been exhausted. While this claim carried significant political weight, it did not rectify the fundamental lack of Security Council authorization.
          </p>

          {/* ── Section 02 ── */}
          <SectionLabel number="02" label="The Legal Basis for NATO's Air Campaign" />

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            As the air campaign commenced, the legal avenues available to justify the action were easily identifiable, yet none provided a robust legal basis. Article 51 was inapplicable because no NATO member alleged an armed attack by Yugoslavia; thus, while factors like regional instability and refugee crises informed a logical policy choice, they failed to qualify the operation as self-defense in a strictly legal capacity. Ultimately, Kosovo was not a complex interpretation of Article 51; it was a situation that fell entirely outside its scope.
          </p>

          <LegalBasisTable />

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            That left the argument from Security Council authorization, and the problem there was equally plain. The Council had passed important resolutions and used strong language, had described a grave humanitarian danger and demanded compliance, yet it had never used the language it deployed in <SourceRef>Resolution 678</SourceRef> during the Iraq-Kuwait crisis, where states received explicit permission to use "all necessary means." In response, NATO utilized a cumulative theory of authority, asserting that the Security Council's prior identification of the crisis as a threat to peace, coupled with Yugoslavia's non-compliance, provided sufficient justification for intervention. However, this position is difficult to sustain legally, as it essentially replaces explicit permission with escalating international concern.
          </p>

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            A third defensive strategy centered on the concept of humanitarian intervention. This approach was notably transparent, as it acknowledged what previous arguments attempted to obscure: NATO's actions lacked both a basis in self-defense and explicit authorization from the Security Council. However, the legal framework at the time remained insufficient to validate such a claim. While <SourceRef>Bruno Simma</SourceRef> viewed the campaign as politically necessary under the prevailing conditions, he stopped short of translating this perspective into established legal doctrine. Similarly, <SourceRef>Louis Henkin</SourceRef> adopted a sympathetic tone but declined to assert that positive law had evolved to recognize a general right to unilateral humanitarian intervention. <SourceRef>Nico Krisch</SourceRef> subsequently highlighted that in the wake of Kosovo, the law had yet to crystallize into such a rule, whereas <SourceRef>Ian Brownlie and C.J. Apperley</SourceRef> offered a more blunt assessment, characterizing the intervention as fundamentally at odds with the Charter's structure.
          </p>

          <PullQuote>
            Kosovo became influential because the legal case remained weak, while the political and moral case remained strong enough for many governments and scholars to accept.
          </PullQuote>

          {/* ── Section 03 ── */}
          <SectionLabel number="03" label="From Authorization to Necessity" />

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            The most compelling justifications for the Kosovo intervention did not attempt to establish that the actions were legally authorized. The attempt instead was to redirect the debate itself, moving away from the requirement for a definitive legal mandate and toward a more fundamental moral dilemma: whether responsible nations could remain idle once diplomatic efforts had collapsed and the threat of an imminent humanitarian disaster had become unsustainable.
          </p>

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            The core of the strategy is captured in NATO's declaration from 24 March 1999, which maintained that "no other alternative was open." The weight of this phrasing is found in its framing: it avoids claiming a clear legal mandate and instead suggests that the situation had exhausted the possibilities for responsible political action. By doing so, NATO effectively moved the discussion from a burden of legal proof to a burden of political judgment. This represents a distinct form of reasoning that transcends the boundaries of traditional legal analysis.
          </p>

          <KeyPoint>
            A government that says "the law clearly permits us" can be answered by demonstrating that the law says something else. A government that says "the humanitarian emergency, combined with diplomatic failure and Council paralysis, made inaction irresponsible" moves the debate onto ground where law, politics, and morality are deliberately entangled.
          </KeyPoint>

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            This was not a doctrinal breakthrough but an argumentative one. Doctrine requires a legal basis, a consistent state practice, and something approaching <em>opinio juris</em>, whereas an argumentative template requires only that powerful states deploy it successfully enough times that other actors begin treating it as available to themselves. Kosovo provided a way in which governments could defend force outside prior authorization while continuing to describe themselves as acting within the moral horizon of the legal order, and that vocabulary — necessity, legitimacy, responsibility in the face of institutional blockage — has proven far more durable than any specific legal claim made at the time.
          </p>

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            The most profound institutional repercussions stem from this transition in authority. Under the UN Charter, the power to sanction collective force is reserved for the Security Council, barring instances of self-defense; this framework is built on the principle that no individual nation or alliance should unilaterally determine when a humanitarian crisis justifies bypassing that mandate. By successfully asserting and defending such a right, NATO initiated a fundamental shift in institutional oversight: influential states can make these determinations independently without incurring costs that exceed their strategic objectives, justifying their actions through the rhetoric of responsibility rather than acknowledging a legal breach.
          </p>

          {/* ── Section 04 ── */}
          <SectionLabel number="04" label="'Illegal but Legitimate'" />

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            The <SourceRef>Independent International Commission on Kosovo</SourceRef> later captured the compromise view of the intervention by describing it as "illegal but legitimate," and the phrase succeeded because it performed exactly the task many of NATO's supporters needed performed — it preserved the legal objection while refusing to allow that objection to settle the evaluation of the campaign, making it possible to say simultaneously that the Charter had been breached and that the breach was defensible.
          </p>

          <TensionDiagram />

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            This formula solved a political problem and created a legal one. Politically, it was well-suited to its moment: it allowed governments and commentators to admit that the operation lacked prior Security Council authorization while still claiming that the humanitarian stakes and the collapse of diplomacy made the intervention defensible, and it made unresolved illegality easier to carry within respectable discourse because the illegality had been formally acknowledged rather than denied.
          </p>

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            Legally, the formula was far more troublesome, because the separation of legality from legitimacy, if treated as a stable analytical position rather than a desperate compromise, implies that states or coalitions are entitled to act on their own assessment of legitimacy even when the law says otherwise — and once that implication is drawn out, it is very difficult to confine it to cases as extreme as Kosovo.
          </p>

          <PullQuote>
            Kosovo did not establish that any state with genuine humanitarian concerns could bypass the Council; it established that a coalition with sufficient power and sufficient argumentative resources could do so and absorb the legal cost — and that is a very different proposition.
          </PullQuote>

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            <SourceRef>Daniel Joyner</SourceRef> warned that anyone who tried to treat Kosovo as a path toward legal development risked weakening the discipline of the law on force rather than strengthening it, and <SourceRef>Krisch's</SourceRef> critique ran in the same direction: once legality and legitimacy are publicly separated, the crucial question no longer concerns whether a grave crisis exists but whether the actor invoking the exception has the political weight and rhetorical resources to make the legitimacy claim stick.
          </p>

          {/* ── Section 05 ── */}
          <SectionLabel number="05" label="Resolution 1244 and Institutional Repair" />

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            The return of the Security Council through <SourceRef>Resolution 1244</SourceRef> spared Kosovo from ending as a simple story of unilateral force followed by institutional collapse, and that matters. Acting under Chapter VII, the Council authorized the international civil and security presences in Kosovo, created the framework for UNMIK and KFOR, and reinserted the United Nations into the organization of the post-war order, so that the aftermath acquired a formal legal structure rather than remaining a zone of unilateral control.
          </p>

          <KeyPoint>
            Resolution 1244 did not retroactively authorize the bombing campaign and did not turn the initial use of force into a lawful act from the outset. It entered after the air campaign had begun, after the strategic position on the ground had shifted, and after Belgrade had accepted peace principles. Its subject matter was administration and settlement rather than the legality of what had already happened.
          </KeyPoint>

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            The Council returned, and the post-war settlement acquired a firm legal framework; the initial breach looked more manageable than it otherwise would have been, and the episode as a whole could be presented not as a case of unilateral force that ended in institutional collapse but as a case in which institutional repair followed quickly enough to contain the damage. A coalition could use force first, and later institutional re-engagement could narrow the appearance of systemic rupture, which meant that the precedential value of the episode was shaped as much by the resolution of the crisis as by the initiation of it.
          </p>

          {/* ── Flowchart ── */}
          <div className="my-12 space-y-0">
            <FlowBox title="Pre-Kosovo Order">
              Force requires either self-defence (Art. 51) or explicit Security Council authorization. No exceptions codified.
            </FlowBox>
            <FlowArrow />
            <FlowBox title="The Kosovo Breach">
              NATO acts without authorization. Legal case weak, political and moral case strong. The Charter is breached openly.
            </FlowBox>
            <FlowArrow />
            <FlowBox title="The Formula">
              "Illegal but legitimate" — the breach is acknowledged yet defended. Legality and legitimacy publicly separated.
            </FlowBox>
            <FlowArrow />
            <FlowBox title="Institutional Repair">
              Resolution 1244 re-establishes UN framework. The breach is absorbed rather than repudiated.
            </FlowBox>
            <FlowArrow />
            <FlowBox title="Post-Kosovo Consequence" accent>
              The argumentative template becomes available. Charter discipline now depends on whether powerful states choose to restrain themselves — not on institutional control.
            </FlowBox>
          </div>

          {/* ── Section 06 ── */}
          <SectionLabel number="06" label="Significance for Iran and the Wider Order" />

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            Beyond its immediate impact on the Balkans, Kosovo fundamentally reshaped the landscape for justifying future interventions. It did so not by creating a new legal rule, but by proving that a specific argumentative path — involving prior Security Council engagement, the failure of diplomacy, urgent humanitarian claims, the anticipation of a veto, and the use of force outside the Charter followed by institutional stabilization — could be navigated successfully by a coalition prepared to weather legal scrutiny. This precedent made subsequent arguments for exceptional force easier to sustain, as the Kosovo experience served as proof that such a sequence was viable, even without formal legal endorsement.
          </p>

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            For nations like Iran, the true importance of Kosovo was found in this very flexibility. The issue was not a denial of Serbian repression or humanitarian needs, but rather that a powerful Western coalition could bypass prior authorization while maintaining political and legal respectability through appeals to legitimacy and necessity. For those who already viewed the Charter's discipline as unevenly applied, Kosovo became a glaring example of the divide between theoretical universality and practical selectivity — where flexibility is accessible to those with significant power and rhetorical reach, but remains out of reach for those without.
          </p>

          <PullQuote>
            What might have previously been seen as good-faith legal arguments were increasingly viewed as maneuvers within a system where discipline is managed rather than applied — a shift that damages the legal order even when a specific claim is legitimate.
          </PullQuote>

          <p className="text-[hsl(var(--text-secondary))] leading-relaxed text-[1.05rem]">
            This shift in perception profoundly affected how future Western claims of legality and restraint were interpreted. Such claims were no longer viewed as neutral applications of universal rules, as Kosovo had exposed how much the system's elasticity depended on the identity of the actor and the perceived exceptionalism of the case. Consequently, Kosovo represents a critical transition point. It bridges the earlier era of selective enforcement and intervention with the subsequent history of Iraq in 2003, Libya in 2011, and the broader erosion of Charter discipline. The intervention did not rewrite the law — it changed the terms on which departures from the law could be defended, and it made those departures easier to absorb into respectable political and legal discourse, and that was enough to leave a deep mark on the system that followed.
          </p>

          {/* ── Sources ── */}
          <SectionLabel number="—" label="Sources" />
          <div className="surface rounded-lg p-6 space-y-1.5">
            {[
              "UN Charter, Articles 2(4), 39, 42, 51",
              "UNSC Resolution 1160 (1998)",
              "UNSC Resolution 1199 (1998)",
              "UNSC Resolution 1203 (1998)",
              "UNSC Resolution 1244 (1999)",
              "Secretary-General's Reports S/1998/834, S/1999/293",
              "NATO Declaration, 24 March 1999",
              "Independent International Commission on Kosovo, 'The Kosovo Report' (2000)",
              "Bruno Simma, 'NATO, the UN, and the Use of Force: Legal Aspects' (EJIL, 1999)",
              "Louis Henkin, 'Kosovo and the Law of Humanitarian Intervention' (AJIL, 1999)",
              "Nico Krisch, on the post-Kosovo state of humanitarian intervention doctrine",
              "Ian Brownlie & C.J. Apperley, 'Kosovo Crisis Inquiry: Memorandum on the International Law Aspects'",
              "Daniel Joyner, on the risks of treating Kosovo as legal development",
              "Michael Byers & Simon Chesterman, 'Changing the Rules about Rules?' (EJIL)",
              "Gregory Fox, 'Close Encounters of a Sovereign Kind'",
            ].map((s) => (
              <p key={s} className="text-sm text-[hsl(var(--text-muted))] font-mono leading-relaxed">{s}</p>
            ))}
          </div>
        </div>

        {/* Series navigation */}
        <WorldStageNav currentSlug="kosovo-illegal-but-legitimate" />
      </article>
    </Layout>
  );
};

export default ArticleKosovo;
