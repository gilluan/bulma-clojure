// Compiled by ClojureScript 1.10.238 {}
goog.provide('debux.common.util');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.pprint');
goog.require('clojure.zip');
goog.require('clojure.walk');
goog.require('cljs.analyzer.api');
goog.require('cljs.repl');
goog.require('re_frame.trace');
debux.common.util.sequential_zip = (function debux$common$util$sequential_zip(root){
return clojure.zip.zipper.call(null,cljs.core.sequential_QMARK_,cljs.core.identity,(function (x,children){
if(cljs.core.vector_QMARK_.call(null,x)){
return cljs.core.vec.call(null,children);
} else {
return children;
}
}),root);
});
debux.common.util.right_or_next = (function debux$common$util$right_or_next(loc){
while(true){
var temp__4655__auto__ = clojure.zip.right.call(null,loc);
if(cljs.core.truth_(temp__4655__auto__)){
var right = temp__4655__auto__;
return right;
} else {
if(cljs.core.sequential_QMARK_.call(null,clojure.zip.node.call(null,loc))){
var rightmost = clojure.zip.rightmost.call(null,clojure.zip.down.call(null,loc));
if(cljs.core.sequential_QMARK_.call(null,clojure.zip.node.call(null,rightmost))){
var G__24928 = rightmost;
loc = G__24928;
continue;
} else {
return clojure.zip.next.call(null,rightmost);
}
} else {
return clojure.zip.next.call(null,loc);
}
}
break;
}
});
debux.common.util.auto_gensym_pattern = /(.*)__\d+__auto__/;
debux.common.util.anon_gensym_pattern = /G__\d+/;
debux.common.util.named_gensym_pattern = /(.*?)\d{4,}/;
debux.common.util.anon_param_pattern = /p(\d+)__\d+#/;
debux.common.util.form_tree_seq = (function debux$common$util$form_tree_seq(form){
return cljs.core.tree_seq.call(null,cljs.core.sequential_QMARK_,cljs.core.seq,form);
});
/**
 * Reverse gensym'd names to their original source form to make them easier to read.
 */
debux.common.util.with_gensyms_names = (function debux$common$util$with_gensyms_names(form,mapping){
var gen_name = (function (result,name){
if(!(cljs.core.contains_QMARK_.call(null,result,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"#"].join('')))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"#"].join('');
} else {
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__24930_SHARP_){
return !(cljs.core.contains_QMARK_.call(null,result,p1__24930_SHARP_));
}),cljs.core.map.call(null,(function (p1__24929_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24929_SHARP_),"#"].join('');
}),cljs.core.iterate.call(null,cljs.core.inc,(2)))));
}
});
var name_for = ((function (gen_name){
return (function (result,sym_name){
var temp__4655__auto__ = cljs.core.re_matches.call(null,debux.common.util.auto_gensym_pattern,sym_name);
if(cljs.core.truth_(temp__4655__auto__)){
var groups = temp__4655__auto__;
return gen_name.call(null,result,cljs.core.second.call(null,groups));
} else {
if(cljs.core.truth_(cljs.core.re_matches.call(null,debux.common.util.anon_gensym_pattern,sym_name))){
return gen_name.call(null,result,"gensym");
} else {
var temp__4655__auto____$1 = cljs.core.re_matches.call(null,debux.common.util.named_gensym_pattern,sym_name);
if(cljs.core.truth_(temp__4655__auto____$1)){
var groups = temp__4655__auto____$1;
return gen_name.call(null,result,cljs.core.second.call(null,groups));
} else {
var temp__4655__auto____$2 = cljs.core.re_matches.call(null,debux.common.util.anon_param_pattern,sym_name);
if(cljs.core.truth_(temp__4655__auto____$2)){
var groups = temp__4655__auto____$2;
return ["%",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,groups))].join('');
} else {
return null;
}
}
}
}
});})(gen_name))
;
return cljs.core.reduce.call(null,((function (gen_name,name_for){
return (function (result,sym_name){
if(cljs.core.contains_QMARK_.call(null,result,sym_name)){
return result;
} else {
var temp__4655__auto__ = name_for.call(null,result,sym_name);
if(cljs.core.truth_(temp__4655__auto__)){
var new_name = temp__4655__auto__;
return cljs.core.assoc.call(null,result,sym_name,new_name);
} else {
return result;
}
}
});})(gen_name,name_for))
,mapping,cljs.core.map.call(null,cljs.core.name,cljs.core.filter.call(null,((function (gen_name,name_for){
return (function (p1__24931_SHARP_){
return (((p1__24931_SHARP_ instanceof cljs.core.Symbol)) && ((cljs.core.namespace.call(null,p1__24931_SHARP_) == null)));
});})(gen_name,name_for))
,debux.common.util.form_tree_seq.call(null,form))));
});
/**
 * Tidy up fully qualified names that have aliases in the existing namespace.
 */
