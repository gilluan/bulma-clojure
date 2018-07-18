// Compiled by ClojureScript 1.10.238 {}
goog.provide('zprint.zutil');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zfns');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.whitespace');
goog.require('clojure.zip');
zprint.zutil.down_STAR_ = clojure.zip.down;
zprint.zutil.up_STAR_ = clojure.zip.up;
zprint.zutil.right_STAR_ = clojure.zip.right;
zprint.zutil.left_STAR_ = clojure.zip.left;
zprint.zutil.next_STAR_ = clojure.zip.next;
zprint.zutil.prev_STAR_ = clojure.zip.prev;
zprint.zutil.replace_STAR_ = clojure.zip.replace;
zprint.zutil.edn_STAR_ = rewrite_clj.zip.base.edn_STAR_;
zprint.zutil.sexpr = rewrite_clj.zip.base.sexpr;
zprint.zutil.string = rewrite_clj.zip.base.string;
zprint.zutil.tag = rewrite_clj.zip.base.tag;
zprint.zutil.skip = rewrite_clj.zip.whitespace.skip;
zprint.zutil.skip_whitespace = rewrite_clj.zip.whitespace.skip_whitespace;
zprint.zutil.whitespace_QMARK_ = rewrite_clj.zip.whitespace.whitespace_QMARK_;
zprint.zutil.whitespace_or_comment_QMARK_ = rewrite_clj.zip.whitespace.whitespace_or_comment_QMARK_;
zprint.zutil.length = rewrite_clj.zip.base.length;
/**
 * Is the zipper zloc equivalent to the path floc.  In this
 *   case, floc isn't a zipper, but was turned into a path early on.
 */
zprint.zutil.zfocus = (function zprint$zutil$zfocus(zloc,floc){
var vec__31142 = zprint.zutil.find_root_and_path.call(null,zloc);
var _ = cljs.core.nth.call(null,vec__31142,(0),null);
var zpath = cljs.core.nth.call(null,vec__31142,(1),null);
return cljs.core._EQ_.call(null,zpath,floc);
});
/**
 * Take the various inputs and come up with a style.
 */
zprint.zutil.zfocus_style = (function zprint$zutil$zfocus_style(style,zloc,floc){
var style__$1 = ((cljs.core._EQ_.call(null,style,new cljs.core.Keyword(null,"f","f",-1597136552)))?style:(cljs.core.truth_(zprint.zutil.zfocus.call(null,zloc,floc))?new cljs.core.Keyword(null,"f","f",-1597136552):new cljs.core.Keyword(null,"b","b",1482224470)));
return style__$1;
});
/**
 * Is the zloc a collection?
 */
zprint.zutil.z_coll_QMARK_ = (function zprint$zutil$z_coll_QMARK_(zloc){
return rewrite_clj.zip.seq_QMARK_.call(null,zloc);
});
/**
 * Is this a #_(...)
 */
zprint.zutil.zuneval_QMARK_ = (function zprint$zutil$zuneval_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"uneval","uneval",1932037707));
});
/**
 * Is this a ^{...}
 */
zprint.zutil.zmeta_QMARK_ = (function zprint$zutil$zmeta_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"meta","meta",1499536964));
});
/**
 * Is this a '(...) or '[ ... ] or some other quote?
 */
zprint.zutil.zquote_QMARK_ = (function zprint$zutil$zquote_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"quote","quote",-262615245));
});
/**
 * Is this a @...
 */
zprint.zutil.zreader_macro_QMARK_ = (function zprint$zutil$zreader_macro_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"reader-macro","reader-macro",750056422));
});
/**
 * Return the tag for this zloc
 */
zprint.zutil.ztag = (function zprint$zutil$ztag(zloc){
return zprint.zutil.tag.call(null,zloc);
});
/**
 * Turn an uneval zloc with #_ starting it into a zipper.
 */
