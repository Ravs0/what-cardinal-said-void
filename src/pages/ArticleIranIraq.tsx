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

/* ── Four-Episode Comparative Grid ── */

const EPISODES = [
  {
    label: "Iraq's Invasion",
    rule: "UN Charter Art. 2(4): prohibition on use of force",
    clarity: "High",
    response: "SC Res. 479 called for ceasefire but avoided attribution. Secretary-General's 1991 report confirmed Iraq initiated the conflict.",
    lesson: "A clear Charter breach may not produce early institutional willingness to organize response around attribution.",
  },
  {
    label: "Chemical Weapons",
    rule: "1925 Geneva Protocol: prohibition on poisonous gases in war",
    clarity: "Very High",
    response: "SC Res. 612 and 620 condemned use. Fact-finding missions deployed. But hardened language came only after repeated use.",
    lesson: "An unusually strong humanitarian prohibition may not produce timely protection while violations are underway.",
  },
  {
    label: "Lebanon 1982",
    rule: "Sovereignty and non-intervention. SC Res. 509 demanded immediate withdrawal.",
    clarity: "High",
    response: "Legal demands for withdrawal did not reconstruct effective Lebanese state order. Theatre remained fractured.",
    lesson: "Repeated invocation of sovereignty may still fail to reconstruct effective state order in a fractured theatre.",
  },
  {
    label: "Gulf / Iran Air 655",
    rule: "Law of armed conflict, civilian protection, self-defence requirements (necessity, proportionality).",
    clarity: "High",
    response: "SC Res. 616 expressed 'deep distress' but did not reorganize the theatre around responsibility. Aerial Incident case settled without merits judgment.",
    lesson: "Direct great-power force, civilian catastrophe, and legal process can coexist without altering the deeper strategic structure.",
  },
];

const EpisodeGrid = () => {
  const [selected, setSelected] = useState(0);
  const ep = EPISODES[selected];

  return (
    <div className="my-10">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2 mb-6">
        {EPISODES.map((e, i) => (
          <button
            key={e.label}
            onClick={() => setSelected(i)}
            className={`px-3 py-1.5 rounded text-[10px] font-mono uppercase tracking-[0.15em] transition-all duration-200 ${
              i === selected
                ? "bg-cardinal/10 text-cardinal border border-cardinal/30"
                : "text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text-secondary))] border border-[hsl(var(--divider))] hover:border-[hsl(var(--text-muted))]"
            }`}
          >
            {e.label}
          </button>
        ))}
      </div>

      {/* Detail */}
      <div className="surface rounded-lg p-6 space-y-4 animate-in fade-in duration-200">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-cardinal/60">Governing Rule</span>
            <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed mt-1">{ep.rule}</p>
          </div>
          <div>
            <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-cardinal/60">Clarity at the Time</span>
            <p className="text-sm text-cardinal font-mono mt-1">{ep.clarity}</p>
          </div>
        </div>
        <div>
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-cardinal/60">Institutional Response</span>
          <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed mt-1">{ep.response}</p>
        </div>
        <div className="pt-3 border-t border-[hsl(var(--divider))]">
          <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-cardinal">Strategic Lesson</span>
          <p className="text-sm text-[hsl(var(--text-primary))] leading-relaxed mt-1 italic">{ep.lesson}</p>
        </div>
      </div>
    </div>
  );
};

/* ── Norm vs. Protection Gap Visualization ── */

const GAP_DATA = [
  { norm: "Use of Force (Art. 2(4))", normStrength: 95, protection: 30, label: "Iraq Invasion" },
  { norm: "Chemical Weapons Ban", normStrength: 98, protection: 20, label: "CW Use" },
  { norm: "Sovereignty / Withdrawal", normStrength: 85, protection: 25, label: "Lebanon" },
  { norm: "Civilian Protection", normStrength: 90, protection: 15, label: "Iran Air 655" },
];

