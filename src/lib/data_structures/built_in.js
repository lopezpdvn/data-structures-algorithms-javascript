Map.prototype.getOrDefault = function(key, defaultValue) {
    return this.get(key) === undefined ? defaultValue : this.get(key);
};
