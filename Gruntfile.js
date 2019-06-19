"use strict";

module.exports = function( grunt ) {

    grunt.initConfig({

        // Config variable paths
        config: {

            // Project paths
            dev: 'assets/',
            build: 'build/'
        },

        // SASS _______________________________________________________________________
        sass: {

            // Dev
            dev: {
                options: {
                    style: 'compressed',
                    noCache: true
                },
                files: {
                    '<%= config.build %>css/main.min.css': 
                    '<%= config.dev %>scss/main.scss'
                }
            }

        },

        // JS Hint  ___________________________________________________________________
        jshint: {

            // Project files
            dev: ['<%= config.dev %>js/tabs.js',
                  '<%= config.dev %>js/accordion.js'],
                options: {
                    globals: {
                        jQuery: true,
                        reporter: require('jshint-stylish')
                }
            }

        },


        // WATCH ______________________________________________________________________
        watch: {

            // PROJECT TASKS

            // Run SASS task for .scss files
            sass_dev: {
                files: [
                    '<%= config.dev %>scss/**/*.scss',
                    '<%= config.dev %>scss/*.scss'
                ],
                tasks: ['sass:dev'],
            },

            // Run JS hint task for .js files
            js_dev: {
                files: ['<%= config.dev %>js/*.js'],
                tasks: ['jshint']
            },

            // Update :)
            livereload: {
                options: { livereload: true, port: 3000 },
                files: [
                    // Project files
                    '*.html',
                    'assets/js/tabs.js',
                    'assets/js/accordion.js',
                    '<%= config.build %>css/main.min.css'
                ],
            },
        }

    });

    // Load plugins
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Grunt tasks

    // CSS
    grunt.registerTask( 'css', [ 'sass' ] );

    // JS
    grunt.registerTask( 'js', [ 'jshint'] );

    // Watch
    grunt.registerTask( 'live', [ 'watch' ] );

};