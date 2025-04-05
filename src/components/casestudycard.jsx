
export default function Casestudycard() {
    return (
        <div className="flex flex-col items-center bg-navy-900 p-6 rounded-lg max-w-xs">
            <div className="mb-4 relative">
                <div className="absolute bottom-0 w-48 h-48 bg-pink-400 rounded-lg z-0"></div>
                <div className="relative z-20">
                    <div className="w-28 h-24 flex items-center justify-center">
                    <img className=" h-8 w-auto justify-center " src="src/images/Group2.svg" alt="SIMPLE" />
                    </div>
                </div>
            </div>

            <div className="text-center mt-2">
                <h3 className="text-black font-bold text-lg">Online Marketing</h3>
                <p className="text-black-400 text-sm">Seo, Marketing</p>
            </div>
        </div>
    );
};