const Tracking51 = require('../src/index')

const key = 'you api key'
const tracking51 = new Tracking51(key)


// Get all couriers (couriers/all)
tracking51.couriers.getAllCouriers()
    .then(result => console.log(result))
    .catch(e => console.log(e))


//     // Create a Tracking (trackings/create)
//     const params = {
//         'tracking_number': '9400111899562537624326',
//         'courier_code': 'usps',
//         'order_number': '',
//         'customer_name': '',
//         'title': '',
//         'language': 'en',
//         'note': 'test Order'
//     }
//     tracking51.trackings.createTracking(params)
//         .then(result => console.log(result))
//         .catch(e => console.log(e))


//     // Get results (trackings/get)
//     // const params = {
//     //     'tracking_numbers': '9400111899562537624656',
//     //     'courier_code': 'usps',
//     // }
//     // const params = {
//     //     'tracking_numbers': '9400111899562539126562,9400111899562537624656',
//     //     'courier_code': 'usps',
//     // }
//     const params = {
//         'created_date_min': '2023-08-23T06:00:00+00:00',
//         'created_date_max': '2023-09-05T07:20:42+00:00',
//     }
//     tracking51.trackings.getTrackingResults(params)
//         .then(result => console.log(result))
//         .catch(e => console.log(e))


//     // Create trackings (trackings/batch)
//     const params = [{
//         'tracking_number': '9400111899562537680047',
//         'courier_code':'usps'
//     },{
//         'tracking_number': '9400111899562537680048',
//         'courier_code':'usps'
//     }]
//     tracking51.trackings.batchCreateTrackings(params)
//     .then(result => console.log(result))
//     .catch(e => console.log(e))

//     // Update a Tracking by ID (trackings/update)
//     const params = {
//         'customer_name': 'New name',
//         'note':'New test order note'
//     }
//     const idString = "9a135b15b5d983e1d8950d99022db0c7"
//     tracking51.trackings.updateTrackingByID(idString, params)
//     .then(result => console.log(result))
//     .catch(e => console.log(e))


//     // Delete Tracking by ID (trackings/delete)
//     const idString = "9a135b15b5d983e1d8950d99022db0c7"
//     tracking51.trackings.deleteTrackingByID(idString)
//     .then(result => console.log(result))
//     .catch(e => console.log(e))


//     // Retrack expired Tracking by ID (trackings/retrack)
//     const idString = "99f4ed7fc73aa83fe68fd69ab6458b28"
//     tracking51.trackings.retrackTrackingByID(idString)
//     .then(result => console.log(result))
//     .catch(e => console.log(e))

//     // Create an air waybill (awb)
//     const params = {
//         'awb_number': '235-69030430',
//     }
//     tracking51.airWaybills.createAnAirWayBill(params)
//     .then(result => console.log(result))
//     .catch(e => console.log(e))