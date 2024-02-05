import supabase, { supabaseUrl } from "./supabase";


export async function signup({ email, password, fullName }) {

    let { data, error } = await supabase.auth.signUp({
        email, password, options: {
            data: {
                fullName,
                avatar: ""
            }
        }
    })
    if (error) throw new Error(error.message)

    return data

}

export async function login({ password, email }) {

    let { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    })

    // console.log(data)
    if (error) throw new Error(error.message)
    return data
}

// export async function getCurrentUser() {
//     const { data: session } = await supabase.auth.getSession()

//     if (!session.session) return null;

//     const { data, error } = await supabase.auth.getUser()

//     // console.log(data)
//     if (error) throw new Error(error.message)
//     return data?.user
// }

export async function getCurrentUser() {
    const { data: session } = await supabase.auth.getSession();
    if (!session.session) return null;

    const { data, error } = await supabase.auth.getUser();

    if (error) throw new Error(error.message);
    return data?.user;
}

export async function logout() {

    const { error } = await supabase.auth.signOut()
    if (error) throw new Error(error.message)
}

export async function updateCurrentUser({ password, avatar, fullName }) {
    //1) update password or fullname
    let updateData;
    if (password) updateData = { password }
    if (fullName) updateData = { data: { fullName } }
    const { data, error } = await supabase.auth.updateUser(updateData)
    if (error) throw new Error(error.message)

    if (!avatar) return data

    //2) upload a avatar

    const fileName = `avatar-${data.user.id}-${Math.random()}`

    const { error: storageError } = await supabase.storage.from("avatars").upload(fileName, avatar)
    if (storageError) throw new Error(storageError.message)


    //3) update the user

    const { error: error2, data: updateUser } = await supabase.auth.updateUser({
        data: {
            avatar: `${supabaseUrl}/storage/v1/object/public/avatars/${fileName}`
        }
    })
    if (error2) throw new Error(error2.message)

    return updateUser
}