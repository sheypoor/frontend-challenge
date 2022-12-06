import React, { useState } from "react";

export const FormStateContext = React.createContext();

const FormStateService = ({ children }) => {
  const [formData, setFormData] = useState({});

  const permissionService = {
    getFormData() {
      return formData;
    },
    putFormData(newValues) {
      setFormData(newValues);
    },
  };

  return (
    <FormStateContext.Provider value={permissionService}>
      {children}
    </FormStateContext.Provider>
  );
};

export default FormStateService;
