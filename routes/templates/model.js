module.exports = function(name) {
  return `
  import mongoose, { Schema } from 'mongoose';
  const ${name}Schema = new Schema(
    {},
    { timestamps: true }
  );
  
  export default mongoose.model(${name}, ${name}Schema);
  `;
};
