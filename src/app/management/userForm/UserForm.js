import React from "react";
import CustomField from "./CustomFormField";
import CustomFormField from "./CustomFormField";

export default ({ user, disabled, actions }) => (
    <form>
      <h5>User</h5>
      <CustomFormField
        value={user.name}
        name="name"
        disabled={disabled}
        action={actions.handleChangeProperty}
      />
      <CustomFormField
        value={user.username}
        name="username"
        disabled={disabled}
        action={actions.handleChangeProperty}
      />
      <CustomFormField
        value={user.email}
        name="email"
        disabled={disabled}
        action={actions.handleChangeProperty}
      />
      <h5>Address</h5>
      <CustomFormField
        value={user.address.street}
        name="address.street"
        disabled={disabled}
        action={actions.handleChangeNestedProperty}
      />
      <CustomFormField
        value={user.address.suite}
        name="address.suite"
        disabled={disabled}
        action={actions.handleChangeNestedProperty}
      />
      <div className="form-row">
        <div className="form-group col-md-3">
          <label htmlFor="inputCity">City</label>
          <input
            type="text"
            value={user.address.city}
            name="address.city"
            className="form-control"
            disabled={disabled}
            onChange={actions.handleChangeNestedProperty}
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputCity">ZipCode</label>
          <input
            type="text"
            value={user.address.zipcode}
            name="address.zipcode"
            className="form-control"
            disabled={disabled}
            onChange={actions.handleChangeNestedProperty}
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputCity">Lat</label>
          <input
            type="text"
            value={user.address.geo.lat}
            name="address.geo.lat"
            className="form-control"
            disabled={disabled}
            onChange={actions.handleChangeDoubleNestedProperty}
          />
        </div>
        <div className="form-group col-md-3">
          <label htmlFor="inputCity">Lng</label>
          <input
            type="text"
            value={user.address.geo.lng}
            name="address.geo.lng"
            className="form-control"
            disabled={disabled}
            onChange={actions.handleChangeDoubleNestedProperty}
          />
        </div>
      </div>
      <CustomFormField
        value={user.phone}
        name="phone"
        disabled={disabled}
        action={actions.handleChangeProperty}
      />
      <CustomFormField
        value={user.website}
        name="website"
        disabled={disabled}
        action={actions.handleChangeProperty}
      />
      <h5>Company</h5>
      <CustomFormField
        value={user.company.name}
        name="company.name"
        disabled={disabled}
        action={actions.handleChangeNestedProperty}
      />
      <div className="form-row">
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">Catch Phrase</label>
          <input
            type="text"
            value={user.company.catchPhrase}
            name="company.catchPhrase"
            className="form-control"
            disabled={disabled}
            onChange={actions.handleChangeNestedProperty}
          />
        </div>
        <div className="form-group col-md-6">
          <label htmlFor="inputCity">Bs</label>
          <input
            type="text"
            value={user.company.bs}
            name="company.bs"
            className="form-control"
            disabled={disabled}
            onChange={actions.handleChangeNestedProperty}
          />
        </div>
      </div>
    </form>
);
