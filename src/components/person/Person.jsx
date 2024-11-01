import { useRef } from 'react';
import  './person.scss';
import {motion,useScroll,useSpring, useTransform} from 'framer-motion';

const items = [
  {
    id:1,
    title:'Saw Wai Yan Htet',
    img:'https://bestsolution.surge.sh/images/saw-wai-yan-htet.jpg',
    desc:"IT Security Engineer,System Engineer"
  },
  {
    id:2,
    title:'Aung Bhone Myat',
    img:'https://bestsolution.surge.sh/images/aung-phone-myat.jpg',
    desc:'UI/UX Designer/Grapher Designer'
  },
  {
    id:3,
    title:'Thet Zin Kyaw',
    img:'https://bestsolution.surge.sh/images/thet-zin-kyaw.jpg',
    desc:"Web Developer"
  }
]

const Single = ({item}) => {
  const ref = useRef();
  const {scrollYProgress} = useScroll({target:ref});
  const y = useTransform(scrollYProgress,[0,1],[-300,300]);


  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
             <img src={item.img} alt=''/>
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
const Person = () => {
  const ref = useRef();
  const {scrollYProgress} = useScroll({target:ref,offset:['end end','start start']});
  const scaleX = useSpring(scrollYProgress,{
    stiffness:100,damping:30
  })
  return (
    <div className='portfolio' ref={ref}>
      <div className="progress">
        <h1>Who They Are</h1>
        <motion.div  style={{scaleX}}  className="progressBar">

        </motion.div>
      </div>
      {items.map(item=>(
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Person