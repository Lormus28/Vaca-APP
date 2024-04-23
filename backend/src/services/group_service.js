import { Model } from "../database/memory.js";

const groupService = () => {

    const groupModel = Model(); //Creating a model class in Node. js typically involves defining a JavaScript class that represents a specific data structure or entity, such as a user, product, or any other concept in your application. You can use this class to create, read, update, and delete (CRUD) instances of that entity

    const getById = (id) => {
        return groupModel.findUnique (id); //obtengo el grupo por id específico
    };

    const getAll = () =>{
        return groupModel.findMany(id); // Me trae todos los id o grupos que existan en la lista
    };

    const create = (newGroup) => {
        return groupModel.create (newGroup); // creo un nuevo grupo
    };

    const editById = (id, group) =>{
        return groupModel.update (id, group); // edito un grupo conociendo su id y su nombre
    };

    const removeById = (id) =>{
        return groupModel.delete(id); // elimina un grupo por su id
    }

    return{
        getById,
        getAll,
        create,
        editById,
        removeById,
    };
};

export {groupService};