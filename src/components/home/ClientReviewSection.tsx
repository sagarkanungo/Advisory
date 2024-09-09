import React from 'react'
import { review } from '../interface/clientReview'

function ClientReviewSection() {
  return (
    <div className="bg-gray-100 py-12">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-teal-950">CLIENT REVIEW</h2>
      </div>
      <div className="flex flex-wrap justify-center gap-6 px-4">
        {review.map((item, index) => (
          <div key={index} className="w-full max-w-sm bg-blue-50 p-6 rounded-lg shadow-lg">
            <img src={item.image} alt="Client" className="w-24 h-24 rounded-full mx-auto mb-4 object-cover" />
            <h3 className="text-lg font-semibold text-teal-800 text-center mb-2">{item.name}</h3>
            <p className="text-gray-700 text-center mb-2">{item.review}</p>
            <p className="text-yellow-500 text-center">{'★'.repeat(item.rating)}{'☆'.repeat(5 - item.rating)}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ClientReviewSection
