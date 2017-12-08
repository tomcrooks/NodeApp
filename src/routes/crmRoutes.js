const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // middleware
            console.log(`Request from: ${req.originalURL}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, (req, res, next) => {
            res.send('GET Request successful.');
        })

        .post((req, res) =>
        res.send('POST Request successful.'));

    app.route('/contact/:contactId')
        .put((req, res) =>
        res.send('PUT Request successful.'))

        .delete((req, res) =>
        res.send('DELETE Request successful.'));
}

export default routes;
