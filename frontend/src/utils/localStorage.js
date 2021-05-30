// TODO: store the encrypted PID only

export const setPersonalID = (pid) => {
    return window.localStorage.setItem('dgc_pid', pid)
}

export const getPersonalID = () => {
    return window.localStorage.getItem('dgc_pid')
}


export const setToken = (token, expires) => {
    window.localStorage.setItem('dgc_token', token)
    window.localStorage.setItem('dgc_token_expires', expires.getTime())
}

export const getToken = () => {
    const token = window.localStorage.getItem('dgc_token')
    const expires = window.localStorage.getItem('dgc_token_expires')
    const now = (new Date()).getTime()
    if (!token || !expires || expires < now) return null
    return token
}