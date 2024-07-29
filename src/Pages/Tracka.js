import React, { useState } from 'react';
import Header from './Header';
import { useDispatch, useSelector } from 'react-redux';
import { getPrediction } from '../Redux/predictSlice';
import '../Style/Tracka.scss'; 

const Tracka = () => {
    const [light, setLight] = useState('');
    const [temperature, setTemperature] = useState('');
    const [humidity, setHumidity] = useState('');
    const [soilMoisture, setSoilMoisture] = useState('');
    
    const dispatch = useDispatch();
    const { prediction, loading, error } = useSelector((state) => state.predict);

    const handlePredict = (e) => {
        e.preventDefault();
        dispatch(getPrediction({ light, temperature, humidity, soilMoisture }));
    };

    return (
        <>
        <div className="tracka-con">
            <div className="rel"><Header/></div>
            <div className="centered">
                <div className="form-center">
                    <form className='form-con' onSubmit={handlePredict}>
                        <div>
                            <label>Light Intensity (Lux)</label>
                            <input
                                type="number"
                                value={light}
                                onChange={(e) => setLight(e.target.value)}
                                placeholder="Light Intensity"
                                required
                            />
                        </div>
                        <div>
                            <label>Temperature (°C)</label>
                            <input
                                type="number"
                                value={temperature}
                                onChange={(e) => setTemperature(e.target.value)}
                                placeholder="Temperature"
                                required
                            />
                        </div>
                        <div>
                            <label>Humidity (%)</label>
                            <input
                                type="number"
                                value={humidity}
                                onChange={(e) => setHumidity(e.target.value)}
                                placeholder="Humidity"
                                required
                            />
                        </div>
                        <div>
                            <label>Soil Moisture</label>
                            <select
                                value={soilMoisture}
                                onChange={(e) => setSoilMoisture(e.target.value)}
                                required
                            >
                                <option value="" disabled>Select soil moisture</option>
                                <option value="0">0 - Low</option>
                                <option value="1">1 - Normal</option>
                                <option value="2">2 - High</option>
                            </select>
                        </div>
                        <button className="btn" type="submit" disabled={loading}>
                            {loading ? 'Loading...' : 'Predict'}
                        </button>
                        {error && <p className="error">{typeof error === 'string' ? error : JSON.stringify(error)}</p>}
                        {prediction && <p className="prediction">Prediction: {prediction.recommendation}</p>}
                    </form>
                </div>
            </div>
        </div>
        </>
    );
}

export default Tracka;
