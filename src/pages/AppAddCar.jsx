import React, {useState} from "react";


const years = (start = 1990, end = 2018) => {
  return Array.apply(0, Array(end - start + 1))
    .map((element, index) => index + start);
}
const ENGINES = ['diesel', 'petrol', 'electric', 'hybrid'];

export default function AppAddCar() {

  const [newCar, setNewCar] = useState({
    brand: '',
    model: '',
    year: YEARS[0],
    maxSpeed: '',
    numberOfDoors: '',
    isAutomatic: false,
    engine: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (id) {
      await carService.edit(id, newCar);
    } else {
      await carService.add(newCar);
    }

    history.push('/cars');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          required
          type="text"
          aria-label="Bred"
          value={newCar.brend}
          onChange={({ target }) =>
            setNewCar({ ...newCar, brend: target.value })
          }
        ></input>
        <input
          required
          type="text"
          aria-label="model"
          value={newCar.model}
          onChange={({ target }) =>
            setNewCar({ ...newCar, model: target.value })
          }
        />
        <select
          required
          value={newCar.year}
          aria-label="year"
          onChange={({ target }) =>
            setNewCar({
              ...newCar,
              year: target.value,
            })
          }
        > {years().map((year, index) => (
          <option key={index} value={year}>{year}</option>
        ))}
        </select>
        <input
          required
          type="integer"
          aria-label="max speed"
          value={newCar.maxSpeed}
          onChange={({ target }) =>
            setNewCar({ ...newCar, maxSpeed: target.value })
          }
        />
        <input
          required
          aria-label="number of doors"
          type="integer"
          value={newCar.numberOfDoors}
          onChange={({ target }) =>
            setNewCar({ ...newCar, numberOfDoors: target.value })
          }
        />
        <span>
          <label>Is automatic?</label>
          <input
            type='checkbox'
            checked={newCar.isAutomatic}
            onChange={({ target }) => {
              setNewCar({ ...newCar, isAutomatic: target.checked });
            }}
          />
        </span>

        <div>
          <h4>Pick engine:</h4>
          {ENGINES.map((engine, index) => (
            <span key={index}>
              <input
                type='radio'
                name='engine'
                required
                checked={engine === newCar.engine}
                value={engine}
                onChange={() => setNewCar({ ...newCar, engine })}
              />
              {engine.toUpperCase()}
            </span>
          ))}
        </div>
        <div>
          <button type="submit" >Submit</button>
        </div>
      </form>
    </div>
  )
}