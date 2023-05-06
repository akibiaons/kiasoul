import React from 'react'

const Footer = () => {
  return (
    <div className="bg-black text-[#949494] py-20 font-titleFont">
        <div className="max-w-screen-xl mx-auto">
            {/* ======== LogoIcon Start here ============ */}
            <div> {/* This <div> wil have footer logo which is light to contrast with dark-bg*/}
                <img className="w-32" src={logoLight} alt="logoLight"/>
            </div>
            {/* ======== LogoIcon End here ============ */}
            {/* ======== LocateUs Start here ========== */}
            {/* ======== LocateUs End here ========== */}
            {/* ======== Profile Start here ========== */}
            {/* ======== Profile End here ========== */}
            {/* ======== Subscribe Start here ========== */}
            {/*========= Subscribe End here ==========*/}
        </div>
    </div>
  )
}

export default Footer;