import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';

export default class MyDocument extends Document {
	static getInitialProps ({ renderPage }) {
		const {html, head, errorHtml, chunks} = renderPage();
		const styles = flush();
		return { html, head, errorHtml, chunks, styles };
	}

	componentDidMount() {

	}

	render () {
		return <html>
			<Head>
				<style>{`
					body { margin: 0 } /* custom! */
					.progress-bar {
						opacity: 1;
						transition: opacity 2000ms linear;
					}
					.progress-bar.done {
						opacity: 0;
					}
				`}</style>
				<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"/>
				<meta name="format-detection" content="telephone=no"/>
				<meta name="msapplication-tap-highlight" content="no"/>
			</Head>

			<body>
				<Main/>
				<NextScript/>
			</body>
		</html>
	}
}