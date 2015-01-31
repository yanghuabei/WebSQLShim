/* parser generated by jison 0.4.15 */
/*
  Returns a Parser object of the following structure:

  Parser: {
    yy: {}
  }

  Parser.prototype: {
    yy: {},
    trace: function(),
    symbols_: {associative list: name ==> number},
    terminals_: {associative list: number ==> name},
    productions_: [...],
    performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate, $$, _$),
    table: [...],
    defaultActions: {...},
    parseError: function(str, hash),
    parse: function(input),

    lexer: {
        EOF: 1,
        parseError: function(str, hash),
        setInput: function(input),
        input: function(),
        unput: function(str),
        more: function(),
        less: function(n),
        pastInput: function(),
        upcomingInput: function(),
        showPosition: function(),
        test_match: function(regex_match_array, rule_index),
        next: function(),
        lex: function(),
        begin: function(condition),
        popState: function(),
        _currentRules: function(),
        topState: function(),
        pushState: function(condition),

        options: {
            ranges: boolean           (optional: true ==> token location info will include a .range[] member)
            flex: boolean             (optional: true ==> flex-like lexing behaviour where the rules are tested exhaustively to find the longest match)
            backtrack_lexer: boolean  (optional: true ==> lexer regexes are tested in order and for each matching regex the action code is invoked; the lexer terminates the scan when a token is returned by the action code)
        },

        performAction: function(yy, yy_, $avoiding_name_collisions, YY_START),
        rules: [...],
        conditions: {associative list: name ==> set},
    }
  }


  token location info (@$, _$, etc.): {
    first_line: n,
    last_line: n,
    first_column: n,
    last_column: n,
    range: [start_number, end_number]       (where the numbers are indexes into the input string, regular zero-based)
  }


  the parseError function receives a 'hash' object with these members for lexer and parser errors: {
    text:        (matched text)
    token:       (the produced terminal token, if any)
    line:        (yylineno)
  }
  while parser (grammar) errors will also provide these members, i.e. parser errors deliver a superset of attributes: {
    loc:         (yylloc)
    expected:    (string describing the set of expected tokens)
    recoverable: (boolean: TRUE when the parser has a error recovery rule available for this particular error)
  }
*/
var parser = (function(){
var o=function(k,v,o,l){for(o=o||{},l=k.length;l--;o[k[l]]=v);return o},$V0=[7,8],$V1=[1,4],$V2=[1,12],$V3=[1,13],$V4=[1,14],$V5=[1,15],$V6=[1,16],$V7=[1,17],$V8=[1,18],$V9=[1,19],$Va=[1,20],$Vb=[1,21],$Vc=[1,22],$Vd=[1,23],$Ve=[1,24],$Vf=[1,25],$Vg=[1,26],$Vh=[1,27],$Vi=[1,28],$Vj=[1,29],$Vk=[1,30],$Vl=[1,31],$Vm=[1,32],$Vn=[1,33],$Vo=[1,34],$Vp=[1,35],$Vq=[1,38],$Vr=[1,39],$Vs=[1,37],$Vt=[1,46],$Vu=[7,8,61],$Vv=[7,8,48,50,57,72,73],$Vw=[2,59],$Vx=[1,65],$Vy=[7,8,81,85],$Vz=[1,101],$VA=[1,100],$VB=[1,97],$VC=[1,99],$VD=[1,102],$VE=[1,103],$VF=[1,104],$VG=[1,105],$VH=[7,8,77,79,81,85,95,97,103,104,106,107],$VI=[4,7,8,73,77,79,81,85,95,97,103,104,106,107],$VJ=[81,85],$VK=[1,139],$VL=[75,81],$VM=[2,64],$VN=[1,148];
var parser = {trace: function trace() { },
yy: {},
symbols_: {"error":2,"name":3,"LITERAL":4,"main":5,"sql_stmt_list":6,"EOF":7,"SEMICOLON":8,"sql_stmt":9,"sql_stmt_explain":10,"sql_stmt_stmt":11,"alter_table_stmt":12,"analyze_stmt":13,"attach_stmt":14,"begin_stmt":15,"commit_stmt":16,"create_index_stmt":17,"create_table_stmt":18,"create_trigger_stmt":19,"create_view_stmt":20,"create_virtual_table_stmt":21,"delete_stmt":22,"delete_stmt_limited":23,"detach_stmt":24,"drop_index_stmt":25,"drop_table_stmt":26,"drop_trigger_stmt":27,"drop_view_stmt":28,"insert_stmt":29,"pragma_stmt":30,"reindex_stmt":31,"release_stmt":32,"rollback_stmt":33,"savepoint_stmt":34,"select_stmt":35,"update_stmt":36,"update_stmt_limited":37,"vacuum_stmt":38,"explain_stmt":39,"EXPLAIN":40,"QUERY":41,"PLAN":42,"ALTER":43,"TABLE":44,"database_table_name":45,"alter_table_action":46,"DOT":47,"RENAME":48,"TO":49,"ADD":50,"COLUMN":51,"column_def":52,"ANALYZE":53,"ATTACH":54,"database":55,"expr":56,"AS":57,"DATABASE":58,"BEGIN":59,"deferred_exclusive":60,"TRANSACTION":61,"DEFERRED":62,"IMMEDIATE":63,"EXCLUSIVE":64,"commit":65,"transaction":66,"COMMIT":67,"END":68,"CREATE":69,"INDEX":70,"if_not_exists":71,"ON":72,"LPAR":73,"columns":74,"RPAR":75,"where":76,"UNIQUE":77,"IF":78,"NOT":79,"EXISTS":80,"COMMA":81,"WHERE":82,"temporary":83,"column_defs":84,"table_constraints":85,"without_rowid":86,"WITHOUT":87,"ROWID":88,"TEMPORARY":89,"type_name":90,"column_constraints":91,"names":92,"signed_number":93,"column_constraint":94,"CONSTRAINT":95,"col_constraint":96,"PRIMARY":97,"KEY":98,"asc_desc":99,"conflict_clause":100,"autoincrement":101,"NULL":102,"CHECK":103,"DEFAULT":104,"name_value":105,"COLLATE":106,"foreign_key_clause":107,"ASC":108,"DESC":109,"AUTOINCREMENT":110,"$accept":0,"$end":1},
terminals_: {2:"error",4:"LITERAL",7:"EOF",8:"SEMICOLON",10:"sql_stmt_explain",11:"sql_stmt_stmt",19:"create_trigger_stmt",20:"create_view_stmt",21:"create_virtual_table_stmt",22:"delete_stmt",23:"delete_stmt_limited",24:"detach_stmt",25:"drop_index_stmt",26:"drop_table_stmt",27:"drop_trigger_stmt",28:"drop_view_stmt",29:"insert_stmt",30:"pragma_stmt",31:"reindex_stmt",32:"release_stmt",33:"rollback_stmt",34:"savepoint_stmt",35:"select_stmt",36:"update_stmt",37:"update_stmt_limited",38:"vacuum_stmt",40:"EXPLAIN",41:"QUERY",42:"PLAN",43:"ALTER",44:"TABLE",47:"DOT",48:"RENAME",49:"TO",50:"ADD",51:"COLUMN",53:"ANALYZE",54:"ATTACH",56:"expr",57:"AS",58:"DATABASE",59:"BEGIN",61:"TRANSACTION",62:"DEFERRED",63:"IMMEDIATE",64:"EXCLUSIVE",67:"COMMIT",68:"END",69:"CREATE",70:"INDEX",72:"ON",73:"LPAR",75:"RPAR",77:"UNIQUE",78:"IF",79:"NOT",80:"EXISTS",81:"COMMA",82:"WHERE",85:"table_constraints",87:"WITHOUT",88:"ROWID",89:"TEMPORARY",93:"signed_number",95:"CONSTRAINT",97:"PRIMARY",98:"KEY",100:"conflict_clause",102:"NULL",103:"CHECK",104:"DEFAULT",105:"name_value",106:"COLLATE",107:"foreign_key_clause",108:"ASC",109:"DESC",110:"AUTOINCREMENT"},
productions_: [0,[3,1],[5,2],[6,3],[6,1],[6,0],[9,2],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[9,1],[39,0],[39,1],[39,3],[12,4],[45,3],[45,1],[46,3],[46,3],[46,2],[13,2],[14,5],[55,0],[55,1],[15,3],[60,0],[60,1],[60,1],[60,1],[16,2],[65,1],[65,1],[66,0],[66,1],[17,10],[17,11],[71,0],[71,3],[74,3],[74,1],[76,2],[76,0],[18,7],[18,10],[86,0],[86,2],[83,0],[83,1],[84,3],[84,1],[52,3],[52,2],[90,1],[90,4],[90,6],[92,2],[92,1],[91,2],[91,1],[94,3],[94,1],[96,5],[96,3],[96,2],[96,4],[96,2],[96,2],[96,4],[96,2],[96,1],[99,0],[99,1],[99,1],[101,0],[101,1]],
performAction: function anonymous(yytext, yyleng, yylineno, yy, yystate /* action[1] */, $$ /* vstack */, _$ /* lstack */) {
/* this == yyval */

var $0 = $$.length - 1;
switch (yystate) {
case 1: case 83:
 this.$ = $$[$0]; 
break;
case 2:
 this.$ = $$[$0-1]; 
			console.log(this.$);
		
break;
case 3: case 61: case 71:
 this.$ = $$[$0-2]; this.$.push($$[$0]); 
break;
case 4: case 62: case 72: case 81:
 this.$ = [$$[$0]]; 
break;
case 5: case 34: case 48: case 59: case 67: case 69: case 93: case 96:
 this.$ = undefined; 
break;
case 6:
 this.$ = $$[$0]; yy.extend(this.$, $$[$0-1]); 
break;
case 35: case 36:
 this.$ = {explain:true}; 
break;
case 37:
 this.$ = {statement: 'ALTER TABLE'}; 
		yy.extend(this.$, $$[$0-1]); yy.extend(this.$, $$[$0]);  
break;
case 38:
 this.$ = {database:$$[$0-2], table:$$[$0]}; 
break;
case 39:
 this.$ = {table:$$[$0]}; 
break;
case 40:
 this.$ = {action: 'RENAME TO', new_table:$$[$0]}; 
break;
case 41:
 this.$ = {action: 'ADD COLUMN', column_def:$$[$0]}; 
break;
case 42:
 this.$ = {action: 'ADD COLUMN', column_def:$$[$01]}; 
break;
case 43:
 this.$ = {statement: 'ANALYZE'}; yy.extend(this.$, $$[$0]); 
break;
case 44:
 this.$ = {statement: 'ATTACH', expr: $$[$0-2], database:$$[$0]}; 
break;
case 47:
 this.$ = {statement: 'BEGIN TRANSACTION', type: $$[$0-1]}; 
break;
case 49:
 this.$ = 'DEFERRED'; 
break;
case 50:
 this.$ = 'IMMEDIATE'; 
break;
case 51:
 this.$ = 'EXCLUSIVE'; 
break;
case 52:
 this.$ = {statement: 'COMMIT TRANSACTION'}; 
break;
case 57:
 this.$ = {statement: 'CREATE INDEX', table:$$[$0-4], columns:$$[$0-2] }; 
	    	yy.extend(this.$, $$[$0-7]); 
	    	yy.extend(this.$, $$[$0-6]); 
	    	yy.extend(this.$,$$[$0]);
	    
break;
case 58:
 this.$ = {statement: 'CREATE INDEX', unique:true, table:$$[$0-4], columns:$$[$0-2] }; 
	    	yy.extend(this.$, $$[$0-9]); 
	    	yy.extend(this.$, $$[$0-7]); 
	    	yy.extend(this.$, $$[$0-6]); 
	    	yy.extend(this.$,$$[$0]);
	    
break;
case 60:
 this.$ = {if_not_exists: true}; 
break;
case 63:
 this.$ = {where: $$[$0]}; 
break;
case 65:
 this.$ = {statement: 'CREATE TABLE', select:$$[$0]};
			yy.extend(this.$,$$[$0-5]);
			yy.extend(this.$,$$[$0-3]);
			yy.extend(this.$,$$[$0-2]);
		
break;
case 66:
 this.$ = {statement: 'CREATE TABLE', column_defs: $$[$0-3], table_constraints:$$[$0-2] };
			yy.extend(this.$,$$[$0-8]);
			yy.extend(this.$,$$[$0-6]);
			yy.extend(this.$,$$[$0-5]);
			yy.extend(this.$,$$[$0]);
		
break;
case 68:
 this.$ = {without_rowid: true} 
break;
case 70:
 this.$ = {temporary:true}; 
break;
case 73:
 this.$ = {column:$$[$0-2], constraints: $$[$0]}; yy.extend(this.$,$$[$0-1]); 
break;
case 74:
 this.$ = {column:$$[$0-1]}; yy.extend(this.$,$$[$0]); 
break;
case 75:
 this.$ = {type: $$[$0]}; 
break;
case 76:
 this.$ = {type: $$[$0-3], precision: $$[$0-1]}; 
break;
case 77:
 this.$ = {type: $$[$0-5], precision: $$[$0-3], scale:$$[$0-1]}; 
break;
case 78:
 this.$ = $$[$0-1]+' '+$$[$0]; 
break;
case 79:
 this.$ =$$[$0]; 
break;
case 80:
 this.$ = $$[$0-1]; this.$.push($$[$0]); 
break;
case 82:
 this.$ = {constraint: $$[$0-1]}; yy.extend(this.$,$$[$0]); 
break;
case 84:
 this.$ = {type: 'PRIMARY KEY'}; yy.extend(this.$,$$[$0-2]); 
			yy.extend(this.$,$$[$0-1]); yy.extend(this.$,$$[$0]); 
break;
case 85:
 this.$ = {type: 'NOT NULL'}; yy.extend(this.$,$$[$0]); 
break;
case 86:
 this.$ = {type: 'UNIQUE'}; yy.extend(this.$,$$[$0]); 
break;
case 87:
 this.$ = {type: 'CHECK', expr: $$[$0-1]}; 
break;
case 88:
 this.$ = {type: 'DEFAULT', number: $$[$0]}; 
break;
case 89:
 this.$ = {type: 'DEFAULT', value: $$[$0]}; 
break;
case 90:
 this.$ = {type: 'DEFAULT', expr: $$[$0-1]}; 
break;
case 91:
 this.$ = {type: 'COLLATE', collate: $$[$0]}; 
break;
case 92:
 this.$ = {type: 'FOREIGN KEY'}; yy.extend(this.$,$$[$0]); 
break;
case 94:
 this.$ = {order:'ASC'}; 
break;
case 95:
 this.$ = {order:'DESC'}; 
break;
case 97:
 this.$ = {autoincrement:true}; 
break;
}
},
table: [o($V0,[2,5],{5:1,6:2,9:3,12:5,13:6,14:7,15:8,16:9,17:10,18:11,65:36,10:$V1,19:$V2,20:$V3,21:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,43:$Vm,53:$Vn,54:$Vo,59:$Vp,67:$Vq,68:$Vr,69:$Vs}),{1:[3]},{7:[1,40],8:[1,41]},o($V0,[2,4]),{11:[1,42]},o($V0,[2,7]),o($V0,[2,8]),o($V0,[2,9]),o($V0,[2,10]),o($V0,[2,11]),o($V0,[2,12]),o($V0,[2,13]),o($V0,[2,14]),o($V0,[2,15]),o($V0,[2,16]),o($V0,[2,17]),o($V0,[2,18]),o($V0,[2,19]),o($V0,[2,20]),o($V0,[2,21]),o($V0,[2,22]),o($V0,[2,23]),o($V0,[2,24]),o($V0,[2,25]),o($V0,[2,26]),o($V0,[2,27]),o($V0,[2,28]),o($V0,[2,29]),o($V0,[2,30]),o($V0,[2,31]),o($V0,[2,32]),o($V0,[2,33]),{44:[1,43]},{3:45,4:$Vt,45:44},{55:47,56:[2,45],58:[1,48]},{60:49,61:[2,48],62:[1,50],63:[1,51],64:[1,52]},o($V0,[2,55],{66:53,61:[1,54]}),{44:[2,69],70:[1,55],77:[1,56],83:57,89:[1,58]},o($Vu,[2,53]),o($Vu,[2,54]),{1:[2,2]},{9:59,10:$V1,12:5,13:6,14:7,15:8,16:9,17:10,18:11,19:$V2,20:$V3,21:$V4,22:$V5,23:$V6,24:$V7,25:$V8,26:$V9,27:$Va,28:$Vb,29:$Vc,30:$Vd,31:$Ve,32:$Vf,33:$Vg,34:$Vh,35:$Vi,36:$Vj,37:$Vk,38:$Vl,43:$Vm,53:$Vn,54:$Vo,59:$Vp,65:36,67:$Vq,68:$Vr,69:$Vs},o($V0,[2,6]),{3:45,4:$Vt,45:60},o($V0,[2,43]),o($Vv,[2,39],{47:[1,61]}),o([4,7,8,47,48,50,57,72,73,75,77,79,81,85,95,97,103,104,106,107],[2,1]),{56:[1,62]},{56:[2,46]},{61:[1,63]},{61:[2,49]},{61:[2,50]},{61:[2,51]},o($V0,[2,52]),o($V0,[2,56]),{4:$Vw,71:64,78:$Vx},{70:[1,66]},{44:[1,67]},{44:[2,70]},o($V0,[2,3]),{46:68,48:[1,69],50:[1,70]},{3:71,4:$Vt},{57:[1,72]},o($V0,[2,47]),{3:45,4:$Vt,45:73},{79:[1,74]},{4:$Vw,71:75,78:$Vx},{4:$Vw,71:76,78:$Vx},o($V0,[2,37]),{49:[1,77]},{3:80,4:$Vt,51:[1,78],52:79},o($Vv,[2,38]),{3:81,4:$Vt},{72:[1,82]},{80:[1,83]},{3:45,4:$Vt,45:84},{3:45,4:$Vt,45:85},{3:86,4:$Vt},{3:80,4:$Vt,52:87},o($V0,[2,42]),{3:90,4:$Vt,90:88,92:89},o($V0,[2,44]),{3:91,4:$Vt},{4:[2,60]},{72:[1,92]},{57:[1,93],73:[1,94]},o($V0,[2,40]),o($V0,[2,41]),o($Vy,[2,74],{91:95,94:96,96:98,77:$Vz,79:$VA,95:$VB,97:$VC,103:$VD,104:$VE,106:$VF,107:$VG}),o($VH,[2,75],{3:107,4:$Vt,73:[1,106]}),o($VI,[2,79]),{73:[1,108]},{3:109,4:$Vt},{35:[1,110]},{3:80,4:$Vt,52:112,84:111},o($Vy,[2,73],{96:98,94:113,77:$Vz,79:$VA,95:$VB,97:$VC,103:$VD,104:$VE,106:$VF,107:$VG}),o($VH,[2,81]),{3:114,4:$Vt},o($VH,[2,83]),{98:[1,115]},{102:[1,116]},{100:[1,117]},{73:[1,118]},{73:[1,121],93:[1,119],105:[1,120]},{3:122,4:$Vt},o($VH,[2,92]),{93:[1,123]},o($VI,[2,78]),{3:125,4:$Vt,74:124},{73:[1,126]},o($V0,[2,65]),{81:[1,128],85:[1,127]},o($VJ,[2,72]),o($VH,[2,80]),{77:$Vz,79:$VA,96:129,97:$VC,103:$VD,104:$VE,106:$VF,107:$VG},{99:130,100:[2,93],108:[1,131],109:[1,132]},{100:[1,133]},o($VH,[2,86]),{56:[1,134]},o($VH,[2,88]),o($VH,[2,89]),{56:[1,135]},o($VH,[2,91]),{75:[1,136],81:[1,137]},{75:[1,138],81:$VK},o($VL,[2,62]),{3:125,4:$Vt,74:140},{75:[1,141]},{3:80,4:$Vt,52:142},o($VH,[2,82]),{100:[1,143]},{100:[2,94]},{100:[2,95]},o($VH,[2,85]),{75:[1,144]},{75:[1,145]},o($VH,[2,76]),{93:[1,146]},o($V0,$VM,{76:147,82:$VN}),{3:149,4:$Vt},{75:[1,150],81:$VK},o($V0,[2,67],{86:151,87:[1,152]}),o($VJ,[2,71]),o($VH,[2,96],{101:153,110:[1,154]}),o($VH,[2,87]),o($VH,[2,90]),{75:[1,155]},o($V0,[2,57]),{56:[1,156]},o($VL,[2,61]),o($V0,$VM,{76:157,82:$VN}),o($V0,[2,66]),{88:[1,158]},o($VH,[2,84]),o($VH,[2,97]),o($VH,[2,77]),o($V0,[2,63]),o($V0,[2,58]),o($V0,[2,68])],
defaultActions: {40:[2,2],48:[2,46],50:[2,49],51:[2,50],52:[2,51],58:[2,70],83:[2,60],131:[2,94],132:[2,95]},
parseError: function parseError(str, hash) {
    if (hash.recoverable) {
        this.trace(str);
    } else {
        throw new Error(str);
    }
},
parse: function parse(input) {
    var self = this, stack = [0], tstack = [], vstack = [null], lstack = [], table = this.table, yytext = '', yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
    var args = lstack.slice.call(arguments, 1);
    var lexer = Object.create(this.lexer);
    var sharedState = { yy: {} };
    for (var k in this.yy) {
        if (Object.prototype.hasOwnProperty.call(this.yy, k)) {
            sharedState.yy[k] = this.yy[k];
        }
    }
    lexer.setInput(input, sharedState.yy);
    sharedState.yy.lexer = lexer;
    sharedState.yy.parser = this;
    if (typeof lexer.yylloc == 'undefined') {
        lexer.yylloc = {};
    }
    var yyloc = lexer.yylloc;
    lstack.push(yyloc);
    var ranges = lexer.options && lexer.options.ranges;
    if (typeof sharedState.yy.parseError === 'function') {
        this.parseError = sharedState.yy.parseError;
    } else {
        this.parseError = Object.getPrototypeOf(this).parseError;
    }
    function popStack(n) {
        stack.length = stack.length - 2 * n;
        vstack.length = vstack.length - n;
        lstack.length = lstack.length - n;
    }
    _token_stack:
        function lex() {
            var token;
            token = lexer.lex() || EOF;
            if (typeof token !== 'number') {
                token = self.symbols_[token] || token;
            }
            return token;
        }
    var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
    while (true) {
        state = stack[stack.length - 1];
        if (this.defaultActions[state]) {
            action = this.defaultActions[state];
        } else {
            if (symbol === null || typeof symbol == 'undefined') {
                symbol = lex();
            }
            action = table[state] && table[state][symbol];
        }
                    if (typeof action === 'undefined' || !action.length || !action[0]) {
                var errStr = '';
                expected = [];
                for (p in table[state]) {
                    if (this.terminals_[p] && p > TERROR) {
                        expected.push('\'' + this.terminals_[p] + '\'');
                    }
                }
                if (lexer.showPosition) {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ':\n' + lexer.showPosition() + '\nExpecting ' + expected.join(', ') + ', got \'' + (this.terminals_[symbol] || symbol) + '\'';
                } else {
                    errStr = 'Parse error on line ' + (yylineno + 1) + ': Unexpected ' + (symbol == EOF ? 'end of input' : '\'' + (this.terminals_[symbol] || symbol) + '\'');
                }
                this.parseError(errStr, {
                    text: lexer.match,
                    token: this.terminals_[symbol] || symbol,
                    line: lexer.yylineno,
                    loc: yyloc,
                    expected: expected
                });
            }
        if (action[0] instanceof Array && action.length > 1) {
            throw new Error('Parse Error: multiple actions possible at state: ' + state + ', token: ' + symbol);
        }
        switch (action[0]) {
        case 1:
            stack.push(symbol);
            vstack.push(lexer.yytext);
            lstack.push(lexer.yylloc);
            stack.push(action[1]);
            symbol = null;
            if (!preErrorSymbol) {
                yyleng = lexer.yyleng;
                yytext = lexer.yytext;
                yylineno = lexer.yylineno;
                yyloc = lexer.yylloc;
                if (recovering > 0) {
                    recovering--;
                }
            } else {
                symbol = preErrorSymbol;
                preErrorSymbol = null;
            }
            break;
        case 2:
            len = this.productions_[action[1]][1];
            yyval.$ = vstack[vstack.length - len];
            yyval._$ = {
                first_line: lstack[lstack.length - (len || 1)].first_line,
                last_line: lstack[lstack.length - 1].last_line,
                first_column: lstack[lstack.length - (len || 1)].first_column,
                last_column: lstack[lstack.length - 1].last_column
            };
            if (ranges) {
                yyval._$.range = [
                    lstack[lstack.length - (len || 1)].range[0],
                    lstack[lstack.length - 1].range[1]
                ];
            }
            r = this.performAction.apply(yyval, [
                yytext,
                yyleng,
                yylineno,
                sharedState.yy,
                action[1],
                vstack,
                lstack
            ].concat(args));
            if (typeof r !== 'undefined') {
                return r;
            }
            if (len) {
                stack = stack.slice(0, -1 * len * 2);
                vstack = vstack.slice(0, -1 * len);
                lstack = lstack.slice(0, -1 * len);
            }
            stack.push(this.productions_[action[1]][0]);
            vstack.push(yyval.$);
            lstack.push(yyval._$);
            newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
            stack.push(newState);
            break;
        case 3:
            return true;
        }
    }
    return true;
}};
/* generated by jison-lex 0.3.4 */
var lexer = (function(){
var lexer = ({

EOF:1,

parseError:function parseError(str, hash) {
        if (this.yy.parser) {
            this.yy.parser.parseError(str, hash);
        } else {
            throw new Error(str);
        }
    },

// resets the lexer, sets new input
setInput:function (input, yy) {
        this.yy = yy || this.yy || {};
        this._input = input;
        this._more = this._backtrack = this.done = false;
        this.yylineno = this.yyleng = 0;
        this.yytext = this.matched = this.match = '';
        this.conditionStack = ['INITIAL'];
        this.yylloc = {
            first_line: 1,
            first_column: 0,
            last_line: 1,
            last_column: 0
        };
        if (this.options.ranges) {
            this.yylloc.range = [0,0];
        }
        this.offset = 0;
        return this;
    },

// consumes and returns one char from the input
input:function () {
        var ch = this._input[0];
        this.yytext += ch;
        this.yyleng++;
        this.offset++;
        this.match += ch;
        this.matched += ch;
        var lines = ch.match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno++;
            this.yylloc.last_line++;
        } else {
            this.yylloc.last_column++;
        }
        if (this.options.ranges) {
            this.yylloc.range[1]++;
        }

        this._input = this._input.slice(1);
        return ch;
    },

// unshifts one char (or a string) into the input
unput:function (ch) {
        var len = ch.length;
        var lines = ch.split(/(?:\r\n?|\n)/g);

        this._input = ch + this._input;
        this.yytext = this.yytext.substr(0, this.yytext.length - len);
        //this.yyleng -= len;
        this.offset -= len;
        var oldLines = this.match.split(/(?:\r\n?|\n)/g);
        this.match = this.match.substr(0, this.match.length - 1);
        this.matched = this.matched.substr(0, this.matched.length - 1);

        if (lines.length - 1) {
            this.yylineno -= lines.length - 1;
        }
        var r = this.yylloc.range;

        this.yylloc = {
            first_line: this.yylloc.first_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0)
                 + oldLines[oldLines.length - lines.length].length - lines[0].length :
              this.yylloc.first_column - len
        };

        if (this.options.ranges) {
            this.yylloc.range = [r[0], r[0] + this.yyleng - len];
        }
        this.yyleng = this.yytext.length;
        return this;
    },

// When called from action, caches matched text and appends it on next action
more:function () {
        this._more = true;
        return this;
    },

// When called from action, signals the lexer that this rule fails to match the input, so the next matching rule (regex) should be tested instead.
reject:function () {
        if (this.options.backtrack_lexer) {
            this._backtrack = true;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });

        }
        return this;
    },

// retain first n characters of the match
less:function (n) {
        this.unput(this.match.slice(n));
    },

// displays already matched input, i.e. for error messages
pastInput:function () {
        var past = this.matched.substr(0, this.matched.length - this.match.length);
        return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
    },

// displays upcoming input, i.e. for error messages
upcomingInput:function () {
        var next = this.match;
        if (next.length < 20) {
            next += this._input.substr(0, 20-next.length);
        }
        return (next.substr(0,20) + (next.length > 20 ? '...' : '')).replace(/\n/g, "");
    },

// displays the character position where the lexing error occurred, i.e. for error messages
showPosition:function () {
        var pre = this.pastInput();
        var c = new Array(pre.length + 1).join("-");
        return pre + this.upcomingInput() + "\n" + c + "^";
    },

// test the lexed token: return FALSE when not a match, otherwise return token
test_match:function (match, indexed_rule) {
        var token,
            lines,
            backup;

        if (this.options.backtrack_lexer) {
            // save context
            backup = {
                yylineno: this.yylineno,
                yylloc: {
                    first_line: this.yylloc.first_line,
                    last_line: this.last_line,
                    first_column: this.yylloc.first_column,
                    last_column: this.yylloc.last_column
                },
                yytext: this.yytext,
                match: this.match,
                matches: this.matches,
                matched: this.matched,
                yyleng: this.yyleng,
                offset: this.offset,
                _more: this._more,
                _input: this._input,
                yy: this.yy,
                conditionStack: this.conditionStack.slice(0),
                done: this.done
            };
            if (this.options.ranges) {
                backup.yylloc.range = this.yylloc.range.slice(0);
            }
        }

        lines = match[0].match(/(?:\r\n?|\n).*/g);
        if (lines) {
            this.yylineno += lines.length;
        }
        this.yylloc = {
            first_line: this.yylloc.last_line,
            last_line: this.yylineno + 1,
            first_column: this.yylloc.last_column,
            last_column: lines ?
                         lines[lines.length - 1].length - lines[lines.length - 1].match(/\r?\n?/)[0].length :
                         this.yylloc.last_column + match[0].length
        };
        this.yytext += match[0];
        this.match += match[0];
        this.matches = match;
        this.yyleng = this.yytext.length;
        if (this.options.ranges) {
            this.yylloc.range = [this.offset, this.offset += this.yyleng];
        }
        this._more = false;
        this._backtrack = false;
        this._input = this._input.slice(match[0].length);
        this.matched += match[0];
        token = this.performAction.call(this, this.yy, this, indexed_rule, this.conditionStack[this.conditionStack.length - 1]);
        if (this.done && this._input) {
            this.done = false;
        }
        if (token) {
            return token;
        } else if (this._backtrack) {
            // recover context
            for (var k in backup) {
                this[k] = backup[k];
            }
            return false; // rule action called reject() implying the next rule should be tested instead.
        }
        return false;
    },

// return next match in input
next:function () {
        if (this.done) {
            return this.EOF;
        }
        if (!this._input) {
            this.done = true;
        }

        var token,
            match,
            tempMatch,
            index;
        if (!this._more) {
            this.yytext = '';
            this.match = '';
        }
        var rules = this._currentRules();
        for (var i = 0; i < rules.length; i++) {
            tempMatch = this._input.match(this.rules[rules[i]]);
            if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                match = tempMatch;
                index = i;
                if (this.options.backtrack_lexer) {
                    token = this.test_match(tempMatch, rules[i]);
                    if (token !== false) {
                        return token;
                    } else if (this._backtrack) {
                        match = false;
                        continue; // rule action called reject() implying a rule MISmatch.
                    } else {
                        // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
                        return false;
                    }
                } else if (!this.options.flex) {
                    break;
                }
            }
        }
        if (match) {
            token = this.test_match(match, rules[index]);
            if (token !== false) {
                return token;
            }
            // else: this is a lexer rule which consumes input without producing a token (e.g. whitespace)
            return false;
        }
        if (this._input === "") {
            return this.EOF;
        } else {
            return this.parseError('Lexical error on line ' + (this.yylineno + 1) + '. Unrecognized text.\n' + this.showPosition(), {
                text: "",
                token: null,
                line: this.yylineno
            });
        }
    },

// return next match that has a token
lex:function lex() {
        var r = this.next();
        if (r) {
            return r;
        } else {
            return this.lex();
        }
    },

// activates a new lexer condition state (pushes the new lexer condition state onto the condition stack)
begin:function begin(condition) {
        this.conditionStack.push(condition);
    },

// pop the previously active lexer condition state off the condition stack
popState:function popState() {
        var n = this.conditionStack.length - 1;
        if (n > 0) {
            return this.conditionStack.pop();
        } else {
            return this.conditionStack[0];
        }
    },

// produce the lexer rule set which is active for the currently active lexer condition state
_currentRules:function _currentRules() {
        if (this.conditionStack.length && this.conditionStack[this.conditionStack.length - 1]) {
            return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules;
        } else {
            return this.conditions["INITIAL"].rules;
        }
    },

// return the currently active lexer condition state; when an index argument is provided it produces the N-th previous condition state, if available
topState:function topState(n) {
        n = this.conditionStack.length - 1 - Math.abs(n || 0);
        if (n >= 0) {
            return this.conditionStack[n];
        } else {
            return "INITIAL";
        }
    },

// alias for begin(condition)
pushState:function pushState(condition) {
        this.begin(condition);
    },

// return the number of states currently on the stack
stateStackSize:function stateStackSize() {
        return this.conditionStack.length;
    },
options: {"case-insensitive":true},
performAction: function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {
var YYSTATE=YY_START;
switch($avoiding_name_collisions) {
case 0:return 'QLITERAL'
break;
case 1:return 'STRING'
break;
case 2:/* skip -- comments */
break;
case 3:/* skip whitespace */
break;
case 4:return 'ABORT'
break;
case 5:return 'ACTION'
break;
case 6:return 50
break;
case 7:return 'AFTER'
break;
case 8:return 'ALL'
break;
case 9:return 43
break;
case 10:return 53
break;
case 11:return 'AND'
break;
case 12:return 57
break;
case 13:return 108
break;
case 14:return 54
break;
case 15:return 110
break;
case 16:return 'BEFORE'
break;
case 17:return 59
break;
case 18:return 'BETWEEN'
break;
case 19:return 'BY'
break;
case 20:return 'CASCADE'
break;
case 21:return 'CASE'
break;
case 22:return 'CAST'
break;
case 23:return 103
break;
case 24:return 106
break;
case 25:return 51
break;
case 26:return 67
break;
case 27:return 'CONFLICT'
break;
case 28:return 95
break;
case 29:return 69
break;
case 30:return 'CROSS'
break;
case 31:return 'CURRENT DATE'
break;
case 32:return 'CURRENT TIME'
break;
case 33:return 'CURRENT TIMESTAMP'
break;
case 34:return 58
break;
case 35:return 104
break;
case 36:return 'DEFERRABLE'
break;
case 37:return 62
break;
case 38:return 'DELETE'
break;
case 39:return 109
break;
case 40:return 'DETACH'
break;
case 41:return 'DISTINCT'
break;
case 42:return 'DROP'
break;
case 43:return 'EACH'
break;
case 44:return 'ELSE'
break;
case 45:return 68
break;
case 46:return 'ESCAPE'
break;
case 47:return 'EXCEPT'
break;
case 48:return 64
break;
case 49:return 80
break;
case 50:return 40
break;
case 51:return 'FAIL'
break;
case 52:return 'FOR'
break;
case 53:return 'FOREIGN'
break;
case 54:return 'FROM'
break;
case 55:return 'FULL'
break;
case 56:return 'GLOB'
break;
case 57:return 'GROUP'
break;
case 58:return 'HAVING'
break;
case 59:return 78
break;
case 60:return 'IGNORE'
break;
case 61:return 63
break;
case 62:return 'IN'
break;
case 63:return 70
break;
case 64:return 'INDEXED'
break;
case 65:return 'INITIALLY'
break;
case 66:return 'INNER'
break;
case 67:return 'INSERT'
break;
case 68:return 'INSTEAD'
break;
case 69:return 'INTERSECT'
break;
case 70:return 'INTO'
break;
case 71:return 'IS'
break;
case 72:return 'ISNULL'
break;
case 73:return 'JOIN'
break;
case 74:return 98
break;
case 75:return 'LEFT'
break;
case 76:return 'LIKE'
break;
case 77:return 'LMIT'
break;
case 78:return 'MATCH'
break;
case 79:return 'NATURAL'
break;
case 80:return 'NO'
break;
case 81:return 79
break;
case 82:return 'NOTNULL'
break;
case 83:return 102
break;
case 84:return 'OF'
break;
case 85:return 'OFFSET'
break;
case 86:return 72
break;
case 87:return 'OR'
break;
case 88:return 'ORDER'
break;
case 89:return 'OUTER'
break;
case 90:return 42
break;
case 91:return 'PRAGMA'
break;
case 92:return 97
break;
case 93:return 41
break;
case 94:return 'RAISE'
break;
case 95:return 'RECURSIVE'
break;
case 96:return 'REFERENCES'
break;
case 97:return 'REGEXP'
break;
case 98:return 'REINDEX'
break;
case 99:return 'RELEASE'
break;
case 100:return 48
break;
case 101:return 'REPLACE'
break;
case 102:return 'RESTRICT'
break;
case 103:return 'RIGHT'
break;
case 104:return 'ROLLBACK'
break;
case 105:return 'ROW'
break;
case 106:return 'SAVEPOINT'
break;
case 107:return 'SELECT'
break;
case 108:return 'SET'
break;
case 109:return 44
break;
case 110:return 'TEMP'
break;
case 111:return 89
break;
case 112:return 'THEN'
break;
case 113:return 49
break;
case 114:return 61
break;
case 115:return 'TRIGGER'
break;
case 116:return 'UNION'
break;
case 117:return 77
break;
case 118:return 'UPDATE'
break;
case 119:return 'USING'
break;
case 120:return 'VACUUM'
break;
case 121:return 'VALUES'
break;
case 122:return 'VIEW'
break;
case 123:return 'VIRTUAL'
break;
case 124:return 'WHEN'
break;
case 125:return 82
break;
case 126:return 'WITH'
break;
case 127:return 87
break;
case 128:return 'NUMBER'
break;
case 129:return 'NUMBER'
break;
case 130:return 'PLUS'
break;
case 131:return 'MINUS'
break;
case 132:return 'STAR'
break;
case 133:return 'SLASH'
break;
case 134:return 'MODULO'
break;
case 135:return 'NE'
break;
case 136:return 'NE'
break;
case 137:return 'GE'
break;
case 138:return 'GT'
break;
case 139:return 'LE'
break;
case 140:return 'LT'
break;
case 141:return 'EQ'
break;
case 142:return 73
break;
case 143:return 75
break;
case 144:return 47
break;
case 145:return 81
break;
case 146:return 'COLON'
break;
case 147:return 8
break;
case 148:return 'DOLLAR'
break;
case 149:return 'QUESTION'
break;
case 150:return 'CARET'
break;
case 151:return 4
break;
case 152:return 7
break;
case 153:return 'INVALID'
break;
}
},
rules: [/^(?:(['](\\.|[^']|\\')*?['])+)/i,/^(?:(["](\\.|[^"]|\\")*?["])+)/i,/^(?:--(.*?)($|\r\n|\r|\n))/i,/^(?:\s+)/i,/^(?:ABORT\b)/i,/^(?:ACTION\b)/i,/^(?:ADD\b)/i,/^(?:AFTER\b)/i,/^(?:ALL\b)/i,/^(?:ALTER\b)/i,/^(?:ANALYZE\b)/i,/^(?:AND\b)/i,/^(?:AS\b)/i,/^(?:ASC\b)/i,/^(?:ATTACH\b)/i,/^(?:AUTOINCREMENT\b)/i,/^(?:BEFORE\b)/i,/^(?:BEGIN\b)/i,/^(?:BETWEEN\b)/i,/^(?:BY\b)/i,/^(?:CASCADE\b)/i,/^(?:CASE\b)/i,/^(?:CAST\b)/i,/^(?:CHECK\b)/i,/^(?:COLLATE\b)/i,/^(?:COLUMN\b)/i,/^(?:COMMIT\b)/i,/^(?:CONFLICT\b)/i,/^(?:CONSTRAINT\b)/i,/^(?:CREATE\b)/i,/^(?:CROSS\b)/i,/^(?:CURRENT_DATE\b)/i,/^(?:CURRENT_TIME\b)/i,/^(?:CURRENT_TIMESTAMP\b)/i,/^(?:DATABASE\b)/i,/^(?:DEFAULT\b)/i,/^(?:DEFERRABLE\b)/i,/^(?:DEFERRED\b)/i,/^(?:DELETE\b)/i,/^(?:DESC\b)/i,/^(?:DETACH\b)/i,/^(?:DISTINCT\b)/i,/^(?:DROP\b)/i,/^(?:EACH\b)/i,/^(?:ELSE\b)/i,/^(?:END\b)/i,/^(?:ESCAPE\b)/i,/^(?:EXCEPT\b)/i,/^(?:EXCLUSIVE\b)/i,/^(?:EXISTS\b)/i,/^(?:EXPLAIN\b)/i,/^(?:FAIL\b)/i,/^(?:FOR\b)/i,/^(?:FOREIGN\b)/i,/^(?:FROM\b)/i,/^(?:FULL\b)/i,/^(?:GLOB\b)/i,/^(?:GROUP\b)/i,/^(?:HAVING\b)/i,/^(?:IF\b)/i,/^(?:IGNORE\b)/i,/^(?:IMMEDIATE\b)/i,/^(?:IN\b)/i,/^(?:INDEX\b)/i,/^(?:INDEXED\b)/i,/^(?:INITIALLY\b)/i,/^(?:INNER\b)/i,/^(?:INSERT\b)/i,/^(?:INSTEAD\b)/i,/^(?:INTERSECT\b)/i,/^(?:INTO\b)/i,/^(?:IS\b)/i,/^(?:ISNULL\b)/i,/^(?:JOIN\b)/i,/^(?:KEY\b)/i,/^(?:LEFT\b)/i,/^(?:LIKE\b)/i,/^(?:LIMIT\b)/i,/^(?:MATCH\b)/i,/^(?:NATURAL\b)/i,/^(?:NO\b)/i,/^(?:NOT\b)/i,/^(?:NOTNULL\b)/i,/^(?:NULL\b)/i,/^(?:OF\b)/i,/^(?:OFFSET\b)/i,/^(?:ON\b)/i,/^(?:OR\b)/i,/^(?:ORDER\b)/i,/^(?:OUTER\b)/i,/^(?:PLAN\b)/i,/^(?:PRAGMA\b)/i,/^(?:PRIMARY\b)/i,/^(?:QUERY\b)/i,/^(?:RAISE\b)/i,/^(?:RECURSIVE\b)/i,/^(?:REFERENCES\b)/i,/^(?:REGEXP\b)/i,/^(?:REINDEX\b)/i,/^(?:RELEASE\b)/i,/^(?:RENAME\b)/i,/^(?:REPLACE\b)/i,/^(?:RESTRICT\b)/i,/^(?:RIGHT\b)/i,/^(?:ROLLBACK\b)/i,/^(?:ROW\b)/i,/^(?:SAVEPOINT\b)/i,/^(?:SELECT\b)/i,/^(?:SET\b)/i,/^(?:TABLE\b)/i,/^(?:TEMP\b)/i,/^(?:TEMPORARY\b)/i,/^(?:THEN\b)/i,/^(?:TO\b)/i,/^(?:TRANSACTION\b)/i,/^(?:TRIGGER\b)/i,/^(?:UNION\b)/i,/^(?:UNIQUE\b)/i,/^(?:UPDATE\b)/i,/^(?:USING\b)/i,/^(?:VACUUM\b)/i,/^(?:VALUES\b)/i,/^(?:VIEW\b)/i,/^(?:VIRTUAL\b)/i,/^(?:WHEN\b)/i,/^(?:WHERE\b)/i,/^(?:WITH\b)/i,/^(?:WITHOUT\b)/i,/^(?:(\d*[.])?\d+[eE]\d+)/i,/^(?:(\d*[.])?\d+)/i,/^(?:\+)/i,/^(?:-)/i,/^(?:\*)/i,/^(?:\/)/i,/^(?:%)/i,/^(?:<>)/i,/^(?:!=)/i,/^(?:>=)/i,/^(?:>)/i,/^(?:<=)/i,/^(?:<)/i,/^(?:=)/i,/^(?:\()/i,/^(?:\))/i,/^(?:\.)/i,/^(?:,)/i,/^(?::)/i,/^(?:;)/i,/^(?:\$)/i,/^(?:\?)/i,/^(?:\^)/i,/^(?:[a-zA-Z_][a-zA-Z_0-9]*)/i,/^(?:$)/i,/^(?:.)/i],
conditions: {"INITIAL":{"rules":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,111,112,113,114,115,116,117,118,119,120,121,122,123,124,125,126,127,128,129,130,131,132,133,134,135,136,137,138,139,140,141,142,143,144,145,146,147,148,149,150,151,152,153],"inclusive":true}}
});
return lexer;
})();
parser.lexer = lexer;
function Parser () {
  this.yy = {};
}
Parser.prototype = parser;parser.Parser = Parser;
return new Parser;
})();


if (typeof require !== 'undefined' && typeof exports !== 'undefined') {
exports.parser = parser;
exports.Parser = parser.Parser;
exports.parse = function () { return parser.parse.apply(parser, arguments); };
exports.main = function commonjsMain(args) {
    if (!args[1]) {
        console.log('Usage: '+args[0]+' FILE');
        process.exit(1);
    }
    var source = require('fs').readFileSync(require('path').normalize(args[1]), "utf8");
    return exports.parser.parse(source);
};
if (typeof module !== 'undefined' && require.main === module) {
  exports.main(process.argv.slice(1));
}
}