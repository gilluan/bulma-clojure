// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__3922__auto__ = ((cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && ((((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string'))) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372))));
if(or__3922__auto__){
return or__3922__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__3922__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37311_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37311_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__37312 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37313 = null;
var count__37314 = (0);
var i__37315 = (0);
while(true){
if((i__37315 < count__37314)){
var n = cljs.core._nth.call(null,chunk__37313,i__37315);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__37316 = seq__37312;
var G__37317 = chunk__37313;
var G__37318 = count__37314;
var G__37319 = (i__37315 + (1));
seq__37312 = G__37316;
chunk__37313 = G__37317;
count__37314 = G__37318;
i__37315 = G__37319;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37312);
if(temp__4657__auto__){
var seq__37312__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37312__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__37312__$1);
var G__37320 = cljs.core.chunk_rest.call(null,seq__37312__$1);
var G__37321 = c__4319__auto__;
var G__37322 = cljs.core.count.call(null,c__4319__auto__);
var G__37323 = (0);
seq__37312 = G__37320;
chunk__37313 = G__37321;
count__37314 = G__37322;
i__37315 = G__37323;
continue;
} else {
var n = cljs.core.first.call(null,seq__37312__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);


var G__37324 = cljs.core.next.call(null,seq__37312__$1);
var G__37325 = null;
var G__37326 = (0);
var G__37327 = (0);
seq__37312 = G__37324;
chunk__37313 = G__37325;
count__37314 = G__37326;
i__37315 = G__37327;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__37328){
var vec__37329 = p__37328;
var _ = cljs.core.nth.call(null,vec__37329,(0),null);
var v = cljs.core.nth.call(null,vec__37329,(1),null);
var and__3911__auto__ = v;
if(cljs.core.truth_(and__3911__auto__)){
return v.call(null,dep);
} else {
return and__3911__auto__;
}
}),cljs.core.filter.call(null,(function (p__37332){
var vec__37333 = p__37332;
var k = cljs.core.nth.call(null,vec__37333,(0),null);
var v = cljs.core.nth.call(null,vec__37333,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__37345_37353 = cljs.core.seq.call(null,deps);
var chunk__37346_37354 = null;
var count__37347_37355 = (0);
var i__37348_37356 = (0);
while(true){
if((i__37348_37356 < count__37347_37355)){
var dep_37357 = cljs.core._nth.call(null,chunk__37346_37354,i__37348_37356);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_37357;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37357));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37357,(depth + (1)),state);
} else {
}


var G__37358 = seq__37345_37353;
var G__37359 = chunk__37346_37354;
var G__37360 = count__37347_37355;
var G__37361 = (i__37348_37356 + (1));
seq__37345_37353 = G__37358;
chunk__37346_37354 = G__37359;
count__37347_37355 = G__37360;
i__37348_37356 = G__37361;
continue;
} else {
var temp__4657__auto___37362 = cljs.core.seq.call(null,seq__37345_37353);
if(temp__4657__auto___37362){
var seq__37345_37363__$1 = temp__4657__auto___37362;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37345_37363__$1)){
var c__4319__auto___37364 = cljs.core.chunk_first.call(null,seq__37345_37363__$1);
var G__37365 = cljs.core.chunk_rest.call(null,seq__37345_37363__$1);
var G__37366 = c__4319__auto___37364;
var G__37367 = cljs.core.count.call(null,c__4319__auto___37364);
var G__37368 = (0);
seq__37345_37353 = G__37365;
chunk__37346_37354 = G__37366;
count__37347_37355 = G__37367;
i__37348_37356 = G__37368;
continue;
} else {
var dep_37369 = cljs.core.first.call(null,seq__37345_37363__$1);
if(cljs.core.truth_((function (){var and__3911__auto__ = dep_37369;
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_37369));
} else {
return and__3911__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_37369,(depth + (1)),state);
} else {
}


var G__37370 = cljs.core.next.call(null,seq__37345_37363__$1);
var G__37371 = null;
var G__37372 = (0);
var G__37373 = (0);
seq__37345_37353 = G__37370;
chunk__37346_37354 = G__37371;
count__37347_37355 = G__37372;
i__37348_37356 = G__37373;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37349){
var vec__37350 = p__37349;
var seq__37351 = cljs.core.seq.call(null,vec__37350);
var first__37352 = cljs.core.first.call(null,seq__37351);
var seq__37351__$1 = cljs.core.next.call(null,seq__37351);
var x = first__37352;
var xs = seq__37351__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37350,seq__37351,first__37352,seq__37351__$1,x,xs,get_deps__$1){
return (function (p1__37336_SHARP_){
return clojure.set.difference.call(null,p1__37336_SHARP_,x);
});})(vec__37350,seq__37351,first__37352,seq__37351__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__37374 = cljs.core.seq.call(null,provides);
var chunk__37375 = null;
var count__37376 = (0);
var i__37377 = (0);
while(true){
if((i__37377 < count__37376)){
var prov = cljs.core._nth.call(null,chunk__37375,i__37377);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37378_37386 = cljs.core.seq.call(null,requires);
var chunk__37379_37387 = null;
var count__37380_37388 = (0);
var i__37381_37389 = (0);
while(true){
if((i__37381_37389 < count__37380_37388)){
var req_37390 = cljs.core._nth.call(null,chunk__37379_37387,i__37381_37389);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37390,prov);


var G__37391 = seq__37378_37386;
var G__37392 = chunk__37379_37387;
var G__37393 = count__37380_37388;
var G__37394 = (i__37381_37389 + (1));
seq__37378_37386 = G__37391;
chunk__37379_37387 = G__37392;
count__37380_37388 = G__37393;
i__37381_37389 = G__37394;
continue;
} else {
var temp__4657__auto___37395 = cljs.core.seq.call(null,seq__37378_37386);
if(temp__4657__auto___37395){
var seq__37378_37396__$1 = temp__4657__auto___37395;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37378_37396__$1)){
var c__4319__auto___37397 = cljs.core.chunk_first.call(null,seq__37378_37396__$1);
var G__37398 = cljs.core.chunk_rest.call(null,seq__37378_37396__$1);
var G__37399 = c__4319__auto___37397;
var G__37400 = cljs.core.count.call(null,c__4319__auto___37397);
var G__37401 = (0);
seq__37378_37386 = G__37398;
chunk__37379_37387 = G__37399;
count__37380_37388 = G__37400;
i__37381_37389 = G__37401;
continue;
} else {
var req_37402 = cljs.core.first.call(null,seq__37378_37396__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37402,prov);


var G__37403 = cljs.core.next.call(null,seq__37378_37396__$1);
var G__37404 = null;
var G__37405 = (0);
var G__37406 = (0);
seq__37378_37386 = G__37403;
chunk__37379_37387 = G__37404;
count__37380_37388 = G__37405;
i__37381_37389 = G__37406;
continue;
}
} else {
}
}
break;
}


