import { AnimatedSection } from "../AnimatedSection";
import { ExternalLink, Server, Network, Globe, FileText } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    icon: Server,
    title: "Apache Web Server Automation using Ansible on AWS EC2",
    desc: "Automated Apache web server installation and configuration using Ansible playbooks on AWS EC2 instances. Implemented reusable roles and inventory files for managing multiple servers.",
    tech: ["AWS EC2", "Ansible", "Linux", "YAML"],
    link: "https://github.com/spshushil"
  },
  {
    icon: Network,
    title: "CCNA Networking Projects",
    desc: "Designed and simulated enterprise-level network topologies using Cisco Packet Tracer and configured routing protocols including BGP, OSPF, RIP, NAT, and DHCP.",
    tech: ["Cisco Packet Tracer", "Networking"],
    link: "https://github.com/spshushil"
  },
  {
  icon: FileText,
  title: "PDF Creator for SAR Report (sky yoga)",
  desc: "Developed a web appliction that generate PDF report for sky yoga's SAR report. The application allows users to input data and generates a formatted PDF report based on the provided information.",
  tech: ["TypeScript", "Node.js", "PDF Generator", "Tailwind CSS", "supabase", "Vercel"],
  link: "https://sar-report-generate.vercel.app/",
  },
  {
  icon: Globe,
  title: "GMVKM Trust Web Application",
  desc: "Developed a full-stack web application for managing trust activities and member data. Implemented features like member management (add, edit, delete), responsive UI, and efficient backend integration for seamless data handling.",
  tech: ["React.js", "Node.js", "MongoDB", "REST API", "Admin Panel", "Vercel"],
  link: "https://gym-mvkm-trust.vercel.app/"
}
];

export const Projects = () => (
  <section id="projects" className="section-padding">
    <div className="max-w-6xl mx-auto">
      <AnimatedSection>
        <p className="font-mono text-sm text-primary mb-2">04. Projects</p>
        <h2 className="text-3xl md:text-4xl font-bold mb-10">Featured Projects</h2>
      </AnimatedSection>

      <div className="grid md:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <AnimatedSection key={p.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.3 }}
              className="glass rounded-xl p-6 h-full flex flex-col group hover:glow-sm transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <p.icon className="text-primary" size={22} />
                </div>
                <a
                href={p.link}
                target="_blank"
                rel="noopener noreferrer"
                >
                  <ExternalLink
                  size={16}
                  className="text-muted-foreground group-hover:text-primary transition-colors cursor-pointer"/>
                  </a>
              </div>

              <h3 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors leading-snug">
                {p.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{p.desc}</p>

              <div className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span key={t} className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-secondary text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);
