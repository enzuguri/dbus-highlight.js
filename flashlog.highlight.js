hljs.registerLanguage('flashlog', function(hljs) {

    var TIME_STAMP = {
        begin: /\@([\d]+)ms /,
        className: "built_in",
        contains: [
            {
                begin: /\[INFO\]/,
                className: "attribute"
            },
            {
                begin: /\[DEBUG\]/,
                className: "link_label"
            },
            {
                begin: /\[ERROR\]/,
                className: "deletion"
            },
            {
                begin: /\[WARN\]/,
                className: "keyword"
            }
        ]
    }

    var TRACE_LINE = {
        begin: /FLASH_TRACE\: /,            // @[\d]+ms \[INFO\]
        className: "type",
        //contains: [TIME_STAMP]
    }

    //([A-Z0-9\s]+)\s*\:?\s*[\r\n]((.+[\r\n]?.*)+)[\r\n]{2}

    var BIG_GROUP = {
        begin: /FLASH_TRACE: @[\d]+ms \[DEBUG\].+/s,
        className: "attribute",
        contains:[
            {
                begin: /FLASH_TRACE.+/,
                className: "attribute"
            }
        ]

    }

    return {
        contains: [BIG_GROUP],
        illegal: '\\S'
    };
});