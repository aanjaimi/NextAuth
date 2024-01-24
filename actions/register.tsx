'use server'
import * as z from 'zod'
import { RegisterSchema } from '../schemas';

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validate = RegisterSchema.safeParse(values);

  if (!validate.success) {
    return {error: "Invalid credentials"};
  }

  return {success: "Your account have been created!"};
};
