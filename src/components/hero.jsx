export default function Hero() {
    return (
        <div className="bg-white">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl py-12 sm:py-8 lg:py-12">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-balance text-gray-900 sm:text-5xl">
                            Search engine optimisation & Marketing.
                        </h1>
                        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                            Simple is a simple template with a creative design that solves all your marketing and SEO queries
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Get started
                            </a>

                            <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                Learn More
                            </a>
                        </div>
                        <img className="h-100 w-auto" src="src/images/Group171.svg" alt="Group" />
                    </div>
                </div>
            </div>
        </div>
    )
}
