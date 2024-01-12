const VideoList = function () {
    return (
        <div className="flex flex-col gap-2">
            <section className="w-60 rounded-xl overflow-hidden">
                <img className="w-60 h-32 object-cover" src="/carousel.png" alt="" />
            </section>
            <section>
                <h1 className="font-bold">Turning Red</h1>
            </section>
        </div>
    )
}

export default VideoList