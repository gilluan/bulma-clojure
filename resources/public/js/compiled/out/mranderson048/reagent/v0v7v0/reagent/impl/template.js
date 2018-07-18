// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.reagent.v0v7v0.reagent.impl.template');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('mranderson048.reagent.v0v7v0.reagent.impl.util');
goog.require('mranderson048.reagent.v0v7v0.reagent.impl.component');
goog.require('mranderson048.reagent.v0v7v0.reagent.impl.batching');
goog.require('mranderson048.reagent.v0v7v0.reagent.ratom');
goog.require('mranderson048.reagent.v0v7v0.reagent.interop');
goog.require('mranderson048.reagent.v0v7v0.reagent.debug');
/**
 * Regular expression that parses a CSS-style id and class
 *           from a tag name.
 */
mranderson048.reagent.v0v7v0.reagent.impl.template.re_tag = /([^\s\.#]+)(?:#([^\s\.#]+))?(?:\.([^\s#]+))?/;

/**
* @constructor
*/
mranderson048.reagent.v0v7v0.reagent.impl.template.NativeWrapper = (function (){
});

mranderson048.reagent.v0v7v0.reagent.impl.template.NativeWrapper.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
});

mranderson048.reagent.v0v7v0.reagent.impl.template.NativeWrapper.cljs$lang$type = true;

mranderson048.reagent.v0v7v0.reagent.impl.template.NativeWrapper.cljs$lang$ctorStr = "mranderson048.reagent.v0v7v0.reagent.impl.template/NativeWrapper";

mranderson048.reagent.v0v7v0.reagent.impl.template.NativeWrapper.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"mranderson048.reagent.v0v7v0.reagent.impl.template/NativeWrapper");
});

/**
 * Positional factory function for mranderson048.reagent.v0v7v0.reagent.impl.template/NativeWrapper.
 */
mranderson048.reagent.v0v7v0.reagent.impl.template.__GT_NativeWrapper = (function mranderson048$reagent$v0v7v0$reagent$impl$template$__GT_NativeWrapper(){
return (new mranderson048.reagent.v0v7v0.reagent.impl.template.NativeWrapper());
});

