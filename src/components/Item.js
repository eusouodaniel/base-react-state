import React from 'react';
import PropTypes from 'prop-types';

function Item({ value, onDelete }) {
    return(
        <li key={value}>
            {value}
            <button onClick={onDelete} type="button">Remover</button>
        </li>
    );
}

Item.PropTypes = {
    tech: PropTypes.string,
    onDelete: PropTypes.func.isRequired
}

export default Item;