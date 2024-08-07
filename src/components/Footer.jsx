const Footer = () => {
    return(
        <div className="footer bg-white mt-8 p-2 flex justify-between">
            <span>&copy; Copyright By <span className="font-bold">Vian</span></span>
            <div className="social-footer flex items-end gap-7">
                <i className="ri-facebook-circle-fill"></i>
                <i className="ri-twitter-fill"></i>
                <i className="ri-linkedin-fill"></i>
                <i className="ri-reddit-fill"></i>
            </div>
        </div>
    )
}

export default Footer