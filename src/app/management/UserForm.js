import React from 'react';
import CustomField from './CustomFormField';
import CustomFormField from './CustomFormField';

export default ({ user, disabled, actions }) => {
  return (
         <form>
         <CustomFormField value={user.name} name={Object.keys(user)[1]} disabled={disabled} />
         <CustomFormField value={user.username} name={Object.keys(user)[2]} disabled={disabled} />
         <CustomFormField value={user.email} name={Object.keys(user)[3]} disabled={disabled} />
         <CustomFormField value={user.address.street} name="street" disabled={disabled} />
         <CustomFormField value={user.address.suite} name="suite" disabled={disabled} />
         <div className="form-row">
          <div class="form-group col-md-3">
            <label htmlFor="inputCity">City</label>
            <input type="text" value={user.address.city} class="form-control" disabled={disabled} />
          </div>
          <div class="form-group col-md-3">
            <label htmlFor="inputCity">ZipCode</label>
            <input type="text" value={user.address.zipcode} class="form-control" disabled={disabled} />
          </div>
          <div class="form-group col-md-3">
            <label htmlFor="inputCity">Lat</label>
            <input type="text" value={user.address.geo.lat} class="form-control" disabled={disabled} />
          </div>
          <div class="form-group col-md-3">
            <label htmlFor="inputCity">Lng</label>
            <input type="text" value={user.address.geo.lng}class="form-control" disabled={disabled} />
          </div>
        </div>
         <CustomFormField value={user.phone} name={Object.keys(user)[5]} disabled={disabled} />
         <CustomFormField value={user.website} name={Object.keys(user)[6]} disabled={disabled} />
         <CustomFormField value={user.company.name} name="company name" disabled={disabled} />
         <div className="form-row">
          <div class="form-group col-md-6">
            <label htmlFor="inputCity">Catch Phrase</label>
            <input type="text" value={user.company.catchPhrase} class="form-control" disabled={disabled} />
          </div>
          <div class="form-group col-md-6">
            <label htmlFor="inputCity">Bs</label>
            <input type="text" value={user.company.bs} class="form-control" disabled={disabled} />
          </div>
         </div>
        </form>
  );
}