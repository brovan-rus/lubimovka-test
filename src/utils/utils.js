const searchInArray = (data, fields, request) =>
  data.filter((item) =>
    fields.some(
      (field) => item[field] && item[field].toLowerCase().includes(request.toLowerCase()),
    ),
  );

export { searchInArray };
