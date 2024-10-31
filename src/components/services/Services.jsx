import { useRef } from 'react';
import './services.scss';
import {motion} from 'framer-motion';

const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration:1,
            staggerChildren:0.1
        }
    }
}

const Services = () => {
    const ref = useRef();
    // const isInView = useInView(ref,{margin:'-80px'});
  return (
    <motion.div className='services' variants={variants} initial='initial' ref={ref} whileInView='animate'>
        <motion.div className="textContainer" variants={variants} >
            <p>I help your brand thrive and stay ahead with <br /> the latest in technology.</p>
            <hr />

        </motion.div>
        <motion.div className="titleContainer" variants={variants} >
            <div className="title">
                <img src="/assembly.png" alt="" />
                <h1> <motion.b whileInView={{color:'#00cccc'}} whileHover={{color:'#0080ff'}}> Creative </motion.b> Ideas</h1>
            </div>

            <div className="title">
                {/* <img src="" alt="" /> */}
                <h1> <motion.b whileInView={{color:'#00cccc'}} whileHover={{color:'#0080ff'}}>For your</motion.b> Business. </h1>
                <button>What our Services?</button>
            </div>
        </motion.div>
        <motion.div className="listContainer" variants={variants} >
            <motion.div className="box" whileHover={{background:'lightgray',color:'black'}}>
                <h2>Technology Consulting</h2>
                <p>Our experts offer personalized consulting to help your business leverage technology for maximum productivity and growth.From strategy to implementation,we tailor solutions to fit your specific needs.</p>
            </motion.div>

            <motion.div className="box" whileHover={{background:'lightgray',color:'black'}}>
                <h2>Manage IT Services</h2>
                <p>Focus on your core business while we handle your IT infrastructure.Our managed services provide continuous monitoring,maintenance and support to ensure everything runs smoothly.</p>
            </motion.div>

            

            <motion.div className="box" whileHover={{background:'lightgray',color:'black'}}>
                <h2>Cloud Services</h2>
                <p>Optimize your scale your business processes with our cloud solutions.We offer cloud migration,hosting and management services for a seamless amd secure experience.</p>
            </motion.div>


            <motion.div className="box" whileHover={{background:'lightgray',color:'black'}}>
                <h2>Network Deployment</h2>
                <p>Build a robust,reliable and scalable network infrastructure with our expert setup services.From planning to installing,we ensure your network supports your business operations efficiently.</p>
            </motion.div>

          

            <motion.div className="box" whileHover={{background:'lightgray',color:'black'}}>
                <h2>Data Backup and Recovery</h2>
                <p>Safeguard your data against loss or corruption with our backup and recovery services.We offer secure storage options and quick recovery solutions to minimize downtime.</p>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services