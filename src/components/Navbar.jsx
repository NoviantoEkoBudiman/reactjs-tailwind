import {useEffect, useState} from 'react'

const Navbar = () => {
    const [show, setShow] = useState(false)
    const [scroll, setScroll] = useState(false)

    const showStatus = () =>{
        setShow(!show)
    }

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 5){
                setScroll(true)
                setShow(false)
            }else{
                setScroll(false)
            }
        })
    })

    let menuShow = show ? "left-0" : "-left-full"
    let scrollActive = scroll ? "bg-white" : "bg-transparent"

    return(
        <div className={`navbar fixed w-full transition-all ${scrollActive}`}>
            <div className="container mx-auto py-4">
                <div className="navbar-box flex items-center justify-between sm:px-4">
                    <div className="logo">
                        <h1 className="sm:text-2xl md:pl-0 sm:pl-2 pl-4 text-xl font-bolt">Ngoding.</h1>
                    </div>
                    <ul className={`flex lg:gap-12
                    md:static md:bg-transparent md:shadow-none md:font-medium md:text-black md:w-auto md:h-auto md:translate-y-0 md:flex-row
                    gap-8 fixed ${menuShow} top-1/2 -translate-y-1/2 flex-col bg-sky-400 px-4 py-2 shadow-lg shadow-slate-400 font-bold text-white transition-all`}>
                        <li>
                            <i className="ri-home-2-line"></i>
                            <a href="#home" className="font-medium opacity-75">Beranda</a>
                        </li>
                        <li>
                            <i className="ri-information-line"></i>
                            <a href="#tentang-kami" className="font-medium opacity-75">Tentang Kami</a>
                        </li>
                        <li>
                            <i className="ri-settings-3-line"></i>
                            <a href="#layanan" className="font-medium opacity-75">Layanan</a>
                        </li>
                        <li>
                            <i className="ri-image-line"></i>
                            <a href="#proyek" className="font-medium opacity-75">Proyek</a>
                        </li>
                    </ul>
                    <div className="social flex items-center gap-2">
                        <a href="#" className="bg-sky-400 lg:px-5 md:px-3 px-1 py-2 rounded-full text-white font-bold hover:bg-sky-500 transition-all">Social Media</a>
                        <i className="ri-menu-3-line md:hidden" onClick={showStatus}></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar