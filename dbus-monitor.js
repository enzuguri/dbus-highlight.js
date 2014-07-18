function(hljs) {

    var SENDER = {
        begin:"sender=:",
        className: 'attribute',
        contains: [hljs.C_NUMBER_MODE]
    }

    var DEST = {
        begin:" -> dest=",
        className: 'attribute',
        contains: [
            {
                begin: /([\:\w\.\)]+|\(null destination\))/,
                className: "built_in"
            }
        ]
    }

    var SERIAL = {
        begin: /\ (serial|reply_serial)=/,
        className: 'attribute',
        contains: [hljs.NUMBER_MODE]
    }

    var PATH = {
        begin: " path=",
        className: "attribute",
        contains:[
            {
                begin: /[\/\w]+;/,
                className: "built_in"
            }
        ]
    }

    var INTERFACE = {
        begin: " interface=",
        contains:[
            {
                begin: /[\w\.]+;/,
                className: "built_in"
            }
        ]
    }

    var MEMBER = {
        begin: " member=",
        className: "attribute",
        contains: [
            {
                begin: /\w+/,
                className: "built_in"
            }
        ]
    }

    var METHOD = {
        begin: 'signal |(method (call|return)) ',
        className: 'attribute',
        contains: [SENDER, DEST, SERIAL, PATH, INTERFACE, MEMBER]
    }

    var BUILT_IN_TYPES = {
        begin: /(uint(32|64)|string|int(32|64)|boolean) /,
        className: "built_in",
        contains: [
            hljs.NUMBER_MODE,
            hljs.QUOTE_STRING_MODE,
            {
                begin: "true|false",
                className: "number"
            }
        ]
    }

    var ARRAY = {
        begin: /array \[/,
        end: /\]/,
        className: "link_label"
    }

    var STRUCT = {
        begin: /struct \{/,
        end: /\}/,
        className: "link_label"
    }

    var DICT_ENTRY = {
        begin: 'dict entry\\(',
        end: "\\)",
        className: "link_label"
    }

    DICT_ENTRY.contains = [BUILT_IN_TYPES];
    STRUCT.contains = [BUILT_IN_TYPES, ARRAY];
    ARRAY.contains = [BUILT_IN_TYPES, DICT_ENTRY];

    return {
        contains: [METHOD, BUILT_IN_TYPES, STRUCT, ARRAY, DICT_ENTRY],
        illegal: '\\S'
    };
}
