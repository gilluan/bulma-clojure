// Compiled by ClojureScript 1.10.238 {}
goog.provide('mranderson048.garden.v1v3v3.garden.stylesheet');
goog.require('cljs.core');
goog.require('mranderson048.garden.v1v3v3.garden.util');
goog.require('mranderson048.garden.v1v3v3.garden.color');
goog.require('mranderson048.garden.v1v3v3.garden.types');
/**
 * Create a rule function for the given selector. The `selector`
 *   argument must be valid selector (ie. a keyword, string, or symbol).
 *   Additional arguments may consist of extra selectors or
 *   declarations.
 * 
 *   The returned function accepts any number of arguments which represent
 *   the rule's children.
 * 
 *   Ex.
 *    (let [text-field (rule "[type="text"])]
 *     (text-field {:border ["1px" :solid "black"]}))
 *    ;; => ["[type="text"] {:boder ["1px" :solid "black"]}]
 */
mranderson048.garden.v1v3v3.garden.stylesheet.rule = (function mranderson048$garden$v1v3v3$garden$stylesheet$rule(var_args){
var args__4502__auto__ = [];
var len__4499__auto___33814 = arguments.length;
var i__4500__auto___33815 = (0);
while(true){
if((i__4500__auto___33815 < len__4499__auto___33814)){
args__4502__auto__.push((arguments[i__4500__auto___33815]));

var G__33816 = (i__4500__auto___33815 + (1));
i__4500__auto___33815 = G__33816;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson048.garden.v1v3v3.garden.stylesheet.rule.cljs$core$IFn$_invoke$arity$variadic = (function (selector,more){
if(!((((selector instanceof cljs.core.Keyword)) || (typeof selector === 'string') || ((selector instanceof cljs.core.Symbol))))){
throw cljs.core.ex_info.call(null,"Selector must be either a keyword, string, or symbol.",cljs.core.PersistentArrayMap.EMPTY);
} else {
return (function() { 
var G__33817__delegate = function (children){
return cljs.core.into.call(null,cljs.core.apply.call(null,cljs.core.vector,selector,more),children);
};
var G__33817 = function (var_args){
var children = null;
if (arguments.length > 0) {
var G__33818__i = 0, G__33818__a = new Array(arguments.length -  0);
while (G__33818__i < G__33818__a.length) {G__33818__a[G__33818__i] = arguments[G__33818__i + 0]; ++G__33818__i;}
  children = new cljs.core.IndexedSeq(G__33818__a,0,null);
} 
return G__33817__delegate.call(this,children);};
G__33817.cljs$lang$maxFixedArity = 0;
G__33817.cljs$lang$applyTo = (function (arglist__33819){
var children = cljs.core.seq(arglist__33819);
return G__33817__delegate(children);
});
G__33817.cljs$core$IFn$_invoke$arity$variadic = G__33817__delegate;
return G__33817;
})()
;
}
});

mranderson048.garden.v1v3v3.garden.stylesheet.rule.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.stylesheet.rule.cljs$lang$applyTo = (function (seq33812){
var G__33813 = cljs.core.first.call(null,seq33812);
var seq33812__$1 = cljs.core.next.call(null,seq33812);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33813,seq33812__$1);
});

mranderson048.garden.v1v3v3.garden.stylesheet.cssfn = (function mranderson048$garden$v1v3v3$garden$stylesheet$cssfn(fn_name){
return (function() { 
var G__33820__delegate = function (args){
return (new mranderson048.garden.v1v3v3.garden.types.CSSFunction(fn_name,args,null,null,null));
};
var G__33820 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33821__i = 0, G__33821__a = new Array(arguments.length -  0);
while (G__33821__i < G__33821__a.length) {G__33821__a[G__33821__i] = arguments[G__33821__i + 0]; ++G__33821__i;}
  args = new cljs.core.IndexedSeq(G__33821__a,0,null);
} 
return G__33820__delegate.call(this,args);};
G__33820.cljs$lang$maxFixedArity = 0;
G__33820.cljs$lang$applyTo = (function (arglist__33822){
var args = cljs.core.seq(arglist__33822);
return G__33820__delegate(args);
});
G__33820.cljs$core$IFn$_invoke$arity$variadic = G__33820__delegate;
return G__33820;
})()
;
});
mranderson048.garden.v1v3v3.garden.stylesheet.at_rule = (function mranderson048$garden$v1v3v3$garden$stylesheet$at_rule(identifier,value){
return (new mranderson048.garden.v1v3v3.garden.types.CSSAtRule(identifier,value,null,null,null));
});
/**
 * Create a CSS @font-face rule.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.at_font_face = (function mranderson048$garden$v1v3v3$garden$stylesheet$at_font_face(var_args){
var args__4502__auto__ = [];
var len__4499__auto___33824 = arguments.length;
var i__4500__auto___33825 = (0);
while(true){
if((i__4500__auto___33825 < len__4499__auto___33824)){
args__4502__auto__.push((arguments[i__4500__auto___33825]));

var G__33826 = (i__4500__auto___33825 + (1));
i__4500__auto___33825 = G__33826;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((0) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((0)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic(argseq__4503__auto__);
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$core$IFn$_invoke$arity$variadic = (function (font_properties){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["@font-face",font_properties], null);
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$lang$maxFixedArity = (0);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.stylesheet.at_font_face.cljs$lang$applyTo = (function (seq33823){
var self__4487__auto__ = this;
return self__4487__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33823));
});

/**
 * Create a CSS @import rule.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.at_import = (function mranderson048$garden$v1v3v3$garden$stylesheet$at_import(var_args){
var G__33830 = arguments.length;
switch (G__33830) {
case 1:
return mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__4514__auto__ = [];
var len__4499__auto___33832 = arguments.length;
var i__4500__auto___33833 = (0);
while(true){
if((i__4500__auto___33833 < len__4499__auto___33832)){
args_arr__4514__auto__.push((arguments[i__4500__auto___33833]));

var G__33834 = (i__4500__auto___33833 + (1));
i__4500__auto___33833 = G__33834;
continue;
} else {
}
break;
}

var argseq__4515__auto__ = (new cljs.core.IndexedSeq(args_arr__4514__auto__.slice((1)),(0),null));
return mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4515__auto__);

}
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$1 = (function (url){
return mranderson048.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),null], null));
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$core$IFn$_invoke$arity$variadic = (function (url,media_queries){
return mranderson048.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"url","url",276297046),url,new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries], null));
});

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$lang$applyTo = (function (seq33828){
var G__33829 = cljs.core.first.call(null,seq33828);
var seq33828__$1 = cljs.core.next.call(null,seq33828);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33829,seq33828__$1);
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_import.cljs$lang$maxFixedArity = (1);

/**
 * Create a CSS @media rule.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.at_media = (function mranderson048$garden$v1v3v3$garden$stylesheet$at_media(var_args){
var args__4502__auto__ = [];
var len__4499__auto___33837 = arguments.length;
var i__4500__auto___33838 = (0);
while(true){
if((i__4500__auto___33838 < len__4499__auto___33837)){
args__4502__auto__.push((arguments[i__4500__auto___33838]));

var G__33839 = (i__4500__auto___33838 + (1));
i__4500__auto___33838 = G__33839;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_media.cljs$core$IFn$_invoke$arity$variadic = (function (media_queries,rules){
return mranderson048.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"media-queries","media-queries",-1563277678),media_queries,new cljs.core.Keyword(null,"rules","rules",1198912366),rules], null));
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_media.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.stylesheet.at_media.cljs$lang$applyTo = (function (seq33835){
var G__33836 = cljs.core.first.call(null,seq33835);
var seq33835__$1 = cljs.core.next.call(null,seq33835);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33836,seq33835__$1);
});

/**
 * Create a CSS @keyframes rule.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.at_keyframes = (function mranderson048$garden$v1v3v3$garden$stylesheet$at_keyframes(var_args){
var args__4502__auto__ = [];
var len__4499__auto___33842 = arguments.length;
var i__4500__auto___33843 = (0);
while(true){
if((i__4500__auto___33843 < len__4499__auto___33842)){
args__4502__auto__.push((arguments[i__4500__auto___33843]));

var G__33844 = (i__4500__auto___33843 + (1));
i__4500__auto___33843 = G__33844;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return mranderson048.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$core$IFn$_invoke$arity$variadic = (function (identifier,frames){
return mranderson048.garden.v1v3v3.garden.stylesheet.at_rule.call(null,new cljs.core.Keyword(null,"keyframes","keyframes",-1437976012),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"identifier","identifier",-805503498),identifier,new cljs.core.Keyword(null,"frames","frames",1765687497),frames], null));
});

mranderson048.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
mranderson048.garden.v1v3v3.garden.stylesheet.at_keyframes.cljs$lang$applyTo = (function (seq33840){
var G__33841 = cljs.core.first.call(null,seq33840);
var seq33840__$1 = cljs.core.next.call(null,seq33840);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33841,seq33840__$1);
});

/**
 * Create a color from RGB values.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.rgb = (function mranderson048$garden$v1v3v3$garden$stylesheet$rgb(r,g,b){
return mranderson048.garden.v1v3v3.garden.color.rgb.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
});
/**
 * Create a color from HSL values.
 */
mranderson048.garden.v1v3v3.garden.stylesheet.hsl = (function mranderson048$garden$v1v3v3$garden$stylesheet$hsl(h,s,l){
return mranderson048.garden.v1v3v3.garden.color.hsl.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,s,l], null));
});

//# sourceMappingURL=stylesheet.js.map?rel=1531954924193
