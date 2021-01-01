/* JavaScript programs started off pretty small — most of its usage in the early days was to do isolated scripting tasks,
providing a bit of interactivity to your web pages where needed, so large scripts were generally not needed.Fast forward
a few years and we now have complete applications being run in browsers with a lot of JavaScript, as well as JavaScript being
used in other contexts(Node.js, for example) */

/* It has therefore made sense in recent years to start thinking about providing mechanisms for splitting JavaScript programs up
into separate modules that can be imported when needed.
Node.js has had this ability for a long time, and there are a number of JavaScript libraries and frameworks that enable module
usage(for example, other CommonJS and AMD - based module systems like RequireJS, and more recently Webpack and Babel). */

// The good news is that modern browsers have started to support module functionality natively, and this is what this article is all about.

// Use of native JavaScript modules is dependent on the import and export statements

// The first thing you do to get access to module features is export them. This is done using the export statement.
// The easiest way to use it is to place it in front of any items you want exported out of the module
// A more convenient way of exporting all the items you want to export is to use a single export statement at the
// end of your module file, followed by a comma - separated list of the features you want to export wrapped in curly braces

// Once you've exported some features out of your module,
// you need to import them into your script to be able to use them

// You use the import statement, followed by a comma-separated list of the features you want to import wrapped in curly braces,
// followed by the keyword from, followed by the path to the module file

/*
1. You need to pay attention to local testing — if you try to load the HTML file locally(i.e.with a file:// URL), 
    you'll run into CORS errors due to JavaScript module security requirements. You need to do your testing through a server.
2. Also, note that you might get different behavior from sections of script defined inside modules as opposed to in standard scripts. 
    This is because modules use strict mode automatically.
3. There is no need to use the defer attribute (see <script> attributes) when loading a module script; modules are deferred automatically.
4. Modules are only executed once, even if they have been referenced in multiple <script> tags.
5. Last but not least, let's make this clear — module features are imported into the scope of a single script — they aren't available in
    the global scope.Therefore, you will only be able to access imported features in the script they are imported into, and you
    won't be able to access them from the JavaScript console, for example. You'll still get syntax errors shown in the DevTools, but
    you'll not be able to use some of the debugging techniques you might have expected to use.
*/

// There is also a type of export called the default export — this is designed to make it easy to have a default function provided by a
// module, and also helps JavaScript modules to interoperate with existing CommonJS and AMD module systems

import { create, createReportList } from "./modules/canvas.js";
import { draw, reportArea, reportPerimeter } from "./modules/square.js";
import randomSquare from "./modules/square.js";

let myCanvas = create("myCanvas", document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);

// Use the default
let square2 = randomSquare(myCanvas.ctx);
