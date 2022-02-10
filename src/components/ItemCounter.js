import React, { useState } from 'react';

function ItemCount({ stock, initial, onAdd}) {
    const [contador, setContador] = useState(parseInt(initial))
    return(
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
            <button onClick={() => setContador(contador - 1)} className="btn btn-secondary active">
                -
            </button>
            <label className="btn btn-secondary">
                {contador}
            </label>
            <button onClick={() => setContador(contador + 1)} className="btn btn-secondary active">
                +
            </button>
        </div>
    )
}

export default ItemCount;