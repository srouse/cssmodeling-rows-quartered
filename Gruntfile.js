

module.exports = function(grunt) {

    grunt.loadNpmTasks('cssmodeling');

    var configObj = {
        pkg: '<json:package.json>'
    };

    /*==========================
    CSSMODELING
    ==========================*/
    configObj.cssmodeling = configObj.cssmodeling || {};
    configObj.cssmodeling["cssmodeling_less"] = {
        files: {
            'dist':
            [
                'cssmodeling_rows_quartered.json'
            ]
        },
        options: {
            resets:[
                // 'cssmodeling/_resets/**/*.css'
            ],
            type:"less",
            var_prefix:"v-"
        }
    };

    configObj.cssmodeling["cssmodeling_scss"] = {
        files: {
            'dist':
            [
                'cssmodeling_rows_quartered.json'
            ]
        },
        options: {
            resets:[
                // 'cssmodeling/_resets/**/*.css'
            ],
            type:"scss",
            var_prefix:"v-"
        }
    };

    configObj.watch = configObj.watch || {};
    configObj.watch["cssmodeling"] = {
        files:[
            'cssmodeling-rows-quartered.json'
        ],
        tasks: ["cssmodel"]
    };


    grunt.initConfig( configObj );
    grunt.registerTask( 'default' , [
        'cssmodeling'
    ] );

}
