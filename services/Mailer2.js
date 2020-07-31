const keys = require('../config/keys');
const sendgrid = require('@sendgrid/mail');

module.exports = ({ subject, recipients }, content) => {
	sendgrid.setApiKey(keys.sendGridKey);

	const emails = recipients.map((Survey) => ({
		to: email,
		from: 'no-reply@emaily.com',
		subject: subject,
		text: 'Hello its me',
		html: content
	}));

	const emails = [];

	recipients.map();

	// send() {
	// 	const response = sendgrid.send(emails);
	// 	return response;
	// }
};
