import { downloadVideoFromPanda } from "./utils/panda/download-video";
import * as env from '../env.json'
import fs from 'node:fs'

let temp = fs.createWriteStream(__dirname + `/temp/video.mp4`)

console.log('STARTING DOWNLOAD')
downloadVideoFromPanda(env.SINGLE_VIDEO).then((res)=>{

    res.on('data', (chunk: Buffer)=>{
        temp.write(chunk)
    })

    res.on('end', ()=>{
        console.log('DOWNLOAD END')
    })
})