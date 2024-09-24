import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <a className="mr-6 flex items-center space-x-2" href="/">
              <span className="hidden font-bold sm:inline-block">Madalitso Simbeye</span>
            </a>
            <nav className="flex items-center space-x-6 text-sm font-medium">
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#about">About</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#skills">Skills</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#projects">Projects</a>
              <a className="transition-colors hover:text-foreground/80 text-foreground/60" href="#contact">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <section id="about" className="py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Madalitso Simbeye
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Full Stack Developer passionate about creating efficient and user-friendly web applications.
                </p>
              </div>
              <div className="space-x-4">
                <Button asChild>
                  <a href="#contact">Contact Me</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#projects">View Projects</a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12">
          <h2 className="text-2xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {["JavaScript", "TypeScript", "React", "Node.js", "Python", "Django", "PostgreSQL", "MongoDB", "Docker", "AWS", "Git", "Agile"].map((skill) => (
              <div key={skill} className="bg-secondary text-secondary-foreground rounded-md p-2 text-center">
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12">
          <h2 className="text-2xl font-bold mb-6">Projects</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>E-commerce Platform</CardTitle>
                <CardDescription>A full-stack e-commerce solution</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Built with React, Node.js, and MongoDB</p>
                <Button variant="outline" asChild className="w-full">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Task Management App</CardTitle>
                <CardDescription>Efficient task tracking for teams</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Developed using Django and PostgreSQL</p>
                <Button variant="outline" asChild className="w-full">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Weather Forecast API</CardTitle>
                <CardDescription>RESTful API for weather data</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-2">Created with Node.js and Express</p>
                <Button variant="outline" asChild className="w-full">
                  <a href="#" target="_blank" rel="noopener noreferrer">
                    View Project <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12">
          <h2 className="text-2xl font-bold mb-6">Contact Me</h2>
          <div className="flex flex-col space-y-4">
            <a href="mailto:madalitso.simbeye@example.com" className="flex items-center space-x-2 text-primary hover:underline">
              <Mail className="h-5 w-5" />
              <span>madalitso.simbeye@example.com</span>
            </a>
            <a href="https://github.com/madalitso-simbeye" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-primary hover:underline">
              <Github className="h-5 w-5" />
              <span>GitHub</span>
            </a>
            <a href="https://linkedin.com/in/madalitso-simbeye" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-primary hover:underline">
              <Linkedin className="h-5 w-5" />
              <span>LinkedIn</span>
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-6 md:py-0">
        <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
          <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
            <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
              © 2023 Madalitso Simbeye. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}