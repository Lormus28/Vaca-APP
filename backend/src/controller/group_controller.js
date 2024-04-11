import {groupService } from "../services/group_service.js";


const groupController = () =>{

    const servicegroup = groupService();

    const getById = (req,res) =>{

        const group = servicegroup.getById (req.params.id);

        if (!group) {
            return res
            .status (404)
            .json ({message: `Group with id ${req.params.id} does not exist`});
        }

        return res
        .status (202)
        .json ({group});
    }; // solicita al servicio, es decir, al modelo js que a su vez utiliza las rutas del crud, para pedir y recibir la información que necesito para obtener un grupo para pintar

    const getAll = (res) =>{

        const groups = servicegroup.getAll();

        return res
        .status (202)
        .json ({groups});
    }; // hace la petición a los servicios (modelo y crud) de traer todos los grupos de la lista

    const create = (req, res) => {
        const newGroup = servicegroup.create(req.body);

        return res
        .status (201)
        .json (newGroup);
    }; // Pide un objeto de JS con el nuevo grupo y luego retorna el json del nuevo grupo en node

    const editById = (req,res)=> {

        const update = servicegroup.getById (req.params.id, req.body);

        if (update){
            return res.status (204).send();
        }

        return res
        .status (404)
        .json ({message: `Group with id ${req.params.id} does not exist`});
    }; // solicita al servicio (modelo y crud) que actualice algo en un grupo que ya existe, si lo logra retorna con exito y lo monta en el array, si no retorna la falla y un mensaje de error

    const removeById = (req,res) =>{

        remove = servicegroup.removeById(req.params.id);

        if (remove){
            return res.status (204).send();
        }

        return res
        .status (404)
        .json({message: `Group with id ${req.params.id} does not exist`});
    }; // solicita el id del grupo a eliminar, valida si lo logro, lo saca del array y si no retorna un error con mensaje

    return {
        getById,
        getAll,
        create,
        editById,
        removeById
    };

}

export {groupController};