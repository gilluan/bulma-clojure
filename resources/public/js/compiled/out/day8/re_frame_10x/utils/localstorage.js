// Compiled by ClojureScript 1.10.238 {}
goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.utils.localstorage.safe_prefix),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__33587 = arguments.length;
switch (G__33587) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.call(null,key,null);
});

day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.call(null,value);
}
});

day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2;

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key.call(null,key),cljs.core.pr_str.call(null,value));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__33589 = cljs.core.seq.call(null,Object.keys(localStorage));
var chunk__33590 = null;
var count__33591 = (0);
var i__33592 = (0);
while(true){
if((i__33592 < count__33591)){
var k = cljs.core._nth.call(null,chunk__33590,i__33592);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__33593 = seq__33589;
var G__33594 = chunk__33590;
var G__33595 = count__33591;
var G__33596 = (i__33592 + (1));
seq__33589 = G__33593;
chunk__33590 = G__33594;
count__33591 = G__33595;
i__33592 = G__33596;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33589);
if(temp__4657__auto__){
var seq__33589__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33589__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__33589__$1);
var G__33597 = cljs.core.chunk_rest.call(null,seq__33589__$1);
var G__33598 = c__4319__auto__;
var G__33599 = cljs.core.count.call(null,c__4319__auto__);
var G__33600 = (0);
seq__33589 = G__33597;
chunk__33590 = G__33598;
count__33591 = G__33599;
i__33592 = G__33600;
continue;
} else {
var k = cljs.core.first.call(null,seq__33589__$1);
if(clojure.string.starts_with_QMARK_.call(null,k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__33601 = cljs.core.next.call(null,seq__33589__$1);
var G__33602 = null;
var G__33603 = (0);
var G__33604 = (0);
seq__33589 = G__33601;
chunk__33590 = G__33602;
count__33591 = G__33603;
i__33592 = G__33604;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=localstorage.js.map?rel=1531954922006
