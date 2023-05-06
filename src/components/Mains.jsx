import Butonsito from '../components/Butonsito'

function Mains() {
  return (
    <div className="main   ">
        <div className="w-[300px] h-[350px]  py-3">

        <div className="main__caja ">
            <div className="main__span "></div>
            <h2 className="main__text1 ">High-Quality</h2>
            <div className="main__span "></div>
        </div>

        <div className="main__caja2 ">
            <h2 className="main__text2 ">PaintTing Services</h2>
        </div>
        <div className='padding '>
            <p className="padding__p">For commercial or residentail buildings</p>
        </div>
        <div className='main__buton '>
        <Butonsito />        
        </div>
        </div>
    </div>
  )
}

export default Mains