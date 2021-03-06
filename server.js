const express = require('express');
const next = require('next');
const moduleAlias = require('module-alias');

const port = process.env.PORT || 2017;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const server = express();

moduleAlias.addAlias('react-native', 'react-native-web');

app.prepare()
	.then(() => {
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

		server.get('*', (req, res) => {
			return handle(req, res);
		});

		if (module === require.main) {
			server.listen(port, (err) => {
				if (err) throw err;
				console.log(`Server is running under port ${port}`);
			});
		}
	})
	.catch((ex) => {
		console.error(ex.stack);
		process.exit(1);
	});

module.exports = server;
