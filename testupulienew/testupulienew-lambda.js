let AWS = require('aws-sdk');
const sns = new AWS.SNS();
exports.handler = function (event, context, callback) {


	callback(null, 'Successfully executed');
	console.log("SUccess!");

	sns.publish({
		Message: 'this is the message for multiple subscriber types',
		Subject: 'message subject',
		MessageAttributes: {
			'Sender': {
				DataType: 'String',
				StringValue: 'upulie'
			},
			'Company': {
				DataType: 'String',
				StringValue: 'ADRT'
			},
			'ID': {
				DataType: 'Number',
				StringValue: '001'
			}
		},
		MessageStructure: 'String',
		TopicArn: 'arn:aws:sns:us-east-1:480964559519:new upulie'
	}).promise()
		.then(data => {
			// your code goes here
		})
		.catch(err => {
			// error handling goes here
		});


}