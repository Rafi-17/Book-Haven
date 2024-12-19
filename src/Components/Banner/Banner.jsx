import bannerImg from '../../assets/images/Banner-img.png'
const Banner = () => {
    return (
        <div className='px-5 lg:px-0 mt-12'>
        <div className='bg-[#1313130D] flex py-8 lg:py-16 px-10 md:px-16 lg:px-[120px] gap-14 lg:gap-24 justify-between rounded-3xl'>
            <div className='w-2/3 md:w-1/2 flex flex-col justify-center lg:gap-4 items-start'>
                <h2 className='font-bold mb-5 md:mb-12 text-xs md:text-3xl lg:text-[52px] text-black'>Books to freshen <br /> <span className='block lg:mt-4'>up your bookshelf</span></h2>
                <button className='bg-[#23BE0A]  rounded-lg  text-white text-[8px] md:text-base lg:text-lg font-medium lg:font-semibold px-2 md:px-6 py-[6px] md:py-3'>View The List</button>
            </div>
            <div className='w-1/3 md:w-1/2 flex justify-center'>
                <img className='h-[100px] md:h-[250px] lg:h-[394px] ' src={bannerImg} alt="" />
            </div>
        </div>
        </div>
    );
};

export default Banner;