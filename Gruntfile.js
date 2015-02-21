module.exports = function(grunt) {

  grunt.initConfig({
    apidoc: {
      doc: {
        src: "app/",
        dest: "apidoc/"
      }
    }
  });

  grunt.loadNpmTasks('grunt-apidoc');

  grunt.registerTask('docs', ['apidoc:doc']);

};