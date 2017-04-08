'use strict';

module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Task configuration.
    uglify: {
      dist: {
        files: {
          'js/main.min.js': 'js/main.js'
        }
      }
    },
    qunit: {
      files: ['test/**/*.html']
    },
    less: {
      compile: {
        options: {
          compress: true
        },
        files: {
          'css/style.css': 'css/style.less'
        }
      }
    },
    watch: {
      all: {
        files: [
          'css/*.less',
          'js/main.js'
        ],
        tasks: ['less', 'uglify']
      }
    },
  });

  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-qunit');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task.
  grunt.registerTask('default', ['qunit', 'uglify', 'less']);

};
