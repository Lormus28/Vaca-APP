import Router from 'express-promise-router';
import {groupController} from '../controller/group_controller.js';

const groupRouter = () => {

    const gController = groupController();

    const routesregister = () => {
        const router = Router();

        router.get("/:id", gController.getById);
        router.get("/", gController.getAll);
        router.post("/", gController.create);
        router.put("/:id", gController.editById);
        router.delete("/:id", gController.removeById);

        return router;
    }

    return {
        routesregister,
    };
};

export {groupRouter};