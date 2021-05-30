// TODO: store the encrypted PID only

export const setPersonalID = (pid) => {
    return window.localStorage.setItem('dgc_pid', pid)
}

export const getPersonalID = () => {
    return window.localStorage.getItem('dgc_pid')
}