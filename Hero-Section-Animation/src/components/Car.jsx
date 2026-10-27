import sportsCar from '../assets/silver-sports-car.png';

export default function Car() {
  return <img
    className="car-image"
    src={sportsCar}
    alt="Silver sports car viewed from above"
    draggable="false"
  />;
}
