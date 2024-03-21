import { listVideos } from "./utils/panda/list-videos";
import { downloadVideoFromPanda } from "./utils/panda/download-video";
import * as env from '../env.json'
import { Video } from "./models/pd-types";
import fs from 'node:fs'

let listaVideos: Video[] = []

listVideos(env.SOURCE_FOLDER)
.then(res => {
        
    listaVideos = res
})
.then(()=>{

    listaVideos
    .forEach(video=>{

        let temp = fs.createWriteStream(__dirname + `/temp/${video.title.replaceAll('[\\/:"*?<>|]/g', '')}.mp4`)

        console.log(`BAIXANDO VÍDEO: ${video.title}`)

        downloadVideoFromPanda(video.id)
        .then((content)=>{

            content
            .on('data', (chunk: Buffer)=>{

                temp.write(chunk)
            })

            content
            .on('end', ()=>{
                console.log(`VÍDEO ${video.title} BAIXADO`)
            })
        })
    })
})
    // .then(() => {

        
    //     listaVideos.forEach((video) => {

    //         let temp = fs.createWriteStream(__dirname + `/temp/${video.title.replaceAll('[\\/:"*?<>|]/g', '')}.mp4`)

    //         console.log(`DOWNLOADING: ${video.title}...`)
    //         downloadVideoFromPanda(video.id)
    //             .then(content => {

    //                 content.on('data', (chunk: Buffer) => temp.write(chunk))
    //                 content.on('end', () => {
    //                     console.log(`FILE: ${video.title} HAS BEEN DOWNLOADED`)

                        // getInitUpload(video).then((res: FileUploadResponse) => {

                        //     let parts: VideoPart[] = []
                        //     let videoContent = fs.createReadStream(__dirname + `/temp/${video.title}`)
                        //     let num = 1

                        //     videoContent.on('data', (chunk: Buffer) => {

                        //         getSignedUrl(res.payload.uploadId, num, res.payload.key).then((r: SignedUrlResponse) => {

                        //             uploadVideoPart(chunk, r.payload.url).then((response) => {

                        //                 parts.push({ ETag: response.headers['ETag'], PartNumber: num })
                        //                 num += 1
                        //             }).then(() => {

                        //                 completeUpload(res.payload.key, res.payload.uploadId, parts).then(() => {

                        //                     fs.unlink(__dirname + `/temp/${video.title}`, () => {

                        //                         console.warn('ACABOU')
                        //                     })
                        //                 })
                        //             })
                        //         })
                        //     })
                        // })
    //                 })

    //             })
    //     })
    // })
