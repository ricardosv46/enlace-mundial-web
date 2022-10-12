import Lottie from 'react-lottie'
import PaperPlaneAnimation from '../paper-plane.json'

export const PaperPlane = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: PaperPlaneAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Lottie
            options={defaultOptions}
            height={100}
            width={300}
        />
    )
}
