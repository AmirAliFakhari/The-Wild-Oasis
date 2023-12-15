import supabase, { supabaseUrl } from "./supabase";

export async function getCabins() {

    let { data, error } = await supabase
        .from('cabins')
        .select('*')

    if (error) {
        // console.error("the cabin could not be found")
        throw new Error("the cabin could not be found")
    }

    return data;
}


export async function createEditCabin(newCabin, id) {
    const hasImagePath = newCabin.image?.startsWith?.(supabaseUrl)


    const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll("/", "")
    const imagePath = hasImagePath ? newCabin.image : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`
    //1. create cabin
    let query = supabase.from("cabins")
    //A: create
    if (!id) {
        query = query.insert([
            { ...newCabin, image: imagePath }
        ])
    }
    //B:Edit
    if (id) {
        query = query.update({ ...newCabin, image: imagePath })
            .eq('id', id)
            .select()
    }
    const { data, error } = await query.select().single()
    if (error) {
        throw new Error("the cabin can't be created")
    }
    //2.upload a image
    const { error: storageError } = await supabase
        .storage
        .from('cabin-images')
        .upload(imageName, newCabin.image)
    //3.delete the cabin
    if (storageError) {
        await supabase.from('cabins').delete().eq('id', data.id)
        throw new Error("the cabin image could not be uploaded and the cabin did not created")
    }

    return data;
}

export async function deleteCabins(id) {
    const { data, error } = await supabase.from('cabins').delete().eq('id', id)
    console.log(data)

    if (error) {
        // console.log("the cabin can't be deleted")
        throw new Error("the cabin can't be deleted")
    }

    return data;

}