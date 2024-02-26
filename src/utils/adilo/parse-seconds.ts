export default function parseSec(seconds: number){

    let h = Math.floor(seconds/3600)
    let m = Math.floor((seconds % 3600)/60)
    let s = seconds % 60

    let fh = h<10? `0${h}`: `${h}` 
    let fm = m < 10? `0${m}`: `${m}`
    let fs = s < 10 ? `0${s}`: `${s}`

    return `${fh}:${fm}:${fs}`
}