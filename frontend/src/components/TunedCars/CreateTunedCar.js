import { Link } from "react-router-dom";


export const CreateTunedCar = () => {

    return (

        <div className="form-wrap">

            <div className="tabs">
                <h3 className="signup-tab">Tuned car</h3>
            </div>

            <div className="tabs-content">
                <div id="signup-tab-content" className="active">
                    <form className="signup-form" action="" method="post">
                        <input type="text" className="input" id="car-make" autocomplete="off" placeholder="Make" />
                        <input type="text" className="input" id="car-model" autocomplete="off" placeholder="Model" />
                        <input type="text" className="input" id="car-tuner" autocomplete="off" placeholder="Tuner" />
                        <input type="number" className="input"  id="car-year" min="1900" max="2023" step="1" placeholder="Year" />
                        <input type="text" className="input" id="car-motor-type" autocomplete="off" placeholder="Motor type" />
                        <input type="number" className="input" id="car-power-hp" autocomplete="off" placeholder="Power hp" />
                        <input type="number" className="input" id="car-Torque" autocomplete="off" placeholder="Torque Nm" />


                        <input type="text" className="input" id="car-img-url" autocomplete="off" placeholder="Image URL" />
                        <textarea className="input" name="car-description" rows="4" cols="50" placeholder="Description"></textarea>

                        

                        <input type="submit" className="button" value="Post" />
                    </form>

                </div>
            </div>
        </div>


    );
};