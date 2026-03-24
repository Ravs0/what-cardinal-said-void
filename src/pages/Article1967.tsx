import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Layout from "@/components/layout/Layout";
import WorldStageNav from "@/components/WorldStageNav";

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

const TimelineItem = ({ year, event }: { year: string; event: string }) => (
  <div className="flex gap-4 items-start">
    <span className="font-mono text-xs text-cardinal shrink-0 w-12 pt-1">{year}</span>
    <div className="pb-6 border-l border-cardinal/20 pl-4 relative">
      <span className="absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full bg-cardinal/40 border-2 border-[hsl(var(--surface))]" />
      <p className="text-sm text-[hsl(var(--text-secondary))] leading-relaxed">{event}</p>
    </div>
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

const Article1967 = () => {
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
            <span className="tag">Part 3</span>
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[hsl(var(--text-primary))] leading-tight tracking-tight mb-6">
            1967, 1973, and the Legal Architecture of Occupation
          </h1>
          <p className="text-lg text-[hsl(var(--text-secondary))] leading-relaxed max-w-2xl mb-4">
            How occupation, anti-conquest, and Security Council management became the region's governing legal form.
          </p>
          <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.15em] text-[hsl(var(--text-muted))]">
            <span>March 2026</span>
            <span className="w-1 h-1 rounded-full bg-[hsl(var(--text-muted))]" />
            <span>35 min read</span>
          </div>
        </header>

        {/* Body */}
        <div className="article-body">

          {/* Opening */}
          <p>
            In the history of the modern Middle East, 1967 is often told as a military story: a short war, a dramatic battlefield reversal, a map redrawn in six days. A small war but consequential nonetheless, as any reading on the subject mentions.
          </p>

          <KeyPoint>
            But from a legal point of view, the part where we should focus is how it changed the nature of regional disputes and the impact it had on a wider scale, as it started the trend where the rights of people affected in such conflicts were considered a question of humanitarian aid. Although in reality, the right to state and the consequent rights from that statehood should have been the focal point. The deviation from the first principles to their derivative has been dictated by international law since then; its results have been ambiguous.
          </KeyPoint>

          <p>
            After 1967, another change that took place, the central legal question was no longer only whether force had been used lawfully. It was whether territory taken in war could be held, administered, negotiated over, and politically transformed without changing the basic rule that territory cannot lawfully be acquired by force.
          </p>

          <PullQuote>
            That is why 1967 and 1973 should be read together. The first war created the legal structure of occupation, withdrawal, and anti-conquest. The second did not replace that framework. It converted it into a supervised diplomatic process.
          </PullQuote>

          <p>
            Through Resolution 338, Resolution 339, Resolution 340, UN observers, UNEF II, and later disengagement agreements. In that sense, 1973 stabilized the post-1967 order without resolving it.
          </p>

          {/* Timeline */}
          <SectionLabel number="00" label="The Sequence" />

          <div className="my-8">
            <TimelineItem year="1948" event="Armistice order established. Refugee question left open. Jerusalem disputed. Borders militarized, not normalized." />
            <TimelineItem year="1956" event="Suez crisis shows the region can move from war to ceasefire and peacekeeping without producing a settlement." />
            <TimelineItem year="1967" event="UNEF withdrawal crisis, closure of the Straits of Tiran, Egyptian-Jordanian defence pact, rapid mobilization. The earlier order fractures." />
            <TimelineItem year="1967" event="June: Security Council Resolutions 233-237. November: Resolution 242 adopted." />
            <TimelineItem year="1973" event="October War. Resolutions 338, 339, 340. UNEF II deployed. Disengagement begins." />
          </div>

          <p>
            The historical sequence matters. The post-1948 order was never a final settlement. It was an armistice order. The refugee question remained open. Jerusalem remained disputed. Borders were militarized rather than normalized. The 1956 Suez crisis had shown that the region could move from war to ceasefire and even to peacekeeping without producing a settlement. By spring 1967, the structure was already brittle. The UNEF withdrawal crisis, Egypt's closure of the Straits of Tiran, the Egyptian-Jordanian defence pact, and the rapid mobilization of forces did not create the conflict from nothing. They exposed how much of the earlier order rested on deterrence, temporary arrangements, and unresolved claims.
          </p>

          {/* Section 1 */}
          <SectionLabel number="01" label="The Immediate Response" />

          <h2>When the Security Council Moved from Battlefield to Territory</h2>

          <p>
            When hostilities began on 5 June 1967, the Security Council responded first in the language of immediate crisis management. Resolutions 233, 234, 235, and 236 demanded a ceasefire. Resolution 237 turned quickly to civilians, prisoners of war, and displaced persons. The General Assembly's emergency special session addressed relief and Jerusalem. Even before the diplomatic architecture was complete, the institutional response had already shifted from battlefield events to territorial and civilian consequences. That shift is the real beginning of the post-1967 legal order.
          </p>

          {/* Section 2 */}
          <SectionLabel number="02" label="The Central Text" />

          <h2>Resolution 242 and the Ambiguity That Governs</h2>

          <p>
            Its central text is Resolution 242, adopted on 22 November 1967. Few resolutions have generated more arguments with less precision in public debate. The dispute is usually reduced to one phrase: withdrawal "from territories occupied" versus withdrawal from "the territories occupied." That ambiguity is real, and Toribio de Valdés showed long ago that the English and French texts cannot simply be collapsed into one easy formula. But the ambiguity should not be overstated.
          </p>

          <KeyPoint>
            The resolution opens by emphasizing the inadmissibility of the acquisition of territory by war, and later, international law made that point even clearer in General Assembly Resolution 2625. As John McHugo has argued, 242 is best read not as a conquest-licensing instrument, but as a negotiated framework linking withdrawal, peace, and secure boundaries within a legal order that rejects territorial acquisition by force.
          </KeyPoint>

          {/* Section 3 */}
          <SectionLabel number="03" label="The Legal Condition" />

          <h2>Occupation as the New Grammar</h2>

          <p>
            That point matters because the war did more than produce a diplomatic text. It created a legal condition i.e. occupation. From June 1967 onward, the region's central legal grammar became that of occupied territory, civilian administration, and the limits of military control. The core rules were not invented in the Middle East. They came from the Hague Regulations, especially Articles 42 and 43, and from the wider law of occupation later reflected in the Fourth Geneva Convention. The key ideas are familiar but decisive that occupation is a matter of effective control. It does not transfer sovereignty, and it is temporary in law even when it becomes durable in fact.
          </p>

          <PullQuote>
            If occupation is supposed to be temporary, what happens when it becomes entrenched?
          </PullQuote>

          <p>
            That final tension became the defining problem. Adam Roberts remains the indispensable guide here. His point was not simply that the occupation was long. It was that the law of occupation could continue to apply formally even as the political reality ceased to resemble the short transitional period the law appeared to assume. Later scholarship by writers such as Eyal Benvenisti, Orna Ben-Naftali, Aeyal Gross, and Keren Michaeli, and more recently Marko Milanovic, takes that tension further. But the point relevant to 1967 is more modest and more important: once occupation became the central legal category, the conflict ceased to be only about war termination and became about the legality of territorial administration after the war.
          </p>

          {/* Section 4 */}
          <SectionLabel number="04" label="Jerusalem" />

          <h2>The Sharpest Edge</h2>

          <p>
            Jerusalem sharpened the problem almost immediately. The General Assembly's July 1967 resolutions deemed measures altering the city's status invalid and incapable of altering its international position. That move prefigured later doctrine. By the time of the ICJ's Wall Advisory Opinion, the Court could treat the occupied Palestinian territory, including East Jerusalem, as a legal category grounded in the post-1967 framework rather than as a matter of mere diplomatic preference.
          </p>

          {/* Flowchart */}
          <SectionLabel number="—" label="The Legal Architecture" />

          <div className="my-10 space-y-0">
            <FlowBox title="1967: The Six-Day War" accent>
              Territory captured. Ceasefire imposed (SC Res. 233-237). Civilian and territorial questions immediately raised.
            </FlowBox>
            <FlowArrow />
            <FlowBox title="Resolution 242 (Nov 1967)">
              Anti-conquest principle stated. Withdrawal linked to peace and secure boundaries. Ambiguity in scope preserved deliberately.
            </FlowBox>
            <FlowArrow />
            <FlowBox title="Legal Condition: Occupation">
              Hague Regulations (Art. 42-43) and Fourth Geneva Convention apply. Sovereignty not transferred. Temporariness assumed by law, defied by reality.
            </FlowBox>
            <FlowArrow />
            <FlowBox title="1973: October War">
              Egypt and Syria reopen the territorial question. Military reversal does not produce a new legal framework.
            </FlowBox>
            <FlowArrow />
            <FlowBox title="Resolutions 338 / 339 / 340">
              242 made operational. Ceasefire monitored. UNEF II deployed. Disengagement agreements negotiated.
            </FlowBox>
            <FlowArrow />
            <FlowBox title="Result: Managed Illegality" accent>
              Open conquest rejected. Occupation governed by law. But the underlying territorial condition remains unresolved. Law manages without settling.
            </FlowBox>
          </div>

          {/* Section 5 */}
          <SectionLabel number="05" label="1973" />

          <h2>The War That Made the Framework Operational</h2>

          <p>
            1973 is sometimes treated as a distinct episode because the military narrative differs. Egypt and Syria attacked on 6 October 1973, and the war reopened the territorial issue under much less favorable assumptions for Israel than had prevailed immediately after 1967. But legally, the war did not create a new framework. It made the old one operational.
          </p>

          <KeyPoint>
            Resolution 338 did three things at once: it demanded a ceasefire, required implementation of 242 "in all of its parts," and called for negotiations aimed at a just and durable peace. Resolution 339 reinforced the ceasefire and pushed observers into the field. Resolution 340 created UNEF II, demanded a return to the positions held at the moment of the original ceasefire, and strengthened the machinery of supervision.
          </KeyPoint>

          <p>
            That sequence is easy to underestimate because it sounds procedural. In fact, it was constitutional in effect. If 242 supplied the substantive framework, 338 turned that framework into a process. War no longer led directly either to a decisive settlement or to simple restoration of the prior position. It now led to a structure of monitored ceasefire, diplomatic mediation, peacekeeping, and disengagement. <SourceRef>The UN Yearbook accounts for 1973 and 1974 show this clearly.</SourceRef> The conflict was being managed through law without being resolved by it.
          </p>

          {/* Section 6 */}
          <SectionLabel number="06" label="The Structural Result" />

          <h2>Law as Management, Not Settlement</h2>

          <p>
            This is the point at which the regional legal order begins to look structurally familiar to the present. International law was not absent. On the contrary, it was everywhere. The rule against the acquisition of territory by force was stated in strong terms. Occupational law supplied a vocabulary of duties and limits. The Security Council produced operative texts. Observers and peacekeepers were deployed.
          </p>

          <PullQuote>
            Yet the existence of all this law did not terminate the underlying territorial condition. It named the framework, disciplined parts of it, and organized diplomacy around it. But it also normalized a condition of unresolved legality.
          </PullQuote>

          <p>
            That distinction helps explain why the later politics of the region often turn not on the absence of law, but on the perception that law operates as management rather than settlement. In one sense, 1967-1973 was a success for the Charter system. Open conquest was not recognized as a lawful title. A settlement framework was articulated. War was repeatedly pushed back into diplomacy. But in another sense, it was also the beginning of a long crisis. The law of occupation, precisely because it was designed as a temporary regime, became the language through which a non-temporary condition could be governed.
          </p>

          {/* Section 7 */}
          <SectionLabel number="07" label="Broader Consequences" />

          <h2>Palestine, Self-Determination, and the Regional Legacy</h2>

          <p>
            That is also where the broader regional consequences begin. The Palestinian question increasingly moved from a refugee problem within an armistice order to a question of self-determination under occupation. The General Assembly resolutions of 1974 and 1975 and the later institutional recognition of Palestinian representation reflected that shift. At the same time, the broader Middle East absorbed a harder lesson: a legal order could condemn conquest, regulate occupation, and still leave unlawful territorial control in place for decades.
          </p>

          <p>
            For Iran, that history should be handled carefully. 1967 and 1973 did not mechanically produce later Iranian policy. But they helped create the legal and political atmosphere in which regional claims of selective enforcement became more plausible and more potent. Once Palestine and occupation became the region's central anti-colonial legal issue, any state seeking to position itself against the post-war order could point to a visible discrepancy between principle and implementation. That is a legacy claim, not a simple line of causation.
          </p>

          {/* Section 8 */}
          <SectionLabel number="08" label="Why It Matters" />

          <h2>The Moment the Legal Order Changed</h2>

          <KeyPoint>
            The strongest way to understand Post 3, then, is not as a military interlude between Suez and later crises. It is at this moment that the Middle East's legal order changed. The disputes of the 1950s were about intervention, access, and sovereignty under pressure. The disputes after 1967 were about occupation, territorial control, legal temporality, and the management of illegality. 1973 did not undo that shift. It made it durable.
          </KeyPoint>

          <p>From here, the story moves naturally to 1967 and 1973. Once these sovereignty crises pass, the next stage of the regional legal order is shaped less by nationalization and more by occupation, territorial control, Security Council diplomacy, and the long afterlife of unresolved war.</p>

          <div className="my-10 surface rounded-lg p-6">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.2em] text-cardinal mb-2">The shift in three lines</h4>
            <ul className="space-y-2 text-[hsl(var(--text-secondary))] text-sm leading-relaxed">
              <li className="flex gap-3"><span className="text-cardinal shrink-0">1950s</span> Intervention, access, sovereignty under pressure</li>
              <li className="flex gap-3"><span className="text-cardinal shrink-0">Post-67</span> Occupation, territorial control, legal temporality</li>
              <li className="flex gap-3"><span className="text-cardinal shrink-0">Post-73</span> Managed illegality, diplomatic process without resolution</li>
            </ul>
          </div>

          {/* Sources */}
          <SectionLabel number="—" label="Sources" />
          <div className="surface rounded-lg p-6">
            <ul className="space-y-2 text-sm text-[hsl(var(--text-muted))] leading-relaxed">
              <li>UN Security Council Resolutions 233, 234, 235, 236, 237 (June 1967)</li>
              <li>UN Security Council Resolution 242 (22 November 1967)</li>
              <li>UN General Assembly Resolution 2625 (1970)</li>
              <li>UN Security Council Resolutions 338, 339, 340 (October 1973)</li>
              <li>ICJ, <em>Legal Consequences of the Construction of a Wall in the Occupied Palestinian Territory</em> (Advisory Opinion, 2004)</li>
              <li>Hague Regulations, Articles 42-43</li>
              <li>Fourth Geneva Convention (1949)</li>
              <li>Adam Roberts, "Prolonged Military Occupation: The Israeli-Occupied Territories Since 1967"</li>
              <li>Eyal Benvenisti, <em>The International Law of Occupation</em></li>
              <li>John McHugo, on the interpretation of Resolution 242</li>
              <li>Toribio de Valdés, on the English/French textual divergence in 242</li>
              <li>UN Yearbook, 1973 and 1974</li>
              <li>General Assembly resolutions on Palestinian self-determination (1974-1975)</li>
            </ul>
          </div>

        </div>

        {/* Series Navigation */}
        <WorldStageNav currentSlug="1967-1973-occupation" />

      </article>
    </Layout>
  );
};

export default Article1967;
