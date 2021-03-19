/* -------------------------------------------------------------------------- */
/*                            External Dependencies                           */
/* -------------------------------------------------------------------------- */
import Document, { Head, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
	render() {
		return (
			<html lang='en'>
				<Head>
					<title>Nubitz | Design and software development done right</title>
					<meta name='keywords' content='nubitz' />

					<meta name='mobile-web-app-capable' content='yes' />
					<meta name='robots' content='index, nofollow' />
					<meta name='apple-mobile-web-app-title' content='Eze' />

					<link rel='icon' href='/favicon.ico' />

					<meta content='IE=edge' httpEquiv='X-UA-Compatible' />
					<meta content='#0855ba' name='theme-color' />
					<meta content='#0855ba' name='msapplication-TileColor' />
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</html>
		);
	}
}
