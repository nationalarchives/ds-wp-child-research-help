module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                sourcemap: 'none'
            },
            dist: {
                files: {
                    'css/child-sass.css': 'css/sass/child-sass.scss'
                }
            }
        },
        cssmin: {
            options: {
                sourceMap: true
            },
            target: {
                files: {
                    'css/child-sass.min.css': ['css/child-sass.css']
                }
            }
        },
        watch: {
            css: {
                files: 'css/sass/*.scss',
                tasks: ['sass', 'cssmin']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', [
        'sass',
        'cssmin'
    ]);
};