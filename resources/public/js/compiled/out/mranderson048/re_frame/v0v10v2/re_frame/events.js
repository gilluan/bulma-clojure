// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.re_frame.v0v10v2.re_frame.events');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.utils');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.loggers');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.trace');
mranderson048.re_frame.v0v10v2.re_frame.events.kind = new cljs.core.Keyword(null,"event","event",301435442);
if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson048.re_frame.v0v10v2.re_frame.events.kind))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
}
/**
 * `interceptors` might have nested collections, and contain nil elements.
 *   return a flat collection, with all nils removed.
 *   This function is 9/10 about giving good error messages.
 */
mranderson048.re_frame.v0v10v2.re_frame.events.flatten_and_remove_nils = (function mranderson048$re_frame$v0v10v2$re_frame$events$flatten_and_remove_nils(id,interceptors){
var make_chain = (function (p1__30028_SHARP_){
return cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.flatten.call(null,p1__30028_SHARP_));
});
if(!(mranderson048.re_frame.v0v10v2.re_frame.interop.debug_enabled_QMARK_)){
return make_chain.call(null,interceptors);
} else {
if(cljs.core.coll_QMARK_.call(null,interceptors)){
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected a collection of interceptors, got: ",interceptors);
}

var chain = make_chain.call(null,interceptors);
if(cljs.core.empty_QMARK_.call(null,chain)){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", given an empty interceptor chain");
} else {
}

var temp__4657__auto___30029 = cljs.core.first.call(null,cljs.core.remove.call(null,mranderson048.re_frame.v0v10v2.re_frame.interceptor.interceptor_QMARK_,chain));
if(cljs.core.truth_(temp__4657__auto___30029)){
var not_i_30030 = temp__4657__auto___30029;
if(cljs.core.fn_QMARK_.call(null,not_i_30030)){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", got a function instead of an interceptor. Did you provide old style middleware by mistake? Got: ",not_i_30030);
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: when registering ",id,", expected interceptors, but got: ",not_i_30030);
}
} else {
}

return chain;
}
});
/**
 * Associate the given event `id` with the given collection of `interceptors`.
 * 
 * `interceptors` may contain nested collections and there may be nils
 * at any level,so process this structure into a simple, nil-less vector
 * before registration.
 * 
 * Typically, an `event handler` will be at the end of the chain (wrapped
 * in an interceptor).
 */
mranderson048.re_frame.v0v10v2.re_frame.events.register = (function mranderson048$re_frame$v0v10v2$re_frame$events$register(id,interceptors){
return mranderson048.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.events.kind,id,mranderson048.re_frame.v0v10v2.re_frame.events.flatten_and_remove_nils.call(null,id,interceptors));
});
mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = null;
/**
 * Given an event vector `event-v`, look up the associated interceptor chain, and execute it.
 */
mranderson048.re_frame.v0v10v2.re_frame.events.handle = (function mranderson048$re_frame$v0v10v2$re_frame$events$handle(event_v){
var event_id = mranderson048.re_frame.v0v10v2.re_frame.utils.first_in_vector.call(null,event_v);
var temp__4655__auto__ = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.events.kind,event_id,true);
if(cljs.core.truth_(temp__4655__auto__)){
var interceptors = temp__4655__auto__;
if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_)){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: while handling \"",mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_,"\", dispatch-sync was called for \"",event_v,"\". You can't call dispatch-sync within an event handler.");
} else {
var _STAR_handling_STAR_30031 = mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_;
mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = event_v;

try{if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_30032 = mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_;
mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = mranderson048.re_frame.v0v10v2.re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"operation","operation",-1267664310),event_id,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),mranderson048.re_frame.v0v10v2.re_frame.events.kind,new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event","event",301435442),event_v], null)], null));

try{try{return mranderson048.re_frame.v0v10v2.re_frame.interceptor.execute.call(null,event_v,interceptors);
}finally {if(mranderson048.re_frame.v0v10v2.re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__29992__auto___30045 = mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null);
var duration__29993__auto___30046 = (end__29992__auto___30045 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_));
var seq__30033_30047 = cljs.core.seq.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace.trace_cbs));
var chunk__30034_30048 = null;
var count__30035_30049 = (0);
var i__30036_30050 = (0);
while(true){
if((i__30036_30050 < count__30035_30049)){
var vec__30037_30051 = cljs.core._nth.call(null,chunk__30034_30048,i__30036_30050);
var k__29994__auto___30052 = cljs.core.nth.call(null,vec__30037_30051,(0),null);
var cb__29995__auto___30053 = cljs.core.nth.call(null,vec__30037_30051,(1),null);
try{cb__29995__auto___30053.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__29993__auto___30046,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e30040){if((e30040 instanceof java.lang.Exception)){
var e__29996__auto___30054 = e30040;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__29994__auto___30052,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__29996__auto___30054);
} else {
throw e30040;

}
}

var G__30055 = seq__30033_30047;
var G__30056 = chunk__30034_30048;
var G__30057 = count__30035_30049;
var G__30058 = (i__30036_30050 + (1));
seq__30033_30047 = G__30055;
chunk__30034_30048 = G__30056;
count__30035_30049 = G__30057;
i__30036_30050 = G__30058;
continue;
} else {
var temp__4657__auto___30059 = cljs.core.seq.call(null,seq__30033_30047);
if(temp__4657__auto___30059){
var seq__30033_30060__$1 = temp__4657__auto___30059;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30033_30060__$1)){
var c__4319__auto___30061 = cljs.core.chunk_first.call(null,seq__30033_30060__$1);
var G__30062 = cljs.core.chunk_rest.call(null,seq__30033_30060__$1);
var G__30063 = c__4319__auto___30061;
var G__30064 = cljs.core.count.call(null,c__4319__auto___30061);
var G__30065 = (0);
seq__30033_30047 = G__30062;
chunk__30034_30048 = G__30063;
count__30035_30049 = G__30064;
i__30036_30050 = G__30065;
continue;
} else {
var vec__30041_30066 = cljs.core.first.call(null,seq__30033_30060__$1);
var k__29994__auto___30067 = cljs.core.nth.call(null,vec__30041_30066,(0),null);
var cb__29995__auto___30068 = cljs.core.nth.call(null,vec__30041_30066,(1),null);
try{cb__29995__auto___30068.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__29993__auto___30046,new cljs.core.Keyword(null,"end","end",-268185958),mranderson048.re_frame.v0v10v2.re_frame.interop.now.call(null))], null));
}catch (e30044){if((e30044 instanceof java.lang.Exception)){
var e__29996__auto___30069 = e30044;
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"Error thrown from trace cb",k__29994__auto___30067,"while storing",mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_,e__29996__auto___30069);
} else {
throw e30044;

}
}

var G__30070 = cljs.core.next.call(null,seq__30033_30060__$1);
var G__30071 = null;
var G__30072 = (0);
var G__30073 = (0);
seq__30033_30047 = G__30070;
chunk__30034_30048 = G__30071;
count__30035_30049 = G__30072;
i__30036_30050 = G__30073;
continue;
}
} else {
}
}
break;
}
} else {
}
}}finally {mranderson048.re_frame.v0v10v2.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_30032;
}} else {
return mranderson048.re_frame.v0v10v2.re_frame.interceptor.execute.call(null,event_v,interceptors);
}
}finally {mranderson048.re_frame.v0v10v2.re_frame.events._STAR_handling_STAR_ = _STAR_handling_STAR_30031;
}}
} else {
return null;
}
});

//# sourceMappingURL=events.js.map?rel=1531954908023
