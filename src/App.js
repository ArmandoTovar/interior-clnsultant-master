
import './App.css';
import Navbars from './module/Navbars'
import Cuerpo from './module/Cuerpo'
import Mensaje from './module/Mensaje'
import photo1 from './assest/photo1.png'
import photo2 from './assest/photo2.png'

const cards = [{
    id: 1,
    title: 'Modern interior',
    image: photo1,
    desc: 'A full-Service residential & commercial interior design and staging company offering professional organizing & eco-services.'
}]
const tex = [{
    id: 1,
    name: 'Aliza Webber',
    prof: 'Interior designer',
    image: photo2,
    desc: 'Designed in 2020 by Aliza Webber'

}]
function App() {
  return (
      <div className="App">
          <Navbars />
          {cards.map(card => (
              <Cuerpo image={card.image} title={card.title} desc={card.desc} />
          ))}
          <div className="d-block">
              <span className="text-center creacion">created by Armando Tovar - devChallenges.io</span>
          </div>
          {tex.map(texs => (
              <Mensaje name={texs.name} prof={texs.prof} desc={texs.desc} image={texs.image} />
          ))}
         
      </div>
      
  );
}

export default App;
