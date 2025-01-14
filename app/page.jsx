import Search from "@/components/Search";
import {
  ArrowRight,
  CheckCircle,
  Filter,
  Heart,
  Laptop,
  Lightbulb,
  Sliders,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen pt-20 md:pt-40 w-full flex flex-col justify-between">
      {/* Header Section */}
      <div className="px-5 md:px-20 animate-fadeIn">
        <h1 className="text-3xl md:text-5xl text-white font-semibold text-center mb-4">
          Business Name Generator
        </h1>
        <p className="text-white text-center text-lg md:text-xl">
          Discover creative and unique business names with our AI-powered tool!
        </p>
        <Search />
      </div>

      {/* Features Section */}
      <div className="mt-16 md:mt-28 grid grid-cols-1 md:grid-cols-3 gap-10 px-5 md:px-16">
        {[
          {
            icon: <Lightbulb className="text-primary mb-3" size={40} />,
            title: "Generate Ideas",
            description:
              "Input your keywords and let our AI generate creative and unique business name ideas tailored to your preferences.",
          },
          {
            icon: <Filter className="text-primary mb-3" size={40} />,
            title: "Refine Results",
            description:
              "Use filters to refine your results by industry, length, or style to find the perfect name for your business.",
          },
          {
            icon: <Heart className="text-primary mb-3" size={40} />,
            title: "Save Your Favorites",
            description:
              "Save and shortlist your favorite names, so you can revisit them and choose the best option later.",
          },
        ].map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center border-2 border-yellow-500 p-5 rounded-lg animate-bounceIn hover:scale-105 transform transition-transform"
          >
            {feature.icon}
            <h4 className="text-white text-lg md:text-xl font-semibold">
              {feature.title}
            </h4>
            <p className="text-white text-sm md:text-base">
              {feature.description}
            </p>
          </div>
        ))}
      </div>

      {/* How It Works Section */}
      <div className="bg-[#202020] py-16 mt-16 animate-fadeIn">
        <div className="text-center px-5 md:px-20">
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-6">
            How It Works
          </h2>
          <p className="text-white text-lg md:text-xl mb-8">
            Our Business Name Generator uses cutting-edge AI to create business
            names based on the keywords you provide. Here's how it works:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                step: "Step 1: Enter Your Keywords",
                description:
                  "Start by entering a few keywords that describe your business, industry, or values.",
                icon: <Laptop className="text-primary mb-3" size={40} />,
              },
              {
                step: "Step 2: Generate Names",
                description:
                  "Our AI algorithm will generate a list of creative business names based on your keywords.",
                icon: <CheckCircle className="text-primary mb-3" size={40} />,
              },
              {
                step: "Step 3: Refine & Save",
                description:
                  "Refine the results by filtering based on length, style, or industry, and save your favorite names for future use.",
                icon: <Sliders className="text-primary mb-3" size={40} />,
              },
            ].map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center border-2 border-yellow-500 p-6 rounded-lg animate-bounceIn hover:scale-105 transform transition-transform"
              >
                {step.icon}
                <h4 className="text-white text-lg md:text-xl font-semibold mb-3">
                  {step.step}
                </h4>
                <p className="text-white text-sm md:text-base mb-4">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="bg-[#202020] py-16 mt-13">
        <div className="text-center px-5 md:px-20">
          <h2 className="text-white text-3xl md:text-4xl font-semibold mb-6">
            What Our Users Say
          </h2>
          <div className="flex flex-wrap justify-center gap-10 animate-fadeIn">
            {[
              {
                quote:
                  "This tool helped me come up with a perfect name for my startup. The AI suggestions were spot on, and the filters made it easy to refine the options.",
                name: "Arjun Gupta",
                role: "Software Engineer",
              },
              {
                quote:
                  "I love how user-friendly and intuitive this business name generator is. It saved me a lot of time and gave me amazing name ideas!",
                name: "Priya Sharma",
                role: "UX Designer",
              },
              {
                quote:
                  "The Business Name Generator gave me so many fantastic options for my online store. It's a must-have tool for any entrepreneur!",
                name: "Ravi Patel",
                role: "Business Consultant",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-[#121212] text-white p-8 rounded-lg max-w-xs w-full shadow-lg hover:scale-105 transform transition-transform"
              >
                <p className="text-lg mb-4">{testimonial.quote}</p>
                <p className="text-yellow-500 font-semibold">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Add bottom gap */}
      <div className="mb-10"></div>
    </div>
  );
}
