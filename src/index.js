const Couriers = require('./tracking/couriers')
const Trackings = require('./tracking/trackings')
const AirWaybills = require('./tracking/airWaybills')

class Tracking51 {
    constructor(key) {
         this.couriers = new Couriers(key)
         this.trackings = new Trackings(key)
         this.airWaybills = new AirWaybills(key)
    }
}
  
module.exports = Tracking51
