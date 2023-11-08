import { Helmet } from "react-helmet-async";


const Blog = () => {
    return (
        <div>
            <Helmet>
                <title>AL-AMAL || Blog</title>
            </Helmet>
            <div className="container mx-auto px-4 my-[120px]">
                <h1 className="text-5xl text-center lobster-font mb-[50px]">-- Blog --</h1>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                        <div className="mb-20">
                            <div className="flex items-center gap-2 py-3 px-4 border-b-2 bg-gray-50">
                                <strong className="text-[#f76f2a] text-sm font-bold">Nov 7, 2023</strong>
                                <span className="text-sm">/</span>
                                <strong className="text-slate-600 text-sm">Abdulhamid H Johar</strong>
                            </div>
                            <h2 className="font-medium text-xl md:text-2xl lg:text-3xl my-6 ">What is One way data binding?</h2>
                            <div className="w-full md:w-1/2">
                                <img src="https://i.ibb.co/tP6Vtwc/one-waybinding.png" alt="" className="w-full h-full object-obtain border-red-200" />
                            </div>
                            <p className="font-medium text-slate-600 mt-4">One way data binding, its concept in web development that the data flows in a single direction to display to the user interface.</p>
                        </div>
                        <div className="mb-20">
                            <div className="flex items-center gap-2 py-3 px-4 border-b-2 bg-gray-50">
                                <strong className="text-[#f76f2a] text-sm font-bold">Nov 7, 2023</strong>
                                <span className="text-sm">/</span>
                                <strong className="text-slate-600 text-sm">Abdulhamid H Johar</strong>
                            </div>
                            <h2 className="font-medium text-xl md:text-2xl lg:text-3xl mt-6">What is NPM in node.js?</h2>
                            <div className="w-full md:w-1/2">
                                <img src="https://i.ibb.co/nCsHcsK/npm-logo-1.png" alt="" className="w-full h-full object-obtain border-red-200" />
                            </div>
                            <p className="font-medium text-slate-600">Npm ( Node Package Manager ) is the world&apos;s largest software library, and it is used to manage and install libraries, packages, and dependencies for node.js projects.</p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 py-3 px-4 border-b-2 bg-gray-50">
                                <strong className="text-[#f76f2a] text-sm font-bold">Nov 7, 2023</strong>
                                <span className="text-sm">/</span>
                                <strong className="text-slate-600 text-sm">Abdulhamid H Johar</strong>
                            </div>
                            <h2 className="font-medium text-xl md:text-2xl lg:text-3xl my-6">Difference between Mongodb database vs mySQL database.</h2>
                            <div className="w-full md:w-1/2">
                                <img src="https://i.ibb.co/Zdcvprd/mongodb-vs-mysql.webp" alt="" className="w-full h-full object-obtain border-red-200" />
                            </div>
                            <p className="font-medium text-slate-600 mt-4">Difference between mongodb database and mySQL database is quite significant.</p>

                            <div className="overflow-x-auto border mt-4">
                                <table className="table table-zebra">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>Aspect</th>
                                            <th>MongoDB</th>
                                            <th>MySQL</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {/* row 1 */}
                                        <tr>
                                            <th>Data Model</th>
                                            <td>NoSQL database</td>
                                            <td>SQL database</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <th>Schema</th>
                                            <td>Schema-Less (Flexible)</td>
                                            <td>Schema-Enforced (Structured)</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <th>Query Language</th>
                                            <td>Rich Query Language</td>
                                            <td>Structured Query Language</td>
                                        </tr>
                                        {/* row 4 */}
                                        <tr>
                                            <th>Scalability</th>
                                            <td>Horizontal Scalability</td>
                                            <td>Vertical Scalability</td>
                                        </tr>
                                        {/* row 5 */}
                                        <tr>
                                            <th>Transactions</th>
                                            <td>Support as of version 4.0</td>
                                            <td>Strong ACID Compliance</td>
                                        </tr>
                                        {/* row 6 */}
                                        <tr>
                                            <th>Flexibility</th>
                                            <td>Well-suited for Unstructured Data</td>
                                            <td>Well-suited for Structured Data</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                    </div>
                    <div className="hidden lg:block lg:col-span-1">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;