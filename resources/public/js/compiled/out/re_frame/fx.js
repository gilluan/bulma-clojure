// Compiled by ClojureScript 1.10.238 {}
goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(re_frame.registrar.kinds.call(null,re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler.call(null,re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_25050 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));

try{try{var seq__25051 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__25052 = null;
var count__25053 = (0);
var i__25054 = (0);
while(true){
if((i__25054 < count__25053)){
var vec__25055 = cljs.core._nth.call(null,chunk__25052,i__25054);
var effect_key = cljs.core.nth.call(null,vec__25055,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25055,(1),null);
var temp__4655__auto___25071 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___25071)){
var effect_fn_25072 = temp__4655__auto___25071;
effect_fn_25072.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__25073 = seq__25051;
var G__25074 = chunk__25052;
var G__25075 = count__25053;
var G__25076 = (i__25054 + (1));
seq__25051 = G__25073;
chunk__25052 = G__25074;
count__25053 = G__25075;
i__25054 = G__25076;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25051);
if(temp__4657__auto__){
var seq__25051__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25051__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25051__$1);
var G__25077 = cljs.core.chunk_rest.call(null,seq__25051__$1);
var G__25078 = c__4319__auto__;
var G__25079 = cljs.core.count.call(null,c__4319__auto__);
var G__25080 = (0);
seq__25051 = G__25077;
chunk__25052 = G__25078;
count__25053 = G__25079;
i__25054 = G__25080;
continue;
} else {
var vec__25058 = cljs.core.first.call(null,seq__25051__$1);
var effect_key = cljs.core.nth.call(null,vec__25058,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25058,(1),null);
var temp__4655__auto___25081 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___25081)){
var effect_fn_25082 = temp__4655__auto___25081;
effect_fn_25082.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__25083 = cljs.core.next.call(null,seq__25051__$1);
var G__25084 = null;
var G__25085 = (0);
var G__25086 = (0);
seq__25051 = G__25083;
chunk__25052 = G__25084;
count__25053 = G__25085;
i__25054 = G__25086;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__22325__auto___25087 = re_frame.interop.now.call(null);
var duration__22326__auto___25088 = (end__22325__auto___25087 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22326__auto___25088,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__22325__auto___25087);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_25050;
}} else {
var seq__25061 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__25062 = null;
var count__25063 = (0);
var i__25064 = (0);
while(true){
if((i__25064 < count__25063)){
var vec__25065 = cljs.core._nth.call(null,chunk__25062,i__25064);
var effect_key = cljs.core.nth.call(null,vec__25065,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25065,(1),null);
var temp__4655__auto___25089 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___25089)){
var effect_fn_25090 = temp__4655__auto___25089;
effect_fn_25090.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__25091 = seq__25061;
var G__25092 = chunk__25062;
var G__25093 = count__25063;
var G__25094 = (i__25064 + (1));
seq__25061 = G__25091;
chunk__25062 = G__25092;
count__25063 = G__25093;
i__25064 = G__25094;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25061);
if(temp__4657__auto__){
var seq__25061__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25061__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25061__$1);
var G__25095 = cljs.core.chunk_rest.call(null,seq__25061__$1);
var G__25096 = c__4319__auto__;
var G__25097 = cljs.core.count.call(null,c__4319__auto__);
var G__25098 = (0);
seq__25061 = G__25095;
chunk__25062 = G__25096;
count__25063 = G__25097;
i__25064 = G__25098;
continue;
} else {
var vec__25068 = cljs.core.first.call(null,seq__25061__$1);
var effect_key = cljs.core.nth.call(null,vec__25068,(0),null);
var effect_value = cljs.core.nth.call(null,vec__25068,(1),null);
var temp__4655__auto___25099 = re_frame.registrar.get_handler.call(null,re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___25099)){
var effect_fn_25100 = temp__4655__auto___25099;
effect_fn_25100.call(null,effect_value);
} else {
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect:",effect_key,". Ignoring.");
}


