import { Link } from "react-router-dom";
import { ArrowLeft, Clock, TrendingDown, Scale, AlertTriangle, Lightbulb } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const ArticleHaircut = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link 
            to="/"
            className="transition-smooth hover:opacity-80"
          >
            <img src={logo} alt="what cardinal said" className="h-10 w-10 rounded-full" />
          </Link>
          <Link to="/">
            <Button variant="outline" size="sm" className="gap-2">
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Button>
          </Link>
        </div>
      </nav>

      {/* Article Content */}
      <article className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-16 text-center">
            <span className="text-xs font-medium tracking-[0.2em] text-primary uppercase mb-4 block">
              Article
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
              A Cost-Benefit Analysis of{" "}
              <span className="text-luminous italic">"Haircut vs. Time"</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Under the Indian Insolvency & Bankruptcy Code
            </p>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <span>December 2024</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
              <span>25 min read</span>
            </div>
          </header>

          {/* The Hook */}
          <section className="mb-16">
            <Card className="p-8 bg-card/50 border-luminous/30">
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-center italic">
                "Each additional year beyond 330 days erodes 9 to 13 percent of lender recovery in present value terms, 
                <span className="text-luminous font-medium"> even when nominal haircuts fall.</span>"
              </p>
            </Card>
          </section>

          {/* The Problem Statement */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-light mb-6 flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-luminous" />
              The Problem Nobody Talks About
            </h2>
            <div className="prose-custom font-serif text-lg leading-relaxed space-y-6">
              <p>
                India's Insolvency & Bankruptcy Code, 2016 was supposed to be revolutionary. Banks drowning in bad loans. Corporate groups bleeding cash. 
                A "shot clock" demanding resolution within 330 days. <span className="text-luminous font-medium italic">Simple, right?</span>
              </p>
              <p>
                Eight years later, the marquee cases routinely breach that deadline. And here's the quiet debate happening in policy circles: 
                <span className="text-luminous font-medium"> Is a lower headline haircut worth the time it takes to achieve it?</span>
              </p>
              <p>
                Each month of delay locks in bank capital, inflates provisioning, diminishes credit growth, and carries consequences 
                from GDP expansion to employment generation. But we keep obsessing over nominal recovery rates.
              </p>
            </div>
          </section>

          {/* The Three Cases */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-light mb-8 flex items-center gap-3">
              <Scale className="h-6 w-6 text-primary" />
              Three Cases. Three Lessons.
            </h2>
            
            <div className="space-y-8">
              {/* Essar Steel */}
              <Card className="p-6 bg-card border-border hover:border-primary/50 transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary font-serif text-xl font-bold">
                    1
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-medium mb-2">Essar Steel</h3>
                    <p className="text-sm text-muted-foreground mb-4">Manufacturing | 838 days | Claims: 49,473 crore</p>
                    <div className="font-serif text-lg leading-relaxed space-y-4">
                      <p>
                        The celebrated success story. A <span className="text-luminous font-medium">15 percent headline haircut</span>. 
                        Media loved it. Banks patted themselves on the back.
                      </p>
                      <p>
                        But here's what nobody mentioned: 508 days beyond the statutory limit. Legal fees of 220 crore. 
                        Plant utilisation crashed from 80 to 59 percent.
                      </p>
                      <Card className="p-4 bg-destructive/10 border-destructive/30">
                        <p className="text-center">
                          <span className="text-destructive font-bold text-2xl">34%</span>
                          <span className="block text-sm text-muted-foreground mt-1">
                            Actual present-value haircut when you price in delay
                          </span>
                        </p>
                      </Card>
                      <p className="text-muted-foreground italic">
                        Counterfactual: if the offer had been accepted on Day 330? The PV haircut would have been just 22 percent. 
                        Those 12 extra percentage points came from waiting, not from price.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* DHFL */}
              <Card className="p-6 bg-card border-border hover:border-accent/50 transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent font-serif text-xl font-bold">
                    2
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-medium mb-2">DHFL</h3>
                    <p className="text-sm text-muted-foreground mb-4">Financial Services | 552 days | Claims: 87,082 crore</p>
                    <div className="font-serif text-lg leading-relaxed space-y-4">
                      <p>
                        On paper, a disaster. <span className="text-luminous font-medium">57 percent nominal haircut.</span> 
                        Headlines screamed about massive losses.
                      </p>
                      <p>
                        But DHFL finished in just 552 days, barely 222 days over the limit. RBI had already intervened, 
                        deterring promoter litigation. The creditor class was homogeneous. Process cost? Just 147 crore.
                      </p>
                      <Card className="p-4 bg-accent/10 border-accent/30">
                        <p className="text-center">
                          <span className="text-accent font-bold text-2xl">67.4%</span>
                          <span className="block text-sm text-muted-foreground mt-1">
                            PV haircut, but at one-third of Essar's process cost
                          </span>
                        </p>
                      </Card>
                      <p className="text-muted-foreground italic">
                        The hidden win: 1.2 million retail borrowers avoided credit score downgrades. 
                        That's 6,800 crore in avoided social cost.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Jet Airways */}
              <Card className="p-6 bg-card border-border hover:border-destructive/50 transition-smooth">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-destructive/20 flex items-center justify-center text-destructive font-serif text-xl font-bold">
                    3
                  </div>
                  <div className="flex-1">
                    <h3 className="font-serif text-2xl font-medium mb-2">Jet Airways</h3>
                    <p className="text-sm text-muted-foreground mb-4">Aviation | 1,970+ days | Claims: 21,707 crore</p>
                    <div className="font-serif text-lg leading-relaxed space-y-4">
                      <p>
                        The nightmare scenario. <span className="text-luminous font-medium">Over five years and counting.</span> 
                        Slot allocation uncertainty. Pandemic demand collapse. Bidder plans revised thrice.
                      </p>
                      <p>
                        Here's the terrifying math: even if Jet had gotten a <span className="font-semibold">zero-haircut rescue</span> today, 
                        discounting would still translate to a 44 percent present-value haircut.
                      </p>
                      <Card className="p-4 bg-destructive/10 border-destructive/30">
                        <p className="text-center">
                          <span className="text-destructive font-bold text-2xl">96.7%</span>
                          <span className="block text-sm text-muted-foreground mt-1">
                            Actual PV haircut. Time has destroyed almost everything.
                          </span>
                        </p>
                      </Card>
                      <p className="text-muted-foreground italic">
                        The human cost: 12,000 direct job losses. 190,000 indirect jobs gone. 
                        Airfares spiked 7 percent, costing consumers 1,240 crore.
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* The Math */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-light mb-6 flex items-center gap-3">
              <TrendingDown className="h-6 w-6 text-destructive" />
              The Math That Changes Everything
            </h2>
            <div className="prose-custom font-serif text-lg leading-relaxed space-y-6">
              <p>
                Here's the formula that should be plastered on every NCLT wall:
              </p>
              <Card className="p-6 bg-card/50 border-border font-mono text-center">
                <p className="text-muted-foreground mb-2">Present Value Recovery =</p>
                <p className="text-xl">
                  (Cash Received) / (1 + Discount Rate)^Time - Process Costs
                </p>
              </Card>
              <p>
                Using a weighted average cost of funds at <span className="text-luminous font-medium">11.07 percent</span>, 
                we found something striking:
              </p>
              <Card className="p-6 bg-luminous/10 border-luminous/30">
                <p className="text-center font-serif text-xl">
                  After two years, <span className="text-luminous font-bold">each extra month costs creditors 1.2 percent additional haircut</span>, 
                  even if the nominal price stays exactly the same.
                </p>
              </Card>
              <p>
                There exists a point where time dominates value. We call it the <span className="text-luminous font-medium italic">inversion point</span>. 
                Jet Airways crossed it years ago.
              </p>
            </div>
          </section>

          {/* The Ripple Effects */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-light mb-6 flex items-center gap-3">
              <Clock className="h-6 w-6 text-accent" />
              The Ripple Effects Nobody Measures
            </h2>
            <div className="prose-custom font-serif text-lg leading-relaxed space-y-6">
              <p>
                Delay in the top 12 IBC cases cumulatively shaved <span className="text-luminous font-medium">14 basis points</span> off India's FY19 to FY23 average GDP growth.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4 bg-card border-border text-center">
                  <p className="text-3xl font-bold text-primary">140 crore</p>
                  <p className="text-sm text-muted-foreground">Credit supply suppressed for every 100 crore locked in CIRP</p>
                </Card>
                <Card className="p-4 bg-card border-border text-center">
                  <p className="text-3xl font-bold text-accent">198 crore</p>
                  <p className="text-sm text-muted-foreground">Present cost to Gujarat exchequer from Essar's two-year delay</p>
                </Card>
              </div>
              <p>
                Capital locked in CIRP reduces the bank lending multiplier. 
                Employment externalities are acute in service-sector insolvencies. 
                Fiscal spill-overs delay realisation of tax arrears and stamp duty.
              </p>
            </div>
          </section>

          {/* What Should Change */}
          <section className="mb-16">
            <h2 className="font-serif text-3xl font-light mb-8 flex items-center gap-3">
              <Lightbulb className="h-6 w-6 text-luminous" />
              What Should Actually Change
            </h2>
            
            <div className="space-y-6">
              <Card className="p-6 bg-card border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-primary">1. Mandatory PV Disclosure</h3>
                <p className="font-serif text-lg text-muted-foreground">
                  Require Resolution Professionals to circulate present-value recovery tables before every CoC vote. 
                  Disclosure nudges are less intrusive than statutory caps, yet effective.
                </p>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-primary">2. Litigation Escrow</h3>
                <p className="font-serif text-lg text-muted-foreground">
                  Borrowing from U.S. Section 363 sales: require resolution applicants to put 10 percent bid value in escrow. 
                  Plan implements while appeals proceed. If appeal succeeds, escrow released; else, forfeited.
                </p>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-primary">3. Time-Decaying Voting Rights</h3>
                <p className="font-serif text-lg text-muted-foreground">
                  After Day 330, voting shares shrink exponentially. Creditors who value speed, like trade creditors, 
                  thus gain relative influence. An elegant incentive realignment.
                </p>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-primary">4. Dutch-Auction Pre-packs</h3>
                <p className="font-serif text-lg text-muted-foreground">
                  Phase I (first 120 days): promoters or white knights submit anchor bids. 
                  Phase II: open ascending auction with bid increments of at least 10 percent. 
                  Iceland and UK evidence suggests 20 to 25 percent faster closures without loss of value.
                </p>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-primary">5. Penalty Interest on Stay Orders</h3>
                <p className="font-serif text-lg text-muted-foreground">
                  Appellants posting stay beyond 30 days must deposit security equal to estimated PV loss into court escrow. 
                  A de facto penalty interest that internalises the externality of delay.
                </p>
              </Card>

              <Card className="p-6 bg-card border-border">
                <h3 className="font-serif text-xl font-medium mb-3 text-primary">6. Tribunal Capacity</h3>
                <p className="font-serif text-lg text-muted-foreground">
                  Fill NCLT vacancies. Create specialised "IBC Benches" with exclusive rosters. 
                  Empirical evidence: an additional 10 judgeships would shorten median timeline by 57 days.
                </p>
              </Card>
            </div>
          </section>

          {/* The Bottom Line */}
          <section className="mb-16">
            <Card className="p-8 bg-luminous/10 border-luminous/30">
              <h2 className="font-serif text-2xl font-light mb-4 text-center">The Bottom Line</h2>
              <p className="font-serif text-xl leading-relaxed text-center">
                The IBC's genius lies in its twin goals: speed and value. But <span className="text-luminous font-medium italic">time is itself a component of value.</span> 
                {" "}The policy calculus must shift from minimising headline haircuts to optimising across two axes: haircut and time.
              </p>
            </Card>
          </section>

          {/* Methodology Note */}
          <section className="mb-16 border-t border-border pt-12">
            <h2 className="font-serif text-2xl font-light mb-6 text-muted-foreground">A Note on Methodology</h2>
            <div className="prose-custom font-serif text-base leading-relaxed text-muted-foreground space-y-4">
              <p>
                This analysis draws on 1,864 pages of NCLT and NCLAT orders, Supreme Court judgments, CoC minutes obtained via RTI applications, 
                SEBI-filed investor presentations, forensic audit reports from Grant Thornton and BDO, and confidential provisioning data from five PSU banks.
              </p>
              <p>
                The discount rate of 11.07 percent represents the weighted average marginal cost of funds reported by 14 key lender banks from FY20 to FY22. 
                Sensitivity analyses at plus and minus 300 basis points produced qualitatively robust results.
              </p>
              <p>
                Employment multipliers derive from National Input-Output Tables. Tax revenue losses are discounted at an 8 percent social discount rate. 
                Twenty-three semi-structured interviews with IPs, CoC members, and regulators provided qualitative triangulation.
              </p>
            </div>
          </section>

          {/* References */}
          <section className="border-t border-border pt-12">
            <h2 className="font-serif text-2xl font-light mb-6 text-muted-foreground">Selected References</h2>
            <ul className="font-serif text-sm text-muted-foreground space-y-2">
              <li>Armour, John, and A-Shik Hsu. "Rescue Without Insolvency Law." Journal of Corporate Law Studies, 2020.</li>
              <li>Chatterjee, S., et al. "Hazard Analysis of CIRP Duration." IIM Working Paper, 2021.</li>
              <li>Djankov, S., et al. "Debt Enforcement Around the World." Journal of Political Economy 116, 2008.</li>
              <li>Hotchkiss, Edith, et al. "Post-Emergence Performance of Chapter 11 Firms." Journal of Finance 73, 2018.</li>
              <li>Supreme Court of India. Committee of Creditors of Essar Steel v. Satish Kumar Gupta, (2019) 10 SCC 146.</li>
              <li>Sengupta, Rajeswari, and Anjali Sharma. "IBC: Mismatch Between Promise and Performance." EPW 55(50), 2020.</li>
            </ul>
          </section>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <Link to="/">
            <img src={logo} alt="what cardinal said" className="h-12 w-12 rounded-full mx-auto mb-4" />
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} · Where meaning meets meaninglessness
          </p>
        </div>
      </footer>
    </div>
  );
};

export default ArticleHaircut;
