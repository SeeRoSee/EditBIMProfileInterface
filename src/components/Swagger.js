import React from 'react';
import {OpenAPIProvider, useOperation, useOperationMethod} from 'react-openapi-client';

const Swagger = () => (
    <OpenAPIProvider definition="http://localhost:3200/#/pet/">
        <PetDetails id={0} />
    </OpenAPIProvider>
);

const PetDetails = (props) => {
    // useOperation is called right away as an effect
    const { loading, error, data } = useOperation('getPetById', props.id);

    // useOperationMethod returns a method you can call
    const [deletePetById, deleteState] = useOperationMethod('deletePetById');

    if (loading || !data) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="Swagger">
            <img src={data.name} />
            <h3>{data.name}</h3>
            {console.log(data)}
            <ul>
                <li>
                    <strong>id:</strong> {data.id}
                </li>
                <li>
                    <strong>status:</strong> {data.status}
                </li>
            </ul>
            <button onClick={() => deletePetById(data.id)} disabled={deleteState.loading}>
                Delete
            </button>
            {deleteState.response && <p>Success!</p>}
            {deleteState.error && <p>Error deleting pet: {deleteState.error}</p>}
        </div>
    );
};

export default Swagger;