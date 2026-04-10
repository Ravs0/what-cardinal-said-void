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

const SourceRef = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[hsl(var(--text-muted))] text-xs font-mono">{children}</span>
);

/* ── Three Failures Comparison ── */

const FAILURE_DATA = [
  {
    case: "Libya",
    icon: "🇱🇾",
    problem: "Scope of authorization",
    mechanism: "Res. 1973 authorized force — campaign exceeded perceived mandate",
    damage: "Trust in future authorizations collapsed",
    key: "Authorization existed but was politically elastic in implementation",
  },
  {
    case: "Syria",
    icon: "🇸🇾",
    problem: "Paralysis despite engagement",
    mechanism: "Multiple vetoes blocked coercive action despite documented mass violence",
    damage: "Engagement without consequence became normalized",
    key: "Council remained present but could not translate knowledge into action",
  },
  {
    case: "Yemen",
    icon: "🇾🇪",
    problem: "Formal legality without effect",
    mechanism: "Res. 2216 + invitation + mediation coexisted with expanding war",
    damage: "Legal framework became detached from conflict reality",
    key: "Formal legality and UN process persisted alongside humanitarian collapse",
  },
];

const ThreeFailuresTable = () => {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div className="my-10">
      <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-cardinal mb-2">
        Three Distinct Institutional Failures
      </h4>
      <p className="text-[10px] text-[hsl(var(--text-muted))] mb-6 font-mono tracking-wider uppercase">
        Each case damaged a different legal pathway through the Council system
      </p>
      <div className="space-y-3">
        {FAILURE_DATA.map((f, i) => (
          <button
            key={f.case}
            onClick={() => setExpanded(expanded === i ? null : i)}
            className={`w-full text-left rounded-lg p-5 transition-all duration-200 ${
              expanded === i
                ? "bg-cardinal/5 border border-cardinal/20"
                : "surface hover:bg-[hsl(var(--surface-raised))]"
            }`}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-xl">{f.icon}</span>
              <h5 className="font-serif text-lg text-[hsl(var(--text-primary))]">{f.case}</h5>
              <span className="ml-auto font-mono text-[10px] text-cardinal tracking-widest uppercase">{f.problem}</span>
            </div>
            {expanded === i && (
              <div className="mt-3 space-y-3 animate-fadeIn">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <span className="font-mono text-[9px] text-[hsl(var(--text-muted))] uppercase tracking-widest">Mechanism</span>
                    <p className="text-sm text-[hsl(var(--text-secondary))] mt-1">{f.mechanism}</p>
                  </div>
                  <div>
                    <span className="font-mono text-[9px] text-[hsl(var(--text-muted))] uppercase tracking-widest">Institutional Damage</span>
                    <p className="text-sm text-[hsl(var(--text-secondary))] mt-1">{f.damage}</p>
                  </div>
                </div>
                <div className="pt-3 border-t border-[hsl(var(--divider))]">
                  <span className="font-mono text-[9px] text-cardinal uppercase tracking-widest">Core Lesson</span>
                  <p className="text-sm text-[hsl(var(--text-primary))] mt-1 font-medium">{f.key}</p>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};

/* ── Erosion Diagram ── */

const ErosionDiagram = () => (
  <div className="my-10">
    <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-cardinal mb-2">
      Cumulative Erosion of Collective Security
    </h4>
    <p className="text-[10px] text-[hsl(var(--text-muted))] mb-6 font-mono tracking-wider uppercase">
      From functional institution to managed irrelevance
    </p>
    <div className="space-y-0">
      <FlowBox title="Post-Cold War Baseline">
        Security Council as the principal authority for collective enforcement. Authorization precedes force. Sanctions enforce compliance.
      </FlowBox>
      <FlowArrow />
      <FlowBox title="Libya 2011 — Authorization Distrusted">
        Council authorized force. Implementation exceeded perceived mandate. States concluded that narrow mandates could be used for broad political ends.
      </FlowBox>
      <FlowArrow />
      <FlowBox title="Syria 2012–2014 — Engagement Without Action">
        Council fully seized of the file. Vetoes blocked coercive response. Presence without consequence became the norm.
      </FlowBox>
      <FlowArrow />
      <FlowBox title="Yemen 2015+ — Legality Without Effect">
        Formal legal framework intact. Invitation, sanctions, mediation all present. War expanded while the legal frame remained static.
      </FlowBox>
      <FlowArrow />
      <FlowBox title="Cumulative Result" accent>
        No major institutional route through the Council system remained fully dependable. Authorization was suspect, engagement was compatible with impotence, and formal legality was compatible with prolonged devastation.
      </FlowBox>
    </div>
  </div>
);

/* ── Main Article ── */

const ArticleArabSpringII = () => {
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
            <span className="font-mono text-[10px] text-[hsl(var(--text-muted))] tracking-widest">PART 10</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-[hsl(var(--text-primary))] leading-[1.1] mb-6">
            Libya, Syria, Yemen, and the Collapse of Collective Security
          </h1>
          <p className="text-lg text-[hsl(var(--text-secondary))] leading-relaxed">
            The later Arab uprisings did not produce one generic institutional failure. Libya undermined trust in authorization. Syria normalized paralysis. Yemen showed that formal legality could coexist with prolonged devastation. Together, they left no major pathway through the Council system fully dependable.
          </p>
        </header>

        <div className="h-px bg-[hsl(var(--divider))] mb-12" />

        {/* Introduction */}
        <div className="prose-custom">
          <p>
            The later Arab uprisings are often described as if they produced one long institutional failure. Libya, Syria, and Yemen are placed in a single line and treated as successive stages in the breakdown of collective security in the region. But is that the case?
          </p>
          <p>
            The chronology might be correct to understand simply, but the legal edge around it says otherwise. The three cases raised different questions in the region, and the damage to the Charter system was much different. In Libya, the controversy turned on the scope of an authorization that plainly existed. In Syria, the central issue was the inability of the Security Council to move from recognition of mass violence to common coercive action. In Yemen, the problem lay in the interaction between intervention by invitation, a one-sided Council framework, and a war that kept expanding while the legal frame remained formally intact.
          </p>

          <PullQuote>
            If these cases are folded into one generic narrative of failure, the effect they had on the institutional structure can hardly be explained.
          </PullQuote>

          <p>
            The events in Bahrain had already shown that the first phase of the Arab Spring would not be met by a common political response. The second half of the events had something entirely else in their bag. It undermined confidence in the main legal pathways through which the Security Council might still matter. Libya made states doubt the practical limits of authorization. Syria made long-term paralysis look normal. Yemen showed that formal legality and a standing UN process could coexist with prolonged regional war and deep humanitarian collapse.
          </p>
          <p>
            By the middle of the decade, the damage no longer concerned one mishandled crisis or one overextended resolution. It concerned the standing of the institution itself and how effective it was in the case of a large regional war breaking out. When we look at today's situation, it is evident that things haven't been on the right way since long time. Let's take a look at each of these cases one by one to get a better idea of how things break and when they do, how they affect the foundation of an institution in the long run.
          </p>
        </div>

        {/* Three Failures Interactive */}
        <ThreeFailuresTable />

        {/* I. Libya */}
        <SectionLabel number="I" label="Authorization and Its Limits" />
        <div className="prose-custom">
          <p>
            Libya entered the Security Council quickly. On 26 February 2011, the Council adopted resolution 1970, condemned the violence, imposed sanctions, and referred the situation to the International Criminal Court. On 17 March, it adopted resolution 1973, authorizing "all necessary measures" to protect civilians and civilian populated areas under threat of attack, while excluding any "foreign occupation force of any form" on Libyan territory.
          </p>

          <KeyPoint>
            The Council did authorize force, and Libya was not another Kosovo. Once that much is settled, the real controversy can be stated more precisely: it was not whether force had been authorized, nor whether civilians were in danger in March 2011. It was whether the military campaign that followed remained within the mandate conferred by 1973.
          </KeyPoint>

          <p>
            States supporting the intervention argued that civilian protection could not be separated from the destruction of the military means through which attacks were being carried out. On that reading, the weakening of the Qadhafi regime was not a separate political project but an operational consequence of enforcing the resolution. States critical of the campaign argued the opposite. In their view, the implementation of 1973 moved beyond protection and became inseparable from the overthrow of the regime.
          </p>
          <p>
            This was the central legal argument, and it shaped the later politics of the case far more than the resolution's opening language did. Akande's early analysis already pointed to serious questions about whether parts of the campaign remained inside the mandate. Later work by Teimouri and Subedi treated Libya as the point at which the Responsibility to Protect lost credibility because a resolution framed in protective terms had been carried out in a way many states saw as functionally aligned with regime change.
          </p>

          <PullQuote>
            Libya was not simply a case in which the Council acted. It was a case in which the Council acted and then lost political control over the meaning of its own authorization.
          </PullQuote>

          <p>
            One need not accept every criticism in its strongest form to see the institutional consequence. Trust in future authorizations fell sharply. Several governments concluded that a mandate carefully drafted in narrow terms could still be used in politically wider ways once operations began. Later crises did not encounter 1973 as a neutral precedent. They encountered it together with the belief that the line between civilian protection and political transformation had proved much less stable in practice than the resolution's text had suggested.
          </p>
        </div>

        {/* II. Syria */}
        <SectionLabel number="II" label="The Case of Syria" />
        <div className="prose-custom">
          <p>
            Syria presented a different problem from the outset. The issue was not the scope of an authorization, because no comparable authorization existed. Nor was the issue whether the Council knew enough about the scale of the violence. It knew a great deal, and very early. The question was whether a Council fully seized of a file, and repeatedly engaged with it, could still fail to produce a common coercive response.
          </p>
          <p>
            The early vetoes fixed the structure of the dispute. On 4 February 2012, Russia and China vetoed a draft resolution supporting the Arab League's plan for political transition. The draft had been supported by the other thirteen Council members. The Russian explanation is important because it links Syria directly to the afterlife of Libya. Moscow argued that the text was unbalanced and too open to the politics of regime change. In other words, distrust generated by Libya had already entered the Syrian file.
          </p>

          <KeyPoint>
            The controversy was no longer only over Syria itself. It also concerned the use that might later be made of any Council text framed in sufficiently strong terms.
          </KeyPoint>

          <p>
            The Council did not remain wholly silent. It created the UN Supervision Mission in Syria in 2012. After the Ghouta chemical attack, it adopted resolution 2118 on 27 September 2013, requiring the elimination of Syria's chemical weapons programme and linking the file to the Chemical Weapons Convention. It later acted on humanitarian access. But these measures also revealed the limit of what the Council could still do. An agreement was possible around disarmament and some sectoral issues. It was not possible to address the coercive political measures that would have addressed the structure of the war itself.
          </p>
          <p>
            The same limit appeared on accountability. In May 2014, a draft resolution referring the Syrian situation to the ICC received thirteen votes in favour and two against, then failed because Russia and China vetoed it. The legal difficulty here is narrower than it is sometimes made to seem. Syria did not prove that the Council had no legal tools. It proved that the veto structure could block the use of those tools even where mass violence had already been widely documented.
          </p>

          <PullQuote>
            Syria became the clearest modern example of a Council remaining faithful to its own formal rules while failing, in practical terms, to perform the protective function often attributed to collective security.
          </PullQuote>

          <p>
            Webb's analysis is useful precisely because it resists easy moralism. The Charter system contains no rule that requires permanent members to abstain from using the veto in atrocity situations. Syria, therefore, demonstrated that the system could remain deeply engaged and still be unable to act in a way that changed the course of events. Libya damaged trust in authorization because the mandate appeared politically elastic. Syria damaged trust in engagement itself. Presence without consequence lost its reassuring force.
          </p>
        </div>

        {/* III. Yemen */}
        <SectionLabel number="III" label="Yemen" />
        <div className="prose-custom">
          <p>
            Yemen raised yet another legal problem. The war that widened in 2015 did not begin as a civilian-protection operation and did not turn primarily on the veto. It developed out of the failed transition after 2011, the Houthi advance, the collapse of the post-Saleh political order, and the intervention of a Saudi-led coalition acting in support of the internationally recognized government of President Hadi. In formal legal terms, the coalition relied on invitation.
          </p>
          <p>
            The central Security Council text was resolution 2216, adopted on 14 April 2015. It demanded that the Houthis withdraw from areas seized during the conflict, relinquish arms taken from state institutions, cease unilateral actions, and comply with earlier resolutions. It also expanded targeted sanctions. The resolution did not authorize the coalition intervention in the self-contained manner of 1973, but it did place the Council's authority behind a framework that cast one side as the principal non-compliant actor and treated restoration of the recognized political order as the premise of settlement.
          </p>

          <KeyPoint>
            It is too simple to say only that the coalition intervened at the invitation of the Yemeni government and to stop there. The more difficult question is what followed once the invitation, sanctions, Chapter VII language, and mediation practice were combined within one institutional structure.
          </KeyPoint>

          <p>
            The settlement frame built around 2216 remained highly asymmetric even as the war grew longer, more regional, and less susceptible to restorationist assumptions. Later writing on Yemen has captured this as the securitisation of peacemaking. The legal and diplomatic architecture remained in place, but the realities it purported to govern moved steadily away from it.
          </p>
          <p>
            That gap widened as the humanitarian crisis deepened. The coalition campaign expanded, infrastructure collapsed, and UN assessments described one of the gravest humanitarian crises in the world. Yet the Council's own central framework did not substantially adapt. The legal form remained available even as the political basis for that form weakened. Yemen, therefore, revealed a third institutional failure, different from both Libya and Syria. The problem was not that authorization was politically distrusted, nor that the Council could not act at all. The problem was that formal legality and a continuing UN process could coexist with a war whose human cost kept rising and whose diplomatic framework had become increasingly detached from the conflict's actual shape.
          </p>
        </div>

        {/* IV. Three Distinct Failures */}
        <SectionLabel number="IV" label="Three Distinct Failures" />
        <div className="prose-custom">
          <p>
            If Libya, Syria, and Yemen are now placed side by side, the breakdown in collective security looks less like one large institutional collapse and more like a sequence in which each main legal pathway was damaged differently. Libya undermined confidence in authorization because the implementation of 1973 was later read as wider than the mandate's wording. Syria normalized paralysis because the Council fully engaged with a file that still failed to produce common coercive action. Yemen demonstrated that formal legality, sanctions, recognition, and mediation could continue while a regional war deepened and the humanitarian situation worsened.
          </p>
        </div>

        {/* Erosion Diagram */}
        <ErosionDiagram />

        <div className="prose-custom">
          <PullQuote>
            A state reading these three files together would not conclude that international law had vanished. It would conclude something more limited and more troubling: that no major institutional route through the Council system remained fully dependable.
          </PullQuote>

          <p>
            Authorization had become politically suspect. Engagement had become compatible with impotence. Formal legality had become compatible with prolonged devastation.
          </p>
        </div>

        {/* V. Iran */}
        <SectionLabel number="V" label="Implications for Iran" />
        <div className="prose-custom">
          <p>
            Iran stood in a different relation to each case. Libya mattered to Tehran mainly as a precedent. Syria was a central arena of Iranian strategy. Yemen became part of the wider regional conflict in which Iran was repeatedly accused of supporting the Houthis and providing them with arms and political support.
          </p>
          <p>
            By the time the nuclear file returned to the foreground in a more acute form, the surrounding legal environment had already been altered by these experiences. Distrust in mandates after Libya, distrust in Council efficacy after Syria, and distrust in formal legal cover after Yemen all formed part of the background against which later disputes over sanctions, compliance, covert action, targeted killing, and direct force were read. That is why these three files belong directly to the prehistory of the later Iran-centered crisis.
          </p>
        </div>

        {/* Conclusion */}
        <SectionLabel number="VI" label="Conclusion" />
        <div className="prose-custom">
          <p>
            Looking back at the sequence of events just through the lens of one country, it is very easy to spot how slowly the UN not only lost its relevance but also became an institution that made wrong choices at the wrong time, did not use its power when it should have, and when it did, things went awry really quickly. Whether you consider it a structural problem from the beginning or something turned into such over time is a matter of entirely different debate, but if you want relevance of the UN today — there were no expectant gazes looking towards it to stop the recent Iran conflict. That is enough of an explanation.
          </p>
        </div>

        {/* Sources */}
        <SectionLabel number="—" label="Sources" />
        <div className="space-y-2 text-sm text-[hsl(var(--text-muted))]">
          <p><SourceRef>UN Security Council Resolution 1970 (2011)</SourceRef></p>
          <p><SourceRef>UN Security Council Resolution 1973 (2011)</SourceRef></p>
          <p><SourceRef>UN Security Council Resolution 2118 (2013)</SourceRef></p>
          <p><SourceRef>UN Security Council Resolution 2216 (2015)</SourceRef></p>
          <p><SourceRef>Dapo Akande, "What Does UNSC Resolution 1973 Permit?" (EJIL: Talk!, 2011)</SourceRef></p>
          <p><SourceRef>Teimouri & Subedi, "Responsibility to Protect and the Libya Intervention" (2018)</SourceRef></p>
          <p><SourceRef>Philippa Webb, "Deadlock or Restraint? The Security Council Veto" (2014)</SourceRef></p>
        </div>

        {/* Series nav */}
        <WorldStageNav currentSlug="arab-spring-libya-syria-yemen" />
      </article>
    </Layout>
  );
};

export default ArticleArabSpringII;
