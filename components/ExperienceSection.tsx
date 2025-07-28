'use client';

import Image from 'next/image';

export default function ExperienceSection() {
  const experiences = [
    {
      company: "Contsolution Development",
      location: "Yogyakarta",
      role: "Project Manager",
      period: "Aug 2021 – Present",
      isActive: true
    },
    {
      company: "PT. Gemala Kempa Daya",
      location: "Jakarta Utara",
      role: "Product Owner Intern",
      period: "Jun 2024 – Aug 2024",
      isActive: false
    },
    {
      company: "ITC UPN \"Veteran\" Yogyakarta",
      location: "Yogyakarta",
      role: "Head of Project Manager Department",
      period: "Feb 2023 – Jun 2024",
      isActive: false
    }
  ];

  const companies = [
    {
      name: "Siva Group",
      logo: "https://siva.jsstatic.com/id/18520/images/banner/18520_banner_0_902087.jpg"
    },
    {
      name: "Pindad",
      logo: "https://pindad.com/uploads/images/article/full/logo_PINDAD_sedang19.jpg"
    },
    {
      name: "Gemala Kempa Daya",
      logo: "https://media.cakeresume.com/image/upload/s--mLgymx6L--/c_pad,fl_png8,h_400,w_400/v1691049763/dmqpwvv9mf8l0v9nuest.png"
    },
    {
      name: "ITC UPN Veteran",
      logo: "https://tse4.mm.bing.net/th/id/OIP.ZqZwhFxO_XFLlQP_PI6ZJQHaCe?pid=Api&P=0&h=180"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Experience */}
          <div className="lg:col-span-2">
            <div className="card scroll-animate">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold">Experience</h2>
                <span className="text-sm bg-white/10 px-3 py-1 rounded-full border border-white/20">
                  3+ Years
                </span>
              </div>
              
              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative">
                    {index < experiences.length - 1 && <div className="timeline-line"></div>}
                    
                    <div className="flex items-start space-x-4">
                      <div className={`timeline-dot ${exp.isActive ? 'active' : ''}`}></div>
                      
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="font-bold text-xl text-white">{exp.company}</h3>
                            <p className="text-white/60 text-sm">{exp.location}</p>
                          </div>
                          <p className="text-sm text-white/50 whitespace-nowrap ml-4">
                            {exp.period}
                          </p>
                        </div>
                        <p className="text-white/70 text-sm mb-2 leading-relaxed">
                          {exp.description}
                        </p>
                        <p className="text-white font-medium">{exp.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Company | Worked With */}
            <div className="card scroll-animate mt-8">
              <h3 className="text-xl font-bold mb-6">Company | Worked With</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {companies.map((company, index) => (
                  <div key={index} className="flex flex-col items-center p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all cursor-hover">
                    <Image
                      src={company.logo}
                      alt={company.name}
                      width={60}
                      height={40}
                      className="rounded-lg object-contain mb-2"
                    />
                    <span className="text-xs text-white/70 text-center">{company.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills & Tools */}
          <div className="space-y-8">
            <SkillsCard />
            <ToolsCard />
            <ConnectCard />
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsCard() {
  const skills = [
    "Project Planning", "Project Scheduling", "Budgeting", "Cost Management",
    "Risk Management", "Project Documentation", "Leadership", "Communication",
    "Time Management", "Team Management", "Problem Solving", "Adaptability"
  ];

  return (
    <div className="card scroll-animate">
      <h3 className="text-xl font-bold mb-6">Skills & Expertise</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span key={index} className="skill-item cursor-hover">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

function ToolsCard() {
  const tools = [
    { name: "GitHub", icon: "M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" },
    { name: "Trello", icon: "M21 0H3C1.343 0 0 1.343 0 3v18c0 1.657 1.343 3 3 3h18c1.657 0 3-1.343 3-3V3c0-1.657-1.343-3-3-3zM10.44 18.18c0 .795-.645 1.44-1.44 1.44H4.56c-.795 0-1.44-.645-1.44-1.44V5.82c0-.795.645-1.44 1.44-1.44H9c.795 0 1.44.645 1.44 1.44v12.36zm10.44-6c0 .795-.645 1.44-1.44 1.44H15c-.795 0-1.44-.645-1.44-1.44V5.82c0-.795.645-1.44 1.44-1.44h4.44c.795 0 1.44.645 1.44 1.44v6.36z" },
    { name: "Notion", icon: "M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466l1.823 1.447zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233 4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933l3.268-.186z" },
    { name: "Canva", icon: "M7.5 11.5c0-2.485 2.015-4.5 4.5-4.5s4.5 2.015 4.5 4.5-2.015 4.5-4.5 4.5-4.5-2.015-4.5-4.5zm4.5-2.5c-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5 2.5-1.119 2.5-2.5-1.119-2.5-2.5-2.5z" },
    { name: "Figma", icon: "M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.1 3.89 23 5 23H19C20.1 23 21 22.1 21 21V9M19 21H5V3H14V9H19V21Z" },
    { name: "Discord", icon: "M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" }
  ];

  return (
    <div className="card scroll-animate">
      <h3 className="text-xl font-bold mb-2">Essential Stack</h3>
      <p className="text-sm text-white/60 mb-6">
        A Comprehensive Collection of Useful Tools to Support and Optimize My Project Management Workflow
      </p>
      <div className="grid grid-cols-2 gap-4">
        {tools.map((tool, index) => (
          <div key={index} className="flex flex-col items-center p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-all cursor-hover">
            <svg className="tool-icon" viewBox="0 0 24 24">
              <path d={tool.icon} />
            </svg>
            <span className="text-xs text-white/70">{tool.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

function ConnectCard() {
  const socialLinks = [
    { name: "LinkedIn", href: "https://www.linkedin.com/in/rizal-hanifa-pratama/" },
    { name: "WhatsApp", href: "https://wa.me/6289667912404" },
    { name: "TikTok", href: "https://www.tiktok.com/@riizalhp" },
    { name: "Instagram", href: "https://www.instagram.com/riizalhp" }
  ];

  return (
    <div className="card scroll-animate">
      <h3 className="text-xl font-bold mb-6">Connect</h3>
      <div className="space-y-4">
        {socialLinks.map((link, index) => (
          <a
            key={index}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors cursor-hover"
          >
            <span>{link.name}</span>
          </a>
        ))}
      </div>
      
      <div className="border-t border-white/20 mt-6 pt-6">
        <p className="text-sm text-white/50 mb-2">Let's Work Together!</p>
        <a
          href="mailto:rizalhp12345@gmail.com"
          className="text-white/70 hover:text-white transition-colors cursor-hover"
        >
          Send Email → rizalhp12345@gmail.com
        </a>
      </div>
    </div>
  );
}