mranderson048.reagent.v0v7v0.reagent.impl.template.named_QMARK_ = (function mranderson048$reagent$v0v7v0$reagent$impl$template$named_QMARK_(x){
return (((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol)));
});
mranderson048.reagent.v0v7v0.reagent.impl.template.hiccup_tag_QMARK_ = (function mranderson048$reagent$v0v7v0$reagent$impl$template$hiccup_tag_QMARK_(x){
return ((mranderson048.reagent.v0v7v0.reagent.impl.template.named_QMARK_.call(null,x)) || (typeof x === 'string'));
});
mranderson048.reagent.v0v7v0.reagent.impl.template.valid_tag_QMARK_ = (function mranderson048$reagent$v0v7v0$reagent$impl$template$valid_tag_QMARK_(x){
return ((mranderson048.reagent.v0v7v0.reagent.impl.template.hiccup_tag_QMARK_.call(null,x)) || (cljs.core.ifn_QMARK_.call(null,x)) || ((x instanceof mranderson048.reagent.v0v7v0.reagent.impl.template.NativeWrapper)));
});
mranderson048.reagent.v0v7v0.reagent.impl.template.prop_name_cache = ({"class": "className", "for": "htmlFor", "charset": "charSet"});
mranderson048.reagent.v0v7v0.reagent.impl.template.cache_get = (function mranderson048$reagent$v0v7v0$reagent$impl$template$cache_get(o,k){
if(o.hasOwnProperty(k)){
return (o[k]);
} else {
return null;
}
});
mranderson048.reagent.v0v7v0.reagent.impl.template.cached_prop_name = (function mranderson048$reagent$v0v7v0$reagent$impl$template$cached_prop_name(k){
if(mranderson048.reagent.v0v7v0.reagent.impl.template.named_QMARK_.call(null,k)){
var temp__4659__auto__ = mranderson048.reagent.v0v7v0.reagent.impl.template.cache_get.call(null,mranderson048.reagent.v0v7v0.reagent.impl.template.prop_name_cache,cljs.core.name.call(null,k));
if((temp__4659__auto__ == null)){
return (mranderson048.reagent.v0v7v0.reagent.impl.template.prop_name_cache[cljs.core.name.call(null,k)] = mranderson048.reagent.v0v7v0.reagent.impl.util.dash_to_camel.call(null,k));
} else {
var k_SINGLEQUOTE_ = temp__4659__auto__;
return k_SINGLEQUOTE_;
}
} else {
return k;
}
});
mranderson048.reagent.v0v7v0.reagent.impl.template.js_val_QMARK_ = (function mranderson048$reagent$v0v7v0$reagent$impl$template$js_val_QMARK_(x){
return !(("object" === goog.typeOf(x)));
});
mranderson048.reagent.v0v7v0.reagent.impl.template.kv_conv = (function mranderson048$reagent$v0v7v0$reagent$impl$template$kv_conv(o,k,v){
var G__29693 = o;
(G__29693[mranderson048.reagent.v0v7v0.reagent.impl.template.cached_prop_name.call(null,k)] = mranderson048.reagent.v0v7v0.reagent.impl.template.convert_prop_value.call(null,v));

return G__29693;
});
mranderson048.reagent.v0v7v0.reagent.impl.template.convert_prop_value = (function mranderson048$reagent$v0v7v0$reagent$impl$template$convert_prop_value(x){
if(mranderson048.reagent.v0v7v0.reagent.impl.template.js_val_QMARK_.call(null,x)){
return x;
} else {
if(mranderson048.reagent.v0v7v0.reagent.impl.template.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(cljs.core.map_QMARK_.call(null,x)){
return cljs.core.reduce_kv.call(null,mranderson048.reagent.v0v7v0.reagent.impl.template.kv_conv,({}),x);
} else {
if(cljs.core.coll_QMARK_.call(null,x)){
return cljs.core.clj__GT_js.call(null,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,x)){
return (function() { 
var G__29694__delegate = function (args){
return cljs.core.apply.call(null,x,args);
};
var G__29694 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29695__i = 0, G__29695__a = new Array(arguments.length -  0);
while (G__29695__i < G__29695__a.length) {G__29695__a[G__29695__i] = arguments[G__29695__i + 0]; ++G__29695__i;}
  args = new cljs.core.IndexedSeq(G__29695__a,0,null);
} 
return G__29694__delegate.call(this,args);};
G__29694.cljs$lang$maxFixedArity = 0;
G__29694.cljs$lang$applyTo = (function (arglist__29696){
var args = cljs.core.seq(arglist__29696);
return G__29694__delegate(args);
});
G__29694.cljs$core$IFn$_invoke$arity$variadic = G__29694__delegate;
return G__29694;
})()
;
} else {
return cljs.core.clj__GT_js.call(null,x);

}
}
}
}
}
});
mranderson048.reagent.v0v7v0.reagent.impl.template.oset = (function mranderson048$reagent$v0v7v0$reagent$impl$template$oset(o,k,v){
var G__29697 = (((o == null))?({}):o);
(G__29697[k] = v);

return G__29697;
});
mranderson048.reagent.v0v7v0.reagent.impl.template.oget = (function mranderson048$reagent$v0v7v0$reagent$impl$template$oget(o,k){
if((o == null)){
return null;
} else {
return (o[k]);
}
});
mranderson048.reagent.v0v7v0.reagent.impl.template.set_id_class = (function mranderson048$reagent$v0v7v0$reagent$impl$template$set_id_class(p,id_class){
var id = (id_class["id"]);
var p__$1 = ((((!((id == null))) && ((mranderson048.reagent.v0v7v0.reagent.impl.template.oget.call(null,p,"id") == null))))?mranderson048.reagent.v0v7v0.reagent.impl.template.oset.call(null,p,"id",id):p);
var temp__4659__auto__ = (id_class["className"]);
if((temp__4659__auto__ == null)){
return p__$1;
} else {
var class$ = temp__4659__auto__;
var old = mranderson048.reagent.v0v7v0.reagent.impl.template.oget.call(null,p__$1,"className");
return mranderson048.reagent.v0v7v0.reagent.impl.template.oset.call(null,p__$1,"className",(((old == null))?class$:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(old)].join('')));
}
});
mranderson048.reagent.v0v7v0.reagent.impl.template.convert_props = (function mranderson048$reagent$v0v7v0$reagent$impl$template$convert_props(props,id_class){
return mranderson048.reagent.v0v7v0.reagent.impl.template.set_id_class.call(null,mranderson048.reagent.v0v7v0.reagent.impl.template.convert_prop_value.call(null,props),id_class);
});
if(typeof mranderson048.reagent.v0v7v0.reagent.impl.template.find_dom_node !== 'undefined'){
} else {
mranderson048.reagent.v0v7v0.reagent.impl.template.find_dom_node = null;
}
mranderson048.reagent.v0v7v0.reagent.impl.template.these_inputs_have_selection_api = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, ["url",null,"tel",null,"text",null,"textarea",null,"password",null,"search",null], null), null);
mranderson048.reagent.v0v7v0.reagent.impl.template.has_selection_api_QMARK_ = (function mranderson048$reagent$v0v7v0$reagent$impl$template$has_selection_api_QMARK_(input_type){
return cljs.core.contains_QMARK_.call(null,mranderson048.reagent.v0v7v0.reagent.impl.template.these_inputs_have_selection_api,input_type);
});
mranderson048.reagent.v0v7v0.reagent.impl.template.input_set_value = (function mranderson048$reagent$v0v7v0$reagent$impl$template$input_set_value(this$){
if(cljs.core.truth_((this$["cljsInputLive"]))){
(this$["cljsInputDirty"] = false);

var rendered_value = (this$["cljsRenderedValue"]);
var dom_value = (this$["cljsDOMValue"]);
var node = mranderson048.reagent.v0v7v0.reagent.impl.template.find_dom_node.call(null,this$);
if(cljs.core.not_EQ_.call(null,rendered_value,dom_value)){
if(!((((node === (document["activeElement"]))) && (mranderson048.reagent.v0v7v0.reagent.impl.template.has_selection_api_QMARK_.call(null,(node["type"]))) && (typeof rendered_value === 'string') && (typeof dom_value === 'string')))){
(this$["cljsDOMValue"] = rendered_value);

return (node["value"] = rendered_value);
} else {
var node_value = (node["value"]);
if(cljs.core.not_EQ_.call(null,node_value,dom_value)){
return mranderson048.reagent.v0v7v0.reagent.impl.batching.do_after_render.call(null,((function (node_value,rendered_value,dom_value,node){
return (function (){
return mranderson048.reagent.v0v7v0.reagent.impl.template.input_set_value.call(null,this$);
});})(node_value,rendered_value,dom_value,node))
);
} else {
var existing_offset_from_end = (cljs.core.count.call(null,node_value) - (node["selectionStart"]));
var new_cursor_offset = (cljs.core.count.call(null,rendered_value) - existing_offset_from_end);
(this$["cljsDOMValue"] = rendered_value);

(node["value"] = rendered_value);

(node["selectionStart"] = new_cursor_offset);

return (node["selectionEnd"] = new_cursor_offset);
}
}
} else {
return null;
}
} else {
return null;
}
});
mranderson048.reagent.v0v7v0.reagent.impl.template.input_handle_change = (function mranderson048$reagent$v0v7v0$reagent$impl$template$input_handle_change(this$,on_change,e){
(this$["cljsDOMValue"] = e.target.value);

if(cljs.core.truth_((this$["cljsInputDirty"]))){
} else {
(this$["cljsInputDirty"] = true);

mranderson048.reagent.v0v7v0.reagent.impl.batching.do_after_render.call(null,(function (){
return mranderson048.reagent.v0v7v0.reagent.impl.template.input_set_value.call(null,this$);
}));
}

return on_change.call(null,e);
});
mranderson048.reagent.v0v7v0.reagent.impl.template.input_render_setup = (function mranderson048$reagent$v0v7v0$reagent$impl$template$input_render_setup(this$,jsprops){
if(cljs.core.truth_((function (){var and__3911__auto__ = !((jsprops == null));
if(and__3911__auto__){
var and__3911__auto____$1 = jsprops.hasOwnProperty("onChange");
if(cljs.core.truth_(and__3911__auto____$1)){
return jsprops.hasOwnProperty("value");
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())){
if(cljs.core.truth_(mranderson048.reagent.v0v7v0.reagent.impl.template.find_dom_node)){
} else {
throw (new Error(["Assert failed: ","reagent.dom needs to be loaded for controlled input to work","\n","find-dom-node"].join('')));
}

var v = (jsprops["value"]);
var value = (((v == null))?"":v);
var on_change = (jsprops["onChange"]);
if(cljs.core.truth_((this$["cljsInputLive"]))){
} else {
(this$["cljsInputLive"] = true);

(this$["cljsDOMValue"] = value);
}

(this$["cljsRenderedValue"] = value);

delete jsprops["value"];

var G__29699 = jsprops;
(G__29699["defaultValue"] = value);

(G__29699["onChange"] = ((function (G__29699,v,value,on_change){
return (function (p1__29698_SHARP_){
return mranderson048.reagent.v0v7v0.reagent.impl.template.input_handle_change.call(null,this$,on_change,p1__29698_SHARP_);
});})(G__29699,v,value,on_change))
);

return G__29699;
} else {
return null;
}
});
mranderson048.reagent.v0v7v0.reagent.impl.template.input_unmount = (function mranderson048$reagent$v0v7v0$reagent$impl$template$input_unmount(this$){
return (this$["cljsInputLive"] = null);
});
mranderson048.reagent.v0v7v0.reagent.impl.template.input_component_QMARK_ = (function mranderson048$reagent$v0v7v0$reagent$impl$template$input_component_QMARK_(x){
var G__29700 = x;
switch (G__29700) {
case "input":
case "textarea":
return true;

break;
default:
return false;

}
});
mranderson048.reagent.v0v7v0.reagent.impl.template.reagent_input_class = null;
mranderson048.reagent.v0v7v0.reagent.impl.template.input_spec = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display-name","display-name",694513143),"ReagentInput",new cljs.core.Keyword(null,"component-did-update","component-did-update",-1468549173),mranderson048.reagent.v0v7v0.reagent.impl.template.input_set_value,new cljs.core.Keyword(null,"component-will-unmount","component-will-unmount",-2058314698),mranderson048.reagent.v0v7v0.reagent.impl.template.input_unmount,new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (argv,comp,jsprops,first_child){
var this$ = mranderson048.reagent.v0v7v0.reagent.impl.component._STAR_current_component_STAR_;
mranderson048.reagent.v0v7v0.reagent.impl.template.input_render_setup.call(null,this$,jsprops);

return mranderson048.reagent.v0v7v0.reagent.impl.template.make_element.call(null,argv,comp,jsprops,first_child);
})], null);
mranderson048.reagent.v0v7v0.reagent.impl.template.reagent_input = (function mranderson048$reagent$v0v7v0$reagent$impl$template$reagent_input(){
if((mranderson048.reagent.v0v7v0.reagent.impl.template.reagent_input_class == null)){
mranderson048.reagent.v0v7v0.reagent.impl.template.reagent_input_class = mranderson048.reagent.v0v7v0.reagent.impl.component.create_class.call(null,mranderson048.reagent.v0v7v0.reagent.impl.template.input_spec);
} else {
}

return mranderson048.reagent.v0v7v0.reagent.impl.template.reagent_input_class;
});
mranderson048.reagent.v0v7v0.reagent.impl.template.parse_tag = (function mranderson048$reagent$v0v7v0$reagent$impl$template$parse_tag(hiccup_tag){
var vec__29702 = cljs.core.next.call(null,cljs.core.re_matches.call(null,mranderson048.reagent.v0v7v0.reagent.impl.template.re_tag,cljs.core.name.call(null,hiccup_tag)));
var tag = cljs.core.nth.call(null,vec__29702,(0),null);
var id = cljs.core.nth.call(null,vec__29702,(1),null);
var class$ = cljs.core.nth.call(null,vec__29702,(2),null);
var class$__$1 = (((class$ == null))?null:clojure.string.replace.call(null,class$,/\./," "));
if(cljs.core.truth_(tag)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["Invalid tag: '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(hiccup_tag),"'",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.reagent.v0v7v0.reagent.impl.component.comp_name.call(null))].join('')),"\n","tag"].join('')));
}

return ({"name": tag, "id": id, "className": class$__$1});
});
mranderson048.reagent.v0v7v0.reagent.impl.template.try_get_key = (function mranderson048$reagent$v0v7v0$reagent$impl$template$try_get_key(x){
try{return cljs.core.get.call(null,x,new cljs.core.Keyword(null,"key","key",-1516042587));
}catch (e29705){var e = e29705;
return null;
}});
mranderson048.reagent.v0v7v0.reagent.impl.template.get_key = (function mranderson048$reagent$v0v7v0$reagent$impl$template$get_key(x){
if(cljs.core.map_QMARK_.call(null,x)){
return mranderson048.reagent.v0v7v0.reagent.impl.template.try_get_key.call(null,x);
} else {
return null;
}
});
mranderson048.reagent.v0v7v0.reagent.impl.template.key_from_vec = (function mranderson048$reagent$v0v7v0$reagent$impl$template$key_from_vec(v){
var temp__4659__auto__ = mranderson048.reagent.v0v7v0.reagent.impl.template.get_key.call(null,cljs.core.meta.call(null,v));
if((temp__4659__auto__ == null)){
return mranderson048.reagent.v0v7v0.reagent.impl.template.get_key.call(null,cljs.core.nth.call(null,v,(1),null));
} else {
var k = temp__4659__auto__;
return k;
}
});
mranderson048.reagent.v0v7v0.reagent.impl.template.reag_element = (function mranderson048$reagent$v0v7v0$reagent$impl$template$reag_element(tag,v){
var c = mranderson048.reagent.v0v7v0.reagent.impl.component.as_class.call(null,tag);
var jsprops = ({"argv": v});
var temp__4661__auto___29706 = mranderson048.reagent.v0v7v0.reagent.impl.template.key_from_vec.call(null,v);
if((temp__4661__auto___29706 == null)){
} else {
var key_29707 = temp__4661__auto___29706;
(jsprops["key"] = key_29707);
}

return (mranderson048.reagent.v0v7v0.reagent.impl.util.react["createElement"])(c,jsprops);
});
mranderson048.reagent.v0v7v0.reagent.impl.template.adapt_react_class = (function mranderson048$reagent$v0v7v0$reagent$impl$template$adapt_react_class(c){
var G__29708 = mranderson048.reagent.v0v7v0.reagent.impl.template.__GT_NativeWrapper.call(null);
(G__29708["name"] = c);

(G__29708["id"] = null);

(G__29708["class"] = null);

return G__29708;
});
mranderson048.reagent.v0v7v0.reagent.impl.template.tag_name_cache = ({});
mranderson048.reagent.v0v7v0.reagent.impl.template.cached_parse = (function mranderson048$reagent$v0v7v0$reagent$impl$template$cached_parse(x){
var temp__4659__auto__ = mranderson048.reagent.v0v7v0.reagent.impl.template.cache_get.call(null,mranderson048.reagent.v0v7v0.reagent.impl.template.tag_name_cache,x);
if((temp__4659__auto__ == null)){
return (mranderson048.reagent.v0v7v0.reagent.impl.template.tag_name_cache[x] = mranderson048.reagent.v0v7v0.reagent.impl.template.parse_tag.call(null,x));
} else {
var s = temp__4659__auto__;
return s;
}
});
mranderson048.reagent.v0v7v0.reagent.impl.template.native_element = (function mranderson048$reagent$v0v7v0$reagent$impl$template$native_element(parsed,argv,first){
var comp = (parsed["name"]);
var props = cljs.core.nth.call(null,argv,first,null);
var hasprops = (((props == null)) || (cljs.core.map_QMARK_.call(null,props)));
var jsprops = mranderson048.reagent.v0v7v0.reagent.impl.template.convert_props.call(null,((hasprops)?props:null),parsed);
var first_child = (first + ((hasprops)?(1):(0)));
if(mranderson048.reagent.v0v7v0.reagent.impl.template.input_component_QMARK_.call(null,comp)){
return mranderson048.reagent.v0v7v0.reagent.impl.template.as_element.call(null,cljs.core.with_meta.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [mranderson048.reagent.v0v7v0.reagent.impl.template.reagent_input.call(null),argv,comp,jsprops,first_child], null),cljs.core.meta.call(null,argv)));
} else {
var key = mranderson048.reagent.v0v7v0.reagent.impl.template.get_key.call(null,cljs.core.meta.call(null,argv));
var p = (((key == null))?jsprops:mranderson048.reagent.v0v7v0.reagent.impl.template.oset.call(null,jsprops,"key",key));
return mranderson048.reagent.v0v7v0.reagent.impl.template.make_element.call(null,argv,comp,p,first_child);
}
});
mranderson048.reagent.v0v7v0.reagent.impl.template.str_coll = (function mranderson048$reagent$v0v7v0$reagent$impl$template$str_coll(coll){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.walk.prewalk.call(null,(function (x){
if(cljs.core.fn_QMARK_.call(null,x)){
var n = mranderson048.reagent.v0v7v0.reagent.impl.util.fun_name.call(null,x);
var G__29709 = n;
switch (G__29709) {
case "":
return x;

break;
default:
return cljs.core.symbol.call(null,n);

}
} else {
return x;
}
}),coll))].join('');

});
mranderson048.reagent.v0v7v0.reagent.impl.template.hiccup_err = (function mranderson048$reagent$v0v7v0$reagent$impl$template$hiccup_err(var_args){
var args__4502__auto__ = [];
var len__4499__auto___29713 = arguments.length;
var i__4500__auto___29714 = (0);
while(true){
if((i__4500__auto___29714 < len__4499__auto___29713)){
args__4502__auto__.push((arguments[i__4500__auto___29714]));

var G__29715 = (i__4500__auto___29714 + (1));
i__4500__auto___29714 = G__29715;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson048.reagent.v0v7v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson048.reagent.v0v7v0.reagent.impl.template.hiccup_err.cljs$core$IFn$_invoke$arity$variadic = (function (v,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.apply.call(null,cljs.core.str,msg)),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.reagent.v0v7v0.reagent.impl.template.str_coll.call(null,v)),"\n",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.reagent.v0v7v0.reagent.impl.component.comp_name.call(null))].join('');
});

