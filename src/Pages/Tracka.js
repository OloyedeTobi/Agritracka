import Header from "./Header";
import '../Style/Tracka.scss';

const Tracka = () =>{
    return(
        <>
        <div className="tracka-con">
            <div className="rel"><Header/></div>
            <div className="centered">
                <div className="form-center">
                    <div className="form-con"> 
                        <div>
                            <label>Light Intensity (Lux)</label>
                            <input type="number" placeholder="Light Intensity (Lux)"/>
                        </div>
                        <div>
                            <label>Temperature (Degree Celsius)</label>
                            <input type="number" placeholder="Temperature (Degree Celsius)"/>
                        </div>
                        <div>
                            <label>Humidity (Percent)</label>
                            <input type="number" placeholder="Humidity (Percent)"/>
                        </div>
                        <div>
                            <label>Soil Moisture (Perfect)</label>
                            <input type="number" placeholder="Soil Moisture (Percent)"/>
                        </div>
                        <div className="btn"> 
                            <button>
                                {/* <p>00</p> */}
                                <span>Predict</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Tracka;