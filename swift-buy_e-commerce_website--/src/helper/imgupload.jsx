const imgupload= async (img)=>{
    const reader= new FileReader()
    reader.readAsDataURL(img)

    const data = await new Promise((resolve,reject)=>{

        reader.onload=()=>resolve(reader.result)
        reader.onerror=()=>reject(error)

    })

    return data

}
export default imgupload