import { TestDataInterface, FormattedDataYearVehicleInterface } from "./reg-check.types"

export const testData: TestDataInterface[] = [
  {
    regNumber: 'AB01 CDE',
    year: 2001,
    vehicleId: '12345',
    cost: null
  },
  {
    regNumber: 'FG02 HJK',
    year: 2002,
    vehicleId: '67890',
    cost: null
  },
  {
    regNumber: 'L33T H4X0R',
    year: 2022,
    vehicleId: '',
    cost: 1000000
  },
  {
    regNumber: 'AGL3',
    year: 2022,
    vehicleId: '9999999',
    cost: 100
  },
]

// Class
export class VehicleMap {
  vehicleMap: Map<string, FormattedDataYearVehicleInterface>

  constructor(data: TestDataInterface[]) {
    this.vehicleMap = this.buildVehicleMap(data)
  }

  public buildVehicleMap(data: TestDataInterface[]): Map<string, FormattedDataYearVehicleInterface> {
    const formattedData: [string, FormattedDataYearVehicleInterface][] = data.map(data => [data.regNumber, { year: data.year, vehicleId: data.vehicleId }])

    const vehicleMap = new Map(formattedData)
    return vehicleMap
  }

  public selectVehicle(regNumber: string) {
    const selectVehcile = this.vehicleMap.get(regNumber)

    if (!selectVehcile) throw new Error('vehicle_reg_num_not_found')
    if (!selectVehcile.vehicleId) throw new Error('vehicle_id_not_found')

    return selectVehcile.vehicleId
  }

  // Feature 3 - Give the count of reg nums that are assigned to vehciles
  public loopRegPlates() {
    let counter = 0
    for (let [key, value] of this.vehicleMap) {
      if (value.vehicleId) counter++
    }
    return counter
  }


  // Feature 5 - Assign a vehicleId to a reg numbner
  public addVehicleNumber(regNumber: string, veh: string) {
    const selectVehcile = this.vehicleMap.get(regNumber)
    // Check Reg
    if (!selectVehcile) throw new Error('vehicle_reg_num_not_found')
    // Add Reg
    const newData: FormattedDataYearVehicleInterface = {
      year: selectVehcile.year,
      vehicleId: veh
    }
    this.vehicleMap.set(regNumber, newData)
    return this.vehicleMap.get(regNumber)
  }

  // Feature 6 - Add a reg number
  public addRegNumber(regNumber: string) {
    const addReg = this.vehicleMap.set(regNumber, { year: null, vehicleId: null })
    return addReg
  }
}

// Function Based Setup
const buildVehicleMap = (data: TestDataInterface[]): Map<string, FormattedDataYearVehicleInterface> => {
  const formattedData: [string, FormattedDataYearVehicleInterface][] = data.map(data => [data.regNumber, { year: data.year, vehicleId: data.vehicleId }])

  const vehicleMap = new Map(formattedData)
  return vehicleMap
}

// Seperate Functions Questions
export const featureOne = (data: TestDataInterface[]): Map<string, FormattedDataYearVehicleInterface> => {
  return buildVehicleMap(data)
}

export const featureTwo = (data: TestDataInterface[], regNumber: string): string => {
  const vehicleMap = buildVehicleMap(data)
  const selectVehcile = vehicleMap.get(regNumber)

  if (!selectVehcile) throw new Error('vehicle_reg_num_not_found')
  if (!selectVehcile.vehicleId) throw new Error('vehicle_id_not_found')

  return selectVehcile.vehicleId
}






