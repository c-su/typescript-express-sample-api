import { createConnection } from "typeorm";
import { User } from "../domain/entity/user";
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
    const user = new User(name, desc, file, 3.0);

    const connection = await createConnection();
    const userRepository = connection.getRepository(User);
    await userRepository.save(user);
    connection.close();
    return true;
  } catch (err) {
    throw err;
  }
};

export const updateUser = async (
  id: number,
  name: string
): Promise<boolean> => {
  try {
    const connection = await createConnection();
    const userRepository = connection.getRepository(User);
    const user = await userRepository.findOne(id);
    if (typeof user === "undefined") return false;

    user.name = name || "";
    await userRepository.save(user);

    connection.close();
    return true;
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
    const connection = await createConnection();
    const userRepository = connection.getRepository(User);
    const user = await userRepository.findOne(id);
    if (typeof user === "undefined") return false;

    await userRepository.remove(user);
    connection.close();
    return true;
  } catch (err) {
    throw err;
  }
};
