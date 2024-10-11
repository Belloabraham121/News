import { Fragment } from 'react'
import heroImage from '../assets/images/Herosection.png'

export default function HeroSection() {
  return (
    <Fragment>
      {/* Hero section */}
      <section className="container mx-auto px-4 py-16 md:flex items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Bring back the joy of reading newsletters</h1>
          <p className="text-xl text-gray-600 mb-6">Discover, subscribe and manage all your email newsletters in one place.</p>
          <button className="bg-green-500 text-white px-6 py-3 rounded-full text-lg hover:bg-green-600">Try for free</button>
        </div>
        <div className="md:w-1/2">
          <img src={heroImage} alt="Newsletter App Illustration" width={500} height={400} />
        </div>
      </section>
    </Fragment>
  )
}