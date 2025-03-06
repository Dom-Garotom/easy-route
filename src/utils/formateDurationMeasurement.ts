export const formatDurationMeasurement =  (measurement : string) : string =>{
    if (measurement === 'm'){
        return 'minutes'
    }

    return 'hours'
}