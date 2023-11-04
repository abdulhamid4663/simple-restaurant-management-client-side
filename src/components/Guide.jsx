

const Guide = () => {
    return (
        <div>
            <div className="container mx-auto px-4">
                <h1 className="text-center text-[#414549] text-[3.571rem]">How to order?</h1>
                <p className="text-center text-[#9A9A9A] font-medium">Follow the Steps</p>
                <div className="grid grid-cols-4 gap-6">
                    <div>
                        <img src="https://i.ibb.co/KzDZw2r/laptop.png" alt="" className="mx-auto w-20" />
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mx-auto mt-8">
                            <span className="text-[#E32F22]">1</span>
                        </div>
                        <p className="text-center max-w-[120px] mx-auto text-[#414549] text-xl mt-4 font-medium">Choose your location</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/4WbKbY5/menu.png" alt="" className="mx-auto w-20" />
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mx-auto mt-8">
                            <span className="font-bold text-[#E32F22]">2</span>
                        </div>
                        <p className="text-center max-w-[120px] mx-auto text-[#414549] text-xl mt-4 font-medium">Choose restaurant</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/SczzTY2/burger.png" alt="" className="mx-auto w-20" />
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mx-auto mt-8">
                            <span className="text-[#E32F22]">3</span>
                        </div>
                        <p className="text-center max-w-[120px] mx-auto text-[#414549] text-xl mt-4 font-medium">Make your order</p>
                    </div>
                    <div>
                        <img src="https://i.ibb.co/vV6sB2r/Animation-1699125949292.gif" alt="" className="mx-auto w-20" />
                        <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center mx-auto mt-8">
                            <span className="text-[#E32F22]">4</span>
                        </div>
                        <p className="text-center max-w-[120px] mx-auto text-[#414549] text-xl mt-4 font-medium">Food is on the way</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Guide;