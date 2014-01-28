module.exports = function(grunt) {
  grunt.initConfig({

    coffee: {
      compile: {
        files: {
          'willow-tree.js': 'willow-tree.coffee'
        }
      },

      glob_to_multiple: {
        expand: true,
        cwd: 'test/',
        src: ['*.coffee'],
        dest: 'test/',
        ext: '.js'
      },
    },

    watch: {
      coffeescript: {
        files: ['willow-tree.coffee', 'test/**/*.coffee'],
        tasks: ['coffee']
      },

      test: {
        files: ['willow-tree.coffee'],
        tasks: ['coffee']
      },

      options: {
        livereload: true
      }
    },
    qunit: {
      all: ['test/**/*.html']
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.registerTask('default', ['coffee', 'qunit']);
};