import { Link } from "react-router-dom";
import { ArrowLeft, Clock, TrendingDown, Scale, AlertTriangle, Lightbulb, ExternalLink, FileText } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const ArticleHaircut = () => {
  return (
    <Layout>
      <article className="pt-32 pb-40 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-24 text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <span className="text-[10px] font-mono tracking-[0.4em] text-cardinal uppercase">
                Legal Economics
              </span>
              <div className="h-px w-8 bg-cardinal/30" />
            </div>
            <h1 className="font-serif text-5xl md:text-7xl font-light mb-8 leading-tight text-white tracking-tighter">
              A Cost-Benefit Analysis of{" "}
              <span className="text-cardinal italic">"Haircut vs. Time"</span>
            </h1>
            <p className="text-xl text-indigo-200/40 font-light leading-relaxed max-w-2xl mx-auto">
              Under the Indian Insolvency & Bankruptcy Code
            </p>
            <div className="mt-12 flex items-center justify-center gap-6 text-[10px] font-mono uppercase tracking-[0.2em] text-muted-foreground">
              <span>December 2024</span>
              <div className="w-1 h-1 rounded-full bg-cardinal/50"></div>
              <span>25 min read</span>
            </div>
          </header>

          {/* The Hook */}
          <section className="mb-24">
            <Card className="p-12 glass border-white/10 shadow-void">
              <p className="font-serif text-2xl md:text-3xl leading-relaxed text-center italic text-white/90">
                "Each additional year beyond 330 days erodes 9 to 13 percent of lender recovery in present value terms,
                <span className="text-cardinal font-medium italic"> even when nominal haircuts fall.</span>"
              </p>
            </Card>
          </section>

          {/* The Problem Statement */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <AlertTriangle className="h-6 w-6 text-cardinal" />
              <h2 className="font-serif text-3xl font-light text-white">The Problem Nobody Talks About</h2>
            </div>
            <div className="prose prose-invert prose-indigo max-w-none text-xl font-serif text-indigo-50/70 leading-relaxed space-y-8">
              <p>
                India's Insolvency & Bankruptcy Code, 2016 was supposed to be revolutionary. Banks drowning in bad loans. Corporate groups bleeding cash.
                A "shot clock" demanding resolution within 330 days. <span className="text-cardinal font-medium italic underline decoration-white/10 underline-offset-8">Simple, right?</span>
              </p>
              <p>
                Eight years later, the marquee cases routinely breach that deadline. And here's the quiet debate happening in policy circles:
                <span className="text-white font-medium"> Is a lower headline haircut worth the time it takes to achieve it?</span>
              </p>
              <p>
                Each month of delay locks in bank capital, inflates provisioning, diminishes credit growth, and carries consequences
                from GDP expansion to employment generation. But we keep obsessing over nominal recovery rates.
              </p>
            </div>
          </section>

          {/* The Three Cases */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <Scale className="h-6 w-6 text-indigo-400" />
              <h2 className="font-serif text-3xl font-light text-white">Three Cases. Three Lessons.</h2>
            </div>

            <div className="space-y-12">
              <CaseCard
                num="01"
                title="Essar Steel"
                meta="Manufacturing | 838 days | Claims: 49,473 crore"
                stat="34%"
                statLabel="Actual PV Haircut"
              >
                <p>The celebrated success story. A <span className="text-white font-medium">15 percent headline haircut</span>. Media loved it. Banks patted themselves on the back.</p>
                <p>But here's what nobody mentioned: 508 days beyond the statutory limit. Legal fees of 220 crore. Plant utilisation crashed from 80 to 59 percent.</p>
                <p className="italic text-indigo-50/40 text-sm border-l border-white/10 pl-6 mt-6">
                  Counterfactual: if the offer had been accepted on Day 330? The PV haircut would have been just 22 percent.
                  Those 12 extra percentage points came from waiting, not from price.
                </p>
              </CaseCard>

              <CaseCard
                num="02"
                title="DHFL"
                meta="Financial Services | 552 days | Claims: 87,082 crore"
                stat="67.4%"
                statLabel="PV Haircut"
              >
                <p>On paper, a disaster. <span className="text-white font-medium">57 percent nominal haircut.</span> Headlines screamed about massive losses.</p>
                <p>But DHFL finished in just 552 days, barely 222 days over the limit. RBI had already intervened, deterring promoter litigation. Process cost? Just 147 crore.</p>
                <p className="italic text-indigo-100/30 text-sm border-l border-white/10 pl-6 mt-6">
                  The hidden win: 1.2 million retail borrowers avoided credit score downgrades. That's 6,800 crore in avoided social cost.
                </p>
              </CaseCard>

              <CaseCard
                num="03"
                title="Jet Airways"
                meta="Aviation | 1,970+ days | Claims: 21,707 crore"
                stat="96.7%"
                statLabel="Actual PV Haircut"
              >
                <p>The nightmare scenario. <span className="text-cardinal font-medium italic">Over five years and counting.</span> Slot allocation uncertainty. Pandemic demand collapse. Bidder plans revised thrice.</p>
                <p>Here's the terrifying math: even if Jet had gotten a <span className="text-white font-medium">zero-haircut rescue</span> today, discounting would still translate to a 44 percent present-value haircut.</p>
                <p className="italic text-cardinal/40 text-sm border-l border-cardinal/20 pl-6 mt-6">
                  The human cost: 12,000 direct job losses. Airfares spiked 7 percent, costing consumers 1,240 crore. Time has destroyed almost everything.
                </p>
              </CaseCard>
            </div>
          </section>

          {/* The Math */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-8">
              <TrendingDown className="h-6 w-6 text-cardinal" />
              <h2 className="font-serif text-3xl font-light text-white">The Math That Changes Everything</h2>
            </div>
            <div className="space-y-8">
              <p className="font-serif text-xl text-indigo-50/70 leading-relaxed">
                Here's the formula that should be plastered on every NCLT wall:
              </p>
              <Card className="p-12 bg-white/[0.02] border-white/5 font-mono text-center">
                <p className="text-cardinal text-[10px] tracking-[0.3em] uppercase mb-4">Present Value Recovery Formula</p>
                <p className="text-2xl text-white font-light tracking-tight">
                  (Cash Received) / (1 + Discount Rate)<sup>Time</sup> - Process Costs
                </p>
              </Card>
              <p className="font-serif text-xl text-indigo-50/70 leading-relaxed">
                Using a weighted average cost of funds at <span className="text-white font-mono">11.07 percent</span>, we found something striking:
              </p>
              <Card className="p-10 glass border-indigo-500/10">
                <p className="text-center font-serif text-2xl text-indigo-50/90 italic">
                  After two years, <span className="text-cardinal font-bold">each extra month costs creditors 1.2 percent additional haircut</span>,
                  even if the nominal price stays exactly the same.
                </p>
              </Card>
            </div>
          </section>

          {/* What Should Change */}
          <section className="mb-24">
            <div className="flex items-center gap-4 mb-12">
              <Lightbulb className="h-6 w-6 text-cardinal" />
              <h2 className="font-serif text-3xl font-light text-white">Structural Reform Proposals</h2>
            </div>

            <div className="grid gap-6">
              {[
                { t: "Mandatory PV Disclosure", d: "Require Resolution Professionals to circulate present-value recovery tables before every CoC vote. Disclosure nudges are effective." },
                { t: "Litigation Escrow", d: "Require resolution applicants to put 10% bid value in escrow. Plan implements while appeals proceed." },
                { t: "Time-Decaying Voting Rights", d: "After Day 330, voting shares shrink exponentially. Creditors who value speed gain relative influence." },
                { t: "Dutch-Auction Pre-packs", d: "Phase I pre-packs with open ascending auctions. Evidence suggests 25% faster closures." },
                { t: "Penalty Interest on Stays", d: "Appellants posting stay beyond 30 days must deposit security equal to estimated PV loss into court escrow." },
                { t: "Tribunal Capacity", d: "Fill NCLT vacancies. Create specialised \"IBC Benches\". Additional 10 judges would shorten median timeline by 57 days." }
              ].map((rec, i) => (
                <Card key={rec.t} className="p-10 glass-card">
                  <div className="flex items-start gap-6">
                    <span className="font-mono text-xs text-cardinal pt-1">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="font-serif text-2xl text-white mb-3">{rec.t}</h3>
                      <p className="font-serif text-lg text-indigo-50/50 leading-relaxed">{rec.d}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </section>

          {/* Methodology Note */}
          <section className="mt-32 pt-20 border-t border-white/5">
            <h2 className="font-serif text-2xl text-white/40 mb-10 flex items-center gap-4 font-light">
              <FileText className="h-5 w-5" />
              Methodology Note
            </h2>
            <div className="font-serif text-sm leading-relaxed text-indigo-50/30 space-y-6 max-w-3xl">
              <p>
                This analysis draws on 1,864 pages of NCLT and NCLAT orders, Supreme Court judgments, CoC minutes obtained via RTI applications,
                forensic audit reports from Grant Thornton and BDO, and confidential provisioning data from five PSU banks.
              </p>
              <p>
                The discount rate of 11.07% represents the weighted average marginal cost of funds reported by 14 key lender banks from FY20 to FY22.
                Tax revenue losses are discounted at an 8 percent social discount rate.
              </p>
            </div>
          </section>

          {/* References */}
          <section className="mt-20 border-t border-white/5 pt-12">
            <h2 className="font-serif text-[10px] uppercase tracking-[0.4em] text-white/20 mb-8">Selected Archive Sources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4 font-serif text-[11px] text-indigo-50/30">
              <p>Armour & Hsu. "Rescue Without Insolvency Law." JCLS, 2020.</p>
              <p>Chatterjee, et al. "Hazard Analysis of CIRP Duration." IIM, 2021.</p>
              <p>Djankov, et al. "Debt Enforcement Around the World." JPE, 2008.</p>
              <p>Supreme Court. CoC Essar Steel v. Satish Kumar Gupta (2019).</p>
            </div>
          </section>
        </div>
      </article>
    </Layout>
  );
};

const CaseCard = ({ num, title, meta, stat, statLabel, children }: any) => (
  <Card className="p-10 glass-card group hover:border-cardinal/20 transition-all duration-700">
    <div className="flex flex-col md:flex-row gap-10">
      <div className="flex-1">
        <div className="flex items-center gap-4 mb-4">
          <span className="font-mono text-[10px] text-cardinal tracking-widest">{num}</span>
          <h3 className="font-serif text-3xl text-white">{title}</h3>
        </div>
        <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-8">{meta}</p>
        <div className="prose prose-invert prose-indigo font-serif text-lg text-indigo-50/60 leading-relaxed">
          {children}
        </div>
      </div>
      <div className="md:w-48 flex flex-col items-center justify-center border-t md:border-t-0 md:border-l border-white/5 pt-10 md:pt-0 md:pl-10">
        <p className="text-5xl font-serif font-bold text-white mb-2 group-hover:text-cardinal transition-colors">{stat}</p>
        <p className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground text-center">{statLabel}</p>
      </div>
    </div>
  </Card>
);

export default ArticleHaircut;