var G__37407 = seq__37374;
var G__37408 = chunk__37375;
var G__37409 = count__37376;
var G__37410 = (i__37377 + (1));
seq__37374 = G__37407;
chunk__37375 = G__37408;
count__37376 = G__37409;
i__37377 = G__37410;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37374);
if(temp__4657__auto__){
var seq__37374__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37374__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__37374__$1);
var G__37411 = cljs.core.chunk_rest.call(null,seq__37374__$1);
var G__37412 = c__4319__auto__;
var G__37413 = cljs.core.count.call(null,c__4319__auto__);
var G__37414 = (0);
seq__37374 = G__37411;
chunk__37375 = G__37412;
count__37376 = G__37413;
i__37377 = G__37414;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37374__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37382_37415 = cljs.core.seq.call(null,requires);
var chunk__37383_37416 = null;
var count__37384_37417 = (0);
var i__37385_37418 = (0);
while(true){
if((i__37385_37418 < count__37384_37417)){
var req_37419 = cljs.core._nth.call(null,chunk__37383_37416,i__37385_37418);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37419,prov);


var G__37420 = seq__37382_37415;
var G__37421 = chunk__37383_37416;
var G__37422 = count__37384_37417;
var G__37423 = (i__37385_37418 + (1));
seq__37382_37415 = G__37420;
chunk__37383_37416 = G__37421;
count__37384_37417 = G__37422;
i__37385_37418 = G__37423;
continue;
} else {
var temp__4657__auto___37424__$1 = cljs.core.seq.call(null,seq__37382_37415);
if(temp__4657__auto___37424__$1){
var seq__37382_37425__$1 = temp__4657__auto___37424__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37382_37425__$1)){
var c__4319__auto___37426 = cljs.core.chunk_first.call(null,seq__37382_37425__$1);
var G__37427 = cljs.core.chunk_rest.call(null,seq__37382_37425__$1);
var G__37428 = c__4319__auto___37426;
var G__37429 = cljs.core.count.call(null,c__4319__auto___37426);
var G__37430 = (0);
seq__37382_37415 = G__37427;
chunk__37383_37416 = G__37428;
count__37384_37417 = G__37429;
i__37385_37418 = G__37430;
continue;
} else {
var req_37431 = cljs.core.first.call(null,seq__37382_37425__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37431,prov);


var G__37432 = cljs.core.next.call(null,seq__37382_37425__$1);
var G__37433 = null;
var G__37434 = (0);
var G__37435 = (0);
seq__37382_37415 = G__37432;
chunk__37383_37416 = G__37433;
count__37384_37417 = G__37434;
i__37385_37418 = G__37435;
continue;
}
} else {
}
}
break;
}


