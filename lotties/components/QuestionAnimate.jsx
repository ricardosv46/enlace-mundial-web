import Lottie from 'react-lottie'
import QuestionAnimateJson from '../question.json'

export const QuestionAnimate = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: QuestionAnimateJson,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <Lottie
            options={defaultOptions}
            height={100}
            width={100}
        />
    )
}