zprint.zutil.zparseuneval = (function zprint$zutil$zparseuneval(zloc){
return zprint.zutil.edn_STAR_.call(null,rewrite_clj.parser.parse_string.call(null,clojure.string.triml.call(null,clojure.string.replace_first.call(null,zprint.zutil.string.call(null,zloc),/#_/,""))));
});
/**
 * Turn a zloc into an #_ uneval zipper.
 */
zprint.zutil.zcreateuneval = (function zprint$zutil$zcreateuneval(zloc){
return zprint.zutil.edn_STAR_.call(null,rewrite_clj.parser.parse_string.call(null,clojure.string.triml.call(null,["#_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zutil.string.call(null,zloc))].join(''))));
});
/**
 * Returns true if this is a comment.
 */
zprint.zutil.zcomment_QMARK_ = (function zprint$zutil$zcomment_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"comment","comment",532206069));
} else {
return null;
}
});
/**
 * Returns true if this is a newline.
 */
zprint.zutil.znewline_QMARK_ = (function zprint$zutil$znewline_QMARK_(zloc){
if(cljs.core.truth_(zloc)){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"newline","newline",1790071323));
} else {
return null;
}
});
/**
 * Does z/string, but takes an additional argument for hex conversion.
 *   Hex conversion is not implemented for zippers, though, because at present
 *   it is only used for byte-arrays, which don't really show up here.
 */
zprint.zutil.znumstr = (function zprint$zutil$znumstr(zloc,_,___$1){
return zprint.zutil.string.call(null,zloc);
});
/**
 * Find the first non-whitespace zloc inside of this zloc, or
 *   the first whitespace zloc that is the focus.
 */
zprint.zutil.zfirst = (function zprint$zutil$zfirst(zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
});
/**
 * Find the first non-whitespace and non-comment zloc inside of this zloc.
 */
zprint.zutil.zfirst_no_comment = (function zprint$zutil$zfirst_no_comment(zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_or_comment_QMARK_,nloc);
} else {
return null;
}
});
/**
 * Find the second non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zsecond = (function zprint$zutil$zsecond(zloc){
var temp__4655__auto__ = zprint.zutil.zfirst.call(null,zloc);
if(cljs.core.truth_(temp__4655__auto__)){
var first_loc = temp__4655__auto__;
var temp__4655__auto____$1 = zprint.zutil.right_STAR_.call(null,first_loc);
if(cljs.core.truth_(temp__4655__auto____$1)){
var nloc = temp__4655__auto____$1;
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the third non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zthird = (function zprint$zutil$zthird(zloc){
var G__31145 = zprint.zutil.zfirst.call(null,zloc);
var G__31145__$1 = (((G__31145 == null))?null:zprint.zutil.right_STAR_.call(null,G__31145));
var G__31145__$2 = (((G__31145__$1 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__31145__$1));
var G__31145__$3 = (((G__31145__$2 == null))?null:zprint.zutil.right_STAR_.call(null,G__31145__$2));
if((G__31145__$3 == null)){
return null;
} else {
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__31145__$3);
}
});
/**
 * Find the fourth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zfourth = (function zprint$zutil$zfourth(zloc){
var G__31146 = zprint.zutil.zfirst.call(null,zloc);
var G__31146__$1 = (((G__31146 == null))?null:zprint.zutil.right_STAR_.call(null,G__31146));
var G__31146__$2 = (((G__31146__$1 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__31146__$1));
var G__31146__$3 = (((G__31146__$2 == null))?null:zprint.zutil.right_STAR_.call(null,G__31146__$2));
var G__31146__$4 = (((G__31146__$3 == null))?null:zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__31146__$3));
var G__31146__$5 = (((G__31146__$4 == null))?null:zprint.zutil.right_STAR_.call(null,G__31146__$4));
if((G__31146__$5 == null)){
return null;
} else {
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,G__31146__$5);
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zrightnws = (function zprint$zutil$zrightnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__4655__auto__ = zprint.zutil.right_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__4655__auto__)){
var nloc = temp__4655__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.right_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the rightmost non-whitespace zloc at this level
 */
