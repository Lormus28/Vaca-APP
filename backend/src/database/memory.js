const Model = () => {

    const entities = [];

    const findUnique = (id) => {

        return entities.find((entity) => entity.id === id);
    };

    const findMany = () => {
        return entities
    };

    const create = (entity) => {
        const maxId = entities.reduce((max, { id }) => Math.max(max, id), 0); //Agrega un identificador al número máximo de id
        const newId = (maxId + 1).toString(); // le suma uno al número máximo que identifico antes y con eso garantizo que lo inserto al final del array
        const newEntity = {
            ...entity,
            id: newId,
        };
        entities.push(newEntity); // propiedad de los array para insertar el nuevo grupo

        return newEntity;
    };

    const update = (id, newEntity) => { // la funcion requiere dos parámetros, el id y la nuev entrada

        const entityIndex = entities.findIndex((entity) => { entity.id === id }); // el método findIndex de los array busca el índice del elemento que tiene el id, este tiene un callback interno que compara si que el id ingresado es igual al que se tiene almacenado

        if (entityIndex !== -1) {               //verifica si el id obtenido no puedo ser encontrado en el array
            entities[entityIndex] = newEntity;  //Si fue encontrado (no es -1) actualizo ese elemento a la lista de entidades y ya el entityIndex toma el valor de newEntity
            return true; // si la actualización fue exitosa
        }
        return false; // si el intento de actualizacion no existe ( fue -1) 
    };

    const del_group = (id) => {

        const entityIndex = entities.findIndex((entity) => entity.id === id); //Busco el indice del elemento que deseo eliminar, el callback interno los compara con el ingresado

        if (entityIndex !== -1) {             // Verifica si el id obtenido no puede ser encontrado en el array (es menos 1)
            entities.splice(entityIndex, 1); // si el id encontrano no es -1, fue encontrado en el array utiliza el método splice de los array para eliminar el elemnto que coincide con ese id buscado

            return true;// la eliminacion fue exitosa
        }

        return false; // el id es igual a -1 o no existe dentro del array
    };

    return {
        findUnique,
        findMany,
        create,
        update,
        del_group
    };
}

export {Model};