import PropTypes from 'prop-types'


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

