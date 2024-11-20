import { StaticImageData } from "next/image";
import alex from "../../public/samuel.avif";
import jerry from "../../public/jerry.avif";
import mauro from "../../public/mauro.jpeg";
``
export type reviewProps = {
  name: string;
  role: string;
  company: string;
  profileImg: StaticImageData;
  testimonial: string;
  index: number;
};

export const reviewDetails = [
  {
    name: "Arjun S",
    role: "Product Designer",
    company: " Shree Textiles",
    profileImg: alex,
    testimonial:
      "Exceptional work! They delivered our e-commerce platform with incredible attention to detail and speed. Highly reliable and professional.",
  },
  {
    name: "Ramesh T",
    role: "Director",
    company: "Branding Agency",
    profileImg: jerry,
    testimonial:
      "Outstanding service! They built our custom CRM software, which has made our operations so much smoother. Highly recommended!",
  },
  {
    name: "Anjali P",
    role: "Owner",
    company: " Ethnic Creations",
    profileImg: mauro,
    testimonial:
      "They truly understand customer needs and deliver top-quality solutions. Our business has grown thanks to their efforts",
  }
  
];
