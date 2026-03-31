import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const SERIES = [
  { slug: "refuge-to-regional-fracture", title: "Part 1: From Refuge to Regional Fracture", short: "Part 1" },
  { slug: "occupation-to-nationalization", title: "Part 2: From Occupation to Nationalization", short: "Part 2" },
  { slug: "1967-1973-occupation", title: "Part 3: 1967, 1973, and Occupation", short: "Part 3" },
  { slug: "revolution-hostages-iran", title: "Part 4: Revolution, Hostages, and US-Iran Breakdown", short: "Part 4" },
  { slug: "iran-iraq-war-militarization", title: "Part 5: Iran-Iraq War, Chemical Weapons, and Militarization", short: "Part 5" },
  { slug: "kuwait-sanctions-enforcement", title: "Part 6: Kuwait, Sanctions, and the Unipolar Enforcement Model", short: "Part 6" },
];

interface WorldStageNavProps {
  currentSlug: string;
}

const WorldStageNav = ({ currentSlug }: WorldStageNavProps) => {
  const currentIndex = SERIES.findIndex((s) => s.slug === currentSlug);
  const prev = currentIndex > 0 ? SERIES[currentIndex - 1] : null;
  const next = currentIndex < SERIES.length - 1 ? SERIES[currentIndex + 1] : null;

  return (
    <div className="mt-20 space-y-6">
      {/* Series indicator */}
      <div className="flex items-center gap-2 justify-center">
        {SERIES.map((s, i) => (
          <Link
            key={s.slug}
            to={`/article/${s.slug}`}
            className={`flex items-center gap-2 px-3 py-1.5 rounded text-[10px] font-mono uppercase tracking-[0.15em] transition-all duration-200 ${
              s.slug === currentSlug
                ? "bg-cardinal/10 text-cardinal border border-cardinal/30"
                : "text-[hsl(var(--text-muted))] hover:text-[hsl(var(--text-secondary))] border border-[hsl(var(--divider))] hover:border-[hsl(var(--text-muted))]"
            }`}
          >
            {s.short}
          </Link>
        ))}
      </div>

      {/* Prev / Next */}
      <div className="pt-6 border-t border-[hsl(var(--divider))] grid grid-cols-2 gap-4">
        {prev ? (
          <Link
            to={`/article/${prev.slug}`}
            className="group flex flex-col gap-1 p-4 rounded-lg surface hover:bg-[hsl(var(--surface-raised))] transition-all"
          >
            <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.15em] text-[hsl(var(--text-muted))]">
              <ArrowLeft className="w-3 h-3" /> Previous
            </span>
            <span className="font-serif text-sm text-[hsl(var(--text-secondary))] group-hover:text-[hsl(var(--text-primary))] transition-colors">
              {prev.title}
            </span>
          </Link>
        ) : (
          <Link
            to="/"
            className="group flex flex-col gap-1 p-4 rounded-lg surface hover:bg-[hsl(var(--surface-raised))] transition-all"
          >
            <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.15em] text-[hsl(var(--text-muted))]">
              <ArrowLeft className="w-3 h-3" /> Back
            </span>
            <span className="font-serif text-sm text-[hsl(var(--text-secondary))] group-hover:text-[hsl(var(--text-primary))] transition-colors">
              Home
            </span>
          </Link>
        )}
        {next ? (
          <Link
            to={`/article/${next.slug}`}
            className="group flex flex-col gap-1 p-4 rounded-lg surface hover:bg-[hsl(var(--surface-raised))] transition-all text-right items-end"
          >
            <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.15em] text-[hsl(var(--text-muted))]">
              Next <ArrowRight className="w-3 h-3" />
            </span>
            <span className="font-serif text-sm text-[hsl(var(--text-secondary))] group-hover:text-[hsl(var(--text-primary))] transition-colors">
              {next.title}
            </span>
          </Link>
        ) : (
          <Link
            to="/"
            className="group flex flex-col gap-1 p-4 rounded-lg surface hover:bg-[hsl(var(--surface-raised))] transition-all text-right items-end"
          >
            <span className="flex items-center gap-1.5 text-[10px] font-mono uppercase tracking-[0.15em] text-[hsl(var(--text-muted))]">
              Back <ArrowRight className="w-3 h-3" />
            </span>
            <span className="font-serif text-sm text-[hsl(var(--text-secondary))] group-hover:text-[hsl(var(--text-primary))] transition-colors">
              Home
            </span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default WorldStageNav;
