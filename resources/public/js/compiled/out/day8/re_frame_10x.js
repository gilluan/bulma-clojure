// Compiled by ClojureScript 1.10.238 {}
goog.provide('day8.re_frame_10x');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.styles');
goog.require('day8.re_frame_10x.view.container');
goog.require('day8.re_frame_10x.subs');
goog.require('day8.re_frame_10x.events');
goog.require('day8.re_frame_10x.db');
goog.require('re_frame.trace');
goog.require('clojure.string');
goog.require('reagent.interop');
goog.require('reagent.impl.util');
goog.require('reagent.impl.component');
goog.require('reagent.impl.batching');
goog.require('reagent.ratom');
goog.require('goog.object');
goog.require('re_frame.interop');
goog.require('mranderson048.re_frame.v0v10v2.re_frame.core');
goog.require('mranderson048.reagent.v0v7v0.reagent.core');

/** @define {boolean} */
goog.define("day8.re_frame_10x.debug_QMARK_",false);
day8.re_frame_10x.fiber_component_path = (function day8$re_frame_10x$fiber_component_path(fiber){
var name = (function (){var G__34312 = fiber;
var G__34312__$1 = (((G__34312 == null))?null:(G__34312["type"]));
if((G__34312__$1 == null)){
return null;
} else {
return (G__34312__$1["displayName"]);
}
})();
var parent = (function (){var G__34313 = fiber;
if((G__34313 == null)){
return null;
} else {
return (G__34313["return"]);
}
})();
var path = (function (){var G__34314 = parent;
var G__34314__$1 = (((G__34314 == null))?null:day8.re_frame_10x.fiber_component_path.call(null,G__34314));
if((G__34314__$1 == null)){
return null;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34314__$1)," > "].join('');
}
})();
var res = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
if(cljs.core.empty_QMARK_.call(null,res)){
return null;
} else {
return res;
}
});
day8.re_frame_10x.component_path = (function day8$re_frame_10x$component_path(c){
var temp__4655__auto__ = (function (){var G__34315 = c;
if((G__34315 == null)){
return null;
} else {
return (G__34315["_reactInternalFiber"]);
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var fiber = temp__4655__auto__;
return day8.re_frame_10x.fiber_component_path.call(null,fiber);
} else {
return reagent.impl.component.component_path.call(null,c);
}
});
day8.re_frame_10x.comp_name = (function day8$re_frame_10x$comp_name(c){
var n = (function (){var or__3922__auto__ = day8.re_frame_10x.component_path.call(null,c);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var G__34316 = c;
var G__34316__$1 = (((G__34316 == null))?null:G__34316.constructor);
if((G__34316__$1 == null)){
return null;
} else {
return reagent.impl.util.fun_name.call(null,G__34316__$1);
}
}
})();
if(!(cljs.core.empty_QMARK_.call(null,n))){
return n;
} else {
return "";
}
});
day8.re_frame_10x.operation_name = cljs.core.memoize.call(null,(function (component){
return cljs.core.last.call(null,clojure.string.split.call(null,day8.re_frame_10x.component_path.call(null,component),/ > /));
}));
day8.re_frame_10x.static_fns = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"render","render",-1408033454),(function day8$re_frame_10x$mp_render(){
var c = this;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_34317 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"render","render",-1408033454),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component-path","component-path",-1014945685),day8.re_frame_10x.component_path.call(null,c)], null),new cljs.core.Keyword(null,"operation","operation",-1267664310),day8.re_frame_10x.operation_name.call(null,c)], null));

try{try{if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.do_render.call(null,c);
} else {
var rat = (c["cljsRatom"]);
var _ = reagent.impl.batching.mark_rendered.call(null,c);
var res = (((rat == null))?reagent.ratom.run_in_reaction.call(null,((function (rat,_,_STAR_current_trace_STAR_34317,c){
return (function (){
return reagent.impl.component.do_render.call(null,c);
});})(rat,_,_STAR_current_trace_STAR_34317,c))
,c,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts):rat._run(false));
var cljs_ratom = (c["cljsRatom"]);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__22327__auto___34318 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.call(null,re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.call(null,re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__22327__auto___34318;

} else {
}

return res;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__22325__auto___34319 = re_frame.interop.now.call(null);
var duration__22326__auto___34320 = (end__22325__auto___34319 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22326__auto___34320,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__22325__auto___34319);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_34317;
}} else {
if(reagent.impl.util._STAR_non_reactive_STAR_){
return reagent.impl.component.do_render.call(null,c);
} else {
var rat = (c["cljsRatom"]);
var _ = reagent.impl.batching.mark_rendered.call(null,c);
var res = (((rat == null))?reagent.ratom.run_in_reaction.call(null,((function (rat,_,c){
return (function (){
return reagent.impl.component.do_render.call(null,c);
});})(rat,_,c))
,c,"cljsRatom",reagent.impl.batching.queue_render,reagent.impl.component.rat_opts):rat._run(false));
var cljs_ratom = (c["cljsRatom"]);
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var new_trace__22327__auto___34321 = cljs.core.merge.call(null,cljs.core.update.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.merge,new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.call(null,re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null))),cljs.core.dissoc.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,cljs_ratom),new cljs.core.Keyword(null,"input-signals","input-signals",563633497),(cljs.core.truth_(cljs_ratom)?cljs.core.map.call(null,re_frame.interop.reagent_id,goog.object.get(cljs_ratom,"watching",new cljs.core.Keyword(null,"none","none",1333468478))):null)], null)], null),new cljs.core.Keyword(null,"tags","tags",1771418977)));
re_frame.trace._STAR_current_trace_STAR_ = new_trace__22327__auto___34321;

} else {
}

