import React from 'react';
import PropTypes from 'prop-types';

import deleteIcon from '../../assets/images/trash-2.svg';


function TechItem({ tech, onDelete }) {
   return (
      <tr key={tech}>
         <td>{tech}</td>
         <td>
            <button type="button" onClick={onDelete}>
               <img src={deleteIcon} alt="" />
            </button>
         </td>
      </tr>
   );
};

TechItem.propTypes = {
   tech: PropTypes.string.isRequired,
   onDelete: PropTypes.func.isRequired,
};

export default TechItem;