// Compiled by ClojureScript 1.10.238 {}
goog.provide('nomos_web.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('nomos_web.db');
goog.require('day8.re_frame.tracing');
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("nomos-web.events","initialize-db","nomos-web.events/initialize-db",-1399458672),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (_,___$1){
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null));

var opts__27207__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__27208__auto__ = nomos_web.db.default_db;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__27208__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol("db","default-db","db/default-db",-1149096552,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__27208__auto__;
}catch (e27331){var e = e27331;
throw e;
}}):(function (_,___$1){
return nomos_web.db.default_db;
})));
re_frame.core.reg_event_db.call(null,new cljs.core.Keyword("nomos-web.events","set-active-panel","nomos-web.events/set-active-panel",-1489836132),((day8.re_frame.tracing.is_trace_enabled_QMARK_.call(null))?(function (db,p__27332){
var vec__27333 = p__27332;
var _ = cljs.core.nth.call(null,vec__27333,(0),null);
var active_panel = cljs.core.nth.call(null,vec__27333,(1),null);
var _PLUS_debux_dbg_opts_PLUS_ = cljs.core.PersistentArrayMap.EMPTY;
try{debux.common.util.send_form_BANG_.call(null,cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)));

var opts__27207__auto__ = _PLUS_debux_dbg_opts_PLUS_;
var result__27208__auto__ = cljs.core.assoc.call(null,(function (){var opts__27207__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__27208__auto__ = db;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__27208__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__27208__auto__;
})(),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),(function (){var opts__27207__auto____$1 = _PLUS_debux_dbg_opts_PLUS_;
var result__27208__auto__ = active_panel;
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__27208__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(1)], null));

return result__27208__auto__;
})());
debux.common.util.send_trace_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"result","result",1415092211),result__27208__auto__,new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.list(new cljs.core.Symbol(null,"assoc","assoc",2071440380,null),new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),new cljs.core.Symbol(null,"active-panel","active-panel",-162014467,null)),new cljs.core.Keyword(null,"indent-level","indent-level",-258835684),(0)], null));

return result__27208__auto__;
}catch (e27336){var e = e27336;
throw e;
}}):(function (db,p__27337){
var vec__27338 = p__27337;
var _ = cljs.core.nth.call(null,vec__27338,(0),null);
var active_panel = cljs.core.nth.call(null,vec__27338,(1),null);
return cljs.core.assoc.call(null,db,new cljs.core.Keyword(null,"active-panel","active-panel",-1802545994),active_panel);
})));

//# sourceMappingURL=events.js.map?rel=1531954897965
