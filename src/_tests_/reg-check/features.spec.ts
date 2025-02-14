import { featureOne, featureTwo, testData, VehicleMap } from "../../reg-check/reg-checker"

describe('Test all features', () => {
  describe('functionSetup', () => {
    describe('featureOne', () => {
      it('should return the total quanity of registration numbers', () => {
        // Arrange
        const featureOneTestData = [...testData]
        // Act
        const response = featureOne(featureOneTestData)
        // Assert
        expect(response.size).toEqual(4)
        expect(response.size).not.toEqual(2)
      })
    })
    describe('featureTwo', () => {
      it('should return the vehicle id for a given reg number', () => {
        // Arrange
        const featureTwoTestData = [...testData]
        const testedReg = testData[0] // Tested
        const regNumber = testedReg.regNumber
        const vehcileId = testedReg.vehicleId
        // Act
        const response = featureTwo(featureTwoTestData, regNumber)
        // Assert
        expect(response).toEqual(vehcileId)
      })
      it('should throw an error as no registration number found', () => {
        // Arrange
        const featureTwoTestData = [...testData]
        const testedReg = testData[2] // Tested
        const regNumber = testedReg.regNumber
        // Act + Assert
        expect(() => featureTwo(featureTwoTestData, "0")).toThrow('vehicle_reg_num_not_found')
        expect(() => featureTwo(featureTwoTestData, regNumber)).toThrow('vehicle_id_not_found')

      })
    })
  })
  describe('classSetup', () => {
    describe('featureOne', () => {
      it('should return the total quanity of registration numbers', () => {
        // Arrange
        const featureOneTestData = [...testData]
        // Act
        const response = new VehicleMap(featureOneTestData)
        // Assert
        expect(response.vehicleMap.size).toEqual(4)
        expect(response.vehicleMap.size).not.toEqual(2)
      })
    })
    describe('featureTwo', () => {
      it('should return the vehicle id for a given reg number', () => {
        // Arrange
        const featureTwoTestData = [...testData]
        const testedReg = testData[0] // Tested
        const regNumber = testedReg.regNumber
        const vehcileId = testedReg.vehicleId
        // Act
        const response = new VehicleMap(featureTwoTestData)
        // Assert
        expect(response.selectVehicle(regNumber)).toEqual(vehcileId)
      })
      it('should throw an error as no registration number found', () => {
        // Arrange
        const featureTwoTestData = [...testData]
        const testedReg = testData[2] // Tested
        const regNumber = testedReg.regNumber
        // Act + Assert
        expect(() => new VehicleMap(featureTwoTestData).selectVehicle('0')).toThrow('vehicle_reg_num_not_found')
        expect(() => new VehicleMap(featureTwoTestData).selectVehicle(regNumber)).toThrow('vehicle_id_not_found')

      })
    })
    describe('featureThree', () => {
      it('should count vehcileId', () => {
        // Arrange
        const featureTwoTestData = [...testData]
        // Act
        const response = new VehicleMap(featureTwoTestData)
        // Assert
        expect(response.loopRegPlates()).toEqual(3)
      })
    })
    describe('featureFive', () => {
      it('should add a vehicle number to a present reg number', () => {
        // Arrange
        const featureTwoTestData = [...testData]
        const testedReg = testData[2] // Tested
        const regNumber = testedReg.regNumber
        // const vehcileId = testedReg.vehicleId
        // Act
        const response = new VehicleMap(featureTwoTestData)
        // Assert
        expect(response.addVehicleNumber(regNumber, '1337')).toEqual({ vehicleId: "1337", year: 2022 })
      })
    })
    describe('featureSix', () => {
      it('should add a regNumber to memory database', () => {
        // Arrange
        const featureTwoTestData = [...testData]
        // Act
        const response = new VehicleMap(featureTwoTestData)
        // Assert
        expect(response.addRegNumber("UN1T")).toBeTruthy()
      })
    })
  })
})