debux.common.util.with_symbols_names = (function debux$common$util$with_symbols_names(form,p__24934,mapping){
var map__24935 = p__24934;
var map__24935__$1 = ((((!((map__24935 == null)))?(((((map__24935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__24935.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24935):map__24935);
var state = map__24935__$1;
var context = cljs.core.get.call(null,map__24935__$1,new cljs.core.Keyword(null,"context","context",-830191113));
var refers = cljs.core.get.call(null,map__24935__$1,new cljs.core.Keyword(null,"refers","refers",158076809));
var aliases = cljs.core.get.call(null,map__24935__$1,new cljs.core.Keyword(null,"aliases","aliases",1346874714));
return cljs.core.reduce.call(null,((function (map__24935,map__24935__$1,state,context,refers,aliases){
return (function (result,sym){
if(cljs.core._EQ_.call(null,"clojure.core",cljs.core.namespace.call(null,sym))){
return cljs.core.assoc.call(null,result,cljs.core.pr_str.call(null,sym),cljs.core.name.call(null,sym));
} else {
return result;
}
});})(map__24935,map__24935__$1,state,context,refers,aliases))
,mapping,cljs.core.filter.call(null,((function (map__24935,map__24935__$1,state,context,refers,aliases){
return (function (p1__24932_SHARP_){
var and__3911__auto__ = (p1__24932_SHARP_ instanceof cljs.core.Symbol);
if(and__3911__auto__){
return cljs.core.namespace.call(null,p1__24932_SHARP_);
} else {
return and__3911__auto__;
}
});})(map__24935,map__24935__$1,state,context,refers,aliases))
,debux.common.util.form_tree_seq.call(null,form)));
});
/**
 * Takes a macroexpanded form and tidies it up to be more readable by
 *   unmapping gensyms and replacing fully qualified namespaces with aliases
 *   or nothing if the function is referred.
 */
debux.common.util.tidy_macroexpanded_form = (function debux$common$util$tidy_macroexpanded_form(form,state){
var mapping = debux.common.util.with_symbols_names.call(null,form,state,debux.common.util.with_gensyms_names.call(null,form,cljs.core.PersistentArrayMap.EMPTY));
var loc = debux.common.util.sequential_zip.call(null,form);
while(true){
if(cljs.core.truth_(clojure.zip.end_QMARK_.call(null,loc))){
return clojure.zip.root.call(null,loc);
} else {
if((clojure.zip.node.call(null,loc) instanceof cljs.core.Symbol)){
var G__24937 = clojure.zip.next.call(null,clojure.zip.edit.call(null,loc,((function (loc,mapping){
return (function (sym){
return cljs.core.symbol.call(null,cljs.core.get.call(null,mapping,cljs.core.pr_str.call(null,sym),sym));
});})(loc,mapping))
));
loc = G__24937;
continue;
} else {
var G__24938 = clojure.zip.next.call(null,loc);
loc = G__24938;
continue;
}
}
break;
}
});
debux.common.util.send_form_BANG_ = (function debux$common$util$send_form_BANG_(form){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__22327__auto___24939 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),form], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"form","form",-1624062471),form], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__22327__auto___24939;

return null;
} else {
return null;
}
});
debux.common.util.send_trace_BANG_ = (function debux$common$util$send_trace_BANG_(code_trace){
var code = cljs.core.get_in.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null),cljs.core.PersistentVector.EMPTY);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__22327__auto___24940 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.conj.call(null,code,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form","form",-1624062471),debux.common.util.tidy_macroexpanded_form.call(null,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(code_trace),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(code_trace),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684).cljs$core$IFn$_invoke$arity$1(code_trace)], null))], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.conj.call(null,code,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form","form",-1624062471),debux.common.util.tidy_macroexpanded_form.call(null,new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(code_trace),cljs.core.PersistentArrayMap.EMPTY),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(code_trace),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684).cljs$core$IFn$_invoke$arity$1(code_trace)], null))], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__22327__auto___24940;

