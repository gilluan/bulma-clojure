// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.reagent.v0v7v0.reagent.debug');
goog.require('cljs.core');
mranderson048.reagent.v0v7v0.reagent.debug.has_console = typeof console !== 'undefined';
mranderson048.reagent.v0v7v0.reagent.debug.tracking = false;
if(typeof mranderson048.reagent.v0v7v0.reagent.debug.warnings !== 'undefined'){
} else {
mranderson048.reagent.v0v7v0.reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof mranderson048.reagent.v0v7v0.reagent.debug.track_console !== 'undefined'){
} else {
mranderson048.reagent.v0v7v0.reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__29474__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29474 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29475__i = 0, G__29475__a = new Array(arguments.length -  0);
while (G__29475__i < G__29475__a.length) {G__29475__a[G__29475__i] = arguments[G__29475__i + 0]; ++G__29475__i;}
  args = new cljs.core.IndexedSeq(G__29475__a,0,null);
} 
return G__29474__delegate.call(this,args);};
G__29474.cljs$lang$maxFixedArity = 0;
G__29474.cljs$lang$applyTo = (function (arglist__29476){
var args = cljs.core.seq(arglist__29476);
return G__29474__delegate(args);
});
G__29474.cljs$core$IFn$_invoke$arity$variadic = G__29474__delegate;
return G__29474;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__29477__delegate = function (args){
return cljs.core.swap_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__29477 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29478__i = 0, G__29478__a = new Array(arguments.length -  0);
while (G__29478__i < G__29478__a.length) {G__29478__a[G__29478__i] = arguments[G__29478__i + 0]; ++G__29478__i;}
  args = new cljs.core.IndexedSeq(G__29478__a,0,null);
} 
return G__29477__delegate.call(this,args);};
G__29477.cljs$lang$maxFixedArity = 0;
G__29477.cljs$lang$applyTo = (function (arglist__29479){
var args = cljs.core.seq(arglist__29479);
return G__29477__delegate(args);
});
G__29477.cljs$core$IFn$_invoke$arity$variadic = G__29477__delegate;
return G__29477;
})()
;})(o))
;

return o;
})();
}
mranderson048.reagent.v0v7v0.reagent.debug.track_warnings = (function mranderson048$reagent$v0v7v0$reagent$debug$track_warnings(f){
mranderson048.reagent.v0v7v0.reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,mranderson048.reagent.v0v7v0.reagent.debug.warnings,null);

mranderson048.reagent.v0v7v0.reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1531954905367
