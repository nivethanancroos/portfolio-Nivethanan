import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <section
      id="contact"
      className="w-full py-24 bg-white px-6 md:px-20 lg:px-32"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header - Left Aligned for a modern feel */}
        <div className="mb-16">
          <h2 className="text-xs font-bold tracking-[0.2em] text-[#d4a017] uppercase mb-3">
            Contact
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold text-[#1a1a1a] tracking-tight">
            Get In Touch
          </h3>
          <p className="text-gray-400 mt-6 max-w-lg text-lg leading-relaxed">
            Have a project in mind or just want to connect? Feel free to reach
            out.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-16 items-start">
          {/* Contact Info Cards */}
          <div className="lg:col-span-2 space-y-10">
            {[
              {
                icon: Mail,
                label: "Email",
                value: "nivethanancroos14@gmail.com",
              },
              { icon: Phone, label: "Phone", value: "+94 772287926" },
              { icon: MapPin, label: "Location", value: "Sri Lanka" },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-5 group">
                <div className="mt-1 p-3 bg-[#fafafa] border border-gray-100 rounded-2xl group-hover:bg-[#d4a017]/5 group-hover:border-[#d4a017]/20 transition-colors duration-300">
                  <item.icon size={20} className="text-[#d4a017]" />
                </div>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                    {item.label}
                  </p>
                  <p className="text-lg font-medium text-[#1a1a1a] break-all">
                    {item.value}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Form - Refined & Simple */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-transparent border-b-2 border-gray-100 py-3 focus:outline-none focus:border-[#d4a017] transition-colors placeholder:text-gray-300 text-[#1a1a1a]"
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                  />
                </div>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-transparent border-b-2 border-gray-100 py-3 focus:outline-none focus:border-[#d4a017] transition-colors placeholder:text-gray-300 text-[#1a1a1a]"
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                  />
                </div>
              </div>

              <div className="relative">
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full bg-transparent border-b-2 border-gray-100 py-3 focus:outline-none focus:border-[#d4a017] transition-colors resize-none placeholder:text-gray-300 text-[#1a1a1a]"
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-3 bg-[#2f2a26] text-white  px-10 py-4 rounded-full font-semibold hover:bg-[#d4a017] transition-all duration-300 group"
              >
                Send Message
                <Send
                  size={18}
                  className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
