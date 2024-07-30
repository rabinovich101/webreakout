import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Tradytics",
  desc: "we simplify complex trading data to make it accessible and actionable for every trader. By breaking down intricate data, ensuring ease of access, and providing actionable insights, we empower traders to make confident, informed decisions in the ever-evolving trading landscape.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Simplification of Data",
      desc: "We distill complex trading data into clear, comprehensible insights for traders.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Actionability",
      desc: "We provide actionable insights enabling traders to make informed, swift trading decisions.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Catering to All Traders",
      desc: "Our services are designed for every trader, regardless of their level of expertise.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Offer more benefits here",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "Nextly is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Powered by Next.js & TailwindCSS",
      desc: "This template is powered by latest technologies and tools.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Dark & Light Mode",
      desc: "Nextly comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
