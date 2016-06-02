// https://github.com/gruntjs/grunt-contrib-watch

module.exports = {
    options: {
        spawn: false
    },
    js: {
        files: '<%= files.js %>',
        tasks: [
            'jshint',
            'jscs'
        ]
    },
    sass: {
        files: [
            '<%= files.scss %>'
        ],
        tasks: [
            'sass',
            'postcss'
        ]
    }
};