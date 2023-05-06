import sectionsito from './style/Sectionsito.css'

function Sectionsito() {
  return (
    <div className="section" >
        <div className="section__img   ">
           
            <img src="/img.png"  />
            <div className="section__card ">
                <h2 className="section__card_h2 ">More than</h2>
                <h5 className="section__card_h5 ">250</h5>
                <h3 className="section__card_h3 ">Sucessful Proyects</h3>
            </div>
           
        </div>
        
        <div className="datos  ">

            <div className="datos__contai">
            <h1 className="datos__contai_h1">We are here to help you create a space you´ll love for a very long time!</h1>
            </div>

            
            <p className="datos_p ">City Garden & Painter has over 20 years of experience providing homes and businesses in the greater Los Angeles area and nearby coastal ports with a fresh and renewed appearance.</p>
            

            <div className="section__card_ ">
                
                <div className="section__card_span "></div>
                <div className="section__card_contenido">
                    <h2 className="section__card_contenido-h2">Our Mission</h2>
                    <h4 className="section__card_contenido-h4">Our mission is to enhance the beauty of our customers' properties while also promoting environmental sustainability, responsible practices, and the utilization of sustainable products.</h4>
                </div>
            </div>
            
            <div className="section__card_">
            <div className="section__card_span"></div>
                <div className="section__card_contenido">
                    <h2 className="section__card_contenido-h2">Our Mission</h2>
                    <h4 className="section__card_contenido-h4">Our mission is to enhance the beauty of our customers' properties while also promoting environmental sustainability, responsible practices, and the utilization of sustainable products.</h4>
                </div>
            </div>
            
        </div>
    
    </div>
  )
}

export default Sectionsito