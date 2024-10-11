import PropTypes from 'prop-types'

export function FeatureCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

FeatureCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export function ServiceCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-2 text-pink-500">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

ServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired
}

export function TestimonialCard({ name, comment }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <p className="text-gray-600 mb-4">{comment}</p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-gray-300 rounded-full mr-4"></div>
        <span className="font-semibold">{name}</span>
      </div>
    </div>
  )
}

TestimonialCard.propTypes = {
  name: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired
}