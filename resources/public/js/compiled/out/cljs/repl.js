// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__21418){
var map__21419 = p__21418;
var map__21419__$1 = ((((!((map__21419 == null)))?(((((map__21419.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21419.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21419):map__21419);
var m = map__21419__$1;
var n = cljs.core.get.call(null,map__21419__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__21419__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21421_21443 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21422_21444 = null;
var count__21423_21445 = (0);
var i__21424_21446 = (0);
while(true){
if((i__21424_21446 < count__21423_21445)){
var f_21447 = cljs.core._nth.call(null,chunk__21422_21444,i__21424_21446);
cljs.core.println.call(null,"  ",f_21447);


var G__21448 = seq__21421_21443;
var G__21449 = chunk__21422_21444;
var G__21450 = count__21423_21445;
var G__21451 = (i__21424_21446 + (1));
seq__21421_21443 = G__21448;
chunk__21422_21444 = G__21449;
count__21423_21445 = G__21450;
i__21424_21446 = G__21451;
continue;
} else {
var temp__4657__auto___21452 = cljs.core.seq.call(null,seq__21421_21443);
if(temp__4657__auto___21452){
var seq__21421_21453__$1 = temp__4657__auto___21452;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21421_21453__$1)){
var c__4319__auto___21454 = cljs.core.chunk_first.call(null,seq__21421_21453__$1);
var G__21455 = cljs.core.chunk_rest.call(null,seq__21421_21453__$1);
var G__21456 = c__4319__auto___21454;
var G__21457 = cljs.core.count.call(null,c__4319__auto___21454);
var G__21458 = (0);
seq__21421_21443 = G__21455;
chunk__21422_21444 = G__21456;
count__21423_21445 = G__21457;
i__21424_21446 = G__21458;
continue;
} else {
var f_21459 = cljs.core.first.call(null,seq__21421_21453__$1);
cljs.core.println.call(null,"  ",f_21459);


var G__21460 = cljs.core.next.call(null,seq__21421_21453__$1);
var G__21461 = null;
var G__21462 = (0);
var G__21463 = (0);
seq__21421_21443 = G__21460;
chunk__21422_21444 = G__21461;
count__21423_21445 = G__21462;
i__21424_21446 = G__21463;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_21464 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__3922__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_21464);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_21464)))?cljs.core.second.call(null,arglists_21464):arglists_21464));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__21425_21465 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__21426_21466 = null;
var count__21427_21467 = (0);
var i__21428_21468 = (0);
while(true){
if((i__21428_21468 < count__21427_21467)){
var vec__21429_21469 = cljs.core._nth.call(null,chunk__21426_21466,i__21428_21468);
var name_21470 = cljs.core.nth.call(null,vec__21429_21469,(0),null);
var map__21432_21471 = cljs.core.nth.call(null,vec__21429_21469,(1),null);
var map__21432_21472__$1 = ((((!((map__21432_21471 == null)))?(((((map__21432_21471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21432_21471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21432_21471):map__21432_21471);
var doc_21473 = cljs.core.get.call(null,map__21432_21472__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21474 = cljs.core.get.call(null,map__21432_21472__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21470);

cljs.core.println.call(null," ",arglists_21474);

if(cljs.core.truth_(doc_21473)){
cljs.core.println.call(null," ",doc_21473);
} else {
}


var G__21475 = seq__21425_21465;
var G__21476 = chunk__21426_21466;
var G__21477 = count__21427_21467;
var G__21478 = (i__21428_21468 + (1));
seq__21425_21465 = G__21475;
chunk__21426_21466 = G__21476;
count__21427_21467 = G__21477;
i__21428_21468 = G__21478;
continue;
} else {
var temp__4657__auto___21479 = cljs.core.seq.call(null,seq__21425_21465);
if(temp__4657__auto___21479){
var seq__21425_21480__$1 = temp__4657__auto___21479;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21425_21480__$1)){
var c__4319__auto___21481 = cljs.core.chunk_first.call(null,seq__21425_21480__$1);
var G__21482 = cljs.core.chunk_rest.call(null,seq__21425_21480__$1);
var G__21483 = c__4319__auto___21481;
var G__21484 = cljs.core.count.call(null,c__4319__auto___21481);
var G__21485 = (0);
seq__21425_21465 = G__21482;
chunk__21426_21466 = G__21483;
count__21427_21467 = G__21484;
i__21428_21468 = G__21485;
continue;
} else {
var vec__21434_21486 = cljs.core.first.call(null,seq__21425_21480__$1);
var name_21487 = cljs.core.nth.call(null,vec__21434_21486,(0),null);
var map__21437_21488 = cljs.core.nth.call(null,vec__21434_21486,(1),null);
var map__21437_21489__$1 = ((((!((map__21437_21488 == null)))?(((((map__21437_21488.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__21437_21488.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__21437_21488):map__21437_21488);
var doc_21490 = cljs.core.get.call(null,map__21437_21489__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_21491 = cljs.core.get.call(null,map__21437_21489__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_21487);

cljs.core.println.call(null," ",arglists_21491);

if(cljs.core.truth_(doc_21490)){
cljs.core.println.call(null," ",doc_21490);
} else {
}


var G__21492 = cljs.core.next.call(null,seq__21425_21480__$1);
var G__21493 = null;
var G__21494 = (0);
var G__21495 = (0);
seq__21425_21465 = G__21492;
chunk__21426_21466 = G__21493;
count__21427_21467 = G__21494;
i__21428_21468 = G__21495;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__21439 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__21440 = null;
var count__21441 = (0);
var i__21442 = (0);
while(true){
if((i__21442 < count__21441)){
var role = cljs.core._nth.call(null,chunk__21440,i__21442);
var temp__4657__auto___21496__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___21496__$1)){
var spec_21497 = temp__4657__auto___21496__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21497));
} else {
}


var G__21498 = seq__21439;
var G__21499 = chunk__21440;
var G__21500 = count__21441;
var G__21501 = (i__21442 + (1));
seq__21439 = G__21498;
chunk__21440 = G__21499;
count__21441 = G__21500;
i__21442 = G__21501;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__21439);
if(temp__4657__auto____$1){
var seq__21439__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__21439__$1)){
var c__4319__auto__ = cljs.core.chunk_first.call(null,seq__21439__$1);
var G__21502 = cljs.core.chunk_rest.call(null,seq__21439__$1);
var G__21503 = c__4319__auto__;
var G__21504 = cljs.core.count.call(null,c__4319__auto__);
var G__21505 = (0);
seq__21439 = G__21502;
chunk__21440 = G__21503;
count__21441 = G__21504;
i__21442 = G__21505;
continue;
} else {
var role = cljs.core.first.call(null,seq__21439__$1);
var temp__4657__auto___21506__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___21506__$2)){
var spec_21507 = temp__4657__auto___21506__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_21507));
} else {
}


var G__21508 = cljs.core.next.call(null,seq__21439__$1);
var G__21509 = null;
var G__21510 = (0);
var G__21511 = (0);
seq__21439 = G__21508;
chunk__21440 = G__21509;
count__21441 = G__21510;
i__21442 = G__21511;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1531954881981
