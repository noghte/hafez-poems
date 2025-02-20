export interface PoemVerse {
    poem_id: number;
    vorder: number;
    position: number;
    text: string;
}

export interface PoemResponse {
    poem: PoemVerse[];
    poet: string;
    poem_id: number;
    request_time: string;
}

export async function fetchPoem(poet: string, pid: number): Promise<PoemResponse> {
    const response = await fetch(`?poet=${poet}&pid=${pid}`);
    
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
} 