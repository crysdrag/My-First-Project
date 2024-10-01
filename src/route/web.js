import express from "express";
import homeController from "../controllers/homeController.js";

let router = express.Router();

let initWebRoutes = (app) => {
    router.get('/', homeController.getHomePage);

    router.get('/checker', (req, res) => {
        return res.send('check10');
    });

    router.get('/about', homeController.getTest);


    return app.use("/", router);
}

export default initWebRoutes;