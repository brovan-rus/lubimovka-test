const searchInArray = (data, fields, request) =>
  data.filter((item) =>
    fields.some(
      (field) => item[field] && item[field].toLowerCase().includes(request.toLowerCase()),
    ),
  );

const makeAuthorsIndex = (data) => {
  const authorsList = new Set(
    data.map((author) => `${author.author_lastName} ${author.author_firstName}`).sort(),
  );
  const authorsIndex = {};
  authorsList.forEach((author, i) => {
    if (authorsIndex[author[0]]) authorsIndex[author[0]] = [...authorsIndex[author[0]], author];
    else authorsIndex[author[0]] = [author];
  });
  return authorsIndex;
};

export { searchInArray, makeAuthorsIndex };
