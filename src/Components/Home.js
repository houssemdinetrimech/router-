import React from 'react'
import Header from './Header'
import MovieList from './MovieList';
import AddModal from './AddModal'
import {useState} from 'react';


function Home() {
  const [film,setFilm]=useState([{ 
    name:"The Man Who Sold",
    image:"https://i.egycdn.com/pic/WmFwZndlY21Zam1qbXBtbWptakVjY05kVHZjTmptbkk.jpg",
    breiveD:"A family's road trip is upended when they find themselves in the middle of the robot apocalypse.",
    url:"https://www.youtube.com/embed/MzjuSHxMQHQ",
    rating:'4',
    description:"Long ago, in the fantasy world of Kumandra, humans and dragons lived together in harmony. But when an evil force threatened the land, the dragons sacrificed themselves to save humanity. Now, 500 years later, that same evil has returned and it’s up to a lone warrior, Raya, to track down the legendary last dragon to restore the fractured land and its divided people."

  },
  {
    name:"Fresh",
    image:"https://i.egycdn.com/pic/WmFwZndlY212bXBZRW1idmNtZWN3VElQbWJtZFR6UA.jpg",
    breiveD:"Fresh is a 2022 American black comedy horror thriller film directed by Mimi Cave, in her directorial debut .",
    url:"https://www.youtube.com/embed/wKk5VAK1GZQ",
    rating:'5',
    description:"The film stars Daisy Edgar-Jones and Sebastian Stan. It is a co-production between Legendary Pictures and Hyperobject Industries; Adam McKay produced the film alongside Kevin J. Messick."

  },
  {
    name:"The Aftermath",
    image:"https://img.moviesjoy.to/resize/188x288/c2/19/c2191873b8a2fc677c047584ae2df6f0/c2191873b8a2fc677c047584ae2df6f0.jpg",
    breiveD:" A young man named Darwin lives, in a small cement module with little more than a computer.",
    url:"https://www.youtube.com/embed/FPv3e2FZOgo",
    rating:'4',
    description:"In a future society, a young man named Darwin lives, like everyone else; in a small cement module with little more than a computer. One night, during a violent storm, lightning hits Darwin’s module and knocks out his computer, forcing him to venture outside. He is surprised to come across a beautiful young woman, living with her family in the woods, who teach him how to speak and show him the value of human contact. Meanwhile, the security forces have sent drones to search for and recapture him."

  },
  {
    name:"Good By Honey",
    image:"https://img.moviesjoy.to/resize/188x288/be/20/be208bd9ffd2ed045830848359db0319/be208bd9ffd2ed045830848359db0319.jpg",
    breiveD:" A frantic crazy woman must coerce an exhausted truck driver to hide in the back of her truck. ",
    url:"https://www.youtube.com/embed/qiQBaA_KjHI",
    rating:'5',
    description:"After escaping abduction, a frantic woman must coerce an exhausted truck driver to hide in the back of her truck for the night. The two women take refuge, not knowing what the rest of the night has in store."
    

  },
  {
    name:"Siccin 2",
    image:"https://i.egycdn.com/pic/WmFwZndlY21MTllUYm1hY21tYW12YXdUam12eA.jpg",
    breiveD:"A woman finds her child killed after the jinn dropped a closet on him in the house. ",
    url:"https://www.youtube.com/embed/Ux3JpdkcKrw",
    rating:'2',
    description:" Adnan and Hicran are happily married however when their son die as a result of a mysterious accident Adanan becomes distant from his wife. Hicran starts investigating her past to see how it could connect to the death of her son."

  },
  {
    name:"Burning Lies",
    image:"https://img.moviesjoy.to/resize/188x288/11/ea/11eac8ffb567896f7d7072e5a2fc0792/11eac8ffb567896f7d7072e5a2fc0792.jpg",
    breiveD:" A woman falls for a handsome firefighter after he rescues her from a suspicious car crash. ",
    url:"https://www.youtube.com/embed/E1yZa8bDB9c",
    rating:'4',
    description:"A woman falls for a handsome firefighter after he rescues her from a suspicious car crash. But her life spins into tragedy after his seemingly overprotective behavior burns through her life."

  },
  {
    name:"Safe House",
    image:"https://upload.wikimedia.org/wikipedia/en/d/d0/Safe_House_Poster.jpg",
    breiveD:" Esther succeeds in executing a genius escape from a psychiatric clinic in Estonia ",
    url:"https://www.youtube.com/embed/O-E4rQMl9jE",
    rating:'3',
    description:"a CIA officer on a low-level posting in Cape Town who is in charge of a safe house where the CIA is interrogating Tobin Frost (Denzel Washington), a veteran operative who has allegedly betrayed the agency. When the safe house is attacked by mercenaries who kill most of the operatives, Weston flees with Frost in his charge so they are now on the run. As the team of killers, who seem to be one step ahead of the pair track them throughout Cape Town, Weston wonders who to trust. "

  },
  {
    name:"777 Charlie",
    image:"https://i.egycdn.com/pic/WmFwZndlY212dmNtdnZOYm1qbWJFY21tbVRibXBwbW1URQ.jpg",
    breiveD:" Safe House is a 2012 American action thriller film directed by Daniel Espinosa.    ",
    url:"https://www.youtube.com/embed/REqFOV2A7sI",
    rating:'5',
    description:"777 Charlie is a 2022 Indian Kannada-language adventure comedy-drama film written and directed by Kiranraj K. and produced by Paramvah Studios. It stars"
  },

])
const add=(newMovie)=>{
  setFilm(film=>([...film,newMovie]))
  console.log(newMovie)
 
}
const [text, settext] = useState('')
const [rate, setrate] = useState('1')


const searchtext=(text)=>{
settext(text)
}
const searchrate=(rate)=>{
  setrate(rate)
  }
  return (
    <div>
  
        <div className="App">
    <Header searchtext={searchtext} searchrate={searchrate}/>
    <MovieList film={film} text={text} rate={rate}/>
    <AddModal add={add}/>
    
    </div>
    </div>
  )
}

export default Home



