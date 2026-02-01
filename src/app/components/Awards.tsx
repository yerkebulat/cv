import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Section } from "@/components/ui/section";
import { RESUME_DATA } from "@/data/resume-data";

type Award = (typeof RESUME_DATA)["awards"][number];

interface AwardItemProps {
  award: Award;
}

/**
 * Individual award card component
 */
function AwardItem({ award }: AwardItemProps) {
  const { title, award: awardDescription } = award;

  return (
    <Card>
      <CardHeader>
        <h3 className="font-semibold leading-none text-sm">{title}</h3>
      </CardHeader>
      <CardContent className="mt-1 text-foreground/80 text-xs print:text-[11px]">
        {awardDescription}
      </CardContent>
    </Card>
  );
}

interface AwardsListProps {
  awards: readonly Award[];
}

/**
 * Main awards section component
 * Renders a list of awards and achievements
 */
export function Awards({ awards }: AwardsListProps) {
  if (!awards || awards.length === 0) return null;

  return (
    <Section>
      <h2 className="text-xl font-bold" id="awards-section">
        Awards & Achievements
      </h2>
      <div
        className="grid grid-cols-1 gap-3 md:grid-cols-2 print:grid-cols-2 print:gap-2"
        role="feed"
        aria-labelledby="awards-section"
      >
        {awards.map((item) => (
          <article key={item.title} role="article">
            <AwardItem award={item} />
          </article>
        ))}
      </div>
    </Section>
  );
}
