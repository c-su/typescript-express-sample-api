import { UserRepository } from "../infrastructure/user-repository";

export const insertUser = async (
  n: string,
  d: string,
  f: string
): Promise<boolean> => {
  try {
    const name = n || "";
    const desc = d || "";
    const file = f || "";
    const userRepository = new UserRepository("User");
    return userRepository.createUser(name, desc, file);
  } catch (err) {
    throw err;
  }
};

export const updateUser = async (
  id: number,
  name: string
): Promise<boolean> => {
  try {
    const userRepository = new UserRepository("User");
    return await userRepository.updateUserById(id, name);
  } catch (err) {
    throw err;
  }
};

export const selectUser = async (id: number): Promise<object> => {
  try {
    const userRepository = new UserRepository("User");
    const user = await userRepository.findUserById(id);
    if (typeof user === "undefined") return {};
    return {
      name: user.name,
      desc: user.description,
      views: user.views
    };
  } catch (err) {
    throw err;
  }
};
export const deleteUser = async (id: number) => {
  try {
    const userRepository = new UserRepository("User");
    return await userRepository.removeUserById(id);
  } catch (err) {
    throw err;
  }
};