return res;
}
}
})], null);
if(typeof day8.re_frame_10x.real_custom_wrapper !== 'undefined'){
} else {
day8.re_frame_10x.real_custom_wrapper = reagent.impl.component.custom_wrapper;
}
if(typeof day8.re_frame_10x.real_next_tick !== 'undefined'){
} else {
day8.re_frame_10x.real_next_tick = reagent.impl.batching.next_tick;
}
if(typeof day8.re_frame_10x.real_schedule !== 'undefined'){
} else {
day8.re_frame_10x.real_schedule = reagent.impl.batching.schedule;
}
if(typeof day8.re_frame_10x.do_after_render_trace_scheduled_QMARK_ !== 'undefined'){
} else {
day8.re_frame_10x.do_after_render_trace_scheduled_QMARK_ = cljs.core.atom.call(null,false);
}
day8.re_frame_10x.monkey_patch_reagent = (function day8$re_frame_10x$monkey_patch_reagent(){
reagent.impl.component.static_fns = day8.re_frame_10x.static_fns;

reagent.impl.component.custom_wrapper = (function (key,f){
var G__34322 = key;
var G__34322__$1 = (((G__34322 instanceof cljs.core.Keyword))?G__34322.fqn:null);
switch (G__34322__$1) {
case "componentWillUnmount":
return ((function (G__34322,G__34322__$1){
return (function (){
var c = this;
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_34323_34330 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),key,new cljs.core.Keyword(null,"operation","operation",-1267664310),cljs.core.last.call(null,clojure.string.split.call(null,day8.re_frame_10x.comp_name.call(null,c),/ > /)),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-path","component-path",-1014945685),day8.re_frame_10x.component_path.call(null,c),new cljs.core.Keyword(null,"reaction","reaction",490869788),re_frame.interop.reagent_id.call(null,(c["cljsRatom"]))], null)], null));

try{try{}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__22325__auto___34331 = re_frame.interop.now.call(null);
var duration__22326__auto___34332 = (end__22325__auto___34331 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22326__auto___34332,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__22325__auto___34331);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_34323_34330;
}} else {
}

return day8.re_frame_10x.real_custom_wrapper.call(null,key,f).call(c,c);
});
;})(G__34322,G__34322__$1))

break;
default:
return day8.re_frame_10x.real_custom_wrapper.call(null,key,f);

}
});

return reagent.impl.batching.next_tick = (function (f){
return day8.re_frame_10x.real_next_tick.call(null,(function (){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_34324 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"raf","raf",-1295410152)], null));

try{try{f.call(null);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_34325_34333 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"raf-end","raf-end",-220596864)], null));

try{try{}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__22325__auto___34334 = re_frame.interop.now.call(null);
var duration__22326__auto___34335 = (end__22325__auto___34334 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22326__auto___34335,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__22325__auto___34334);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_34325_34333;
}} else {
}

if(reagent.impl.batching.render_queue.scheduled_QMARK_ === false){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_34326 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__22325__auto___34336 = re_frame.interop.now.call(null);
var duration__22326__auto___34337 = (end__22325__auto___34336 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22326__auto___34337,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__22325__auto___34336);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_34326;
}} else {
return null;
}
} else {
return null;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__22325__auto___34338 = re_frame.interop.now.call(null);
var duration__22326__auto___34339 = (end__22325__auto___34338 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22326__auto___34339,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__22325__auto___34338);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_34324;
}} else {
f.call(null);

if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_34327_34340 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword(null,"raf-end","raf-end",-220596864)], null));

