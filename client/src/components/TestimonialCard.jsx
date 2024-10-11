import PropTypes from 'prop-types'

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