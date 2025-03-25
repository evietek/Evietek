export default function TestimonialCard({ name, title, review, stars = 5 }) {
    return (
      <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 text-center max-w-sm transition-transform hover:-translate-y-1 duration-300">
        <h3 className="text-xl font-semibold text-[#341E61] mb-2">{title}</h3>
  
        {/* Trustpilot Style Stars */}
        <div className="flex justify-center gap-1 mb-4">
          {[...Array(stars)].map((_, i) => (
            <span key={i} className="text-[#00B67A] text-2xl">★</span>
          ))}
        </div>
  
        <p className="text-gray-600 text-sm mb-6 italic">`{review}`</p>
        <p className="font-medium text-[#341E61]">{name}</p>
      </div>
    );
  }
  