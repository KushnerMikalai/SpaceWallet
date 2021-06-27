import { httpErrors } from '../deps.ts'
import * as userRepo from '../repositories/user.repository.ts'

export const getUserById = async (id: number) => {
    const user = await userRepo.getUserById(id)
    if (!user) {
        throw new httpErrors.NotFound('User not found')
    }

    return user
};

export const getUsers = async () => {
    const users = await userRepo.getUsers()
    return users
}

export const updateUser = async (id: number, userData: any) => {
    try {
        const result = await userRepo.updateUser(id, userData)
        if (result['affectedRows']) {
        const user = await userRepo.getUserById(id)
        if (user) {
          return user
        }
    }
        throw new httpErrors.NotFound('User not found')
    } catch (err) {
        const { message } = err
        if (message.match('email_unique')) {
            throw new httpErrors.BadRequest(`Already user exists with email ${userData.email}`)
        }
        throw err
    }
}

export const deleteUser = async (id: number) => {
    // TODO: catch db error
    const result = await userRepo.deleteUser(id)
    if (!result['affectedRows']) {
        throw new httpErrors.NotFound('User not found')
    }
}