mranderson048.reagent.v0v7v0.reagent.impl.template.hiccup_err.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.reagent.v0v7v0.reagent.impl.template.hiccup_err.cljs$lang$applyTo = (function (seq29711){
var G__29712 = cljs.core.first.call(null,seq29711);
var seq29711__$1 = cljs.core.next.call(null,seq29711);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29712,seq29711__$1);
});

mranderson048.reagent.v0v7v0.reagent.impl.template.vec_to_elem = (function mranderson048$reagent$v0v7v0$reagent$impl$template$vec_to_elem(v){
while(true){
if((cljs.core.count.call(null,v) > (0))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.reagent.v0v7v0.reagent.impl.template.hiccup_err.call(null,v,"Hiccup form should not be empty")),"\n","(pos? (count v))"].join('')));
}

var tag = cljs.core.nth.call(null,v,(0),null);
if(mranderson048.reagent.v0v7v0.reagent.impl.template.valid_tag_QMARK_.call(null,tag)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.reagent.v0v7v0.reagent.impl.template.hiccup_err.call(null,v,"Invalid Hiccup form")),"\n","(valid-tag? tag)"].join('')));
}

if(mranderson048.reagent.v0v7v0.reagent.impl.template.hiccup_tag_QMARK_.call(null,tag)){
var n = cljs.core.name.call(null,tag);
var pos = n.indexOf(">");
var G__29716 = pos;
switch (G__29716) {
case (-1):
return mranderson048.reagent.v0v7v0.reagent.impl.template.native_element.call(null,mranderson048.reagent.v0v7v0.reagent.impl.template.cached_parse.call(null,n),v,(1));

break;
case (0):
var comp = cljs.core.nth.call(null,v,(1),null);
if(cljs.core._EQ_.call(null,">",n)){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.reagent.v0v7v0.reagent.impl.template.hiccup_err.call(null,v,"Invalid Hiccup tag")),"\n","(= \">\" n)"].join('')));
}