zprint.zutil.zrightmost = (function zprint$zutil$zrightmost(zloc){
var nloc = zprint.zutil.zrightnws.call(null,zloc);
var ploc = zloc;
while(true){
if(cljs.core.not.call(null,nloc)){
return ploc;
} else {
var G__31147 = zprint.zutil.zrightnws.call(null,nloc);
var G__31148 = nloc;
nloc = G__31147;
ploc = G__31148;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc inside of this zloc.
 */
zprint.zutil.zleftnws = (function zprint$zutil$zleftnws(zloc){
if(cljs.core.truth_(zloc)){
var temp__4655__auto__ = zprint.zutil.left_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__4655__auto__)){
var nloc = temp__4655__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.left_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
} else {
return null;
}
});
/**
 * Find the leftmost non-whitespace zloc at this level
 */
zprint.zutil.zleftmost = (function zprint$zutil$zleftmost(zloc){
var nloc = zprint.zutil.zleftnws.call(null,zloc);
var ploc = zloc;
while(true){
if(cljs.core.not.call(null,nloc)){
return ploc;
} else {
var G__31149 = zprint.zutil.zleftnws.call(null,nloc);
var G__31150 = nloc;
nloc = G__31149;
ploc = G__31150;
continue;
}
break;
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.znextnws = (function zprint$zutil$znextnws(zloc){
if(cljs.core.truth_(rewrite_clj.zip.end_QMARK_.call(null,zloc))){
return zloc;
} else {
var temp__4655__auto__ = zprint.zutil.next_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__4655__auto__)){
var nloc = temp__4655__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.next_STAR_,zprint.zutil.whitespace_QMARK_,nloc);
} else {
return null;
}
}
});
/**
 * Find the next non-whitespace zloc.
 */
zprint.zutil.zprevnws = (function zprint$zutil$zprevnws(zloc){
var temp__4655__auto__ = zprint.zutil.prev_STAR_.call(null,zloc);
if(cljs.core.truth_(temp__4655__auto__)){
var ploc = temp__4655__auto__;
return zprint.zutil.skip.call(null,zprint.zutil.prev_STAR_,zprint.zutil.whitespace_QMARK_,ploc);
} else {
return null;
}
});
/**
 * Find the nth non-whitespace zloc inside of this zloc.
 */
zprint.zutil.znthnext = (function zprint$zutil$znthnext(zloc,n){
var nloc = zprint.zutil.skip_whitespace.call(null,zprint.zutil.down_STAR_.call(null,zloc));
var i = n;
while(true){
if((((nloc == null)) || (cljs.core._EQ_.call(null,i,(0))))){
return nloc;
} else {
var G__31151 = zprint.zutil.zrightnws.call(null,nloc);
var G__31152 = (i - (1));
nloc = G__31151;
i = G__31152;
continue;
}
break;
}
});
/**
 * Find the locations (counting from zero, and only counting non-whitespace
 *   elements) of the first zthing?.  Return its index if it is found, nil if not.
 */
zprint.zutil.zfind = (function zprint$zutil$zfind(zthing_QMARK_,zloc){
var nloc = zprint.zutil.skip_whitespace.call(null,zprint.zutil.down_STAR_.call(null,zloc));
var i = (0);
while(true){
if(!((nloc == null))){
if(cljs.core.truth_(zthing_QMARK_.call(null,nloc))){
return i;
} else {
var G__31153 = zprint.zutil.zrightnws.call(null,nloc);
var G__31154 = (i + (1));
nloc = G__31153;
i = G__31154;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc.
 */
zprint.zutil.zmap_w_nl = (function zprint$zutil$zmap_w_nl(zfn,zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__31155 = zprint.zutil.right_STAR_.call(null,nloc);
var G__31156 = (function (){var temp__4655__auto__ = ((cljs.core.not.call(null,(function (){var and__3911__auto__ = zprint.zutil.whitespace_QMARK_.call(null,nloc);
if(cljs.core.truth_(and__3911__auto__)){
return !(cljs.core._EQ_.call(null,rewrite_clj.zip.tag.call(null,nloc),new cljs.core.Keyword(null,"newline","newline",1790071323)));
} else {
return and__3911__auto__;
}
})()))?zfn.call(null,nloc):null);
if(cljs.core.truth_(temp__4655__auto__)){
var result = temp__4655__auto__;
return cljs.core.conj.call(null,out,result);
} else {
return out;
}
})();
nloc = G__31155;
out = G__31156;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every non-whitespace zloc inside of zloc.
 */
zprint.zutil.zmap = (function zprint$zutil$zmap(zfn,zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__31157 = zprint.zutil.right_STAR_.call(null,nloc);
var G__31158 = (function (){var temp__4655__auto__ = ((cljs.core.not.call(null,zprint.zutil.whitespace_QMARK_.call(null,nloc)))?zfn.call(null,nloc):null);
if(cljs.core.truth_(temp__4655__auto__)){
var result = temp__4655__auto__;
return cljs.core.conj.call(null,out,result);
} else {
return out;
}
})();
nloc = G__31157;
out = G__31158;
continue;
}
break;
}
});
/**
 * Return a vector containing the return of applying a function to 
 *   every zloc inside of zloc.
 */
zprint.zutil.zmap_all = (function zprint$zutil$zmap_all(zfn,zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__31159 = zprint.zutil.right_STAR_.call(null,nloc);
var G__31160 = cljs.core.conj.call(null,out,zfn.call(null,nloc));
nloc = G__31159;
out = G__31160;
continue;
}
break;
}
});
/**
 * Apply a function to every non-whitespace zloc to right of zloc.
 */
zprint.zutil.zmap_right = (function zprint$zutil$zmap_right(zfn,zloc){
var nloc = zprint.zutil.right_STAR_.call(null,zloc);
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.not.call(null,nloc)){
return out;
} else {
var G__31161 = zprint.zutil.right_STAR_.call(null,nloc);
var G__31162 = (cljs.core.truth_(zprint.zutil.whitespace_QMARK_.call(null,nloc))?out:cljs.core.conj.call(null,out,zfn.call(null,nloc)));
nloc = G__31161;
out = G__31162;
continue;
}
break;
}
});
/**
 * Return a seq of all of the non-whitespace children of zloc.
 */
zprint.zutil.zseqnws = (function zprint$zutil$zseqnws(zloc){
return zprint.zutil.zmap.call(null,cljs.core.identity,zloc);
});
/**
 * How many non-whitespace children does zloc have?
 */
zprint.zutil.zcount = (function zprint$zutil$zcount(zloc){
return cljs.core.count.call(null,zprint.zutil.zseqnws.call(null,zloc));
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves include
 *   both whitespace and comments.
 */
zprint.zutil.find_root_and_path = (function zprint$zutil$find_root_and_path(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not.call(null,zprint.zutil.left_STAR_.call(null,nloc))){
if(cljs.core.not.call(null,zprint.zutil.up_STAR_.call(null,nloc))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__31163 = zprint.zutil.up_STAR_.call(null,nloc);
var G__31164 = (0);
var G__31165 = cljs.core.cons.call(null,left,out);
nloc = G__31163;
left = G__31164;
out = G__31165;
continue;
}
} else {
var G__31166 = zprint.zutil.left_STAR_.call(null,nloc);
var G__31167 = (left + (1));
var G__31168 = out;
nloc = G__31166;
left = G__31167;
out = G__31168;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Create a vector with the root as well as another vector
 *   which contains the number of right moves after each down
 *   down to find a particular zloc.  The right moves are
 *   non-whitespace, but include comments.
 */
zprint.zutil.find_root_and_path_nw = (function zprint$zutil$find_root_and_path_nw(zloc){
if(cljs.core.truth_(zloc)){
var nloc = zloc;
var left = (0);
var out = cljs.core.List.EMPTY;
while(true){
if(cljs.core.not.call(null,zprint.zutil.left_STAR_.call(null,nloc))){
if(cljs.core.not.call(null,zprint.zutil.up_STAR_.call(null,nloc))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [nloc,out], null);
} else {
var G__31169 = zprint.zutil.up_STAR_.call(null,nloc);
var G__31170 = (0);
var G__31171 = cljs.core.cons.call(null,left,out);
nloc = G__31169;
left = G__31170;
out = G__31171;
continue;
}
} else {
var G__31172 = zprint.zutil.left_STAR_.call(null,nloc);
var G__31173 = (cljs.core.truth_(zprint.zutil.whitespace_QMARK_.call(null,nloc))?left:(left + (1)));
var G__31174 = out;
nloc = G__31172;
left = G__31173;
out = G__31174;
continue;
}
break;
}
} else {
return null;
}
});
/**
 * Find the root from a zloc by doing lots of ups.
 */
zprint.zutil.find_root = (function zprint$zutil$find_root(zloc){
var nloc = zloc;
while(true){
if(cljs.core.not.call(null,rewrite_clj.zip.up.call(null,nloc))){
return nloc;
} else {
var G__31175 = rewrite_clj.zip.up.call(null,nloc);
nloc = G__31175;
continue;
}
break;
}
});
/**
 * Move one down and then right a certain number of steps.
 */
zprint.zutil.move_down_and_right = (function zprint$zutil$move_down_and_right(zloc,right_count){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
var remaining_right = right_count;
while(true){
if((remaining_right === (0))){
return nloc;
} else {
var G__31176 = zprint.zutil.right_STAR_.call(null,nloc);
var G__31177 = (remaining_right - (1));
nloc = G__31176;
remaining_right = G__31177;
continue;
}
break;
}
});
/**
 * Follow the path vector from the root and return the zloc
 *   at this location.
 */
zprint.zutil.follow_path = (function zprint$zutil$follow_path(path_vec,zloc){
return cljs.core.reduce.call(null,zprint.zutil.move_down_and_right,zloc,path_vec);
});
/**
 * Is this an anonymous fn?
 */
zprint.zutil.zanonfn_QMARK_ = (function zprint$zutil$zanonfn_QMARK_(zloc){
return cljs.core._EQ_.call(null,zprint.zutil.tag.call(null,zloc),new cljs.core.Keyword(null,"fn","fn",-1175266204));
});
/**
 * Return the last non-whitespace (but possibly comment) element inside
 *   of this zloc.
 */
zprint.zutil.zlast = (function zprint$zutil$zlast(zloc){
var nloc = zprint.zutil.down_STAR_.call(null,zloc);
if(cljs.core.truth_(nloc)){
return zprint.zutil.zrightmost.call(null,nloc);
} else {
return null;
}
});
/**
 * Returns true if this can be converted to an sexpr. Works around a bug
 *   where n/printable-only? returns false for n/tag :fn, but z/sexpr fails
 *   on something with n/tag :fn
 */
zprint.zutil.zsexpr_QMARK_ = (function zprint$zutil$zsexpr_QMARK_(zloc){
var and__3911__auto__ = zloc;
if(cljs.core.truth_(and__3911__auto__)){
return ((cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),zprint.zutil.tag.call(null,zloc))) && (cljs.core.not.call(null,rewrite_clj.node.printable_only_QMARK_.call(null,rewrite_clj.zip.node.call(null,zloc)))));
} else {
return and__3911__auto__;
}
});
/**
 * Returns true if this is a keyword.
 */
zprint.zutil.zkeyword_QMARK_ = (function zprint$zutil$zkeyword_QMARK_(zloc){
var and__3911__auto__ = zloc;
if(cljs.core.truth_(and__3911__auto__)){
return clojure.string.starts_with_QMARK_.call(null,rewrite_clj.zip.string.call(null,zloc),":");
} else {
return and__3911__auto__;
}
});
/**
 * Returns true if this is a symbol.
 */
zprint.zutil.zsymbol_QMARK_ = (function zprint$zutil$zsymbol_QMARK_(zloc){
var and__3911__auto__ = zloc;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = zprint.zutil.zsexpr_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__3911__auto____$1)){
return (zprint.zutil.sexpr.call(null,zloc) instanceof cljs.core.Symbol);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});
/**
 * Returns true if this is nil.
 */
zprint.zutil.znil_QMARK_ = (function zprint$zutil$znil_QMARK_(zloc){
var and__3911__auto__ = zloc;
if(cljs.core.truth_(and__3911__auto__)){
var and__3911__auto____$1 = zprint.zutil.zsexpr_QMARK_.call(null,zloc);
if(cljs.core.truth_(and__3911__auto____$1)){
return (rewrite_clj.zip.sexpr.call(null,zloc) == null);
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
});
/**
 * Returns true if this is a reader-conditional with a symbol in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_symbol_QMARK_ = (function zprint$zutil$zreader_cond_w_symbol_QMARK_(zloc){
var result = (cljs.core.truth_(zprint.zutil.zreader_macro_QMARK_.call(null,zloc))?(function (){var element = rewrite_clj.zip.down.call(null,zloc);
if(cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element),"?")){
var element__$1 = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,element));
if(((cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":clj")) || (cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":cljs")))){
return zprint.zutil.zsymbol_QMARK_.call(null,rewrite_clj.zip.right.call(null,element__$1));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Returns true if this is a reader-conditional with a collection in 
 *   the first position (could be :clj or :cljs, whatever).
 */
zprint.zutil.zreader_cond_w_coll_QMARK_ = (function zprint$zutil$zreader_cond_w_coll_QMARK_(zloc){
var result = (cljs.core.truth_(zprint.zutil.zreader_macro_QMARK_.call(null,zloc))?(function (){var element = rewrite_clj.zip.down.call(null,zloc);
if(cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element),"?")){
var element__$1 = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,element));
if(((cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":clj")) || (cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,element__$1),":cljs")))){
return zprint.zutil.z_coll_QMARK_.call(null,rewrite_clj.zip.right.call(null,element__$1));
} else {
return null;
}
} else {
return null;
}
})():null);
return result;
});
/**
 * Return a zloc that will turn into a string of three dots.
 */
