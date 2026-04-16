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

/* ── Phase Timeline ── */

const PHASES = [
  {
    id: "phase-1",
    period: "2015–2017",
    title: "JCPOA Implementation",
    summary: "Breakout ~12 months. GDP +12.5%. Oil exports recovered. Real verification architecture.",
    detail: "The agreement extended Iran's breakout timeline to approximately twelve months, established IAEA monitoring that actually worked, and produced measurable economic normalisation. Sunset clauses, narrow scope, and dependence on US political continuity were visible from the start.",
    accent: false,
  },
  {
    id: "phase-2",
    period: "2018–2020",
    title: "Maximum Pressure",
    summary: "Oil exports: 2.5M → 0.4M bpd. Inflation peaked 52%. Rial collapsed ~1,900%.",
    detail: "Iran did not capitulate. Alternative export channels through China partially offset revenue collapse. The IRGC deepened integration into the informal economy. Iran accelerated its nuclear programme precisely because the JCPOA's collapse removed constraints without removing the incentive structure.",
    accent: false,
  },
  {
    id: "phase-3",
    period: "2021–2023",
    title: "Beijing Mediation & Realignment",
    summary: "Saudi-Iran rapprochement brokered by China. Coalition architecture fractures.",
    detail: "The March 2023 rapprochement saw two regional adversaries agree to restoration of relations under Chinese auspices. For Tehran, normalisation fractures the coalition architecture upon which any sustained pressure campaign depends.",
    accent: false,
  },
  {
    id: "phase-4",
    period: "2024–2025",
    title: "Nuclear Threshold",
    summary: "Breakout compressed to 1–3 weeks. 60% enrichment. Latency ≈ deterrence.",
    detail: "Iran enriching to 60% does not mean Iran has a weapon. It means Iran has accumulated the technical knowledge, enrichment infrastructure, and fissile material stockpile to produce weapons-grade uranium on a timeline that traditional diplomatic early-warning mechanisms cannot accommodate.",
    accent: true,
  },
];

