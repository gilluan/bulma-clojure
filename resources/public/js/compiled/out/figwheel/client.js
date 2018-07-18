// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.16";
figwheel.client.js_stringify = ((((typeof JSON !== 'undefined') && (!((JSON.stringify == null)))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e38171){if((e38171 instanceof Error)){
var e = e38171;
return "Error: Unable to stringify";
} else {
throw e38171;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__38174 = arguments.length;
switch (G__38174) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__38172_SHARP_){
if(typeof p1__38172_SHARP_ === 'string'){
return p1__38172_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__38172_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___38177 = arguments.length;
var i__4500__auto___38178 = (0);
while(true){
if((i__4500__auto___38178 < len__4499__auto___38177)){
args__4502__auto__.push((arguments[i__4500__auto___38178]));

var G__38179 = (i__4500__auto___38178 + (1));
i__4500__auto___38178 = G__38179;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq38176){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38176));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__4502__auto__ = [];
var len__4499__auto___38181 = arguments.length;
var i__4500__auto___38182 = (0);
while(true){
if((i__4500__auto___38182 < len__4499__auto___38181)){
args__4502__auto__.push((arguments[i__4500__auto___38182]));

var G__38183 = (i__4500__auto___38182 + (1));
i__4500__auto___38182 = G__38183;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq38180){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38180));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if(((b === true) || (b === false))){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__38184){
var map__38185 = p__38184;
var map__38185__$1 = ((((!((map__38185 == null)))?(((((map__38185.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38185.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38185):map__38185);
var message = cljs.core.get.call(null,map__38185__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__38185__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__3922__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__3911__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__3911__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__3911__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return ((cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts))));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__35318__auto___38264 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto___38264,ch){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto___38264,ch){
return (function (state_38236){
var state_val_38237 = (state_38236[(1)]);
if((state_val_38237 === (7))){
var inst_38232 = (state_38236[(2)]);
var state_38236__$1 = state_38236;
var statearr_38238_38265 = state_38236__$1;
(statearr_38238_38265[(2)] = inst_38232);

(statearr_38238_38265[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (1))){
var state_38236__$1 = state_38236;
var statearr_38239_38266 = state_38236__$1;
(statearr_38239_38266[(2)] = null);

(statearr_38239_38266[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (4))){
var inst_38189 = (state_38236[(7)]);
var inst_38189__$1 = (state_38236[(2)]);
var state_38236__$1 = (function (){var statearr_38240 = state_38236;
(statearr_38240[(7)] = inst_38189__$1);

return statearr_38240;
})();
if(cljs.core.truth_(inst_38189__$1)){
var statearr_38241_38267 = state_38236__$1;
(statearr_38241_38267[(1)] = (5));

} else {
var statearr_38242_38268 = state_38236__$1;
(statearr_38242_38268[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (15))){
var inst_38196 = (state_38236[(8)]);
var inst_38211 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38196);
var inst_38212 = cljs.core.first.call(null,inst_38211);
var inst_38213 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_38212);
var inst_38214 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38213)].join('');
var inst_38215 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_38214);
var state_38236__$1 = state_38236;
var statearr_38243_38269 = state_38236__$1;
(statearr_38243_38269[(2)] = inst_38215);

(statearr_38243_38269[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (13))){
var inst_38220 = (state_38236[(2)]);
var state_38236__$1 = state_38236;
var statearr_38244_38270 = state_38236__$1;
(statearr_38244_38270[(2)] = inst_38220);

(statearr_38244_38270[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (6))){
var state_38236__$1 = state_38236;
var statearr_38245_38271 = state_38236__$1;
(statearr_38245_38271[(2)] = null);

(statearr_38245_38271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (17))){
var inst_38218 = (state_38236[(2)]);
var state_38236__$1 = state_38236;
var statearr_38246_38272 = state_38236__$1;
(statearr_38246_38272[(2)] = inst_38218);

(statearr_38246_38272[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (3))){
var inst_38234 = (state_38236[(2)]);
var state_38236__$1 = state_38236;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38236__$1,inst_38234);
} else {
if((state_val_38237 === (12))){
var inst_38195 = (state_38236[(9)]);
var inst_38209 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_38195,opts);
var state_38236__$1 = state_38236;
if(cljs.core.truth_(inst_38209)){
var statearr_38247_38273 = state_38236__$1;
(statearr_38247_38273[(1)] = (15));

} else {
var statearr_38248_38274 = state_38236__$1;
(statearr_38248_38274[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (2))){
var state_38236__$1 = state_38236;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38236__$1,(4),ch);
} else {
if((state_val_38237 === (11))){
var inst_38196 = (state_38236[(8)]);
var inst_38201 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_38202 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_38196);
var inst_38203 = cljs.core.async.timeout.call(null,(1000));
var inst_38204 = [inst_38202,inst_38203];
var inst_38205 = (new cljs.core.PersistentVector(null,2,(5),inst_38201,inst_38204,null));
var state_38236__$1 = state_38236;
return cljs.core.async.ioc_alts_BANG_.call(null,state_38236__$1,(14),inst_38205);
} else {
if((state_val_38237 === (9))){
var inst_38196 = (state_38236[(8)]);
var inst_38222 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_38223 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_38196);
var inst_38224 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_38223);
var inst_38225 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_38224)].join('');
var inst_38226 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_38225);
var state_38236__$1 = (function (){var statearr_38249 = state_38236;
(statearr_38249[(10)] = inst_38222);

return statearr_38249;
})();
var statearr_38250_38275 = state_38236__$1;
(statearr_38250_38275[(2)] = inst_38226);

(statearr_38250_38275[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (5))){
var inst_38189 = (state_38236[(7)]);
var inst_38191 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_38192 = (new cljs.core.PersistentArrayMap(null,2,inst_38191,null));
var inst_38193 = (new cljs.core.PersistentHashSet(null,inst_38192,null));
var inst_38194 = figwheel.client.focus_msgs.call(null,inst_38193,inst_38189);
var inst_38195 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_38194);
var inst_38196 = cljs.core.first.call(null,inst_38194);
var inst_38197 = figwheel.client.autoload_QMARK_.call(null);
var state_38236__$1 = (function (){var statearr_38251 = state_38236;
(statearr_38251[(8)] = inst_38196);

(statearr_38251[(9)] = inst_38195);

return statearr_38251;
})();
if(cljs.core.truth_(inst_38197)){
var statearr_38252_38276 = state_38236__$1;
(statearr_38252_38276[(1)] = (8));

} else {
var statearr_38253_38277 = state_38236__$1;
(statearr_38253_38277[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (14))){
var inst_38207 = (state_38236[(2)]);
var state_38236__$1 = state_38236;
var statearr_38254_38278 = state_38236__$1;
(statearr_38254_38278[(2)] = inst_38207);

(statearr_38254_38278[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (16))){
var state_38236__$1 = state_38236;
var statearr_38255_38279 = state_38236__$1;
(statearr_38255_38279[(2)] = null);

(statearr_38255_38279[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (10))){
var inst_38228 = (state_38236[(2)]);
var state_38236__$1 = (function (){var statearr_38256 = state_38236;
(statearr_38256[(11)] = inst_38228);

return statearr_38256;
})();
var statearr_38257_38280 = state_38236__$1;
(statearr_38257_38280[(2)] = null);

(statearr_38257_38280[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38237 === (8))){
var inst_38195 = (state_38236[(9)]);
var inst_38199 = figwheel.client.reload_file_state_QMARK_.call(null,inst_38195,opts);
var state_38236__$1 = state_38236;
if(cljs.core.truth_(inst_38199)){
var statearr_38258_38281 = state_38236__$1;
(statearr_38258_38281[(1)] = (11));

} else {
var statearr_38259_38282 = state_38236__$1;
(statearr_38259_38282[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
}
});})(c__35318__auto___38264,ch))
;
return ((function (switch__35230__auto__,c__35318__auto___38264,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__35231__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__35231__auto____0 = (function (){
var statearr_38260 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38260[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__35231__auto__);

(statearr_38260[(1)] = (1));

return statearr_38260;
});
var figwheel$client$file_reloader_plugin_$_state_machine__35231__auto____1 = (function (state_38236){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_38236);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e38261){if((e38261 instanceof Object)){
var ex__35234__auto__ = e38261;
var statearr_38262_38283 = state_38236;
(statearr_38262_38283[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38261;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38284 = state_38236;
state_38236 = G__38284;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__35231__auto__ = function(state_38236){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__35231__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__35231__auto____1.call(this,state_38236);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__35231__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__35231__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto___38264,ch))
})();
var state__35320__auto__ = (function (){var statearr_38263 = f__35319__auto__.call(null);
(statearr_38263[(6)] = c__35318__auto___38264);

return statearr_38263;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto___38264,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__38285_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__38285_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_38289 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_38289){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var sb = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_38287 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_38288 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_38287,_STAR_print_fn_STAR_38288,sb,base_path_38289){
return (function (x){
return sb.append(x);
});})(_STAR_print_newline_STAR_38287,_STAR_print_fn_STAR_38288,sb,base_path_38289))
;

try{var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"out","out",-910545517),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb)].join(''),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_38288;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_38287;
}}catch (e38286){if((e38286 instanceof Error)){
var e = e38286;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_38289], null));
} else {
var e = e38286;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_38289))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__38290){
var map__38291 = p__38290;
var map__38291__$1 = ((((!((map__38291 == null)))?(((((map__38291.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38291.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38291):map__38291);
var opts = map__38291__$1;
var build_id = cljs.core.get.call(null,map__38291__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__38291,map__38291__$1,opts,build_id){
return (function (p__38293){
var vec__38294 = p__38293;
var seq__38295 = cljs.core.seq.call(null,vec__38294);
var first__38296 = cljs.core.first.call(null,seq__38295);
var seq__38295__$1 = cljs.core.next.call(null,seq__38295);
var map__38297 = first__38296;
var map__38297__$1 = ((((!((map__38297 == null)))?(((((map__38297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38297):map__38297);
var msg = map__38297__$1;
var msg_name = cljs.core.get.call(null,map__38297__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38295__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__38294,seq__38295,first__38296,seq__38295__$1,map__38297,map__38297__$1,msg,msg_name,_,map__38291,map__38291__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__38294,seq__38295,first__38296,seq__38295__$1,map__38297,map__38297__$1,msg,msg_name,_,map__38291,map__38291__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__38291,map__38291__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__38299){
var vec__38300 = p__38299;
var seq__38301 = cljs.core.seq.call(null,vec__38300);
var first__38302 = cljs.core.first.call(null,seq__38301);
var seq__38301__$1 = cljs.core.next.call(null,seq__38301);
var map__38303 = first__38302;
var map__38303__$1 = ((((!((map__38303 == null)))?(((((map__38303.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38303.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38303):map__38303);
var msg = map__38303__$1;
var msg_name = cljs.core.get.call(null,map__38303__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38301__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__38305){
var map__38306 = p__38305;
var map__38306__$1 = ((((!((map__38306 == null)))?(((((map__38306.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38306.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38306):map__38306);
var on_compile_warning = cljs.core.get.call(null,map__38306__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__38306__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__38306,map__38306__$1,on_compile_warning,on_compile_fail){
return (function (p__38308){
var vec__38309 = p__38308;
var seq__38310 = cljs.core.seq.call(null,vec__38309);
var first__38311 = cljs.core.first.call(null,seq__38310);
var seq__38310__$1 = cljs.core.next.call(null,seq__38310);
var map__38312 = first__38311;
var map__38312__$1 = ((((!((map__38312 == null)))?(((((map__38312.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38312.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38312):map__38312);
var msg = map__38312__$1;
var msg_name = cljs.core.get.call(null,map__38312__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__38310__$1;
var pred__38314 = cljs.core._EQ_;
var expr__38315 = msg_name;
if(cljs.core.truth_(pred__38314.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__38315))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__38314.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__38315))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__38306,map__38306__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__35318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto__,msg_hist,msg_names,msg){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto__,msg_hist,msg_names,msg){
return (function (state_38404){
var state_val_38405 = (state_38404[(1)]);
if((state_val_38405 === (7))){
var inst_38324 = (state_38404[(2)]);
var state_38404__$1 = state_38404;
if(cljs.core.truth_(inst_38324)){
var statearr_38406_38453 = state_38404__$1;
(statearr_38406_38453[(1)] = (8));

} else {
var statearr_38407_38454 = state_38404__$1;
(statearr_38407_38454[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (20))){
var inst_38398 = (state_38404[(2)]);
var state_38404__$1 = state_38404;
var statearr_38408_38455 = state_38404__$1;
(statearr_38408_38455[(2)] = inst_38398);

(statearr_38408_38455[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (27))){
var inst_38394 = (state_38404[(2)]);
var state_38404__$1 = state_38404;
var statearr_38409_38456 = state_38404__$1;
(statearr_38409_38456[(2)] = inst_38394);

(statearr_38409_38456[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (1))){
var inst_38317 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_38404__$1 = state_38404;
if(cljs.core.truth_(inst_38317)){
var statearr_38410_38457 = state_38404__$1;
(statearr_38410_38457[(1)] = (2));

} else {
var statearr_38411_38458 = state_38404__$1;
(statearr_38411_38458[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (24))){
var inst_38396 = (state_38404[(2)]);
var state_38404__$1 = state_38404;
var statearr_38412_38459 = state_38404__$1;
(statearr_38412_38459[(2)] = inst_38396);

(statearr_38412_38459[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (4))){
var inst_38402 = (state_38404[(2)]);
var state_38404__$1 = state_38404;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38404__$1,inst_38402);
} else {
if((state_val_38405 === (15))){
var inst_38400 = (state_38404[(2)]);
var state_38404__$1 = state_38404;
var statearr_38413_38460 = state_38404__$1;
(statearr_38413_38460[(2)] = inst_38400);

(statearr_38413_38460[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (21))){
var inst_38353 = (state_38404[(2)]);
var inst_38354 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38355 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38354);
var state_38404__$1 = (function (){var statearr_38414 = state_38404;
(statearr_38414[(7)] = inst_38353);

return statearr_38414;
})();
var statearr_38415_38461 = state_38404__$1;
(statearr_38415_38461[(2)] = inst_38355);

(statearr_38415_38461[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (31))){
var inst_38383 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_38404__$1 = state_38404;
if(cljs.core.truth_(inst_38383)){
var statearr_38416_38462 = state_38404__$1;
(statearr_38416_38462[(1)] = (34));

} else {
var statearr_38417_38463 = state_38404__$1;
(statearr_38417_38463[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (32))){
var inst_38392 = (state_38404[(2)]);
var state_38404__$1 = state_38404;
var statearr_38418_38464 = state_38404__$1;
(statearr_38418_38464[(2)] = inst_38392);

(statearr_38418_38464[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (33))){
var inst_38379 = (state_38404[(2)]);
var inst_38380 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38381 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38380);
var state_38404__$1 = (function (){var statearr_38419 = state_38404;
(statearr_38419[(8)] = inst_38379);

return statearr_38419;
})();
var statearr_38420_38465 = state_38404__$1;
(statearr_38420_38465[(2)] = inst_38381);

(statearr_38420_38465[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (13))){
var inst_38338 = figwheel.client.heads_up.clear.call(null);
var state_38404__$1 = state_38404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38404__$1,(16),inst_38338);
} else {
if((state_val_38405 === (22))){
var inst_38359 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38360 = figwheel.client.heads_up.append_warning_message.call(null,inst_38359);
var state_38404__$1 = state_38404;
var statearr_38421_38466 = state_38404__$1;
(statearr_38421_38466[(2)] = inst_38360);

(statearr_38421_38466[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (36))){
var inst_38390 = (state_38404[(2)]);
var state_38404__$1 = state_38404;
var statearr_38422_38467 = state_38404__$1;
(statearr_38422_38467[(2)] = inst_38390);

(statearr_38422_38467[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (29))){
var inst_38370 = (state_38404[(2)]);
var inst_38371 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38372 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38371);
var state_38404__$1 = (function (){var statearr_38423 = state_38404;
(statearr_38423[(9)] = inst_38370);

return statearr_38423;
})();
var statearr_38424_38468 = state_38404__$1;
(statearr_38424_38468[(2)] = inst_38372);

(statearr_38424_38468[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (6))){
var inst_38319 = (state_38404[(10)]);
var state_38404__$1 = state_38404;
var statearr_38425_38469 = state_38404__$1;
(statearr_38425_38469[(2)] = inst_38319);

(statearr_38425_38469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (28))){
var inst_38366 = (state_38404[(2)]);
var inst_38367 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38368 = figwheel.client.heads_up.display_warning.call(null,inst_38367);
var state_38404__$1 = (function (){var statearr_38426 = state_38404;
(statearr_38426[(11)] = inst_38366);

return statearr_38426;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38404__$1,(29),inst_38368);
} else {
if((state_val_38405 === (25))){
var inst_38364 = figwheel.client.heads_up.clear.call(null);
var state_38404__$1 = state_38404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38404__$1,(28),inst_38364);
} else {
if((state_val_38405 === (34))){
var inst_38385 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38404__$1 = state_38404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38404__$1,(37),inst_38385);
} else {
if((state_val_38405 === (17))){
var inst_38344 = (state_38404[(2)]);
var inst_38345 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38346 = figwheel.client.auto_jump_to_error.call(null,opts,inst_38345);
var state_38404__$1 = (function (){var statearr_38427 = state_38404;
(statearr_38427[(12)] = inst_38344);

return statearr_38427;
})();
var statearr_38428_38470 = state_38404__$1;
(statearr_38428_38470[(2)] = inst_38346);

(statearr_38428_38470[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (3))){
var inst_38336 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_38404__$1 = state_38404;
if(cljs.core.truth_(inst_38336)){
var statearr_38429_38471 = state_38404__$1;
(statearr_38429_38471[(1)] = (13));

} else {
var statearr_38430_38472 = state_38404__$1;
(statearr_38430_38472[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (12))){
var inst_38332 = (state_38404[(2)]);
var state_38404__$1 = state_38404;
var statearr_38431_38473 = state_38404__$1;
(statearr_38431_38473[(2)] = inst_38332);

(statearr_38431_38473[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (2))){
var inst_38319 = (state_38404[(10)]);
var inst_38319__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_38404__$1 = (function (){var statearr_38432 = state_38404;
(statearr_38432[(10)] = inst_38319__$1);

return statearr_38432;
})();
if(cljs.core.truth_(inst_38319__$1)){
var statearr_38433_38474 = state_38404__$1;
(statearr_38433_38474[(1)] = (5));

} else {
var statearr_38434_38475 = state_38404__$1;
(statearr_38434_38475[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (23))){
var inst_38362 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_38404__$1 = state_38404;
if(cljs.core.truth_(inst_38362)){
var statearr_38435_38476 = state_38404__$1;
(statearr_38435_38476[(1)] = (25));

} else {
var statearr_38436_38477 = state_38404__$1;
(statearr_38436_38477[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (35))){
var state_38404__$1 = state_38404;
var statearr_38437_38478 = state_38404__$1;
(statearr_38437_38478[(2)] = null);

(statearr_38437_38478[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (19))){
var inst_38357 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_38404__$1 = state_38404;
if(cljs.core.truth_(inst_38357)){
var statearr_38438_38479 = state_38404__$1;
(statearr_38438_38479[(1)] = (22));

} else {
var statearr_38439_38480 = state_38404__$1;
(statearr_38439_38480[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (11))){
var inst_38328 = (state_38404[(2)]);
var state_38404__$1 = state_38404;
var statearr_38440_38481 = state_38404__$1;
(statearr_38440_38481[(2)] = inst_38328);

(statearr_38440_38481[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (9))){
var inst_38330 = figwheel.client.heads_up.clear.call(null);
var state_38404__$1 = state_38404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38404__$1,(12),inst_38330);
} else {
if((state_val_38405 === (5))){
var inst_38321 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_38404__$1 = state_38404;
var statearr_38441_38482 = state_38404__$1;
(statearr_38441_38482[(2)] = inst_38321);

(statearr_38441_38482[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (14))){
var inst_38348 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_38404__$1 = state_38404;
if(cljs.core.truth_(inst_38348)){
var statearr_38442_38483 = state_38404__$1;
(statearr_38442_38483[(1)] = (18));

} else {
var statearr_38443_38484 = state_38404__$1;
(statearr_38443_38484[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (26))){
var inst_38374 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_38404__$1 = state_38404;
if(cljs.core.truth_(inst_38374)){
var statearr_38444_38485 = state_38404__$1;
(statearr_38444_38485[(1)] = (30));

} else {
var statearr_38445_38486 = state_38404__$1;
(statearr_38445_38486[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (16))){
var inst_38340 = (state_38404[(2)]);
var inst_38341 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38342 = figwheel.client.heads_up.display_exception.call(null,inst_38341);
var state_38404__$1 = (function (){var statearr_38446 = state_38404;
(statearr_38446[(13)] = inst_38340);

return statearr_38446;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38404__$1,(17),inst_38342);
} else {
if((state_val_38405 === (30))){
var inst_38376 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38377 = figwheel.client.heads_up.display_warning.call(null,inst_38376);
var state_38404__$1 = state_38404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38404__$1,(33),inst_38377);
} else {
if((state_val_38405 === (10))){
var inst_38334 = (state_38404[(2)]);
var state_38404__$1 = state_38404;
var statearr_38447_38487 = state_38404__$1;
(statearr_38447_38487[(2)] = inst_38334);

(statearr_38447_38487[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (18))){
var inst_38350 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_38351 = figwheel.client.heads_up.display_exception.call(null,inst_38350);
var state_38404__$1 = state_38404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38404__$1,(21),inst_38351);
} else {
if((state_val_38405 === (37))){
var inst_38387 = (state_38404[(2)]);
var state_38404__$1 = state_38404;
var statearr_38448_38488 = state_38404__$1;
(statearr_38448_38488[(2)] = inst_38387);

(statearr_38448_38488[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38405 === (8))){
var inst_38326 = figwheel.client.heads_up.flash_loaded.call(null);
var state_38404__$1 = state_38404;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38404__$1,(11),inst_38326);
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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__35318__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__35230__auto__,c__35318__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35231__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35231__auto____0 = (function (){
var statearr_38449 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_38449[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35231__auto__);

(statearr_38449[(1)] = (1));

return statearr_38449;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35231__auto____1 = (function (state_38404){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_38404);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e38450){if((e38450 instanceof Object)){
var ex__35234__auto__ = e38450;
var statearr_38451_38489 = state_38404;
(statearr_38451_38489[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38404);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38450;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38490 = state_38404;
state_38404 = G__38490;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35231__auto__ = function(state_38404){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35231__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35231__auto____1.call(this,state_38404);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35231__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35231__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto__,msg_hist,msg_names,msg))
})();
var state__35320__auto__ = (function (){var statearr_38452 = f__35319__auto__.call(null);
(statearr_38452[(6)] = c__35318__auto__);

return statearr_38452;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto__,msg_hist,msg_names,msg))
);

return c__35318__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__35318__auto___38519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto___38519,ch){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto___38519,ch){
return (function (state_38505){
var state_val_38506 = (state_38505[(1)]);
if((state_val_38506 === (1))){
var state_38505__$1 = state_38505;
var statearr_38507_38520 = state_38505__$1;
(statearr_38507_38520[(2)] = null);

(statearr_38507_38520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (2))){
var state_38505__$1 = state_38505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38505__$1,(4),ch);
} else {
if((state_val_38506 === (3))){
var inst_38503 = (state_38505[(2)]);
var state_38505__$1 = state_38505;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38505__$1,inst_38503);
} else {
if((state_val_38506 === (4))){
var inst_38493 = (state_38505[(7)]);
var inst_38493__$1 = (state_38505[(2)]);
var state_38505__$1 = (function (){var statearr_38508 = state_38505;
(statearr_38508[(7)] = inst_38493__$1);

return statearr_38508;
})();
if(cljs.core.truth_(inst_38493__$1)){
var statearr_38509_38521 = state_38505__$1;
(statearr_38509_38521[(1)] = (5));

} else {
var statearr_38510_38522 = state_38505__$1;
(statearr_38510_38522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (5))){
var inst_38493 = (state_38505[(7)]);
var inst_38495 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_38493);
var state_38505__$1 = state_38505;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38505__$1,(8),inst_38495);
} else {
if((state_val_38506 === (6))){
var state_38505__$1 = state_38505;
var statearr_38511_38523 = state_38505__$1;
(statearr_38511_38523[(2)] = null);

(statearr_38511_38523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (7))){
var inst_38501 = (state_38505[(2)]);
var state_38505__$1 = state_38505;
var statearr_38512_38524 = state_38505__$1;
(statearr_38512_38524[(2)] = inst_38501);

(statearr_38512_38524[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_38506 === (8))){
var inst_38497 = (state_38505[(2)]);
var state_38505__$1 = (function (){var statearr_38513 = state_38505;
(statearr_38513[(8)] = inst_38497);

return statearr_38513;
})();
var statearr_38514_38525 = state_38505__$1;
(statearr_38514_38525[(2)] = null);

(statearr_38514_38525[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});})(c__35318__auto___38519,ch))
;
return ((function (switch__35230__auto__,c__35318__auto___38519,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__35231__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__35231__auto____0 = (function (){
var statearr_38515 = [null,null,null,null,null,null,null,null,null];
(statearr_38515[(0)] = figwheel$client$heads_up_plugin_$_state_machine__35231__auto__);

(statearr_38515[(1)] = (1));

return statearr_38515;
});
var figwheel$client$heads_up_plugin_$_state_machine__35231__auto____1 = (function (state_38505){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_38505);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e38516){if((e38516 instanceof Object)){
var ex__35234__auto__ = e38516;
var statearr_38517_38526 = state_38505;
(statearr_38517_38526[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38505);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38527 = state_38505;
state_38505 = G__38527;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__35231__auto__ = function(state_38505){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__35231__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__35231__auto____1.call(this,state_38505);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__35231__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__35231__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto___38519,ch))
})();
var state__35320__auto__ = (function (){var statearr_38518 = f__35319__auto__.call(null);
(statearr_38518[(6)] = c__35318__auto___38519);

return statearr_38518;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto___38519,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__35318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto__){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto__){
return (function (state_38533){
var state_val_38534 = (state_38533[(1)]);
if((state_val_38534 === (1))){
var inst_38528 = cljs.core.async.timeout.call(null,(3000));
var state_38533__$1 = state_38533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38533__$1,(2),inst_38528);
} else {
if((state_val_38534 === (2))){
var inst_38530 = (state_38533[(2)]);
var inst_38531 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_38533__$1 = (function (){var statearr_38535 = state_38533;
(statearr_38535[(7)] = inst_38530);

return statearr_38535;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38533__$1,inst_38531);
} else {
return null;
}
}
});})(c__35318__auto__))
;
return ((function (switch__35230__auto__,c__35318__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__35231__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__35231__auto____0 = (function (){
var statearr_38536 = [null,null,null,null,null,null,null,null];
(statearr_38536[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__35231__auto__);

(statearr_38536[(1)] = (1));

return statearr_38536;
});
var figwheel$client$enforce_project_plugin_$_state_machine__35231__auto____1 = (function (state_38533){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_38533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e38537){if((e38537 instanceof Object)){
var ex__35234__auto__ = e38537;
var statearr_38538_38540 = state_38533;
(statearr_38538_38540[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38537;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38541 = state_38533;
state_38533 = G__38541;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__35231__auto__ = function(state_38533){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__35231__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__35231__auto____1.call(this,state_38533);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__35231__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__35231__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto__))
})();
var state__35320__auto__ = (function (){var statearr_38539 = f__35319__auto__.call(null);
(statearr_38539[(6)] = c__35318__auto__);

return statearr_38539;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto__))
);

return c__35318__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__35318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto__,figwheel_version,temp__4657__auto__){
return (function (state_38548){
var state_val_38549 = (state_38548[(1)]);
if((state_val_38549 === (1))){
var inst_38542 = cljs.core.async.timeout.call(null,(2000));
var state_38548__$1 = state_38548;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_38548__$1,(2),inst_38542);
} else {
if((state_val_38549 === (2))){
var inst_38544 = (state_38548[(2)]);
var inst_38545 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_38546 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_38545);
var state_38548__$1 = (function (){var statearr_38550 = state_38548;
(statearr_38550[(7)] = inst_38544);

return statearr_38550;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_38548__$1,inst_38546);
} else {
return null;
}
}
});})(c__35318__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__35230__auto__,c__35318__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35231__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35231__auto____0 = (function (){
var statearr_38551 = [null,null,null,null,null,null,null,null];
(statearr_38551[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35231__auto__);

(statearr_38551[(1)] = (1));

return statearr_38551;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35231__auto____1 = (function (state_38548){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_38548);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e38552){if((e38552 instanceof Object)){
var ex__35234__auto__ = e38552;
var statearr_38553_38555 = state_38548;
(statearr_38553_38555[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_38548);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e38552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38556 = state_38548;
state_38548 = G__38556;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35231__auto__ = function(state_38548){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35231__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35231__auto____1.call(this,state_38548);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35231__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35231__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto__,figwheel_version,temp__4657__auto__))
})();
var state__35320__auto__ = (function (){var statearr_38554 = f__35319__auto__.call(null);
(statearr_38554[(6)] = c__35318__auto__);

return statearr_38554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto__,figwheel_version,temp__4657__auto__))
);

return c__35318__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__38557){
var map__38558 = p__38557;
var map__38558__$1 = ((((!((map__38558 == null)))?(((((map__38558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38558.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38558):map__38558);
var file = cljs.core.get.call(null,map__38558__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__38558__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__38558__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__38560 = "";
var G__38560__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38560),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__38560);
var G__38560__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38560__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__38560__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = line;
if(cljs.core.truth_(and__3911__auto__)){
return column;
} else {
return and__3911__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__38560__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__38560__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__38561){
var map__38562 = p__38561;
var map__38562__$1 = ((((!((map__38562 == null)))?(((((map__38562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38562):map__38562);
var ed = map__38562__$1;
var formatted_exception = cljs.core.get.call(null,map__38562__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__38562__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__38562__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__38564_38568 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__38565_38569 = null;
var count__38566_38570 = (0);
var i__38567_38571 = (0);
while(true){
if((i__38567_38571 < count__38566_38570)){
var msg_38572 = cljs.core._nth.call(null,chunk__38565_38569,i__38567_38571);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38572);


var G__38573 = seq__38564_38568;
var G__38574 = chunk__38565_38569;
var G__38575 = count__38566_38570;
var G__38576 = (i__38567_38571 + (1));
seq__38564_38568 = G__38573;
chunk__38565_38569 = G__38574;
count__38566_38570 = G__38575;
i__38567_38571 = G__38576;
continue;
} else {
var temp__4657__auto___38577 = cljs.core.seq.call(null,seq__38564_38568);
if(temp__4657__auto___38577){
var seq__38564_38578__$1 = temp__4657__auto___38577;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38564_38578__$1)){
var c__4319__auto___38579 = cljs.core.chunk_first.call(null,seq__38564_38578__$1);
var G__38580 = cljs.core.chunk_rest.call(null,seq__38564_38578__$1);
var G__38581 = c__4319__auto___38579;
var G__38582 = cljs.core.count.call(null,c__4319__auto___38579);
var G__38583 = (0);
seq__38564_38568 = G__38580;
chunk__38565_38569 = G__38581;
count__38566_38570 = G__38582;
i__38567_38571 = G__38583;
continue;
} else {
var msg_38584 = cljs.core.first.call(null,seq__38564_38578__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_38584);


var G__38585 = cljs.core.next.call(null,seq__38564_38578__$1);
var G__38586 = null;
var G__38587 = (0);
var G__38588 = (0);
seq__38564_38568 = G__38585;
chunk__38565_38569 = G__38586;
count__38566_38570 = G__38587;
i__38567_38571 = G__38588;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__38589){
var map__38590 = p__38589;
var map__38590__$1 = ((((!((map__38590 == null)))?(((((map__38590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38590):map__38590);
var w = map__38590__$1;
var message = cljs.core.get.call(null,map__38590__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,361,361,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,353,353,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__3911__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__3911__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__38592 = cljs.core.seq.call(null,plugins);
var chunk__38593 = null;
var count__38594 = (0);
var i__38595 = (0);
while(true){
if((i__38595 < count__38594)){
var vec__38596 = cljs.core._nth.call(null,chunk__38593,i__38595);
var k = cljs.core.nth.call(null,vec__38596,(0),null);
var plugin = cljs.core.nth.call(null,vec__38596,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38602 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38592,chunk__38593,count__38594,i__38595,pl_38602,vec__38596,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_38602.call(null,msg_hist);
});})(seq__38592,chunk__38593,count__38594,i__38595,pl_38602,vec__38596,k,plugin))
);
} else {
}


var G__38603 = seq__38592;
var G__38604 = chunk__38593;
var G__38605 = count__38594;
var G__38606 = (i__38595 + (1));
seq__38592 = G__38603;
chunk__38593 = G__38604;
count__38594 = G__38605;
i__38595 = G__38606;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__38592);
if(temp__4657__auto__){
var seq__38592__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38592__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__38592__$1);
var G__38607 = cljs.core.chunk_rest.call(null,seq__38592__$1);
var G__38608 = c__4319__auto__;
var G__38609 = cljs.core.count.call(null,c__4319__auto__);
var G__38610 = (0);
seq__38592 = G__38607;
chunk__38593 = G__38608;
count__38594 = G__38609;
i__38595 = G__38610;
continue;
} else {
var vec__38599 = cljs.core.first.call(null,seq__38592__$1);
var k = cljs.core.nth.call(null,vec__38599,(0),null);
var plugin = cljs.core.nth.call(null,vec__38599,(1),null);
if(cljs.core.truth_(plugin)){
var pl_38611 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__38592,chunk__38593,count__38594,i__38595,pl_38611,vec__38599,k,plugin,seq__38592__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_38611.call(null,msg_hist);
});})(seq__38592,chunk__38593,count__38594,i__38595,pl_38611,vec__38599,k,plugin,seq__38592__$1,temp__4657__auto__))
);
} else {
}


var G__38612 = cljs.core.next.call(null,seq__38592__$1);
var G__38613 = null;
var G__38614 = (0);
var G__38615 = (0);
seq__38592 = G__38612;
chunk__38593 = G__38613;
count__38594 = G__38614;
i__38595 = G__38615;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__38617 = arguments.length;
switch (G__38617) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__38618_38623 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__38619_38624 = null;
var count__38620_38625 = (0);
var i__38621_38626 = (0);
while(true){
if((i__38621_38626 < count__38620_38625)){
var msg_38627 = cljs.core._nth.call(null,chunk__38619_38624,i__38621_38626);
figwheel.client.socket.handle_incoming_message.call(null,msg_38627);


var G__38628 = seq__38618_38623;
var G__38629 = chunk__38619_38624;
var G__38630 = count__38620_38625;
var G__38631 = (i__38621_38626 + (1));
seq__38618_38623 = G__38628;
chunk__38619_38624 = G__38629;
count__38620_38625 = G__38630;
i__38621_38626 = G__38631;
continue;
} else {
var temp__4657__auto___38632 = cljs.core.seq.call(null,seq__38618_38623);
if(temp__4657__auto___38632){
var seq__38618_38633__$1 = temp__4657__auto___38632;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38618_38633__$1)){
var c__4319__auto___38634 = cljs.core.chunk_first.call(null,seq__38618_38633__$1);
var G__38635 = cljs.core.chunk_rest.call(null,seq__38618_38633__$1);
var G__38636 = c__4319__auto___38634;
var G__38637 = cljs.core.count.call(null,c__4319__auto___38634);
var G__38638 = (0);
seq__38618_38623 = G__38635;
chunk__38619_38624 = G__38636;
count__38620_38625 = G__38637;
i__38621_38626 = G__38638;
continue;
} else {
var msg_38639 = cljs.core.first.call(null,seq__38618_38633__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_38639);


var G__38640 = cljs.core.next.call(null,seq__38618_38633__$1);
var G__38641 = null;
var G__38642 = (0);
var G__38643 = (0);
seq__38618_38623 = G__38640;
chunk__38619_38624 = G__38641;
count__38620_38625 = G__38642;
i__38621_38626 = G__38643;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__4502__auto__ = [];
var len__4499__auto___38648 = arguments.length;
var i__4500__auto___38649 = (0);
while(true){
if((i__4500__auto___38649 < len__4499__auto___38648)){
args__4502__auto__.push((arguments[i__4500__auto___38649]));

var G__38650 = (i__4500__auto___38649 + (1));
i__4500__auto___38649 = G__38650;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__38645){
var map__38646 = p__38645;
var map__38646__$1 = ((((!((map__38646 == null)))?(((((map__38646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38646):map__38646);
var opts = map__38646__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq38644){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38644));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e38651){if((e38651 instanceof Error)){
var e = e38651;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e38651;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__38652){
var map__38653 = p__38652;
var map__38653__$1 = ((((!((map__38653 == null)))?(((((map__38653.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38653.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38653):map__38653);
var msg_name = cljs.core.get.call(null,map__38653__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1531954933491