try{try{}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__22325__auto___34341 = re_frame.interop.now.call(null);
var duration__22326__auto___34342 = (end__22325__auto___34341 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22326__auto___34342,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__22325__auto___34341);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_34327_34340;
}} else {
}

if(reagent.impl.batching.render_queue.scheduled_QMARK_ === false){
if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var _STAR_current_trace_STAR_34328 = re_frame.trace._STAR_current_trace_STAR_;
re_frame.trace._STAR_current_trace_STAR_ = re_frame.trace.start_trace.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("reagent","quiescent","reagent/quiescent",-16138681)], null));

try{try{return null;
}finally {if(re_frame.trace.is_trace_enabled_QMARK_.call(null)){
var end__22325__auto___34343 = re_frame.interop.now.call(null);
var duration__22326__auto___34344 = (end__22325__auto___34343 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.call(null,re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.call(null,re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__22326__auto___34344,new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now.call(null)));

re_frame.trace.run_tracing_callbacks_BANG_.call(null,end__22325__auto___34343);
} else {
}
}}finally {re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR_34328;
}} else {
return null;
}
} else {
return null;
}
}
}));
});
});
/**
 * Sets up any initial state that needs to be there for tracing. Does not enable tracing.
 */
day8.re_frame_10x.init_tracing_BANG_ = (function day8$re_frame_10x$init_tracing_BANG_(){
return day8.re_frame_10x.monkey_patch_reagent.call(null);
});
day8.re_frame_10x.resizer_style = (function day8$re_frame_10x$resizer_style(draggable_area){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(2),new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((- (draggable_area / (2)))),"px"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),"10px",new cljs.core.Keyword(null,"height","height",1025178622),"100%",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"col-resize"], null);
});
day8.re_frame_10x.ease_transition = "left 0.2s ease-out, top 0.2s ease-out, width 0.2s ease-out, height 0.2s ease-out";
day8.re_frame_10x.devtools_outer = (function day8$re_frame_10x$devtools_outer(opts){
var position = mranderson048.reagent.v0v7v0.reagent.core.atom.call(null,new cljs.core.Keyword(null,"right","right",-452581833));
var panel_width_PERCENT_ = mranderson048.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null));
var showing_QMARK_ = mranderson048.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945)], null));
var dragging_QMARK_ = mranderson048.reagent.v0v7v0.reagent.core.atom.call(null,false);
var pin_to_bottom_QMARK_ = mranderson048.reagent.v0v7v0.reagent.core.atom.call(null,true);
var selected_tab = mranderson048.re_frame.v0v10v2.re_frame.core.subscribe.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089)], null));
var window_width = mranderson048.reagent.v0v7v0.reagent.core.atom.call(null,window.innerWidth);
var handle_window_resize = (function (){
mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180),window.innerWidth], null));

return ((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width){
return (function (e){
var window_width_val = window.innerWidth;
mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180),window_width_val], null));