var G__25101 = cljs.core.next.call(null,seq__25061__$1);
var G__25102 = null;
var G__25103 = (0);
var G__25104 = (0);
seq__25061 = G__25101;
chunk__25062 = G__25102;
count__25063 = G__25103;
i__25064 = G__25104;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__25105 = cljs.core.seq.call(null,value);
var chunk__25106 = null;
var count__25107 = (0);
var i__25108 = (0);
while(true){
if((i__25108 < count__25107)){
var map__25109 = cljs.core._nth.call(null,chunk__25106,i__25108);
var map__25109__$1 = ((((!((map__25109 == null)))?(((((map__25109.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25109.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25109):map__25109);
var effect = map__25109__$1;
var ms = cljs.core.get.call(null,map__25109__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__25109__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__25105,chunk__25106,count__25107,i__25108,map__25109,map__25109__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__25105,chunk__25106,count__25107,i__25108,map__25109,map__25109__$1,effect,ms,dispatch))
,ms);
}


var G__25113 = seq__25105;
var G__25114 = chunk__25106;
var G__25115 = count__25107;
var G__25116 = (i__25108 + (1));
seq__25105 = G__25113;
chunk__25106 = G__25114;
count__25107 = G__25115;
i__25108 = G__25116;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25105);
if(temp__4657__auto__){
var seq__25105__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25105__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25105__$1);
var G__25117 = cljs.core.chunk_rest.call(null,seq__25105__$1);
var G__25118 = c__4319__auto__;
var G__25119 = cljs.core.count.call(null,c__4319__auto__);
var G__25120 = (0);
seq__25105 = G__25117;
chunk__25106 = G__25118;
count__25107 = G__25119;
i__25108 = G__25120;
continue;
} else {
var map__25111 = cljs.core.first.call(null,seq__25105__$1);
var map__25111__$1 = ((((!((map__25111 == null)))?(((((map__25111.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__25111.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__25111):map__25111);
var effect = map__25111__$1;
var ms = cljs.core.get.call(null,map__25111__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__25111__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
re_frame.interop.set_timeout_BANG_.call(null,((function (seq__25105,chunk__25106,count__25107,i__25108,map__25111,map__25111__$1,effect,ms,dispatch,seq__25105__$1,temp__4657__auto__){
return (function (){
return re_frame.router.dispatch.call(null,dispatch);
});})(seq__25105,chunk__25106,count__25107,i__25108,map__25111,map__25111__$1,effect,ms,dispatch,seq__25105__$1,temp__4657__auto__))
,ms);
}


var G__25121 = cljs.core.next.call(null,seq__25105__$1);
var G__25122 = null;
var G__25123 = (0);
var G__25124 = (0);
seq__25105 = G__25121;
chunk__25106 = G__25122;
count__25107 = G__25123;
i__25108 = G__25124;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return re_frame.router.dispatch.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__25125 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__25126 = null;
var count__25127 = (0);
var i__25128 = (0);
while(true){
if((i__25128 < count__25127)){
var event = cljs.core._nth.call(null,chunk__25126,i__25128);
re_frame.router.dispatch.call(null,event);


var G__25129 = seq__25125;
var G__25130 = chunk__25126;
var G__25131 = count__25127;
var G__25132 = (i__25128 + (1));
seq__25125 = G__25129;
chunk__25126 = G__25130;
count__25127 = G__25131;
i__25128 = G__25132;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25125);
if(temp__4657__auto__){
var seq__25125__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25125__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25125__$1);
var G__25133 = cljs.core.chunk_rest.call(null,seq__25125__$1);
var G__25134 = c__4319__auto__;
var G__25135 = cljs.core.count.call(null,c__4319__auto__);
var G__25136 = (0);
seq__25125 = G__25133;
chunk__25126 = G__25134;
count__25127 = G__25135;
i__25128 = G__25136;
continue;
} else {
var event = cljs.core.first.call(null,seq__25125__$1);
re_frame.router.dispatch.call(null,event);


var G__25137 = cljs.core.next.call(null,seq__25125__$1);
var G__25138 = null;
var G__25139 = (0);
var G__25140 = (0);
seq__25125 = G__25137;
chunk__25126 = G__25138;
count__25127 = G__25139;
i__25128 = G__25140;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__25141 = cljs.core.seq.call(null,value);
var chunk__25142 = null;
var count__25143 = (0);
var i__25144 = (0);
while(true){
if((i__25144 < count__25143)){
var event = cljs.core._nth.call(null,chunk__25142,i__25144);
clear_event.call(null,event);


var G__25145 = seq__25141;
var G__25146 = chunk__25142;
var G__25147 = count__25143;
var G__25148 = (i__25144 + (1));
seq__25141 = G__25145;
chunk__25142 = G__25146;
count__25143 = G__25147;
i__25144 = G__25148;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__25141);
if(temp__4657__auto__){
var seq__25141__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__25141__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__25141__$1);
var G__25149 = cljs.core.chunk_rest.call(null,seq__25141__$1);
var G__25150 = c__4319__auto__;
var G__25151 = cljs.core.count.call(null,c__4319__auto__);
var G__25152 = (0);
seq__25141 = G__25149;
chunk__25142 = G__25150;
count__25143 = G__25151;
i__25144 = G__25152;
continue;
} else {
var event = cljs.core.first.call(null,seq__25141__$1);
clear_event.call(null,event);


var G__25153 = cljs.core.next.call(null,seq__25141__$1);
var G__25154 = null;
var G__25155 = (0);
var G__25156 = (0);
seq__25141 = G__25153;
chunk__25142 = G__25154;
count__25143 = G__25155;
i__25144 = G__25156;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return clear_event.call(null,value);
}
}));
re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1531954895655