return null;
} else {
return null;
}
});
var ret__4533__auto___24942 = /**
 * The internal macro to debug dbg macro.
 * <form any> a form to be evaluated
 */
debux.common.util.d = (function debux$common$util$d(_AMPERSAND_form,_AMPERSAND_env,form){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","let","cljs.core/let",-308701135,null),null,(1),null)),(new cljs.core.List(null,cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"return__24941__auto__","return__24941__auto__",-104679903,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null)))))),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","println","cljs.core/println",-331834442,null),null,(1),null)),(new cljs.core.List(null,">> dbg_:",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,form,null,(1),null))))),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"=>\n",null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","pr-str","cljs.core/pr-str",-552799478,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"return__24941__auto__","return__24941__auto__",-104679903,null),null,(1),null))))),null,(1),null)),(new cljs.core.List(null,"<<",null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol(null,"return__24941__auto__","return__24941__auto__",-104679903,null),null,(1),null)))));
});
debux.common.util.d.cljs$lang$macro = true;

debux.common.util.indent_level_STAR_ = cljs.core.atom.call(null,(1));
debux.common.util.reset_indent_level_BANG_ = (function debux$common$util$reset_indent_level_BANG_(){
return cljs.core.reset_BANG_.call(null,debux.common.util.indent_level_STAR_,(1));
});
debux.common.util.print_seq_length_STAR_ = cljs.core.atom.call(null,(100));
debux.common.util.set_print_seq_length_BANG_ = (function debux$common$util$set_print_seq_length_BANG_(num){
return cljs.core.reset_BANG_.call(null,debux.common.util.print_seq_length_STAR_,num);
});
var ret__4533__auto___24943 = debux.common.util.read_source = (function debux$common$util$read_source(_AMPERSAND_form,_AMPERSAND_env,sym){
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","->","cljs.core/->",1488366311,null),null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol("cljs.repl","source","cljs.repl/source",2083297615,null),null,(1),null)),(new cljs.core.List(null,sym,null,(1),null))))),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("cljs.core","with-out-str","cljs.core/with-out-str",-538618510,null),null,(1),null)),(new cljs.core.List(null,new cljs.core.Symbol("debux.common.util","read-string","debux.common.util/read-string",59009246,null),null,(1),null)))));
});
debux.common.util.read_source.cljs$lang$macro = true;

debux.common.util.cljs_env_QMARK_ = (function debux$common$util$cljs_env_QMARK_(env){
return cljs.core.boolean$.call(null,new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(env));
});
debux.common.util.lazy_seq_QMARK_ = (function debux$common$util$lazy_seq_QMARK_(coll){
return (coll instanceof clojure.lang.IPending);
});
/**
 * Transsub-forms a vector into an array-map with key/value pairs.
 *   (def a 10)
 *   (def b 20)
 *   (vec-map [a b :c [30 40]])
 *   => {:a 10 :b 20 ::c :c :[30 40] [30 40]}
 */
