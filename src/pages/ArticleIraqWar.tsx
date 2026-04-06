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

/* ── Legal Comparison Table ── */

const COMPARISON_ROWS = [
  { dimension: "Triggering Event", afghanistan: "Actual armed attack (9/11)", iraq: "Alleged future threat (WMD programmes)" },
  { dimension: "Article 51 Basis", afghanistan: "Self-defence after armed attack by non-state actor", iraq: "No armed attack by Iraq in 2003" },
  { dimension: "Security Council", afghanistan: "Res. 1368 & 1373 — recognized self-defence right", iraq: "Res. 1441 — no express force authorization" },
  { dimension: "Legal Consensus", afghanistan: "Broad acceptance among states", iraq: "Deep division; most states opposed" },
  { dimension: "Doctrinal Effect", afghanistan: "Widened self-defence to non-state actors", iraq: "Attempted to normalize preventive war" },
  { dimension: "Factual Foundation", afghanistan: "Concrete perpetrator, concrete event", iraq: "Contested intelligence, unproven links" },
];

const ComparisonTable = () => (
  <div className="my-10 overflow-x-auto">
    <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-cardinal mb-2">
      Afghanistan vs. Iraq — Legal Architecture
    </h4>
    <p className="text-[10px] text-[hsl(var(--text-muted))] mb-6 font-mono tracking-wider uppercase">
      Two operations, two fundamentally different legal claims
    </p>
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="border-b border-[hsl(var(--divider))]">
          <th className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--text-muted))]">Dimension</th>
          <th className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--text-muted))]">Afghanistan (2001)</th>
          <th className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--text-muted))]">Iraq (2003)</th>
        </tr>
      </thead>
      <tbody>
        {COMPARISON_ROWS.map((row, i) => (
          <tr key={row.dimension} className={`border-b border-[hsl(var(--divider))] ${i % 2 === 0 ? "bg-[hsl(var(--surface))]" : ""}`}>
            <td className="py-3 px-4 font-mono text-xs text-cardinal">{row.dimension}</td>
            <td className="py-3 px-4 text-[hsl(var(--text-secondary))]">{row.afghanistan}</td>
            <td className="py-3 px-4 text-[hsl(var(--text-secondary))]">{row.iraq}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/* ── Iraq's Three-Track Argument ── */

const THREE_TRACKS = [
  { label: "Revival Theory", desc: "Resolution 678 (1990) authorization could revive upon material breach of 687 ceasefire terms, without a new Council vote.", weakness: "Key Council members explicitly rejected automaticity at the time of Res. 1441's adoption." },
  { label: "Pre-emptive Security", desc: "Iraq's alleged WMD programmes and post-9/11 security environment made waiting for threats to mature unacceptably dangerous.", weakness: "No armed attack by Iraq. Intelligence claims were contested at the time and collapsed afterward." },
  { label: "Regime Change", desc: "Removal of Saddam Hussein's government was presented as inseparable from regional security and disarmament.", weakness: "Charter contains no provision for forcible regime change. Conflates disarmament with political transformation." },
];

const ThreeTrackDiagram = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="my-10">
      <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-cardinal mb-2">
        The Coalition's Three-Track Argument
      </h4>
      <p className="text-[10px] text-[hsl(var(--text-muted))] mb-6 font-mono tracking-wider uppercase">
        Each track carried a structural weakness
      </p>
      <div className="space-y-3">
        {THREE_TRACKS.map((track, i) => (
          <button
            key={track.label}
            onClick={() => setExpanded(expanded === i ? null : i)}
            className="w-full text-left surface rounded-lg p-5 transition-all duration-200 hover:bg-[hsl(var(--surface-raised))]"
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="font-mono text-xs text-cardinal w-6">{String(i + 1).padStart(2, "0")}</span>
              <h5 className="font-serif text-base text-[hsl(var(--text-primary))]">{track.label}</h5>
            </div>
            <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed pl-9">{track.desc}</p>
            {expanded === i && (
              <div className="mt-4 pl-9 pt-3 border-t border-cardinal/20">
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-cardinal/80">Weakness</span>
                <p className="text-sm text-[hsl(var(--text-muted))] leading-relaxed mt-1">{track.weakness}</p>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

/* ── Doctrinal Shift Diagram ── */

const DoctrinalShift = () => (
  <div className="my-10 space-y-2">
    <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-cardinal mb-4">
      The Doctrinal Trajectory
    </h4>
    <FlowBox title="Pre-9/11 Baseline">
      Self-defence under Article 51 was understood primarily as a response to inter-state armed attack, with strict attribution requirements.
    </FlowBox>
    <FlowArrow />
    <FlowBox title="Afghanistan (2001)">
      Self-defence expanded to cover a non-state actor's armed attack launched from another state's territory, when the territorial regime harbours and supports the attacker.
    </FlowBox>
    <FlowArrow />
    <FlowBox title="Bush Doctrine (2002)">
      The concept of "imminent threat" was loosened: the greater the danger, the less certainty about timing was said to be required.
    </FlowBox>
    <FlowArrow />
    <FlowBox title="Iraq (2003)" accent>
      Speculative future danger, contested intelligence, and unilateral interpretation of earlier resolutions were deployed to justify preventive war without fresh authorization.
    </FlowBox>
    <FlowArrow />
    <FlowBox title="Consequence">
      Article 51 risked ceasing to function as a narrow exception and began to serve as a container for strategic preference — the gap between pre-emption and prevention collapsed.
    </FlowBox>
  </div>
);

/* ── Main Article ── */

const ArticleIraqWar = () => {
  return (
    <Layout>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[hsl(var(--text-muted))] hover:text-cardinal transition-colors mb-12 font-mono text-xs tracking-wider uppercase"
        >
          <ArrowLeft className="w-3.5 h-3.5" /> Back to Home
        </Link>

        {/* Header */}
        <header className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <span className="tag-cardinal">Legal History</span>
            <span className="font-mono text-[10px] text-[hsl(var(--text-muted))] tracking-widest uppercase">
              The World Stage · Part 8
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[hsl(var(--text-primary))] leading-[1.1] tracking-tight mb-6">
            Expanding Self-Defence and the Rise of Preventive War: From 9/11 to Iraq
          </h1>
          <p className="text-lg text-[hsl(var(--text-secondary))] leading-relaxed">
            How a legitimate expansion of self-defence after a catastrophic attack was leveraged into a doctrine of preventive war — and why the two should never be collapsed into one narrative.
          </p>
        </header>

        {/* Body */}
        <div className="prose-cardinal">
          <p>
            Between the events of 11 September 2001 and the March 2003 invasion of Iraq, the legal history is frequently oversimplified into a linear narrative. While Afghanistan and Iraq existed within the same strategic environment, they do not represent a continuous progression from counter-terrorism to the fall of Baghdad. This common interpretation overlooks a critical legal rupture. The initial phase expanded the international acceptance of self-defence in response to a devastating armed attack by a non-state entity. Conversely, the subsequent phase attempted to leverage that expanded logic to justify a doctrine of preventive war, forced disarmament, and regime change, all conducted without a new mandate from the Security Council.
          </p>

          <PullQuote>
            Afghanistan widened the law. Iraq strained it past the point at which most states were willing to follow.
          </PullQuote>

          <p>
            This distinction goes well beyond historical accuracy. The early post-9/11 period changed the law on force in ways that still shape current arguments about strikes on armed groups, self-defence against actors operating from foreign territory, and the relevance of state support or harbouring. Iraq did something else. It compromised the integrity of the Charter system by inviting a systemic blurring of fundamental legal boundaries: the line between a truly imminent attack and a speculative future danger, the distinction between the collective enforcement of Security Council mandates and the pursuit of unilateral war, and the separation between technical disarmament and the political removal of a hostile regime.
          </p>

          <KeyPoint>
            If Kosovo made it easier for powerful states to defend legally doubtful force in the language of legitimacy, the period from 2001 to 2003 made it easier to defend force in the language of security — before the law had settled around the new claims.
          </KeyPoint>

          {/* ── Section I ── */}
          <SectionLabel number="I" label="Two Distinct Legal Episodes" />

          <p>
            The first task is conceptual. Lawyers and historians often speak about the early war on terror as if it generated one large doctrinal shift. It did not. It generated at least two distinct moves. The first followed directly from the attacks of 11 September. The second followed from the Bush administration's effort to turn a response to an actual armed attack into a broader doctrine of anticipatory or preventive force.
          </p>

          <p>
            The attacks on New York and Washington created a legal problem that the Charter had not previously confronted in such stark form. While Article 51 preserves the inherent right of self-defence in response to an armed attack, the prescriptive framework of much twentieth-century doctrine remained largely predicated upon a traditional assumption of inter-state aggression or, at a minimum, conduct strictly attributable to a state. On 12 September 2001, the Security Council adopted resolution 1368, which recognized the "inherent right of individual or collective self-defence" in the immediate aftermath of the attacks. <SourceRef>S/RES/1368 (2001)</SourceRef> On 28 September 2001, resolution 1373 imposed wide-ranging obligations on states to suppress terrorist financing, deny safe haven, and prevent support for terrorist operations. <SourceRef>S/RES/1373 (2001)</SourceRef>
          </p>

          <p>
            The military campaign in Afghanistan rested on an argument that many states found persuasive even if they disagreed about its doctrinal basis. The United States informed the Security Council on 7 October 2001, in its Article 51 letter, that it was acting in self-defence against those responsible for the attacks and against the Taliban regime that had given Al-Qaeda support and shelter. <SourceRef>S/2001/946</SourceRef> The legal claim did not depend on proving that Afghanistan, as a state, had itself launched the attacks in the classic sense. It depended on a looser but increasingly accepted proposition: when a non-state actor carries out a large-scale armed attack from the territory of another state, and the territorial regime supports or harbours that actor and refuses to stop it, the victim state may respond with force on that territory in self-defence.
          </p>

          <ComparisonTable />

          <p>
            Iraq, by contrast, did not arise from an actual armed attack by Iraq on the United States or the United Kingdom in 2003, nor from a fresh Council mandate to use force. The case for war depended instead on three much weaker moves taken together: a revival theory built on earlier Iraq resolutions, a pre-emptive or preventive theory tied to alleged weapons threats, and a political decision that the removal of Saddam Hussein's government had become inseparable from regional security.
          </p>

          {/* ── Section II ── */}
          <SectionLabel number="II" label="Limits of the Afghanistan Expansion" />

          <p>
            The Afghanistan campaign changed the law because it helped normalize self-defence against a non-state actor operating from another state's territory. Before 9/11, many governments and scholars had treated the law of self-defence as more tightly tied to inter-state attack, or at least to conduct attributable to a state under strict rules of responsibility. After 9/11, the debate moved. Governments did not wait for a neat doctrinal formula. They accepted, in practice, that an attack of the scale and organization of 9/11 could trigger Article 51 even though Al-Qaeda was not a state.
          </p>

          <p>
            That shift should be described precisely. Afghanistan did not create an unlimited right to strike wherever a hostile group could be found. Nor did it abolish the requirements of necessity and proportionality. What it did was move the center of gravity away from strict state authorship and toward a more functional reading of self-defence, one focused on the reality of large-scale violence, on the territorial state's relationship to the attackers, and on the continuing risk of further attacks.
          </p>

          <KeyPoint>
            Afghanistan was held as a legal case because the claim had a concrete trigger, a concrete perpetrator, and a concrete territorial setting. It was not built around conjecture. It was built around an event that had already happened and around a regime that had chosen not to break with the organization responsible for it.
          </KeyPoint>

          <p>
            Retrospective narratives frequently collapse this conceptual distinction, a consequence of the rapid temporal proximity of the Iraq intervention. In its aftermath, critics of the broader post-9/11 legal trajectory increasingly read Afghanistan and Iraq as constituent parts of a single, continuous project. While it is true that these events were politically connected, legally they should be separated. One can accept that Afghanistan widened the understanding of self-defence after a non-state armed attack and still reject Iraq as unlawful. In fact, that is exactly the position many states adopted.
          </p>

          {/* ── Section III ── */}
          <SectionLabel number="III" label="The Bush Administration's Doctrinal Expansion" />

          <p>
            The decisive broadening came not from the attacks themselves, but from the way the Bush administration translated the post-9/11 climate into a more ambitious doctrine. The clearest public text was the National Security Strategy of September 2002. <SourceRef>National Security Strategy of the United States, September 2002</SourceRef> There the administration wrote that "we must adapt the concept of imminent threat" to adversaries who might use covert means or weapons of mass destruction. That sentence did more than update strategic language. It loosened the legal discipline built into self-defence.
          </p>

          <PullQuote>
            Once imminence is relaxed too far, the law of self-defence stops restraining speculation and starts licensing strategic prediction.
          </PullQuote>

          <p>
            Classical anticipatory self-defence has always been controversial, but even its narrower formulations still turned on imminence. The Bush administration's formulation diluted that condition by arguing that the greater the danger, the less certain the evidence of timing needed to be. That logic blurred the line between pre-emption and prevention. Pre-emption usually refers to striking when an attack is imminent while prevention refers to striking because a threat might become grave in the future. International lawyers have long treated those two ideas very differently, because once imminence is relaxed too far, the law of self-defence stops restraining speculation and starts licensing strategic prediction.
          </p>

          <DoctrinalShift />

          <p>
            This development is essential to the Iraq story. Iraq was not defended only as an enforcement action under old resolutions. It was also defended in a climate in which the United States had already started arguing that waiting for threats to mature could be reckless in an age of terrorism and concealed weapons. That language proved politically potent because it drew energy from the trauma of 9/11. It proved legally weak because Iraq did not fit the factual structure that had made the Afghanistan claim persuasive.
          </p>

          {/* ── Section IV ── */}
          <SectionLabel number="IV" label="Iraq's Three-Track Case for War" />

          <p>
            The coalition case for invading Iraq in March 2003 usually moved across three tracks at once.
          </p>

          <ThreeTrackDiagram />

          <p>
            The revival argument always depended on a controversial reading of Security Council authority. Even before 2003, lawyers had argued over whether older authorizations could spring back to life without a new Council decision. Resolution 1441, adopted unanimously on 8 November 2002, placed Iraq in material breach and gave it a "final opportunity to comply." It strengthened inspections. It heightened pressure. It did not use the familiar language by which the Council expressly authorizes force — and that omission mattered.
          </p>

          <p>
            It mattered even more because key Council members said so at the time. In the official joint letter from China, France, and Russia, issued the same day, they stated that resolution 1441 excluded "any automaticity in the use of force." The disagreement therefore did not appear only afterward, once the war had become unpopular. It was there at the moment of adoption. The Council had agreed on pressure and inspections, not on a delegated unilateral right to invade.
          </p>

          <KeyPoint>
            On 7 March 2003, Hans Blix told the Security Council that Iraq had accelerated some forms of cooperation and had begun destroying Al-Samoud missiles, even though the cooperation still fell short of what 1441 required. The dispute did not turn on a Council finding that inspections had clearly failed. It turned on whether some states could decide for themselves that the process had run its course.
          </KeyPoint>

          <p>
            Once those pieces are put together, the legal contrast with Afghanistan becomes stark. Afghanistan followed an actual armed attack, and the legal debate centered on how Article 51 applied to a non-state actor harboured by a territorial regime. Iraq followed no Iraqi armed attack in 2003, no fresh authorization from the Security Council, and no settled legal doctrine allowing a state to wage war because a hostile regime might pose a grave danger later. Afghanistan pushed Article 51 outward. Iraq tried to substitute prediction for attack and unilateral interpretation for collective authorization.
          </p>

          {/* ── Section V ── */}
          <SectionLabel number="V" label="Charter Damage" />

          <p>
            The legal damage done by Iraq did not lie only in the fact of an unlawful invasion. It lay in the argumentative structure that surrounded it. The Bush administration did not openly announce that it was discarding the Charter. It argued instead that the Charter had to adapt to a world in which terrorists, so-called rogue states, and concealed weapons programmes made old thresholds too rigid. That style of argument posed a deeper challenge than a blunt act of defiance would have posed. It invited governments to keep the language of self-defence while loosening its conditions.
          </p>

          <p>
            Once that move is accepted, the legal order becomes much harder to stabilize. The difference between an imminent attack and a dangerous possibility begins to depend on intelligence claims that outsiders cannot easily test. The difference between Security Council pressure and Security Council authorization begins to blur when states insist that earlier resolutions already contain enough authority. The difference between disarmament and political transformation begins to disappear when the government that poses the threat is also the government that the interveners want removed.
          </p>

          <PullQuote>
            Iraq weakened Charter discipline in a way Afghanistan had not. Afghanistan widened the accepted reach of self-defence after a real attack. Iraq tried to normalize the use of force against a feared future.
          </PullQuote>

          {/* ── Section VI ── */}
          <SectionLabel number="VI" label="Implications for Iran" />

          <p>
            Iran watched the same sequence that everyone else watched, but it had reasons to read it more sharply than many Western commentators did. By the early 2000s, Tehran had already lived through invasion by Iraq, chemical attacks, U.S. naval confrontation in the Gulf, and the selective language of humanitarian legitimacy after Kosovo. The move from 9/11 to Iraq added something new: a demonstration that the legal vocabulary of self-defence could expand quickly under conditions of fear and then be used, only two years later, to support a war against a regime accused of future danger.
          </p>

          <p>
            For Iran, that mattered in obvious ways. It made regime change look less like rhetoric and more like an available policy option. It made pre-emption look less like a narrow exception and more like an argument powerful states might press whenever they thought a hostile government was moving into the category of unacceptable risk. It also weakened confidence in the Security Council as the final legal gatekeeper, because Iraq showed that a major coalition would go to war without a fresh mandate and then return to the Council afterward to manage the political consequences through resolutions such as 1483.
          </p>

          <KeyPoint>
            Seen from Tehran, the years from 2001 to 2003 did not simply demonstrate American power. They demonstrated a legal pattern: a broad consensus could form quickly around self-defence after a catastrophic attack, that consensus could then be drawn into a much more controversial doctrine of prevention, and the Council could resist but not always successfully.
          </KeyPoint>

          {/* ── Section VII ── */}
          <SectionLabel number="VII" label="Legacy" />

          <p>
            The legal legacy can be stated simply: Afghanistan changed the accepted scope of self-defence; Iraq changed the perceived reliability of the restraints around it. The first development remains part of the law's current landscape, whether one welcomes it or not. The second left a warning. If governments start treating uncertainty, hostile intent, and possible future capacity as enough to satisfy the logic of self-defence, then Article 51 ceases to serve as a narrow exception and starts to function as a container for strategic preference.
          </p>

          <p>
            The period between 9/11 and Iraq needs a more disciplined account than it usually receives. Too much commentary still treats both wars as expressions of one post-9/11 legal mentality. The better reading keeps the sequence intact. First came an actual armed attack that pushed the law outward in response to a new kind of threat. Then came an attempt to push it further still, beyond imminent defence and into preventive war. The first shift proved durable. The second broke consensus.
          </p>

          <PullQuote>
            Iraq was the moment when the expanded security vocabulary of the post-9/11 world was used to ask international law to bless a war it could not credibly authorize.
          </PullQuote>

          <p>
            That break still frames later arguments about Iran, Israel, nuclear risk, and the use of force against states accused of hidden programmes or future escalation. Anyone trying to understand why Iranian officials and many non-Western lawyers hear the language of pre-emption with deep suspicion needs to start here. Iraq did not grow naturally out of the accepted response to 9/11. Iraq was the moment when the expanded security vocabulary of the post-9/11 world was used to ask international law to bless a war it could not credibly authorize.
          </p>

          {/* Sources */}
          <div className="mt-16 pt-8 border-t border-[hsl(var(--divider))]">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--text-muted))] mb-4">Sources</h4>
            <ul className="space-y-1.5 text-sm text-[hsl(var(--text-muted))]">
              <li>UN Charter, Article 51</li>
              <li>UN Security Council Resolution 1368 (2001)</li>
              <li>UN Security Council Resolution 1373 (2001)</li>
              <li>US Article 51 letter of 7 October 2001, S/2001/946</li>
              <li>The National Security Strategy of the United States, September 2002</li>
            </ul>
          </div>
        </div>

        {/* Series Navigation */}
        <WorldStageNav currentSlug="911-to-iraq-preventive-war" />
      </article>
    </Layout>
  );
};

export default ArticleIraqWar;
