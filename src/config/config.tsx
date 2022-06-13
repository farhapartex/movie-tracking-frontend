export const baseUrl = "http://localhost:8000/"
export const baseRapidURL = "https://movie-database-alternative.p.rapidapi.com/";
export const rapidAPIHost = "movie-database-alternative.p.rapidapi.com"
export const baseHeader = {
    'Content-Type': 'application/json'
}

export interface UserInfo {
    username: string,
    rapid_api_key: string,
}
interface UserAuth {
    access: string,
    refresh: string,
    user: UserInfo
}

export const authHeader = () => {
    let user: UserAuth | null = JSON.parse(localStorage.getItem('user') || '{}');
    let token: string | null = null;
    if (user) {
        token = user.access;
    }

    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
}

export const rapidAuthHeader = () => {
    let user: UserAuth | null = JSON.parse(localStorage.getItem('_mv_user') || '{}');
    let rapid_api_key: string = "";
    if (user) {
        rapid_api_key = user.user.rapid_api_key;
    }

    return {
        'X-RapidAPI-Key': rapid_api_key,
        'X-RapidAPI-Host': rapidAPIHost
    }
}