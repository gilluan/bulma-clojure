// Compiled by ClojureScript 1.10.238 {}
goog.provide('nomos_web.routes');
goog.require('cljs.core');
goog.require('goog.History');
goog.require('secretary.core');
goog.require('goog.events');
goog.require('goog.history.EventType');
goog.require('re_frame.core');
goog.require('nomos_web.events');
nomos_web.routes.hook_browser_navigation_BANG_ = (function nomos_web$routes$hook_browser_navigation_BANG_(){
var G__27477 = (new goog.History());
goog.events.listen(G__27477,goog.history.EventType.NAVIGATE,((function (G__27477){
return (function (event){
return secretary.core.dispatch_BANG_.call(null,event.token);
});})(G__27477))
);

G__27477.setEnabled(true);

return G__27477;
});
nomos_web.routes.app_routes = (function nomos_web$routes$app_routes(){
secretary.core.set_config_BANG_.call(null,new cljs.core.Keyword(null,"prefix","prefix",-265908465),"#");

var action__27352__auto___27488 = (function (params__27353__auto__){
if(cljs.core.map_QMARK_.call(null,params__27353__auto__)){
var map__27478 = params__27353__auto__;
var map__27478__$1 = ((((!((map__27478 == null)))?(((((map__27478.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27478.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27478):map__27478);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nomos-web.events","set-active-panel","nomos-web.events/set-active-panel",-1489836132),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27353__auto__)){
var vec__27480 = params__27353__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nomos-web.events","set-active-panel","nomos-web.events/set-active-panel",-1489836132),new cljs.core.Keyword(null,"home-panel","home-panel",1226198754)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/",action__27352__auto___27488);


var action__27352__auto___27489 = (function (params__27353__auto__){
if(cljs.core.map_QMARK_.call(null,params__27353__auto__)){
var map__27483 = params__27353__auto__;
var map__27483__$1 = ((((!((map__27483 == null)))?(((((map__27483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__27483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27483):map__27483);
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nomos-web.events","set-active-panel","nomos-web.events/set-active-panel",-1489836132),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
if(cljs.core.vector_QMARK_.call(null,params__27353__auto__)){
var vec__27485 = params__27353__auto__;
return re_frame.core.dispatch.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nomos-web.events","set-active-panel","nomos-web.events/set-active-panel",-1489836132),new cljs.core.Keyword(null,"about-panel","about-panel",334628515)], null));
} else {
return null;
}
}
});
secretary.core.add_route_BANG_.call(null,"/about",action__27352__auto___27489);


return nomos_web.routes.hook_browser_navigation_BANG_.call(null);
});

//# sourceMappingURL=routes.js.map?rel=1531954898415
