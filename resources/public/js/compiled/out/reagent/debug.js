// Compiled by ClojureScript 1.10.238 {}
goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = cljs.core.atom.call(null,null);
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__21626__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21626 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21627__i = 0, G__21627__a = new Array(arguments.length -  0);
while (G__21627__i < G__21627__a.length) {G__21627__a[G__21627__i] = arguments[G__21627__i + 0]; ++G__21627__i;}
  args = new cljs.core.IndexedSeq(G__21627__a,0,null);
} 
return G__21626__delegate.call(this,args);};
G__21626.cljs$lang$maxFixedArity = 0;
G__21626.cljs$lang$applyTo = (function (arglist__21628){
var args = cljs.core.seq(arglist__21628);
return G__21626__delegate(args);
});
G__21626.cljs$core$IFn$_invoke$arity$variadic = G__21626__delegate;
return G__21626;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__21629__delegate = function (args){
return cljs.core.swap_BANG_.call(null,reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.apply.call(null,cljs.core.str,args));
};
var G__21629 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__21630__i = 0, G__21630__a = new Array(arguments.length -  0);
while (G__21630__i < G__21630__a.length) {G__21630__a[G__21630__i] = arguments[G__21630__i + 0]; ++G__21630__i;}
  args = new cljs.core.IndexedSeq(G__21630__a,0,null);
} 
return G__21629__delegate.call(this,args);};
G__21629.cljs$lang$maxFixedArity = 0;
G__21629.cljs$lang$applyTo = (function (arglist__21631){
var args = cljs.core.seq(arglist__21631);
return G__21629__delegate(args);
});
G__21629.cljs$core$IFn$_invoke$arity$variadic = G__21629__delegate;
return G__21629;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

f.call(null);

var warns = cljs.core.deref.call(null,reagent.debug.warnings);
cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null);

reagent.debug.tracking = false;

return warns;
});

//# sourceMappingURL=debug.js.map?rel=1531954882090
