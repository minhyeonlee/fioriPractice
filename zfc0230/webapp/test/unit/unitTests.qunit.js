/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"sync04/zfc0230/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});