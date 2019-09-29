const keys = require('../../config/keys');

// ES6 string interpolation syntax
module.exports = (survey) => {
    return `
	<html>
		<body>
			<div style="text-align: center;">
				<h3>Part locator request</h3>
				<p>Please let me know if you have the following part:</p>
				<p>${survey.body}</p>
				<div>
					<a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes">Yes</a>
				</div>
				<div>
					<a href="${keys.redirectDomain}/api/surveys/${survey.id}/no">No</a>
				</div>
			</div>
		</body>
	</html>
	`;
};

// old syntax
// '<div>' + survey.body + '</div>'

// in commonJS
// multi line returns use backtics ''
