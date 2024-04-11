import express from 'express';

const groupRouter = () => {

    const groupController = groupController();

    const routesregister = () => {
        const router = express.Router();

        router.get("/:id", groupController.getById);
        router.get("/", groupController.getAll);
        router.post("/", groupController.create);
        router.put("/:id", groupController.editById);
        router.delete("/:id", groupController.removeById);

        return router;
    }

    return {
        routesregister,
    };
};

export {groupRouter};