import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Play, Users, Award } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="mb-6">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-4">
              <BookOpen className="w-10 h-10 text-primary-foreground" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-balance mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Learn & Play Together
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground text-balance mb-8 max-w-3xl mx-auto">
            Gamified learning platform designed for rural students and teachers. Make education fun, accessible, and
            engaging for grades 6-12.
          </p>

          {/* Quick Access Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="w-full sm:w-auto text-lg px-8 py-6" asChild>
              <Link href="/learn">
                <BookOpen className="w-5 h-5 mr-2" />
                Start Learning
              </Link>
            </Button>
            <Button size="lg" variant="secondary" className="w-full sm:w-auto text-lg px-8 py-6" asChild>
              <Link href="/play">
                <Play className="w-5 h-5 mr-2" />
                Play Games
              </Link>
            </Button>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-accent rounded-full flex items-center justify-center mb-4">
                <BookOpen className="w-6 h-6 text-accent-foreground" />
              </div>
              <CardTitle>Interactive Lessons</CardTitle>
              <CardDescription>
                Engaging STEM lessons designed for rural students with offline-friendly content
              </CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-secondary rounded-full flex items-center justify-center mb-4">
                <Play className="w-6 h-6 text-secondary-foreground" />
              </div>
              <CardTitle>Educational Games</CardTitle>
              <CardDescription>Fun quizzes and games that make learning enjoyable and memorable</CardDescription>
            </CardHeader>
          </Card>

          <Card className="text-center hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="mx-auto w-12 h-12 bg-chart-3 rounded-full flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <CardTitle>Progress Tracking</CardTitle>
              <CardDescription>
                Earn badges, track streaks, and celebrate achievements along your learning journey
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Call to Action */}
        <Card className="bg-gradient-to-r from-primary to-secondary text-primary-foreground">
          <CardContent className="p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to Start Your Learning Adventure?</h2>
            <p className="text-lg mb-6 opacity-90">
              Join thousands of students and teachers already using our platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
                <Link href="/auth">
                  <Users className="w-5 h-5 mr-2" />
                  Sign Up Now
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 bg-white/10 border-white/20 text-white hover:bg-white/20"
                asChild
              >
                <Link href="/auth">Already have an account? Sign In</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
