export const onSelectChange = (setFilters) => (values, actionMeta) => {
  setFilters((prevFilters) => ({
    ...prevFilters,
    [actionMeta.name]: (values || []).map((e) => e.value),
  }));
};

export const onSingleSelectChange = (setFilters) => (e, actionMeta) => {
  setFilters((prevFilters) => ({
    ...prevFilters,
    [actionMeta.name]: e.value,
  }));
};
