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
    console.log(`Fetching poem: poet=${poet}, pid=${pid}`);
    const url = `/api/poems?poet=${poet}&pid=${pid}`;
    
    const options = {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };
    
    const response = await fetch(url, options);
    
    if (!response.ok) {
        console.error(`API error: ${response.status} ${response.statusText}`);
        
        // Enhanced error object
        const error = new Error(`HTTP error! status: ${response.status}`);
        error.status = response.status;
        throw error;
    }
    
    try {
        const data = await response.json();
        // console.log('Poem data received:', data);
        return data;
    } catch (err) {
        console.error('JSON parsing error:', err);
        throw new Error('Error parsing response data');
    }
}