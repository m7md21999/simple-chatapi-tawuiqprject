import { TypeOf, z } from "zod";

export const UserSchema = z.object({
  body: z.object({
    username: z
      .string({
        required_error: "Username is required",
        invalid_type_error: "Username must be a string"
      })
      .min(2, "username must be at least 2 chrs")
      .max(10, "username ,must be less than 10 chrs"),
    email: z
      .string({
        required_error: "email is required",
        invalid_type_error: "plasee enter a valid email",
      })
      .email(),
    fullname: z
      .string({
        required_error:"Fullname is required!",
        invalid_type_error:"Full name must be a string"
      }).min(2,"Must be at least 2 letters"),
  }),
});


export const MessageSchema = z.object({
  body: z.object({
    content: z.string({
      required_error:"message content is required!",
      invalid_type_error:"Must be String"
    }),
    userId: z.string({
      required_error:"User ID is required",
      invalid_type_error: "User ID must be string"
    }),
    groupId: z.number({required_error:"Group Id is required",
  invalid_type_error:"Group Id must be Integer"})
  })
});

export const GroupSchema = z.object({
  body: z.object({
    name:z.string({
      required_error:"Group name is required!",
    }).min(1,"Group name is required!").max(20,"Max is 20 letters")
  }),
});

export type UserTypeSchema = TypeOf<typeof UserSchema>["body"];
export type MessageTypeSchema = TypeOf<typeof MessageSchema>["body"];
export type GroupTypeSchema = TypeOf<typeof GroupSchema>["body"];