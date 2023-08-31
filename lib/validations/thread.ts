import * as z from 'zod'

export const ThreadValidation = z.object({
    thread:z.string().nonempty().min(3,{message:"Min 3 Characters!"}).max(1000,{message:"Max 1000 Characters!"}),
    accountId:z.string()
})

export const CommentValidation = z.object({
    thread:z.string().nonempty().min(3,{message:"Min 3 Characters!"}).max(1000,{message:"Max 1000 Characters!"})
})