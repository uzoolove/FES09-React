import { Fragment } from "react";

function AddressBookEdit({ addressBook, handleAddressChange }){
  const list = addressBook.map(address => {
    return (
      <Fragment key={ address.id }>
        <label>
          <input 
            type="text"
            name={ address.id }
            value={ address.value }
            onChange={ handleAddressChange } />
        </label>
        <br/>
      </Fragment>
    );
  });

  return list;
}

export default AddressBookEdit;