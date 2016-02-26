module.exports = {
    normalizeEntityName: function () {},
    afterInstall: function () {
        console.log('In afterInstall');
        return this.addPackagesToProject([{ name: 'git+ssh@github.com:JackieChiles/et-addon.git' }]);
    }
};
