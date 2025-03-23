// crud opertaion on file

const fs = require('fs')
const path = require('path')

const filePath = path.join(__dirname,'data-async.txt')

// function createFileAsync(content){
//     fs.writeFile(filePath,content,(err)=>{
//         if(err){
//             console.log('error in createing file',err)
//         }else{
//             console.log('file cretaed successfully')
//         }
//     })

// }

function createFIleSync(content){
    try{
        fs.writeFileSync(filePath,content)
        console.log('file is creted successfuly')

    }catch(err){
        console.log("getting error in creating file",err)
    }

}

function readfileAsync(){
    fs.readFile(filePath,'utf8',(err,data)=>{
        if(err){
            console.log('error in reading file')
        }else{
            console.log("filew data is ->",data)
        }

    })

}

function updateFileAsync(newContent){
    fs.appendFile(filePath,`\n${newContent}`,(err)=>{
        if(err){
            console.log('fail to update')
        }
        else{
            console.log("file updated")
        }

    })

}

function deleteFileAsync(){
    fs.unlink(filePath,(err)=>{
        if(err){
            console.log("getting error in delete file")
        }else{
            console.log('file delete successfully')
        }
    })
}

console.log('start')

createFIleSync("bye i have create this file using fs module ok thats fine bye i have create this file using fs module ok thats fine")

console.log("createing file")

updateFileAsync("i m doing some update here")


readfileAsync()

deleteFileAsync()

console.log("end")
