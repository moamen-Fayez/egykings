import React from 'react';
import '../style/Tut.css';
import ff from '../images/tut/ff.png'
import ff1 from '../images/tut/ff1.jpg';
import ff2 from '../images/tut/ff2.jpg';
import ff3 from '../images/tut/ff3.png';
import ff4 from '../images/tut/ff4.jpg';
import ff5 from '../images/tut/ff5.jpg';

const Tut = () => {
  return (
    <div className='mainTut'>
      <div className='tut'>
        <div className='removeBG'>
          <div className='removeBGimg'>
            <img src={ff}/>
          </div>
          <div className='removeBGp'>
            <h1>Tutankhamun</h1>
            <p>Young King of Egypt</p>
          </div>
          
        </div>
        <div className='tutContain'>
          <div className='tutContainImg'><img src={ff1}/></div>
          <div className='tutContainP'>
            <h1>Discovery </h1>
            <h2>November 4, 1922</h2>
            <p>The tomb of Tutankhamun was discovered in the Valley of the Kings by excavators led by the Egyptologist Howard Carter.
              Whereas the tombs of most pharaohs were plundered in ancient times, Tutankhamun's tomb was hidden by debris for most of its existence
                and therefore not extensively robbed. It thus became the first known largely intact royal burial from ancient Egypt.</p>
          </div>
        </div>
        <div className='tutContain'>
          <div className='tutContainP'>
            <h1>Inside King Tutankhamun's tomb, </h1>
            <h2>charming! how amazing is that!</h2>
            <p>Tutankhamun took the throne at eight or nine years of age under the unprecedented viziership of his eventual successor,
              Ay, to whom he may have been related.</p>
          </div>
          <div className='tutContainImg'><img src={ff2}/></div>
        </div>
        <div className='tutContain'>
          <div className='tutContainImg'><img src={ff3}/></div>
          <div className='tutContainP'>
            <h1> Tutankhamun and his queen</h1>
            
            <p>He married his paternal half-sister Ankhesenamun. During their marriage they lost two daughters, one at 5 to 6 months of pregnancy and
              the other shortly after birth at full-term. His names—Tutankhaten and Tutankhamun—are thought to mean "Living image of Aten" and "Living
                image of Amun". </p>
          </div>
        </div>
        <div className='tutContain'>
          
          <div className='tutContainP'>
            <h1> A painted chest from the antechamber</h1>
            <h2>Egyptian Museum, Cairo</h2>
            <p>The beautiful graphics and symbols are meaningful, not to mention the amazing colours</p>
          </div>
          <div className='tutContainImg'><img src={ff4}/></div>
        </div>
        <div className='tutContain' id='bigTut1'>
          <div className='tutContainImg'><img src={ff5}/></div>
          <div className='tutContainP'>
            <h1>Death</h1>
            
            <p>
              Murder by a blow to the head was theorised as a result of the 1968 x-ray which showed two bone fragments inside the skull. This theory was disproved by further analysis of the x-rays and the CT scan. The inter-cranial bone fragments were determined to be the result of the modern unwrapping of
              the mummy as they are loose and not adherent to the embalming resin.No evidence of bone thinning or calcified membranes, which could 
              be indicative of a fatal blow to the head, were found. It has also been suggested that the young king was killed in a chariot accident
              due to a pattern of crushing injuries, including the fact that the front part of his chest wall and ribs are missing. However, the missing
              ribs are unlikely to be a result of an injury sustained at the time of death; photographs taken at the conclusion of Carter's excavation in 
              1926 show that the chest wall of the king was intact, still wearing a beaded collar with falcon-headed terminals. The absence of both the
              collar and chest wall was noted in the 1968 x-ray and further confirmed by the CT scan. It is likely that the front part of his chest was 
              removed by robbers during the theft of the beaded collar; the intricate beaded skullcap the king was pictured wearing in 1926 was also missing by 1968.
            </p>
          </div>
        </div>
      
      
      </div>
      <div className='mobTut'>
        
            <div className='removeBG'>
              <div className='removeBGimg'>
                <img src={ff}/>
              </div>
              <div className='removeBGp' id='tuty'>
                <h1>Tutankhamun</h1>
                <p>Young King of Egypt</p>
              </div>
              
            </div>
            <div className='tutContain'>
              <div id='cct1' className='tutContainImg'><img src={ff1}/></div>
              <div className='tutContainP'>
                <h1>Discovery </h1>
                <h2>November 4, 1922</h2>
                <p>The tomb of Tutankhamun was discovered in the Valley of the Kings by excavators led by the Egyptologist Howard Carter.
                  Whereas the tombs of most pharaohs were plundered in ancient times, Tutankhamun's tomb was hidden by debris for most of its existence
                    and therefore not extensively robbed. It thus became the first known largely intact royal burial from ancient Egypt.</p>
              </div>
            </div>
            <div className='tutContain'>
              <div id='cct2' className='tutContainImg'><img src={ff2}/></div>
              <div className='tutContainP'>
                <h1>Inside King Tutankhamun's tomb, </h1>
                <h2>charming! how amazing is that!</h2>
                <p>Tutankhamun took the throne at eight or nine years of age under the unprecedented viziership of his eventual successor,
                  Ay, to whom he may have been related.</p>
              </div>
              
            </div>
            <div className='tutContain' id='tutaq'>
              <div id='cct3' className='tutContainImg'><img src={ff3}/></div>
              <div className='tutContainP'>
                <h1> Tutankhamun and his queen</h1>
                
                <p>He married his paternal half-sister Ankhesenamun. During their marriage they lost two daughters, one at 5 to 6 months of pregnancy and
                  the other shortly after birth at full-term. His names—Tutankhaten and Tutankhamun—are thought to mean "Living image of Aten" and "Living
                    image of Amun". </p>
              </div>
            </div>
            <div className='tutContain'>
              <div id='cct4' className='tutContainImg'><img src={ff4}/></div>
              <div className='tutContainP'>
                <h1> A painted chest from the antechamber</h1>
                <h2>Egyptian Museum, Cairo</h2>
                <p>The beautiful graphics and symbols are meaningful, not to mention the amazing colours</p>
              </div>
              
            </div>
            <div className='tutContain' id='dth'>
              <div id='cct5' className='tutContainImg'><img src={ff5}/></div>
              <div className='tutContainP'>
                <h1>Death</h1>
                
                <p>
                  Murder by a blow to the head was theorised as a result of the 1968 x-ray which showed two bone fragments inside the skull. This theory was disproved by further analysis of the x-rays and the CT scan. The inter-cranial bone fragments were determined to be the result of the modern unwrapping of
                  the mummy as they are loose and not adherent to the embalming resin.No evidence of bone thinning or calcified membranes, which could 
                  be indicative of a fatal blow to the head, were found. It has also been suggested that the young king was killed in a chariot accident
                  due to a pattern of crushing injuries, including the fact that the front part of his chest wall and ribs are missing. However, the missing
                  ribs are unlikely to be a result of an injury sustained at the time of death; photographs taken at the conclusion of Carter's excavation in 
                  1926 show that the chest wall of the king was intact, still wearing a beaded collar with falcon-headed terminals. The absence of both the
                  collar and chest wall was noted in the 1968 x-ray and further confirmed by the CT scan. It is likely that the front part of his chest was 
                  removed by robbers during the theft of the beaded collar; the intricate beaded skullcap the king was pictured wearing in 1926 was also missing by 1968.
                </p>
              </div>
            </div>
      
      
        
      </div>
    </div>
    
  )
}

export default Tut