const NormGapChart = () => (
  <div className="my-10 surface rounded-lg p-6">
    <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-cardinal mb-6">
      Normative Strength vs. Timely Protection
    </h4>
    <div className="space-y-5">
      {GAP_DATA.map((d) => (
        <div key={d.label}>
          <div className="flex items-center justify-between mb-1.5">
            <span className="font-mono text-[10px] text-[hsl(var(--text-muted))] truncate">{d.label}</span>
            <span className="font-mono text-[9px] text-cardinal/60">gap: {d.normStrength - d.protection}%</span>
          </div>
          <div className="relative h-3 rounded-full bg-[hsl(var(--divider))] overflow-hidden">
            {/* Norm strength - full bar */}
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-cardinal/20"
              style={{ width: `${d.normStrength}%` }}
            />
            {/* Actual protection - solid bar */}
            <div
              className="absolute inset-y-0 left-0 rounded-full bg-cardinal"
              style={{ width: `${d.protection}%` }}
            />
          </div>
          <div className="flex justify-between mt-1">
            <span className="font-mono text-[8px] text-cardinal/50">Protection: {d.protection}%</span>
            <span className="font-mono text-[8px] text-[hsl(var(--text-muted))]">Norm: {d.normStrength}%</span>
          </div>
        </div>
      ))}
    </div>
    <p className="text-[10px] font-mono text-[hsl(var(--text-muted))] text-center mt-4 tracking-wider uppercase">
      Solid bar = timely protection delivered · Shaded area = normative strength on paper
    </p>
  </div>
);

/* ── Main Article ── */

