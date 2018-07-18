// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.re_frame.v0v10v2.re_frame.fx');
goog.require('cljs.core');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.router');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.db');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interceptor');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.events');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.registrar');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.loggers');
mranderson048.re_frame.v0v10v2.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_(mranderson048.re_frame.v0v10v2.re_frame.registrar.kinds.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind))){
} else {
throw (new Error("Assert failed: (mranderson048.re-frame.v0v10v2.re-frame.registrar/kinds kind)"));
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
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx = (function mranderson048$re_frame$v0v10v2$re_frame$fx$reg_fx(id,handler){
return mranderson048.re_frame.v0v10v2.re_frame.registrar.register_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,id,handler);
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
mranderson048.re_frame.v0v10v2.re_frame.fx.do_fx = mranderson048.re_frame.v0v10v2.re_frame.interceptor.__GT_interceptor.call(null,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function mranderson048$re_frame$v0v10v2$re_frame$fx$do_fx_after(context){
var seq__30438 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__30439 = null;
var count__30440 = (0);
var i__30441 = (0);
while(true){
if((i__30441 < count__30440)){
var vec__30442 = cljs.core._nth.call(null,chunk__30439,i__30441);
var effect_key = cljs.core.nth.call(null,vec__30442,(0),null);
var effect_value = cljs.core.nth.call(null,vec__30442,(1),null);
var temp__4655__auto___30448 = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___30448)){
var effect_fn_30449 = temp__4655__auto___30448;
effect_fn_30449.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__30450 = seq__30438;
var G__30451 = chunk__30439;
var G__30452 = count__30440;
var G__30453 = (i__30441 + (1));
seq__30438 = G__30450;
chunk__30439 = G__30451;
count__30440 = G__30452;
i__30441 = G__30453;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30438);
if(temp__4657__auto__){
var seq__30438__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30438__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30438__$1);
var G__30454 = cljs.core.chunk_rest.call(null,seq__30438__$1);
var G__30455 = c__4319__auto__;
var G__30456 = cljs.core.count.call(null,c__4319__auto__);
var G__30457 = (0);
seq__30438 = G__30454;
chunk__30439 = G__30455;
count__30440 = G__30456;
i__30441 = G__30457;
continue;
} else {
var vec__30445 = cljs.core.first.call(null,seq__30438__$1);
var effect_key = cljs.core.nth.call(null,vec__30445,(0),null);
var effect_value = cljs.core.nth.call(null,vec__30445,(1),null);
var temp__4655__auto___30458 = mranderson048.re_frame.v0v10v2.re_frame.registrar.get_handler.call(null,mranderson048.re_frame.v0v10v2.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__4655__auto___30458)){
var effect_fn_30459 = temp__4655__auto___30458;
effect_fn_30459.call(null,effect_value);
} else {
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: no handler registered for effect: \"",effect_key,"\". Ignoring.");
}


var G__30460 = cljs.core.next.call(null,seq__30438__$1);
var G__30461 = null;
var G__30462 = (0);
var G__30463 = (0);
seq__30438 = G__30460;
chunk__30439 = G__30461;
count__30440 = G__30462;
i__30441 = G__30463;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__30464 = cljs.core.seq.call(null,value);
var chunk__30465 = null;
var count__30466 = (0);
var i__30467 = (0);
while(true){
if((i__30467 < count__30466)){
var map__30468 = cljs.core._nth.call(null,chunk__30465,i__30467);
var map__30468__$1 = ((((!((map__30468 == null)))?(((((map__30468.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30468.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30468):map__30468);
var effect = map__30468__$1;
var ms = cljs.core.get.call(null,map__30468__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__30468__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson048.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__30464,chunk__30465,count__30466,i__30467,map__30468,map__30468__$1,effect,ms,dispatch){
return (function (){
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__30464,chunk__30465,count__30466,i__30467,map__30468,map__30468__$1,effect,ms,dispatch))
,ms);
}


var G__30472 = seq__30464;
var G__30473 = chunk__30465;
var G__30474 = count__30466;
var G__30475 = (i__30467 + (1));
seq__30464 = G__30472;
chunk__30465 = G__30473;
count__30466 = G__30474;
i__30467 = G__30475;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30464);
if(temp__4657__auto__){
var seq__30464__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30464__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30464__$1);
var G__30476 = cljs.core.chunk_rest.call(null,seq__30464__$1);
var G__30477 = c__4319__auto__;
var G__30478 = cljs.core.count.call(null,c__4319__auto__);
var G__30479 = (0);
seq__30464 = G__30476;
chunk__30465 = G__30477;
count__30466 = G__30478;
i__30467 = G__30479;
continue;
} else {
var map__30470 = cljs.core.first.call(null,seq__30464__$1);
var map__30470__$1 = ((((!((map__30470 == null)))?(((((map__30470.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30470.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30470):map__30470);
var effect = map__30470__$1;
var ms = cljs.core.get.call(null,map__30470__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.call(null,map__30470__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_.call(null,dispatch)) || (!(typeof ms === 'number')))){
mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-later value:",effect);
} else {
mranderson048.re_frame.v0v10v2.re_frame.interop.set_timeout_BANG_.call(null,((function (seq__30464,chunk__30465,count__30466,i__30467,map__30470,map__30470__$1,effect,ms,dispatch,seq__30464__$1,temp__4657__auto__){
return (function (){
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,dispatch);
});})(seq__30464,chunk__30465,count__30466,i__30467,map__30470,map__30470__$1,effect,ms,dispatch,seq__30464__$1,temp__4657__auto__))
,ms);
}


var G__30480 = cljs.core.next.call(null,seq__30464__$1);
var G__30481 = null;
var G__30482 = (0);
var G__30483 = (0);
seq__30464 = G__30480;
chunk__30465 = G__30481;
count__30466 = G__30482;
i__30467 = G__30483;
continue;
}
} else {
return null;
}
}
break;
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if(!(cljs.core.vector_QMARK_.call(null,value))){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value);
} else {
return mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,value);
}
}));
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if(!(cljs.core.sequential_QMARK_.call(null,value))){
return mranderson048.re_frame.v0v10v2.re_frame.loggers.console.call(null,new cljs.core.Keyword(null,"error","error",-978969032),"re-frame: ignoring bad :dispatch-n value. Expected a collection, got got:",value);
} else {
var seq__30484 = cljs.core.seq.call(null,cljs.core.remove.call(null,cljs.core.nil_QMARK_,value));
var chunk__30485 = null;
var count__30486 = (0);
var i__30487 = (0);
while(true){
if((i__30487 < count__30486)){
var event = cljs.core._nth.call(null,chunk__30485,i__30487);
mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__30488 = seq__30484;
var G__30489 = chunk__30485;
var G__30490 = count__30486;
var G__30491 = (i__30487 + (1));
seq__30484 = G__30488;
chunk__30485 = G__30489;
count__30486 = G__30490;
i__30487 = G__30491;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30484);
if(temp__4657__auto__){
var seq__30484__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30484__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30484__$1);
var G__30492 = cljs.core.chunk_rest.call(null,seq__30484__$1);
var G__30493 = c__4319__auto__;
var G__30494 = cljs.core.count.call(null,c__4319__auto__);
var G__30495 = (0);
seq__30484 = G__30492;
chunk__30485 = G__30493;
count__30486 = G__30494;
i__30487 = G__30495;
continue;
} else {
var event = cljs.core.first.call(null,seq__30484__$1);
mranderson048.re_frame.v0v10v2.re_frame.router.dispatch.call(null,event);


var G__30496 = cljs.core.next.call(null,seq__30484__$1);
var G__30497 = null;
var G__30498 = (0);
var G__30499 = (0);
seq__30484 = G__30496;
chunk__30485 = G__30497;
count__30486 = G__30498;
i__30487 = G__30499;
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
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.call(null,mranderson048.re_frame.v0v10v2.re_frame.registrar.clear_handlers,mranderson048.re_frame.v0v10v2.re_frame.events.kind);
if(cljs.core.sequential_QMARK_.call(null,value)){
var seq__30500 = cljs.core.seq.call(null,value);
var chunk__30501 = null;
var count__30502 = (0);
var i__30503 = (0);
while(true){
if((i__30503 < count__30502)){
var event = cljs.core._nth.call(null,chunk__30501,i__30503);
clear_event.call(null,event);


var G__30504 = seq__30500;
var G__30505 = chunk__30501;
var G__30506 = count__30502;
var G__30507 = (i__30503 + (1));
seq__30500 = G__30504;
chunk__30501 = G__30505;
count__30502 = G__30506;
i__30503 = G__30507;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30500);
if(temp__4657__auto__){
var seq__30500__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30500__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__30500__$1);
var G__30508 = cljs.core.chunk_rest.call(null,seq__30500__$1);
var G__30509 = c__4319__auto__;
var G__30510 = cljs.core.count.call(null,c__4319__auto__);
var G__30511 = (0);
seq__30500 = G__30508;
chunk__30501 = G__30509;
count__30502 = G__30510;
i__30503 = G__30511;
continue;
} else {
var event = cljs.core.first.call(null,seq__30500__$1);
clear_event.call(null,event);


var G__30512 = cljs.core.next.call(null,seq__30500__$1);
var G__30513 = null;
var G__30514 = (0);
var G__30515 = (0);
seq__30500 = G__30512;
chunk__30501 = G__30513;
count__30502 = G__30514;
i__30503 = G__30515;
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
mranderson048.re_frame.v0v10v2.re_frame.fx.reg_fx.call(null,new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if(!((cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db) === value))){
return cljs.core.reset_BANG_.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=fx.js.map?rel=1531954908850
