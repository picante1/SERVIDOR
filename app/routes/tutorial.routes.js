module.exports = app => {
    const financetables = require("../controllers/tutorial.controller.js");

    const router = require("express").Router();

    app.all('*', function(req, res, next) {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });


    router.post("/", financetables.create);

    router.get("/", financetables.findAll);

    router.get("/published", financetables.findAllPublished);

    router.get("/:id", financetables.findOne);

    router.put("/:id", financetables.update);

    router.delete("/:id", financetables.delete);

    router.delete("/", financetables.deleteAll);

    app.use('/api/tutorials', router);
};