const ArticleIranIraq = () => {
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
            <span className="tag">Part 5</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[hsl(var(--text-primary))] leading-tight tracking-tight mb-6">
            Iran-Iraq War, Chemical Weapons, Lebanon, and the Militarization of the Region
          </h1>
          <p className="text-lg text-[hsl(var(--text-secondary))] leading-relaxed max-w-2xl mb-4">
            How four distinct crises in a single decade taught Iran that legal clarity, institutional response, and timely protection did not move together.
          </p>
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.15em] text-[hsl(var(--text-muted))]">
            <span>March 2026</span>
            <span className="w-1 h-1 rounded-full bg-[hsl(var(--text-muted))]" />
            <span>45 min read</span>
          </div>
        </header>

        {/* Body */}
        <div className="article-body">

          <p>
            Any serious account of Iran's later place in the regional order has to return to the 1980s, but it has to return to that decade with more discipline than the standard narrative usually brings. Writers often compress the period into a familiar sequence: revolution, invasion, chemical weapons, Lebanon, the tanker war, Iran Air 655, and then the long afterlife of grievance and securitization. That sequence is recognizably true, but it does not yet amount to analysis. It does not tell us why these episodes, which arose under different legal regimes and involved different actors, belong together in the first place. Nor does it explain why this particular decade proved so formative for Iran's later strategic conduct. If we want more than a recitation of trauma, we need a clearer frame.
          </p>

          <KeyPoint>
            The frame used here is straightforward. In each episode, the same four questions matter. What was the governing legal rule? How clear was that rule at the time? How did the relevant institutions respond? What strategic lesson would a state in Iran's position reasonably draw from the gap, if any, between norm, response, and practical consequence?
          </KeyPoint>

          <p>
            This methodology does not seek to mix law into geopolitics, nor does it wish to flatten history into doctrine. The aim is to allow each episode to retain its own legal character while still making possible a broader argument about the regional order.
          </p>

          <PullQuote>
            Despite the events of the 1980s, Iran was not convinced that international law was a sham or that legal arguments were without merit; it consistently appealed to rules, resolutions, and jurisdictional processes throughout and after the decade.
          </PullQuote>

          <p>
            However, that period did increasingly and forcefully demonstrate a narrower, yet more damaging, reality: legal clarity, institutional response, and timely protection did not move together. The established rules and institutions often failed to act effectively. Their responses were frequently delayed, focused on immediate crisis management rather than genuine accountability, or ultimately left the fundamental threats in the region unchanged. This recurring pattern, seen across multiple events, suggests a systemic failure rather than random occurrences. Consequently, it became a major factor driving Iranian skepticism toward an externally managed regional order.
          </p>

          {/* Four Episodes Overview */}
          <SectionLabel number="00" label="The Framework" />

          <h2>Four Episodes, One Pattern</h2>

          <EpisodeGrid />

          {/* Section 1 */}
          <SectionLabel number="01" label="The Invasion" />

          <h2>Iraq's Invasion of Iran and the Cost of Delayed Attribution</h2>

          <p>
            Iraq's invasion of Iran on 22 September 1980 posed the clearest legal issue of the decade. Article 2(4) of the UN Charter prohibited the use of force against the "territorial integrity or political independence" of another state. Iraq had no shortage of political explanations for its conduct. Saddam Hussein's government feared the regional effects of the Iranian Revolution, sought leverage over the Shatt al-Arab, and wanted to revise the Gulf balance in Iraq's favour. Those considerations explain Iraqi motives. They do not alter the legal character of the opening move. Whatever the surrounding politics, Iraq initiated a large-scale cross-border attack against Iran.
          </p>

          <KeyPoint>
            In Resolution 479, adopted less than a week after the invasion, the Council called on the parties to "refrain immediately from any further use of force" and to settle their dispute by peaceful means. The operative emphasis fell on cessation, not attribution. That choice matters because it disclosed, at the very outset of the war, the divergence between a relatively clear legal baseline and a much more cautious institutional response.
          </KeyPoint>

          <p>
            The Council did not deny that force had been used. It simply refused to make the identification of the initiator the organizing principle of its action. Identifying the drivers of such restraint is straightforward. The Gulf was a priority for all global powers, the Arab political landscape was significant, and the revolutionary nature of the Islamic Republic was a critical factor. Each of these considerations made it politically easier to stabilize the immediate conflict than to frame it in terms that might have required early and overt responsibility. But that is precisely the point. The institutional response did not become ambiguous because the law was unclear. It became ambiguous because the political costs of legal clarity were judged to be high.
          </p>

          <PullQuote>
            That gap between legal question and institutional choice mattered enormously in Iranian memory, and it still matters analytically.
          </PullQuote>

          <p>
            Some later accounts muddy the issue by emphasizing that Iran, once it recovered much of its lost territory, did not stop at strict territorial restoration. That is true. From 1982 onward, Tehran pursued the war beyond the narrow recovery of its own territory, demanded reparations and guarantees, and in important parts of the leadership sought the weakening or removal of Saddam Hussein. Those later choices complicate the moral and legal evaluation of the war's later phases. They do not, however, erase the legal significance of the opening invasion. A careful analysis must keep the origin of the war distinct from the assessment of its prolonged conduct. Once that distinction collapses, legal analysis gives way to a blurred moral narrative in which the initiating wrong dissolves into the cumulative ugliness of the whole conflict.
          </p>

          <KeyPoint>
            In the Secretary-General's further report under Resolution 598, dated 9 December 1991, the Secretary-General concluded that Iraq had "initiated the conflict" and that the attack of 22 September 1980 could not be justified under the Charter. That report carries unusual weight because it demonstrates that the international system did not lack the conceptual ability to identify the initial breach. It lacked, at the relevant time, the institutional willingness to make that conclusion operative.
          </KeyPoint>

          {/* Section 2 */}
          <SectionLabel number="02" label="Resolution 598" />

          <h2>The Security Council's Management Function</h2>

          <p>
            The history of Resolution 598 shows why it is too crude to say that the Security Council simply failed in the Iran-Iraq War. Adopted on 20 July 1987, the resolution demanded an "immediate ceasefire", required withdrawal to "internationally recognized boundaries", called for prisoner exchange, and requested the dispatch of a United Nations observer mission. It later supplied the framework for the ceasefire that came into effect on 20 August 1988. In practical terms, the resolution mattered greatly. No honest account of the war should pretend otherwise.
          </p>

          <p>
            And yet the significance of 598 lies not only in what it achieved, but also in what it revealed about the Council's institutional preferences. The Council proved capable of brokering termination. It proved far less willing, especially in the early stages of the war, to organize its response around the prior legal characterization of Iraq's initial attack. That difference deserves more attention than it usually receives.
          </p>

          <PullQuote>
            An institution that can stabilize a conflict without promptly allocating responsibility for its origin does not operate as a neutral mirror of the law. It operates through a hierarchy of functions, and in this case the hierarchy favoured management over judgment.
          </PullQuote>

          <p>
            That preference shaped Iranian perceptions of the international system in a lasting way. A state under invasion does not experience delayed attribution as a merely technical imperfection. It experiences it as a statement about institutional priorities. The Council treated the reduction of visible hostilities as more urgent than the early legal characterization of the party that had begun them. One may defend that choice as politically prudent, and many governments clearly did. But one cannot defend it by pretending that prudence and legal clarity were the same thing.
          </p>

          <KeyPoint>
            The real problem lay elsewhere. The legal materials existed, but the institutional system was more comfortable managing the war than judging its beginning while the judgment still carried operational significance. Once we describe the problem in that way, Iranian distrust appears less like abstract anti-Western rhetoric and more like a conclusion drawn from the actual structure of the decade.
          </KeyPoint>

          {/* Section 3 */}
          <SectionLabel number="03" label="Chemical Weapons" />

          <h2>The Limits of Normative Strength</h2>

          <p>
            No part of the decade more starkly exposed the difference between normative strength and timely protection than Iraq's repeated use of chemical weapons. Here the relevant rule was not obscure. The 1925 Geneva Protocol had long prohibited the use in war of poisonous and related gases. By the 1980s, the legal and political taboo surrounding chemical warfare had become unusually strong. That is what makes the record so damaging. The problem was not doctrinal uncertainty.
          </p>

          {/* Norm Gap Visualization */}
          <NormGapChart />

          <p>
            The chronology of institutional response matters here. On 29 June 1984, the Secretary-General sent messages to Iran and Iraq urging both states to refrain from attacks on civilian centres and from the use of chemical weapons. By 1986, a fact-finding mission had investigated allegations of chemical-weapons use in the conflict. By 1988, a further mission report made it even harder to treat the matter as isolated or uncertain.
          </p>

          <p>
            The decisive Council resolutions came later. <SourceRef>Resolution 612, adopted on 9 May 1988,</SourceRef> affirmed the urgent necessity of observing the Geneva Protocol and condemned the "continued use of chemical weapons" in the conflict. <SourceRef>Resolution 620, adopted on 26 August 1988,</SourceRef> condemned chemical-weapons use in violation of the Protocol and in defiance of 612, supported further investigation, and stated that the Council would consider "appropriate and effective measures" if such use recurred. These resolutions mattered. They strengthened the institutional record, and they helped reinforce what later became the Secretary-General's Mechanism for investigating alleged chemical and biological weapons use.
          </p>

          <PullQuote>
            What is the value of a rule whose continued existence does not reliably alter conduct while the most serious violations are underway?
          </PullQuote>

          <p>
            If the norm remains intact but civilians and soldiers continue to suffer from repeated prohibited attacks, then the norm's symbolic strength sits uneasily beside its immediate protective weakness. The Council's practice compounded that problem by preserving a degree of diplomatic symmetry that blurred the asymmetry of actual conduct. Governments often preferred language addressed to both parties, and that may have kept open room for broader conflict management. Yet from the Iranian perspective, such symmetry diluted the central fact that Iraq had made recurring use of a prohibited weapon without triggering a coercive response commensurate with the clarity of the ban.
          </p>

          <KeyPoint>
            A state that concludes that even the clearest humanitarian rule may be slow in its institutional enforcement will think differently about vulnerability, deterrence, and the need for self-help. In that respect, the chemical-weapons record belongs near the centre of any explanation of Iran's later security doctrine.
          </KeyPoint>

          {/* Section 4 */}
          <SectionLabel number="04" label="Lebanon 1982" />

          <h2>The Reorganization of Regional Power</h2>

          <p>
            Lebanon enters this analysis for a different reason. It did not form part of the Iran-Iraq War in any simple sense, but it exposed another feature of the regional order that mattered enormously to Tehran. Where formal legal order remained thin, delayed, or unable to reconstruct effective sovereignty, other forms of organization could take root and endure.
          </p>

          <p>
            Israel's invasion of Lebanon in June 1982 immediately generated legal controversy and institutional response. <SourceRef>Resolution 509</SourceRef> demanded that Israel withdraw "forthwith and unconditionally" to the internationally recognized boundaries of Lebanon. <SourceRef>Resolution 520</SourceRef> later reaffirmed Lebanon's sovereignty, territorial integrity, unity, and political independence. The formal legal record therefore matters, and it matters in a familiar way.
          </p>

          <p>
            But the legal point alone does not explain why Lebanon became so consequential for Iran. The invasion opened a theatre already marked by state weakness, sectarian fragmentation, Syrian presence, and intense mobilization among Lebanese Shi'i actors. <SourceRef>The Israel Law Review discussion of the invasion's legality</SourceRef> shows how unstable Israel's legal justifications were. <SourceRef>The IJMES study on the export of the Iranian Revolution to Lebanon</SourceRef> shows, equally importantly, that Iranian influence did not arise from a single act of ideological export.
          </p>

          <KeyPoint>
            The conventional sentence that Iran entered Lebanon and created Hizbullah is too crude to do the work required here. It ignores the fact that formal legal demands for withdrawal did not reconstruct effective Lebanese state order. It also ignores the way in which regional actors learned to operate in precisely those spaces where the legal language of sovereignty continued to exist but the state itself could not fully control the distribution of force.
          </KeyPoint>

          <PullQuote>
            Lebanon marks a strategic shift. The Iran-Iraq War had shown Tehran what delayed attribution and weak timely protection looked like on its own territory. Lebanon showed that Iran could also pursue security through networked regional power in settings where formal order had already eroded.
          </PullQuote>

          {/* Section 5 */}
          <SectionLabel number="05" label="The Gulf" />

          <h2>Direct United States Force and Iran Air 655</h2>

          <p>
            The later phase of the decade moved the conflict into the Gulf and thereby changed both the history of the war and the legal imagination through which Iran would later read that theatre. As shipping came under attack and oil routes became militarized, external powers, above all the United States, increased their direct operational role. The Gulf stopped looking like a neutral commercial space and began to look like a managed security theatre structured by great-power force.
          </p>

          <p>
            This shift introduced a new cluster of legal questions. States now argued about maritime security, self-defence, civilian safety, reprisals, and the legal characterization of force used in crowded operational settings. <SourceRef>The later Oil Platforms case</SourceRef> preserves the afterlife of that moment. The case did not arise directly under the Charter, and it came later through the 1955 Treaty of Amity, but it nevertheless captured the fact that the United States and Iran had by then moved into a relationship of direct military contest framed in legal terms. The Court's summary of the case makes clear that any United States claim of self-defence depended on the existence of an armed attack and on compliance with necessity and proportionality.
          </p>

          <KeyPoint>
            The decisive event in this phase was the destruction of Iran Air Flight 655 on 3 July 1988 by the USS Vincennes, killing 290 civilians. The Security Council responded in Resolution 616 by expressing "deep distress" and "profound regret", welcoming ICAO fact-finding, and emphasizing the implementation of Resolution 598. The choice of language deserves close attention. The Council acknowledged catastrophe, but it did not reorganize the theatre around legal responsibility for that catastrophe.
          </KeyPoint>

          <p>
            Iran later brought proceedings in the Aerial Incident of 3 July 1988 case, alleging violations of the Chicago and Montreal Conventions and challenging the ICAO Council's response. The case ended in discontinuance after settlement and therefore produced no final merits judgment. That procedural outcome matters more than it may initially seem. In the Tehran Hostages litigation, the International Court of Justice generated an authoritative judgment that became part of the legal memory of the dispute. In the Iran Air 655 proceedings, the legal process remained incomplete. Iran had access to law, but the law did not culminate in the sort of public and authoritative judicial closure that might have altered political memory.
          </p>

          <PullQuote>
            For Tehran, the lesson was harsh and direct. United States military power in the Gulf was not an abstract background condition. It was operational, immediate, and capable of producing civilian catastrophe within a strategic framework that still remained in place.
          </PullQuote>

          <p>
            Legal process, though available, did not necessarily unsettle that framework. Once that lesson took hold, the Gulf ceased to look like neutral transit space and came to look instead like a zone of latent coercion administered by stronger powers in the language of order, navigation, and security.
          </p>

          {/* Flowchart */}
          <SectionLabel number="--" label="The Pattern" />

          <div className="my-10 space-y-0">
            <FlowBox title="Clear Legal Rule" accent>
              Charter prohibition on force. Geneva Protocol on chemical weapons. Sovereignty and non-intervention. Civilian protection in armed conflict.
            </FlowBox>
            <FlowArrow />
            <FlowBox title="Institutional Response">
              Resolutions passed. Fact-finding missions deployed. Condemnation issued. But attribution delayed, symmetry preserved, and coercive response withheld or minimal.
            </FlowBox>
            <FlowArrow />
            <FlowBox title="Protection Gap">
              The norm survived on paper. The state under violation continued to suffer in practice. The gap between rule and relief became the defining experience.
            </FlowBox>
            <FlowArrow />
            <FlowBox title="Strategic Inference" accent>
              International law remained necessary as a language of argument, legitimacy, and contestation, but no longer appeared sufficient as a timely protective structure.
            </FlowBox>
          </div>

          {/* Section 6 */}
          <SectionLabel number="06" label="The Inference" />

          <h2>What the Decade Taught</h2>

          <p>
            When these episodes are placed together, the right conclusion is not that they all instantiate one legal rule. They do not. The better conclusion is that they display a consistent relation between norm, institutional response, and practical consequence. Iraq's invasion demonstrated that a clear Charter breach might not produce early institutional willingness to organize response around attribution. The chemical-weapons record demonstrated that an unusually strong humanitarian prohibition might not produce timely protection. Lebanon demonstrated that repeated invocation of sovereignty and withdrawal might still fail to reconstruct effective state order in a fractured theatre. The Gulf phase demonstrated that direct great-power force, civilian catastrophe, and legal process could coexist without altering the deeper strategic structure of the region.
          </p>

          <PullQuote>
            The 1980s made Iran simultaneously more legally fluent and more institutionally distrustful. International law remained necessary as a language of argument, legitimacy, and contestation, but no longer appeared sufficient as a timely protective structure.
          </PullQuote>

          <p>
            These episodes therefore support a more careful thesis than the familiar claim that Iran simply concluded law was meaningless. That claim is too crude and does not fit the record. Iran invoked the Charter, relied on resolutions, litigated internationally, and pressed claims of responsibility.
          </p>

          {/* Section 7 */}
          <SectionLabel number="07" label="The Legacy" />

          <h2>Why the 1980s Still Matter</h2>

          <p>
            The present regional order did not emerge from the revolution alone, and it cannot be understood through the nuclear issue alone. When Iran later invested in regional armed partners, Lebanon 1982 formed part of the background. When it treated United States naval presence in the Gulf as a direct and continuing threat, the tanker war and Iran Air 655 formed part of the background. When Iranian officials spoke fluently in the language of law while doubting the neutrality or timeliness of institutional enforcement, the memory of Iraq's invasion, the delayed clarity of the 1991 report, and the slow hardening of the response to chemical-weapons use formed part of the background as well.
          </p>

          <KeyPoint>
            That is why this decade should not be treated as a loose and chaotic bridge between revolution and the later nuclear age. It is one of the periods in which the present regional order became intelligible. That experience, rather than ideology in the abstract, helps explain why later Iranian strategy combined legal argument with deterrence, regional networking, and deep suspicion of externally managed order.
          </KeyPoint>

          {/* Sources */}
          <SectionLabel number="--" label="Sources" />
          <div className="surface rounded-lg p-6">
            <ul className="space-y-2 text-sm text-[hsl(var(--text-muted))] leading-relaxed">
              <li>UN Charter, Article 2(4)</li>
              <li>UN Security Council Resolution 479 (28 September 1980)</li>
              <li>UN Security Council Resolution 598 (20 July 1987)</li>
              <li>Secretary-General's Report S/23273 (9 December 1991)</li>
              <li>1925 Geneva Protocol for the Prohibition of the Use in War of Asphyxiating, Poisonous or Other Gases</li>
              <li>UN Secretary-General messages on chemical weapons use (29 June 1984)</li>
              <li>UN fact-finding mission reports on chemical weapons (1986, 1988)</li>
              <li>UN Security Council Resolution 612 (9 May 1988)</li>
              <li>UN Security Council Resolution 620 (26 August 1988)</li>
              <li>Secretary-General's Mechanism (UNSGM) for Investigation of Alleged Use of Chemical and Biological Weapons</li>
              <li>UN Security Council Resolution 509 (6 June 1982)</li>
              <li>UN Security Council Resolution 520 (17 September 1982)</li>
              <li>Israel Law Review, discussion of the 1982 Lebanon invasion legality</li>
              <li>IJMES, study on the export of the Iranian Revolution to Lebanon</li>
              <li>ICJ, <em>Oil Platforms</em> (Islamic Republic of Iran v. United States of America)</li>
              <li>UN Security Council Resolution 616 (20 July 1988)</li>
              <li>ICJ, <em>Aerial Incident of 3 July 1988</em> (Islamic Republic of Iran v. United States of America)</li>
            </ul>
          </div>

        </div>

        {/* Series Navigation */}
        <WorldStageNav currentSlug="iran-iraq-war-militarization" />

      </article>
    </Layout>
  );
};

export default ArticleIranIraq;
