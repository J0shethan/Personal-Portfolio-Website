import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "AI Email Generator",
    description: "Developed an AI-powered email generator using Spring Boot, React.js, and Gemini API with a Gmail Chrome Extension for one-click smart replies.",
    image: "/projects/aiMail.webp",
    tags: ["Java", "Spring Boot", "Spring AI"],
    demoUrl: "https://github.com/J0shethan/email-writer",
    githubUrl: "https://github.com/J0shethan/email-writer",
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description:
      "Built a responsive personal portfolio website using React and Tailwind CSS to showcase projects, skills, and experience with a modern and interactive UI.",
    image: "/projects/portfolio.jpg",
    tags: ["React", "TailwindCSS", "Supabase"],
    demoUrl: "https://github.com/J0shethan?tab=repositories",
    githubUrl: "https://github.com/J0shethan?tab=repositories",
  },
  {
    id: 3,
    title: "E-commerce StoreFront",
    description:
      "Developed a full-stack e-commerce web app using React.js and Spring Boot with RESTful APIs, featuring product search, filter, and category-based listing for a seamless shopping experience.",
    image: "/projects/productcat.jpg",
    tags: ["Java", "Spring Boot", "React"],
    demoUrl: "https://github.com/J0shethan/productcatalog",
    githubUrl: "https://github.com/J0shethan/productcatalog",
  },
  {
    id: 4,
    title: "To-Do Web Application",
    description:
      "Developed a To-Do web application using Java Spring Boot for managing and tracking daily tasks efficiently.",
    image: "/projects/Todolist.png",
    tags: ["Java", "Spring Boot", "React"],
    demoUrl: "https://github.com/J0shethan/spring-boot-todo-application",
    githubUrl: "https://github.com/J0shethan/spring-boot-todo-application",
  },
  {
    id: 5,
    title: "Authentication Module",
    description:
      "Developed an Authentication Module using Node.js, Express.js, and React for secure user login, registration, and session management..",
    image: "/projects/Authentication.png",
    tags: ["Node.js", "Express.js", "React"],
    demoUrl: "https://github.com/J0shethan/auth-project",
    githubUrl: "https://github.com/J0shethan/auth-project",
  },
  
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/J0shethan"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
