import TravelBagAnimation from '../../../../lotties/travel-bag.json'
import Lottie from 'react-lottie'
export const TravelBagTsx = ({ ClassName, altura = 100, ancho = 100 }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: TravelBagAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  }
  return (
    <div className={ClassName}>
      <Lottie options={defaultOptions} height={altura} width={ancho} />
    </div>
  )
}
