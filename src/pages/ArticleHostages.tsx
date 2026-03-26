import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useState } from "react";
import Layout from "@/components/layout/Layout";
import WorldStageNav from "@/components/WorldStageNav";

/* ── Reusable article components (same pattern as Post 3) ── */

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

/* ── Dual Timeline: Tehran vs Washington ── */

const DUAL_EVENTS = [
  { date: "16 Jan 1979", tehran: "Shah leaves Iran. Revolutionary momentum accelerates.", washington: "Carter administration watches cautiously. Embassy remains open." },
  { date: "1 Feb 1979", tehran: "Khomeini returns from exile. Millions flood the streets.", washington: "State Department begins contingency planning for embassy staff." },
  { date: "11 Feb 1979", tehran: "Monarchy collapses. Bazargan's provisional government forms.", washington: "U.S. recognizes the new government. Diplomatic relations continue." },
  { date: "14 Feb 1979", tehran: "First embassy attack. Armed militants briefly occupy compound.", washington: "Alarm in Washington. Embassy security reviewed but mission stays." },
  { date: "22 Oct 1979", tehran: "News of Shah's admission to the U.S. spreads. Fury builds.", washington: "Shah admitted to New York for medical treatment. Brzezinski downplays risk." },
  { date: "1 Nov 1979", tehran: "Bazargan and Yazdi meet Brzezinski in Algiers. Seen as betrayal.", washington: "Meeting treated as routine diplomacy. No alert raised." },
  { date: "4 Nov 1979", tehran: "Students seize embassy. 52 Americans detained. Bazargan weakened.", washington: "Crisis erupts. Carter demands release. Diplomatic channels activated." },
  { date: "6 Nov 1979", tehran: "Bazargan resigns. Revolutionary hardliners consolidate power.", washington: "Realization sets in: no counterpart willing to negotiate release." },
  { date: "24 Apr 1980", tehran: "Eagle Claw wreckage in desert becomes propaganda victory.", washington: "Rescue mission fails. Eight servicemen dead. Political humiliation." },
  { date: "20 Jan 1981", tehran: "Hostages released via Algiers Accords after 444 days.", washington: "Release timed to Reagan's inauguration. Carter era ends in shadow." },
];