if(((typeof comp === 'string') || (cljs.core.fn_QMARK_.call(null,comp)))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.reagent.v0v7v0.reagent.impl.template.hiccup_err.call(null,v,"Expected React component in")),"\n","(or (string? comp) (fn? comp))"].join('')));
}

return mranderson048.reagent.v0v7v0.reagent.impl.template.native_element.call(null,({"name": comp}),v,(2));

break;
default:
var G__29718 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.call(null,n,(0),pos),cljs.core.assoc.call(null,v,(0),cljs.core.subs.call(null,n,(pos + (1))))], null);
v = G__29718;
continue;

}
} else {
if((tag instanceof mranderson048.reagent.v0v7v0.reagent.impl.template.NativeWrapper)){
return mranderson048.reagent.v0v7v0.reagent.impl.template.native_element.call(null,tag,v,(1));
} else {
return mranderson048.reagent.v0v7v0.reagent.impl.template.reag_element.call(null,tag,v);

}
}
break;
}
});
mranderson048.reagent.v0v7v0.reagent.impl.template.as_element = (function mranderson048$reagent$v0v7v0$reagent$impl$template$as_element(x){
if(mranderson048.reagent.v0v7v0.reagent.impl.template.js_val_QMARK_.call(null,x)){
return x;
} else {
if(cljs.core.vector_QMARK_.call(null,x)){
return mranderson048.reagent.v0v7v0.reagent.impl.template.vec_to_elem.call(null,x);
} else {
if(cljs.core.seq_QMARK_.call(null,x)){
return mranderson048.reagent.v0v7v0.reagent.impl.template.expand_seq_check.call(null,x);

} else {
if(mranderson048.reagent.v0v7v0.reagent.impl.template.named_QMARK_.call(null,x)){
return cljs.core.name.call(null,x);
} else {
if(((!((x == null)))?(((((x.cljs$lang$protocol_mask$partition0$ & (2147483648))) || ((cljs.core.PROTOCOL_SENTINEL === x.cljs$core$IPrintWithWriter$))))?true:(((!x.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,x):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.IPrintWithWriter,x))){
return cljs.core.pr_str.call(null,x);
} else {
return x;

}
}
}
}
}
});
mranderson048.reagent.v0v7v0.reagent.impl.component.as_element = mranderson048.reagent.v0v7v0.reagent.impl.template.as_element;
mranderson048.reagent.v0v7v0.reagent.impl.template.expand_seq = (function mranderson048$reagent$v0v7v0$reagent$impl$template$expand_seq(s){
var a = cljs.core.into_array.call(null,s);
var n__4376__auto___29720 = a.length;
var i_29721 = (0);
while(true){
if((i_29721 < n__4376__auto___29720)){
(a[i_29721] = mranderson048.reagent.v0v7v0.reagent.impl.template.as_element.call(null,(a[i_29721])));

var G__29722 = (i_29721 + (1));
i_29721 = G__29722;
continue;
} else {
}
break;
}

return a;
});
mranderson048.reagent.v0v7v0.reagent.impl.template.expand_seq_dev = (function mranderson048$reagent$v0v7v0$reagent$impl$template$expand_seq_dev(s,o){
var a = cljs.core.into_array.call(null,s);
var n__4376__auto___29723 = a.length;
var i_29724 = (0);
while(true){
if((i_29724 < n__4376__auto___29723)){
var val_29725 = (a[i_29724]);
if(((cljs.core.vector_QMARK_.call(null,val_29725)) && ((mranderson048.reagent.v0v7v0.reagent.impl.template.key_from_vec.call(null,val_29725) == null)))){
(o["no-key"] = true);
} else {
}

(a[i_29724] = mranderson048.reagent.v0v7v0.reagent.impl.template.as_element.call(null,val_29725));

var G__29726 = (i_29724 + (1));
i_29724 = G__29726;
continue;
} else {
}
break;
}

return a;
});
mranderson048.reagent.v0v7v0.reagent.impl.template.expand_seq_check = (function mranderson048$reagent$v0v7v0$reagent$impl$template$expand_seq_check(x){
var ctx = ({});
var vec__29727 = mranderson048.reagent.v0v7v0.reagent.ratom.check_derefs.call(null,((function (ctx){
return (function (){
return mranderson048.reagent.v0v7v0.reagent.impl.template.expand_seq_dev.call(null,x,ctx);
});})(ctx))
);
var res = cljs.core.nth.call(null,vec__29727,(0),null);
var derefed = cljs.core.nth.call(null,vec__29727,(1),null);
if(cljs.core.truth_(derefed)){
if(cljs.core.truth_(mranderson048.reagent.v0v7v0.reagent.debug.has_console)){
(cljs.core.truth_(mranderson048.reagent.v0v7v0.reagent.debug.tracking)?mranderson048.reagent.v0v7v0.reagent.debug.track_console:console).warn(["Warning: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.reagent.v0v7v0.reagent.impl.template.hiccup_err.call(null,x,"Reactive deref not supported in lazy seq, ","it should be wrapped in doall"))].join(''));
} else {
}
} else {
}

if(cljs.core.truth_((ctx["no-key"]))){
if(cljs.core.truth_(mranderson048.reagent.v0v7v0.reagent.debug.has_console)){
(cljs.core.truth_(mranderson048.reagent.v0v7v0.reagent.debug.tracking)?mranderson048.reagent.v0v7v0.reagent.debug.track_console:console).warn(["Warning: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(mranderson048.reagent.v0v7v0.reagent.impl.template.hiccup_err.call(null,x,"Every element in a seq should have a unique :key"))].join(''));
} else {
}
} else {
}

return res;
});
mranderson048.reagent.v0v7v0.reagent.impl.template.make_element = (function mranderson048$reagent$v0v7v0$reagent$impl$template$make_element(argv,comp,jsprops,first_child){
var G__29730 = (cljs.core.count.call(null,argv) - first_child);
switch (G__29730) {
case (0):
return (mranderson048.reagent.v0v7v0.reagent.impl.util.react["createElement"])(comp,jsprops);

break;
case (1):
return (mranderson048.reagent.v0v7v0.reagent.impl.util.react["createElement"])(comp,jsprops,mranderson048.reagent.v0v7v0.reagent.impl.template.as_element.call(null,cljs.core.nth.call(null,argv,first_child,null)));

break;
default:
return (mranderson048.reagent.v0v7v0.reagent.impl.util.react["createElement"]).apply(null,cljs.core.reduce_kv.call(null,((function (G__29730){
return (function (a,k,v){
if((k >= first_child)){
a.push(mranderson048.reagent.v0v7v0.reagent.impl.template.as_element.call(null,v));
} else {
}

return a;
});})(G__29730))
,[comp,jsprops],argv));

}
});

//# sourceMappingURL=template.js.map?rel=1531954907034
