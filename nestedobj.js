let obj = {
    "columnDataRegex": "([\\w& \\-\\\\'\\/\\,]|[^\\x00-\\x7F])+",
    "columnDataWhiteListName": "Ethnicity",
    "columnNameRegex": "\\b([a-zA-Z]{0,20}[\\_\\ ])?(Ethnicity)\\b",
    "confidenceFactorConfig": {
        
        "expStrength": 0.8,
        "expressionId": 260,
    },
    "dgValidationFunction": {
        "validationFunctionName": "ValidateEthnicity"
    },
    "updatets": 1644899130360
}

function flattenObj(obj,parent,res={}){
    for(let key in obj){
        let propname = parent ? parent + '_'+ key :key;
        if(typeof obj[key]=='object'){
            flattenObj(obj[key],propname,res);
        }
        else{
            res[propname] = obj[key];
        }
    }
    return res;
}
console.log(flattenObj(obj));
 