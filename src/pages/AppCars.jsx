import React from "react";
import CarsService from "../services/CarsService";

export default function AppCars(){
//     const [cars, setCars] = useState();

//     const handleGetCars= async () => {
//     const cars = await CarsService.getAll();
//     setCars(cars);
//   };

//   useEffect(() => {
//     handleGetCars();
//   }, []);

    return(
        <div>
             {/* <div>
              <ul>
                 {cars && cars.map((car) => <li key={car.id}>
                  Brand:{car.brand},
                  model:{car.model},
                  year: {car.year},
                  max speed: {car.maxSpeed},
                  is automatic: {car.isAutomatic},
                  engine: {car.engine},
                  number of doors: {car.numberOfDoors} </li>)}
             </ul>
           </div> */}
        </div>
    )
}

