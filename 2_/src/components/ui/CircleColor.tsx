interface ICircleColorProps {
    color : string
}

const CircleColor  = ({color    }: ICircleColorProps) => {
  return (
    <span className="block w-5 h-5 rounded-full cursor-pointer" style={{backgroundColor: color}}></span>
  )
}

export default CircleColor;
