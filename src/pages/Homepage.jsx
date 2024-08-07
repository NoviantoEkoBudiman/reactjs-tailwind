import HeroImage from '../assets/images/hero.svg'
import AboutUs from '../assets/images/about.svg'
import Image1 from '../assets/images/proyek-1.webp'
import Image2 from '../assets/images/proyek-2.webp'
import Image3 from '../assets/images/proyek-3.webp'
import Image4 from '../assets/images/proyek-4.webp'
import Image5 from '../assets/images/proyek-5.webp'

const Homepage = () => {
    return(
        <div className="homepage pt-32">
            <div className="container" id="tentang-kami">
                <div className="hero grid md:grid-cols-2 grid-col-1 px-4 items-center gap-20">
                    <div className="box">
                        <h1 className='lg:text-5xl/tight font-medium mb-7'>Belajar membuat website dengan <span className='text-sky-400 underline font-bold'>Tailwind CSS</span></h1>
                        <p className='text-base/8 mb-7'>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus nihil perspiciatis numquam id sint cumque minima modi, assumenda delectus tempora?
                        </p>
                        <a href="#" className='bg-sky-400 hover:bg-sky-500 rounded-full py-2 px-4 transition-all'>Tentang kami <i className="ri-eye-line"></i></a>
                    </div>
                    <div className="box">
                        <img src={HeroImage} alt="Hero Image" className='md:w-full w-[400px] md:mx-0 mx-auto' />
                    </div>
                </div>

                <div className="about grid md:grid-cols-2 grid-cols-1 px-4 items-center gap-20 sm:pt-8">
                    <div className="box md:order-1 order-2">
                        <img src={AboutUs} alt="About Us" className='md:w-full w-[400px] mx-auto md:mx-0' />
                    </div>
                    <div className="box md:order-2 order 1">
                        <h1 className='lg:text-5xl/tight font-medium mb-7'><span className='text-sky-400 underline font-bold'>About Us</span></h1>
                        <p className='text-base/8 md:mb-7'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum totam corporis earum perferendis quam aperiam accusantium quis laudantium adipisci aliquid.
                        </p>
                    </div>
                </div>

                <div className="layanan px-4 sm:pt-16 mb-6" id="layanan">
                    <h1 className='lg:text-5xl/tight text-3xl/tight font-medium mb-7 text-center text-sky-400 underline'>Layanan</h1>
                    <p className='text-base/8 mb-7 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing.</p>
                    <div className="layanan-box grid md:grid-cols-3 grid-cols-1 gap-6">
                        <div className="box bg-sky-400 rounded-lg p-4 text-white shadow">
                            <i className="ri-number-1 text-3xl"></i>
                            <h3 className='text-xl font-bold mt-3 mb-2'>Service 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates dolor dignissimos iure earum quis deleniti labore voluptas sunt. Excepturi, temporibus cum. Omnis.</p>
                        </div>
                        <div className="box bg-sky-400 rounded-lg p-4 text-white shadow">
                            <i className="ri-number-2 text-3xl"></i>
                            <h3 className='text-xl font-bold mt-3 mb-2'>Service 2</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ipsam similique sapiente vero, sint beatae qui. Ab quod obcaecati ratione odit recusandae.</p>
                        </div>
                        <div className="box bg-sky-400 rounded-lg p-4 text-white shadow">
                            <i className="ri-number-3 text-3xl"></i>
                            <h3 className='text-xl font-bold mt-3 mb-2'>Service 3</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos iusto eius magnam beatae et inventore libero voluptates fugit, nulla exercitationem, eveniet soluta!</p>
                        </div>
                    </div>
                </div>

                <div className="proyek px-4" id="proyek">
                    <h1 className='lg:text-5xl/tight text-3xl/tight font-medium mb-7 text-center text-sky-400 underline'>Proyek</h1>
                    <p className='text-base/8 mb-7 text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel.</p>
                    <div className="proyek-box grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
                        <div className="box bg-white p-2 shadow">
                            <img src={Image1} alt="Gambar Proyek" className='w-[480px] h-[320px] sm:mx-auto' />
                            <h3 className='text-xl font-bold mt-3 mb-2'>Service 1</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veritatis est ipsam nulla obcaecati placeat natus corporis necessitatibus sit aut. Quod, expedita.</p>
                        </div>
                        <div className="box bg-white p-2 shadow">
                            <img src={Image2} alt="Gambar Proyek" className='w-[480px] h-[320px] sm:mx-auto' />
                            <h3 className='text-xl font-bold mt-3 mb-2'>Service 2</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veritatis est ipsam nulla obcaecati placeat natus corporis necessitatibus sit aut. Quod, expedita.</p>
                        </div>
                        <div className="box bg-white p-2 shadow">
                            <img src={Image3} alt="Gambar Proyek" className='w-[480px] h-[320px] sm:mx-auto' />
                            <h3 className='text-xl font-bold mt-3 mb-2'>Service 3</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veritatis est ipsam nulla obcaecati placeat natus corporis necessitatibus sit aut. Quod, expedita.</p>
                        </div>
                        <div className="box bg-white p-2 shadow">
                            <img src={Image4} alt="Gambar Proyek" className='w-[480px] h-[320px] sm:mx-auto' />
                            <h3 className='text-xl font-bold mt-3 mb-2'>Service 4</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veritatis est ipsam nulla obcaecati placeat natus corporis necessitatibus sit aut. Quod, expedita.</p>
                        </div>
                        <div className="box bg-white p-2 shadow">
                            <img src={Image5} alt="Gambar Proyek" className='w-[480px] h-[320px] sm:mx-auto' />
                            <h3 className='text-xl font-bold mt-3 mb-2'>Service 5</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur veritatis est ipsam nulla obcaecati placeat natus corporis necessitatibus sit aut. Quod, expedita.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Homepage