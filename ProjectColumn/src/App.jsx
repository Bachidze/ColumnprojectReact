import './App.css'
import { data } from './Cards'
import Card from './components/card/Card'

function App() {
  return (
    <>
    {data.map(( el , i )=> (
      <Card
      key = {i}
      imgUrl={el.imgUrl}
      name={el.name}
      desc={el.desc}
      button={el.button}
      hover={el.hover}
      backgroundcolor={el.backgroundcolor}
      />
    ))}
    </>
  )
}

export default App
