import { FaCheck } from "react-icons/fa";

export default function Packages() {
  const packages = [
    {
      title: "Brand Starter Kit",
      services: [
        "Basic Brand Consultation",
        "Logo Design",
        "Basic SEO Analysis",
        "2 Custom Social Media Post Designs",
      ],
      features: [
        "1 Video Call Session",
        "2 Revisions per Service",
        "Initial Brand Strategy Outline",
      ],
    },
    {
      title: "Digital Presence Builder",
      services: [
        "Brand Development Session",
        "SEO and Basic Website Content",
        "4 Custom Social Media Post Designs",
        "1 Short Video Ad or Social Media Video",
      ],
      features: [
        "2 Video Call Sessions",
        "3 Revisions per Service",
        "Monthly SEO and Social Media Report",
      ],
    },
    {
      title: "Market Influence Creator",
      services: [
        "Comprehensive Branding and Strategy",
        "Advanced SEO Services",
        "Influencer Marketing Introduction",
        "6 Social Media Designs",
        "1 Animated Explainer Video",
      ],
      features: [
        "4 Video Call Sessions",
        "4 Revisions per Service",
        "Influencer Matching and Strategy",
      ],
    },
    {
      title: "Creative Visionary Package",
      services: [
        "Full-Scale Brand Development",
        "Complete SEO and Content Strategy",
        "Social Media Marketing Campaign",
        "3D Product Animation",
        "Custom Illustrations or Infographics",
      ],
      features: [
        "6 Video Call Sessions",
        "6 Revisions per Service",
        "Bi-Monthly Creative Strategy Sessions",
      ],
    },
    {
      title: "Ultimate Business Transformer",
      services: [
        "End-to-End Branding and Business Consulting",
        "Complete SEO, Website, and App Development",
        "Full-Scale Digital Marketing and Video Campaign",
        "Comprehensive Graphics & Design Suite",
        "Article, Blog and Scriptwriting Services",
      ],
      features: [
        "Unlimited Video Call Sessions",
        "Unlimited Revisions",
        "Monthly Performance Analytics",
      ],
    },
    {
      title: "Enterprise Growth Suite",
      services: [
        "Complete Brand Identity System",
        "Advanced SEO Optimization",
        "Social Media Campaign Management",
        "Professional Video Marketing",
        "Custom Landing Page Design",
      ],
      features: [
        "Dedicated Account Manager",
        "Priority Support",
        "Weekly Performance Reports",
      ],
    },
  ];

  return (
    <section className="py-20  text-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold mb-4">Our Packages</h2>
          <p className="text-gray-400">
            Explore our customizable packages for your specific needs
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className="bg-[#160d30]  rounded-xl p-8 border border-purple-900 hover:scale-105 transition duration-300"
            >
              {/* Title */}
              <h3 className="text-xl font-semibold mb-6">{pkg.title}</h3>

              {/* Services */}
              <p className="text-gray-300 font-medium mb-3">
                Services Included
              </p>

              <ul className="space-y-2 mb-6">
                {pkg.services.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <FaCheck className="text-green-400 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Features */}
              <p className="text-gray-300 font-medium mb-3">Features</p>

              <ul className="space-y-2 mb-8">
                {pkg.features.map((item, i) => (
                  <li key={i} className="flex gap-2 text-sm">
                    <FaCheck className="text-green-400 mt-1" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Button */}
              <button className="w-full bg-[#5e36d0] hover:bg-[#4b29b0] transition py-3 rounded-lg font-medium">
                Get a Quote
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
