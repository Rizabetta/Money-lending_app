function getUpdateTime(mseconds:number, seconds:number, minutes:number) {
    return mseconds * seconds * minutes;
}

export { getUpdateTime }