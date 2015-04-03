module.exports = function(grunt) {

  grunt.initConfig({
    apidoc: {
      doc: {
        src: "src/",
        dest: "apidoc/"
      }
    }
  });

  grunt.loadNpmTasks('grunt-apidoc');

  grunt.registerTask('docs', ['apidoc:doc']);

};