import ReactDom from "react-dom/client"
import "./style.css"
import one from "./assets/images/mountaindog.jpg"
import two from "./assets/images/beagle.jpg"
import three from "./assets/images/corgi.jpg"
import four from "./assets/images/baby lab.jpg"
import five from "./assets/images/golden.jpg"
import six from "./assets/images/labrador.jpg"
import seven from "./assets/images/husky.jpg"
import eight from "./assets/images/pitbull.jpg"


function Pics(props){
  return(
    <div className="frame">
      <div className="container">
        <img src={props.pic} alt={props.dname} style={{width:"150px", height:"200px", display:"flex", flexDirection:"column"}}>
        </img>
        <p>{props.name}</p>
      </div>
    </div>
  )
}



const root=ReactDom.createRoot(document.getElementById("root"))

const Dogs=[
  {
    dname:"Mountain Dog",
    imageUrl:one
  },
  {
    dname:"Beagle",
    imageUrl:two
  },
  {
    dname:"Corgi",
    imageUrl:three
  },
  {
    dname:"Baby Lab",
    imageUrl:four
  },
  {
    dname:"Golden Retriver",
    imageUrl:five
  },
  {
    dname:"Labrador",
    imageUrl:six
  },
  {
    dname:"Husky",
    imageUrl:seven
  },
  {
    dname:"Pit Bull",
    imageUrl:eight
  },
]

root.render(
  <div className="grid-containeru">
    {
    Dogs.map(function(item,index){
      return <Pics key={index} pic={item.imageUrl} name={item.dname}></Pics>
    })
  }
  </div>
)