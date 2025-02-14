export interface TestDataInterface {
  regNumber: string,
  year: number,
  vehicleId: string
  cost?: number | null
}

export interface FormattedDataYearVehicleInterface {
  year?: number | null;
  vehicleId?: string | null;
  cost?: number | null
}