import { Briefcase, Code, User } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <div className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary mb-6">
              <h3 className="text-2xl text-glow font-semibold mb-4">
                Crafting Dynamic Web Experiences with Java & Modern Technologies
              </h3>

              <p className="text-muted-foreground mb-3">
                With over 5 years of experience in Java Full Stack Development, I specialize in building scalable web applications using Java, Spring Boot, React, and RESTful APIs. I’m skilled in creating responsive front-end interfaces and robust back-end systems that deliver seamless, high-performance user experiences.
              </p>

              <p className="text-muted-foreground">
                I’m passionate about creating elegant, user-focused solutions to complex problems and constantly exploring new technologies to stay ahead in the ever-evolving world of web development.
              </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
            
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-glow font-semibold text-lg">Education</h4>
                  <p className="text-muted-foreground">
                    Bachelor of Computer Applications
                  </p>
                   <p className="text-muted-foreground">
                    Dr. M.G.R. Educational and Research Institute, Chennai
                  </p>
                  <p className="text-muted-foreground">
                    Graduation: 2025
                  </p>
                  <p className="text-muted-foreground">
                    CGPA: 8.28 out of 10
                  </p>
                </div>
              </div>
            </div>
          
            
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="text-glow font-semibold text-lg"> Experience</h4>
                  <p className="text-muted-foreground">
                    1. Sutherland Global Services, Chennai
                     <p className="text-muted-foreground">
                    CRM & Customer Support | Aug 2024 – Sep 2024
                  </p>
                    <br></br>
                    Assisted international customers in onboarding and queries related to the CRM tool.
                    Supported the customer success team by handling service tickets, tracking user issues,
                    and escalating complex problems. Gained hands-on experience in client communication,
                    technical support, and CRM platform operations. 
                  </p>
                  <p className="text-muted-foreground"> <br></br> 
                  
                    2. FITA Academy, Chennai
                    <p className="text-muted-foreground">
                      Java Full Stack Development Trainee | Jan 2025 – Jul 2025
                    </p>

                    <br />
                    Trained extensively in Java, Spring Boot, RESTful APIs, MySQL, React, and front-end
                  technologies. Built and deployed full-stack applications integrating backend services with
                  responsive UIs. Participated in team projects, code reviews, and collaborative sessions
                  simulating real-world practices.
                  </p>

                </div>
              </div>
            </div>
             <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-glow font-semibold text-lg mb-4">Certifications</h4>

                  <div className="space-y-3">
                    <div className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary">
                      <p className="text-muted-foreground">
                        Certified Software Developer – Java SE 17 (Associate Level) EDUEX - 2025
                      </p>
                    </div>

                    <div className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary">
                      <p className="text-muted-foreground">
                        Generative AI Fundamentals / Applications, Udemy - 2024
                      </p>
                    </div>

                    <div className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary">
                      <p className="text-muted-foreground">
                        Java Full Stack Development (React)<br></br> FITA Academy - 2025
                      </p>
                    </div>

                    <div className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary">
                      <p className="text-muted-foreground">
                        REST APIs with Spring Boot <br></br>FITA Academy - 2025
                      </p>
                    </div>
                  </div>
                </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      
    
    </section>
  );
};
