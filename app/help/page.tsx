import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { HelpCircle, MessageCircle, Book, Video, Mail, Phone } from "lucide-react"

export default function HelpPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-foreground mb-2">Help & Support</h1>
          <p className="text-muted-foreground">We're here to help you succeed in your learning journey</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6">
          {/* FAQ and Resources */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Help */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Quick Help</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Book className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">User Guide</h3>
                    <p className="text-sm text-muted-foreground">Learn how to use all features</p>
                  </CardContent>
                </Card>

                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Video className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="font-semibold mb-2">Video Tutorials</h3>
                    <p className="text-sm text-muted-foreground">Watch step-by-step guides</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* FAQ */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
              <div className="space-y-4">
                {[
                  {
                    question: "How do I track my learning progress?",
                    answer:
                      "Visit your dashboard to see detailed progress tracking, including XP earned, lessons completed, and achievement badges.",
                  },
                  {
                    question: "Can I use this platform offline?",
                    answer:
                      "Yes! Many lessons and games are designed to work offline. Download content when you have internet access.",
                  },
                  {
                    question: "How do I earn XP and badges?",
                    answer:
                      "Complete lessons, play educational games, maintain learning streaks, and participate in challenges to earn XP and unlock badges.",
                  },
                  {
                    question: "What if I'm having trouble with a lesson?",
                    answer:
                      "Each lesson has built-in hints and explanations. You can also ask your teacher or use our help chat for additional support.",
                  },
                ].map((faq, index) => (
                  <Card key={index}>
                    <CardHeader>
                      <CardTitle className="text-lg flex items-start gap-2">
                        <HelpCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        {faq.question}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>

          {/* Contact and Support */}
          <div className="space-y-6">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Contact Support
                </CardTitle>
                <CardDescription>Send us a message and we'll get back to you soon</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="your.email@example.com" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What can we help you with?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Describe your question or issue..." rows={4} />
                </div>
                <Button className="w-full">Send Message</Button>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card>
              <CardHeader>
                <CardTitle>Other Ways to Reach Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">Email Support</p>
                    <p className="text-sm text-muted-foreground">support@learnplay.edu</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 dark:bg-green-900/20 rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-medium">Phone Support</p>
                    <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle>System Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-sm font-medium">All Systems Operational</span>
                </div>
                <p className="text-xs text-muted-foreground">Last updated: 2 minutes ago</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