debux.common.util.vec__GT_map = (function debux$common$util$vec__GT_map(v){
return cljs.core.apply.call(null,cljs.core.array_map,cljs.core.mapcat.call(null,(function (elm){
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,cljs.core.keyword.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(elm)].join('')),null,(1),null)),(new cljs.core.List(null,elm,null,(1),null))))));
}),v));
});
debux.common.util.replace__AMPERSAND_ = (function debux$common$util$replace__AMPERSAND_(v){
return clojure.walk.postwalk_replace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Symbol(null,"&","&",-2144855648,null),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),new cljs.core.Symbol(null,"&","&",-2144855648,null))], null),v);
});
debux.common.util.take_n_if_seq = (function debux$common$util$take_n_if_seq(n,result){
if(cljs.core.seq_QMARK_.call(null,result)){
return cljs.core.take.call(null,(function (){var or__3922__auto__ = n;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.deref.call(null,debux.common.util.print_seq_length_STAR_);
}
})(),result);
} else {
return result;
}
});
debux.common.util.truncate = (function debux$common$util$truncate(s){
if((cljs.core.count.call(null,s) > (70))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(s.substring((0),(70)))," ..."].join('');
} else {
return s;
}
});
debux.common.util.make_bars_ = (function debux$common$util$make_bars_(times){
return cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,times,"|"));
});
debux.common.util.make_bars = cljs.core.memoize.call(null,debux.common.util.make_bars_);
debux.common.util.prepend_bars = (function debux$common$util$prepend_bars(line,indent_level){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(debux.common.util.make_bars.call(null,indent_level))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join('');
});
debux.common.util.print_form_with_indent = (function debux$common$util$print_form_with_indent(form,indent_level){
cljs.core.println.call(null,debux.common.util.prepend_bars.call(null,form,indent_level));

return cljs.core.flush.call(null);
});
debux.common.util.form_header = (function debux$common$util$form_header(var_args){
var args__4502__auto__ = [];
var len__4499__auto___24950 = arguments.length;
var i__4500__auto___24951 = (0);
while(true){
if((i__4500__auto___24951 < len__4499__auto___24950)){
args__4502__auto__.push((arguments[i__4500__auto___24951]));

var G__24952 = (i__4500__auto___24951 + (1));
i__4500__auto___24951 = G__24952;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return debux.common.util.form_header.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

debux.common.util.form_header.cljs$core$IFn$_invoke$arity$variadic = (function (form,p__24946){
var vec__24947 = p__24946;
var msg = cljs.core.nth.call(null,vec__24947,(0),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(debux.common.util.truncate.call(null,cljs.core.pr_str.call(null,form))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var and__3911__auto__ = msg;
if(cljs.core.truth_(and__3911__auto__)){
return ["   <",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),">"].join('');
} else {
return and__3911__auto__;
}
})())," =>"].join('');
});

debux.common.util.form_header.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
debux.common.util.form_header.cljs$lang$applyTo = (function (seq24944){
var G__24945 = cljs.core.first.call(null,seq24944);
var seq24944__$1 = cljs.core.next.call(null,seq24944);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__24945,seq24944__$1);
});

debux.common.util.prepend_blanks = (function debux$common$util$prepend_blanks(lines){
return cljs.core.mapv.call(null,(function (p1__24953_SHARP_){
return ["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__24953_SHARP_)].join('');
}),lines);
});
debux.common.util.pprint_result_with_indent = (function debux$common$util$pprint_result_with_indent(result,indent_level){
var res = result;
var result__$1 = (function (){var sb__4430__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_24955_24957 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_24956_24958 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_24955_24957,_STAR_print_fn_STAR_24956_24958,sb__4430__auto__,res){
return (function (x__4431__auto__){
return sb__4430__auto__.append(x__4431__auto__);
});})(_STAR_print_newline_STAR_24955_24957,_STAR_print_fn_STAR_24956_24958,sb__4430__auto__,res))
;

try{cljs.pprint.pprint.call(null,res);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_24956_24958;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_24955_24957;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4430__auto__)].join('');
})();
var pprint = clojure.string.trim.call(null,result__$1);
cljs.core.println.call(null,clojure.string.join.call(null,"\n",cljs.core.mapv.call(null,((function (res,result__$1,pprint){
return (function (p1__24954_SHARP_){
return debux.common.util.prepend_bars.call(null,p1__24954_SHARP_,indent_level);
});})(res,result__$1,pprint))
,debux.common.util.prepend_blanks.call(null,clojure.string.split.call(null,pprint,/\n/)))));

