import user from '../../assets/luislanca.png'
import './style.css'

export const Home = () => {
  return (
    <div class='user-section'>
      <img src={user} alt="Luís Lança" />
      <h1>Hey! I'm Luís 👋</h1>
      <h3>Part time engineer, full time traveler</h3>
    </div>
  );
};
