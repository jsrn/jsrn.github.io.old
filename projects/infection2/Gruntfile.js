module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        sass: {
            main: {
                options: {
                    style: 'compressed'
                },
                files: {
                    'main.css': 'main.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');

    grunt.registerTask('default', [
        'sass'
    ]);
};