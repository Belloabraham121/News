import { FeatureCard, ServiceCard, TestimonialCard } from '../components/Features'
import HeroSection from './HeroSection'
import NavBar from './NavBar'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header section */}
      <NavBar/>

      <main>
       <HeroSection/>

        {/* Features section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Why Newsletter-App? How to enjoy your feed?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <FeatureCard
                title="Kill The Spam"
                description="Unsubscribe to newsletters, filter spam and focus on what matters to you."
              />
              <FeatureCard
                title="Be part of Newsletter community"
                description="Share your favorite newsletters with others and receive recommendations."
              />
              <FeatureCard
                title="Discover Newsletters"
                description="Find new and interesting newsletters to expand your knowledge."
              />
              <FeatureCard
                title="Control Your Feed"
                description="Organize newsletters into folders, set reading priorities, and manage your subscriptions."
              />
            </div>
          </div>
        </section>

        {/* Why Newsletter-App section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8">WHY NEWSLETTER-APP?</h2>
            <p className="text-xl text-gray-600 mb-6">
              Newsletter-App is the ultimate application for newsletters reading. With Newsletter-App, you will have the chance to discover, subscribe and manage all your email newsletters in one place. There are no ads, no spam emails and...
            </p>
            <button className="text-green-500 font-semibold hover:underline">READ MORE</button>
          </div>
        </section>

        {/* Services section */}
        <section className="bg-gray-100 py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard
                title="BUSINESS DEVELOPMENT"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam sapien sed lorem."
              />
              <ServiceCard
                title="DIGITAL MARKETING"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam sapien sed lorem."
              />
              <ServiceCard
                title="TECHNOLOGIES"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam sapien sed lorem."
              />
            </div>
          </div>
        </section>

        {/* Testimonials section */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Enjoy reading newsletters</h2>
            <p className="text-xl text-gray-600 mb-12">Read valuable, high-quality content based on your intest and expertise</p>
            <h3 className="text-2xl font-semibold mb-8">Join 1000+ Happy Premium Users</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <TestimonialCard
                name="John Doe"
                comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam sapien sed lorem."
              />
              <TestimonialCard
                name="Jane Smith"
                comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam sapien sed lorem."
              />
              <TestimonialCard
                name="Bob Johnson"
                comment="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut aliquam sapien sed lorem."
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer section */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="md:flex justify-between items-center mb-8">
            <div className="mb-8 md:mb-0">
              <h3 className="text-2xl font-bold mb-4">Bring back the joy of reading newsletters</h3>
              <p className="text-gray-400 mb-4">Subscribe now and be ready for an amazing experience</p>
              <ul className="space-y-2">
                <li>✓ Save time and read your newsletters in one place.</li>
                <li>✓ Organize your newsletter feed according to your interests.</li>
                <li>✓ Forget about newsletter emails and focus only on reading.</li>
              </ul>
            </div>
            <button className="bg-green-500 text-white px-6 py-3 rounded-full text-lg hover:bg-green-600">
              SUBSCRIBE
            </button>
          </div>
          <div className="border-t border-gray-800 pt-8 mt-8 grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4">Get started</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Sign up</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Downloads</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Pricing</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Overview</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Premium Plans</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Affiliate Program</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Follow</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Facebook</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Instagram</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Cookies</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2023 Newsletter App. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}