const inputType = (input) => {
  switch (input.currentTarget.type) {
    case "text":
      return input.target.id;
    case "tel":
      return "phone";
    default:
      return input.currentTarget.type;
  }
};

export const updateStateOnInput = (e, cb) => {
  let target = inputType(e);
  cb((prev) => ({
    ...prev,
    [target]: e.target.value,
  }));
};
