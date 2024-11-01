import { useRef } from 'react';
import  './portfolio.scss';
import {motion,useScroll,useSpring, useTransform} from 'framer-motion';

const items = [
  {
    id:1,
    title:'Network Cable Installation',
    img:'https://images.pexels.com/photos/29021173/pexels-photo-29021173/free-photo-of-delicious-italian-pizza-with-basil-at-restaurant.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    desc:"Setting up and organizing network cables to ensure stable and efficient connectivity across the office or home network. Includes structured cabling and labeling for easy troubleshooting."
  },
  {
    id:2,
    title:'Router Setup and Configuration',
    img:'https://images.pexels.com/photos/16114610/pexels-photo-16114610/free-photo-of-running-border-collie.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    desc:'"Installing and configuring a router to serve as the primary gateway for the network. This includes setting up network security, IP configuration, and Wi-Fi settings."'
  },
  {
    id:3,
    title:'Access Point (AP) Installation',
    img:'https://images.pexels.com/photos/27692127/pexels-photo-27692127/free-photo-of-white-car-on-winding-road-by-sea.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    desc:"Setting up wireless access points (APs) to extend Wi-Fi coverage in key areas. Includes configuring SSIDs, security settings, and testing signal strength for optimal performance."
  },
  {
    id:4,
    title:'Firewall and Security Setup',
    img:'https://images.pexels.com/photos/28909686/pexels-photo-28909686/free-photo-of-traditional-japanese-styled-street-banner-display.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    desc:"Installing a firewall to secure the network against unauthorized access and cyber threats. This involves configuring rules and policies for effective traffic filtering."
  },
  {
    id:5,
    title:'Switch Installation',
    img:'https://www.pexels.com/photo/house-painted-as-nature-12419737/',
    desc:'"Installing and configuring network switches to efficiently distribute connections between various devices. Ensures optimal data flow and provides necessary ports for wired devices."'
  },
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
const Portfolio = () => {
  const ref = useRef();
  const {scrollYProgress} = useScroll({target:ref,offset:['end end','start start']});
  const scaleX = useSpring(scrollYProgress,{
    stiffness:100,damping:30
  })
  return (
    <div className='portfolio' ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div  style={{scaleX}}  className="progressBar">

        </motion.div>
      </div>
      {items.map(item=>(
        <Single item={item} key={item.id}/>
      ))}
    </div>
  )
}

export default Portfolio