zprint.zutil.zdotdotdot = (function zprint$zutil$zdotdotdot(){
return zprint.zutil.edn_STAR_.call(null,rewrite_clj.parser.parse_string.call(null,"..."));
});
/**
 * Returns true if this is a keyword, string, or number, in other words,
 *   a constant.
 */
zprint.zutil.zconstant_QMARK_ = (function zprint$zutil$zconstant_QMARK_(zloc){
var ztag = rewrite_clj.zip.tag.call(null,zloc);
if(((cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"unquote","unquote",1649741032))) || (cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"quote","quote",-262615245))) || (cljs.core._EQ_.call(null,ztag,new cljs.core.Keyword(null,"syntax-quote","syntax-quote",-1233164847))))){
return zprint.zutil.zconstant_QMARK_.call(null,zprint.zutil.zfirst.call(null,zloc));
} else {
var and__3911__auto__ = cljs.core.not.call(null,zprint.zutil.z_coll_QMARK_.call(null,zloc));
if(and__3911__auto__){
var or__3922__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,zloc);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.truth_(zprint.zutil.zsexpr_QMARK_.call(null,zloc))){
var sexpr = zprint.zutil.sexpr.call(null,zloc);
return ((typeof sexpr === 'string') || (typeof sexpr === 'number'));
} else {
return null;
}
}
} else {
return and__3911__auto__;
}
}
});
/**
 * If this is an inline comment, returns the amount of space that
 *   was between this and the previous element.  That means that if
 *   we go left, we get something other than whitespace before a
 *   newline.  Assumes zloc is a comment.
 */
