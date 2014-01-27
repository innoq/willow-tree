module.exports = function(grunt) {
  grunt.initConfig({

    coffee: {
      compile: {
        files: {
          'public/javascripts/willow-tree.js': 'willow-tree.coffee'
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
        // Which files to watch (all .less files recursively in the less directory)
        files: ['willow-tree.coffee'],
        tasks: ['coffee']
      },

      test: {
        // Which files to watch (all .less files recursively in the less directory)
        files: ['willow-tree.coffee'],
        tasks: ['coffee']
      },

      options: {
        livereload: true
      }
    },
    qunit: {
      all: ['test/javascripts/**/*.html']
    }
  });
 
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-coffee');
  grunt.loadNpmTasks('grunt-contrib-qunit');

  grunt.registerTask('default', ['less', 'coffee']);
};