exports.guard = function(spawn){
    this.creep('guard', [Game.ATTACK, Game.MOVE, Game.TOUGH], 'guard', spawn);
}

exports.archer = function(spawn){
    this.creep('archer', [Game.RANGED_ATTACK, Game.MOVE, Game.TOUGH], 'archer', spawn);
}

exports.harvester = function(spawn){
    this.creep('harvester', [Game.CARRY, Game.WORK, Game.MOVE], 'harvester', spawn);
}

exports.builder = function(spawn){
    this.creep('builder', [Game.CARRY, Game.WORK, Game.MOVE], 'builder', spawn);
}

exports.healer = function(spawn){
    this.creep('healer', [Game.CARRY, Game.HEAL, Game.MOVE], 'healer', spawn);
}

exports.creep = function(creep_type, params, creep_role, spawn){
    creep_role = creep_role || creep_type;
    spawn = spawn || 'Spawn1';
    Memory.creep_id = Memory.creep_id || 0
    var creep_name = creep_type + '_' + Memory.creep_id;
    Memory.creep_id++;
    return Game.spawns[spawn].createCreep(
        params,
        creep_name,
        {role: creep_role}
    );
}