zprint.zutil.zinlinecomment_QMARK_ = (function zprint$zutil$zinlinecomment_QMARK_(zloc){
var nloc = zprint.zutil.left_STAR_.call(null,zloc);
var spaces = (0);
while(true){
var tnloc = zprint.zutil.tag.call(null,nloc);
if((tnloc == null)){
return null;
} else {
if(cljs.core._EQ_.call(null,tnloc,new cljs.core.Keyword(null,"newline","newline",1790071323))){
return null;
} else {
if(cljs.core._EQ_.call(null,tnloc,new cljs.core.Keyword(null,"comment","comment",532206069))){
return null;
} else {
if(cljs.core.not_EQ_.call(null,tnloc,new cljs.core.Keyword(null,"whitespace","whitespace",-1340035483))){
return spaces;
} else {
var G__31178 = zprint.zutil.left_STAR_.call(null,nloc);
var G__31179 = (zprint.zutil.length.call(null,nloc) + spaces);
nloc = G__31178;
spaces = G__31179;
continue;

}
}
}
}
break;
}
});
/**
 * Given a zloc zipper of a map, find the :doc element.
 */
zprint.zutil.find_doc_in_map = (function zprint$zutil$find_doc_in_map(zloc){
var nloc = rewrite_clj.zip.down.call(null,zloc);
while(true){
if(cljs.core.truth_(nloc)){
if(cljs.core.truth_((function (){var and__3911__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,nloc);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core._EQ_.call(null,rewrite_clj.zip.string.call(null,nloc),":doc");
} else {
return and__3911__auto__;
}
})())){
if(typeof zprint.zutil.sexpr.call(null,rewrite_clj.zip.right.call(null,nloc)) === 'string'){
return rewrite_clj.zip.right.call(null,nloc);
} else {
return null;
}
} else {
var G__31180 = rewrite_clj.zip.right.call(null,rewrite_clj.zip.right.call(null,nloc));
nloc = G__31180;
continue;
}
} else {
return null;
}
break;
}
});
/**
 * Find a docstring in a zipper of a function.
 */
zprint.zutil.find_docstring = (function zprint$zutil$find_docstring(zloc){
var fn_name = rewrite_clj.zip.string.call(null,rewrite_clj.zip.down.call(null,zloc));
if(((cljs.core._EQ_.call(null,fn_name,"defn")) || (cljs.core._EQ_.call(null,fn_name,"defmacro")))){
var docloc = rewrite_clj.zip.right.call(null,rewrite_clj.zip.right.call(null,rewrite_clj.zip.down.call(null,zloc)));
if(typeof zprint.zutil.sexpr.call(null,docloc) === 'string'){
return docloc;
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,fn_name,"def")){
var maploc = rewrite_clj.zip.down.call(null,rewrite_clj.zip.right.call(null,rewrite_clj.zip.down.call(null,zloc)));
if(cljs.core.truth_(rewrite_clj.zip.map_QMARK_.call(null,maploc))){
return zprint.zutil.find_doc_in_map.call(null,maploc);
} else {
return null;
}
} else {
return null;

}
}
});
/**
 * Given a zipper of a function definition, add the spec info to
 *   the docstring. Works for docstring with (def ...) functions, but
 *   the left-indent isn't optimal.  But to fix that, we'd have to do
 *   the zprinting here, where we know the indent of the existing
 *   docstring.
 */
zprint.zutil.add_spec_to_docstring = (function zprint$zutil$add_spec_to_docstring(zloc,spec_str){
var temp__4655__auto__ = zprint.zutil.find_docstring.call(null,zloc);
if(cljs.core.truth_(temp__4655__auto__)){
var doc_zloc = temp__4655__auto__;
var new_doc_zloc = zprint.zutil.replace_STAR_.call(null,doc_zloc,rewrite_clj.zip.node.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.parser.parse_string.call(null,["\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(zprint.zutil.sexpr.call(null,doc_zloc))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1(spec_str),"\""].join('')))));
return zprint.zutil.edn_STAR_.call(null,rewrite_clj.zip.root.call(null,new_doc_zloc));
} else {
return zloc;
}
});
/**
 * Perform a lift-ns on a pair-seq that is returned from
 *   partition-2-all-nc, which is a seq of pairs of zlocs that may or
 *   may not have been sorted and which may or may not have had things
 *   removed from it and may or may not actually be pairs.  Could be
 *   single things, could be multiple things.  If contains multiple
 *   things, the first thing is the key, but if it is just a single
 *   thing, the first thing is *not* a key. So we only need to work
 *   on the first of each seq which has more than one element in it,
 *   and possibly replace it. This will only lift out a ns if all keys
 *   in seqs with more than one element have the same namespace. Returns
 *   the [namespace pair-seq] or nil.
 */
