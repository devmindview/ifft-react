import { motion } from "framer-motion";
import events from "../services/eventData";



function EventSection() {
  return (
        <section className="bg-white text-dark py-16">
      <div className="max-w-7xl mx-auto px-4 space-y-10">
        {events.map((event, index) => (
          <div
            key={event.id}
            className="relative group overflow-hidden border border-white/70 rounded-xl bg-slate-100 backdrop-blur-sm p-6 sm:p-10 flex flex-col sm:flex-row items-center sm:items-start"
          >
            {/* Image for mobile (always visible) */}
            <div className="sm:hidden mb-4 w-full">
              <img
                src={event.image}
                alt={event.title}
                className="rounded-xl w-full object-cover"
              />
            </div>

            {/* Slide-in image on desktop */}
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="hidden sm:block absolute left-0 top-0 h-full w-1/3 z-0 overflow-hidden"
            >
              <img
                src={event.image}
                alt={event.title}
                className="h-full w-full object-cover rounded-l-xl transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-black/40 rounded-l-xl" />
            </motion.div>

            {/* Text content */}
            <div className="relative z-10 sm:pl-[35%] w-full text-center sm:text-left">
              <h3 className="text-black text-xs tracking-widest uppercase mb-2">
                {event.year}
              </h3>
              <h3 className="text-2xl md:text-3xl font-semibold mb-2">
                {event.title}
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                {event.detail}
              </p>
            </div>
      
          </div>
        ))}
      </div>
    </section>
  )
}

export default EventSection