return cljs.core.reset_BANG_.call(null,window_width,window_width_val);
});
;})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width))
})()
;
var handle_keys = ((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize){
return (function (e){
var combo_key_QMARK_ = (function (){var or__3922__auto__ = e.ctrlKey;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = e.metaKey;
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return e.altKey;
}
}
})();
var tag_name = e.target.tagName;
var key = e.key;
var entering_input_QMARK_ = cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["SELECT",null,"INPUT",null,"TEXTAREA",null], null), null),tag_name);
if(cljs.core.truth_((function (){var and__3911__auto__ = !(entering_input_QMARK_);
if(and__3911__auto__){
return combo_key_QMARK_;
} else {
return and__3911__auto__;
}
})())){
if(cljs.core.truth_((function (){var and__3911__auto__ = cljs.core._EQ_.call(null,key,"h");
if(and__3911__auto__){
return e.ctrlKey;
} else {
return and__3911__auto__;
}
})())){
mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","user-toggle-panel","settings/user-toggle-panel",322795573)], null));

return e.preventDefault();
} else {
return null;
}
} else {
return null;
}
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize))
;
var handle_mousemove = ((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys){
return (function (e){
if(cljs.core.truth_(cljs.core.deref.call(null,dragging_QMARK_))){
var x = e.clientX;
var y = e.clientY;
var new_window_width = window.innerWidth;
e.preventDefault();

mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808),((new_window_width - x) / new_window_width)], null));

return cljs.core.reset_BANG_.call(null,window_width,new_window_width);
} else {
return null;
}
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys))
;
var handle_mouse_up = ((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove){
return (function (e){
return cljs.core.reset_BANG_.call(null,dragging_QMARK_,false);
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove))
;
return mranderson048.reagent.v0v7v0.reagent.core.create_class.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up){
return (function (){
window.addEventListener("keydown",handle_keys);

window.addEventListener("mousemove",handle_mousemove);

window.addEventListener("mouseup",handle_mouse_up);

return window.addEventListener("resize",handle_window_resize);
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up))
,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up){
return (function (){
window.removeEventListener("keydown",handle_keys);

window.removeEventListener("mousemove",handle_mousemove);

window.removeEventListener("mouseup",handle_mouse_up);

return window.removeEventListener("resize",handle_window_resize);
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up))
,new cljs.core.Keyword(null,"display-name","display-name",694513143),"devtools outer",new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),((function (position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up){
return (function (){
var draggable_area = (10);
var left = (cljs.core.truth_(cljs.core.deref.call(null,showing_QMARK_))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * ((1) - cljs.core.deref.call(null,panel_width_PERCENT_)))),"%"].join(''):[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,window_width)),"px"].join(''));
var transition = (cljs.core.truth_(cljs.core.deref.call(null,dragging_QMARK_))?"":day8.re_frame_10x.ease_transition);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-wrapper","div.panel-wrapper",-807046921),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"width","width",-384071477),"0px",new cljs.core.Keyword(null,"height","height",1025178622),"0px",new cljs.core.Keyword(null,"top","top",-1856271961),"0px",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(99999999)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel","div.panel",-1677992199),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],["rgba(0, 0, 0, 0.3) 0px 0px 4px",transition,"0px",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(((100) * cljs.core.deref.call(null,panel_width_PERCENT_))),"%"].join(''),"white",(1),"flex","fixed","100%",left])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.panel-resizer","div.panel-resizer",1762174164),(cljs.core.truth_(cljs.core.deref.call(null,showing_QMARK_))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),day8.re_frame_10x.resizer_style.call(null,draggable_area),new cljs.core.Keyword(null,"on-mouse-down","on-mouse-down",1147755470),((function (draggable_area,left,transition,position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up){
return (function (){
return cljs.core.reset_BANG_.call(null,dragging_QMARK_,true);
});})(draggable_area,left,transition,position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up))
], null):null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.view.container.devtools_inner,opts], null)], null)], null);
});})(position,panel_width_PERCENT_,showing_QMARK_,dragging_QMARK_,pin_to_bottom_QMARK_,selected_tab,window_width,handle_window_resize,handle_keys,handle_mousemove,handle_mouse_up))
], null));
});
day8.re_frame_10x.panel_div = (function day8$re_frame_10x$panel_div(){
var id = "--re-frame-10x--";
var panel = document.getElementById(id);
if(cljs.core.truth_(panel)){
return panel;
} else {
var new_panel = document.createElement("div");
new_panel.setAttribute("id",id);

document.body.appendChild(new_panel);

window.focus(new_panel);

return new_panel;
}
});
day8.re_frame_10x.inject_devtools_BANG_ = (function day8$re_frame_10x$inject_devtools_BANG_(){
day8.re_frame_10x.styles.inject_trace_styles.call(null,document);

return mranderson048.reagent.v0v7v0.reagent.core.render.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [day8.re_frame_10x.devtools_outer,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"panel-type","panel-type",-1211695095),new cljs.core.Keyword(null,"inline","inline",1399884222),new cljs.core.Keyword(null,"debug?","debug?",-1831756173),day8.re_frame_10x.debug_QMARK_], null)], null),day8.re_frame_10x.panel_div.call(null));
});
day8.re_frame_10x.traced_result = (function day8$re_frame_10x$traced_result(trace_id,fragment_id){
var trace = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__34345_SHARP_){
return cljs.core._EQ_.call(null,trace_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__34345_SHARP_));
}),cljs.core.get_in.call(null,cljs.core.deref.call(null,mranderson048.re_frame.v0v10v2.re_frame.db.app_db),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641)], null))));
return cljs.core.get_in.call(null,trace,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142),fragment_id,new cljs.core.Keyword(null,"result","result",1415092211)], null));
});
day8.re_frame_10x.init_db_BANG_ = (function day8$re_frame_10x$init_db_BANG_(){
return day8.re_frame_10x.db.init_db.call(null,day8.re_frame_10x.debug_QMARK_);
});
day8.re_frame_10x.factory_reset_BANG_ = (function day8$re_frame_10x$factory_reset_BANG_(){
return mranderson048.re_frame.v0v10v2.re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","factory-reset","settings/factory-reset",1863855805)], null));
});
goog.exportSymbol('day8.re_frame_10x.factory_reset_BANG_', day8.re_frame_10x.factory_reset_BANG_);

//# sourceMappingURL=re_frame_10x.js.map?rel=1531954926259
