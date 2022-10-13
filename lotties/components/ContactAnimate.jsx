import Lottie from "react-lottie";
import ContactAnimateJson from '../contact.json'
export const ContactAnimate = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: ContactAnimateJson,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };
    return (
        <Lottie
            options={defaultOptions}
            height={'100%'}
            width={'100%'}
        />
    )
}