zprint.zutil.zlift_ns = (function zprint$zutil$zlift_ns(pair_seq){
var strip_ns = (function (named){
if((named instanceof cljs.core.Symbol)){
return cljs.core.symbol.call(null,null,cljs.core.name.call(null,named));
} else {
return cljs.core.keyword.call(null,null,cljs.core.name.call(null,named));
}
});
var ns = null;
var pair_seq__$1 = pair_seq;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
var vec__31181 = cljs.core.first.call(null,pair_seq__$1);
var seq__31182 = cljs.core.seq.call(null,vec__31181);
var first__31183 = cljs.core.first.call(null,seq__31182);
var seq__31182__$1 = cljs.core.next.call(null,seq__31182);
var k = first__31183;
var rest_of_pair = seq__31182__$1;
var pair = vec__31181;
var current_ns = (cljs.core.truth_((function (){var and__3911__auto__ = rest_of_pair;
if(and__3911__auto__){
var and__3911__auto____$1 = cljs.core.not_EQ_.call(null,cljs.core.subs.call(null,rewrite_clj.zip.string.call(null,k),(0),(2)),"::");
if(and__3911__auto____$1){
var or__3922__auto__ = zprint.zutil.zkeyword_QMARK_.call(null,k);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return zprint.zutil.zsymbol_QMARK_.call(null,k);
}
} else {
return and__3911__auto____$1;
}
} else {
return and__3911__auto__;
}
})())?cljs.core.namespace.call(null,rewrite_clj.zip.sexpr.call(null,k)):null);
if(cljs.core.not.call(null,k)){
if(cljs.core.truth_(ns)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns,out], null);
} else {
return null;
}
} else {
if(cljs.core.truth_(current_ns)){
if(cljs.core.truth_(ns)){
if(cljs.core._EQ_.call(null,ns,current_ns)){
var G__31184 = ns;
var G__31185 = cljs.core.next.call(null,pair_seq__$1);
var G__31186 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.node.token_node.call(null,strip_ns.call(null,rewrite_clj.zip.sexpr.call(null,k)))),rest_of_pair));
ns = G__31184;
pair_seq__$1 = G__31185;
out = G__31186;
continue;
} else {
return null;
}
} else {
var G__31187 = current_ns;
var G__31188 = cljs.core.next.call(null,pair_seq__$1);
var G__31189 = cljs.core.conj.call(null,out,cljs.core.cons.call(null,zprint.zutil.edn_STAR_.call(null,rewrite_clj.node.token_node.call(null,strip_ns.call(null,rewrite_clj.zip.sexpr.call(null,k)))),rest_of_pair));
ns = G__31187;
pair_seq__$1 = G__31188;
out = G__31189;
continue;
}
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,pair),(1))){
var G__31190 = ns;
var G__31191 = cljs.core.next.call(null,pair_seq__$1);
var G__31192 = cljs.core.conj.call(null,out,pair);
ns = G__31190;
pair_seq__$1 = G__31191;
out = G__31192;
continue;
} else {
return null;
}
}
}
break;
}
});
/**
 * Redefine all of the traversal functions for zippers, then
 *   call the function of no arguments passed in.
 */
