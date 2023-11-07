

const Newsletter = () => {
    return (
        <div className="bg-[#FEE2E2] py-20">
            <div className="container mx-auto px-4 text-[#414549] text-center ">
                <h1 className="text-2xl md:text-3xl lg:text-4xl">Craving Discounts or Food for Thought? Sign up for Our Weekly Newsletter!</h1>
                <div className="mt-6 flex flex-col lg:flex-row gap-6 justify-center items-center">
                    <input type="email" placeholder="Email..." className="py-3 w-full lg:max-w-fit px-8 text-lg rounded-3xl border-red-200 border-2 bg-[#ffffff8c]" />
                    <button className="text-xl font-bold text-white py-3 px-6 bg-red-400 rounded-3xl normal-case max-w-fit">Submit</button>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;