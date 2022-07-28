import React from 'react';
import aa from '../images/aa.png';
import bb from '../images/bb.png';
import cc from '../images/cc.png';
import dd from '../images/dd.jpg';
import ee from '../images/ee.jpg';
import hom1 from '../images/hom/hom1.png'
import hom2 from '../images/hom/hom2.jpg'
import hom3 from '../images/hom/hom3.jpg'
import hom4 from '../images/hom/hom4.jpg'
import hom5 from '../images/hom/hom5.jpg'
import hom6 from '../images/hom/hom6.jpg'
import hom7 from '../images/hom/hom7.jpg'
import wing from '../images/hom/wing.png'
import '../style/Home.css'

const Home = () => {
  return (
    <div className='mainHome'>
      <div className='home'>
        <div className='bgImg'  style={{backgroundImage: `url('${hom7}')`}}>
          <div className='imgshom'>
            <div className='wingy'><img className='bb' src={bb}/></div>          
            {/* <div className='interimg'>
              <div>
                <img className='aa' src={aa}/>
              </div>
              <div className='para'>
                <p>The style of ancient Egyptian art is transcendently clear, something 8-year-olds can recognize in an instant.
                  Its consistency and codification is one of the most epic visual journeys in all art, one that lasts 30 dynasties
                    spread over 3,000 years.
                  </p> 
              </div>
              <div className='ccinterimg'>
                <img className='cc' src={cc}/>
              </div>
            </div> */}
          </div>
        </div>
        <div className='homContain'>
            <div className='homContainP'>
              <p>
              The many achievements of the ancient Egyptians include the quarrying, surveying and construction techniques that supported the
                building of monumental pyramids, temples, and obelisks; a system of mathematics, a practical and effective system of medicine,
                  irrigation systems and agricultural production techniques, the first known planked boats, Egyptian faience and glass technology,
                  new forms of literature, and the earliest known peace treaty, made with the Hittites. Ancient Egypt has left a lasting legacy.
                    Its art and architecture were widely copied, and its antiquities carried off to far corners of the world. Its monumental ruins
                    have inspired the imaginations of travelers and writers for millennia. A newfound respect for antiquities and excavations in
                      the early modern period by Europeans and Egyptians led to the scientific investigation of Egyptian civilization and a 
                      greater appreciation of its cultural legacy
              </p>
            </div>
            <div className='homContainImg'>
              <img src={hom1} alt=''/>
            </div>
        </div>
        <div className='homContain'>
            <div className='homContainImg'>
              <img src={hom4} alt=''/>
            </div>
            <div className='homContainP'>
              <p>
              Music and dance were popular entertainments for those who could afford them. Early instruments included flutes and harps,
              while instruments similar to trumpets, oboes, and pipes developed later and became popular. In the New Kingdom, the Egyptians
                played on bells, cymbals, tambourines, drums, and imported lutes and lyres from Asia. The sistrum was a rattle-like musical
                instrument that was especially important in religious ceremonies.
              </p>
            </div>

        </div>
        <div className='homContain' id='bigHomPhy'>
            <div className='homContainP'>
              <p>
              Ancient Egyptian physicians were renowned in the ancient Near East for their healing skills, and some, such as Imhotep, remained
              famous long after their deaths. Herodotus remarked that there was a high degree of specialization among Egyptian physicians,
                with some treating only the head or the stomach, while others were eye-doctors and dentists. Training of physicians took place
                at the Per Ankh or "House of Life" institution, most notably those headquartered in Per-Bastet during the New Kingdom and at 
                Abydos and Saïs in the Late period. Medical papyri show empirical knowledge of anatomy, injuries, and practical treatments.
                  Wounds were treated by bandaging with raw meat, white linen, sutures, nets, pads, and swabs soaked with honey to prevent
                  infection, while opium, thyme, and belladona were used to relieve pain. The earliest records of burn treatment describe
                    burn dressings that use the milk from mothers of male babies. Prayers were made to the goddess Isis. Moldy bread, honey,
                    and copper salts were also used to prevent infection from dirt in burns. Garlic and onions were used regularly to promote
                      good health and were thought to relieve asthma symptoms. Ancient Egyptian surgeons stitched wounds, set broken bones, 
                      and amputated diseased limbs, but they recognized that some injuries were so serious that they could only make the patient
                      comfortable until death occurred.
              </p>
            </div>
            <div className='homContainImg'>
              <img src={hom5} alt=''/>
            </div>
        </div>
        <div className='homContain'>
            <div className='homContainImg'>
              <img src={hom3} alt=''/>
            </div>
            <div className='homContainP'>
              <p>
              Ancient Egyptian mathematics is the mathematics that was developed and used in Ancient Egypt c. 3000 to c. 300 BCE, from the Old
              Kingdom of Egypt until roughly the beginning of Hellenistic Egypt. The ancient Egyptians utilized a numeral system for counting
                and solving written mathematical problems, often involving multiplication and fractions. Evidence for Egyptian mathematics is 
                limited to a scarce amount of surviving sources written on papyrus. From these texts it is known that ancient Egyptians understood 
                concepts of geometry, such as determining the surface area and volume of three-dimensional shapes useful for architectural
                engineering, and algebra, such as the false position method and quadratic equations.
              </p>
            </div>
            
        </div>
        <div className='homContain'>
            <div className='homContainP'>
              <p>
              The ancient Egyptians maintained an elaborate set of burial customs that they believed were necessary to ensure immortality
              after death. These customs involved preserving the body by mummification, performing burial ceremonies, and interring with 
              the body goods the deceased would use in the afterlife. Before the Old Kingdom, bodies buried in desert pits were naturally 
              preserved by desiccation. The arid, desert conditions were a boon throughout the history of ancient Egypt for burials of the
              poor, who could not afford the elaborate burial preparations available to the elite. Wealthier Egyptians began to bury their 
              dead in stone tombs and use artificial mummification, which involved removing the internal organs, wrapping the body in linen,
                and burying it in a rectangular stone sarcophagus or wooden coffin. Beginning in the Fourth Dynasty, some parts were preserved 
                separately in canopic jars. 
              
              </p>
            </div>
            <div className='homContainImg'>
              <img src={hom2} alt=''/>
            </div>
        </div>
      </div>
      <div className='mobHome'>
      <div className='bgImg' id='wingy' style={{backgroundImage: `url('${hom7}')`}}>
          <div className='imgshom'>
            <div className='wingy'><img className='bb' src={bb}/></div>          
            {/* <div className='interimg'>
              <div>
                <img className='aa' src={aa}/>
              </div>
              <div className='para'>
                <p>The style of ancient Egyptian art is transcendently clear, something 8-year-olds can recognize in an instant.
                  Its consistency and codification is one of the most epic visual journeys in all art, one that lasts 30 dynasties
                    spread over 3,000 years.
                  </p> 
              </div>
              <div className='ccinterimg'>
                <img className='cc' src={cc}/>
              </div>
            </div> */}
          </div>
        </div>
        <div className='homContain' id='homStart'>
            <div className='homContainImg'>
              <img src={hom1} alt=''/>
            </div>
            <div className='homContainP'>
              <p>
              The many achievements of the ancient Egyptians include the quarrying, surveying and construction techniques that supported the
                building of monumental pyramids, temples, and obelisks; a system of mathematics, a practical and effective system of medicine,
                  irrigation systems and agricultural production techniques, the first known planked boats, Egyptian faience and glass technology,
                  new forms of literature, and the earliest known peace treaty, made with the Hittites. Ancient Egypt has left a lasting legacy.
                    Its art and architecture were widely copied, and its antiquities carried off to far corners of the world. Its monumental ruins
                    have inspired the imaginations of travelers and writers for millennia. A newfound respect for antiquities and excavations in
                      the early modern period by Europeans and Egyptians led to the scientific investigation of Egyptian civilization and a 
                      greater appreciation of its cultural legacy
              </p>
            </div>
            
        </div>
        <div className='homContain'>
            <div className='homContainImg'>
              <img src={hom4} alt=''/>
            </div>
            <div className='homContainP'>
              <p>
              Music and dance were popular entertainments for those who could afford them. Early instruments included flutes and harps,
              while instruments similar to trumpets, oboes, and pipes developed later and became popular. In the New Kingdom, the Egyptians
                played on bells, cymbals, tambourines, drums, and imported lutes and lyres from Asia. The sistrum was a rattle-like musical
                instrument that was especially important in religious ceremonies.
              </p>
            </div>

        </div>
        <div className='homContain' id='phy'>
            <div className='homContainImg'>
              <img src={hom5} alt=''/>
            </div>
            <div className='homContainP'>
              <p >
              Ancient Egyptian physicians were renowned in the ancient Near East for their healing skills, and some, such as Imhotep, remained
              famous long after their deaths. Herodotus remarked that there was a high degree of specialization among Egyptian physicians,
                with some treating only the head or the stomach, while others were eye-doctors and dentists. Training of physicians took place
                at the Per Ankh or "House of Life" institution, most notably those headquartered in Per-Bastet during the New Kingdom and at 
                Abydos and Saïs in the Late period. Medical papyri show empirical knowledge of anatomy, injuries, and practical treatments.
                  Wounds were treated by bandaging with raw meat, white linen, sutures, nets, pads, and swabs soaked with honey to prevent
                  infection, while opium, thyme, and belladona were used to relieve pain. The earliest records of burn treatment describe
                    burn dressings that use the milk from mothers of male babies. Prayers were made to the goddess Isis. Moldy bread, honey,
                    and copper salts were also used to prevent infection from dirt in burns. Garlic and onions were used regularly to promote
                      good health and were thought to relieve asthma symptoms. Ancient Egyptian surgeons stitched wounds, set broken bones, 
                      and amputated diseased limbs, but they recognized that some injuries were so serious that they could only make the patient
                      comfortable until death occurred.
              </p>
            </div>
            
        </div>
        <div className='homContain'>
            <div className='homContainImg'>
              <img src={hom3} alt=''/>
            </div>
            <div className='homContainP'>
              <p>
              Ancient Egyptian mathematics is the mathematics that was developed and used in Ancient Egypt c. 3000 to c. 300 BCE, from the Old
              Kingdom of Egypt until roughly the beginning of Hellenistic Egypt. The ancient Egyptians utilized a numeral system for counting
                and solving written mathematical problems, often involving multiplication and fractions. Evidence for Egyptian mathematics is 
                limited to a scarce amount of surviving sources written on papyrus. From these texts it is known that ancient Egyptians understood 
                concepts of geometry, such as determining the surface area and volume of three-dimensional shapes useful for architectural
                engineering, and algebra, such as the false position method and quadratic equations.
              </p>
            </div>
            
        </div>
        <div className='homContain' id='homEnd'>
            <div className='homContainImg'>
              <img src={hom2} alt=''/>
            </div>
            <div className='homContainP'>
              <p>
              The ancient Egyptians maintained an elaborate set of burial customs that they believed were necessary to ensure immortality
              after death. These customs involved preserving the body by mummification, performing burial ceremonies, and interring with 
              the body goods the deceased would use in the afterlife. Before the Old Kingdom, bodies buried in desert pits were naturally 
              preserved by desiccation. The arid, desert conditions were a boon throughout the history of ancient Egypt for burials of the
              poor, who could not afford the elaborate burial preparations available to the elite. Wealthier Egyptians began to bury their 
              dead in stone tombs and use artificial mummification, which involved removing the internal organs, wrapping the body in linen,
                and burying it in a rectangular stone sarcophagus or wooden coffin. Beginning in the Fourth Dynasty, some parts were preserved 
                separately in canopic jars. 
              
              </p>
            </div>
            
        </div>
      </div>
    </div>
    
    
  )
}

export default Home