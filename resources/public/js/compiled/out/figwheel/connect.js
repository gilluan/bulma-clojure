// Compiled by ClojureScript 1.10.238 {}
goog.provide('figwheel.connect');
goog.require('cljs.core');
goog.require('figwheel.client');
figwheel.connect.start = (function figwheel$connect$start(){
var config = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__38682__delegate = function (x__38668__auto__){
if(cljs.core.truth_(nomos_web.core.mount_root)){
return cljs.core.apply.call(null,nomos_web.core.mount_root,x__38668__auto__);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),["Figwheel: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602))," hook '",cljs.core.str.cljs$core$IFn$_invoke$arity$1("nomos-web.core/mount-root"),"' is missing"].join(''));
}
};
var G__38682 = function (var_args){
var x__38668__auto__ = null;
if (arguments.length > 0) {
var G__38683__i = 0, G__38683__a = new Array(arguments.length -  0);
while (G__38683__i < G__38683__a.length) {G__38683__a[G__38683__i] = arguments[G__38683__i + 0]; ++G__38683__i;}
  x__38668__auto__ = new cljs.core.IndexedSeq(G__38683__a,0,null);
} 
return G__38682__delegate.call(this,x__38668__auto__);};
G__38682.cljs$lang$maxFixedArity = 0;
G__38682.cljs$lang$applyTo = (function (arglist__38684){
var x__38668__auto__ = cljs.core.seq(arglist__38684);
return G__38682__delegate(x__38668__auto__);
});
G__38682.cljs$core$IFn$_invoke$arity$variadic = G__38682__delegate;
return G__38682;
})()
,new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3449/figwheel-ws"], null);
figwheel.client.start.call(null,config);

if(cljs.core.truth_(new cljs.core.Keyword(null,"devcards","devcards",365747130).cljs$core$IFn$_invoke$arity$1(config))){
return devcards.core.start_devcard_ui_BANG__STAR_();
} else {
return null;
}
});
goog.exportSymbol('figwheel.connect.start', figwheel.connect.start);

//# sourceMappingURL=connect.js.map?rel=1531954933668
