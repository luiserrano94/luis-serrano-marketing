import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { GraduationCap, Briefcase, Wrench } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import ProtectedImage from "@/components/ProtectedImage";

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations({ locale: params.locale, namespace: "about" });
  return {
    title: t("meta_title"),
    description: t("meta_description"),
    alternates: {
      canonical: `https://luisserranomarketing.com/${params.locale}/about`,
      languages: {
        es: "https://luisserranomarketing.com/es/about",
        en: "https://luisserranomarketing.com/en/about",
        "x-default": "https://luisserranomarketing.com/es/about",
      },
    },
  };
}

const SKILLS = [
  "Meta Ads Manager",
  "Google Ads",
  "HubSpot",
  "Hootsuite",
  "Photoshop",
  "Illustrator",
  "Lightroom",
  "Premiere",
  "CapCut",
  "Canva",
  "Microsoft Office",
  "Google Analytics",
];

export default async function AboutPage({
  params,
}: {
  params: { locale: string };
}) {
  const t = await getTranslations({ locale: params.locale, namespace: "about" });

  const education = [
    {
      school: t("edu_1_school"),
      degree: t("edu_1_degree"),
      year: t("edu_1_year"),
    },
    {
      school: t("edu_2_school"),
      degree: t("edu_2_degree"),
      year: t("edu_2_year"),
    },
    {
      school: t("edu_3_school"),
      degree: t("edu_3_degree"),
      year: t("edu_3_year"),
    },
  ];

  const experience = [
    {
      company: t("exp_1_company"),
      role: t("exp_1_role"),
      period: t("exp_1_period"),
      desc: t("exp_1_desc"),
    },
    {
      company: t("exp_2_company"),
      role: t("exp_2_role"),
      period: t("exp_2_period"),
      desc: t("exp_2_desc"),
    },
    {
      company: t("exp_3_company"),
      role: t("exp_3_role"),
      period: t("exp_3_period"),
      desc: t("exp_3_desc"),
    },
    {
      company: t("exp_4_company"),
      role: t("exp_4_role"),
      period: t("exp_4_period"),
      desc: t("exp_4_desc"),
    },
    {
      company: t("exp_5_company"),
      role: t("exp_5_role"),
      period: t("exp_5_period"),
      desc: t("exp_5_desc"),
    },
    {
      company: t("exp_6_company"),
      role: t("exp_6_role"),
      period: t("exp_6_period"),
      desc: t("exp_6_desc"),
    },
  ];

  return (
    <div className="pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero section */}
        <div className="grid lg:grid-cols-2 gap-16 items-start mb-24">
          <AnimatedSection direction="left">
            <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
              {t("hero_tagline")}
            </span>
            <h1 className="font-bebas text-5xl sm:text-6xl lg:text-7xl text-white leading-tight mb-8">
              {t("hero_title")}
            </h1>
            <div className="space-y-4">
              <p className="text-light-gray leading-relaxed">{t("bio_p1")}</p>
              <p className="text-mid-gray leading-relaxed">{t("bio_p2")}</p>
            </div>
          </AnimatedSection>

          <AnimatedSection direction="right" delay={0.1}>
            {/* Profile photo - protected */}
            <ProtectedImage
              src="/images/luis-serrano.jpg"
              alt="Luis Serrano - Chief Marketing Officer"
              className="w-full max-w-md mx-auto aspect-[4/5] rounded-2xl"
              watermarkText="LS"
            />
          </AnimatedSection>
        </div>

        {/* Experience timeline */}
        <AnimatedSection className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <Briefcase className="text-accent" size={24} />
            <h2 className="font-bebas text-4xl text-white">{t("experience_title")}</h2>
          </div>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 hidden sm:block" />
            <div className="space-y-8">
              {experience.map((exp, i) => (
                <AnimatedSection key={i} delay={i * 0.07}>
                  <div className="sm:pl-12 relative">
                    {/* Dot */}
                    <div className="absolute left-2.5 top-2 w-3 h-3 rounded-full bg-accent hidden sm:block" />
                    <div className="bg-surface rounded-2xl p-6 border border-white/5 hover:border-accent/20 transition-colors">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                        <div>
                          <h3 className="text-white font-semibold text-lg">{exp.company}</h3>
                          <p className="text-accent text-sm font-medium">{exp.role}</p>
                        </div>
                        <span className="text-mid-gray text-sm shrink-0 bg-white/5 px-3 py-1 rounded-full">
                          {exp.period}
                        </span>
                      </div>
                      <p className="text-mid-gray text-sm leading-relaxed">{exp.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Education */}
        <AnimatedSection className="mb-20">
          <div className="flex items-center gap-3 mb-10">
            <GraduationCap className="text-accent" size={24} />
            <h2 className="font-bebas text-4xl text-white">{t("education_title")}</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {education.map((edu, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-surface rounded-2xl p-6 border border-white/5 hover:border-accent/20 transition-colors h-full">
                  <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-2">
                    {edu.year}
                  </p>
                  <h3 className="text-white font-semibold mb-1">{edu.school}</h3>
                  <p className="text-mid-gray text-sm">{edu.degree}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </AnimatedSection>

        {/* Skills */}
        <AnimatedSection className="mb-20">
          <div className="flex items-center gap-3 mb-8">
            <Wrench className="text-accent" size={24} />
            <h2 className="font-bebas text-4xl text-white">{t("skills_title")}</h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 bg-surface border border-white/10 text-light-gray text-sm rounded-full hover:border-accent/40 hover:text-white transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </AnimatedSection>

        {/* Philosophy */}
        <AnimatedSection>
          <div className="bg-surface rounded-3xl p-10 border border-white/5">
            <h2 className="font-bebas text-4xl text-white mb-6">{t("philosophy_title")}</h2>
            <div className="space-y-4">
              <p className="text-light-gray leading-relaxed">{t("philosophy_p1")}</p>
              <p className="text-mid-gray leading-relaxed">{t("philosophy_p2")}</p>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  );
}
