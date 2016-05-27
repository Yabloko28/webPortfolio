module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/** Concatination task*/

		concat: {
			options: {
				separator: '\n\n//---------------------------------------------------------------------------\n',
				banner: '\n\n//------------------------------------------------------------------------\n'
			},
			dist: {
				src: ['js/*.js'],
				dest: 'app.js'
			},
			prod: {
				src: ['js/*.js'],
				dest: 'app.js'
			}
		},

		/** Sass task*/

		sass: {
			dev: {
              options: {
                     style: 'expanded',
                     sourcemap: 'none',
              },
              files: {
                'css/app.css': 'sass/styles.scss'
              }
            },
            // dist: {
            //   options: {
            //          style: 'expanded',
            //          sourcemap: 'none',
            //   },
            //   files: {
            //     'css/app.css': 'sass/styles.scss'
            //   }
            // } 
        },

        /** Autoprefixer task*/

        autoprefixer: {
          options: {
            browsers: ['last 2 version', 'ie 8', 'ie 9']
          },
          multiple_files: {
            expand: true,
            flatten: true,
            src: '*.css',
            dest: ''
          }
        },

        /** Reload task*/

        connect: {
        	sever: {
        		options: {
        			hostname: 'localhost',
        			port: 3000,
        			livereload:true
        		}
        	}
        },

        /** Watch task*/

        watch: {
        	options: {
        		spawn: false,
        		livereload: true
        	},
        	scripts: {
        		files: ['*.html',
        		        'sass/*.scss',
        		        'js/*.js'],
        		tasks: ['concat', 'sass', 'autoprefixer', 'connect']
        	}
        }

	});
    
    
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-watch');


	grunt.registerTask('default', ['concat', 'sass', 'autoprefixer', 'connect', 'watch']);
}