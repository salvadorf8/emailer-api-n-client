const keys = require('../../config/keys');

// ES6 string interpolation syntax
module.exports = (survey) => {
    return `
	<html>
		<body>
			<table width="100%" border="0" cellspacing="0" cellpadding="0" bgcolor="#ffffff">
			<tbody>
			<tr>
				<td style="padding: 0px 40px 40px 40px;" class="p0-15-30">
				<table width="100%" border="0" cellspacing="0" cellpadding="0">
					<tbody>
					<tr>
						<th class="column" width="260" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
						<table width="100%" border="0" cellspacing="0" cellpadding="0">
							<tbody>
							<tr>
								<td class="fluid-img" style="font-size:0pt; line-height:0pt; text-align:left;">
								<a href="#" target="_blank">
									<img src="https://images.unsplash.com/photo-1543118141-8598f6bfbc0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=976&q=80" width="260" height="390" border="0" alt="">
								</a>
								</td>
							</tr>
							</tbody>
						</table>
						</th>
						<th style="padding-bottom:20px !important; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;" class="column" width="60"></th>
						<th class="column" style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
						<table width="100%" border="0" cellspacing="0" cellpadding="0">
							<tbody>
							<tr>
								<td class="h2" style="padding-bottom: 20px; color:#444444; font-family:'Yantramanav', Arial, sans-serif; font-size:40px; line-height:46px; text-align:left; font-weight:300;">
								${survey.title}
								</td>
							</tr>
							<tr>
								<td class="text" style="padding-bottom: 25px; color:#666666; font-family:Arial, sans-serif; font-size:16px; line-height:30px; text-align:left; min-width:auto !important;">${survey.body}</td>
							</tr>
							<tr>
								<td align="left">
								<table border="0" cellspacing="0" cellpadding="0">
									<tbody>
									<tr>
										<th class='column' style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
										<td class="text-button" style="color:#ffffff; background:#6dd795; border-radius:5px; font-family:'Yantramanav', Arial, sans-serif; font-size:14px; line-height:18px; text-align:center; font-weight:500; padding:12px 25px;">
										<a href="${keys.redirectDomain}/api/surveys/${survey.id}/yes" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;">
											<span class="link-white" style="color:#ffffff; text-decoration:none;">YES</span>
										</a>
										</td>
									</th>
									<th style="padding-bottom:20px !important; font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;" class="column" width="60"></th>
									<th class='column' style="font-size:0pt; line-height:0pt; padding:0; margin:0; font-weight:normal;">
										<td class="text-button" style="color:#ffffff; background:#6dd795; border-radius:5px; font-family:'Yantramanav', Arial, sans-serif; font-size:14px; line-height:18px; text-align:center; font-weight:500; padding:12px 25px;">
										<a href="${keys.redirectDomain}/api/surveys/${survey.id}/no" target="_blank" class="link-white" style="color:#ffffff; text-decoration:none;">
											<span class="link-white" style="color:#ffffff; text-decoration:none;">NO</span>
										</a>
										</td>
									</th>
									</tr>
									</tbody>
								</table>
								</td>
							</tr>
							</tbody>
						</table>
						</th>
					</tr>
					</tbody>
				</table>
				</td>
			</tr>
			</tbody>
		</table>
		</body>
	</html>
	`;
};

// old syntax
// '<div>' + survey.body + '</div>'

// in commonJS
// multi line returns use backtics ''
