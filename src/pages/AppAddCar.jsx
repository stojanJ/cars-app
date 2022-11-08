import React from "react";

export default function AppAddCar({
    newCar,
    setNewCar,
    onCreateNewCar,
  })
  {
    const years = (start = 1990, end = 2018) => {
        return Array.apply(0, Array(end - start + 1))
            .map((element, index) => index + start);
    }

   return(
        <div>
            <form onSubmit={onCreateNewCar}>
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
               <input
                type="radio"
                aria-label="is automatic"
                value={checked}
                onChange={({ target }) =>
                setNewCar({ ...newCar, isAutomatic: target.value })
                }
            />
                <input
                type="radio"
                aria-label="is automatic"
                value={newCar.isAutomatic}
                onChange={({ target }) =>
                setNewCar({ ...newCar, isAutomatic: target.value })
                }
            />           
            <button type="submit">Submit</button>
            </form>
            </div>
    )
}