const DualTimeline = () => {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <div className="my-10">
      <div className="hidden sm:grid grid-cols-[1fr_auto_1fr] gap-0 text-[10px] font-mono uppercase tracking-[0.2em] mb-4 px-2">
        <span className="text-cardinal">Tehran</span>
        <span className="w-20" />
        <span className="text-[hsl(var(--text-muted))] text-right">Washington</span>
      </div>

      <div className="space-y-0">
        {DUAL_EVENTS.map((ev, i) => {
          const isExpanded = expandedIdx === i;
          const isSeizure = i === 6; // Nov 4 highlight

          return (
            <button
              key={i}
              onClick={() => setExpandedIdx(isExpanded ? null : i)}
              className={`w-full text-left transition-all duration-300 ${
                isSeizure && !isExpanded ? "ring-1 ring-cardinal/30 rounded-lg" : ""
              }`}
            >
              {/* Mobile layout */}
              <div className="sm:hidden p-3">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${isSeizure ? "bg-cardinal animate-pulse" : "bg-cardinal/40"}`} />
                  <span className="font-mono text-[10px] text-cardinal tracking-wider">{ev.date}</span>
                </div>
                {isExpanded && (
                  <div className="ml-4 space-y-2 mt-2 animate-in fade-in duration-200">
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-cardinal/60">Tehran</span>
                      <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">{ev.tehran}</p>
                    </div>
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-[hsl(var(--text-muted))]">Washington</span>
                      <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">{ev.washington}</p>
                    </div>
                  </div>
                )}
                {!isExpanded && (
                  <p className="ml-4 text-xs text-[hsl(var(--text-muted))] truncate">{ev.tehran}</p>
                )}
              </div>

              {/* Desktop layout */}
              <div className={`hidden sm:grid grid-cols-[1fr_auto_1fr] gap-0 items-start py-3 px-2 rounded-lg transition-all duration-200 hover:bg-[hsl(var(--surface-raised))] ${
                isExpanded ? "bg-[hsl(var(--surface-raised))]" : ""
              }`}>
                <div className="pr-4">
                  <p className={`text-sm leading-relaxed transition-all ${
                    isExpanded ? "text-[hsl(var(--text-primary))]" : "text-[hsl(var(--text-secondary))]"
                  }`}>{ev.tehran}</p>
                </div>
                <div className="flex flex-col items-center w-20 pt-1">
                  <span className={`w-3 h-3 rounded-full border-2 border-[hsl(var(--background))] ${
                    isSeizure ? "bg-cardinal shadow-[0_0_12px_hsl(var(--cardinal)/0.5)]" : "bg-cardinal/40"
                  }`} />
                  {i < DUAL_EVENTS.length - 1 && (
                    <span className="w-px flex-1 min-h-[20px] bg-cardinal/20 mt-1" />
                  )}
                  <span className="font-mono text-[9px] text-cardinal/80 mt-1 whitespace-nowrap">{ev.date}</span>
                </div>
                <div className="pl-4">
                  <p className={`text-sm leading-relaxed text-right transition-all ${
                    isExpanded ? "text-[hsl(var(--text-primary))]" : "text-[hsl(var(--text-muted))]"
                  }`}>{ev.washington}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
      <p className="text-[10px] font-mono text-[hsl(var(--text-muted))] text-center mt-3 tracking-wider uppercase">Click any event to expand</p>
    </div>
  );
};

/* ── Escalation Meter ── */

const ESCALATION_STAGES = [
  { label: "Diplomatic Strain", level: 20 },
  { label: "Embassy Vulnerability", level: 35 },
  { label: "Embassy Seized", level: 65 },
  { label: "ICJ + SC Response", level: 75 },
  { label: "Eagle Claw", level: 90 },
  { label: "Total Rupture", level: 100 },
];

const EscalationMeter = () => (
  <div className="my-10 surface rounded-lg p-6">
    <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-cardinal mb-4">Crisis Escalation</h4>
    <div className="space-y-3">
      {ESCALATION_STAGES.map((s) => (
        <div key={s.label} className="flex items-center gap-3">
          <span className="font-mono text-[10px] text-[hsl(var(--text-muted))] w-36 shrink-0 truncate">{s.label}</span>
          <div className="flex-1 h-2 rounded-full bg-[hsl(var(--divider))] overflow-hidden">
            <div
              className="h-full rounded-full transition-all duration-700"
              style={{
                width: `${s.level}%`,
                background: s.level >= 90
                  ? "hsl(var(--cardinal))"
                  : s.level >= 60
                    ? `linear-gradient(90deg, hsl(var(--cardinal) / 0.5), hsl(var(--cardinal)))`
                    : `hsl(var(--cardinal) / ${s.level / 100 + 0.2})`,
              }}
            />
          </div>
          <span className="font-mono text-[10px] text-cardinal/60 w-8 text-right">{s.level}%</span>
        </div>
      ))}
    </div>
  </div>
);

/* ── Main Article ── */

const ArticleHostages = () => {
  return (
    <Layout>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-16 pb-24">

        {/* Breadcrumb */}
        <div className="mb-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text-secondary))] transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" /> Back to home
          </Link>
        </div>

        {/* Header */}
        <header className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="tag-cardinal">The World Stage</span>
            <span className="tag">Part 4</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[hsl(var(--text-primary))] leading-tight tracking-tight mb-6">
            Revolution, Hostages, and the Breakdown of US-Iran Legal Relations
          </h1>
          <p className="text-lg text-[hsl(var(--text-secondary))] leading-relaxed max-w-2xl mb-4">
            How anti-imperial revolution collided with diplomatic law, state responsibility, and a region hardening into a security crisis.
          </p>
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.15em] text-[hsl(var(--text-muted))]">
            <span>March 2026</span>
            <span className="w-1 h-1 rounded-full bg-[hsl(var(--text-muted))]" />
            <span>40 min read</span>
          </div>
        </header>

        {/* Body */}
        <div className="article-body">

          <p>
            By the time the United States Embassy in Tehran was seized on 4 November 1979, the crisis was already much larger than an embassy. Iran had gone through regime collapse, revolutionary consolidation, and a rapid struggle over who would actually govern the new state. The United States had admitted the Shah for medical treatment on 22 October 1979, a step that looked manageable in Washington and incendiary in Tehran. The memory of 1953 had not faded, and the domino effect finally started to show.
          </p>

          <KeyPoint>
            This episode is an interesting mix of anti-imperial grievance and historical narrative, both complementing each other. In 1979–1980, the anti-imperial revolution in Iran collided with one of the clearest rule sets in public international law: the law of diplomatic and consular protection.
          </KeyPoint>

          <p>
            The political atmosphere was charged, suspicious, and in many respects understandable. The legal rule was still clear. Embassy premises were inviolable. Diplomats and consular staff were protected. The receiving state had a positive duty to protect both the mission and its personnel under the Vienna Convention on Diplomatic Relations and the Vienna Convention on Consular Relations.
          </p>

          {/* Dual Timeline */}
          <SectionLabel number="00" label="The Parallel Crisis" />

          <h2>Two Capitals, One Collision</h2>

          <p>
            The crisis unfolded simultaneously in Tehran and Washington, but each capital experienced a fundamentally different reality. What follows is the sequence as it appeared on both sides.
          </p>

          <DualTimeline />

          {/* Section 1 */}
          <SectionLabel number="01" label="The Revolution" />

          <h2>There Was a Revolution Over Sovereignty</h2>

          <p>
            The revolution that overthrew Mohammad Reza Shah Pahlavi was not just a revolt against a ruler. It was a revolt against an entire political order that many Iranians saw as dependent, securitized, and externally protected. The Shah left Iran on 16 January 1979. Ayatollah Khomeini returned on 1 February 1979. The monarchy collapsed on 11 February 1979. In formal legal terms, the Iranian state remained the same subject of international law. In political terms, almost everything that had sustained its external alignment was breaking apart.
          </p>

          <PullQuote>
            The revolution was also a sovereignty event. It was an attempt to recover political agency from a system in which security, oil, and external influence had become tightly linked.
          </PullQuote>

          <p>
            That matters because the revolution did not begin from a blank slate. The overthrow of Prime Minister Mohammad Mossadeq in 1953, the restoration of royal power, and the subsequent closeness between Tehran and Washington remained part of the revolution's political vocabulary. <SourceRef>Scholars such as Fred Halliday have long treated the revolution as both domestic upheaval and geopolitical rupture.</SourceRef>
          </p>

          <p>
            But recovering sovereignty in political language is not the same thing as securing state control in institutional fact. After February 1979, Iran did not have a single, settled center of authority. It had a provisional government under Mehdi Bazargan, revolutionary committees, clerical networks, armed groups, and the growing authority of Khomeini himself. <SourceRef>The Office of the Historian's short account and the Encyclopaedia Iranica entry on the Carter administration both capture this point from different angles.</SourceRef> Once the monarchy fell, there was no structure in place to hold the state or government. Multiple groups were trying to take advantage of the situation and gain power.
          </p>

          <KeyPoint>
            But that doesn't mean this instability can be used as a reason to waive off the obligations held by Iran. A state can remain internationally bound even while its effective governing structure is in flux. International obligations do not wait for a revolution to settle itself. If anything, crises test whether those obligations still constrain conduct when domestic power is unstable and political symbolism is high.
          </KeyPoint>

          {/* Section 2 */}
          <SectionLabel number="02" label="The Embassy" />

          <h2>The Embassy Was a Symbol Before It Became a Hostage Site</h2>

          <p>
            The 4 November seizure did not emerge out of nowhere; it was something waiting to happen. The United States Embassy had already become a political symbol inside revolutionary Iran. On 14 February 1979, only days after the collapse of the monarchy, armed militants briefly attacked and occupied the embassy. The episode was resolved, and the provisional authorities reasserted enough control to restore the mission.
          </p>

          <KeyPoint>
            That first incident laid the foundation for the rest, but still, it remains the most important as well. Because it shows something the later crisis often obscures: the revolutionary state, or at least parts of it, could still choose to protect diplomatic premises when it decided that preserving state-to-state relations was worth the effort.
          </KeyPoint>

          <p>
            The second seizure unfolded in a different political environment. By autumn 1979, the provisional government was weaker, the constitutional struggle inside the revolution had intensified, and suspicion of the United States had deepened. Then came the Shah's admission to the United States. For many revolutionaries, the Shah's arrival in New York looked less like a humanitarian exception than a possible prelude to renewed American intervention.
          </p>

          <p>
            On 1 November 1979, Bazargan and Foreign Minister Ebrahim Yazdi met Zbigniew Brzezinski in Algiers. The meeting was diplomatically unsurprising. <SourceRef>A memorandum reproduced in Foreign Relations of the United States later reported that the Shah's arrival in New York and the absence of Bazargan and his colleagues in Algiers provided the opportunity for what the author described as a "second coup."</SourceRef> The same document stated that the attack on the embassy was carefully organized and that it helped undermine the provisional government's position.
          </p>

          <PullQuote>
            The embassy became the site at which competing visions of post-revolutionary Iran could be staged. It was meant to express that in the new Iran after the monarchy, there is no place for the USA, and they were willing to go so far as to attack an embassy to express that position.
          </PullQuote>

          {/* Section 3 */}
          <SectionLabel number="03" label="The Seizure" />

          <h2>How 4 November 1979 Transformed the Iranian State</h2>

          <p>
            On 4 November 1979, militants identified with the "Muslim Student Followers of the Imam's Line" entered the embassy compound and detained American diplomatic and consular personnel. <SourceRef>Early U.S. reporting, preserved in FRUS, described a large student demonstration that penetrated security barriers, took personnel hostage, and demanded the extradition of the Shah.</SourceRef> The attackers initially framed the event as a political occupation. It rapidly became something else: the opening move in a prolonged detention that would last 444 days.
          </p>

          <p>
            The effect in Iran was not small as well; there was an immediate political reaction. Bazargan resigned on 6 November 1979. That resignation mattered as much politically as the seizure itself. It marked the defeat of the provisional government and the consolidation of a harder revolutionary line around Khomeini and the institutions that spoke in his name.
          </p>

          <KeyPoint>
            Now, this is where we have to put an analytical lens on the history. The first question is not whether the students were formally state organs on the morning of 4 November. The first question is what the Iranian state then did, or refused to do, once the occupation began. The second question is what changed once the occupation was endorsed from above. Those were the questions the International Court of Justice eventually had to answer, and they remain the cleanest way to understand the doctrinal importance of the case.
          </KeyPoint>

          <p>
            The political point is equally important. The seizure succeeded because it aligned with the revolution's strongest symbolic resources: anti-Americanism, anti-monarchical memory, and the claim that a weak post-imperial state could be remade only by defying the older language of dependence. That is why the episode should not be written as if it were only a mob incident. It was an event inside a struggle over the form of the new Iranian state that has only solidified since then.
          </p>

          {/* Escalation Meter */}
          <EscalationMeter />

          {/* Section 4 */}
          <SectionLabel number="04" label="The Breach" />

          <h2>The Undeniable Breach of International Law</h2>

          <p>
            Once the embassy was seized and diplomats were detained, the dispute moved into one of the clearest parts of the international legal order. Under the Vienna Convention on Diplomatic Relations, the premises of the mission are inviolable. Agents of the receiving state may not enter without consent. The receiving state must take all appropriate steps to protect the mission against intrusion, damage, disturbance, and impairment of dignity. Similar protection applies to consular premises and personnel under the Vienna Convention on Consular Relations.
          </p>

          <PullQuote>
            Unlike the previous incidents in this series, the legal breach here is pretty evident if read once and then again. The obligation on Iran was both positive and negative. Iran was not merely required to refrain from attacking the embassy. It was required to protect the mission and its personnel against third parties acting within its territory.
          </PullQuote>

          <p>
            This is why the Tehran Hostages case is still taught as a foundational diplomatic-law case. The breach did not depend on showing that the first students through the gate wore state uniforms. The breach could already arise from failure to protect in the first place.
          </p>

          <p>
            Jurisdiction was also unusually solid. The United States relied on the optional protocols to the Vienna conventions and on the 1955 Treaty of Amity, Economic Relations, and Consular Rights. That detail is often treated as technical. It is not. It shows that even after the revolution, even as formal diplomatic relations were breaking down, there remained a legal architecture linking Iran and the United States. The relationship was becoming antagonistic, but it had not become legally empty.
          </p>

          <KeyPoint>
            In earlier parts of the series, legal disagreement often arose because the underlying questions were themselves difficult: covert intervention, occupation, withdrawal, recognition, territorial status. Here the central rule was elementary. The facts were very, very clear.
          </KeyPoint>

          {/* Section 5 */}
          <SectionLabel number="05" label="The Court" />

          <h2>What the ICJ Actually Clarified</h2>

          <p>
            The United States filed its application before the ICJ on 9 November 1979. The Court indicated provisional measures on 15 December 1979 and delivered its merits judgment on 24 May 1980. Iran did not fully participate in the proceedings, but the Court proceeded on the basis of the materials before it. The reasoning remains unusually precise.
          </p>

          <p>
            The Court separated the legal problem into two stages.
          </p>

          {/* Two-stage visual */}
          <div className="my-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FlowBox title="Stage 1: Failure to Protect" accent>
              Even if the occupation had initially been carried out by militants not yet acting as formal state organs, Iran still bore responsibility for failing to take appropriate steps to protect the embassy, secure the premises, and free the detainees. The receiving state had clear positive obligations under diplomatic and consular law, and it failed to discharge them.
            </FlowBox>
            <FlowBox title="Stage 2: State Adoption" accent>
              Once Iranian authorities endorsed the seizure and continued detention, the legal character of the conduct changed. It was no longer simply a wrongful private action tolerated by the state. It became conduct attributable to the state itself. That is the move in the judgment that gives the case continuing doctrinal force.
            </FlowBox>
          </div>

          <p>
            The Court showed how a state can incur responsibility first by failing to prevent or terminate wrongful conduct, and then more fully by adopting and maintaining that conduct as its own.
          </p>

          <p>
            <SourceRef>Richard Falk's 1980 AJIL essay remains worth reading.</SourceRef> Falk did not deny the breach. His value lies elsewhere: he insisted that the legal clarity of the diplomatic rules should not blind lawyers to the political circumstances that gave the crisis its force. <SourceRef>Anthea Jeffery's 1981 ICLQ article and Ted Stein's 1982 AJIL piece</SourceRef> show the other side of the same truth: legal clarity does not guarantee compliance, and judicial condemnation does not freeze the political crisis in place.
          </p>

          <KeyPoint>
            The Court's judgment is therefore important on two levels at once. It is a classic diplomatic-law case. It is also a case about state responsibility through omission, endorsement, and continuation. Those two points are often mentioned separately. But that's not how it worked; each of the points works in coordination with the others.
          </KeyPoint>

          {/* Section 6 */}
          <SectionLabel number="06" label="The Council" />

          <h2>The Security Council Spoke Clearly, and Still Did Not End the Crisis</h2>

          <p>
            The Security Council reacted through Resolution 457 on 4 December 1979 and Resolution 461 on 31 December 1979. Both called for the release of the hostages and reaffirmed the basic obligations owed to diplomatic and consular missions.
          </p>

          <PullQuote>
            And yet the hostages remained in detention.
          </PullQuote>

          <p>
            That is the real institutional lesson of the episode. The law worked in one sense and failed in another. It worked because it identified the breach, clarified the state's obligations, and generated condemnation through both judicial and political organs. It failed because none of those acts produced prompt compliance.
          </p>

          <KeyPoint>
            Simply said, it reminded us how even if international law has rules, that only works when both parties want to agree. This directly connects to the ICJ Article 36, which itself is highly controversial, as unless both parties agree that they can be adjudicated, the decision of the court will be binding on them; it is no different from resolutions and condemnations. Highly ineffective if lives are on the line, like in this situation.
          </KeyPoint>

          <p>
            This is a harder lesson than the familiar slogan that international law is either effective or ineffective. The Tehran crisis shows something more uncomfortable. A rule can be clear. Yet, it cannot solve the problem before it. Why not? Part of the answer is internal to Iran. The crisis strengthened the revolutionary coalition that benefited from continuing confrontation. Part of the answer is external. The language of diplomatic inviolability, however legally sound, arrived in Tehran against the background of the Shah's long U.S. connection and the memory of foreign intervention. That memory did not legalize the seizure. But it helps explain why legal condemnation did not immediately persuade the regime or its supporters that compliance was politically desirable.
          </p>

          {/* Section 7 */}
          <SectionLabel number="07" label="Eagle Claw" />

          <h2>The Shift from Protection to Force</h2>

          <p>
            By the spring of 1980, the crisis had widened into sanctions, diplomatic rupture, and military planning. The United States broke diplomatic relations with Iran on 7 April 1980. On the night of 24–25 April 1980, Operation Eagle Claw failed in the Iranian desert.
          </p>

          <p>
            That failed rescue mission is not the doctrinal center of the story, and it should not displace the basic legal fact that Iran had already committed grave breaches of diplomatic and consular law. But it matters for another reason. It shows how quickly a dispute that began in the language of inviolability, protection, and judicial relief could shift into the law and politics of force.
          </p>

          <p>
            <SourceRef>Stein's article remains useful here because it does not flatten the problem.</SourceRef> The rescue attempt did not erase Iran's prior wrongfulness. It did, however, create a second legal frame, one in which the United States was no longer relying only on the Court, the Council, and diplomatic pressure, but was attempting a cross-border operation on Iranian territory to extract its nationals.
          </p>

          <KeyPoint>
            The operational failure mattered politically as much as legally. In Washington, it deepened the sense of humiliation. In Tehran, it reinforced the regime's claim that the revolution was still under threat from external force. That result would echo for decades. The United States would carry forward the lesson that diplomacy with Tehran could be overtaken by coercion. Iran would carry forward the lesson that legal disputes with the United States could quickly slide into operational danger.
          </KeyPoint>

          {/* Section 8 */}
          <SectionLabel number="08" label="Afghanistan" />

          <h2>The Crisis Became Regional</h2>

          <p>
            On 27 December 1979, Soviet forces deepened their intervention in Afghanistan. The General Assembly's emergency special session resolution condemned the intervention and called for the withdrawal of foreign troops.
          </p>

          <p>
            The hostage crisis and the Soviet move into Afghanistan produced a common strategic effect: they pushed the Persian Gulf and its periphery further into the center of superpower security planning. <SourceRef>The Office of the Historian's account of the Carter Doctrine is explicit on this point.</SourceRef> The administration's new Gulf policy was developed in response to both the Iranian hostage crisis and the Soviet invasion. In his 23 January 1980 State of the Union address, Carter stated that any attempt by an outside force to gain control of the Persian Gulf region would be regarded as an assault on vital U.S. interests and repelled by force if necessary.
          </p>

          <PullQuote>
            1979–1980 did not simply produce a bilateral breakdown between Tehran and Washington. It helped harden a new regional security order in which revolutionary Iran, Soviet Afghanistan, Gulf oil, and superpower force became part of the same strategic map.
          </PullQuote>

          <p>
            For Iran, this had a distinct ideological effect. The new Islamic Republic could present itself as resisting both superpowers: the United States, which had backed the Shah, and the Soviet Union, which had intervened in neighboring Afghanistan. The slogan <em>Neither East nor West</em> was not an empty posture in this setting. It was a claim to autonomous revolutionary legitimacy in a region once again being reorganized by outside power.
          </p>

          {/* Flowchart */}
          <SectionLabel number="—" label="The Legal Architecture" />

          <div className="my-10 space-y-0">
            <FlowBox title="1979: Revolution" accent>
              Shah overthrown. Provisional government forms. Embassy becomes symbolic target. State authority fragmented.
            </FlowBox>
            <FlowArrow />
            <FlowBox title="4 November 1979: Embassy Seized">
              52 Americans detained. Bazargan resigns. Revolutionary hardliners consolidate. Legal breach begins with failure to protect.
            </FlowBox>
            <FlowArrow />
            <FlowBox title="State Endorsement">
              Khomeini and revolutionary authorities adopt the seizure. Conduct becomes attributable to Iran as a state act.
            </FlowBox>
            <FlowArrow />
            <FlowBox title="ICJ + Security Council">
              Court clarifies two-stage responsibility. Council demands release. Neither produces compliance. Legal clarity fails to end the crisis.
            </FlowBox>
            <FlowArrow />
            <FlowBox title="Eagle Claw + Afghanistan">
              Dispute shifts from diplomatic protection to military force. Soviet invasion hardens regional security architecture. Carter Doctrine declared.
            </FlowBox>
            <FlowArrow />
            <FlowBox title="Result: Adversarial Legality" accent>
              Hostages released via Algiers Accords. US-Iran relationship becomes permanently juridified, securitized, and hostile. Legal connection survives as a battlefield of claims.
            </FlowBox>
          </div>

          {/* Section 9 */}
          <SectionLabel number="09" label="The Aftermath" />

          <h2>The Legal Relationship Did Not Disappear — It Became Adversarial</h2>

          <p>
            The hostages were finally released in January 1981 through the Algiers Accords and the subsequent Iran–United States Claims Tribunal framework. This is another part of the story that should not be skipped. The crisis did not end in a pure collapse of legality. It ended through a legal-institutional arrangement that froze some disputes, monetized others, and moved a large category of claims into structured arbitration.
          </p>

          <p>
            The political relationship between Iran and the United States became intensely hostile. The 1955 Treaty of Amity, which had helped ground jurisdiction in the Tehran Hostages case, reappeared decades later in fresh ICJ litigation. This is a recurring theme in the series: the legal order does not necessarily disappear when political relations collapse. Sometimes it survives precisely as a battlefield of claims, jurisdiction, sanctions, and countermeasures.
          </p>

          <KeyPoint>
            The revolution produced a powerful sovereignty claim. The hostage seizure violated hard diplomatic law. The Court and the Security Council identified that breach with unusual clarity. Yet the institutions of international law could not by themselves restore compliance or rebuild trust. Instead, the crisis reorganized the U.S.–Iran relationship around coercion, sanctions, exceptional diplomacy, legal claims, and a durable expectation of hostility.
          </KeyPoint>

          <p>
            In that sense, 1979–1980 marks a decisive break in the regional legal order. Before it, the United States and Iran were bound together by alliance, oil, and treaty. After it, they remained legally connected, but in damaged form. The relationship became adversarial, juridified, and securitized at the same time. That combination still shapes the present. When the region now slides from diplomacy into sanctions, from adjudication into force postures, or from treaty language into emergency coercion, the pattern is not new. Much of it was already visible in Tehran and Afghanistan between November 1979 and January 1980.
          </p>

          {/* Shift summary */}
          <div className="my-10 surface rounded-lg p-6">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-cardinal mb-2">The shift in three lines</h4>
            <ul className="space-y-2 text-[hsl(var(--text-secondary))] text-sm leading-relaxed">
              <li className="flex gap-3"><span className="text-cardinal shrink-0">Pre-1979</span> Alliance, oil, treaty. US-Iran bound by shared Cold War structure.</li>
              <li className="flex gap-3"><span className="text-cardinal shrink-0">1979–80</span> Revolution, seizure, breach. Diplomatic law clear but powerless to compel.</li>
              <li className="flex gap-3"><span className="text-cardinal shrink-0">Post-81</span> Adversarial legality. Sanctions, claims tribunals, durable hostility.</li>
            </ul>
          </div>

          {/* Sources */}
          <SectionLabel number="—" label="Sources" />
          <div className="surface rounded-lg p-6">
            <ul className="space-y-2 text-sm text-[hsl(var(--text-muted))] leading-relaxed">
              <li>ICJ, <em>United States Diplomatic and Consular Staff in Tehran</em> (Judgment, 24 May 1980)</li>
              <li>Vienna Convention on Diplomatic Relations (1961)</li>
              <li>Vienna Convention on Consular Relations (1963)</li>
              <li>Treaty of Amity, Economic Relations, and Consular Rights (US-Iran, 1955)</li>
              <li>UN Security Council Resolutions 457 (4 December 1979) and 461 (31 December 1979)</li>
              <li>FRUS, 1977–1980, Vol. XI: Iran: Hostage Crisis, November 1979–September 1980</li>
              <li>Office of the Historian, The Hostage Crisis in Iran</li>
              <li>Office of the Historian, The Carter Doctrine</li>
              <li>Encyclopaedia Iranica, Carter Administration</li>
              <li>Richard Falk, "The Iran Hostage Crisis and International Law" (AJIL, 1980)</li>
              <li>Anthea Jeffery, "The American Hostages in Tehran" (ICLQ, 1981)</li>
              <li>Ted Stein, "Contempt, Crisis, and the Court" (AJIL, 1982)</li>
              <li>Fred Halliday, <em>Iran: Dictatorship and Development</em></li>
              <li>Algiers Accords (January 1981) and Iran–United States Claims Tribunal</li>
              <li>GA Resolution ES-6/2 on Afghanistan (1980)</li>
            </ul>
          </div>

        </div>

        {/* Series Navigation */}
        <WorldStageNav currentSlug="revolution-hostages-iran" />

      </article>
    </Layout>
  );
};

export default ArticleHostages;
