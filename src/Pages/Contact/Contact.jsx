import Heading from "../../Sheard/Heading";
import ShareBannar from "../../Sheard/ShareBannar";
import img from "../../assets/contact/banner.jpg";

const Contact = () => {
  return (
    <div>
      <ShareBannar
        tilte={"contact us"}
        subTitle={"Would you like to try a dish?"}
        image={img}
      ></ShareBannar>
      <Heading title={"visit us"} heading={"our location"}></Heading>
    </div>
  );
};

export default Contact;
