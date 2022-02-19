import Image from 'next/image';
import r1 from "../images/r1.png";
import r2 from "../images/r2.png";
import r3 from "../images/r3.png";

const Timeline = () => {
    return (
        <section>
            <div className="text-white py-8" id="timeline">
                <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-24">
                    <div data-aos="slide-right" data-aos-duration="5000" className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-12 lg:px-0">
                        <p className="text-[#ff8605] uppercase tracking-loose text-center text-xl lg:-ml-7 lg:text-2xl">National Entrepreneurship Olympiad</p>
                        <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed lg:ml-[2px]">Competition Timeline</p>

                    </div>
                    <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
                        <div className="container mx-auto w-full h-full">
                            <div className="relative wrap overflow-hidden p-10 h-full">
                                <div data-aos="fade-up" className="border-dashed border-l-2 border-[#ff8605] absolute h-full line_left"></div>
                                <div data-aos="fade-up" className="border-dashed border-r-2 border-[#ff8605] absolute h-full line_right"></div>
                                <div data-aos="fade-right" className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                                        <Image src={r1} width={250} height={220} className="ml-0" alt="Round 1"/>
                                    </div>
                                </div>
                                <div data-aos="fade-left" className="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="order-1 w-5/12 px-1 py-4 text-left">
                                        <Image src={r2} width={250} height={220} className="ml-0" alt="Round 2"/>
                                    </div>
                                </div>
                                <div data-aos="fade-right" className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                                        <Image src={r3} width={250} height={220} className="ml-0" alt="Round 3"/>
                                    </div>
                                </div>
                                <div data-aos="fade-left" className="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="order-1  w-5/12 px-1 py-4 text-left">
                                        <p className="mb-3 text-base text-yellow-300"> 31st Dec, 2021</p>
                                        <h4 className="mb-3 font-bold text-lg md:text-2xl">Result Declaration</h4>
                                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                            The ultimate genius will be revealed by our judging panel on 31st Dec, 2021 and the results will be mailed to you.
                                        </p>
                                    </div>
                                </div>
                                <div data-aos="fade-right" className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                                        <p className="mb-3 text-base text-yellow-300">1 Jan, 2022</p>
                                        <h4 className="mb-3 font-bold  text-lg md:text-2xl text-right md:mr-44 lg:mr-0">Prize Distribution</h4>
                                        <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                                            The winners will be contacted by our team for their addresses and the winning goodies will be sent at their addresses.
                                        </p>
                                    </div>
                                </div>
                                <div data-aos="fade-left" className="mb-8 flex justify-between items-center w-full right-timeline">
                                    <div className="order-1 w-5/12"></div>
                                    <div className="order-1  w-5/12 px-1 py-4">
                                        
                                    </div>
                                </div>
                            </div>
                            <img data-aos="fade-up" className="mx-auto -mt-36 md:-mt-36"
                                 src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" alt="winner"/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Timeline;