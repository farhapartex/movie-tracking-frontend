export const baseUrl = "http://localhost:8000/"
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
    let user: UserAuth | null = JSON.parse(localStorage.getItem('_mv_user') || '{}');
    let token: string | null = null;
    if (user) {
        token = user.access;
    }

    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
    }
}