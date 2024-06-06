import Pic1 from '../assets/BaseballField_1.png';
import Pic2 from '../assets/BaseballField_2.png';
import Pic3 from '../assets/BaseballField_3.png';
import Pic4 from '../assets/BaseballField_4.png';
import Pic5 from '../assets/BaseballField_5.png';
import Pic6 from '../assets/BaseballField_6.png';

const Gallery = () => {
  return (
    <div>
      <h1 className='text-center text-3xl my-5 text-base-200 font-bold'>Gallery</h1>

      <div className="flex justify-around flex-wrap px-10">

        {/* Card 1 */}
        <div className="card w-96 bg-primary shadow-xl my-3">
          <div className="card-body">
            <h2 className="card-title">Field 1</h2>
          </div>
          <figure><img src={Pic1} alt="Field 1" /></figure>
        </div>

        {/* Card 2 */}
        <div className="card w-96 bg-primary shadow-xl my-3">
          <div className="card-body">
            <h2 className="card-title">Field 2</h2>
          </div>
          <figure><img src={Pic2} alt="Field 2" /></figure>
        </div>

        {/* Card 3 */}
        <div className="card w-96 bg-primary shadow-xl my-3">
          <div className="card-body">
            <h2 className="card-title">Field 3</h2>
          </div>
          <figure><img src={Pic3} alt="Field 3" /></figure>
        </div>

        {/* Card 4 */}
        <div className="card w-96 bg-primary shadow-xl my-3">
          <div className="card-body">
            <h2 className="card-title">Field 4</h2>
          </div>
          <figure><img src={Pic4} alt="Field 4" /></figure>
        </div>

        {/* Card 5 */}
        <div className="card w-96 bg-primary shadow-xl my-3">
          <div className="card-body">
            <h2 className="card-title">Field 5</h2>
          </div>
          <figure><img src={Pic5} alt="Field 5" /></figure>
        </div>

        {/* Card 6 */}
        <div className="card w-96 bg-primary shadow-xl my-3">
          <div className="card-body">
            <h2 className="card-title">Field 6</h2>
          </div>
          <figure><img src={Pic6} alt="Field 6" /></figure>
        </div>

      </div>
      
    </div>
  )
}

export default Gallery