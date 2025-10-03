import React from "react";
import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { Card, CardContent } from "@/components/ui/card";

interface Skill {
  name: string;
  level: number;
  experience: string;
  icon: string;
}

interface SkillCategory {
  category: string;
  skills: Skill[];
}

const SkillsPage = () => {
  const skillCategories: SkillCategory[] = [
    {
      category: "Frontend Development",
      skills: [
        { name: "React", level: 92, experience: "1+ years", icon: "R" },
        { name: "JavaScript", level: 90, experience: "1.5+ years", icon: "J" },
        { name: "TypeScript", level: 85, experience: "1 years", icon: "T" },
        { name: "HTML/CSS", level: 95, experience: "2+ years", icon: "H" },
        { name: "Next.js", level: 75, experience: "1+ years", icon: "N" },
        { name: "Tailwind CSS", level: 85, experience: "1+ years", icon: "T" },        
      ]
    },
    {
      category: "Backend Development",
      skills: [
        { name: "Node.js", level: 88, experience: "4+ years", icon: "N" },
        { name: "Express.js", level: 85, experience: "4+ years", icon: "E" },
        { name: "RESTful APIs", level: 90, experience: "4+ years", icon: "R" },
      ]
    },
    {
      category: "Database",
      skills: [
        { name: "MongoDB", level: 85, experience: "working", icon: "M" },
        { name: "MySQL", level: 78, experience: "1+ years", icon: "M" },
        
      ]
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Git", level: 90, experience: "5+ years", icon: "G" },
        { name: "Docker", level: 75, experience: "3+ years", icon: "D" },
        { name: "AWS", level: 70, experience: "2+ years", icon: "A" },
        { name: "CI/CD", level: 75, experience: "2+ years", icon: "C" },
        { name: "Webpack", level: 80, experience: "3+ years", icon: "W" },
        { name: "Jest", level: 78, experience: "3+ years", icon: "J" },
      ]
    },
    {
      category: "Other Skills",
      skills: [
        { name: "UI/UX Design", level: 75, experience: "3+ years", icon: "U" },
        { name: "Agile Methodology", level: 85, experience: "4+ years", icon: "A" },
        { name: "Team Leadership", level: 80, experience: "2+ years", icon: "T" },
        { name: "Problem Solving", level: 92, experience: "5+ years", icon: "P" },
      ]
    }
  ];

  return (
    <div className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Skills Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 mb-4">
            <div className="h-1 w-10 bg-primary" />
            <span className="text-primary font-medium">My Skills</span>
            <div className="h-1 w-10 bg-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Technical Proficiency</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            As a full-stack developer with 5 years of experience, I've developed expertise in numerous technologies across the development spectrum.
          </p>
        </motion.div>

        {/* Skills Overview Section */}
        <section className="mb-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="col-span-1"
              >
                <Card className="h-full hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-3 text-center">{category.category}</h3>
                    <div className="flex flex-wrap justify-center gap-1">
                      {category.skills.map((skill) => (
                        <HoverCard key={skill.name}>
                          <HoverCardTrigger asChild>
                            <div className="cursor-pointer w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-semibold hover:bg-primary/20 transition-colors">
                              {skill.icon}
                            </div>
                          </HoverCardTrigger>
                          <HoverCardContent className="w-56">
                            <div className="space-y-2">
                              <h4 className="font-semibold">{skill.name}</h4>
                              <div className="h-2 bg-muted rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-primary rounded-full"
                                  style={{ width: `${skill.level}%` }}
                                />
                              </div>
                              <div className="flex justify-between text-xs text-muted-foreground">
                                <span>{skill.experience}</span>
                                <span>{skill.level}%</span>
                              </div>
                            </div>
                          </HoverCardContent>
                        </HoverCard>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Detailed Skills Section */}
        <section>
          <h2 className="text-3xl font-bold mb-8 text-center">Skills Breakdown</h2>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {skillCategories.map((category, categoryIndex) => (
                <AccordionItem key={category.category} value={category.category}>
                  <AccordionTrigger className="text-xl">{category.category}</AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-6 py-2">
                      {category.skills.map((skill, index) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <div className="flex justify-between mb-2">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-muted-foreground text-sm">{skill.experience}</span>
                          </div>
                          <div className="relative h-2 bg-muted rounded-full overflow-hidden">
                            <motion.div
                              className="absolute h-full bg-primary rounded-full"
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.level}%` }}
                              transition={{ duration: 1, ease: "easeOut" }}
                              viewport={{ once: true }}
                            />
                          </div>
                          <div className="flex justify-end">
                            <span className="text-xs text-muted-foreground mt-1">{skill.level}%</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Skills Journey */}
        <section className="mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Learning Journey</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              I believe in continuous improvement and lifelong learning, always expanding my skill set.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Always Learning",
                description: "I dedicate time each week to learn new technologies and stay updated with industry trends through online courses, tutorials, and tech conferences.",
                icon: "🎓"
              },
              {
                title: "Problem Solver",
                description: "I approach complex technical challenges with analytical thinking and creative problem-solving, breaking down problems into manageable solutions.",
                icon: "🧩"
              },
              {
                title: "Team Collaborator",
                description: "I excel in team environments, sharing knowledge, mentoring junior developers, and communicating effectively with stakeholders.",
                icon: "👥"
              }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-8 text-center">
                    <div className="text-4xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SkillsPage;
