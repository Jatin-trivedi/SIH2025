import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Play, Trophy, Users, Clock, Star, Zap, Brain, Target } from "lucide-react"

export default function PlayPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Educational Games</h1>
          <p className="text-muted-foreground">Learn while having fun with interactive quizzes and games</p>
        </div>

        {/* Game Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { category: "Quick Quiz", icon: Zap, color: "bg-yellow-500", games: 15 },
            { category: "Brain Teasers", icon: Brain, color: "bg-purple-500", games: 12 },
            { category: "Challenges", icon: Target, color: "bg-red-500", games: 8 },
            { category: "Multiplayer", icon: Users, color: "bg-green-500", games: 6 },
          ].map((category) => (
            <Card key={category.category} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardContent className="p-6 text-center">
                <div
                  className={`w-12 h-12 ${category.color} rounded-full flex items-center justify-center mx-auto mb-3`}
                >
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-semibold mb-1">{category.category}</h3>
                <p className="text-sm text-muted-foreground">{category.games} games</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Featured Games */}
        <div className="grid lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Popular Games</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                {
                  title: "Math Lightning",
                  description: "Quick arithmetic challenges",
                  difficulty: "Easy",
                  players: 1247,
                  duration: "5 min",
                  rating: 4.8,
                  category: "Mathematics",
                },
                {
                  title: "Science Explorer",
                  description: "Discover scientific facts",
                  difficulty: "Medium",
                  players: 892,
                  duration: "10 min",
                  rating: 4.6,
                  category: "Science",
                },
                {
                  title: "Code Breaker",
                  description: "Logic and programming puzzles",
                  difficulty: "Hard",
                  players: 634,
                  duration: "15 min",
                  rating: 4.9,
                  category: "Technology",
                },
                {
                  title: "Build & Test",
                  description: "Engineering design challenges",
                  difficulty: "Medium",
                  players: 456,
                  duration: "20 min",
                  rating: 4.7,
                  category: "Engineering",
                },
              ].map((game, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-lg">{game.title}</CardTitle>
                        <CardDescription>{game.description}</CardDescription>
                      </div>
                      <Badge variant="secondary">{game.category}</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {game.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {game.players}
                      </div>
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        {game.rating}
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <Badge
                        variant={
                          game.difficulty === "Easy"
                            ? "default"
                            : game.difficulty === "Medium"
                              ? "secondary"
                              : "destructive"
                        }
                      >
                        {game.difficulty}
                      </Badge>
                      <Button size="sm" className="flex items-center gap-2">
                        <Play className="w-4 h-4" />
                        Play Now
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Daily Challenge */}
            <Card className="border-2 border-accent/20 bg-gradient-to-br from-card to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Trophy className="w-5 h-5 text-yellow-500" />
                  Daily Challenge
                </CardTitle>
                <CardDescription>Complete today's challenge for bonus XP!</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center">
                  <h3 className="font-semibold mb-2">Geography Quiz</h3>
                  <p className="text-sm text-muted-foreground mb-4">Test your knowledge of world capitals</p>
                  <Button className="w-full">
                    <Play className="w-4 h-4 mr-2" />
                    Start Challenge
                  </Button>
                  <p className="text-xs text-muted-foreground mt-2">+50 Bonus XP</p>
                </div>
              </CardContent>
            </Card>

            {/* Leaderboard */}
            <Card>
              <CardHeader>
                <CardTitle>Weekly Champions</CardTitle>
                <CardDescription>Top game players this week</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                {[
                  { name: "Sarah K.", score: 2890, rank: 1 },
                  { name: "You", score: 2450, rank: 2, isUser: true },
                  { name: "Mike R.", score: 2120, rank: 3 },
                ].map((player) => (
                  <div key={player.rank} className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold text-white ${
                        player.rank === 1 ? "bg-yellow-500" : player.rank === 2 ? "bg-gray-400" : "bg-orange-500"
                      }`}
                    >
                      {player.rank}
                    </div>
                    <span className={`flex-1 text-sm ${player.isUser ? "font-semibold text-accent" : "font-medium"}`}>
                      {player.name}
                    </span>
                    <span className={`text-sm ${player.isUser ? "text-accent font-medium" : "text-muted-foreground"}`}>
                      {player.score} pts
                    </span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Game Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Your Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm">Games Played</span>
                  <span className="font-semibold">47</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Win Rate</span>
                  <span className="font-semibold text-green-600">78%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Best Streak</span>
                  <span className="font-semibold">12</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm">Favorite Subject</span>
                  <span className="font-semibold">Math</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
