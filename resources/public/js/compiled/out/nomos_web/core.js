// Compiled by ClojureScript 1.10.238 {}
goog.provide('nomos_web.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('nomos_web.events');
goog.require('nomos_web.routes');
goog.require('nomos_web.views');
goog.require('nomos_web.config');
nomos_web.core.dev_setup = (function nomos_web$core$dev_setup(){
if(nomos_web.config.debug_QMARK_){
cljs.core.enable_console_print_BANG_.call(null);

return cljs.core.println.call(null,"dev mode");
} else {
return null;
}
});
nomos_web.core.mount_root = (function nomos_web$core$mount_root(){
re_frame.core.clear_subscription_cache_BANG_.call(null);

return reagent.core.render.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [nomos_web.views.main_panel], null),document.getElementById("app"));
});
nomos_web.core.init = (function nomos_web$core$init(){
nomos_web.routes.app_routes.call(null);

re_frame.core.dispatch_sync.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("nomos-web.events","initialize-db","nomos-web.events/initialize-db",-1399458672)], null));

nomos_web.core.dev_setup.call(null);

return nomos_web.core.mount_root.call(null);
});
goog.exportSymbol('nomos_web.core.init', nomos_web.core.init);

//# sourceMappingURL=core.js.map?rel=1531954898431
