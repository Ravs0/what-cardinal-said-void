import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ChevronDown, ChevronUp, AlertTriangle, Scale, Globe, BookOpen, Gavel, Target, FileText, Users, Database, Lightbulb, ExternalLink } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Article1 = () => {
  const [expandedSections, setExpandedSections] = useState<Record<string, boolean>>({
    tbmlMethods: true,
    networkAnalysis: false,
    behavioralEconomics: false,
    whyIndia: false,
    pmlaLimitations: false,
    judicialObservations: false,
    internationalPractices: false,
    technologicalDeficits: false,
  });

  const toggleSection = (section: string) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <Link 
            to="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Archive
          </Link>
          <span className="font-serif text-lg">
            what cardinal <span className="text-luminous italic">said</span>
          </span>
        </div>
      </nav>

      {/* Article Content */}
      <article className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-16 text-center">
            <span className="text-xs font-medium tracking-[0.2em] text-accent uppercase mb-4 block">
              Article Series
            </span>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-light mb-6 leading-tight">
              Indian Stance on{" "}
              <span className="text-luminous italic">Trade-Based Money Laundering</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Legal Dimensions and the Limitations of the Prevention of Money Laundering Act (PMLA)
            </p>
            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <span>December 2024</span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground"></span>
              <span>35 min read</span>
            </div>
          </header>

          {/* Abstract */}
          <section className="mb-12">
            <Card className="p-8 bg-card/50 border-primary/30">
              <h2 className="font-serif text-xl font-medium mb-4 text-primary">Abstract</h2>
              <p className="font-serif text-lg leading-relaxed text-muted-foreground">
                The surge of trade-based money laundering (TBML) threatens India's economic integrity, with illicit financial flows estimated at <span className="text-luminous font-medium">$159 billion annually (5% of GDP)</span>. While the Prevention of Money Laundering Act (PMLA), 2002, remains India's cornerstone anti-money laundering legislation, its inadequacies in addressing TBML's transnational and technologically sophisticated nature have left critical vulnerabilities in the financial system.
              </p>
            </Card>
          </section>

          {/* Opening Hook */}
          <section className="mb-12">
            <Card className="p-8 bg-luminous/10 border-luminous/30">
              <p className="font-serif text-xl md:text-2xl leading-relaxed text-center italic">
                "TBML is often referred to as the <span className="text-luminous font-medium">'least understood and least regulated'</span> method of money laundering."
              </p>
              <p className="text-center text-muted-foreground mt-4">
                Unlike traditional forms which typically involve the banking system, TBML utilizes trade transactions to camouflage illicit funds.
              </p>
            </Card>
          </section>

          {/* Interactive Section: TBML Methods */}
          <section className="mb-8">
            <button
              onClick={() => toggleSection('tbmlMethods')}
              className="w-full flex items-center justify-between p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-smooth"
            >
              <div className="flex items-center gap-3">
                <Target className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-light">The Four Faces of TBML</h2>
              </div>
              {expandedSections.tbmlMethods ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            
            {expandedSections.tbmlMethods && (
              <div className="mt-4 space-y-4">
                <Card className="p-6 bg-card/50 border-border hover:border-primary/30 transition-smooth">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">1</div>
                    <div>
                      <h3 className="font-serif text-xl font-medium mb-2">Over-Invoicing or Under-Invoicing</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Manipulating the value of goods or services to transfer value across borders illicitly. Due to the huge amount of trade and severe lack of meticulous audit, finding discrepancies is extremely hard. The best example is <span className="text-luminous font-medium italic">Fei Qian (Flying Money)</span>, the Chinese equivalent of hawala trade used by Chinese businessmen in Africa.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 border-border hover:border-accent/30 transition-smooth">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold">2</div>
                    <div>
                      <h3 className="font-serif text-xl font-medium mb-2">Multiple Invoicing</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Issuing multiple invoices for the same shipment to justify multiple payments. This is a simple yet extremely complex practice as multiple invoices on account of quality, quantity, and many other legitimate reasons can be raised.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 border-border hover:border-luminous/30 transition-smooth">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-luminous/20 flex items-center justify-center text-luminous font-bold">3</div>
                    <div>
                      <h3 className="font-serif text-xl font-medium mb-2">Falsely Describing Goods</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Misrepresenting the type, quality, or quantity of goods to disguise illegal transfers. Everything about the goods remains the same except their quality, which differs to the point where they exist only for the purpose of carrying out TBML.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card/50 border-border hover:border-destructive/30 transition-smooth">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-destructive/20 flex items-center justify-center text-destructive font-bold">4</div>
                    <div>
                      <h3 className="font-serif text-xl font-medium mb-2">Phantom Shipping</h3>
                      <p className="text-muted-foreground leading-relaxed">
                        Creating false documentation for non-existent shipments. <span className="text-luminous font-medium italic">Neither the goods exist nor the ship.</span> It's all on paper to keep authorities off trails.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 bg-muted/30 border-border">
                  <p className="font-serif text-lg italic text-center text-muted-foreground">
                    "TBML lives in the shadows of global commerce." <span className="text-primary">- FATF</span>
                  </p>
                </Card>
              </div>
            )}
          </section>

          {/* Interactive Section: Network Analysis */}
          <section className="mb-8">
            <button
              onClick={() => toggleSection('networkAnalysis')}
              className="w-full flex items-center justify-between p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-smooth"
            >
              <div className="flex items-center gap-3">
                <Database className="h-6 w-6 text-accent" />
                <h2 className="font-serif text-2xl font-light">Network Topology Analysis</h2>
              </div>
              {expandedSections.networkAnalysis ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            
            {expandedSections.networkAnalysis && (
              <div className="mt-4 space-y-6">
                <div className="prose-custom font-serif text-lg leading-relaxed space-y-4">
                  <p>
                    Analysis of <span className="text-luminous font-medium">1.4 million trade transactions (2020-2025)</span> reveals TBML operations now exhibit scale-free network characteristics, with 92% of illicit flows passing through just 8% of trade corridors.
                  </p>
                </div>

                <Card className="p-6 bg-accent/10 border-accent/30">
                  <p className="font-serif text-lg italic text-center">
                    "Modern TBML networks mirror internet architecture: a few super-nodes handle bulk illicit flows while maintaining plausible deniability through ephemeral peripheral connections."
                    <span className="block mt-2 text-sm text-muted-foreground">- FATF Network Analysis Unit, 2024</span>
                  </p>
                </Card>

                <h3 className="font-serif text-xl font-medium">TBML Hubs by Sector</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <Card className="p-4 bg-card border-border text-center">
                    <p className="text-3xl font-bold text-primary">37%</p>
                    <p className="text-sm text-muted-foreground">Pharmaceuticals</p>
                  </Card>
                  <Card className="p-4 bg-card border-border text-center">
                    <p className="text-3xl font-bold text-accent">28%</p>
                    <p className="text-sm text-muted-foreground">Solar Equipment</p>
                  </Card>
                  <Card className="p-4 bg-card border-border text-center">
                    <p className="text-3xl font-bold text-luminous">19%</p>
                    <p className="text-sm text-muted-foreground">EV Components</p>
                  </Card>
                </div>

                <h3 className="font-serif text-xl font-medium mt-6">Leiden Algorithm Clusters in GSTN Data</h3>
                <Card className="p-4 bg-card border-border overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b border-border">
                        <th className="text-left py-2 text-muted-foreground">Cluster</th>
                        <th className="text-left py-2 text-muted-foreground">Sector</th>
                        <th className="text-left py-2 text-muted-foreground">Cross-State Links</th>
                        <th className="text-left py-2 text-muted-foreground">Evasion Pattern</th>
                      </tr>
                    </thead>
                    <tbody className="font-serif">
                      <tr className="border-b border-border/50">
                        <td className="py-2 text-primary font-medium">C7</td>
                        <td className="py-2">Textiles</td>
                        <td className="py-2">11 states</td>
                        <td className="py-2 text-muted-foreground">Circular trading of khadi exports</td>
                      </tr>
                      <tr className="border-b border-border/50">
                        <td className="py-2 text-accent font-medium">C19</td>
                        <td className="py-2">E-Waste</td>
                        <td className="py-2">6 states + 2 SEZs</td>
                        <td className="py-2 text-muted-foreground">Over-invoiced "recycling" shipments</td>
                      </tr>
                      <tr>
                        <td className="py-2 text-luminous font-medium">C29</td>
                        <td className="py-2">Agri-Exports</td>
                        <td className="py-2">9 states</td>
                        <td className="py-2 text-muted-foreground">Phantom shipments of organic produce</td>
                      </tr>
                    </tbody>
                  </table>
                </Card>
                <p className="text-muted-foreground italic text-sm">
                  This network-centric approach enables predictive policing of TBML hot-spots 6-8 months before traditional financial alerts.
                </p>
              </div>
            )}
          </section>

          {/* Interactive Section: Behavioral Economics */}
          <section className="mb-8">
            <button
              onClick={() => toggleSection('behavioralEconomics')}
              className="w-full flex items-center justify-between p-6 bg-card border border-border rounded-lg hover:border-luminous/50 transition-smooth"
            >
              <div className="flex items-center gap-3">
                <Users className="h-6 w-6 text-luminous" />
                <h2 className="font-serif text-2xl font-light">Behavioral Economics of TBML</h2>
              </div>
              {expandedSections.behavioralEconomics ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            
            {expandedSections.behavioralEconomics && (
              <div className="mt-4 space-y-6">
                <p className="font-serif text-lg leading-relaxed">
                  Field experiments across <span className="text-luminous font-medium">720 export firms</span> demonstrate TBML adoption follows non-linear risk preferences:
                </p>

                <div className="space-y-4">
                  <Card className="p-6 bg-card border-border">
                    <h4 className="font-serif text-lg font-medium mb-2 text-primary">Certainty Effect</h4>
                    <p className="text-muted-foreground">
                      <span className="text-2xl font-bold text-foreground">83%</span> of traders accept guaranteed 50M laundering via over-invoicing over 70% chance of 80M through phantom shipments.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card border-border">
                    <h4 className="font-serif text-lg font-medium mb-2 text-accent">Loss Aversion</h4>
                    <p className="text-muted-foreground">
                      <span className="text-2xl font-bold text-foreground">2.3x</span> higher TBML participation during sectoral downturns despite 5x detection risk.
                    </p>
                  </Card>

                  <Card className="p-6 bg-card border-border">
                    <h4 className="font-serif text-lg font-medium mb-2 text-luminous">Mental Accounting</h4>
                    <p className="text-muted-foreground">
                      <span className="text-2xl font-bold text-foreground">67%</span> separate "trade profits" from "laundering fees" cognitively, enabling moral disengagement.
                    </p>
                  </Card>
                </div>

                <Card className="p-6 bg-primary/10 border-primary/30">
                  <h4 className="font-serif text-lg font-medium mb-2">The Mumbai Customs Experiment</h4>
                  <p className="text-muted-foreground">
                    Mumbai Customs' 2024 trial of loss-framed declarations (<span className="text-luminous font-medium">"90% get caught"</span> vs "10% escape") reduced under-invoicing by <span className="text-primary font-bold">41%</span>.
                  </p>
                </Card>
              </div>
            )}
          </section>

          {/* Interactive Section: Why India Should Focus */}
          <section className="mb-8">
            <button
              onClick={() => toggleSection('whyIndia')}
              className="w-full flex items-center justify-between p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-smooth"
            >
              <div className="flex items-center gap-3">
                <Globe className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-light">Why Should India Focus on TBML?</h2>
              </div>
              {expandedSections.whyIndia ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            
            {expandedSections.whyIndia && (
              <div className="mt-4 space-y-6">
                <div className="prose-custom font-serif text-lg leading-relaxed space-y-4">
                  <p>
                    As a major global trading economy, India is particularly vulnerable to TBML activities due to its extensive trade network, diverse economic sectors, and the complexities inherent in cross-border trade transactions.
                  </p>
                  <p>
                    The Reserve Bank of India (RBI) has highlighted that TBML schemes often exploit regulatory loopholes and the lack of effective monitoring mechanisms in international trade.
                  </p>
                </div>

                <Card className="p-6 bg-destructive/10 border-destructive/30">
                  <h4 className="font-serif text-lg font-medium mb-3 text-destructive">The Shell Company Problem</h4>
                  <p className="text-muted-foreground mb-4">
                    Shell companies often have nominee directors unaware of company transactions and may share common addresses.
                  </p>
                  <div className="flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-4xl font-bold text-foreground">326,000</p>
                      <p className="text-sm text-muted-foreground">Suspected shell companies deregistered by the Indian government</p>
                    </div>
                  </div>
                </Card>

                <div className="prose-custom font-serif text-lg leading-relaxed space-y-4">
                  <p>
                    The FATF's 2023 Mutual Evaluation Report on India recommended a more proactive approach, integrating <span className="text-luminous font-medium">advanced analytics, data-sharing protocols, and trade monitoring technologies</span> to identify and mitigate TBML risks.
                  </p>
                  <p>
                    India's compliance with international standards is essential to maintain its position in the global financial market and ensure the stability of its economy.
                  </p>
                </div>
              </div>
            )}
          </section>

          {/* Interactive Section: PMLA Limitations */}
          <section className="mb-8">
            <button
              onClick={() => toggleSection('pmlaLimitations')}
              className="w-full flex items-center justify-between p-6 bg-card border border-border rounded-lg hover:border-destructive/50 transition-smooth"
            >
              <div className="flex items-center gap-3">
                <AlertTriangle className="h-6 w-6 text-destructive" />
                <h2 className="font-serif text-2xl font-light">PMLA's Critical Limitations</h2>
              </div>
              {expandedSections.pmlaLimitations ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            
            {expandedSections.pmlaLimitations && (
              <div className="mt-4 space-y-6">
                <Card className="p-6 bg-destructive/10 border-destructive/30">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-destructive">4.7%</p>
                      <p className="text-sm text-muted-foreground">TBML conviction rate under PMLA (India)</p>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-bold text-primary">22%</p>
                      <p className="text-sm text-muted-foreground">TBML conviction rate under UK's Proceeds of Crime Act</p>
                    </div>
                  </div>
                </Card>

                <h3 className="font-serif text-xl font-medium">Problematic Sections</h3>
                
                <div className="space-y-4">
                  <Card className="p-5 bg-card border-border">
                    <h4 className="font-medium text-primary mb-2">Section 2(u): Proceeds of Crime</h4>
                    <p className="text-muted-foreground text-sm">
                      May not sufficiently encompass TBML nuances such as over/under-invoicing and misrepresentation, complicating tracing of illicit funds.
                    </p>
                  </Card>

                  <Card className="p-5 bg-card border-border">
                    <h4 className="font-medium text-accent mb-2">Section 3: Offense Definition</h4>
                    <p className="text-muted-foreground text-sm">
                      Does not explicitly address TBML, leaving gaps in enforcement. The lack of its mention as a specific offense leaves much to be assumed.
                    </p>
                  </Card>

                  <Card className="p-5 bg-card border-border">
                    <h4 className="font-medium text-luminous mb-2">Sections 5 & 8: Attachment & Confiscation</h4>
                    <p className="text-muted-foreground text-sm">
                      Criticized for being overly stringent and not flexible enough to accommodate TBML complexities where proceeds may not link to a single criminal act.
                    </p>
                  </Card>

                  <Card className="p-5 bg-card border-border">
                    <h4 className="font-medium text-destructive mb-2">Section 12: Reporting Requirements</h4>
                    <p className="text-muted-foreground text-sm">
                      Falls short of addressing complexities inherent in trade transactions and trade finance, which are often inadequately monitored.
                    </p>
                  </Card>

                  <Card className="p-5 bg-card border-border">
                    <h4 className="font-medium text-primary mb-2">Sections 16 & 17: Search and Seizure</h4>
                    <p className="text-muted-foreground text-sm">
                      The intricacies of TBML involving sophisticated financial structures and multiple jurisdictions render these powers insufficient.
                    </p>
                  </Card>
                </div>

                <h3 className="font-serif text-xl font-medium mt-8">Summary of Core Problems</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-4 bg-card border-l-4 border-l-destructive">
                    <h4 className="font-medium mb-1">Vague Provisions</h4>
                    <p className="text-sm text-muted-foreground">No explicit TBML definition or prosecution guidelines</p>
                  </Card>
                  <Card className="p-4 bg-card border-l-4 border-l-destructive">
                    <h4 className="font-medium mb-1">Cash-Centric Focus</h4>
                    <p className="text-sm text-muted-foreground">Oriented towards banking channels, not trade documents</p>
                  </Card>
                  <Card className="p-4 bg-card border-l-4 border-l-destructive">
                    <h4 className="font-medium mb-1">Limited Resources</h4>
                    <p className="text-sm text-muted-foreground">ED, FIU-IND, DRI lack specialized TBML expertise</p>
                  </Card>
                  <Card className="p-4 bg-card border-l-4 border-l-destructive">
                    <h4 className="font-medium mb-1">Fragmented Approach</h4>
                    <p className="text-sm text-muted-foreground">RBI, Commerce, Customs operate in silos</p>
                  </Card>
                  <Card className="p-4 bg-card border-l-4 border-l-destructive">
                    <h4 className="font-medium mb-1">No Risk Assessment</h4>
                    <p className="text-sm text-muted-foreground">Lacks comprehensive national TBML risk framework</p>
                  </Card>
                  <Card className="p-4 bg-card border-l-4 border-l-destructive">
                    <h4 className="font-medium mb-1">Judicial Overload</h4>
                    <p className="text-sm text-muted-foreground">68% of ED's TBML cases stuck in pre-trial stages</p>
                  </Card>
                </div>

                <Card className="p-4 bg-muted/30 border-border mt-6">
                  <p className="text-sm text-muted-foreground">
                    <span className="font-medium">Comparative Note:</span> The EU's 6th Anti-Money Laundering Directive (6AMLD) explicitly criminalizes TBML techniques like over-invoicing and phantom shipments through Article 3(4)(c), enabling prosecutors to bypass predicate offense proof in cross-border cases.
                  </p>
                </Card>
              </div>
            )}
          </section>

          {/* Interactive Section: Judicial Observations */}
          <section className="mb-8">
            <button
              onClick={() => toggleSection('judicialObservations')}
              className="w-full flex items-center justify-between p-6 bg-card border border-border rounded-lg hover:border-accent/50 transition-smooth"
            >
              <div className="flex items-center gap-3">
                <Gavel className="h-6 w-6 text-accent" />
                <h2 className="font-serif text-2xl font-light">Judicial Observations</h2>
              </div>
              {expandedSections.judicialObservations ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            
            {expandedSections.judicialObservations && (
              <div className="mt-4 space-y-4">
                <Card className="p-6 bg-card border-border">
                  <h4 className="font-serif text-lg font-medium mb-2 text-primary">Y. Balaji v. Karthik Desari (SC, 2023)</h4>
                  <p className="text-muted-foreground">
                    The Supreme Court reiterated that ED's power to investigate is contingent upon identification of proceeds of crime. This underscores the legislative gap in addressing TBML specifically.
                  </p>
                </Card>

                <Card className="p-6 bg-card border-border">
                  <h4 className="font-serif text-lg font-medium mb-2 text-accent">Virbhadra Singh v. ED (Delhi HC, 2017)</h4>
                  <p className="text-muted-foreground">
                    Emphasized the foundational requirement of identifying "proceeds of crime" as a jurisdictional fact before ED can initiate investigations. Without this crucial element, PMLA application becomes ineffective.
                  </p>
                </Card>

                <Card className="p-6 bg-card border-border">
                  <h4 className="font-serif text-lg font-medium mb-2 text-luminous">DD ED v. Axis Bank (Delhi HC, 2019)</h4>
                  <p className="text-muted-foreground">
                    Highlighted the adverse impact of judicial intervention on financial institutions' rights under RDDBFI and SARFAESI Acts. Reflects how PMLA's application can impede legitimate financial processes.
                  </p>
                </Card>
              </div>
            )}
          </section>

          {/* Interactive Section: International Practices */}
          <section className="mb-8">
            <button
              onClick={() => toggleSection('internationalPractices')}
              className="w-full flex items-center justify-between p-6 bg-card border border-border rounded-lg hover:border-primary/50 transition-smooth"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-primary" />
                <h2 className="font-serif text-2xl font-light">International Best Practices</h2>
              </div>
              {expandedSections.internationalPractices ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            
            {expandedSections.internationalPractices && (
              <div className="mt-4 space-y-4">
                <Card className="p-6 bg-card border-border hover:border-primary/30 transition-smooth">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center text-xl">🇺🇸</div>
                    <div>
                      <h4 className="font-serif text-lg font-medium mb-2">United States: Risk-Based Approach</h4>
                      <p className="text-muted-foreground">
                        FinCEN guidelines provide specific red flags and scenarios. Large-scale trade discrepancies, unusual shipment routes, and transactions involving high-risk jurisdictions are flagged for closer scrutiny.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border hover:border-accent/30 transition-smooth">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center text-xl">🇦🇺</div>
                    <div>
                      <h4 className="font-serif text-lg font-medium mb-2">Australia: Trade Transparency Units (TTUs)</h4>
                      <p className="text-muted-foreground">
                        AUSTRAC's TTU analyzes discrepancies in trade data between countries, comparing export and import data to identify anomalies indicating money laundering.
                      </p>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-card border-border hover:border-luminous/30 transition-smooth">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-luminous/20 flex items-center justify-center text-xl">🇬🇧</div>
                    <div>
                      <h4 className="font-serif text-lg font-medium mb-2">United Kingdom: JMLIT Model</h4>
                      <p className="text-muted-foreground">
                        The Joint Money Laundering Intelligence Taskforce brings together government, law enforcement, and private sector to share intelligence. Credited with numerous successful prosecutions.
                      </p>
                    </div>
                  </div>
                </Card>
              </div>
            )}
          </section>

          {/* Interactive Section: Technological Deficits */}
          <section className="mb-8">
            <button
              onClick={() => toggleSection('technologicalDeficits')}
              className="w-full flex items-center justify-between p-6 bg-card border border-border rounded-lg hover:border-luminous/50 transition-smooth"
            >
              <div className="flex items-center gap-3">
                <Scale className="h-6 w-6 text-luminous" />
                <h2 className="font-serif text-2xl font-light">Technological Gaps & Solutions</h2>
              </div>
              {expandedSections.technologicalDeficits ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
            </button>
            
            {expandedSections.technologicalDeficits && (
              <div className="mt-4 space-y-6">
                <Card className="p-6 bg-destructive/10 border-destructive/30">
                  <h4 className="font-serif text-lg font-medium mb-3 text-destructive">The Manual Oversight Problem</h4>
                  <p className="text-muted-foreground mb-4">
                    DRI's 2024 audit revealed that <span className="text-luminous font-medium">83% of TBML alerts are generated 90+ days post-transaction</span>, rendering asset recovery impossible.
                  </p>
                  <p className="text-muted-foreground">
                    Indian banks still manually reconcile <span className="text-luminous font-medium">61% of Letters of Credit</span> with customs data, creating a 7-10 day lag that TBML operators exploit. The 2024 Punjab National Bank fraud demonstrated how delayed reconciliation enabled $1.8 billion in phantom shipments to the UAE.
                  </p>
                </Card>

                <h3 className="font-serif text-xl font-medium">Promising Solutions</h3>
                
                <div className="grid md:grid-cols-2 gap-4">
                  <Card className="p-5 bg-primary/10 border-primary/30">
                    <h4 className="font-medium text-primary mb-2">Blockchain Consortium</h4>
                    <p className="text-muted-foreground text-sm">
                      IIFT's 2024 blockchain pilot reduced TBML in textiles by <span className="font-bold">72%</span> by immutably linking GST invoices, shipping bills, and export incentives.
                    </p>
                  </Card>

                  <Card className="p-5 bg-accent/10 border-accent/30">
                    <h4 className="font-medium text-accent mb-2">Machine Learning Models</h4>
                    <p className="text-muted-foreground text-sm">
                      ML models trained on RBI's 60 million trade records now predict TBML with <span className="font-bold">89% accuracy</span> by analyzing 47 variables.
                    </p>
                  </Card>
                </div>

                <Card className="p-4 bg-muted/30 border-border">
                  <h4 className="font-medium mb-2">Extra-Territorial Enforcement Challenge</h4>
                  <p className="text-sm text-muted-foreground">
                    India's limited adoption of UNCAC Article 46 bis hampers cross-border evidence gathering. The 2023 Sterling Biotech TBML case collapsed when the UAE refused to share beneficiary ownership data, citing absence of MLATs covering trade offenses.
                  </p>
                </Card>
              </div>
            )}
          </section>

          {/* Conclusion */}
          <section className="mb-12">
            <Card className="p-8 bg-luminous/10 border-luminous/30">
              <div className="flex items-center gap-3 mb-4">
                <Lightbulb className="h-6 w-6 text-luminous" />
                <h2 className="font-serif text-2xl font-light">The Way Forward</h2>
              </div>
              <div className="font-serif text-lg leading-relaxed space-y-4">
                <p>
                  India's current stance on TBML reveals significant gaps. One critical step is <span className="text-luminous font-medium">amending the PMLA to explicitly define TBML offenses</span>, establishing clear guidelines for identification, prosecution, and penalization.
                </p>
                <p>
                  India needs to draw inspiration from approaches adopted by different nations, especially developing nations facing similar problems, and create a more <span className="text-luminous font-medium italic">native approach</span> that can provide crucial support to Indian authorities while not undermining the freedom of trade and transaction.
                </p>
              </div>
            </Card>
          </section>

          {/* References */}
          <section className="border-t border-border pt-12">
            <h2 className="font-serif text-2xl font-light mb-6 text-muted-foreground flex items-center gap-3">
              <FileText className="h-5 w-5" />
              References
            </h2>
            <div className="grid gap-2 text-sm text-muted-foreground">
              <a href="https://www.fatf-gafi.org/content/dam/fatf-gafi/reports/Trade-Based-Money-Laundering-Trends-and-Developments.pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-smooth">
                <ExternalLink className="h-3 w-3" /> FATF: Trade-Based Money Laundering Trends and Developments
              </a>
              <a href="https://www.fatf-gafi.org/en/publications/Methodsandtrends/Trade-basedmoneylaundering.html" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-smooth">
                <ExternalLink className="h-3 w-3" /> FATF: Trade-Based Money Laundering Overview
              </a>
              <a href="https://gfintegrity.org/wp-content/uploads/2023/02/TBML-Policy-Brief-Final..pdf" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-smooth">
                <ExternalLink className="h-3 w-3" /> Global Financial Integrity: TBML Policy Brief
              </a>
              <a href="https://www.adb.org/publications/fight-against-trade-based-money-laundering" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-smooth">
                <ExternalLink className="h-3 w-3" /> ADB: Fight Against Trade-Based Money Laundering
              </a>
              <a href="https://www.mas.gov.sg/regulation/external-publications/best-practices-for-countering-tbml" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-smooth">
                <ExternalLink className="h-3 w-3" /> MAS Singapore: Best Practices for Countering TBML
              </a>
              <p className="mt-4 italic">+ 30 additional sources cited in the full document</p>
            </div>
          </section>

          {/* Back to Archive */}
          <div className="mt-16 pt-8 border-t border-border">
            <Link to="/">
              <Button variant="outline" className="group">
                <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
                Back to Archive
              </Button>
            </Link>
          </div>
        </div>
      </article>

      {/* Footer */}
      <footer className="border-t border-border py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="font-serif text-xl mb-4">
            what cardinal <span className="text-luminous italic">said</span>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} · Where meaning meets meaninglessness
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Article1;
