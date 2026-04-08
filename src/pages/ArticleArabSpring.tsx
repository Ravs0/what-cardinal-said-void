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

/* ── Response Comparison Table ── */

const RESPONSE_ROWS = [
  { country: "Tunisia", trigger: "Mass protest, regime collapse", external: "Reactive diplomatic adjustment", legal: "No Security Council file", outcome: "Transition accepted" },
  { country: "Egypt", trigger: "Mass protest, military calculation", external: "Cautious pressure, then accommodation", legal: "No Security Council file", outcome: "Military-managed transition" },
  { country: "Bahrain", trigger: "Mass protest, reform demands", external: "GCC intervention by invitation", legal: "No Security Council file", outcome: "Monarchy preserved" },
  { country: "Libya", trigger: "Protest → armed confrontation", external: "Chapter VII enforcement", legal: "Res. 1970, 1973 — sanctions, ICC, force", outcome: "Regime change" },
];

const ResponseTable = () => (
  <div className="my-10 overflow-x-auto">
    <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-cardinal mb-2">
      Divergent Responses — Early 2011
    </h4>
    <p className="text-[10px] text-[hsl(var(--text-muted))] mb-6 font-mono tracking-wider uppercase">
      Four uprisings, four fundamentally different international treatments
    </p>
    <table className="w-full text-sm border-collapse">
      <thead>
        <tr className="border-b border-[hsl(var(--divider))]">
          <th className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--text-muted))]">State</th>
          <th className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--text-muted))]">Trigger</th>
          <th className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--text-muted))]">External Response</th>
          <th className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--text-muted))]">Legal Track</th>
          <th className="text-left py-3 px-4 font-mono text-[10px] uppercase tracking-[0.15em] text-[hsl(var(--text-muted))]">Outcome</th>
        </tr>
      </thead>
      <tbody>
        {RESPONSE_ROWS.map((row, i) => (
          <tr key={row.country} className={`border-b border-[hsl(var(--divider))] ${i % 2 === 0 ? "bg-[hsl(var(--surface))]" : ""}`}>
            <td className="py-3 px-4 font-mono text-xs text-cardinal">{row.country}</td>
            <td className="py-3 px-4 text-[hsl(var(--text-secondary))]">{row.trigger}</td>
            <td className="py-3 px-4 text-[hsl(var(--text-secondary))]">{row.external}</td>
            <td className="py-3 px-4 text-[hsl(var(--text-secondary))]">{row.legal}</td>
            <td className="py-3 px-4 text-[hsl(var(--text-secondary))]">{row.outcome}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

/* ── Bahrain Recoding Diagram ── */

const RECODING_STEPS = [
  { label: "Reform Movement", desc: "Demands for constitutional monarchy, accountable government, and an end to political exclusion.", icon: "📢" },
  { label: "Bloody Thursday", desc: "Police assault of 17 February kills and injures demonstrators, converting reform into a legitimacy crisis.", icon: "🩸" },
  { label: "GCC Intervention", desc: "Saudi and UAE forces enter on 14 March under the Peninsula Shield banner at the monarchy's invitation.", icon: "🛡️" },
  { label: "State of National Safety", desc: "Emergency declared on 15 March. Pearl Roundabout cleared on 16 March. Mass arrests follow.", icon: "⚠️" },
  { label: "Reclassification", desc: "Domestic protest is reframed as regional security threat, sectarian conflict, and Iranian interference.", icon: "🏷️" },
];

const RecodingSequence = () => {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <div className="my-10">
      <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-cardinal mb-2">
        The Recoding of Bahrain
      </h4>
      <p className="text-[10px] text-[hsl(var(--text-muted))] mb-6 font-mono tracking-wider uppercase">
        From reform movement to regional security file
      </p>
      <div className="relative">
        <div className="absolute left-6 top-6 bottom-6 w-px bg-[hsl(var(--divider))]" />
        <div className="space-y-1">
          {RECODING_STEPS.map((step, i) => (
            <button
              key={step.label}
              onClick={() => setActiveStep(activeStep === i ? null : i)}
              className={`w-full text-left relative pl-14 pr-5 py-4 rounded-lg transition-all duration-200 ${
                activeStep === i
                  ? "bg-cardinal/5 border border-cardinal/20"
                  : "hover:bg-[hsl(var(--surface-raised))]"
              }`}
            >
              <span className="absolute left-3 top-4 w-7 h-7 rounded-full surface border border-[hsl(var(--divider))] flex items-center justify-center text-sm z-10 bg-[hsl(var(--background))]">
                {step.icon}
              </span>
              <div className="flex items-center gap-2 mb-1">
                <span className="font-mono text-[10px] text-cardinal tracking-widest">{String(i + 1).padStart(2, "0")}</span>
                <h5 className="font-serif text-base text-[hsl(var(--text-primary))]">{step.label}</h5>
              </div>
              {activeStep === i && (
                <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed mt-1 animate-fadeIn">
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

/* ── Main Article ── */

const ArticleArabSpring = () => {
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
              The World Stage · Part 9
            </span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[hsl(var(--text-primary))] leading-[1.1] tracking-tight mb-6">
            Popular Sovereignty, Selective Support, and Bahrain's Silence
          </h1>
          <p className="text-lg text-[hsl(var(--text-secondary))] leading-relaxed">
            How the first phase of the Arab uprisings sorted popular protest into different files — transition in Tunisia and Egypt, security stabilization in Bahrain, and collective-security escalation in Libya — and what that hierarchy revealed about the limits of democratic language.
          </p>
        </header>

        {/* Body */}
        <div className="prose-cardinal">
          <p>
            The early months of the Arab uprisings are usually narrated as a continuous sequence from Tunis to Cairo and then to Benghazi. That chronology is convenient, but it conceals the first decisive break in the regional response. Once protests reached Bahrain, external actors no longer treated the uprisings as though they raised the same political and legal questions in every state. The difference appeared quickly. In Tunisia and Egypt, outside powers adjusted, reluctantly and unevenly, to domestic political change already underway. On <code>14 March 2011</code>, Saudi Arabia and the United Arab Emirates entered Bahrain at the request of the Bahraini monarchy. Three days later, the Security Council adopted resolution <code>1973</code> on Libya and authorized "<code>all necessary measures</code>" to protect civilians. Those events did not belong to a single regional script. They marked the point at which the uprisings were sorted into different files: transition in Tunisia and Egypt, security stabilization in Bahrain, and collective-security escalation in Libya.
          </p>

          <p>
            Bahrain, therefore, cannot be treated as an awkward exception between Cairo and Benghazi. It sits much closer to the center of the story. Tunisia and Egypt had briefly created the impression that major powers might accept the political consequences of mass protest when long-entrenched rulers began to lose control. Bahrain ended that impression. The Bahraini uprising was recast as a regional security problem at the very moment when the language of dignity, representation, and transition was still circulating in relation to Egypt. Libya then made the contrast impossible to miss, because a crisis that unfolded in the same season moved with unusual speed into sanctions, referral to the International Criminal Court, and authorization of force.
          </p>

          <KeyPoint>
            These cases collectively demonstrate a lack of consistent external commitment to the principle of popular sovereignty. Instead, the varied international responses were prioritized based on pre-existing alliance structures, military strategic importance, and the perceived threat posed by Iran to the established Gulf regional order.
          </KeyPoint>

          {/* Response Table */}
          <ResponseTable />

          {/* ── Tunisia and Egypt ── */}
          <SectionLabel number="I" label="Tunisia and Egypt" />

          <p>
            Lisa Anderson's description of Tunisia and Egypt as the "early adopters" remains useful because it captures both timing and context. In those two states, political facts moved faster than legal or institutional frameworks. Neither case entered the Security Council as an international peace-and-security file in the first instance. Neither case produced a debate about intervention. Protest, regime fracture, and leadership collapse came first. Outside powers then adjusted themselves to developments they had not planned and could not fully control.
          </p>

          <p>
            The fall of Zine El Abidine Ben Ali in Tunisia on January 14, 2011, stands as a clear example. It was the result of weeks of domestic protest, the collapse of his regime's authority, and a critical refusal by key state elements to unequivocally protect him. Washington's role in the Tunisian uprising was essentially reactive, functioning as a diplomatic adjustment to domestic change rather than a causative force. President Obama's response — which censured violence against citizens "peacefully voicing their opinion" and called for "free and fair elections in the near future" — was significant not for steering the events on the ground, but for its signaling of a pivotal truth: a long-standing authoritarian ally could no longer be indefinitely defended in the name of stability.
          </p>

          <p>
            Egypt was strategically far more important, and the language used there was correspondingly more cautious. Yet the policy movement was similar. The mass demonstrations that began on <code>25 January 2011</code> quickly made it impossible to treat Mubarak's rule as durable in the old sense. By <code>1 February</code>, Obama was saying that the transition "must begin now" and that only the Egyptian people could determine Egypt's political future. The United States did not force Mubarak from office, but it stopped speaking as if the preservation of his rule were the only acceptable outcome. Once the Egyptian military concluded that Mubarak had become a liability, external actors adjusted to a transition they had not chosen at the outset.
          </p>

          <PullQuote>
            For a brief period, it appeared that mass protest might be treated as a legitimate source of political change even where it threatened allied authoritarian systems. Bahrain forced that belief into retreat.
          </PullQuote>

          {/* ── Bahrain ── */}
          <SectionLabel number="II" label="The Recoding of Protest in Bahrain" />

          <p>
            Bahrain's political instability in 2011 was not a new phenomenon. As Kristian Coates Ulrichsen points out, the island's unrest "predates the 'Arab Spring' revolutions in Tunisia and Egypt" and is rooted in a much older cycle of protest, demands for reform, and government responses ranging from repression to concessions. This historical context is crucial, as it shows the 2011 uprising was not merely a sudden sectarian event sparked by external factors. Instead, the protests, which began on 14 February 2011, stemmed from long-standing grievances concerning under-representation, discrimination, an unbalanced constitution, and the concentration of power within the ruling family.
          </p>

          <p>
            The protesters who occupied Pearl Roundabout did not begin with maximalist demands. Many called for a constitutional monarchy, accountable government, and an end to political exclusion. The confrontation radicalized over time. The first major turning point came with the police assault of <code>17 February</code>, remembered as Bloody Thursday, which killed and injured demonstrators and converted a reform movement into a much deeper legitimacy crisis. Protesters returned to the Roundabout, the opposition widened, and the monarchy's internal divide between accommodation and coercion narrowed sharply.
          </p>

          <p>
            By March, the uprising had become the site at which the wider Gulf order intervened openly. On <code>14 March 2011</code>, forces from Saudi Arabia and the United Arab Emirates crossed into Bahrain under the banner of the GCC Peninsula Shield Force. The Bahrain Independent Commission of Inquiry later reproduced the King's request for assistance in direct terms: he had asked the GCC-JSF for help "in the defence of the Kingdom of Bahrain against foreign threats and in securing vital locations in the country." The following day, Bahrain declared a State of National Safety. On <code>16 March</code>, security forces cleared Pearl Roundabout. Opposition leaders, activists, doctors, lawyers, and teachers were arrested in the weeks that followed. What had begun as a domestic uprising was now fully enclosed within a regional security framework.
          </p>

          {/* Recoding Sequence */}
          <RecodingSequence />

          <p>
            This was not simply a question of military reinforcement. It was a question of political classification. The entry of GCC forces changed how Bahrain would be spoken about by its allies and by much of the international system. A movement that, weeks earlier, could still have been read in parallel with Cairo now appeared inside a different register: order, stability, sectarian risk, external manipulation, and the protection of a friendly monarchy located at the heart of Gulf security architecture.
          </p>

          {/* ── Invitation and Alliance ── */}
          <SectionLabel number="III" label="Invitation, Juridical Form, and the Strategic Logic of Alliance" />

          <p>
            The invitation provided the requisite juridical form for the GCC deployment, establishing a legal foundation centered on the request of the host state. In formal doctrine, consent by the territorial sovereign serves to insulate a foreign military presence from the standard analysis under Article 2(4) that otherwise regulates the application of cross-border force. In strictly formal terms, Bahrain therefore did not present the same legal question as an unauthorized invasion or a Council-bypassing humanitarian intervention. The Bahraini government requested assistance, and allied governments accepted the request.
          </p>

          <p>
            That answer, however, settled only the narrowest doctrinal issue. It did not settle the political meaning of what occurred. Bahrain was not responding to an ongoing foreign armed attack. A monarchy confronting a mass internal uprising called in regional allies to preserve control, while domestic security institutions dismantled the protest movement and restored the authority of the incumbent order. The invitation supplied the legal form. Alliance supplied the political substance. That combination is precisely what makes Bahrain such an important case in the legal history of 2011. Consent did not operate here as a neutral fact. It operated as the juridical vehicle through which a regional order stabilized one of its own members during a domestic political crisis.
          </p>

          <KeyPoint>
            The surrounding diplomatic language reflected this change immediately. In Egypt, Washington had moved, however cautiously, toward the view that political transition had to begin at once. In Bahrain, the official register narrowed. The White House called for "maximum restraint" and insisted that political grievances had to be addressed through dialogue and reform. None of these statements was trivial. They were also nothing like the pressure that had been brought to bear on Mubarak in his final days.
          </KeyPoint>

          <p>
            This divergence in the official register was symptomatic of a more profound shift in the strategic environment. As the sovereign host for the U.S. Fifth Fleet, Bahrain occupied a critical node in the regional security architecture, situated firmly within the Saudi security perimeter and immediately adjacent to the Kingdom's Eastern Province. Any serious destabilization of the monarchy was read in Riyadh and Washington not only as a domestic political event, but as a possible opening in the Gulf balance. Once that framing took hold, democratic language receded, and alliance management took priority.
          </p>

          {/* ── BICI ── */}
          <SectionLabel number="IV" label="The BICI Report and the Collapse of the Strongest Public Narrative" />

          <p>
            The Bahrain Independent Commission of Inquiry remains indispensable because it fixed the factual record after months in which official rhetoric had already shaped international perception of the crisis. The report found that "excessive force was used" in several operations by Bahraini authorities. It concluded that both the National Security Agency and the Ministry of Interior had engaged in a "systematic practice of physical and psychological mistreatment" which, in many cases, amounted to torture. These findings are central because they document the state's answer to political protest in the language of coercion rather than reform.
          </p>

          <p>
            The report also addressed the narrative that had done much of the political work during the crackdown. After reviewing the available evidence, the Commission concluded that it had found no material establishing a "discernible link" between the specific events of February and March 2011 and the Islamic Republic of Iran. That sentence did not erase wider regional rivalry, nor did it prevent Bahraini and Gulf officials from continuing to invoke Iran in public rhetoric.
          </p>

          <PullQuote>
            The BICI report complicated any simple judgment of Bahrain's crisis. While it documented violence against migrant workers, it explicitly cleared GCC-JSF personnel of direct human-rights violations during their deployment, noting they were tasked with protecting strategic sites and did not engage civilians.
          </PullQuote>

          <p>
            This distinction is crucial. The regional intervention's main impact was political, not evidentiary. Saudi and Emirati troops didn't need an extensive force to shift the crisis's dynamic; their arrival signaled to the monarchy that it had regional backing and conveyed to the opposition that Bahrain would not follow Egypt's path. The strongest later commentary on Bahrain speaks more plainly than the official diplomatic record: the uprising was ultimately contained by regional intervention.
          </p>

          {/* ── Libya ── */}
          <SectionLabel number="V" label="Libya and the Internationalization of One Uprising but Not the Other" />

          <p>
            Libya is essential to the argument not because Bahrain and Libya were legally identical, but because they were not. Libya moved rapidly from protest and repression into open armed confrontation. Muammar Gaddafi's threats, the scale of violence, and the pace of military escalation shaped Security Council deliberation in ways Bahrain did not. It would therefore be careless to argue that Bahrain and Libya should have received the same resolution or the same legal treatment.
          </p>

          <p>
            Nevertheless, the juxtaposition remains instructive precisely because the jurisdictional divergence was so precipitous. On 26 February 2011, the Security Council acted with unusual unanimity to adopt resolution 1970, a move that simultaneously imposed sanctions and referred the situation to the International Criminal Court. By 17 March, the adoption of resolution 1973 further internationalized the crisis, authorizing "all necessary measures" for civilian protection while explicitly precluding a foreign occupation force. In a span of less than three weeks, Libya had been fully absorbed into the core machinery of collective security.
          </p>

          <p>
            Bahrain, however, presented a decisive break from this sequence. By the moment resolution 1973 was adopted, foreign forces had already entered the island, a state of emergency had been enacted, and the symbolic center of dissent at Pearl Roundabout had been forcibly dismantled. Yet, Bahrain never transitioned into a Security Council enforcement file; it remained instead within a diplomatic register defined by invitation, restraint, and the rhetoric of managed dialogue. This jurisdictional split cannot be reduced to the observation that the facts were merely different — though they certainly were. The more salient point is that one uprising was internationalized through the machinery of Chapter VII, while the other was deliberately retained within the sphere of regional and allied management.
          </p>

          <KeyPoint>
            Eva Bellin's observation that the 2011 uprisings produced only a limited geographical spread of regime-threatening mobilization is useful here, especially her description of Bahrain and Syria as cases in which rulers survived through outside military intervention or sustained coercion. The juxtaposition did not establish hypocrisy in the abstract. It established hierarchy in practice.
          </KeyPoint>

          {/* ── Hierarchy Flow ── */}
          <div className="my-10 space-y-2">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-cardinal mb-4">
              The Hierarchy of Response
            </h4>
            <FlowBox title="Tunisia & Egypt">
              Outside powers accommodate political change after the old order has already begun to fracture. No Security Council file. Democratic language is allowed to circulate.
            </FlowBox>
            <FlowArrow />
            <FlowBox title="Bahrain" accent>
              Regional allies decide the monarchy will not fall. GCC forces enter by invitation. Protest is reclassified as security threat. Democratic language recedes to diplomatic cover.
            </FlowBox>
            <FlowArrow />
            <FlowBox title="Libya">
              Chapter VII enforcement at speed: sanctions, ICC referral, and "all necessary measures" within three weeks. Civilian protection vocabulary moves to the center.
            </FlowBox>
            <FlowArrow />
            <FlowBox title="The Pattern">
              Selective engagement is no longer an accusation — it is a record. Alliance structures, strategic geography, and perceived Iranian threat determined which uprising received which legal treatment.
            </FlowBox>
          </div>

          {/* ── Iran ── */}
          <SectionLabel number="VI" label="Why Bahrain Mattered for Iran" />

          <p>
            Iranian officials have often relied on crude language about selective democracy and selective humanitarianism. Bahrain gave those claims a factual basis they did not need to manufacture. The sequence from Tunisia and Egypt to Bahrain and Libya exposed a pattern that was visible without much interpretive effort. Democratic vocabulary travelled further when authoritarian partners had already lost their footing. It travelled much less far when a friendly monarchy, Gulf military infrastructure, and the Saudi security perimeter were directly at stake.
          </p>

          <p>
            For Tehran, Bahrain carried several lessons at once. First, political mobilization in the Gulf could quickly be reframed as a matter of regional security rather than public representation. Second, consent could be used to secure an incumbent order against domestic upheaval while still preserving the appearance of legal regularity. Third, allegations of Iranian orchestration could structure the political treatment of a crisis even when a later inquiry failed to establish the strongest version of that claim. None of this required Iranian virtue or made Iranian rhetoric neutral. It simply gave Iranian criticism a real object.
          </p>

          <PullQuote>
            The BICI findings were particularly significant: by concluding that the Commission had not established a discernible link between Iran and the concrete events of February and March 2011, the report exposed how quickly a domestic protest movement had been absorbed into a larger strategic narrative.
          </PullQuote>

          <p>
            That narrative proved politically useful because it converted a crisis of representation into a crisis of security. Once that conversion occurred, reform language could survive only as diplomatic cover. It no longer set the terms of response.
          </p>

          <p>
            Bahrain's broader significance within the legal and political history of the Arab Spring is situated at this decisive break. It was not simply a site where a monarchy repressed protest; it was the point at which the first phase of the uprisings ceased to resemble a regional opening governed by any approximate common principle. If Tunisia and Egypt suggested that popular mobilization might force external actors to adjust to domestic change, Bahrain established the hard perimeter of that logic. Libya then demonstrated that the vocabulary of civilian protection could move with extraordinary speed when channeled through the Security Council. This jurisdictional contrast was not an accident of drafting; it was a legible map of strategic priorities.
          </p>

          {/* ── Conclusion ── */}
          <SectionLabel number="VII" label="Conclusion" />

          <p>
            Bahrain belongs near the center of the 2011 story because it marks the point at which the hierarchy of response became clear. Tunisia and Egypt remained, for a short period, cases in which outside powers accommodated political change after the old order had already begun to fracture. Bahrain was treated differently from the start once regional allies decided that the monarchy would not be allowed to fall. Libya, almost immediately afterward, entered a wholly different legal track through Chapter VII. Any account of the first Arab Spring that leaves Bahrain at the margins misses the moment at which selective support ceased to be an accusation and became a record.
          </p>

          <p>
            This factual record elucidates why the events in Bahrain resonated with such significant force within Iran. Tehran did not require Bahrain as a convenient propaganda artifice; rather, it possessed in the island a real-world illustration of selective engagement. The inaugural phase of the Arab Spring bequeathed more than a disparate set of national results. It established a discernible hierarchy in the practical treatment of popular protest, state sovereignty, and the humanitarian imperative of civilian protection. While the later, more visceral crises in Libya, Syria, and Yemen would more profoundly erode confidence in the mechanisms of collective security, Bahrain served as the initial, legible map of where the language of democratic opening reached its limit.
          </p>

          <PullQuote>
            Bahrain was the point at which selective support ceased to be an accusation and became a record.
          </PullQuote>

          {/* Sources */}
          <div className="mt-16 pt-8 border-t border-[hsl(var(--divider))]">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-[hsl(var(--text-muted))] mb-4">Sources</h4>
            <ul className="space-y-1.5 text-sm text-[hsl(var(--text-muted))]">
              <li>
                <a href="https://obamawhitehouse.archives.gov/the-press-office/2011/01/14/statement-president-events-tunisia" className="hover:text-cardinal transition-colors" target="_blank" rel="noopener noreferrer">
                  Statement by President Obama on Events in Tunisia, 14 January 2011
                </a>
              </li>
              <li>
                <a href="https://obamawhitehouse.archives.gov/the-press-office/2011/02/01/remarks-president-situation-egypt" className="hover:text-cardinal transition-colors" target="_blank" rel="noopener noreferrer">
                  Remarks by President Obama on the Situation in Egypt, 1 February 2011
                </a>
              </li>
              <li>
                <a href="https://obamawhitehouse.archives.gov/photos-and-video/video/2011/03/16/press-briefing" className="hover:text-cardinal transition-colors" target="_blank" rel="noopener noreferrer">
                  White House Press Briefing, 16 March 2011
                </a>
              </li>
              <li>
                <a href="https://press.un.org/en/2011/sgsm13445.doc.htm" className="hover:text-cardinal transition-colors" target="_blank" rel="noopener noreferrer">
                  Secretary-General Statement on Bahrain, 14 March 2011
                </a>
              </li>
              <li>
                <a href="https://www.bici.org.bh/BICIreportEN.pdf" className="hover:text-cardinal transition-colors" target="_blank" rel="noopener noreferrer">
                  Bahrain Independent Commission of Inquiry Report
                </a>
              </li>
              <li>
                <a href="https://press.un.org/en/2011/sc10187.doc.htm" className="hover:text-cardinal transition-colors" target="_blank" rel="noopener noreferrer">
                  UN Security Council Resolution 1970, 26 February 2011
                </a>
              </li>
              <li>
                <a href="https://press.un.org/en/2011/sc10200.doc.htm" className="hover:text-cardinal transition-colors" target="_blank" rel="noopener noreferrer">
                  UN Security Council Resolution 1973, 17 March 2011
                </a>
              </li>
              <li>
                <a href="https://stabilityjournal.org/articles/10.5334/sta.be" className="hover:text-cardinal transition-colors" target="_blank" rel="noopener noreferrer">
                  Kristian Coates Ulrichsen, "Bahrain's Uprising: Regional Dimensions and International Consequences" (2013)
                </a>
              </li>
              <li>
                <a href="https://www.journalofdemocracy.org/articles/the-upheavals-in-egypt-and-tunisia-the-road-to-and-from-liberation-square/" className="hover:text-cardinal transition-colors" target="_blank" rel="noopener noreferrer">
                  Tarek Masoud, "The Upheavals in Egypt and Tunisia" (2011)
                </a>
              </li>
              <li>
                <a href="https://www.la.utexas.edu/users/chenry/public_html/The%20Arab%20Spring.%20Will%20It%20Lead%20to%20Democratic%20Transitions.pdf" className="hover:text-cardinal transition-colors" target="_blank" rel="noopener noreferrer">
                  Lisa Anderson, "Early Adopters and Neighborhood Effects" (2012)
                </a>
              </li>
              <li>
                <a href="https://www.la.utexas.edu/users/chenry/public_html/The%20Arab%20Spring.%20Will%20It%20Lead%20to%20Democratic%20Transitions.pdf" className="hover:text-cardinal transition-colors" target="_blank" rel="noopener noreferrer">
                  Eva Bellin, "A Modest Transformation" (2012)
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Series Navigation */}
        <WorldStageNav currentSlug="arab-spring-bahrain-silence" />
      </article>
    </Layout>
  );
};

export default ArticleArabSpring;
