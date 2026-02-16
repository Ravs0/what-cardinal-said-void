import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Users, ShieldAlert, FileText, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const Chapter2 = () => {
  return (
    <Layout>
      <article className="max-w-4xl mx-auto px-6 pt-40 pb-40">

        {/* Article Content */}
        <header className="mb-24">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-mono tracking-[0.4em] text-cardinal uppercase">
              Chapter Two
            </span>
            <div className="h-px w-8 bg-cardinal/30" />
          </div>
          <h1 className="font-serif text-6xl md:text-8xl font-light text-white leading-none tracking-tighter mb-8">
            Law for Whom
          </h1>
          <h2 className="font-serif text-2xl md:text-3xl text-indigo-200/40 font-light italic leading-relaxed">
            Sacrificial Strata: <span className="text-white/60">The Production of Disposable Populations</span>
          </h2>
        </header>

        <div className="prose prose-lg max-w-none">
          {/* Abstract */}
          <Card className="p-10 glass border-white/10 shadow-void mb-20">
            <p className="text-xl md:text-2xl leading-relaxed font-serif text-white/90 italic">
              "This report investigates a disturbing proposition: <span className="text-cardinal font-medium">the primary function of the modern state is not the universal protection of its citizens, but rather the production of sacrificial strata for systemic stability."</span>
            </p>
          </Card>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            Drawing on Giorgio Agamben's concept of <span className="italic">homo sacer</span>, Michel Foucault's biopolitics, Loïc Wacquant's analysis of the carceral state, Friedrich Engels' notion of "social murder," and empirical observations of slums, informal settlements, and selective law enforcement, this report argues that:
          </p>

          <ol className="text-lg leading-relaxed mb-8 font-serif list-decimal list-inside space-y-3">
            <li>The law does not fail to reach the slum. It produces the slum as a zone of calculated exception.</li>
            <li>Criminal activity is not uniformly illegal; it is illegal <span className="italic">relative to the social position of the victim</span>.</li>
            <li>Certain populations exist in a status of "included exclusion," formally subject to state power, but functionally denied its protections.</li>
            <li>The appearance of "failure" or "neglect" in governance often masks a functional role: the creation of sacrificial buffers for capital accumulation, social control, and elite security.</li>
          </ol>

          {/* Introduction */}
          <h2 className="font-serif text-3xl font-semibold mt-12 mb-6 text-cardinal">
            The Thesis of Sacrificial Strata
          </h2>

          <blockquote className="border-l-4 border-luminous pl-6 my-8 italic">
            <p className="text-xl font-serif">
              "The role of government is not to protect all citizens equally, but to create a system where, through inequality, some become sacrificial lambs for the benefit of the performing ones."
            </p>
          </blockquote>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            This report begins from a simple observation:{" "}
            <span className="text-cardinal font-semibold text-2xl italic">the law is not blind.</span>
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            Consider the slum. It exists in the heart of the city, often within walking distance of courts, police stations, and government offices. And yet:
          </p>

          <ul className="text-lg leading-relaxed mb-6 font-serif list-disc list-inside space-y-2">
            <li>Building codes are not enforced.</li>
            <li>Crimes committed <span className="italic">within</span> the slum against slum-dwellers are rarely prosecuted with the same vigor as crimes against middle-class or elite victims.</li>
            <li>The police are present, but as predators, not protectors, extracting bribes and enforcing social control rather than providing security.</li>
            <li>When the state <span className="italic">does</span> act, it often acts with extreme violence: mass demolitions, forced evictions, clearing "encroachments" without due process or rehabilitation.</li>
          </ul>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            <span className="text-cardinal font-semibold">Why does the state tolerate, even produce, such spaces?</span>
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            The conventional answers are: Resource constraints (the state simply cannot reach everyone). Corruption (individual bad actors subvert the system). Historical accident (slums are organic growths the state hasn't yet addressed).
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            This report rejects these explanations as inadequate. Instead, it proposes a more disturbing hypothesis:
          </p>

          <div className="bg-luminous/10 border border-luminous/30 rounded-lg p-6 my-8">
            <p className="text-lg md:text-xl leading-relaxed font-serif">
              The slum, the informal settlement, and the unpoliced zone are not failures of governance but <span className="italic">products</span> of it. They are deliberately or functionally maintained as spaces of exception, where certain populations can be abandoned to precarity, exploited as cheap labor, and exposed to violence without legal consequence.
            </p>
          </div>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            In other words:{" "}
            <span className="text-cardinal font-semibold italic">some people are meant to suffer so that others can thrive.</span>{" "}
            The state does not fail to protect them; it protects <span className="italic">others</span> from them, and protects <span className="italic">itself</span> from responsibility for their deaths.
          </p>

          {/* Part I: Theoretical Foundations */}
          <h2 className="font-serif text-3xl font-semibold mt-12 mb-6 text-cardinal">
            Part I: Theoretical Foundations
          </h2>

          <h3 className="font-serif text-2xl font-medium mt-8 mb-4">
            Homo Sacer: The Figure Who May Be Killed But Not Sacrificed
          </h3>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            Giorgio Agamben, the Italian philosopher, identified in ancient Roman law a specific figure: the <span className="text-cardinal font-semibold">homo sacer</span> ("sacred man" or "accursed man"). This person occupied a paradoxical legal status:
          </p>

          <div className="bg-card/50 border border-border rounded-lg p-6 my-6">
            <p className="text-lg font-serif mb-2"><span className="font-semibold">They could be killed by anyone without consequence.</span></p>
            <p className="text-lg font-serif"><span className="font-semibold">Yet they could not be sacrificed in a religious ritual.</span></p>
          </div>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            This double exclusion, from both human law (which would punish their murder) and divine law (which would give their death sacred meaning), meant that the <span className="italic">homo sacer</span> existed in a zone of pure exposure to violence without any legal or cosmic protection.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            Agamben's crucial insight is that this figure did not disappear with ancient Rome.{" "}
            <span className="text-cardinal font-semibold">Modern sovereignty still produces <span className="italic">homo sacer</span>:</span>
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-serif font-semibold">Ancient Form</th>
                  <th className="py-3 font-serif font-semibold">Modern Manifestation</th>
                </tr>
              </thead>
              <tbody className="font-serif">
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Homo sacer</td>
                  <td className="py-3">Refugee in a detention camp</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Outlaw (<span className="italic">caput lupinum</span>)</td>
                  <td className="py-3">"Unlawful enemy combatant"</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Civilly dead person</td>
                  <td className="py-3">Felon stripped of rights</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Pharmakos (Greek scapegoat)</td>
                  <td className="py-3">Slum-dweller subject to demolition without due process</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            The essential mechanism is what Agamben calls <span className="text-cardinal font-semibold">"inclusive exclusion"</span>: these populations are <span className="italic">subject</span> to the law's violence but <span className="italic">excluded</span> from the law's protections.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            <span className="font-semibold">Key concept:</span> <span className="text-cardinal font-semibold">Bare life (zoe)</span>, a life stripped of political and legal meaning, reduced to mere biological existence. A body that can be managed, confined, expelled, or killed without it being murder or sacrifice.
          </p>

          <h3 className="font-serif text-2xl font-medium mt-8 mb-4">
            Biopolitics: "Make Live and Let Die"
          </h3>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            Michel Foucault argued that modern power shifted from the sovereign's ancient right to "take life or let live" to a new logic:{" "}
            <span className="text-cardinal font-semibold">"make live and let die."</span>
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            This is <span className="font-semibold">biopolitics</span>, the management of populations as biological masses. The state concerns itself with birth rates, death rates, public health, epidemiology, housing conditions, labor productivity.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            But here's the crucial point:{" "}
            <span className="text-cardinal font-semibold">biopolitics necessarily involves deciding which lives to cultivate and which to abandon.</span>{" "}
            Resources are finite. Attention is selective. The state "makes live" certain populations (white-collar workers, taxpayers, the politically significant) while it "lets die" others (the homeless, slum-dwellers, refugees, the incarcerated).
          </p>

          <blockquote className="border-l-4 border-muted-foreground pl-6 my-8 italic">
            <p className="text-xl font-serif">"The modern is a society of letting die, not of taking life."</p>
          </blockquote>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            This is not the same as active killing. It is <span className="text-cardinal font-semibold">structured abandonment</span>, a calculated withdrawal of resources, attention, and legal protection that <span className="italic">produces death</span> without any single actor being responsible.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            <span className="text-cardinal font-semibold italic">Slums are the paradigmatic spaces of "letting die."</span>{" "}
            The state knows the conditions. It knows people will die of preventable diseases, unsafe construction, violence, fires. And yet it does not act, or it acts only to demolish, not to rehabilitate.
          </p>

          <h3 className="font-serif text-2xl font-medium mt-8 mb-4">
            Social Murder: Engels and Structural Violence
          </h3>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            In 1845, Friedrich Engels published <span className="italic">The Condition of the Working-Class in England</span>. He introduced a concept that remains disturbing:{" "}
            <span className="text-cardinal font-semibold">social murder.</span>
          </p>

          <blockquote className="border-l-4 border-luminous pl-6 my-8 italic">
            <p className="text-lg font-serif">
              "When one individual inflicts bodily injury upon another such that death results, we call the deed manslaughter; when the assailant knew in advance that the injury would be fatal, we call his deed murder. But when society places hundreds of proletarians in such a position that they inevitably meet a too early and an unnatural death... when it deprives thousands of the necessaries of life... and so hurls them to an untimely grave, it is murder as surely as the work of a single individual."
            </p>
          </blockquote>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            Engels argued that capitalism and the state <span className="italic">knew</span> that certain conditions would kill workers, and <span className="italic">chose</span> not to change them. This is not accidental death. It is <span className="text-cardinal font-semibold">murder by structure.</span>
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            Modern scholars have refined this into the concept of <span className="font-semibold">structural violence</span> (Johan Galtung, Paul Farmer): harm embedded in social, political, and economic structures that results in unequal power and unequal life chances. It kills slowly, through poverty, disease, and deprivation. No single individual pulls a trigger, but the outcome is the same: premature death.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            <span className="text-cardinal font-semibold italic">The slum is a machine for social murder.</span>{" "}
            Its residents die earlier. Their children die more often. They suffer more violence. They are exposed to more pollution. And no one is held accountable, because the violence is structural, not individual.
          </p>

          <h3 className="font-serif text-2xl font-medium mt-8 mb-4">
            The Carceral State: Punishing the Poor
          </h3>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            Loïc Wacquant, the French-American sociologist and student of Pierre Bourdieu, has systematically analyzed how the modern state manages marginality. His key works, <span className="italic">Punishing the Poor</span> and <span className="italic">Urban Outcasts</span>, argue that:
          </p>

          <ol className="text-lg leading-relaxed mb-6 font-serif list-decimal list-inside space-y-3">
            <li><span className="font-semibold">The welfare state has been replaced by the penal state.</span> Instead of addressing poverty through social programs, the state increasingly manages the poor through police, courts, and prisons.</li>
            <li><span className="font-semibold">The ghetto and the prison form a "deadly symbiosis."</span> The prison has become a "surrogate ghetto," warehousing populations that capital no longer needs. The ghetto, in turn, has become an open-air prison, a zone of surveillance, stigma, and control.</li>
            <li><span className="font-semibold">Workfare and prisonfare are complementary strategies.</span> Workfare coerces the poor into low-wage labor; prisonfare punishes those who cannot or will not submit.</li>
            <li><span className="font-semibold">Territorial stigmatization</span> attaches to certain neighborhoods. Their residents are automatically marked as suspects, regardless of individual behavior.</li>
          </ol>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            <span className="font-semibold">The key insight:</span> The state does not fail to protect slum-dwellers. It protects <span className="italic">from</span> them. The carceral apparatus is not about crime control; it is about <span className="text-cardinal font-semibold">population management</span>, sorting the worthy from the unworthy, the productive from the superfluous.
          </p>

          {/* Part II: The Slum as Zone of Exception */}
          <h2 className="font-serif text-3xl font-semibold mt-12 mb-6 text-cardinal">
            Part II: The Slum as Zone of Exception
          </h2>

          <h3 className="font-serif text-2xl font-medium mt-8 mb-4">
            Informal Settlements and "Legal Illegality"
          </h3>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            Informal settlements exist in a state of <span className="text-cardinal font-semibold">legal illegality</span>. They are illegal in the sense that they violate planning codes, zoning laws, and property regimes. Legal in the sense that they are <span className="italic">known</span>, <span className="italic">tolerated</span>, and even <span className="italic">relied upon</span> by the state.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            This is not a paradox. It is a <span className="text-cardinal font-semibold">strategy.</span>
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            By keeping settlements in a permanent state of legal ambiguity, the state:
          </p>

          <ol className="text-lg leading-relaxed mb-6 font-serif list-decimal list-inside space-y-3">
            <li><span className="font-semibold">Denies residents formal rights</span>, they cannot demand services, protections, or compensation as a matter of right.</li>
            <li><span className="font-semibold">Maintains discretionary power</span>, the state can demolish at will, or it can tolerate indefinitely.</li>
            <li><span className="font-semibold">Extracts labor without providing social wage</span>, slum-dwellers work in the formal economy but are denied the housing, infrastructure, and services that formal citizens receive.</li>
          </ol>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            This is Agamben's "zone of exception" made literal. The slum is a space where normal legal protections are suspended, where the state can exercise arbitrary violence (demolition, eviction, police brutality) without it being legally cognizable as harm, where residents exist as <span className="italic">bare life</span>, biologically present but politically non-existent.
          </p>

          <h3 className="font-serif text-2xl font-medium mt-8 mb-4">
            The Selective Presence of the State
          </h3>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            The state is not absent from the slum. It is present in <span className="italic">specific</span> ways:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-serif font-semibold">Form of State Presence</th>
                  <th className="py-3 font-serif font-semibold">Function</th>
                </tr>
              </thead>
              <tbody className="font-serif">
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Police</td>
                  <td className="py-3">Extraction (bribes), surveillance, violence, not protection</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Election officials</td>
                  <td className="py-3">Mobilizing votes; converting population into electoral capital</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Welfare bureaucracy</td>
                  <td className="py-3">Minimal provisions, conditioned on compliance and stigma</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Demolition crews</td>
                  <td className="py-3">Clearing "encroachments" when land values rise or political optics demand it</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            What is absent: Meaningful law enforcement for crimes <span className="italic">within</span> the slum. Building inspection and safety enforcement. Public health infrastructure. Due process before eviction. Legal aid.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            The state's presence is <span className="text-cardinal font-semibold">predatory</span> and <span className="text-cardinal font-semibold">extractive</span>, not protective. It treats slum-dwellers as a resource (votes, labor, bodies to be moved) rather than as citizens to be served.
          </p>

          <h3 className="font-serif text-2xl font-medium mt-8 mb-4">
            Demolition as Sovereign Violence
          </h3>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            When the state <span className="italic">does</span> act decisively in the slum, it often acts with extreme violence:{" "}
            <span className="text-cardinal font-semibold">mass demolitions.</span>
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            In India, Amnesty International and housing rights organizations have documented: demolitions without adequate notice, demolitions without rehabilitation, demolitions targeting politically disfavored communities (e.g., Muslims after communal violence), "bulldozer justice," extrajudicial punishment disguised as urban planning.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            Between March 2020 and July 2021, nearly <span className="text-cardinal font-semibold">257,700 people</span> were evicted from their homes in India.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            This is Agamben's <span className="font-semibold">sovereign exception</span> in action: the state suspends the normal legal order (due process, right to housing, right to livelihood) and acts with unmediated violence. The slum-dweller is revealed as <span className="italic">homo sacer</span>, their home can be destroyed, their life upended, and there is no legal murder, no legal crime, because they were never fully within the law's protection.
          </p>

          {/* Part III: The Relativity of Criminality */}
          <h2 className="font-serif text-3xl font-semibold mt-12 mb-6 text-cardinal">
            Part III: The Relativity of Criminality
          </h2>

          <h3 className="font-serif text-2xl font-medium mt-8 mb-4">
            Crime Is Illegal If the Victim Belongs to the Right Stratum
          </h3>

          <blockquote className="border-l-4 border-luminous pl-6 my-8 italic">
            <p className="text-xl font-serif">"Criminal activities are only illegal if a person from a certain stratum is harmed."</p>
          </blockquote>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            This is not hyperbole. Consider the differential response to crime:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-serif font-semibold">Crime Type</th>
                  <th className="py-3 pr-4 font-serif font-semibold">Victim Class</th>
                  <th className="py-3 font-serif font-semibold">Typical Response</th>
                </tr>
              </thead>
              <tbody className="font-serif">
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Assault</td>
                  <td className="py-3 pr-4">Slum-dweller vs. slum-dweller</td>
                  <td className="py-3">Rarely prosecuted; "internal" matter</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Assault</td>
                  <td className="py-3 pr-4">Slum-dweller vs. middle-class citizen</td>
                  <td className="py-3">Aggressive prosecution</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Theft</td>
                  <td className="py-3 pr-4">Within slum</td>
                  <td className="py-3">Ignored or handled informally</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Theft</td>
                  <td className="py-3 pr-4">From elite property</td>
                  <td className="py-3">Immediate police response</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Murder</td>
                  <td className="py-3 pr-4">Slum-dweller victim</td>
                  <td className="py-3">Under-investigated, low conviction rate</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Murder</td>
                  <td className="py-3 pr-4">Elite victim</td>
                  <td className="py-3">Media coverage, political pressure, resources devoted</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            The law is not blind. It sees <span className="italic">who is harmed</span> and <span className="italic">who harms</span>.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            This is not merely corruption. It is <span className="text-cardinal font-semibold">systemic design.</span> The function of criminal law is not to prevent crime universally. It is to protect property and persons of the productive classes, control and contain the dangerous classes, and allow a certain level of violence and predation to occur within marginal spaces, as long as it does not spill outward.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            <span className="text-cardinal font-semibold italic">Crime within the slum is tolerated because its victims are sacrificial.</span>{" "}
            They are not fully "citizens" in the biopolitical sense; their deaths and injuries do not register as violations of the social contract.
          </p>

          <h3 className="font-serif text-2xl font-medium mt-8 mb-4">
            White-Collar Crime and Elite Impunity
          </h3>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            The inverse is also true:{" "}
            <span className="text-cardinal font-semibold">crimes committed by the powerful are structurally decriminalized.</span>
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-serif font-semibold">Metric</th>
                  <th className="py-3 pr-4 font-serif font-semibold">Street Crime</th>
                  <th className="py-3 font-serif font-semibold">White-Collar Crime</th>
                </tr>
              </thead>
              <tbody className="font-serif">
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Annual cost (USA)</td>
                  <td className="py-3 pr-4">~$15 billion</td>
                  <td className="py-3">$426 billion to $1.7 trillion</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Arrest rates</td>
                  <td className="py-3 pr-4">High</td>
                  <td className="py-3">Low</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Conviction rates</td>
                  <td className="py-3 pr-4">High</td>
                  <td className="py-3">Moderate, declining</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Sentencing</td>
                  <td className="py-3 pr-4">Harsh, incarceration</td>
                  <td className="py-3">Light, fines, home detention</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Public perception of severity</td>
                  <td className="py-3 pr-4">High</td>
                  <td className="py-3">Moderate</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            White-collar criminals benefit from superior legal representation, discretion in prosecution (can negotiate, delay, plea-bargain), difficulty proving "intent" (mens rea), a standard rarely applied to street crime, corporate structures that diffuse responsibility, and political influence that shapes enforcement priorities.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            <span className="font-semibold">The result:</span> A corporate executive who defrauds thousands faces a fraction of the punishment of a poor person who commits petty theft.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            This is not dysfunction. It is the <span className="text-cardinal font-semibold">function</span> of criminal law in a class society: to punish downward and protect upward.
          </p>

          <h3 className="font-serif text-2xl font-medium mt-8 mb-4">
            The Management of "Tolerated Illegality"
          </h3>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            Foucault introduced the concept of <span className="text-cardinal font-semibold">"tolerated illegality"</span> (illégalisme toléré): forms of lawbreaking that the state <span className="italic">could</span> prosecute but <span className="italic">chooses</span> not to.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            Every society has zones of tolerated illegality: tax evasion by the wealthy, minor drug use in elite circles, regulatory violations by corporations, sexual exploitation within power structures, violence within marginalized communities.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            The key question is:{" "}
            <span className="text-cardinal font-semibold">who benefits from the toleration?</span>
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            In the case of slums, tolerated illegality (crime within the slum) allows the state to avoid the cost of actual policing. It creates internal chaos that prevents collective organization. It provides a justification for surveillance and repression when needed. It marks the population as "criminal," justifying their exclusion from full citizenship.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            In the case of elites, tolerated illegality (financial crimes, regulatory violations) allows capital accumulation. It maintains the fiction that the wealthy <span className="italic">deserve</span> their position. It prevents the exposure of systemic corruption that would delegitimize the system.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            <span className="text-cardinal font-semibold italic">Crime is not equally enforced because the enforcement of law is itself a mechanism of stratification.</span>
          </p>

          {/* Part IV: The Political Economy of Expendability */}
          <h2 className="font-serif text-3xl font-semibold mt-12 mb-6 text-cardinal">
            Part IV: The Political Economy of Expendability
          </h2>

          <h3 className="font-serif text-2xl font-medium mt-8 mb-4">
            The Reserve Army and the Surplus Population
          </h3>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            Marx observed that capitalism requires a <span className="text-cardinal font-semibold">reserve army of labor</span>, a pool of unemployed or underemployed workers who depress wages (workers compete for jobs), are available during booms (can be quickly absorbed), and discipline the employed (fear of unemployment).
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            But what happens when the reserve army is <span className="italic">too large</span>? When automation, deindustrialization, and global labor arbitrage create a <span className="text-cardinal font-semibold">surplus population</span> that capital does not need even as a reserve?
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            These populations become <span className="font-semibold">structurally redundant.</span> They cannot be absorbed. They cannot be allowed to starve visibly (that would delegitimize the system). They must be <span className="italic">managed.</span>
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            The slum is one technology of management. The prison is another. Both warehouse surplus populations at minimal cost.
          </p>

          <h3 className="font-serif text-2xl font-medium mt-8 mb-4">
            Slums as Labor Reservoirs and Risk Absorbers
          </h3>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            Despite being "surplus," slum-dwellers perform essential functions:
          </p>

          <ol className="text-lg leading-relaxed mb-6 font-serif list-decimal list-inside space-y-3">
            <li><span className="font-semibold">Cheap labor:</span> Domestic workers, construction labor, informal manufacturing, waste picking.</li>
            <li><span className="font-semibold">Risk absorption:</span> Living in flood zones, toxic areas, fire-prone zones, absorbing the environmental costs that the formal city externalizes.</li>
            <li><span className="font-semibold">Electoral capital:</span> Vote banks that can be mobilized.</li>
            <li><span className="font-semibold">Land reservation:</span> Holding land until its value rises and gentrification can displace them.</li>
          </ol>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            <span className="text-cardinal font-semibold italic">The slum is not a failure of planning. It is a planned failure.</span>{" "}
            It produces a reserve of cheap, desperate labor while minimizing the state's obligations to that population.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            When the land becomes valuable, the slum can be demolished. When the labor is no longer needed, the population can be criminalized and incarcerated. When the votes are no longer useful, the promises can be forgotten.
          </p>

          <h3 className="font-serif text-2xl font-medium mt-8 mb-4">
            The Functional Role of "Failed" Governance
          </h3>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            The state's apparent "failure" to address slums, crime, and inequality is not a failure at all. It is a <span className="text-cardinal font-semibold">functional success</span>, from the perspective of those who benefit.
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-serif font-semibold">Apparent "Failure"</th>
                  <th className="py-3 font-serif font-semibold">Actual Function</th>
                </tr>
              </thead>
              <tbody className="font-serif">
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Failure to provide housing</td>
                  <td className="py-3">Maintains cheap labor; prevents wealth accumulation by the poor</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Failure to police internal crime</td>
                  <td className="py-3">Keeps marginal populations in chaos; prevents solidarity</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Failure to prosecute white-collar crime</td>
                  <td className="py-3">Protects capital accumulation</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Failure to enforce labor laws</td>
                  <td className="py-3">Subsidizes business with exploited labor</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Failure to provide due process before demolition</td>
                  <td className="py-3">Maintains sovereign discretion; prevents legal claims</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            <span className="font-semibold">The beneficiaries of "failed" governance are not random. They are systematically located in the upper strata of society.</span>
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            The violence of the slum, its disease, its precarity, its crime, is <span className="italic">functional</span> for someone. It provides cheap labor, electoral votes, risk absorption, and a permanently disposable population.
          </p>

          {/* Part V: Contemporary Manifestations */}
          <h2 className="font-serif text-3xl font-semibold mt-12 mb-6 text-cardinal">
            Part V: Contemporary Manifestations
          </h2>

          <h3 className="font-serif text-2xl font-medium mt-8 mb-4">
            India: Slum Demolitions and Bulldozer Justice
          </h3>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            India presents one of the clearest examples of the sacrificial strata thesis.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            <span className="font-semibold">Legal framework:</span> Article 21 of the Constitution: Right to Life includes Right to Shelter (<span className="italic">Olga Tellis v. Bombay Municipal Corporation</span>, 1985). Courts have mandated resettlement and rehabilitation before eviction. But enforcement is minimal.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            <span className="font-semibold">Reality:</span> 257,700 people evicted between March 2020 and July 2021. Demolitions occur without notice, without hearings, without rehabilitation. "Bulldozer justice" explicitly targets politically disfavored communities. Non-notified slums (the majority) have no access to services or protection.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            <span className="font-semibold">The pattern:</span> Slum exists for decades in "legal illegality." State extracts votes, labor, and compliance. Land value rises (gentrification, development project). State demolishes without due process. Residents disperse into new precarity. No accountability.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            This is the <span className="italic">homo sacer</span> mechanism: residents are subject to state violence (demolition) while being excluded from state protection (due process, rehabilitation).
          </p>

          <h3 className="font-serif text-2xl font-medium mt-8 mb-4">
            United States: The Ghetto-Prison Symbiosis
          </h3>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            Wacquant's analysis of the American ghetto reveals a parallel structure.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            <span className="font-semibold">Historical trajectory:</span> Slavery led to the plantation as total institution. Post-Civil War brought Jim Crow segregation. The 1940s to 1960s saw the ghetto as spatial containment. From the 1970s to the present, the prison has become a "surrogate ghetto."
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            <span className="font-semibold">The symbiosis:</span> The ghetto prepares people for prison (crime, unemployment, despair). The prison returns people to the ghetto (stigma, parole conditions, marginality). Both are zones of "included exclusion," under state control, denied normal rights.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            <span className="font-semibold">The numbers:</span> 2.3 million incarcerated (USA), disproportionately Black and poor. Felon disenfranchisement affects 5.2 million people. Civil death: loss of voting rights, housing, employment, social benefits.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            The prison is the American version of the slum: a warehouse for surplus populations, a mechanism of racialized control, a space where lives can be wasted without it being legally cognizable as murder.
          </p>

          <h3 className="font-serif text-2xl font-medium mt-8 mb-4">
            Global: Refugee Camps as Permanent Exceptions
          </h3>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            The refugee camp is perhaps the purest form of the zone of exception: millions of people with no citizenship, no rights beyond minimal humanitarian assistance, indefinite detention, subject to arbitrary violence, no political voice.
          </p>

          <blockquote className="border-l-4 border-luminous pl-6 my-8 italic">
            <p className="text-xl font-serif">"The camp is the nomos of the modern." — Agamben</p>
          </blockquote>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            Refugees are <span className="italic">homo sacer</span> par excellence: they can be "let die" (malnutrition, disease, violence) without it being murder. They can be expelled (deportation) without it being punishment. They exist outside the law while being entirely subject to its violence.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            The "temporary" camp becomes permanent. The exception becomes the rule.
          </p>

          {/* Part VI: Implications for Legal and Political Theory */}
          <h2 className="font-serif text-3xl font-semibold mt-12 mb-6 text-cardinal">
            Part VI: Implications for Legal and Political Theory
          </h2>

          <h3 className="font-serif text-2xl font-medium mt-8 mb-4">
            Rethinking Sovereignty
          </h3>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            If the thesis is correct, then sovereignty is not primarily about making laws, providing services, or protecting citizens.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            <span className="text-cardinal font-semibold">Sovereignty is primarily about:</span> Deciding who is protected and who is exposed. Creating zones of exception where normal law does not apply. Producing "bare life" that can be managed without rights.
          </p>

          <blockquote className="border-l-4 border-luminous pl-6 my-8 italic">
            <p className="text-xl font-serif">"Sovereign is he who decides on the exception." — Carl Schmitt</p>
          </blockquote>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            The sovereign function is not to ensure universal protection but to <span className="text-cardinal font-semibold">differentially allocate exposure to violence and abandonment.</span>
          </p>

          <h3 className="font-serif text-2xl font-medium mt-8 mb-4">
            Implications for AI and Algorithmic Governance
          </h3>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            The sacrificial strata thesis has direct implications for AI and algorithmic governance:
          </p>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-3 pr-4 font-serif font-semibold">Algorithmic System</th>
                  <th className="py-3 font-serif font-semibold">Sacrificial Function</th>
                </tr>
              </thead>
              <tbody className="font-serif">
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Predictive policing</td>
                  <td className="py-3">Targets marginal neighborhoods, producing criminality through surveillance</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Credit scoring</td>
                  <td className="py-3">Excludes poor from capital access, reinforcing stratification</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Welfare algorithms</td>
                  <td className="py-3">Denies benefits through automated errors; no accountability</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-3 pr-4">Facial recognition</td>
                  <td className="py-3">Disproportionately misidentifies minorities; produces "suspects"</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            Algorithms do not replace human bias; they <span className="text-cardinal font-semibold">automate and scale</span> the production of sacrificial strata. They produce <span className="italic">homo sacer</span> through code: populations that can be denied, flagged, excluded, and abandoned without any human being taking responsibility.
          </p>

          <h3 className="font-serif text-2xl font-medium mt-8 mb-4">
            The Ethics of Complicity
          </h3>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            If the state produces sacrificial strata, then those who benefit are structurally complicit:
          </p>

          <ul className="text-lg leading-relaxed mb-6 font-serif list-disc list-inside space-y-2">
            <li><span className="font-semibold">The middle class</span> benefits from cheap labor, affordable services, and risk externalization.</li>
            <li><span className="font-semibold">The elite</span> benefits from wealth accumulation, regulatory impunity, and political dominance.</li>
            <li><span className="font-semibold">Professionals</span> (lawyers, planners, police) administer the system, often without acknowledging its violent function.</li>
          </ul>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            This is not individual guilt. It is <span className="text-cardinal font-semibold">structural complicity.</span> The system functions only because its beneficiaries accept, or do not question, the premise that some lives matter less.
          </p>

          {/* Conclusion */}
          <h2 className="font-serif text-3xl font-semibold mt-12 mb-6 text-cardinal">
            Conclusion: What Is To Be Done?
          </h2>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            This report does not offer easy solutions. The production of sacrificial strata is not a policy failure to be corrected but a <span className="text-cardinal font-semibold">structural feature</span> of contemporary governance.
          </p>

          <p className="text-lg md:text-xl leading-relaxed mb-6 font-serif">
            However, certain paths forward can be identified:
          </p>

          <ol className="text-lg leading-relaxed mb-6 font-serif list-decimal list-inside space-y-4">
            <li><span className="font-semibold">Naming the mechanism:</span> The first step is to call it what it is. Not "failure," not "neglect," not "underdevelopment," but <span className="text-cardinal font-semibold">structural violence, social murder, and deliberate abandonment.</span></li>
            <li><span className="font-semibold">Legal strategies:</span> Demanding due process, right to housing, and rehabilitation as legally enforceable entitlements, not discretionary gifts.</li>
            <li><span className="font-semibold">Solidarity across strata:</span> Breaking the isolation of marginal populations through political alliance with those who recognize their complicity.</li>
            <li><span className="font-semibold">Refusing the exception:</span> Challenging the permanent "state of exception" that normalizes emergency powers, extrajudicial demolitions, and indefinite detention.</li>
            <li><span className="font-semibold">Naming the beneficiaries:</span> Following the flows of value. Who profits from cheap labor? Who gains when land is cleared? Who escapes prosecution?</li>
          </ol>

          <div className="bg-luminous/10 border border-luminous/30 rounded-lg p-6 my-8">
            <p className="text-lg md:text-xl leading-relaxed font-serif text-center">
              <span className="text-cardinal font-semibold text-2xl italic">The question is not why governance fails. The question is: for whom does it succeed?</span>
            </p>
          </div>

          {/* Bibliography */}
          <h2 className="font-serif text-3xl font-semibold mt-12 mb-6 text-cardinal">
            Bibliography and Further Reading
          </h2>

          <h3 className="font-serif text-xl font-medium mt-8 mb-4">
            Primary Theoretical Texts
          </h3>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2 pr-4 font-serif font-semibold">Author</th>
                  <th className="py-2 pr-4 font-serif font-semibold">Title</th>
                  <th className="py-2 font-serif font-semibold">Key Concept</th>
                </tr>
              </thead>
              <tbody className="font-serif">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Giorgio Agamben</td>
                  <td className="py-2 pr-4 italic">Homo Sacer: Sovereign Power and Bare Life (1995)</td>
                  <td className="py-2">Homo sacer, bare life, inclusive exclusion</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Giorgio Agamben</td>
                  <td className="py-2 pr-4 italic">State of Exception (2005)</td>
                  <td className="py-2">Permanent emergency, suspension of law</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Michel Foucault</td>
                  <td className="py-2 pr-4 italic">The History of Sexuality, Vol. 1 (1976)</td>
                  <td className="py-2">Biopolitics, "make live and let die"</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Michel Foucault</td>
                  <td className="py-2 pr-4 italic">Society Must Be Defended (1976 lectures)</td>
                  <td className="py-2">Racism, state racism, biopower</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Loïc Wacquant</td>
                  <td className="py-2 pr-4 italic">Punishing the Poor (2009)</td>
                  <td className="py-2">Workfare, prisonfare, carceral state</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Loïc Wacquant</td>
                  <td className="py-2 pr-4 italic">Urban Outcasts (2008)</td>
                  <td className="py-2">Ghetto, banlieue, advanced marginality</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Friedrich Engels</td>
                  <td className="py-2 pr-4 italic">The Condition of the Working-Class in England (1845)</td>
                  <td className="py-2">Social murder</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Orlando Patterson</td>
                  <td className="py-2 pr-4 italic">Slavery and Social Death (1982)</td>
                  <td className="py-2">Social death, natal alienation</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Carl Schmitt</td>
                  <td className="py-2 pr-4 italic">Political Theology (1922)</td>
                  <td className="py-2">Sovereignty, exception</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Johan Galtung</td>
                  <td className="py-2 pr-4 italic">"Violence, Peace, and Peace Research" (1969)</td>
                  <td className="py-2">Structural violence</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-serif text-xl font-medium mt-8 mb-4">
            Critical Criminology and Law
          </h3>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2 pr-4 font-serif font-semibold">Author</th>
                  <th className="py-2 pr-4 font-serif font-semibold">Title</th>
                  <th className="py-2 font-serif font-semibold">Key Concept</th>
                </tr>
              </thead>
              <tbody className="font-serif">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Jeffrey Reiman</td>
                  <td className="py-2 pr-4 italic">The Rich Get Richer and the Poor Get Prison</td>
                  <td className="py-2">Class bias in criminal justice</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">David Garland</td>
                  <td className="py-2 pr-4 italic">The Culture of Control (2001)</td>
                  <td className="py-2">Mass incarceration, penal populism</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Ruth Gilmore</td>
                  <td className="py-2 pr-4 italic">Golden Gulag (2007)</td>
                  <td className="py-2">Prison industrial complex, racialized incarceration</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Steve Tombs & David Whyte</td>
                  <td className="py-2 pr-4 italic">The Corporate Criminal (2015)</td>
                  <td className="py-2">Crimes of the powerful, corporate impunity</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-serif text-xl font-medium mt-8 mb-4">
            Urban Studies and Informal Settlements
          </h3>

          <div className="overflow-x-auto my-6">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="py-2 pr-4 font-serif font-semibold">Author</th>
                  <th className="py-2 pr-4 font-serif font-semibold">Title</th>
                  <th className="py-2 font-serif font-semibold">Key Concept</th>
                </tr>
              </thead>
              <tbody className="font-serif">
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Mike Davis</td>
                  <td className="py-2 pr-4 italic">Planet of Slums (2006)</td>
                  <td className="py-2">Global slum proliferation, surplus humanity</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Partha Chatterjee</td>
                  <td className="py-2 pr-4 italic">The Politics of the Governed (2004)</td>
                  <td className="py-2">Political society vs. civil society, India</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">James Holston</td>
                  <td className="py-2 pr-4 italic">Insurgent Citizenship (2008)</td>
                  <td className="py-2">Differentiated citizenship, Brazil</td>
                </tr>
                <tr className="border-b border-border/50">
                  <td className="py-2 pr-4">Gautam Bhan</td>
                  <td className="py-2 pr-4 italic">In the Public's Interest (2016)</td>
                  <td className="py-2">Evictions, slum demolitions, India</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="font-serif text-xl font-medium mt-8 mb-4">
            India-Specific
          </h3>

          <ul className="text-lg leading-relaxed mb-6 font-serif list-disc list-inside space-y-2">
            <li><span className="font-semibold">Housing and Land Rights Network (HLRN):</span> Documentation of mass evictions in India</li>
            <li><span className="font-semibold">Amnesty International:</span> "Bulldozer injustice" targeting minorities</li>
            <li><span className="font-semibold">Centre for Policy Research (CPR):</span> "Zones of exception" in Delhi</li>
          </ul>
        </div>

        <footer className="mt-32 pt-12 border-t border-white/5 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
          <span>Jan 2026 / Thesis</span>
          <span className="text-cardinal">Chapter 02</span>
        </footer>
      </article>
    </Layout>
  );
};

export default Chapter2;
