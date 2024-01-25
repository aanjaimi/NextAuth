'use server'
import * as z from 'zod'
import { RegisterSchema } from '../schemas';
import bcrypt from 'bcrypt';
import { db } from '../lib/db';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validate = RegisterSchema.safeParse(values);

  if (!validate.success) {
    return {error: "Invalid credentials"};
  }

  const { firstName, lastName, email, password } = validate.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const existingUser = await db.user.findUnique({
    where: {
      email,
    }
  });

  if (existingUser) {
    return {error: "Email already in use"};
  }

  await db.user.create({
    data: {
      firstName,
      lastName,
      email,
      password: hashedPassword,
    },
  });

  //TODO: send verification token email 

  return {success: "Your account have been created!"};
};
