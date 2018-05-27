import React from "react";
import CustomField from "./CustomFormField";
import CustomFormField from "./CustomFormField";

export default ({ user, disabled, actions }) => (
    <form>
      <CustomFormField
        value={user.name}
        name={Object.keys(user)[1]}
        disabled={disabled}
        action={actions.handleChangeName}
      />
      <CustomFormField
        value={user.username}
        name={Object.keys(user)[2]}
        disabled={disabled}
        action={actions.handleChangeUserName}
      />
      <CustomFormField
        value={user.email}
        name={Object.keys(user)[3]}
        disabled={disabled}
        action={actions.handleChangeEmail}
      />
      <CustomFormField
        value={user.address.street}
        name="street"
        disabled={disabled}
        action={actions.handleChangeStreet}
      />
      <CustomFormField
        value={user.address.suite}
        name="suite"
        disabled={true}
      />
      <div className="form-row">
        <div className="form-group col-md-3">
          <label htmlFor="inputCity">City</label>
          <input
            type="text"
            value={user.address.city}
            className="form-control"
            disabled={true}
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputCity">ZipCode</label>
          <input
            type="text"
            value={user.address.zipcode}
            className="form-control"
            disabled={true}
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputCity">Lat</label>
          <input
            type="text"
            value={user.address.geo.lat}
            className="form-control"
            disabled={true}
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputCity">Lng</label>
          <input
            type="text"
            value={user.address.geo.lng}
            className="form-control"
            disabled={true}
          />
        </div>
      </div>
      <CustomFormField
        value={user.phone}
        name={Object.keys(user)[5]}
        disabled={disabled}
        action={actions.handleChangePhone}
      />
      <CustomFormField
        value={user.website}
        name={Object.keys(user)[6]}
        disabled={true}
      />
      <CustomFormField
        value={user.company.name}
        name="company name"
        disabled={disabled}
        action={actions.handleChangeCompanyName}
      />
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">Catch Phrase</label>
          <input
            type="text"
            value={user.company.catchPhrase}
            className="form-control"
            disabled={true}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">Bs</label>
          <input
            type="text"
            value={user.company.bs}
            className="form-control"
            disabled={true}
          />
        </div>
      </div>
    </form>
);
