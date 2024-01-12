const Carousel = function () {
    return (
        <section className="w-full h-[80vh] rounded-xl relative overflow-hidden">
            <img src="/carousel.png" className="absolute w-full h-full object-cover object-top" alt="" />
            <div className="video__description w-full px-8 pb-16 flex flex-col gap-12 absolute bottom-0">
                <p className="text-4xl text-white font-bold">Spider-Man:Across The Spider-Verse</p>
                <div className="flex items-center gap-4">
                    <button className="bg-white px-8 py-2 font-bold rounded">Details</button>
                    <button className="bg-white h-2 w-2 p-5 flex items-center justify-center rounded-full">+</button>
                </div>
            </div>
        </section>
    )
}

export default Carousel