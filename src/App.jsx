import './App.css'
import {Main} from './components/Main/Main'
import {BrowserRoute, Routes, Route} from 'react-router-dom'
import { Characters } from './components/Characters/Characters'
import {Character} from './components/Character/Character'
import { Houses } from './components/Houses/Houses'
import {House} from './components/House/House'
import Chronology from './components/Chronology/Chronology'

function App() {


  return (
    <>
    <BrowserRoute>
    <Routes>

    <Route path="/" element={<Main/>}/>
    <Route path="/characters" element={<Characters/>}/>
    <Route path="/character/:id" element={<Character/>}/>
    <Route path="/houses" element={<Houses/>}/>
    <Route path="/house/:id" element={<House/>}/>
    <Route path="/chronology" element={<Chronology/>}/>


    </Routes>

    </BrowserRoute>
    </>
  )
}

export default App
