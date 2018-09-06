function startDpic (io) {
    var Module = {
        preRun: function () {
            FS.init(io.getFeeder(), io.getCollector());
        },

        onRuntimeInitialized: function () {
        }

    };

/*INSERT_WRAPPED*/

}

