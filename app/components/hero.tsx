export default function Hero() {
    return (
        <div className="relative min-h-[500px] w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(/g-pic.png)' }}>
            <div className="absolute inset-0 bg-black/50"> {/* Optional overlay for better text visibility */}
                <p className="text-white text-4xl font-bold p-8">
                    <span>“</span>
                    <span>T</span>
                    <span>e</span>
                    <span>a</span>
                    <span>m</span>
                    <span>&nbsp;</span>
                    <span>T</span>
                    <span>a</span>
                    <span>i</span>
                    <span>w</span>
                    <span>a</span>
                    <span>n</span>
                </p>
            </div>
        </div>
    )
}