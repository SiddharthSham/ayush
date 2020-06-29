
const data = require('./data.json');

exports.data = async ctx => {
    return data;
}

exports.convert = async ctx => {

    let from = data[ctx.params.system][ctx.params.author][ctx.params.metric][ctx.params.convert_from];
    let to = data[ctx.params.system][ctx.params.author][ctx.params.metric][ctx.params.convert_to];
    
    let calc =  ctx.params.value * from / to ;
    converted = {
        "output": calc
    }
    return converted;
};

exports.systems = async ctx => {
    let systems = {
        "systems": Object.keys(data)
    }
    return systems;
}

exports.authors = async ctx => {
    let authors = {
        "authors": Object.keys(data[ctx.params.system])
    }
    return authors;
}

exports.metrics = async ctx => {
    let metrics = {
        "metrics": Object.keys(data[ctx.params.system][ctx.params.author])
    }
    return metrics;
}

exports.units = async ctx => {
    let units = {
        "units": Object.keys(data[ctx.params.system][ctx.params.author][ctx.params.metric])
    }
    return units;
}

exports.values = async ctx => {
    let values = {
        "values": data[ctx.params.system][ctx.params.author][ctx.params.metric]
    }
    return values;
}
