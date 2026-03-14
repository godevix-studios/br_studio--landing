import AnimatedSection from "./AnimatedSection";
import ImageWithSkeleton from "~/components/ui/ImageWithSkeleton";

interface TeamMember {
  name: string
  image: string
  link: string
}

const TEAM: TeamMember[] = [
  {
    name: "Odiseo",
    image:
      "https://avatar.anywhere.app/files/img/fQNXrVOcEDU6/aw-image-744.jpeg",
    link: "https://bigoterojobarberia.setmore.com/team/r7b931540845179535",
  },
  {
    name: "Ana Hanzel",
    image:
      "https://avatar.anywhere.app/files/img/fbKQt949ERMK/aw-image-648.jpeg",
    link: "https://bigoterojobarberia.setmore.com/team/cpTUzKeJdEndzJDXLx65WWycF76AC8gu",
  },
  {
    name: "Lupita",
    image: "https://avatar.anywhere.app/files/img/fCXnuqxoWBWY/profilepic.png",
    link: "https://bigoterojobarberia.setmore.com/team/cq2RLSOgUjvoFlLUeGRvOGzfrLnOxvQN",
  },
];

interface TeamCardProps {
  member: TeamMember;
  index: number;
}

function TeamCard({ member, index }: TeamCardProps) {
  return (
    <AnimatedSection variant="scale" delay={index * 0.15}>
      <a
        href={member.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block text-center"
      >
        <div className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-6 rounded-full overflow-hidden border-2 border-white/5 group-hover:border-[#D4A853]/40 transition-all duration-700">
          <ImageWithSkeleton
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            skeletonClassName="rounded-full"
          />
          <div className="absolute inset-0 bg-[#C8102E]/0 group-hover:bg-[#C8102E]/20 transition-colors duration-500 rounded-full" />
        </div>
        <h3 className="text-[#F5F5F0] text-xl font-semibold">{member.name}</h3>
        <p className="text-[#D4A853] text-sm mt-1 tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          Reservar cita →
        </p>
      </a>
    </AnimatedSection>
  );
}

export default function TeamSection() {
  return (
    <section id="equipo" className="py-24 md:py-32 bg-[#0F0F0F]">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedSection variant="fadeUp" className="text-center mb-16">
          <p className="text-[#D4A853] text-sm tracking-[0.3em] uppercase mb-3">
            Conoce a
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-[#F5F5F0]">
            Nuestro Equipo
          </h2>
          <div className="w-16 h-0.5 bg-[#C8102E] mx-auto mt-6" />
        </AnimatedSection>

        <div className="flex flex-wrap justify-center gap-12 md:gap-20">
          {TEAM.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
