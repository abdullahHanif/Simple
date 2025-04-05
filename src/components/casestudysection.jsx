import Casestudycard from "./Casestudycard"

export default function CasestudySection() {
    return (
        <div className="bg-white">
            <div className="relative isolate px-6 pt-14 lg:px-8">
                <div className="mx-auto max-w-2xl py-12 sm:py-8 lg:py-12">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold text-balance text-gray-900 sm:text-4xl">
                        Our case studies
                        </h1>
                        
                        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                        Lorem ipsum dolor sit amet, tincidunt vestibulum.
                        </p> 
                    </div> 

                    <Casestudycard/>
                </div> 
            </div> 
        </div>
    )
}