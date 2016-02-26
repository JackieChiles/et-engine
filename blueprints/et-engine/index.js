module.exports = {
    afterInstall: function () {
        console.log('In afterInstall');
        return this.addPackagesToProject([{ name: 'et-addon' }]);
    }
};