const PhaseTimeline = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <div className="my-10">
      <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-cardinal mb-2">
        The Decade in Four Phases
      </h4>
      <p className="text-[10px] text-[hsl(var(--text-muted))] mb-6 font-mono tracking-wider uppercase">
        From diplomatic achievement to nuclear threshold
      </p>
      <div className="space-y-3">
        {PHASES.map((phase) => (
          <button
            key={phase.id}
            onClick={() => setExpanded(expanded === phase.id ? null : phase.id)}
            className={`w-full text-left rounded-lg p-5 transition-all duration-200 ${
              expanded === phase.id
                ? "bg-cardinal/5 border border-cardinal/20"
                : phase.accent
                ? "bg-cardinal/5 border border-cardinal/20"
                : "surface hover:bg-[hsl(var(--surface-raised))]"
            }`}
          >
            <div className="flex items-center gap-3 mb-1">
              <span className="font-mono text-xs text-cardinal tracking-widest">{phase.period}</span>
              <span className="h-px flex-1 bg-[hsl(var(--divider))]" />
              <span className="font-mono text-[10px] text-[hsl(var(--text-muted))] tracking-widest uppercase">
                {expanded === phase.id ? "−" : "+"}
              </span>
            </div>
            <h5 className="font-serif text-lg text-[hsl(var(--text-primary))]">{phase.title}</h5>
            <p className="text-sm text-[hsl(var(--text-muted))] mt-1">{phase.summary}</p>
            {expanded === phase.id && (
              <div className="mt-4 pt-4 border-t border-[hsl(var(--divider))] animate-fadeIn">
                <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">{phase.detail}</p>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

/* ── Proxy Architecture Diagram ── */

const PROXY_DATA = [
  { theatre: "Lebanon", entity: "Hezbollah", funding: "$700M–$1B/yr", capability: "150,000+ rockets, 45,000+ fighters", role: "Forward deterrent against Israel" },
  { theatre: "Syria", entity: "IRGC + Militias", funding: "$30B+ (decade)", capability: "3,000–10,000 advisors, 60,000+ militia", role: "Land corridor to Hezbollah" },
  { theatre: "Yemen", entity: "Houthis", funding: "Training + arms", capability: "1,000+ missile/drone attacks on Saudi/UAE", role: "Asymmetric pressure on Gulf states" },
  { theatre: "Iraq", entity: "Shia Militias", funding: "Arms + advisory", capability: "Multiple PMF factions", role: "Strategic depth and influence" },
];

const ProxyTable = () => (
  <div className="my-10">
    <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-cardinal mb-2">
      The Proxy Architecture
    </h4>
    <p className="text-[10px] text-[hsl(var(--text-muted))] mb-6 font-mono tracking-wider uppercase">
      Twin pillar of a singular strategic doctrine
    </p>
    <div className="space-y-3">
      {PROXY_DATA.map((p) => (
        <div key={p.theatre} className="surface rounded-lg p-5">
          <div className="flex items-center gap-3 mb-3">
            <span className="font-serif text-lg text-[hsl(var(--text-primary))]">{p.theatre}</span>
            <span className="font-mono text-[10px] text-cardinal tracking-widest uppercase">{p.entity}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-sm">
            <div>
              <span className="font-mono text-[9px] text-[hsl(var(--text-muted))] uppercase tracking-widest">Investment</span>
              <p className="text-[hsl(var(--text-secondary))] mt-1">{p.funding}</p>
            </div>
            <div>
              <span className="font-mono text-[9px] text-[hsl(var(--text-muted))] uppercase tracking-widest">Capability</span>
              <p className="text-[hsl(var(--text-secondary))] mt-1">{p.capability}</p>
            </div>
            <div>
              <span className="font-mono text-[9px] text-[hsl(var(--text-muted))] uppercase tracking-widest">Strategic Role</span>
              <p className="text-[hsl(var(--text-secondary))] mt-1">{p.role}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

/* ── Drift Diagram ── */

const DriftDiagram = () => (
  <div className="my-10">
    <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-cardinal mb-2">
      Structural Incompatibility
    </h4>
    <p className="text-[10px] text-[hsl(var(--text-muted))] mb-6 font-mono tracking-wider uppercase">
      Why the framework was designed to defer, not resolve
    </p>
    <div className="space-y-0">
      <FlowBox title="Tehran's Position">
        Sovereign nuclear prerogatives under NPT Article IV. Strategic latency as rational deterrence. Regional proxy architecture as survival doctrine under forty years of siege.
      </FlowBox>
      <FlowArrow />
      <FlowBox title="International Architecture">
        Non-proliferation regime designed for years-long gaps between civilian programmes and weapons capability. Verification tools exist; political institutions capable of acting within a three-week window do not.
      </FlowBox>
      <FlowArrow />
      <FlowBox title="Western Political Cycles">
        Executive agreements vulnerable to successor reversal. Maximum pressure without diplomatic off-ramps. Strategic ambivalence that oscillates between engagement and confrontation.
      </FlowBox>
      <FlowArrow />
      <FlowBox title="Result: Managed Drift" accent>
        No war, no deal, periodic crises managed by mutual deterrence, nuclear capability advancing incrementally, economic stagnation persisting, and the international community treating the status quo as preferable to the alternatives — until an event changes the calculus.
      </FlowBox>
    </div>
  </div>
);

/* ── Main Article ── */

const ArticleIranUS = () => {
  return (
    <Layout>
      <article className="max-w-3xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
        {/* Back link */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text-secondary))] transition-colors mb-12 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span className="font-mono text-xs tracking-wider uppercase">Back</span>
        </Link>

        {/* Header */}
        <header className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="tag-cardinal">The World Stage</span>
            <span className="font-mono text-[10px] text-[hsl(var(--text-muted))] tracking-widest">PART 11</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-[hsl(var(--text-primary))] leading-[1.1] mb-6">
            Structural Incompatibility and Managed Drift in Iran's Nuclear and Regional Trajectory
          </h1>
          <p className="text-lg text-[hsl(var(--text-secondary))] leading-relaxed">
            The framework that governed Iran policy from 2015 to 2025 was designed to defer hard choices rather than resolve them. When the architecture collapsed, there was nothing underneath it: no regional security framework, no alternative enforcement mechanism, no sustained diplomatic infrastructure capable of reconstruction.
          </p>
        </header>

        <div className="h-px bg-[hsl(var(--divider))] mb-12" />

        {/* Introduction */}
        <div className="prose-custom">
          <p>
            There is a special kind of pass for prudence. It accumulates quietly, through reasonable decisions made at reasonable intervals, until you look up and the thing you were trying to prevent has more or less already happened.
          </p>
          <p>
            That is roughly the story of Iran policy from 2015 to 2025. The international community spent a decade not going to war with Iran, and in the process watched Iran compress its nuclear breakout timeline from twelve months to somewhere between one and three weeks. Whether that counts as success depends entirely on what you thought the goal was.
          </p>

          <PullQuote>
            The JCPOA was a real diplomatic achievement, and it was also a document built on the assumption that the political conditions that made it possible would hold. They did not.
          </PullQuote>

          <p>
            This article has a thesis, and it is not a diplomatic one. The framework that governed Iran policy across this decade was designed, structurally, to defer hard choices rather than resolve them. The JCPOA was a real diplomatic achievement, and it was also a document built on the assumption that the political conditions that made it possible would hold. They did not; we can see that now. When the architecture collapsed in 2018, there was nothing underneath it: no regional security framework, no alternative enforcement mechanism, no sustained diplomatic infrastructure capable of reconstruction.
          </p>
          <p>
            What filled that gap was economic warfare, proxy competition, and an Iran that was promised economic support, but if Libya and Iraq were any good examples, there was no question over what would happen.
          </p>
          <p>
            The following analysis is not a critique of bad faith, as most actors involved were operating rationally within their own institutional constraints. Rather, it is an argument regarding the fundamental structural incompatibility between Tehran's interpretation of its sovereign nuclear prerogatives and the non-proliferation architecture of the international community; between the volatile domestic political cycles of Western democracies and the strategic patience of a revolutionary state that has matured under forty years of sustained siege. Moreover, between the legacy frameworks of international law and the modern technical realities, they were never really equipped to manage.
          </p>
        </div>

        {/* Phase Timeline Interactive */}
        <PhaseTimeline />

        {/* Phase I */}
        <SectionLabel number="I" label="JCPOA Implementation · 2015–2017" />
        <div className="prose-custom">
          <p>
            Before subjecting the JCPOA to criticism, it is necessary to acknowledge its successes as well. The agreement extended Iran's breakout timeline to approximately twelve months, established a verification architecture under IAEA monitoring that actually worked, and produced measurable economic normalisation. Iran's GDP grew 12.5% during the implementation phase, oil exports recovered, and there was a brief, real opening in its relationship with the global financial system. Negotiating it required years of multilateral work across the P5+1, and the fact that it happened at all was not obvious.
          </p>
          <p>
            However, its structural vulnerabilities were visible from the beginning, and analysts who flagged them were correct. The sunset clauses meant the agreement was, by design, a delay mechanism rather than a permanent resolution. Its core restrictions were scheduled to expire in phases. The scope was deliberately narrow, and it did not address Iran's ballistic missile programme, its regional proxy architecture, or the domestic political economy that made nuclear latency strategically rational for Tehran regardless of the specificities of any agreement. Furthermore, it depended entirely on U.S. political continuity, which it had no mechanism to guarantee.
          </p>

          <KeyPoint>
            The Obama administration's decision to pursue the JCPOA through executive action rather than Senate ratification was a deliberate response to the political landscape — it was the only path to a deal. But it also meant that any successor administration could dismantle it unilaterally, without treaty obligations, without institutional friction.
          </KeyPoint>

          <p>
            This was a known risk. It was accepted as the price of getting something done. In retrospect, the cost of that calculation was higher than the architects had anticipated.
          </p>
          <p>
            What the JCPOA period also obscured was the degree to which Iran's nuclear and regional strategies operated in parallel, not in sequence. During the same years the agreement was being implemented, Iran was deepening its involvement in Syria, consolidating Houthi military capacity in Yemen, and expanding Shia militia networks across Iraq. The nuclear issue did not have any impact on the regional actions taken by Iran. Any framework that treated the nuclear file as separable from Iran's broader strategic behaviour was going to encounter that problem eventually.
          </p>
        </div>

        {/* Phase II */}
        <SectionLabel number="II" label="Maximum Pressure · 2018–2020" />
        <div className="prose-custom">
          <p>
            The maximum pressure campaign requires evaluation based on its own stated terms. The underlying logic of the strategy was straightforward, yet it frequently oversimplified complex realities. The objective was to impose economic costs so severe that Tehran would be compelled to return to the negotiating table on fundamentally expanded terms encompassing not merely the nuclear file, but the state's ballistic missile programme and regional proxy architecture as well. This explains why the resulting economic dislocation was so profound. Oil exports plummeted from a post-JCPOA zenith of 2.5 million barrels per day to a mere 0.4 million. Inflationary pressures peaked at 52%, while the rial underwent a catastrophic collapse, devaluing from 30,000 to the dollar in 2015 to over 600,000 by 2025, a depreciation of approximately 1,900%. By 2024, the structural toll was such that an estimated 60% of the Iranian population had been pushed below the poverty line.
          </p>

          <PullQuote>
            Iran did not capitulate. What it did instead was adapt with a consistency and creativity that the maximum pressure framework consistently underestimated.
          </PullQuote>

          <p>
            Alternative export channels through third-party intermediaries, primarily to China, partially offset the oil revenue collapse. The IRGC's economic networks, already substantial, deepened their integration into the informal economy. And Iran accelerated its nuclear programme specifically because the collapse of the JCPOA had removed the constraints without removing the incentive structure that made those constraints politically costly to accept in the first place.
          </p>
          <p>
            This is not a surprising pattern. The historical record of comprehensive sanctions regimes in Iraq, Cuba, Russia, and Myanmar has consistently demonstrated that economic pressure, absent a credible and attainable diplomatic off-ramp, produces adaptation and entrenchment rather than capitulation. States do not typically negotiate away core security interests under duress; they find ways to preserve their interests through the duress. Especially when the result of the same hasn't been very optimistic for the nations around it. The promise of economic rehabilitation is understood as a desert mirage that, if one falls into, there is no going back.
          </p>
          <p>
            The Iranian case presents the unique challenge of a state sophisticated enough to develop resilient workaround architectures, sufficiently integrated into the Chinese and Russian economic spheres to partially mitigate Western pressure, and strategically patient enough to endure a decade of economic hardship as a calculated cost of maintaining its deterrent posture.
          </p>
          <p>
            The assassination of Soleimani in January 2020 is a separate case altogether. Whatever one's view of its strategic merits, the targeted killing of a serving senior military commander of a foreign state, absent a declaration of war, under a domestic legal authority of genuinely contested applicability, departed significantly from established norms governing the use of force. The immediate aftermath was more dangerous than is sometimes acknowledged: Iranian retaliatory missile strikes hit US bases in Iraq with precision that, had the operational decisions gone differently, could have produced a very different escalation sequence. The de-escalation that followed was not evidence of effective management; it was evidence that both parties, at that particular moment, chose not to cross a threshold they could both still see. That condition does not hold indefinitely.
          </p>
        </div>

        {/* Proxy Architecture */}
        <SectionLabel number="III" label="The Proxy Architecture" />
        <div className="prose-custom">
          <p>
            A persistent analytical failure in Western discourse is the tendency to treat Tehran's nuclear ambitions and its sprawling proxy network as distinct, disconnected phenomena. In reality, they are twin pillars of a singular, coherent strategic doctrine. This strategy aims to establish sufficient leverage across multiple theatres to render any direct military confrontation prohibitively expensive for conventionally superior adversaries. Far from being irrational, this represents a calculated survival mechanism for a regional power navigating a multigenerational containment effort by a significantly more powerful global alliance.
          </p>
          <p>
            The numbers are instructive here. Iran increased its military expenditure by 36% over the decade from $12.3 billion in 2015 to $16.8 billion in 2025, despite comprehensive sanctions that collapsed its oil revenues and destroyed its currency. That investment was concentrated not in conventional force projection but in asymmetric capability: drone technology now mature enough to be exported to Russia for operational use in Ukraine; missile systems with a range exceeding 2,000 kilometres; and a regional proxy network whose aggregate scale is genuinely extraordinary. In Yemen alone, Houthi forces were trained, equipped, and partially funded by Iran. They conducted over a thousand missile and drone attacks on Saudi Arabia and the UAE across the decade, forcing Riyadh to spend upwards of $100 billion on military countermeasures. The return on Iran's comparatively modest investment in that theatre is difficult to dispute.
          </p>

          <KeyPoint>
            There might be another reason for such an investment, which somehow makes more sense, but appears far less justifiable when viewed through an international lens. Over time, organizations like Houthis and Hezbollah have turned into a type of retirement home for members of the IRGC who no longer have a key role to play in the internal politics — receiving handouts not only to carry out activities but to 'exist' in a form that is no less intense or seen as a position of exile for members who still hold influence in their respective factions.
          </KeyPoint>

          <p>
            The Iranian investment in Syria offers the most transparent illustration of this strategic logic. Estimated at more than $30 billion, this commitment was sustained through a decade of grueling conflict that not only preserved the Assad regime but, more critically, secured the land corridor linking Iran to Hezbollah in Lebanon. This corridor is far more than a symbolic asset; it serves as the essential physical infrastructure for Iran's most formidable forward deterrent against Israel. The deployment of 3,000 to 10,000 IRGC advisors alongside over 60,000 proxy militia fighters was not merely a bid to win a civil war, but a calculated effort to protect a vital strategic investment.
          </p>
          <p>
            The situation in Lebanon presents unique challenges for international law that necessitate direct scrutiny. Hezbollah receives between $700 million and $1 billion in annual funding from Iran, maintaining an arsenal of over 150,000 rockets and a force of more than 45,000 fighters. The organization's multifaceted nature, functioning concurrently as a parliamentary political party, a social welfare organization, a standing military, and a strategic deterrent against Israel, defies standard legal classifications. International legal frameworks designed to categorize state actors, non-state groups, and proxy forces are ill-equipped to address an entity that intentionally inhabits all these roles at once. Iran expertly capitalizes on this conceptual ambiguity, resulting in a chronic enforcement deficit. While the link between Iranian patronage and Hezbollah's operations is evident to observers, it remains sufficiently opaque within legal structures to avoid the typical consequences associated with such clear state sponsorship.
          </p>
        </div>

        {/* Proxy Table */}
        <ProxyTable />

        {/* Phase III */}
        <SectionLabel number="IV" label="Beijing Mediation · 2021–2023" />
        <div className="prose-custom">
          <p>
            The March 2023 rapprochement between Saudi Arabia and Iran, brokered by Beijing, represents one of the decade's most consequential structural shifts, yet it remains curiously underweighted in Western policy discourse relative to its profound implications. This diplomatic realignment saw two regional adversaries, whose protracted proxy competition had fueled the most corrosive conflicts in the Middle East, specifically in Yemen, Syria, and Lebanon, agree to a restoration of relations under the auspices of a state that had previously eschewed the role of an explicit security arbiter in the Gulf. While the surface-level narrative records a diplomatic achievement, the structural interpretation is far more significant.
          </p>

          <PullQuote>
            For Tehran, normalisation is strategically vital because it fractures the coalition architecture upon which any sustained pressure campaign depends.
          </PullQuote>

          <p>
            For China, this mediation served as a potent demonstration of the leverage generated by its Belt and Road-centric Middle Eastern engagement. The 2021 25-year comprehensive cooperation agreement with Tehran, China's position as the destination for approximately 40% of Iranian exports, and its own systemic dependence on Gulf energy have collectively fostered the institutional trust necessary to inhabit a role that Washington has either failed to maintain or deliberately vacated. Beijing's interests here are both structural and enduring: it requires the preservation of regional energy infrastructure and the security of sea lanes, and it possesses a clear strategic incentive to project itself as a stabilizing force in a theater where the American presence has become politically fraught.
          </p>
          <p>
            For Saudi Arabia, normalisation reflected a pragmatic recalibration necessitated by several converging pressures: the staggering fiscal and reputational toll of the Yemen intervention, genuine uncertainty regarding the durability of U.S. security guarantees following a decade of American strategic ambivalence, and the domestic imperatives of Vision 2030, which demands regional stability to attract essential foreign investment. This does not signal an ideological convergence between Riyadh and Tehran — the underlying structural tensions remain unresolved — but rather a recognition that the costs of sustained proxy competition had become increasingly difficult to justify against marginal strategic gains.
          </p>
        </div>

        {/* Internal Dynamics */}
        <SectionLabel number="V" label="Internal Iranian Dynamics" />
        <div className="prose-custom">
          <p>
            Any analysis that treats the Islamic Republic as a unitary rational actor is incomplete. The domestic politics of Iran across this decade reveal a state under genuine, sustained pressure and a political elite that has responded to that pressure consistently by deepening the security apparatus rather than attempting the structural reforms that might address the underlying conditions. Whether this represents ideological commitment, institutional self-interest, or a rational assessment that reform would be destabilising is a question whose answer probably varies by actor.
          </p>
          <p>
            The Mahsa Amini protests in 2022 represented a domestic challenge to the Islamic Republic unprecedented since the 2009 Green Movement. These demonstrations were uniquely threatening due to their wide geographic reach and a demographic makeup that transcended traditional ethnic, class, and sectarian divides. While the state utilized its heavily funded security apparatus to suppress the unrest, the movement exposed critical structural vulnerabilities: a population where 70% are under the age of 30, a society that is digitally integrated yet increasingly alienated from the state's foundational revolutionary ideology, and an economic environment so dire that it drives an annual exodus of 300,000 educated citizens.
          </p>

          <KeyPoint>
            A sanctions-constrained economy that systematically exports its educated and mobile population is not merely managing a humanitarian problem; it is exporting the human capital most capable of building the legitimate economy that would give a future government something to negotiate with.
          </KeyPoint>

          <p>
            The Revolutionary Guards' continued expansion into economic institutions, into the nuclear programme, into political life compounds this by ensuring that the organisations with the greatest institutional stake in the confrontational posture are also the ones accumulating the greatest structural power.
          </p>
          <p>
            The succession question sits over all of this. Khamenei, at 85, with reported medical issues, holds ultimate authority in a system that has not managed a leadership transition under anything resembling the current conditions of sanctions, regional conflict, nuclear brinkmanship, and domestic discontent. The institutional competition between the Revolutionary Guards and the traditional clergy creates genuine uncertainty about whether any successor could consolidate authority quickly enough to make authoritative commitments in a negotiation, and even assuming the political will to negotiate existed, which it currently does not.
          </p>
        </div>

        {/* Nuclear Threshold */}
        <SectionLabel number="VI" label="The Nuclear Threshold" />
        <div className="prose-custom">
          <p>
            The compression of Iran's nuclear breakout timeline from twelve months under the JCPOA to the one-to-three weeks estimated by intelligence assessments in 2025 is the central strategic fact of the decade, and it requires engagement that most mainstream coverage has not given it. Iran enriching uranium to 60% does not mean Iran has a nuclear weapon. What it means is that Iran has accumulated, across a decade of systematic investment, the technical knowledge, the enrichment infrastructure, and the fissile material stockpile to produce weapons-grade uranium on a timeline that traditional diplomatic early-warning mechanisms cannot accommodate.
          </p>

          <PullQuote>
            The NPT framework was designed for a world in which the gap between a declared civilian nuclear programme and weapons capability was measured in years. A world in which that gap is measured in weeks is qualitatively different.
          </PullQuote>

          <p>
            This matters for international law and non-proliferation architecture in ways that go beyond the immediate Iran problem. The NPT framework, and the IAEA monitoring system built on top of it, was designed for a world in which the gap between a declared civilian nuclear programme and weapons capability was measured in years, enough time for diplomatic and political intervention to operate within its natural timescales. A world in which that gap is measured in weeks is qualitatively different, and the legal and institutional architecture has not kept pace with the technical reality. The verification tools exist. The political institutions capable of acting on verification findings within a three-week window largely do not.
          </p>
          <p>
            Iran has maintained, consistently, that its programme is civilian and protected under Article IV of the NPT. The strategic ambiguity is deliberate. Nuclear latency — maintaining a threshold capability without crossing the formal line of weaponisation — is a known doctrine for achieving deterrent effect without incurring the full political and security costs of declared nuclear status. North Korea pursued weaponisation and now operates as a nuclear-armed state outside the NPT framework. Iran, through 2025, has pursued latency and retained its formal NPT membership and IAEA relationship, however strained. The distinction is legally significant and strategically diminishing: as the technical gap between latency and capability continues to close, the deterrent effect of the latent capability begins to approximate the deterrent effect of the declared one.
          </p>
          <p>
            To put it in different words, the question is whether the international community is ready to trust Iran with nuclear energy? Because even if uranium enrichment is stopped, the relevant knowledge can only be suppressed for a small time. Thus, the only way to dissolve this solution was through trust or war. We already have an answer that seemed more feasible to the USA.
          </p>
        </div>

        {/* Drift Diagram */}
        <DriftDiagram />

        {/* Way Forward */}
        <SectionLabel number="VII" label="Way Forward" />
        <div className="prose-custom">
          <p>
            The most probable trajectory for the Iran file over the next five years is continued brinkmanship: no war, no deal, periodic crises managed by mutual deterrence, nuclear capability advancing incrementally, economic stagnation persisting inside Iran, and the international community continuing to treat the status quo as preferable to the alternatives — until an event changes the calculus. This is assigned a 40% probability in serious scenario analyses, and it is probably the right number. The 25% military conflict scenario — an Israeli strike, a US-Iran confrontation, a regional war engaging the full proxy network — is not melodrama; it is the residual risk of a situation in which the deterrence architecture is degrading faster than the diplomatic architecture is rebuilding.
          </p>
          <p>
            The variables that will govern which trajectory materialises are identifiable: the pace of enrichment advancement; what the Khamenei succession produces; whether Chinese mediation has the depth and commitment to sustain pressure toward de-escalation; the direction of US Iran policy; and the capacity of the Israeli security establishment to absorb the strategic risk of a nuclear-threshold Iran versus the operational, regional, and alliance risk of a strike and its consequences. None of these variables is currently pointing toward resolution. Several are pointing toward a narrowing window.
          </p>

          <PullQuote>
            Diplomatic agreements built on domestic executive authority rather than treaty ratification are inherently fragile in systems where that authority changes hands.
          </PullQuote>

          <p>
            What the decade from 2015 to 2025 teaches, across the particular details of the Iran case, is a set of structural lessons that apply well beyond it. Diplomatic agreements built on domestic executive authority rather than treaty ratification are inherently fragile in systems where that authority changes hands. Economic coercion that does not include a reachable diplomatic endpoint adapts, not concedes. States under sustained existential pressure — and Iran has perceived the international pressure it faces as existential for four decades — do not typically bargain away core security assets; they find ways to protect them within the pressure. And international legal frameworks designed for a world of sovereign states and slow-moving programmes are inadequate for managing a world of proxies, latency strategies, and breakout timelines measured in weeks.
          </p>
          <p>
            None of this is an argument for fatalism or for accommodation. It is an argument for precision about what the situation actually is. The Iran of 2025 is not the Iran of 2015; it is a state that has survived a decade of maximum economic pressure, preserved its regional proxy architecture, advanced its nuclear programme to threshold status, and watched the regional coalition against it fracture. Any strategy for the next phase of this confrontation that does not account for those changed conditions is not a strategy; it is a wish. The decade of managed drift has left less room for the kind of gradualism that might have worked in 2016. That is the cost the international community has paid for ten years of deferring the choices it did not want to make.
          </p>
        </div>

        {/* Sources */}
        <div className="mt-16 pt-8 border-t border-[hsl(var(--divider))]">
          <h3 className="font-mono text-[10px] uppercase tracking-[0.25em] text-[hsl(var(--text-muted))] mb-6">
            Sources & References
          </h3>
          <div className="space-y-2 text-sm text-[hsl(var(--text-muted))] leading-relaxed">
            <p>Joint Comprehensive Plan of Action (JCPOA), 14 July 2015</p>
            <p>Treaty on the Non-Proliferation of Nuclear Weapons (NPT), Article IV</p>
            <p>IAEA Board of Governors Reports on Iran's Nuclear Programme, 2015–2025</p>
            <p>The National Security Strategy of the United States, September 2002</p>
            <p>UN Security Council Resolution 2231 (2015)</p>
            <p>Saudi-Iran Normalisation Agreement, Beijing, March 2023</p>
            <p>Bahrain Independent Commission of Inquiry Report (BICI), 2011</p>
          </div>
        </div>

        {/* Series Nav */}
        <WorldStageNav currentSlug="iran-us-conflict" />
      </article>
    </Layout>
  );
};

export default ArticleIranUS;
