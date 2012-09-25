/* On{X} Script: Polite Birthday wishes
 *
 * Developer: Paras Narang
 *
 * Description:
 *
 * This rule monitors the incoming SMS and checks for 'birthday' or 'bday' (case in-sensitive) in the body.
 * On receiving desired SMS the script sends a Thank you message as a reply.
 *
 */
 
 // register to smsRecieved event
 device.messaging.on('smsReceived', function (sms) {

 // send a new Thank You sms as a reply if message body contains 'birthday' or 'bday'
 var msgText = sms.body.toLowerCase();
 if(msgText.indexOf('birthday')>-1 || msgText.indexOf('bday')>-1) {

     console.log('sms received from', sms.from, 'with the following body:', sms.body);

     device.messaging.sendSms({
         to: sms.from,
         body: 'Thanks :)'
     },
     function (err) {
         console.log(err || 'sms was sent successfully to ' + sms.from );
     }
 );
 }
 });
