const getFileName = module => {
  const name = module.filename.substr(module.filename.lastIndexOf('\\') + 1);
  console.log(name);
}

module.exports = getFileName;
