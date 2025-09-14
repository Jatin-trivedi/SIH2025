import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Clock, Star, Play, CheckCircle, Lock } from "lucide-react"

export default function LearnPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">STEM Lessons</h1>
          <p className="text-muted-foreground">Interactive lessons designed for your grade level</p>
        </div>

        {/* Subject Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { subject: "Mathematics", color: "bg-blue-500", lessons: 24, completed: 18 },
            { subject: "Science", color: "bg-green-500", lessons: 20, completed: 12 },
            { subject: "Technology", color: "bg-purple-500", lessons: 16, completed: 8 },
            { subject: "Engineering", color: "bg-orange-500", lessons: 12, completed: 4 },
          ].map((category) => (
            <Card key={category.subject} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 ${category.color} rounded-full flex items-center justify-center`}>
                    <BookOpen className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold">{category.subject}</h3>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Progress</span>
                    <span>
                      {category.completed}/{category.lessons}
                    </span>
                  </div>
                  <Progress value={(category.completed / category.lessons) * 100} className="h-2" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Recent Lessons */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Continue Learning</h2>
            <div className="space-y-4">
              {[
                {
                  title: "Quadratic Equations",
                  subject: "Mathematics",
                  duration: "25 min",
                  progress: 75,
                  status: "in-progress",
                  difficulty: "Intermediate",
                },
                {
                  title: "Photosynthesis Process",
                  subject: "Science",
                  duration: "30 min",
                  progress: 0,
                  status: "new",
                  difficulty: "Beginner",
                },
                {
                  title: "Basic Programming",
                  subject: "Technology",
                  duration: "45 min",
                  progress: 100,
                  status: "completed",
                  difficulty: "Beginner",
                },
                {
                  title: "Bridge Design",
                  subject: "Engineering",
                  duration: "40 min",
                  progress: 0,
                  status: "locked",
                  difficulty: "Advanced",
                },
              ].map((lesson, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{lesson.title}</h3>
                          <Badge variant="secondary" className="text-xs">
                            {lesson.subject}
                          </Badge>
                          <Badge
                            variant={
                              lesson.difficulty === "Beginner"
                                ? "default"
                                : lesson.difficulty === "Intermediate"
                                  ? "secondary"
                                  : "destructive"
                            }
                            className="text-xs"
                          >
                            {lesson.difficulty}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {lesson.duration}
                          </div>
                          {lesson.status === "completed" && (
                            <div className="flex items-center gap-1 text-green-600">
                              <CheckCircle className="w-4 h-4" />
                              Completed
                            </div>
                          )}
                          {lesson.status === "in-progress" && (
                            <div className="flex items-center gap-1 text-blue-600">
                              <Play className="w-4 h-4" />
                              In Progress
                            </div>
                          )}
                          {lesson.status === "locked" && (
                            <div className="flex items-center gap-1 text-muted-foreground">
                              <Lock className="w-4 h-4" />
                              Locked
                            </div>
                          )}
                        </div>
                        {lesson.progress > 0 && lesson.progress < 100 && (
                          <div className="mb-3">
                            <div className="flex justify-between text-sm mb-1">
                              <span>Progress</span>
                              <span>{lesson.progress}%</span>
                            </div>
                            <Progress value={lesson.progress} className="h-2" />
                          </div>
                        )}
                      </div>
                      <div className="ml-4">
                        <Button
                          variant={lesson.status === "completed" ? "outline" : "default"}
                          disabled={lesson.status === "locked"}
                          className="min-w-[100px]"
                        >
                          {lesson.status === "completed"
                            ? "Review"
                            : lesson.status === "in-progress"
                              ? "Continue"
                              : lesson.status === "locked"
                                ? "Locked"
                                : "Start"}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Achievement */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-500" />
                  Recent Achievement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-semibold mb-1">Math Master</h3>
                  <p className="text-sm text-muted-foreground">Completed 10 math lessons in a row!</p>
                </div>
              </CardContent>
            </Card>

            {/* Study Streak */}
            <Card>
              <CardHeader>
                <CardTitle>Study Streak</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500 mb-2">7</div>
                  <p className="text-sm text-muted-foreground">Days in a row</p>
                  <p className="text-xs text-muted-foreground mt-2">Keep it up! You're doing great!</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
