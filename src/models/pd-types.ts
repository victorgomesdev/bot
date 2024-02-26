export type PVFolderResponse = {
    folders: Folder[]
}

interface Folder{
    id: string,
    name: string,
    user_id: string,
    parent_folder_id: string,
    status: boolean,
    created_at: string,
    updated_at: string
    videos_count: string
}

export type Video = {
    id: string
    title: string
    storage_size: number
    length: number
}

export interface VideoResponse{
    videos: Video[]
}