import Lottie from "react-lottie";
import EmptyJson from '../empty.json'
export const EmptyAnimate = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: EmptyJson,
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
