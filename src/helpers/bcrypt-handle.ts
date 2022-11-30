const bcryptjs= require ('bcrypt');

const encrypt = async (pass: string) => {
  const hash = await bcryptjs.hash(pass, 8);
  return hash;
};

const compare = async (pass: string, passHash: string) => {
  return await bcryptjs.compare(pass, passHash);
 
};

export { encrypt, compare };