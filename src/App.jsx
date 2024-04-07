import Header from './components/Header'
import LoremComponent from './components/LoremComponent'
import Button from './components/Button/Button'
import FeedbackSection from './components/FeedbackSection/FeedbackSection'
import { useState } from 'react'
import './App.css'
import EffectSection from './components/EffectSection'

export default function App() {
  const [ content, setContent] = useState("Press the button");

  console.log();

  function handleClick(type) {
    console.log('button clicked', type);
    setContent(type)
  }

  return (
    <div>
      <Header />
      <h1 className="title">Hello world</h1>
      <main>
        <section>
          <ul>
            <LoremComponent text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quisquam repellat libero tempora dolorem nihil ipsam sapiente repudiandae maiores dolores minima magnam dignissimos, nobis fuga ratione. Eligendi explicabo ex alias?" />
            <LoremComponent text="2Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quisquam repellat libero tempora dolorem nihil ipsam sapiente repudiandae maiores dolores minima magnam dignissimos, nobis fuga ratione. Eligendi explicabo ex alias?" />
            <LoremComponent text="14883Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quisquam repellat libero tempora dolorem nihil ipsam sapiente repudiandae maiores dolores minima magnam dignissimos, nobis fuga ratione. Eligendi explicabo ex alias?" />
            <LoremComponent text=" ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quisquam repellat libero tempora dolorem nihil ipsam sapiente repudiandae maiores dolores minima magnam dignissimos, nobis fuga ratione. Eligendi explicabo ex alias?" />
            <LoremComponent text="14883Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus quisquam repellat libero tempora dolorem nihil ipsam sapiente repudiandae maiores dolores minima magnam dignissimos, nobis fuga ratione. Eligendi explicabo ex alias?" />
          </ul>
        </section>
        <section>
          <h3>Buttons</h3>
          
          <Button isActive={content === 'vite'} onClick={() => handleClick('vite')}>Vite</Button>
          <Button isActive={content === 'react'} onClick={() => handleClick('react')}>React</Button>
          <Button isActive={content === 'js'} onClick={() => handleClick('js')}>Js</Button>

          <p>{content}</p>
        </section>
        <FeedbackSection />
        <EffectSection />
      </main>
    </div>
  )
}