return cljs.core.flush.call(null);
});
debux.common.util.insert_blank_line = (function debux$common$util$insert_blank_line(){
cljs.core.println.call(null," ");

return cljs.core.flush.call(null);
});
debux.common.util.parse_opts = (function debux$common$util$parse_opts(opts){
var opts__$1 = opts;
var acc = cljs.core.PersistentArrayMap.EMPTY;
while(true){
var f = cljs.core.first.call(null,opts__$1);
var s = cljs.core.second.call(null,opts__$1);
if(cljs.core.empty_QMARK_.call(null,opts__$1)){
return acc;
} else {
if(typeof f === 'number'){
var G__24959 = cljs.core.next.call(null,opts__$1);
var G__24960 = cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"n","n",562130025),f);
opts__$1 = G__24959;
acc = G__24960;
continue;
} else {
if(typeof f === 'string'){
var G__24961 = cljs.core.next.call(null,opts__$1);
var G__24962 = cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"msg","msg",-1386103444),f);
opts__$1 = G__24961;
acc = G__24962;
continue;
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Keyword(null,"if","if",-458814265))){
var G__24963 = cljs.core.nnext.call(null,opts__$1);
var G__24964 = cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"condition","condition",1668437652),s);
opts__$1 = G__24963;
acc = G__24964;
continue;
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Keyword(null,"js","js",1768080579))){
var G__24965 = cljs.core.next.call(null,opts__$1);
var G__24966 = cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"js","js",1768080579),true);
opts__$1 = G__24965;
acc = G__24966;
continue;
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"o","o",-1350007228),null,new cljs.core.Keyword(null,"once","once",-262568523),null], null), null).call(null,f))){
var G__24967 = cljs.core.next.call(null,opts__$1);
var G__24968 = cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"once","once",-262568523),true);
opts__$1 = G__24967;
acc = G__24968;
continue;
} else {
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"s","s",1705939918),null,new cljs.core.Keyword(null,"style","style",-496642736),null], null), null).call(null,f))){
var G__24969 = cljs.core.nnext.call(null,opts__$1);
var G__24970 = cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"style","style",-496642736),s);
opts__$1 = G__24969;
acc = G__24970;
continue;
} else {
if(cljs.core._EQ_.call(null,f,new cljs.core.Keyword(null,"clog","clog",954273629))){
var G__24971 = cljs.core.next.call(null,opts__$1);
var G__24972 = cljs.core.assoc.call(null,acc,new cljs.core.Keyword(null,"clog","clog",954273629),true);
opts__$1 = G__24971;
acc = G__24972;
continue;
} else {
return null;
}
}
}
}
}
}
}
}
break;
}
});
debux.common.util.quote_val = (function debux$common$util$quote_val(p__24973){
var vec__24974 = p__24973;
var k = cljs.core.nth.call(null,vec__24974,(0),null);
var v = cljs.core.nth.call(null,vec__24974,(1),null);
return cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,k,null,(1),null)),(new cljs.core.List(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(new cljs.core.List(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),null,(1),null)),(new cljs.core.List(null,v,null,(1),null))))),null,(1),null))))));
});
debux.common.util.quote_vals = (function debux$common$util$quote_vals(m){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,debux.common.util.quote_val,m));
});
debux.common.util.include_recur_QMARK_ = (function debux$common$util$include_recur_QMARK_(form){
return cljs.core.comp.call(null,cljs.core.set,cljs.core.flatten).call(null,form).call(null,new cljs.core.Symbol(null,"recur","recur",1202958259,null));
});
debux.common.util.o_skip_QMARK_ = (function debux$common$util$o_skip_QMARK_(sym){
return cljs.core._EQ_.call(null,new cljs.core.Symbol("debux.common.macro-specs","o-skip","debux.common.macro-specs/o-skip",-1957530336,null),sym);
});
debux.common.util.spy_first = (function debux$common$util$spy_first(result,quoted_form,indent){
if(cljs.core.integer_QMARK_.call(null,indent)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["indent was not correctly replaced for form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.prn_str.call(null,quoted_form)),"\nThis is a bug, please report it to https://github.com/Day8/re-frame-debux"].join('')),"\n","(integer? indent)"].join('')));
}

debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form","form",-1624062471),debux.common.util.remove_d.call(null,quoted_form,new cljs.core.Symbol(null,"dummy","dummy",-594669915,null)),new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),indent], null));

return result;
});
debux.common.util.spy_last = (function debux$common$util$spy_last(quoted_form,indent,result){
if(cljs.core.integer_QMARK_.call(null,indent)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["indent was not correctly replaced for form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.prn_str.call(null,quoted_form)),"\nThis is a bug, please report it to https://github.com/Day8/re-frame-debux"].join('')),"\n","(integer? indent)"].join('')));
}

debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form","form",-1624062471),debux.common.util.remove_d.call(null,quoted_form,new cljs.core.Symbol(null,"dummy","dummy",-594669915,null)),new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),indent], null));

return result;
});
debux.common.util.spy_comp = (function debux$common$util$spy_comp(quoted_form,indent,form){
return (function() { 
var G__24978__delegate = function (arg){
var result = cljs.core.apply.call(null,form,arg);
if(cljs.core.integer_QMARK_.call(null,indent)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["indent was not correctly replaced for form ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.prn_str.call(null,quoted_form)),"\nThis is a bug, please report it to https://github.com/Day8/re-frame-debux"].join('')),"\n","(integer? indent)"].join('')));
}

debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"form","form",-1624062471),debux.common.util.remove_d.call(null,quoted_form,new cljs.core.Symbol(null,"dummy","dummy",-594669915,null)),new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),indent], null));

return result;
};
var G__24978 = function (var_args){
var arg = null;
if (arguments.length > 0) {
var G__24979__i = 0, G__24979__a = new Array(arguments.length -  0);
while (G__24979__i < G__24979__a.length) {G__24979__a[G__24979__i] = arguments[G__24979__i + 0]; ++G__24979__i;}
  arg = new cljs.core.IndexedSeq(G__24979__a,0,null);
} 
return G__24978__delegate.call(this,arg);};
G__24978.cljs$lang$maxFixedArity = 0;
G__24978.cljs$lang$applyTo = (function (arglist__24980){
var arg = cljs.core.seq(arglist__24980);
return G__24978__delegate(arg);
});
G__24978.cljs$core$IFn$_invoke$arity$variadic = G__24978__delegate;
return G__24978;
})()
;
});
debux.common.util.debux_skip_symbol_QMARK_ = (function debux$common$util$debux_skip_symbol_QMARK_(sym){
return cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Symbol("debux.common.macro-specs","o-skip","debux.common.macro-specs/o-skip",-1957530336,null),null,new cljs.core.Symbol("debux.common.macro-specs","skip","debux.common.macro-specs/skip",803221544,null),null,new cljs.core.Symbol("debux.common.macro-specs","skip-outer","debux.common.macro-specs/skip-outer",1273084814,null),null], null), null),sym);
});
debux.common.util.spy_first_QMARK_ = (function debux$common$util$spy_first_QMARK_(sym){
return cljs.core._EQ_.call(null,new cljs.core.Symbol("debux.common.util","spy-first","debux.common.util/spy-first",-2077157225,null),sym);
});
debux.common.util.third = (function debux$common$util$third(coll){
return cljs.core.first.call(null,cljs.core.next.call(null,cljs.core.next.call(null,coll)));
});
debux.common.util.remove_d = (function debux$common$util$remove_d(form,d_sym){
var loc = debux.common.util.sequential_zip.call(null,form);
while(true){
var node = clojure.zip.node.call(null,loc);
if(cljs.core.truth_(clojure.zip.end_QMARK_.call(null,loc))){
return clojure.zip.root.call(null,loc);
} else {
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core.seq_QMARK_.call(null,node);
if(and__3911__auto__){
var or__3922__auto__ = cljs.core._EQ_.call(null,d_sym,cljs.core.first.call(null,node));
if(or__3922__auto__){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = debux.common.util.debux_skip_symbol_QMARK_.call(null,cljs.core.first.call(null,node));
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return debux.common.util.spy_first_QMARK_.call(null,cljs.core.first.call(null,node));
}
}
} else {
return and__3911__auto__;
}
})())){
var G__24981 = clojure.zip.replace.call(null,loc,debux.common.util.third.call(null,node));
loc = G__24981;
continue;
} else {
if(((cljs.core.seq_QMARK_.call(null,node)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol("debux.common.util","spy-last","debux.common.util/spy-last",321778494,null),cljs.core.first.call(null,node))))){
var G__24982 = clojure.zip.replace.call(null,loc,cljs.core.last.call(null,node));
loc = G__24982;
continue;
} else {
var G__24983 = clojure.zip.next.call(null,loc);
loc = G__24983;
continue;

}
}
}
break;
}
});

//# sourceMappingURL=util.js.map?rel=1531954895007
