const next = require('next');
const moduleAlias = require('module-alias');

const app = next({ dev: false });
const handle = app.getRequestHandler();

moduleAlias.addAlias('react-native', 'react-native-web');

const slasher = handler => (req, res) => {
	if (req.url === '') {
		req.url = '/'
	}

	return handler(req, res)
};

module.exports.handler = slasher((req, res) => {
	return app.prepare().then(() => {
		// Temporary fix for Bodymovin.. on server side
		global.requestAnimationFrame = () => {};
		global.document = {
			createElement: () => ({ getContext: () => {} }),
			createElementNS: () => ({ getContext: () => {} }),
			getElementsByTagName: () => ({ getContext: () => {} }),
		};
		global.navigator = {
			userAgent: 'user-agent',
			isServer: true,
		};

		handle(req, res);
	}).catch(ex => {
		console.error(ex.stack);
		process.exit(1);
	})
});