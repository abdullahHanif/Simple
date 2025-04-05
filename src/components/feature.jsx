const features = [
  {
    name: 'Speed Optimisation',
    description:
      'Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse',
    icon: "src/images/Group5.svg",
  },
  {
    name: 'SEO and Backlinks',
    description:
    'Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse',
    icon: "src/images/Group7.svg",
  },
  {
    name: 'Content Marketing',
    description:
    'Lorem ipsum dolor sit amet, tincidunt vestibulum. Fusce egeabus consectetuer turpis, suspendisse',
    icon: "src/images/Group12.svg",
  },
]

export default function Feature() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl lg:text-balance">
          How does it works
          </p>
          <p className="mt-6 text-lg/8 text-gray-600">
          One theme that serves as an easy-to-use operational toolkit that meets customer's needs.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-3 lg:gap-y-16">
            {features.map((feature) => (

              <div key={feature.name} className="relative pl-16">
                
                <dt className="text-base/7 font-semibold text-gray-900">
                  
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg">
                    <img className="h-30 w-auto" src={feature.icon} alt="icons" />
                  </div>

                  {feature.name}

                </dt>

                <dd className="mt-2 text-base/7 text-gray-600">{feature.description}</dd>

              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