var G__37436 = cljs.core.next.call(null,seq__37374__$1);
var G__37437 = null;
var G__37438 = (0);
var G__37439 = (0);
seq__37374 = G__37436;
chunk__37375 = G__37437;
count__37376 = G__37438;
i__37377 = G__37439;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__37440_37444 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37441_37445 = null;
var count__37442_37446 = (0);
var i__37443_37447 = (0);
while(true){
if((i__37443_37447 < count__37442_37446)){
var ns_37448 = cljs.core._nth.call(null,chunk__37441_37445,i__37443_37447);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37448);


var G__37449 = seq__37440_37444;
var G__37450 = chunk__37441_37445;
var G__37451 = count__37442_37446;
var G__37452 = (i__37443_37447 + (1));
seq__37440_37444 = G__37449;
chunk__37441_37445 = G__37450;
count__37442_37446 = G__37451;
i__37443_37447 = G__37452;
continue;
} else {
var temp__4657__auto___37453 = cljs.core.seq.call(null,seq__37440_37444);
if(temp__4657__auto___37453){
var seq__37440_37454__$1 = temp__4657__auto___37453;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37440_37454__$1)){
var c__4319__auto___37455 = cljs.core.chunk_first.call(null,seq__37440_37454__$1);
var G__37456 = cljs.core.chunk_rest.call(null,seq__37440_37454__$1);
var G__37457 = c__4319__auto___37455;
var G__37458 = cljs.core.count.call(null,c__4319__auto___37455);
var G__37459 = (0);
seq__37440_37444 = G__37456;
chunk__37441_37445 = G__37457;
count__37442_37446 = G__37458;
i__37443_37447 = G__37459;
continue;
} else {
var ns_37460 = cljs.core.first.call(null,seq__37440_37454__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37460);


var G__37461 = cljs.core.next.call(null,seq__37440_37454__$1);
var G__37462 = null;
var G__37463 = (0);
var G__37464 = (0);
seq__37440_37444 = G__37461;
chunk__37441_37445 = G__37462;
count__37442_37446 = G__37463;
i__37443_37447 = G__37464;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__3922__auto__ = goog.require__;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__37465__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37465 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37466__i = 0, G__37466__a = new Array(arguments.length -  0);
while (G__37466__i < G__37466__a.length) {G__37466__a[G__37466__i] = arguments[G__37466__i + 0]; ++G__37466__i;}
  args = new cljs.core.IndexedSeq(G__37466__a,0,null);
} 
return G__37465__delegate.call(this,args);};
G__37465.cljs$lang$maxFixedArity = 0;
G__37465.cljs$lang$applyTo = (function (arglist__37467){
var args = cljs.core.seq(arglist__37467);
return G__37465__delegate(args);
});
G__37465.cljs$core$IFn$_invoke$arity$variadic = G__37465__delegate;
return G__37465;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37468_SHARP_,p2__37469_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37468_SHARP_)].join('')),p2__37469_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37470_SHARP_,p2__37471_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37470_SHARP_)].join(''),p2__37471_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37472 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37472.addCallback(((function (G__37472){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37472))
);

G__37472.addErrback(((function (G__37472){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37472))
);

return G__37472;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37473){if((e37473 instanceof Error)){
var e = e37473;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37473;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37474){if((e37474 instanceof Error)){
var e = e37474;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37474;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37475 = cljs.core._EQ_;
var expr__37476 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37475.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37476))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__37475.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37476))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__37475.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37476))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__37475,expr__37476){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37475,expr__37476))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37478,callback){
var map__37479 = p__37478;
var map__37479__$1 = ((((!((map__37479 == null)))?(((((map__37479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37479):map__37479);
var file_msg = map__37479__$1;
var request_url = cljs.core.get.call(null,map__37479__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__3922__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__37479,map__37479__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37479,map__37479__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__35318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto__){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto__){
return (function (state_37517){
var state_val_37518 = (state_37517[(1)]);
if((state_val_37518 === (7))){
var inst_37513 = (state_37517[(2)]);
var state_37517__$1 = state_37517;
var statearr_37519_37545 = state_37517__$1;
(statearr_37519_37545[(2)] = inst_37513);

(statearr_37519_37545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (1))){
var state_37517__$1 = state_37517;
var statearr_37520_37546 = state_37517__$1;
(statearr_37520_37546[(2)] = null);

(statearr_37520_37546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (4))){
var inst_37483 = (state_37517[(7)]);
var inst_37483__$1 = (state_37517[(2)]);
var state_37517__$1 = (function (){var statearr_37521 = state_37517;
(statearr_37521[(7)] = inst_37483__$1);

return statearr_37521;
})();
if(cljs.core.truth_(inst_37483__$1)){
var statearr_37522_37547 = state_37517__$1;
(statearr_37522_37547[(1)] = (5));

} else {
var statearr_37523_37548 = state_37517__$1;
(statearr_37523_37548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (15))){
var inst_37496 = (state_37517[(8)]);
var inst_37498 = (state_37517[(9)]);
var inst_37500 = inst_37498.call(null,inst_37496);
var state_37517__$1 = state_37517;
var statearr_37524_37549 = state_37517__$1;
(statearr_37524_37549[(2)] = inst_37500);

(statearr_37524_37549[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (13))){
var inst_37507 = (state_37517[(2)]);
var state_37517__$1 = state_37517;
var statearr_37525_37550 = state_37517__$1;
(statearr_37525_37550[(2)] = inst_37507);

(statearr_37525_37550[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (6))){
var state_37517__$1 = state_37517;
var statearr_37526_37551 = state_37517__$1;
(statearr_37526_37551[(2)] = null);

(statearr_37526_37551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (17))){
var inst_37504 = (state_37517[(2)]);
var state_37517__$1 = state_37517;
var statearr_37527_37552 = state_37517__$1;
(statearr_37527_37552[(2)] = inst_37504);

(statearr_37527_37552[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (3))){
var inst_37515 = (state_37517[(2)]);
var state_37517__$1 = state_37517;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37517__$1,inst_37515);
} else {
if((state_val_37518 === (12))){
var state_37517__$1 = state_37517;
var statearr_37528_37553 = state_37517__$1;
(statearr_37528_37553[(2)] = null);

(statearr_37528_37553[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (2))){
var state_37517__$1 = state_37517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37517__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37518 === (11))){
var inst_37488 = (state_37517[(10)]);
var inst_37494 = figwheel.client.file_reloading.blocking_load.call(null,inst_37488);
var state_37517__$1 = state_37517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37517__$1,(14),inst_37494);
} else {
if((state_val_37518 === (9))){
var inst_37488 = (state_37517[(10)]);
var state_37517__$1 = state_37517;
if(cljs.core.truth_(inst_37488)){
var statearr_37529_37554 = state_37517__$1;
(statearr_37529_37554[(1)] = (11));

} else {
var statearr_37530_37555 = state_37517__$1;
(statearr_37530_37555[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (5))){
var inst_37489 = (state_37517[(11)]);
var inst_37483 = (state_37517[(7)]);
var inst_37488 = cljs.core.nth.call(null,inst_37483,(0),null);
var inst_37489__$1 = cljs.core.nth.call(null,inst_37483,(1),null);
var state_37517__$1 = (function (){var statearr_37531 = state_37517;
(statearr_37531[(10)] = inst_37488);

(statearr_37531[(11)] = inst_37489__$1);

return statearr_37531;
})();
if(cljs.core.truth_(inst_37489__$1)){
var statearr_37532_37556 = state_37517__$1;
(statearr_37532_37556[(1)] = (8));

} else {
var statearr_37533_37557 = state_37517__$1;
(statearr_37533_37557[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (14))){
var inst_37488 = (state_37517[(10)]);
var inst_37498 = (state_37517[(9)]);
var inst_37496 = (state_37517[(2)]);
var inst_37497 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37498__$1 = cljs.core.get.call(null,inst_37497,inst_37488);
var state_37517__$1 = (function (){var statearr_37534 = state_37517;
(statearr_37534[(8)] = inst_37496);

(statearr_37534[(9)] = inst_37498__$1);

return statearr_37534;
})();
if(cljs.core.truth_(inst_37498__$1)){
var statearr_37535_37558 = state_37517__$1;
(statearr_37535_37558[(1)] = (15));

} else {
var statearr_37536_37559 = state_37517__$1;
(statearr_37536_37559[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (16))){
var inst_37496 = (state_37517[(8)]);
var inst_37502 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37496);
var state_37517__$1 = state_37517;
var statearr_37537_37560 = state_37517__$1;
(statearr_37537_37560[(2)] = inst_37502);

(statearr_37537_37560[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (10))){
var inst_37509 = (state_37517[(2)]);
var state_37517__$1 = (function (){var statearr_37538 = state_37517;
(statearr_37538[(12)] = inst_37509);

return statearr_37538;
})();
var statearr_37539_37561 = state_37517__$1;
(statearr_37539_37561[(2)] = null);

(statearr_37539_37561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37518 === (8))){
var inst_37489 = (state_37517[(11)]);
var inst_37491 = eval(inst_37489);
var state_37517__$1 = state_37517;
var statearr_37540_37562 = state_37517__$1;
(statearr_37540_37562[(2)] = inst_37491);

(statearr_37540_37562[(1)] = (10));


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
});})(c__35318__auto__))
;
return ((function (switch__35230__auto__,c__35318__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__35231__auto__ = null;
var figwheel$client$file_reloading$state_machine__35231__auto____0 = (function (){
var statearr_37541 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37541[(0)] = figwheel$client$file_reloading$state_machine__35231__auto__);

(statearr_37541[(1)] = (1));

return statearr_37541;
});
var figwheel$client$file_reloading$state_machine__35231__auto____1 = (function (state_37517){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_37517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e37542){if((e37542 instanceof Object)){
var ex__35234__auto__ = e37542;
var statearr_37543_37563 = state_37517;
(statearr_37543_37563[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37542;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37564 = state_37517;
state_37517 = G__37564;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__35231__auto__ = function(state_37517){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__35231__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__35231__auto____1.call(this,state_37517);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__35231__auto____0;
figwheel$client$file_reloading$state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__35231__auto____1;
return figwheel$client$file_reloading$state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto__))
})();
var state__35320__auto__ = (function (){var statearr_37544 = f__35319__auto__.call(null);
(statearr_37544[(6)] = c__35318__auto__);

return statearr_37544;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto__))
);

return c__35318__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__37566 = arguments.length;
switch (G__37566) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37568,callback){
var map__37569 = p__37568;
var map__37569__$1 = ((((!((map__37569 == null)))?(((((map__37569.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37569.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37569):map__37569);
var file_msg = map__37569__$1;
var namespace = cljs.core.get.call(null,map__37569__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37569,map__37569__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37569,map__37569__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37571){
var map__37572 = p__37571;
var map__37572__$1 = ((((!((map__37572 == null)))?(((((map__37572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37572):map__37572);
var file_msg = map__37572__$1;
var namespace = cljs.core.get.call(null,map__37572__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37574){
var map__37575 = p__37574;
var map__37575__$1 = ((((!((map__37575 == null)))?(((((map__37575.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37575.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37575):map__37575);
var file_msg = map__37575__$1;
var namespace = cljs.core.get.call(null,map__37575__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__3911__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__3911__auto__){
var or__3922__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
var or__3922__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__3922__auto____$1)){
return or__3922__auto____$1;
} else {
var or__3922__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__3922__auto____$2)){
return or__3922__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__3911__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37577,callback){
var map__37578 = p__37577;
var map__37578__$1 = ((((!((map__37578 == null)))?(((((map__37578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37578):map__37578);
var file_msg = map__37578__$1;
var request_url = cljs.core.get.call(null,map__37578__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37578__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__35318__auto___37628 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto___37628,out){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto___37628,out){
return (function (state_37613){
var state_val_37614 = (state_37613[(1)]);
if((state_val_37614 === (1))){
var inst_37587 = cljs.core.seq.call(null,files);
var inst_37588 = cljs.core.first.call(null,inst_37587);
var inst_37589 = cljs.core.next.call(null,inst_37587);
var inst_37590 = files;
var state_37613__$1 = (function (){var statearr_37615 = state_37613;
(statearr_37615[(7)] = inst_37588);

(statearr_37615[(8)] = inst_37590);

(statearr_37615[(9)] = inst_37589);

return statearr_37615;
})();
var statearr_37616_37629 = state_37613__$1;
(statearr_37616_37629[(2)] = null);

(statearr_37616_37629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (2))){
var inst_37590 = (state_37613[(8)]);
var inst_37596 = (state_37613[(10)]);
var inst_37595 = cljs.core.seq.call(null,inst_37590);
var inst_37596__$1 = cljs.core.first.call(null,inst_37595);
var inst_37597 = cljs.core.next.call(null,inst_37595);
var inst_37598 = (inst_37596__$1 == null);
var inst_37599 = cljs.core.not.call(null,inst_37598);
var state_37613__$1 = (function (){var statearr_37617 = state_37613;
(statearr_37617[(11)] = inst_37597);

(statearr_37617[(10)] = inst_37596__$1);

return statearr_37617;
})();
if(inst_37599){
var statearr_37618_37630 = state_37613__$1;
(statearr_37618_37630[(1)] = (4));

} else {
var statearr_37619_37631 = state_37613__$1;
(statearr_37619_37631[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (3))){
var inst_37611 = (state_37613[(2)]);
var state_37613__$1 = state_37613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37613__$1,inst_37611);
} else {
if((state_val_37614 === (4))){
var inst_37596 = (state_37613[(10)]);
var inst_37601 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37596);
var state_37613__$1 = state_37613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37613__$1,(7),inst_37601);
} else {
if((state_val_37614 === (5))){
var inst_37607 = cljs.core.async.close_BANG_.call(null,out);
var state_37613__$1 = state_37613;
var statearr_37620_37632 = state_37613__$1;
(statearr_37620_37632[(2)] = inst_37607);

(statearr_37620_37632[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (6))){
var inst_37609 = (state_37613[(2)]);
var state_37613__$1 = state_37613;
var statearr_37621_37633 = state_37613__$1;
(statearr_37621_37633[(2)] = inst_37609);

(statearr_37621_37633[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37614 === (7))){
var inst_37597 = (state_37613[(11)]);
var inst_37603 = (state_37613[(2)]);
var inst_37604 = cljs.core.async.put_BANG_.call(null,out,inst_37603);
var inst_37590 = inst_37597;
var state_37613__$1 = (function (){var statearr_37622 = state_37613;
(statearr_37622[(8)] = inst_37590);

(statearr_37622[(12)] = inst_37604);

return statearr_37622;
})();
var statearr_37623_37634 = state_37613__$1;
(statearr_37623_37634[(2)] = null);

(statearr_37623_37634[(1)] = (2));


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
});})(c__35318__auto___37628,out))
;
return ((function (switch__35230__auto__,c__35318__auto___37628,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35231__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35231__auto____0 = (function (){
var statearr_37624 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37624[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35231__auto__);

(statearr_37624[(1)] = (1));

return statearr_37624;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__35231__auto____1 = (function (state_37613){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_37613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e37625){if((e37625 instanceof Object)){
var ex__35234__auto__ = e37625;
var statearr_37626_37635 = state_37613;
(statearr_37626_37635[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37625;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37636 = state_37613;
state_37613 = G__37636;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35231__auto__ = function(state_37613){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35231__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35231__auto____1.call(this,state_37613);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35231__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__35231__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto___37628,out))
})();
var state__35320__auto__ = (function (){var statearr_37627 = f__35319__auto__.call(null);
(statearr_37627[(6)] = c__35318__auto___37628);

return statearr_37627;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto___37628,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37637,opts){
var map__37638 = p__37637;
var map__37638__$1 = ((((!((map__37638 == null)))?(((((map__37638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37638.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37638):map__37638);
var eval_body = cljs.core.get.call(null,map__37638__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37638__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__3911__auto__ = eval_body;
if(cljs.core.truth_(and__3911__auto__)){
return typeof eval_body === 'string';
} else {
return and__3911__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37640){var e = e37640;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__37641_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37641_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__37642){
var vec__37643 = p__37642;
var k = cljs.core.nth.call(null,vec__37643,(0),null);
var v = cljs.core.nth.call(null,vec__37643,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37646){
var vec__37647 = p__37646;
var k = cljs.core.nth.call(null,vec__37647,(0),null);
var v = cljs.core.nth.call(null,vec__37647,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37653,p__37654){
var map__37655 = p__37653;
var map__37655__$1 = ((((!((map__37655 == null)))?(((((map__37655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37655.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37655):map__37655);
var opts = map__37655__$1;
var before_jsload = cljs.core.get.call(null,map__37655__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37655__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37655__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37656 = p__37654;
var map__37656__$1 = ((((!((map__37656 == null)))?(((((map__37656.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37656.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37656):map__37656);
var msg = map__37656__$1;
var files = cljs.core.get.call(null,map__37656__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37656__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37656__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__35318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto__,map__37655,map__37655__$1,opts,before_jsload,on_jsload,reload_dependents,map__37656,map__37656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto__,map__37655,map__37655__$1,opts,before_jsload,on_jsload,reload_dependents,map__37656,map__37656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37810){
var state_val_37811 = (state_37810[(1)]);
if((state_val_37811 === (7))){
var inst_37670 = (state_37810[(7)]);
var inst_37672 = (state_37810[(8)]);
var inst_37671 = (state_37810[(9)]);
var inst_37673 = (state_37810[(10)]);
var inst_37678 = cljs.core._nth.call(null,inst_37671,inst_37673);
var inst_37679 = figwheel.client.file_reloading.eval_body.call(null,inst_37678,opts);
var inst_37680 = (inst_37673 + (1));
var tmp37812 = inst_37670;
var tmp37813 = inst_37672;
var tmp37814 = inst_37671;
var inst_37670__$1 = tmp37812;
var inst_37671__$1 = tmp37814;
var inst_37672__$1 = tmp37813;
var inst_37673__$1 = inst_37680;
var state_37810__$1 = (function (){var statearr_37815 = state_37810;
(statearr_37815[(11)] = inst_37679);

(statearr_37815[(7)] = inst_37670__$1);

(statearr_37815[(8)] = inst_37672__$1);

(statearr_37815[(9)] = inst_37671__$1);

(statearr_37815[(10)] = inst_37673__$1);

return statearr_37815;
})();
var statearr_37816_37899 = state_37810__$1;
(statearr_37816_37899[(2)] = null);

(statearr_37816_37899[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (20))){
var inst_37713 = (state_37810[(12)]);
var inst_37721 = figwheel.client.file_reloading.sort_files.call(null,inst_37713);
var state_37810__$1 = state_37810;
var statearr_37817_37900 = state_37810__$1;
(statearr_37817_37900[(2)] = inst_37721);

(statearr_37817_37900[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (27))){
var state_37810__$1 = state_37810;
var statearr_37818_37901 = state_37810__$1;
(statearr_37818_37901[(2)] = null);

(statearr_37818_37901[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (1))){
var inst_37662 = (state_37810[(13)]);
var inst_37659 = before_jsload.call(null,files);
var inst_37660 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37661 = (function (){return ((function (inst_37662,inst_37659,inst_37660,state_val_37811,c__35318__auto__,map__37655,map__37655__$1,opts,before_jsload,on_jsload,reload_dependents,map__37656,map__37656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37650_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37650_SHARP_);
});
;})(inst_37662,inst_37659,inst_37660,state_val_37811,c__35318__auto__,map__37655,map__37655__$1,opts,before_jsload,on_jsload,reload_dependents,map__37656,map__37656__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37662__$1 = cljs.core.filter.call(null,inst_37661,files);
var inst_37663 = cljs.core.not_empty.call(null,inst_37662__$1);
var state_37810__$1 = (function (){var statearr_37819 = state_37810;
(statearr_37819[(14)] = inst_37659);

(statearr_37819[(13)] = inst_37662__$1);

(statearr_37819[(15)] = inst_37660);

return statearr_37819;
})();
if(cljs.core.truth_(inst_37663)){
var statearr_37820_37902 = state_37810__$1;
(statearr_37820_37902[(1)] = (2));

} else {
var statearr_37821_37903 = state_37810__$1;
(statearr_37821_37903[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (24))){
var state_37810__$1 = state_37810;
var statearr_37822_37904 = state_37810__$1;
(statearr_37822_37904[(2)] = null);

(statearr_37822_37904[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (39))){
var inst_37763 = (state_37810[(16)]);
var state_37810__$1 = state_37810;
var statearr_37823_37905 = state_37810__$1;
(statearr_37823_37905[(2)] = inst_37763);

(statearr_37823_37905[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (46))){
var inst_37805 = (state_37810[(2)]);
var state_37810__$1 = state_37810;
var statearr_37824_37906 = state_37810__$1;
(statearr_37824_37906[(2)] = inst_37805);

(statearr_37824_37906[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (4))){
var inst_37707 = (state_37810[(2)]);
var inst_37708 = cljs.core.List.EMPTY;
var inst_37709 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37708);
var inst_37710 = (function (){return ((function (inst_37707,inst_37708,inst_37709,state_val_37811,c__35318__auto__,map__37655,map__37655__$1,opts,before_jsload,on_jsload,reload_dependents,map__37656,map__37656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37651_SHARP_){
var and__3911__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37651_SHARP_);
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37651_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37651_SHARP_))));
} else {
return and__3911__auto__;
}
});
;})(inst_37707,inst_37708,inst_37709,state_val_37811,c__35318__auto__,map__37655,map__37655__$1,opts,before_jsload,on_jsload,reload_dependents,map__37656,map__37656__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37711 = cljs.core.filter.call(null,inst_37710,files);
var inst_37712 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37713 = cljs.core.concat.call(null,inst_37711,inst_37712);
var state_37810__$1 = (function (){var statearr_37825 = state_37810;
(statearr_37825[(12)] = inst_37713);

(statearr_37825[(17)] = inst_37707);

(statearr_37825[(18)] = inst_37709);

return statearr_37825;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37826_37907 = state_37810__$1;
(statearr_37826_37907[(1)] = (16));

} else {
var statearr_37827_37908 = state_37810__$1;
(statearr_37827_37908[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (15))){
var inst_37697 = (state_37810[(2)]);
var state_37810__$1 = state_37810;
var statearr_37828_37909 = state_37810__$1;
(statearr_37828_37909[(2)] = inst_37697);

(statearr_37828_37909[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (21))){
var inst_37723 = (state_37810[(19)]);
var inst_37723__$1 = (state_37810[(2)]);
var inst_37724 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37723__$1);
var state_37810__$1 = (function (){var statearr_37829 = state_37810;
(statearr_37829[(19)] = inst_37723__$1);

return statearr_37829;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37810__$1,(22),inst_37724);
} else {
if((state_val_37811 === (31))){
var inst_37808 = (state_37810[(2)]);
var state_37810__$1 = state_37810;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37810__$1,inst_37808);
} else {
if((state_val_37811 === (32))){
var inst_37763 = (state_37810[(16)]);
var inst_37768 = inst_37763.cljs$lang$protocol_mask$partition0$;
var inst_37769 = (inst_37768 & (64));
var inst_37770 = inst_37763.cljs$core$ISeq$;
var inst_37771 = (cljs.core.PROTOCOL_SENTINEL === inst_37770);
var inst_37772 = ((inst_37769) || (inst_37771));
var state_37810__$1 = state_37810;
if(cljs.core.truth_(inst_37772)){
var statearr_37830_37910 = state_37810__$1;
(statearr_37830_37910[(1)] = (35));

} else {
var statearr_37831_37911 = state_37810__$1;
(statearr_37831_37911[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (40))){
var inst_37785 = (state_37810[(20)]);
var inst_37784 = (state_37810[(2)]);
var inst_37785__$1 = cljs.core.get.call(null,inst_37784,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37786 = cljs.core.get.call(null,inst_37784,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37787 = cljs.core.not_empty.call(null,inst_37785__$1);
var state_37810__$1 = (function (){var statearr_37832 = state_37810;
(statearr_37832[(21)] = inst_37786);

(statearr_37832[(20)] = inst_37785__$1);

return statearr_37832;
})();
if(cljs.core.truth_(inst_37787)){
var statearr_37833_37912 = state_37810__$1;
(statearr_37833_37912[(1)] = (41));

} else {
var statearr_37834_37913 = state_37810__$1;
(statearr_37834_37913[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (33))){
var state_37810__$1 = state_37810;
var statearr_37835_37914 = state_37810__$1;
(statearr_37835_37914[(2)] = false);

(statearr_37835_37914[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (13))){
var inst_37683 = (state_37810[(22)]);
var inst_37687 = cljs.core.chunk_first.call(null,inst_37683);
var inst_37688 = cljs.core.chunk_rest.call(null,inst_37683);
var inst_37689 = cljs.core.count.call(null,inst_37687);
var inst_37670 = inst_37688;
var inst_37671 = inst_37687;
var inst_37672 = inst_37689;
var inst_37673 = (0);
var state_37810__$1 = (function (){var statearr_37836 = state_37810;
(statearr_37836[(7)] = inst_37670);

(statearr_37836[(8)] = inst_37672);

(statearr_37836[(9)] = inst_37671);

(statearr_37836[(10)] = inst_37673);

return statearr_37836;
})();
var statearr_37837_37915 = state_37810__$1;
(statearr_37837_37915[(2)] = null);

(statearr_37837_37915[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (22))){
var inst_37727 = (state_37810[(23)]);
var inst_37723 = (state_37810[(19)]);
var inst_37731 = (state_37810[(24)]);
var inst_37726 = (state_37810[(25)]);
var inst_37726__$1 = (state_37810[(2)]);
var inst_37727__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37726__$1);
var inst_37728 = (function (){var all_files = inst_37723;
var res_SINGLEQUOTE_ = inst_37726__$1;
var res = inst_37727__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37727,inst_37723,inst_37731,inst_37726,inst_37726__$1,inst_37727__$1,state_val_37811,c__35318__auto__,map__37655,map__37655__$1,opts,before_jsload,on_jsload,reload_dependents,map__37656,map__37656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37652_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37652_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37727,inst_37723,inst_37731,inst_37726,inst_37726__$1,inst_37727__$1,state_val_37811,c__35318__auto__,map__37655,map__37655__$1,opts,before_jsload,on_jsload,reload_dependents,map__37656,map__37656__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37729 = cljs.core.filter.call(null,inst_37728,inst_37726__$1);
var inst_37730 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37731__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37730);
var inst_37732 = cljs.core.not_empty.call(null,inst_37731__$1);
var state_37810__$1 = (function (){var statearr_37838 = state_37810;
(statearr_37838[(23)] = inst_37727__$1);

(statearr_37838[(26)] = inst_37729);

(statearr_37838[(24)] = inst_37731__$1);

(statearr_37838[(25)] = inst_37726__$1);

return statearr_37838;
})();
if(cljs.core.truth_(inst_37732)){
var statearr_37839_37916 = state_37810__$1;
(statearr_37839_37916[(1)] = (23));

} else {
var statearr_37840_37917 = state_37810__$1;
(statearr_37840_37917[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (36))){
var state_37810__$1 = state_37810;
var statearr_37841_37918 = state_37810__$1;
(statearr_37841_37918[(2)] = false);

(statearr_37841_37918[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (41))){
var inst_37785 = (state_37810[(20)]);
var inst_37789 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37790 = cljs.core.map.call(null,inst_37789,inst_37785);
var inst_37791 = cljs.core.pr_str.call(null,inst_37790);
var inst_37792 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37791)].join('');
var inst_37793 = figwheel.client.utils.log.call(null,inst_37792);
var state_37810__$1 = state_37810;
var statearr_37842_37919 = state_37810__$1;
(statearr_37842_37919[(2)] = inst_37793);

(statearr_37842_37919[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (43))){
var inst_37786 = (state_37810[(21)]);
var inst_37796 = (state_37810[(2)]);
var inst_37797 = cljs.core.not_empty.call(null,inst_37786);
var state_37810__$1 = (function (){var statearr_37843 = state_37810;
(statearr_37843[(27)] = inst_37796);

return statearr_37843;
})();
if(cljs.core.truth_(inst_37797)){
var statearr_37844_37920 = state_37810__$1;
(statearr_37844_37920[(1)] = (44));

} else {
var statearr_37845_37921 = state_37810__$1;
(statearr_37845_37921[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (29))){
var inst_37727 = (state_37810[(23)]);
var inst_37723 = (state_37810[(19)]);
var inst_37729 = (state_37810[(26)]);
var inst_37731 = (state_37810[(24)]);
var inst_37763 = (state_37810[(16)]);
var inst_37726 = (state_37810[(25)]);
var inst_37759 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37762 = (function (){var all_files = inst_37723;
var res_SINGLEQUOTE_ = inst_37726;
var res = inst_37727;
var files_not_loaded = inst_37729;
var dependencies_that_loaded = inst_37731;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37727,inst_37723,inst_37729,inst_37731,inst_37763,inst_37726,inst_37759,state_val_37811,c__35318__auto__,map__37655,map__37655__$1,opts,before_jsload,on_jsload,reload_dependents,map__37656,map__37656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37761){
var map__37846 = p__37761;
var map__37846__$1 = ((((!((map__37846 == null)))?(((((map__37846.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37846.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37846):map__37846);
var namespace = cljs.core.get.call(null,map__37846__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37727,inst_37723,inst_37729,inst_37731,inst_37763,inst_37726,inst_37759,state_val_37811,c__35318__auto__,map__37655,map__37655__$1,opts,before_jsload,on_jsload,reload_dependents,map__37656,map__37656__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37763__$1 = cljs.core.group_by.call(null,inst_37762,inst_37729);
var inst_37765 = (inst_37763__$1 == null);
var inst_37766 = cljs.core.not.call(null,inst_37765);
var state_37810__$1 = (function (){var statearr_37848 = state_37810;
(statearr_37848[(28)] = inst_37759);

(statearr_37848[(16)] = inst_37763__$1);

return statearr_37848;
})();
if(inst_37766){
var statearr_37849_37922 = state_37810__$1;
(statearr_37849_37922[(1)] = (32));

} else {
var statearr_37850_37923 = state_37810__$1;
(statearr_37850_37923[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (44))){
var inst_37786 = (state_37810[(21)]);
var inst_37799 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37786);
var inst_37800 = cljs.core.pr_str.call(null,inst_37799);
var inst_37801 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37800)].join('');
var inst_37802 = figwheel.client.utils.log.call(null,inst_37801);
var state_37810__$1 = state_37810;
var statearr_37851_37924 = state_37810__$1;
(statearr_37851_37924[(2)] = inst_37802);

(statearr_37851_37924[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (6))){
var inst_37704 = (state_37810[(2)]);
var state_37810__$1 = state_37810;
var statearr_37852_37925 = state_37810__$1;
(statearr_37852_37925[(2)] = inst_37704);

(statearr_37852_37925[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (28))){
var inst_37729 = (state_37810[(26)]);
var inst_37756 = (state_37810[(2)]);
var inst_37757 = cljs.core.not_empty.call(null,inst_37729);
var state_37810__$1 = (function (){var statearr_37853 = state_37810;
(statearr_37853[(29)] = inst_37756);

return statearr_37853;
})();
if(cljs.core.truth_(inst_37757)){
var statearr_37854_37926 = state_37810__$1;
(statearr_37854_37926[(1)] = (29));

} else {
var statearr_37855_37927 = state_37810__$1;
(statearr_37855_37927[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (25))){
var inst_37727 = (state_37810[(23)]);
var inst_37743 = (state_37810[(2)]);
var inst_37744 = cljs.core.not_empty.call(null,inst_37727);
var state_37810__$1 = (function (){var statearr_37856 = state_37810;
(statearr_37856[(30)] = inst_37743);

return statearr_37856;
})();
if(cljs.core.truth_(inst_37744)){
var statearr_37857_37928 = state_37810__$1;
(statearr_37857_37928[(1)] = (26));

} else {
var statearr_37858_37929 = state_37810__$1;
(statearr_37858_37929[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (34))){
var inst_37779 = (state_37810[(2)]);
var state_37810__$1 = state_37810;
if(cljs.core.truth_(inst_37779)){
var statearr_37859_37930 = state_37810__$1;
(statearr_37859_37930[(1)] = (38));

} else {
var statearr_37860_37931 = state_37810__$1;
(statearr_37860_37931[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (17))){
var state_37810__$1 = state_37810;
var statearr_37861_37932 = state_37810__$1;
(statearr_37861_37932[(2)] = recompile_dependents);

(statearr_37861_37932[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (3))){
var state_37810__$1 = state_37810;
var statearr_37862_37933 = state_37810__$1;
(statearr_37862_37933[(2)] = null);

(statearr_37862_37933[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (12))){
var inst_37700 = (state_37810[(2)]);
var state_37810__$1 = state_37810;
var statearr_37863_37934 = state_37810__$1;
(statearr_37863_37934[(2)] = inst_37700);

(statearr_37863_37934[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (2))){
var inst_37662 = (state_37810[(13)]);
var inst_37669 = cljs.core.seq.call(null,inst_37662);
var inst_37670 = inst_37669;
var inst_37671 = null;
var inst_37672 = (0);
var inst_37673 = (0);
var state_37810__$1 = (function (){var statearr_37864 = state_37810;
(statearr_37864[(7)] = inst_37670);

(statearr_37864[(8)] = inst_37672);

(statearr_37864[(9)] = inst_37671);

(statearr_37864[(10)] = inst_37673);

return statearr_37864;
})();
var statearr_37865_37935 = state_37810__$1;
(statearr_37865_37935[(2)] = null);

(statearr_37865_37935[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (23))){
var inst_37727 = (state_37810[(23)]);
var inst_37723 = (state_37810[(19)]);
var inst_37729 = (state_37810[(26)]);
var inst_37731 = (state_37810[(24)]);
var inst_37726 = (state_37810[(25)]);
var inst_37734 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37736 = (function (){var all_files = inst_37723;
var res_SINGLEQUOTE_ = inst_37726;
var res = inst_37727;
var files_not_loaded = inst_37729;
var dependencies_that_loaded = inst_37731;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37727,inst_37723,inst_37729,inst_37731,inst_37726,inst_37734,state_val_37811,c__35318__auto__,map__37655,map__37655__$1,opts,before_jsload,on_jsload,reload_dependents,map__37656,map__37656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37735){
var map__37866 = p__37735;
var map__37866__$1 = ((((!((map__37866 == null)))?(((((map__37866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37866):map__37866);
var request_url = cljs.core.get.call(null,map__37866__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37727,inst_37723,inst_37729,inst_37731,inst_37726,inst_37734,state_val_37811,c__35318__auto__,map__37655,map__37655__$1,opts,before_jsload,on_jsload,reload_dependents,map__37656,map__37656__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37737 = cljs.core.reverse.call(null,inst_37731);
var inst_37738 = cljs.core.map.call(null,inst_37736,inst_37737);
var inst_37739 = cljs.core.pr_str.call(null,inst_37738);
var inst_37740 = figwheel.client.utils.log.call(null,inst_37739);
var state_37810__$1 = (function (){var statearr_37868 = state_37810;
(statearr_37868[(31)] = inst_37734);

return statearr_37868;
})();
var statearr_37869_37936 = state_37810__$1;
(statearr_37869_37936[(2)] = inst_37740);

(statearr_37869_37936[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (35))){
var state_37810__$1 = state_37810;
var statearr_37870_37937 = state_37810__$1;
(statearr_37870_37937[(2)] = true);

(statearr_37870_37937[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (19))){
var inst_37713 = (state_37810[(12)]);
var inst_37719 = figwheel.client.file_reloading.expand_files.call(null,inst_37713);
var state_37810__$1 = state_37810;
var statearr_37871_37938 = state_37810__$1;
(statearr_37871_37938[(2)] = inst_37719);

(statearr_37871_37938[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (11))){
var state_37810__$1 = state_37810;
var statearr_37872_37939 = state_37810__$1;
(statearr_37872_37939[(2)] = null);

(statearr_37872_37939[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (9))){
var inst_37702 = (state_37810[(2)]);
var state_37810__$1 = state_37810;
var statearr_37873_37940 = state_37810__$1;
(statearr_37873_37940[(2)] = inst_37702);

(statearr_37873_37940[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (5))){
var inst_37672 = (state_37810[(8)]);
var inst_37673 = (state_37810[(10)]);
var inst_37675 = (inst_37673 < inst_37672);
var inst_37676 = inst_37675;
var state_37810__$1 = state_37810;
if(cljs.core.truth_(inst_37676)){
var statearr_37874_37941 = state_37810__$1;
(statearr_37874_37941[(1)] = (7));

} else {
var statearr_37875_37942 = state_37810__$1;
(statearr_37875_37942[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (14))){
var inst_37683 = (state_37810[(22)]);
var inst_37692 = cljs.core.first.call(null,inst_37683);
var inst_37693 = figwheel.client.file_reloading.eval_body.call(null,inst_37692,opts);
var inst_37694 = cljs.core.next.call(null,inst_37683);
var inst_37670 = inst_37694;
var inst_37671 = null;
var inst_37672 = (0);
var inst_37673 = (0);
var state_37810__$1 = (function (){var statearr_37876 = state_37810;
(statearr_37876[(7)] = inst_37670);

(statearr_37876[(8)] = inst_37672);

(statearr_37876[(32)] = inst_37693);

(statearr_37876[(9)] = inst_37671);

(statearr_37876[(10)] = inst_37673);

return statearr_37876;
})();
var statearr_37877_37943 = state_37810__$1;
(statearr_37877_37943[(2)] = null);

(statearr_37877_37943[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (45))){
var state_37810__$1 = state_37810;
var statearr_37878_37944 = state_37810__$1;
(statearr_37878_37944[(2)] = null);

(statearr_37878_37944[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (26))){
var inst_37727 = (state_37810[(23)]);
var inst_37723 = (state_37810[(19)]);
var inst_37729 = (state_37810[(26)]);
var inst_37731 = (state_37810[(24)]);
var inst_37726 = (state_37810[(25)]);
var inst_37746 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37748 = (function (){var all_files = inst_37723;
var res_SINGLEQUOTE_ = inst_37726;
var res = inst_37727;
var files_not_loaded = inst_37729;
var dependencies_that_loaded = inst_37731;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37727,inst_37723,inst_37729,inst_37731,inst_37726,inst_37746,state_val_37811,c__35318__auto__,map__37655,map__37655__$1,opts,before_jsload,on_jsload,reload_dependents,map__37656,map__37656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37747){
var map__37879 = p__37747;
var map__37879__$1 = ((((!((map__37879 == null)))?(((((map__37879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37879):map__37879);
var namespace = cljs.core.get.call(null,map__37879__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37879__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37727,inst_37723,inst_37729,inst_37731,inst_37726,inst_37746,state_val_37811,c__35318__auto__,map__37655,map__37655__$1,opts,before_jsload,on_jsload,reload_dependents,map__37656,map__37656__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37749 = cljs.core.map.call(null,inst_37748,inst_37727);
var inst_37750 = cljs.core.pr_str.call(null,inst_37749);
var inst_37751 = figwheel.client.utils.log.call(null,inst_37750);
var inst_37752 = (function (){var all_files = inst_37723;
var res_SINGLEQUOTE_ = inst_37726;
var res = inst_37727;
var files_not_loaded = inst_37729;
var dependencies_that_loaded = inst_37731;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37727,inst_37723,inst_37729,inst_37731,inst_37726,inst_37746,inst_37748,inst_37749,inst_37750,inst_37751,state_val_37811,c__35318__auto__,map__37655,map__37655__$1,opts,before_jsload,on_jsload,reload_dependents,map__37656,map__37656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37727,inst_37723,inst_37729,inst_37731,inst_37726,inst_37746,inst_37748,inst_37749,inst_37750,inst_37751,state_val_37811,c__35318__auto__,map__37655,map__37655__$1,opts,before_jsload,on_jsload,reload_dependents,map__37656,map__37656__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37753 = setTimeout(inst_37752,(10));
var state_37810__$1 = (function (){var statearr_37881 = state_37810;
(statearr_37881[(33)] = inst_37746);

(statearr_37881[(34)] = inst_37751);

return statearr_37881;
})();
var statearr_37882_37945 = state_37810__$1;
(statearr_37882_37945[(2)] = inst_37753);

(statearr_37882_37945[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (16))){
var state_37810__$1 = state_37810;
var statearr_37883_37946 = state_37810__$1;
(statearr_37883_37946[(2)] = reload_dependents);

(statearr_37883_37946[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (38))){
var inst_37763 = (state_37810[(16)]);
var inst_37781 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37763);
var state_37810__$1 = state_37810;
var statearr_37884_37947 = state_37810__$1;
(statearr_37884_37947[(2)] = inst_37781);

(statearr_37884_37947[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (30))){
var state_37810__$1 = state_37810;
var statearr_37885_37948 = state_37810__$1;
(statearr_37885_37948[(2)] = null);

(statearr_37885_37948[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (10))){
var inst_37683 = (state_37810[(22)]);
var inst_37685 = cljs.core.chunked_seq_QMARK_.call(null,inst_37683);
var state_37810__$1 = state_37810;
if(inst_37685){
var statearr_37886_37949 = state_37810__$1;
(statearr_37886_37949[(1)] = (13));

} else {
var statearr_37887_37950 = state_37810__$1;
(statearr_37887_37950[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (18))){
var inst_37717 = (state_37810[(2)]);
var state_37810__$1 = state_37810;
if(cljs.core.truth_(inst_37717)){
var statearr_37888_37951 = state_37810__$1;
(statearr_37888_37951[(1)] = (19));

} else {
var statearr_37889_37952 = state_37810__$1;
(statearr_37889_37952[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (42))){
var state_37810__$1 = state_37810;
var statearr_37890_37953 = state_37810__$1;
(statearr_37890_37953[(2)] = null);

(statearr_37890_37953[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (37))){
var inst_37776 = (state_37810[(2)]);
var state_37810__$1 = state_37810;
var statearr_37891_37954 = state_37810__$1;
(statearr_37891_37954[(2)] = inst_37776);

(statearr_37891_37954[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37811 === (8))){
var inst_37670 = (state_37810[(7)]);
var inst_37683 = (state_37810[(22)]);
var inst_37683__$1 = cljs.core.seq.call(null,inst_37670);
var state_37810__$1 = (function (){var statearr_37892 = state_37810;
(statearr_37892[(22)] = inst_37683__$1);

return statearr_37892;
})();
if(inst_37683__$1){
var statearr_37893_37955 = state_37810__$1;
(statearr_37893_37955[(1)] = (10));

} else {
var statearr_37894_37956 = state_37810__$1;
(statearr_37894_37956[(1)] = (11));

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
});})(c__35318__auto__,map__37655,map__37655__$1,opts,before_jsload,on_jsload,reload_dependents,map__37656,map__37656__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__35230__auto__,c__35318__auto__,map__37655,map__37655__$1,opts,before_jsload,on_jsload,reload_dependents,map__37656,map__37656__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35231__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35231__auto____0 = (function (){
var statearr_37895 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37895[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__35231__auto__);

(statearr_37895[(1)] = (1));

return statearr_37895;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__35231__auto____1 = (function (state_37810){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_37810);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e37896){if((e37896 instanceof Object)){
var ex__35234__auto__ = e37896;
var statearr_37897_37957 = state_37810;
(statearr_37897_37957[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37810);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37896;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37958 = state_37810;
state_37810 = G__37958;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__35231__auto__ = function(state_37810){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35231__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35231__auto____1.call(this,state_37810);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35231__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__35231__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto__,map__37655,map__37655__$1,opts,before_jsload,on_jsload,reload_dependents,map__37656,map__37656__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__35320__auto__ = (function (){var statearr_37898 = f__35319__auto__.call(null);
(statearr_37898[(6)] = c__35318__auto__);

return statearr_37898;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto__,map__37655,map__37655__$1,opts,before_jsload,on_jsload,reload_dependents,map__37656,map__37656__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__35318__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__37961,link){
var map__37962 = p__37961;
var map__37962__$1 = ((((!((map__37962 == null)))?(((((map__37962.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37962.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37962):map__37962);
var file = cljs.core.get.call(null,map__37962__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__37962,map__37962__$1,file){
return (function (p1__37959_SHARP_,p2__37960_SHARP_){
if(cljs.core._EQ_.call(null,p1__37959_SHARP_,p2__37960_SHARP_)){
return p1__37959_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__37962,map__37962__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__37965){
var map__37966 = p__37965;
var map__37966__$1 = ((((!((map__37966 == null)))?(((((map__37966.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37966.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37966):map__37966);
var match_length = cljs.core.get.call(null,map__37966__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__37966__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__37964_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__37964_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__37968_SHARP_,p2__37969_SHARP_){
return cljs.core.assoc.call(null,p1__37968_SHARP_,cljs.core.get.call(null,p2__37969_SHARP_,key),p2__37969_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_37970 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_37970);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_37970);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__37971,p__37972){
var map__37973 = p__37971;
var map__37973__$1 = ((((!((map__37973 == null)))?(((((map__37973.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37973.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37973):map__37973);
var on_cssload = cljs.core.get.call(null,map__37973__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__37974 = p__37972;
var map__37974__$1 = ((((!((map__37974 == null)))?(((((map__37974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37974.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37974):map__37974);
var files_msg = map__37974__$1;
var files = cljs.core.get.call(null,map__37974__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1531954931878
