const fs = require('fs');

const file = 'hashLogs.csv'

const saveData = (data : string) => {
    fs.writeFileSync(file , data, {flag: "a+"})
}

// Can be used in the future to get the last hash created using the log.
const readLastData = () => {
    if(!fs.existsSync(file)){
        return null;
    }

    const info = fs.readFileSync(file , {encoding: 'utf-8'});
    let lines = info.trim().split('\n');
    let lastLine = lines.slice(-1)[0];
    
    return info;
}

export {
    saveData,
    readLastData
}