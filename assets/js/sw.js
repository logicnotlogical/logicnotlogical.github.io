importScripts("sw-toolbox.js");
toolbox.precache(["/", "/assets/css/main.css"]);
toolbox.router.get("/assets/img/*", toolbox.cacheFirst);
toolbox.router.get("/*", toolbox.networkFirst, { networkTimeoutSeconds: 5 });
