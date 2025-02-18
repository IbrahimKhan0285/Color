const liveServer = require('live-server');

const params = {
    port: 5500,
    host: "127.0.0.1",
    root: ".",
    open: true,
    file: "index.html",
    wait: 1000,
    mount: [['/dist', './dist']], // Mount the dist directory
    middleware: [function(req, res, next) {
        // Set correct MIME type for CSS files
        if (req.url.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        }
        next();
    }]
};

liveServer.start(params); 