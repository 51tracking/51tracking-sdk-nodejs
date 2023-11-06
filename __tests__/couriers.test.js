const Couriers = require('../src/tracking/couriers')
const Request = require('../src/lib/request')

describe('Couriers', () => {
    describe('constructor', () => {
      it('should throw an error when apiKey is missing', () => {
        expect(() => new Couriers()).toThrow('API Key is missing')
      })
  
      it('should create a Couriers instance with apiKey', () => {
        const apiKey = 'your-api-key'
        const couriers = new Couriers(apiKey)
        expect(couriers.apiKey).toBe(apiKey)
        expect(couriers.apiModule).toBe('couriers')
      })
    })
  
    describe('getAllCouriers', () => {
      it('should send a GET request to /couriers/all', () => {
        const apiKey = 'your-api-key'
        const couriers = new Couriers(apiKey)
        const sendApiRequestMock = jest.spyOn(Request, 'sendApiRequest').mockReturnValue({})
  
        couriers.getAllCouriers()
  
        expect(sendApiRequestMock).toHaveBeenCalledWith('couriers/all', apiKey, 'GET')
      })
    })
  
    
})