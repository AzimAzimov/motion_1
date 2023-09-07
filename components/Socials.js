import Link from "next/link";
import React from "react";
import {BiLogoTelegram, BiLogoWhatsapp, BiPhoneCall} from "react-icons/bi";
import {BsInstagram} from "react-icons/bs";

const Socials = () => {
  return (
    <div className="flex gap-x-5 items-center text-lg">
      <Link
        href={"https://tlgg.ru/azimov_an"}
        className="hover:text-accent transition-all duration-300"
        target={"_blank"}
      >
        <BiLogoTelegram size={25}/>
      </Link>
      <Link
        href={"https://wa.me/79891137689?text=%D0%9F%D1%80%D0%B8%D0%B2%D0%B5%D1%82!%20%F0%9F%91%8B%20%D0%9C%D0%B5%D0%BD%D1%8F%20%D0%B8%D0%BD%D1%82%D0%B5%D1%80%D0%B5%D1%81%D1%83%D0%B5%D1%82..."}
        className="hover:text-accent transition-all duration-300"
        target={"_blank"}
      >
        <BiLogoWhatsapp size={27}/>
      </Link>
      <Link
        href={"/"}
        className="hover:text-accent transition-all duration-300"
        target={"_blank"}
      >
        <BsInstagram size={20}/>
      </Link>
      <Link href={"tel:+79891137689"} className="hover:text-accent transition-all duration-300">
        <BiPhoneCall size={23}/>
      </Link>
    </div>
  )
};

export default Socials;
