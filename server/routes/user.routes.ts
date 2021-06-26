import { helpers, Status, httpErrors } from '../deps.ts'
import * as userService from '../services/user.service.ts'
import { Context, UserRole } from '../types.ts'
import { hasUserRole } from '../helpers/roles.ts'

const getUsers = async (ctx: Context) => {
    const users = await userService.getUsers()
    ctx.response.body = users
}

const getUserById = async (ctx: Context) => {
    const { id } = helpers.getQuery(ctx, { mergeParams: true })
    const user = await userService.getUserById(+id)
    ctx.response.body = user
};

const updateUser = async (ctx: Context) => {
    const params = helpers.getQuery(ctx, { mergeParams: true })
    const id = Number(params.id)
    const authUser = ctx.state.user

    if (authUser) {
        if (id === authUser.id || hasUserRole(authUser, UserRole.ADMIN)) {
            const request = ctx.request
            const userData = await request.body().value
            const user = await userService.updateUser(+id, userData)
            ctx.response.body = user
            return
        }
    }

    throw new httpErrors.Forbidden('Forbidden user role')
}

const deleteUser = async (ctx: Context) => {
    const { id } = helpers.getQuery(ctx, { mergeParams: true })
    await userService.deleteUser(+id)
    ctx.response.status = Status.NoContent
}

export { getUsers, getUserById, updateUser, deleteUser }
