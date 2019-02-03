import sinon from "sinon";
import chai from "chai";

import "mocha/mocha.css";
import "mocha/mocha.js";

global.sinon = sinon;
global.chai = chai;
global.mocha.setup("bdd");
