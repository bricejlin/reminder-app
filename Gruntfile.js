module.exports = function(grunt) {

  // Initialize config
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      // 2. Configuration for concatinating files goes here
      dist: {
        src: [
          'js/vendors/jquery.js', 'js/vendors/underscore.js',
          'js/vendors/backbone.js'
        ],
        dest: 'js/build/production.js'
      }
    },

    uglify: {
      build: {
        src: 'js/build/production.js',
        dest: 'js/build/production.min.js'
      }
    },

    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'images/',
          src: ['*.{png,jpg,gif}'],
          dest: 'images/build/'
        }]
      }
    },

    sass: {
      dist: {
        options: {
          style: 'compressed'
        },
        files: {
          'css/build/main.min.css': 'css/main.scss'
        }
      }
    },

    watch: {
      options: {
        livereload: true,
      },
      scripts: {
        files: ['js/*.js'],
        tasks: ['concat', 'uglify'],
        options: {
          spawn: false
        }
      },
      css: {
        files: ['css/*.scss'],
        tasks: ['sass'],
        options: {
          spawn: false
        }
      }
    }
  });

  // 3. Where we tell Grunt we plan to use this plug-in.
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  // 4. Where we tell Grunt what to do when we type 'grunt' into terminal.
  grunt.registerTask('default', ['concat', 'uglify', 'sass']);
};