zprint.zutil.zredef_call = (function zprint$zutil$zredef_call(body_fn){
var zstring31193 = zprint.zfns.zstring;
var znumstr31194 = zprint.zfns.znumstr;
var zbyte_array_QMARK_31195 = zprint.zfns.zbyte_array_QMARK_;
var zcomment_QMARK_31196 = zprint.zfns.zcomment_QMARK_;
var zsexpr31197 = zprint.zfns.zsexpr;
var zseqnws31198 = zprint.zfns.zseqnws;
var zmap_right31199 = zprint.zfns.zmap_right;
var zfocus_style31200 = zprint.zfns.zfocus_style;
var zfirst31201 = zprint.zfns.zfirst;
var zfirst_no_comment31202 = zprint.zfns.zfirst_no_comment;
var zsecond31203 = zprint.zfns.zsecond;
var zthird31204 = zprint.zfns.zthird;
var zfourth31205 = zprint.zfns.zfourth;
var znthnext31206 = zprint.zfns.znthnext;
var zcount31207 = zprint.zfns.zcount;
var zmap31208 = zprint.zfns.zmap;
var zmap_w_nl31209 = zprint.zfns.zmap_w_nl;
var zanonfn_QMARK_31210 = zprint.zfns.zanonfn_QMARK_;
var zfn_obj_QMARK_31211 = zprint.zfns.zfn_obj_QMARK_;
var zfocus31212 = zprint.zfns.zfocus;
var zfind_path31213 = zprint.zfns.zfind_path;
var zwhitespace_QMARK_31214 = zprint.zfns.zwhitespace_QMARK_;
var zlist_QMARK_31215 = zprint.zfns.zlist_QMARK_;
var zvector_QMARK_31216 = zprint.zfns.zvector_QMARK_;
var zmap_QMARK_31217 = zprint.zfns.zmap_QMARK_;
var zset_QMARK_31218 = zprint.zfns.zset_QMARK_;
var zcoll_QMARK_31219 = zprint.zfns.zcoll_QMARK_;
var zuneval_QMARK_31220 = zprint.zfns.zuneval_QMARK_;
var zmeta_QMARK_31221 = zprint.zfns.zmeta_QMARK_;
var ztag31222 = zprint.zfns.ztag;
var zparseuneval31223 = zprint.zfns.zparseuneval;
var zlast31224 = zprint.zfns.zlast;
var zarray_QMARK_31225 = zprint.zfns.zarray_QMARK_;
var zatom_QMARK_31226 = zprint.zfns.zatom_QMARK_;
var zderef31227 = zprint.zfns.zderef;
var zrecord_QMARK_31228 = zprint.zfns.zrecord_QMARK_;
var zns_QMARK_31229 = zprint.zfns.zns_QMARK_;
var zobj_to_vec31230 = zprint.zfns.zobj_to_vec;
var zexpandarray31231 = zprint.zfns.zexpandarray;
var znewline_QMARK_31232 = zprint.zfns.znewline_QMARK_;
var zwhitespaceorcomment_QMARK_31233 = zprint.zfns.zwhitespaceorcomment_QMARK_;
var zmap_all31234 = zprint.zfns.zmap_all;
var zpromise_QMARK_31235 = zprint.zfns.zpromise_QMARK_;
var zfuture_QMARK_31236 = zprint.zfns.zfuture_QMARK_;
var zdelay_QMARK_31237 = zprint.zfns.zdelay_QMARK_;
var zkeyword_QMARK_31238 = zprint.zfns.zkeyword_QMARK_;
var zconstant_QMARK_31239 = zprint.zfns.zconstant_QMARK_;
var zagent_QMARK_31240 = zprint.zfns.zagent_QMARK_;
var zreader_macro_QMARK_31241 = zprint.zfns.zreader_macro_QMARK_;
var zarray_to_shift_seq31242 = zprint.zfns.zarray_to_shift_seq;
var zdotdotdot31243 = zprint.zfns.zdotdotdot;
var zsymbol_QMARK_31244 = zprint.zfns.zsymbol_QMARK_;
var znil_QMARK_31245 = zprint.zfns.znil_QMARK_;
var zreader_cond_w_symbol_QMARK_31246 = zprint.zfns.zreader_cond_w_symbol_QMARK_;
var zreader_cond_w_coll_QMARK_31247 = zprint.zfns.zreader_cond_w_coll_QMARK_;
var zlift_ns31248 = zprint.zfns.zlift_ns;
var zinlinecomment_QMARK_31249 = zprint.zfns.zinlinecomment_QMARK_;
var zfind31250 = zprint.zfns.zfind;
zprint.zfns.zstring = rewrite_clj.zip.string;

zprint.zfns.znumstr = zprint.zutil.znumstr;

zprint.zfns.zbyte_array_QMARK_ = cljs.core.constantly.call(null,false);

zprint.zfns.zcomment_QMARK_ = zprint.zutil.zcomment_QMARK_;

zprint.zfns.zsexpr = zprint.zutil.sexpr;

zprint.zfns.zseqnws = zprint.zutil.zseqnws;

zprint.zfns.zmap_right = zprint.zutil.zmap_right;

zprint.zfns.zfocus_style = zprint.zutil.zfocus_style;

zprint.zfns.zfirst = zprint.zutil.zfirst;

zprint.zfns.zfirst_no_comment = zprint.zutil.zfirst_no_comment;

zprint.zfns.zsecond = zprint.zutil.zsecond;

zprint.zfns.zthird = zprint.zutil.zthird;

zprint.zfns.zfourth = zprint.zutil.zfourth;

zprint.zfns.znthnext = zprint.zutil.znthnext;

zprint.zfns.zcount = zprint.zutil.zcount;

zprint.zfns.zmap = zprint.zutil.zmap;

zprint.zfns.zmap_w_nl = zprint.zutil.zmap_w_nl;

zprint.zfns.zanonfn_QMARK_ = zprint.zutil.zanonfn_QMARK_;

zprint.zfns.zfn_obj_QMARK_ = cljs.core.constantly.call(null,false);

zprint.zfns.zfocus = zprint.zutil.zfocus;

zprint.zfns.zfind_path = zprint.zutil.find_root_and_path_nw;

zprint.zfns.zwhitespace_QMARK_ = zprint.zutil.whitespace_QMARK_;

zprint.zfns.zlist_QMARK_ = rewrite_clj.zip.list_QMARK_;

zprint.zfns.zvector_QMARK_ = rewrite_clj.zip.vector_QMARK_;

zprint.zfns.zmap_QMARK_ = rewrite_clj.zip.map_QMARK_;

zprint.zfns.zset_QMARK_ = rewrite_clj.zip.set_QMARK_;

zprint.zfns.zcoll_QMARK_ = zprint.zutil.z_coll_QMARK_;

zprint.zfns.zuneval_QMARK_ = zprint.zutil.zuneval_QMARK_;

zprint.zfns.zmeta_QMARK_ = zprint.zutil.zmeta_QMARK_;

zprint.zfns.ztag = zprint.zutil.ztag;

zprint.zfns.zparseuneval = zprint.zutil.zparseuneval;

zprint.zfns.zlast = zprint.zutil.zlast;

zprint.zfns.zarray_QMARK_ = cljs.core.constantly.call(null,false);

zprint.zfns.zatom_QMARK_ = cljs.core.constantly.call(null,false);

zprint.zfns.zderef = cljs.core.constantly.call(null,false);

zprint.zfns.zrecord_QMARK_ = cljs.core.constantly.call(null,false);

zprint.zfns.zns_QMARK_ = cljs.core.constantly.call(null,false);

zprint.zfns.zobj_to_vec = cljs.core.constantly.call(null,null);

zprint.zfns.zexpandarray = cljs.core.constantly.call(null,null);

zprint.zfns.znewline_QMARK_ = zprint.zutil.znewline_QMARK_;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zprint.zutil.whitespace_or_comment_QMARK_;

zprint.zfns.zmap_all = zprint.zutil.zmap_all;

zprint.zfns.zpromise_QMARK_ = cljs.core.constantly.call(null,false);

zprint.zfns.zfuture_QMARK_ = cljs.core.constantly.call(null,false);

zprint.zfns.zdelay_QMARK_ = cljs.core.constantly.call(null,false);

zprint.zfns.zkeyword_QMARK_ = zprint.zutil.zkeyword_QMARK_;

zprint.zfns.zconstant_QMARK_ = zprint.zutil.zconstant_QMARK_;

zprint.zfns.zagent_QMARK_ = cljs.core.constantly.call(null,false);

zprint.zfns.zreader_macro_QMARK_ = zprint.zutil.zreader_macro_QMARK_;

zprint.zfns.zarray_to_shift_seq = cljs.core.constantly.call(null,null);

zprint.zfns.zdotdotdot = zprint.zutil.zdotdotdot;

zprint.zfns.zsymbol_QMARK_ = zprint.zutil.zsymbol_QMARK_;

zprint.zfns.znil_QMARK_ = zprint.zutil.znil_QMARK_;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zprint.zutil.zreader_cond_w_symbol_QMARK_;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zprint.zutil.zreader_cond_w_coll_QMARK_;

zprint.zfns.zlift_ns = zprint.zutil.zlift_ns;

zprint.zfns.zinlinecomment_QMARK_ = zprint.zutil.zinlinecomment_QMARK_;

zprint.zfns.zfind = zprint.zutil.zfind;

try{return body_fn.call(null);
}finally {zprint.zfns.zfind = zfind31250;

zprint.zfns.zinlinecomment_QMARK_ = zinlinecomment_QMARK_31249;

zprint.zfns.zlift_ns = zlift_ns31248;

zprint.zfns.zreader_cond_w_coll_QMARK_ = zreader_cond_w_coll_QMARK_31247;

zprint.zfns.zreader_cond_w_symbol_QMARK_ = zreader_cond_w_symbol_QMARK_31246;

zprint.zfns.znil_QMARK_ = znil_QMARK_31245;

zprint.zfns.zsymbol_QMARK_ = zsymbol_QMARK_31244;

zprint.zfns.zdotdotdot = zdotdotdot31243;

zprint.zfns.zarray_to_shift_seq = zarray_to_shift_seq31242;

zprint.zfns.zreader_macro_QMARK_ = zreader_macro_QMARK_31241;

zprint.zfns.zagent_QMARK_ = zagent_QMARK_31240;

zprint.zfns.zconstant_QMARK_ = zconstant_QMARK_31239;

zprint.zfns.zkeyword_QMARK_ = zkeyword_QMARK_31238;

zprint.zfns.zdelay_QMARK_ = zdelay_QMARK_31237;

zprint.zfns.zfuture_QMARK_ = zfuture_QMARK_31236;

zprint.zfns.zpromise_QMARK_ = zpromise_QMARK_31235;

zprint.zfns.zmap_all = zmap_all31234;

zprint.zfns.zwhitespaceorcomment_QMARK_ = zwhitespaceorcomment_QMARK_31233;

zprint.zfns.znewline_QMARK_ = znewline_QMARK_31232;

zprint.zfns.zexpandarray = zexpandarray31231;

zprint.zfns.zobj_to_vec = zobj_to_vec31230;

zprint.zfns.zns_QMARK_ = zns_QMARK_31229;

zprint.zfns.zrecord_QMARK_ = zrecord_QMARK_31228;

zprint.zfns.zderef = zderef31227;

zprint.zfns.zatom_QMARK_ = zatom_QMARK_31226;

zprint.zfns.zarray_QMARK_ = zarray_QMARK_31225;

zprint.zfns.zlast = zlast31224;

zprint.zfns.zparseuneval = zparseuneval31223;

zprint.zfns.ztag = ztag31222;

zprint.zfns.zmeta_QMARK_ = zmeta_QMARK_31221;

zprint.zfns.zuneval_QMARK_ = zuneval_QMARK_31220;

zprint.zfns.zcoll_QMARK_ = zcoll_QMARK_31219;

zprint.zfns.zset_QMARK_ = zset_QMARK_31218;

zprint.zfns.zmap_QMARK_ = zmap_QMARK_31217;

zprint.zfns.zvector_QMARK_ = zvector_QMARK_31216;

zprint.zfns.zlist_QMARK_ = zlist_QMARK_31215;

zprint.zfns.zwhitespace_QMARK_ = zwhitespace_QMARK_31214;

zprint.zfns.zfind_path = zfind_path31213;

zprint.zfns.zfocus = zfocus31212;

zprint.zfns.zfn_obj_QMARK_ = zfn_obj_QMARK_31211;

zprint.zfns.zanonfn_QMARK_ = zanonfn_QMARK_31210;

zprint.zfns.zmap_w_nl = zmap_w_nl31209;

zprint.zfns.zmap = zmap31208;

zprint.zfns.zcount = zcount31207;

zprint.zfns.znthnext = znthnext31206;

zprint.zfns.zfourth = zfourth31205;

zprint.zfns.zthird = zthird31204;

zprint.zfns.zsecond = zsecond31203;

zprint.zfns.zfirst_no_comment = zfirst_no_comment31202;

zprint.zfns.zfirst = zfirst31201;

zprint.zfns.zfocus_style = zfocus_style31200;

zprint.zfns.zmap_right = zmap_right31199;

zprint.zfns.zseqnws = zseqnws31198;

zprint.zfns.zsexpr = zsexpr31197;

zprint.zfns.zcomment_QMARK_ = zcomment_QMARK_31196;

zprint.zfns.zbyte_array_QMARK_ = zbyte_array_QMARK_31195;

zprint.zfns.znumstr = znumstr31194;

zprint.zfns.zstring = zstring31193;
}});

//# sourceMappingURL=zutil.js.map?rel=1531954913283
