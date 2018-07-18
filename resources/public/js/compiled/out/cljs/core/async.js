// Compiled by ClojureScript 1.10.238 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__35364 = arguments.length;
switch (G__35364) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async35365 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35365 = (function (f,blockable,meta35366){
this.f = f;
this.blockable = blockable;
this.meta35366 = meta35366;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35365.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35367,meta35366__$1){
var self__ = this;
var _35367__$1 = this;
return (new cljs.core.async.t_cljs$core$async35365(self__.f,self__.blockable,meta35366__$1));
});

cljs.core.async.t_cljs$core$async35365.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35367){
var self__ = this;
var _35367__$1 = this;
return self__.meta35366;
});

cljs.core.async.t_cljs$core$async35365.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35365.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35365.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async35365.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async35365.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta35366","meta35366",-1021303343,null)], null);
});

cljs.core.async.t_cljs$core$async35365.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35365.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35365";

cljs.core.async.t_cljs$core$async35365.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35365");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35365.
 */
cljs.core.async.__GT_t_cljs$core$async35365 = (function cljs$core$async$__GT_t_cljs$core$async35365(f__$1,blockable__$1,meta35366){
return (new cljs.core.async.t_cljs$core$async35365(f__$1,blockable__$1,meta35366));
});

}

return (new cljs.core.async.t_cljs$core$async35365(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__35371 = arguments.length;
switch (G__35371) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__35374 = arguments.length;
switch (G__35374) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__35377 = arguments.length;
switch (G__35377) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_35379 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_35379);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_35379,ret){
return (function (){
return fn1.call(null,val_35379);
});})(val_35379,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__35381 = arguments.length;
switch (G__35381) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4655__auto__)){
var ret = temp__4655__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4655__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4655__auto__)){
var retb = temp__4655__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4655__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4655__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4376__auto___35383 = n;
var x_35384 = (0);
while(true){
if((x_35384 < n__4376__auto___35383)){
(a[x_35384] = (0));

var G__35385 = (x_35384 + (1));
x_35384 = G__35385;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__35386 = (i + (1));
i = G__35386;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async35387 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35387 = (function (flag,meta35388){
this.flag = flag;
this.meta35388 = meta35388;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35387.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_35389,meta35388__$1){
var self__ = this;
var _35389__$1 = this;
return (new cljs.core.async.t_cljs$core$async35387(self__.flag,meta35388__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async35387.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_35389){
var self__ = this;
var _35389__$1 = this;
return self__.meta35388;
});})(flag))
;

cljs.core.async.t_cljs$core$async35387.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35387.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async35387.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35387.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async35387.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta35388","meta35388",168075797,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async35387.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35387.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35387";

cljs.core.async.t_cljs$core$async35387.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35387");
});})(flag))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35387.
 */
cljs.core.async.__GT_t_cljs$core$async35387 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async35387(flag__$1,meta35388){
return (new cljs.core.async.t_cljs$core$async35387(flag__$1,meta35388));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async35387(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async35390 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35390 = (function (flag,cb,meta35391){
this.flag = flag;
this.cb = cb;
this.meta35391 = meta35391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35392,meta35391__$1){
var self__ = this;
var _35392__$1 = this;
return (new cljs.core.async.t_cljs$core$async35390(self__.flag,self__.cb,meta35391__$1));
});

cljs.core.async.t_cljs$core$async35390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35392){
var self__ = this;
var _35392__$1 = this;
return self__.meta35391;
});

cljs.core.async.t_cljs$core$async35390.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35390.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async35390.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async35390.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async35390.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta35391","meta35391",1837726015,null)], null);
});

cljs.core.async.t_cljs$core$async35390.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35390.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35390";

cljs.core.async.t_cljs$core$async35390.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35390");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35390.
 */
cljs.core.async.__GT_t_cljs$core$async35390 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async35390(flag__$1,cb__$1,meta35391){
return (new cljs.core.async.t_cljs$core$async35390(flag__$1,cb__$1,meta35391));
});

}

return (new cljs.core.async.t_cljs$core$async35390(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35393_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35393_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__35394_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__35394_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3922__auto__ = wport;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35395 = (i + (1));
i = G__35395;
continue;
}
} else {
return null;
}
break;
}
})();
var or__3922__auto__ = ret;
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4657__auto__ = (function (){var and__3911__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__3911__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__3911__auto__;
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var got = temp__4657__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___35401 = arguments.length;
var i__4500__auto___35402 = (0);
while(true){
if((i__4500__auto___35402 < len__4499__auto___35401)){
args__4502__auto__.push((arguments[i__4500__auto___35402]));

var G__35403 = (i__4500__auto___35402 + (1));
i__4500__auto___35402 = G__35403;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((1) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4503__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__35398){
var map__35399 = p__35398;
var map__35399__$1 = ((((!((map__35399 == null)))?(((((map__35399.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35399.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35399):map__35399);
var opts = map__35399__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq35396){
var G__35397 = cljs.core.first.call(null,seq35396);
var seq35396__$1 = cljs.core.next.call(null,seq35396);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35397,seq35396__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__35405 = arguments.length;
switch (G__35405) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__35318__auto___35451 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto___35451){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto___35451){
return (function (state_35429){
var state_val_35430 = (state_35429[(1)]);
if((state_val_35430 === (7))){
var inst_35425 = (state_35429[(2)]);
var state_35429__$1 = state_35429;
var statearr_35431_35452 = state_35429__$1;
(statearr_35431_35452[(2)] = inst_35425);

(statearr_35431_35452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35430 === (1))){
var state_35429__$1 = state_35429;
var statearr_35432_35453 = state_35429__$1;
(statearr_35432_35453[(2)] = null);

(statearr_35432_35453[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35430 === (4))){
var inst_35408 = (state_35429[(7)]);
var inst_35408__$1 = (state_35429[(2)]);
var inst_35409 = (inst_35408__$1 == null);
var state_35429__$1 = (function (){var statearr_35433 = state_35429;
(statearr_35433[(7)] = inst_35408__$1);

return statearr_35433;
})();
if(cljs.core.truth_(inst_35409)){
var statearr_35434_35454 = state_35429__$1;
(statearr_35434_35454[(1)] = (5));

} else {
var statearr_35435_35455 = state_35429__$1;
(statearr_35435_35455[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35430 === (13))){
var state_35429__$1 = state_35429;
var statearr_35436_35456 = state_35429__$1;
(statearr_35436_35456[(2)] = null);

(statearr_35436_35456[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35430 === (6))){
var inst_35408 = (state_35429[(7)]);
var state_35429__$1 = state_35429;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35429__$1,(11),to,inst_35408);
} else {
if((state_val_35430 === (3))){
var inst_35427 = (state_35429[(2)]);
var state_35429__$1 = state_35429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35429__$1,inst_35427);
} else {
if((state_val_35430 === (12))){
var state_35429__$1 = state_35429;
var statearr_35437_35457 = state_35429__$1;
(statearr_35437_35457[(2)] = null);

(statearr_35437_35457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35430 === (2))){
var state_35429__$1 = state_35429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35429__$1,(4),from);
} else {
if((state_val_35430 === (11))){
var inst_35418 = (state_35429[(2)]);
var state_35429__$1 = state_35429;
if(cljs.core.truth_(inst_35418)){
var statearr_35438_35458 = state_35429__$1;
(statearr_35438_35458[(1)] = (12));

} else {
var statearr_35439_35459 = state_35429__$1;
(statearr_35439_35459[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35430 === (9))){
var state_35429__$1 = state_35429;
var statearr_35440_35460 = state_35429__$1;
(statearr_35440_35460[(2)] = null);

(statearr_35440_35460[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35430 === (5))){
var state_35429__$1 = state_35429;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35441_35461 = state_35429__$1;
(statearr_35441_35461[(1)] = (8));

} else {
var statearr_35442_35462 = state_35429__$1;
(statearr_35442_35462[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35430 === (14))){
var inst_35423 = (state_35429[(2)]);
var state_35429__$1 = state_35429;
var statearr_35443_35463 = state_35429__$1;
(statearr_35443_35463[(2)] = inst_35423);

(statearr_35443_35463[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35430 === (10))){
var inst_35415 = (state_35429[(2)]);
var state_35429__$1 = state_35429;
var statearr_35444_35464 = state_35429__$1;
(statearr_35444_35464[(2)] = inst_35415);

(statearr_35444_35464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35430 === (8))){
var inst_35412 = cljs.core.async.close_BANG_.call(null,to);
var state_35429__$1 = state_35429;
var statearr_35445_35465 = state_35429__$1;
(statearr_35445_35465[(2)] = inst_35412);

(statearr_35445_35465[(1)] = (10));


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
});})(c__35318__auto___35451))
;
return ((function (switch__35230__auto__,c__35318__auto___35451){
return (function() {
var cljs$core$async$state_machine__35231__auto__ = null;
var cljs$core$async$state_machine__35231__auto____0 = (function (){
var statearr_35446 = [null,null,null,null,null,null,null,null];
(statearr_35446[(0)] = cljs$core$async$state_machine__35231__auto__);

(statearr_35446[(1)] = (1));

return statearr_35446;
});
var cljs$core$async$state_machine__35231__auto____1 = (function (state_35429){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_35429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e35447){if((e35447 instanceof Object)){
var ex__35234__auto__ = e35447;
var statearr_35448_35466 = state_35429;
(statearr_35448_35466[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35447;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35467 = state_35429;
state_35429 = G__35467;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
cljs$core$async$state_machine__35231__auto__ = function(state_35429){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35231__auto____1.call(this,state_35429);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35231__auto____0;
cljs$core$async$state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35231__auto____1;
return cljs$core$async$state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto___35451))
})();
var state__35320__auto__ = (function (){var statearr_35449 = f__35319__auto__.call(null);
(statearr_35449[(6)] = c__35318__auto___35451);

return statearr_35449;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto___35451))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__35468){
var vec__35469 = p__35468;
var v = cljs.core.nth.call(null,vec__35469,(0),null);
var p = cljs.core.nth.call(null,vec__35469,(1),null);
var job = vec__35469;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__35318__auto___35640 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto___35640,res,vec__35469,v,p,job,jobs,results){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto___35640,res,vec__35469,v,p,job,jobs,results){
return (function (state_35476){
var state_val_35477 = (state_35476[(1)]);
if((state_val_35477 === (1))){
var state_35476__$1 = state_35476;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35476__$1,(2),res,v);
} else {
if((state_val_35477 === (2))){
var inst_35473 = (state_35476[(2)]);
var inst_35474 = cljs.core.async.close_BANG_.call(null,res);
var state_35476__$1 = (function (){var statearr_35478 = state_35476;
(statearr_35478[(7)] = inst_35473);

return statearr_35478;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35476__$1,inst_35474);
} else {
return null;
}
}
});})(c__35318__auto___35640,res,vec__35469,v,p,job,jobs,results))
;
return ((function (switch__35230__auto__,c__35318__auto___35640,res,vec__35469,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____0 = (function (){
var statearr_35479 = [null,null,null,null,null,null,null,null];
(statearr_35479[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__);

(statearr_35479[(1)] = (1));

return statearr_35479;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____1 = (function (state_35476){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_35476);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e35480){if((e35480 instanceof Object)){
var ex__35234__auto__ = e35480;
var statearr_35481_35641 = state_35476;
(statearr_35481_35641[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35476);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35642 = state_35476;
state_35476 = G__35642;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__ = function(state_35476){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____1.call(this,state_35476);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto___35640,res,vec__35469,v,p,job,jobs,results))
})();
var state__35320__auto__ = (function (){var statearr_35482 = f__35319__auto__.call(null);
(statearr_35482[(6)] = c__35318__auto___35640);

return statearr_35482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto___35640,res,vec__35469,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__35483){
var vec__35484 = p__35483;
var v = cljs.core.nth.call(null,vec__35484,(0),null);
var p = cljs.core.nth.call(null,vec__35484,(1),null);
var job = vec__35484;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__4376__auto___35643 = n;
var __35644 = (0);
while(true){
if((__35644 < n__4376__auto___35643)){
var G__35487_35645 = type;
var G__35487_35646__$1 = (((G__35487_35645 instanceof cljs.core.Keyword))?G__35487_35645.fqn:null);
switch (G__35487_35646__$1) {
case "compute":
var c__35318__auto___35648 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35644,c__35318__auto___35648,G__35487_35645,G__35487_35646__$1,n__4376__auto___35643,jobs,results,process,async){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (__35644,c__35318__auto___35648,G__35487_35645,G__35487_35646__$1,n__4376__auto___35643,jobs,results,process,async){
return (function (state_35500){
var state_val_35501 = (state_35500[(1)]);
if((state_val_35501 === (1))){
var state_35500__$1 = state_35500;
var statearr_35502_35649 = state_35500__$1;
(statearr_35502_35649[(2)] = null);

(statearr_35502_35649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35501 === (2))){
var state_35500__$1 = state_35500;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35500__$1,(4),jobs);
} else {
if((state_val_35501 === (3))){
var inst_35498 = (state_35500[(2)]);
var state_35500__$1 = state_35500;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35500__$1,inst_35498);
} else {
if((state_val_35501 === (4))){
var inst_35490 = (state_35500[(2)]);
var inst_35491 = process.call(null,inst_35490);
var state_35500__$1 = state_35500;
if(cljs.core.truth_(inst_35491)){
var statearr_35503_35650 = state_35500__$1;
(statearr_35503_35650[(1)] = (5));

} else {
var statearr_35504_35651 = state_35500__$1;
(statearr_35504_35651[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35501 === (5))){
var state_35500__$1 = state_35500;
var statearr_35505_35652 = state_35500__$1;
(statearr_35505_35652[(2)] = null);

(statearr_35505_35652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35501 === (6))){
var state_35500__$1 = state_35500;
var statearr_35506_35653 = state_35500__$1;
(statearr_35506_35653[(2)] = null);

(statearr_35506_35653[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35501 === (7))){
var inst_35496 = (state_35500[(2)]);
var state_35500__$1 = state_35500;
var statearr_35507_35654 = state_35500__$1;
(statearr_35507_35654[(2)] = inst_35496);

(statearr_35507_35654[(1)] = (3));


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
});})(__35644,c__35318__auto___35648,G__35487_35645,G__35487_35646__$1,n__4376__auto___35643,jobs,results,process,async))
;
return ((function (__35644,switch__35230__auto__,c__35318__auto___35648,G__35487_35645,G__35487_35646__$1,n__4376__auto___35643,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____0 = (function (){
var statearr_35508 = [null,null,null,null,null,null,null];
(statearr_35508[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__);

(statearr_35508[(1)] = (1));

return statearr_35508;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____1 = (function (state_35500){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_35500);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e35509){if((e35509 instanceof Object)){
var ex__35234__auto__ = e35509;
var statearr_35510_35655 = state_35500;
(statearr_35510_35655[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35500);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35509;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35656 = state_35500;
state_35500 = G__35656;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__ = function(state_35500){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____1.call(this,state_35500);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__;
})()
;})(__35644,switch__35230__auto__,c__35318__auto___35648,G__35487_35645,G__35487_35646__$1,n__4376__auto___35643,jobs,results,process,async))
})();
var state__35320__auto__ = (function (){var statearr_35511 = f__35319__auto__.call(null);
(statearr_35511[(6)] = c__35318__auto___35648);

return statearr_35511;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(__35644,c__35318__auto___35648,G__35487_35645,G__35487_35646__$1,n__4376__auto___35643,jobs,results,process,async))
);


break;
case "async":
var c__35318__auto___35657 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__35644,c__35318__auto___35657,G__35487_35645,G__35487_35646__$1,n__4376__auto___35643,jobs,results,process,async){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (__35644,c__35318__auto___35657,G__35487_35645,G__35487_35646__$1,n__4376__auto___35643,jobs,results,process,async){
return (function (state_35524){
var state_val_35525 = (state_35524[(1)]);
if((state_val_35525 === (1))){
var state_35524__$1 = state_35524;
var statearr_35526_35658 = state_35524__$1;
(statearr_35526_35658[(2)] = null);

(statearr_35526_35658[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35525 === (2))){
var state_35524__$1 = state_35524;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35524__$1,(4),jobs);
} else {
if((state_val_35525 === (3))){
var inst_35522 = (state_35524[(2)]);
var state_35524__$1 = state_35524;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35524__$1,inst_35522);
} else {
if((state_val_35525 === (4))){
var inst_35514 = (state_35524[(2)]);
var inst_35515 = async.call(null,inst_35514);
var state_35524__$1 = state_35524;
if(cljs.core.truth_(inst_35515)){
var statearr_35527_35659 = state_35524__$1;
(statearr_35527_35659[(1)] = (5));

} else {
var statearr_35528_35660 = state_35524__$1;
(statearr_35528_35660[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35525 === (5))){
var state_35524__$1 = state_35524;
var statearr_35529_35661 = state_35524__$1;
(statearr_35529_35661[(2)] = null);

(statearr_35529_35661[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35525 === (6))){
var state_35524__$1 = state_35524;
var statearr_35530_35662 = state_35524__$1;
(statearr_35530_35662[(2)] = null);

(statearr_35530_35662[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35525 === (7))){
var inst_35520 = (state_35524[(2)]);
var state_35524__$1 = state_35524;
var statearr_35531_35663 = state_35524__$1;
(statearr_35531_35663[(2)] = inst_35520);

(statearr_35531_35663[(1)] = (3));


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
});})(__35644,c__35318__auto___35657,G__35487_35645,G__35487_35646__$1,n__4376__auto___35643,jobs,results,process,async))
;
return ((function (__35644,switch__35230__auto__,c__35318__auto___35657,G__35487_35645,G__35487_35646__$1,n__4376__auto___35643,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____0 = (function (){
var statearr_35532 = [null,null,null,null,null,null,null];
(statearr_35532[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__);

(statearr_35532[(1)] = (1));

return statearr_35532;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____1 = (function (state_35524){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_35524);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e35533){if((e35533 instanceof Object)){
var ex__35234__auto__ = e35533;
var statearr_35534_35664 = state_35524;
(statearr_35534_35664[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35524);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35533;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35665 = state_35524;
state_35524 = G__35665;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__ = function(state_35524){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____1.call(this,state_35524);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__;
})()
;})(__35644,switch__35230__auto__,c__35318__auto___35657,G__35487_35645,G__35487_35646__$1,n__4376__auto___35643,jobs,results,process,async))
})();
var state__35320__auto__ = (function (){var statearr_35535 = f__35319__auto__.call(null);
(statearr_35535[(6)] = c__35318__auto___35657);

return statearr_35535;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(__35644,c__35318__auto___35657,G__35487_35645,G__35487_35646__$1,n__4376__auto___35643,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35487_35646__$1)].join('')));

}

var G__35666 = (__35644 + (1));
__35644 = G__35666;
continue;
} else {
}
break;
}

var c__35318__auto___35667 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto___35667,jobs,results,process,async){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto___35667,jobs,results,process,async){
return (function (state_35557){
var state_val_35558 = (state_35557[(1)]);
if((state_val_35558 === (1))){
var state_35557__$1 = state_35557;
var statearr_35559_35668 = state_35557__$1;
(statearr_35559_35668[(2)] = null);

(statearr_35559_35668[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (2))){
var state_35557__$1 = state_35557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35557__$1,(4),from);
} else {
if((state_val_35558 === (3))){
var inst_35555 = (state_35557[(2)]);
var state_35557__$1 = state_35557;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35557__$1,inst_35555);
} else {
if((state_val_35558 === (4))){
var inst_35538 = (state_35557[(7)]);
var inst_35538__$1 = (state_35557[(2)]);
var inst_35539 = (inst_35538__$1 == null);
var state_35557__$1 = (function (){var statearr_35560 = state_35557;
(statearr_35560[(7)] = inst_35538__$1);

return statearr_35560;
})();
if(cljs.core.truth_(inst_35539)){
var statearr_35561_35669 = state_35557__$1;
(statearr_35561_35669[(1)] = (5));

} else {
var statearr_35562_35670 = state_35557__$1;
(statearr_35562_35670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (5))){
var inst_35541 = cljs.core.async.close_BANG_.call(null,jobs);
var state_35557__$1 = state_35557;
var statearr_35563_35671 = state_35557__$1;
(statearr_35563_35671[(2)] = inst_35541);

(statearr_35563_35671[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (6))){
var inst_35538 = (state_35557[(7)]);
var inst_35543 = (state_35557[(8)]);
var inst_35543__$1 = cljs.core.async.chan.call(null,(1));
var inst_35544 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_35545 = [inst_35538,inst_35543__$1];
var inst_35546 = (new cljs.core.PersistentVector(null,2,(5),inst_35544,inst_35545,null));
var state_35557__$1 = (function (){var statearr_35564 = state_35557;
(statearr_35564[(8)] = inst_35543__$1);

return statearr_35564;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35557__$1,(8),jobs,inst_35546);
} else {
if((state_val_35558 === (7))){
var inst_35553 = (state_35557[(2)]);
var state_35557__$1 = state_35557;
var statearr_35565_35672 = state_35557__$1;
(statearr_35565_35672[(2)] = inst_35553);

(statearr_35565_35672[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35558 === (8))){
var inst_35543 = (state_35557[(8)]);
var inst_35548 = (state_35557[(2)]);
var state_35557__$1 = (function (){var statearr_35566 = state_35557;
(statearr_35566[(9)] = inst_35548);

return statearr_35566;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35557__$1,(9),results,inst_35543);
} else {
if((state_val_35558 === (9))){
var inst_35550 = (state_35557[(2)]);
var state_35557__$1 = (function (){var statearr_35567 = state_35557;
(statearr_35567[(10)] = inst_35550);

return statearr_35567;
})();
var statearr_35568_35673 = state_35557__$1;
(statearr_35568_35673[(2)] = null);

(statearr_35568_35673[(1)] = (2));


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
});})(c__35318__auto___35667,jobs,results,process,async))
;
return ((function (switch__35230__auto__,c__35318__auto___35667,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____0 = (function (){
var statearr_35569 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35569[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__);

(statearr_35569[(1)] = (1));

return statearr_35569;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____1 = (function (state_35557){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_35557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e35570){if((e35570 instanceof Object)){
var ex__35234__auto__ = e35570;
var statearr_35571_35674 = state_35557;
(statearr_35571_35674[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35570;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35675 = state_35557;
state_35557 = G__35675;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__ = function(state_35557){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____1.call(this,state_35557);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto___35667,jobs,results,process,async))
})();
var state__35320__auto__ = (function (){var statearr_35572 = f__35319__auto__.call(null);
(statearr_35572[(6)] = c__35318__auto___35667);

return statearr_35572;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto___35667,jobs,results,process,async))
);


var c__35318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto__,jobs,results,process,async){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto__,jobs,results,process,async){
return (function (state_35610){
var state_val_35611 = (state_35610[(1)]);
if((state_val_35611 === (7))){
var inst_35606 = (state_35610[(2)]);
var state_35610__$1 = state_35610;
var statearr_35612_35676 = state_35610__$1;
(statearr_35612_35676[(2)] = inst_35606);

(statearr_35612_35676[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (20))){
var state_35610__$1 = state_35610;
var statearr_35613_35677 = state_35610__$1;
(statearr_35613_35677[(2)] = null);

(statearr_35613_35677[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (1))){
var state_35610__$1 = state_35610;
var statearr_35614_35678 = state_35610__$1;
(statearr_35614_35678[(2)] = null);

(statearr_35614_35678[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (4))){
var inst_35575 = (state_35610[(7)]);
var inst_35575__$1 = (state_35610[(2)]);
var inst_35576 = (inst_35575__$1 == null);
var state_35610__$1 = (function (){var statearr_35615 = state_35610;
(statearr_35615[(7)] = inst_35575__$1);

return statearr_35615;
})();
if(cljs.core.truth_(inst_35576)){
var statearr_35616_35679 = state_35610__$1;
(statearr_35616_35679[(1)] = (5));

} else {
var statearr_35617_35680 = state_35610__$1;
(statearr_35617_35680[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (15))){
var inst_35588 = (state_35610[(8)]);
var state_35610__$1 = state_35610;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35610__$1,(18),to,inst_35588);
} else {
if((state_val_35611 === (21))){
var inst_35601 = (state_35610[(2)]);
var state_35610__$1 = state_35610;
var statearr_35618_35681 = state_35610__$1;
(statearr_35618_35681[(2)] = inst_35601);

(statearr_35618_35681[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (13))){
var inst_35603 = (state_35610[(2)]);
var state_35610__$1 = (function (){var statearr_35619 = state_35610;
(statearr_35619[(9)] = inst_35603);

return statearr_35619;
})();
var statearr_35620_35682 = state_35610__$1;
(statearr_35620_35682[(2)] = null);

(statearr_35620_35682[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (6))){
var inst_35575 = (state_35610[(7)]);
var state_35610__$1 = state_35610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35610__$1,(11),inst_35575);
} else {
if((state_val_35611 === (17))){
var inst_35596 = (state_35610[(2)]);
var state_35610__$1 = state_35610;
if(cljs.core.truth_(inst_35596)){
var statearr_35621_35683 = state_35610__$1;
(statearr_35621_35683[(1)] = (19));

} else {
var statearr_35622_35684 = state_35610__$1;
(statearr_35622_35684[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (3))){
var inst_35608 = (state_35610[(2)]);
var state_35610__$1 = state_35610;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35610__$1,inst_35608);
} else {
if((state_val_35611 === (12))){
var inst_35585 = (state_35610[(10)]);
var state_35610__$1 = state_35610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35610__$1,(14),inst_35585);
} else {
if((state_val_35611 === (2))){
var state_35610__$1 = state_35610;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35610__$1,(4),results);
} else {
if((state_val_35611 === (19))){
var state_35610__$1 = state_35610;
var statearr_35623_35685 = state_35610__$1;
(statearr_35623_35685[(2)] = null);

(statearr_35623_35685[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (11))){
var inst_35585 = (state_35610[(2)]);
var state_35610__$1 = (function (){var statearr_35624 = state_35610;
(statearr_35624[(10)] = inst_35585);

return statearr_35624;
})();
var statearr_35625_35686 = state_35610__$1;
(statearr_35625_35686[(2)] = null);

(statearr_35625_35686[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (9))){
var state_35610__$1 = state_35610;
var statearr_35626_35687 = state_35610__$1;
(statearr_35626_35687[(2)] = null);

(statearr_35626_35687[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (5))){
var state_35610__$1 = state_35610;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35627_35688 = state_35610__$1;
(statearr_35627_35688[(1)] = (8));

} else {
var statearr_35628_35689 = state_35610__$1;
(statearr_35628_35689[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (14))){
var inst_35590 = (state_35610[(11)]);
var inst_35588 = (state_35610[(8)]);
var inst_35588__$1 = (state_35610[(2)]);
var inst_35589 = (inst_35588__$1 == null);
var inst_35590__$1 = cljs.core.not.call(null,inst_35589);
var state_35610__$1 = (function (){var statearr_35629 = state_35610;
(statearr_35629[(11)] = inst_35590__$1);

(statearr_35629[(8)] = inst_35588__$1);

return statearr_35629;
})();
if(inst_35590__$1){
var statearr_35630_35690 = state_35610__$1;
(statearr_35630_35690[(1)] = (15));

} else {
var statearr_35631_35691 = state_35610__$1;
(statearr_35631_35691[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (16))){
var inst_35590 = (state_35610[(11)]);
var state_35610__$1 = state_35610;
var statearr_35632_35692 = state_35610__$1;
(statearr_35632_35692[(2)] = inst_35590);

(statearr_35632_35692[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (10))){
var inst_35582 = (state_35610[(2)]);
var state_35610__$1 = state_35610;
var statearr_35633_35693 = state_35610__$1;
(statearr_35633_35693[(2)] = inst_35582);

(statearr_35633_35693[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (18))){
var inst_35593 = (state_35610[(2)]);
var state_35610__$1 = state_35610;
var statearr_35634_35694 = state_35610__$1;
(statearr_35634_35694[(2)] = inst_35593);

(statearr_35634_35694[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35611 === (8))){
var inst_35579 = cljs.core.async.close_BANG_.call(null,to);
var state_35610__$1 = state_35610;
var statearr_35635_35695 = state_35610__$1;
(statearr_35635_35695[(2)] = inst_35579);

(statearr_35635_35695[(1)] = (10));


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
});})(c__35318__auto__,jobs,results,process,async))
;
return ((function (switch__35230__auto__,c__35318__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____0 = (function (){
var statearr_35636 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35636[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__);

(statearr_35636[(1)] = (1));

return statearr_35636;
});
var cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____1 = (function (state_35610){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_35610);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e35637){if((e35637 instanceof Object)){
var ex__35234__auto__ = e35637;
var statearr_35638_35696 = state_35610;
(statearr_35638_35696[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35610);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35637;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35697 = state_35610;
state_35610 = G__35697;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__ = function(state_35610){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____1.call(this,state_35610);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__35231__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto__,jobs,results,process,async))
})();
var state__35320__auto__ = (function (){var statearr_35639 = f__35319__auto__.call(null);
(statearr_35639[(6)] = c__35318__auto__);

return statearr_35639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto__,jobs,results,process,async))
);

return c__35318__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__35699 = arguments.length;
switch (G__35699) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__35702 = arguments.length;
switch (G__35702) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__35705 = arguments.length;
switch (G__35705) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__35318__auto___35754 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto___35754,tc,fc){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto___35754,tc,fc){
return (function (state_35731){
var state_val_35732 = (state_35731[(1)]);
if((state_val_35732 === (7))){
var inst_35727 = (state_35731[(2)]);
var state_35731__$1 = state_35731;
var statearr_35733_35755 = state_35731__$1;
(statearr_35733_35755[(2)] = inst_35727);

(statearr_35733_35755[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35732 === (1))){
var state_35731__$1 = state_35731;
var statearr_35734_35756 = state_35731__$1;
(statearr_35734_35756[(2)] = null);

(statearr_35734_35756[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35732 === (4))){
var inst_35708 = (state_35731[(7)]);
var inst_35708__$1 = (state_35731[(2)]);
var inst_35709 = (inst_35708__$1 == null);
var state_35731__$1 = (function (){var statearr_35735 = state_35731;
(statearr_35735[(7)] = inst_35708__$1);

return statearr_35735;
})();
if(cljs.core.truth_(inst_35709)){
var statearr_35736_35757 = state_35731__$1;
(statearr_35736_35757[(1)] = (5));

} else {
var statearr_35737_35758 = state_35731__$1;
(statearr_35737_35758[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35732 === (13))){
var state_35731__$1 = state_35731;
var statearr_35738_35759 = state_35731__$1;
(statearr_35738_35759[(2)] = null);

(statearr_35738_35759[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35732 === (6))){
var inst_35708 = (state_35731[(7)]);
var inst_35714 = p.call(null,inst_35708);
var state_35731__$1 = state_35731;
if(cljs.core.truth_(inst_35714)){
var statearr_35739_35760 = state_35731__$1;
(statearr_35739_35760[(1)] = (9));

} else {
var statearr_35740_35761 = state_35731__$1;
(statearr_35740_35761[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35732 === (3))){
var inst_35729 = (state_35731[(2)]);
var state_35731__$1 = state_35731;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35731__$1,inst_35729);
} else {
if((state_val_35732 === (12))){
var state_35731__$1 = state_35731;
var statearr_35741_35762 = state_35731__$1;
(statearr_35741_35762[(2)] = null);

(statearr_35741_35762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35732 === (2))){
var state_35731__$1 = state_35731;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35731__$1,(4),ch);
} else {
if((state_val_35732 === (11))){
var inst_35708 = (state_35731[(7)]);
var inst_35718 = (state_35731[(2)]);
var state_35731__$1 = state_35731;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35731__$1,(8),inst_35718,inst_35708);
} else {
if((state_val_35732 === (9))){
var state_35731__$1 = state_35731;
var statearr_35742_35763 = state_35731__$1;
(statearr_35742_35763[(2)] = tc);

(statearr_35742_35763[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35732 === (5))){
var inst_35711 = cljs.core.async.close_BANG_.call(null,tc);
var inst_35712 = cljs.core.async.close_BANG_.call(null,fc);
var state_35731__$1 = (function (){var statearr_35743 = state_35731;
(statearr_35743[(8)] = inst_35711);

return statearr_35743;
})();
var statearr_35744_35764 = state_35731__$1;
(statearr_35744_35764[(2)] = inst_35712);

(statearr_35744_35764[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35732 === (14))){
var inst_35725 = (state_35731[(2)]);
var state_35731__$1 = state_35731;
var statearr_35745_35765 = state_35731__$1;
(statearr_35745_35765[(2)] = inst_35725);

(statearr_35745_35765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35732 === (10))){
var state_35731__$1 = state_35731;
var statearr_35746_35766 = state_35731__$1;
(statearr_35746_35766[(2)] = fc);

(statearr_35746_35766[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35732 === (8))){
var inst_35720 = (state_35731[(2)]);
var state_35731__$1 = state_35731;
if(cljs.core.truth_(inst_35720)){
var statearr_35747_35767 = state_35731__$1;
(statearr_35747_35767[(1)] = (12));

} else {
var statearr_35748_35768 = state_35731__$1;
(statearr_35748_35768[(1)] = (13));

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
});})(c__35318__auto___35754,tc,fc))
;
return ((function (switch__35230__auto__,c__35318__auto___35754,tc,fc){
return (function() {
var cljs$core$async$state_machine__35231__auto__ = null;
var cljs$core$async$state_machine__35231__auto____0 = (function (){
var statearr_35749 = [null,null,null,null,null,null,null,null,null];
(statearr_35749[(0)] = cljs$core$async$state_machine__35231__auto__);

(statearr_35749[(1)] = (1));

return statearr_35749;
});
var cljs$core$async$state_machine__35231__auto____1 = (function (state_35731){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_35731);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e35750){if((e35750 instanceof Object)){
var ex__35234__auto__ = e35750;
var statearr_35751_35769 = state_35731;
(statearr_35751_35769[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35731);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35750;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35770 = state_35731;
state_35731 = G__35770;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
cljs$core$async$state_machine__35231__auto__ = function(state_35731){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35231__auto____1.call(this,state_35731);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35231__auto____0;
cljs$core$async$state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35231__auto____1;
return cljs$core$async$state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto___35754,tc,fc))
})();
var state__35320__auto__ = (function (){var statearr_35752 = f__35319__auto__.call(null);
(statearr_35752[(6)] = c__35318__auto___35754);

return statearr_35752;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto___35754,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__35318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto__){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto__){
return (function (state_35791){
var state_val_35792 = (state_35791[(1)]);
if((state_val_35792 === (7))){
var inst_35787 = (state_35791[(2)]);
var state_35791__$1 = state_35791;
var statearr_35793_35811 = state_35791__$1;
(statearr_35793_35811[(2)] = inst_35787);

(statearr_35793_35811[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35792 === (1))){
var inst_35771 = init;
var state_35791__$1 = (function (){var statearr_35794 = state_35791;
(statearr_35794[(7)] = inst_35771);

return statearr_35794;
})();
var statearr_35795_35812 = state_35791__$1;
(statearr_35795_35812[(2)] = null);

(statearr_35795_35812[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35792 === (4))){
var inst_35774 = (state_35791[(8)]);
var inst_35774__$1 = (state_35791[(2)]);
var inst_35775 = (inst_35774__$1 == null);
var state_35791__$1 = (function (){var statearr_35796 = state_35791;
(statearr_35796[(8)] = inst_35774__$1);

return statearr_35796;
})();
if(cljs.core.truth_(inst_35775)){
var statearr_35797_35813 = state_35791__$1;
(statearr_35797_35813[(1)] = (5));

} else {
var statearr_35798_35814 = state_35791__$1;
(statearr_35798_35814[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35792 === (6))){
var inst_35771 = (state_35791[(7)]);
var inst_35778 = (state_35791[(9)]);
var inst_35774 = (state_35791[(8)]);
var inst_35778__$1 = f.call(null,inst_35771,inst_35774);
var inst_35779 = cljs.core.reduced_QMARK_.call(null,inst_35778__$1);
var state_35791__$1 = (function (){var statearr_35799 = state_35791;
(statearr_35799[(9)] = inst_35778__$1);

return statearr_35799;
})();
if(inst_35779){
var statearr_35800_35815 = state_35791__$1;
(statearr_35800_35815[(1)] = (8));

} else {
var statearr_35801_35816 = state_35791__$1;
(statearr_35801_35816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35792 === (3))){
var inst_35789 = (state_35791[(2)]);
var state_35791__$1 = state_35791;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35791__$1,inst_35789);
} else {
if((state_val_35792 === (2))){
var state_35791__$1 = state_35791;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35791__$1,(4),ch);
} else {
if((state_val_35792 === (9))){
var inst_35778 = (state_35791[(9)]);
var inst_35771 = inst_35778;
var state_35791__$1 = (function (){var statearr_35802 = state_35791;
(statearr_35802[(7)] = inst_35771);

return statearr_35802;
})();
var statearr_35803_35817 = state_35791__$1;
(statearr_35803_35817[(2)] = null);

(statearr_35803_35817[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35792 === (5))){
var inst_35771 = (state_35791[(7)]);
var state_35791__$1 = state_35791;
var statearr_35804_35818 = state_35791__$1;
(statearr_35804_35818[(2)] = inst_35771);

(statearr_35804_35818[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35792 === (10))){
var inst_35785 = (state_35791[(2)]);
var state_35791__$1 = state_35791;
var statearr_35805_35819 = state_35791__$1;
(statearr_35805_35819[(2)] = inst_35785);

(statearr_35805_35819[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35792 === (8))){
var inst_35778 = (state_35791[(9)]);
var inst_35781 = cljs.core.deref.call(null,inst_35778);
var state_35791__$1 = state_35791;
var statearr_35806_35820 = state_35791__$1;
(statearr_35806_35820[(2)] = inst_35781);

(statearr_35806_35820[(1)] = (10));


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
});})(c__35318__auto__))
;
return ((function (switch__35230__auto__,c__35318__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__35231__auto__ = null;
var cljs$core$async$reduce_$_state_machine__35231__auto____0 = (function (){
var statearr_35807 = [null,null,null,null,null,null,null,null,null,null];
(statearr_35807[(0)] = cljs$core$async$reduce_$_state_machine__35231__auto__);

(statearr_35807[(1)] = (1));

return statearr_35807;
});
var cljs$core$async$reduce_$_state_machine__35231__auto____1 = (function (state_35791){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_35791);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e35808){if((e35808 instanceof Object)){
var ex__35234__auto__ = e35808;
var statearr_35809_35821 = state_35791;
(statearr_35809_35821[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35791);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35822 = state_35791;
state_35791 = G__35822;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__35231__auto__ = function(state_35791){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__35231__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__35231__auto____1.call(this,state_35791);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__35231__auto____0;
cljs$core$async$reduce_$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__35231__auto____1;
return cljs$core$async$reduce_$_state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto__))
})();
var state__35320__auto__ = (function (){var statearr_35810 = f__35319__auto__.call(null);
(statearr_35810[(6)] = c__35318__auto__);

return statearr_35810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto__))
);

return c__35318__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__35318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto__,f__$1){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto__,f__$1){
return (function (state_35828){
var state_val_35829 = (state_35828[(1)]);
if((state_val_35829 === (1))){
var inst_35823 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_35828__$1 = state_35828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35828__$1,(2),inst_35823);
} else {
if((state_val_35829 === (2))){
var inst_35825 = (state_35828[(2)]);
var inst_35826 = f__$1.call(null,inst_35825);
var state_35828__$1 = state_35828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35828__$1,inst_35826);
} else {
return null;
}
}
});})(c__35318__auto__,f__$1))
;
return ((function (switch__35230__auto__,c__35318__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__35231__auto__ = null;
var cljs$core$async$transduce_$_state_machine__35231__auto____0 = (function (){
var statearr_35830 = [null,null,null,null,null,null,null];
(statearr_35830[(0)] = cljs$core$async$transduce_$_state_machine__35231__auto__);

(statearr_35830[(1)] = (1));

return statearr_35830;
});
var cljs$core$async$transduce_$_state_machine__35231__auto____1 = (function (state_35828){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_35828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e35831){if((e35831 instanceof Object)){
var ex__35234__auto__ = e35831;
var statearr_35832_35834 = state_35828;
(statearr_35832_35834[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35831;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35835 = state_35828;
state_35828 = G__35835;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__35231__auto__ = function(state_35828){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__35231__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__35231__auto____1.call(this,state_35828);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__35231__auto____0;
cljs$core$async$transduce_$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__35231__auto____1;
return cljs$core$async$transduce_$_state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto__,f__$1))
})();
var state__35320__auto__ = (function (){var statearr_35833 = f__35319__auto__.call(null);
(statearr_35833[(6)] = c__35318__auto__);

return statearr_35833;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto__,f__$1))
);

return c__35318__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__35837 = arguments.length;
switch (G__35837) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__35318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto__){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto__){
return (function (state_35862){
var state_val_35863 = (state_35862[(1)]);
if((state_val_35863 === (7))){
var inst_35844 = (state_35862[(2)]);
var state_35862__$1 = state_35862;
var statearr_35864_35885 = state_35862__$1;
(statearr_35864_35885[(2)] = inst_35844);

(statearr_35864_35885[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (1))){
var inst_35838 = cljs.core.seq.call(null,coll);
var inst_35839 = inst_35838;
var state_35862__$1 = (function (){var statearr_35865 = state_35862;
(statearr_35865[(7)] = inst_35839);

return statearr_35865;
})();
var statearr_35866_35886 = state_35862__$1;
(statearr_35866_35886[(2)] = null);

(statearr_35866_35886[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (4))){
var inst_35839 = (state_35862[(7)]);
var inst_35842 = cljs.core.first.call(null,inst_35839);
var state_35862__$1 = state_35862;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35862__$1,(7),ch,inst_35842);
} else {
if((state_val_35863 === (13))){
var inst_35856 = (state_35862[(2)]);
var state_35862__$1 = state_35862;
var statearr_35867_35887 = state_35862__$1;
(statearr_35867_35887[(2)] = inst_35856);

(statearr_35867_35887[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (6))){
var inst_35847 = (state_35862[(2)]);
var state_35862__$1 = state_35862;
if(cljs.core.truth_(inst_35847)){
var statearr_35868_35888 = state_35862__$1;
(statearr_35868_35888[(1)] = (8));

} else {
var statearr_35869_35889 = state_35862__$1;
(statearr_35869_35889[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (3))){
var inst_35860 = (state_35862[(2)]);
var state_35862__$1 = state_35862;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35862__$1,inst_35860);
} else {
if((state_val_35863 === (12))){
var state_35862__$1 = state_35862;
var statearr_35870_35890 = state_35862__$1;
(statearr_35870_35890[(2)] = null);

(statearr_35870_35890[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (2))){
var inst_35839 = (state_35862[(7)]);
var state_35862__$1 = state_35862;
if(cljs.core.truth_(inst_35839)){
var statearr_35871_35891 = state_35862__$1;
(statearr_35871_35891[(1)] = (4));

} else {
var statearr_35872_35892 = state_35862__$1;
(statearr_35872_35892[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (11))){
var inst_35853 = cljs.core.async.close_BANG_.call(null,ch);
var state_35862__$1 = state_35862;
var statearr_35873_35893 = state_35862__$1;
(statearr_35873_35893[(2)] = inst_35853);

(statearr_35873_35893[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (9))){
var state_35862__$1 = state_35862;
if(cljs.core.truth_(close_QMARK_)){
var statearr_35874_35894 = state_35862__$1;
(statearr_35874_35894[(1)] = (11));

} else {
var statearr_35875_35895 = state_35862__$1;
(statearr_35875_35895[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (5))){
var inst_35839 = (state_35862[(7)]);
var state_35862__$1 = state_35862;
var statearr_35876_35896 = state_35862__$1;
(statearr_35876_35896[(2)] = inst_35839);

(statearr_35876_35896[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (10))){
var inst_35858 = (state_35862[(2)]);
var state_35862__$1 = state_35862;
var statearr_35877_35897 = state_35862__$1;
(statearr_35877_35897[(2)] = inst_35858);

(statearr_35877_35897[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35863 === (8))){
var inst_35839 = (state_35862[(7)]);
var inst_35849 = cljs.core.next.call(null,inst_35839);
var inst_35839__$1 = inst_35849;
var state_35862__$1 = (function (){var statearr_35878 = state_35862;
(statearr_35878[(7)] = inst_35839__$1);

return statearr_35878;
})();
var statearr_35879_35898 = state_35862__$1;
(statearr_35879_35898[(2)] = null);

(statearr_35879_35898[(1)] = (2));


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
});})(c__35318__auto__))
;
return ((function (switch__35230__auto__,c__35318__auto__){
return (function() {
var cljs$core$async$state_machine__35231__auto__ = null;
var cljs$core$async$state_machine__35231__auto____0 = (function (){
var statearr_35880 = [null,null,null,null,null,null,null,null];
(statearr_35880[(0)] = cljs$core$async$state_machine__35231__auto__);

(statearr_35880[(1)] = (1));

return statearr_35880;
});
var cljs$core$async$state_machine__35231__auto____1 = (function (state_35862){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_35862);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e35881){if((e35881 instanceof Object)){
var ex__35234__auto__ = e35881;
var statearr_35882_35899 = state_35862;
(statearr_35882_35899[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35862);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35900 = state_35862;
state_35862 = G__35900;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
cljs$core$async$state_machine__35231__auto__ = function(state_35862){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35231__auto____1.call(this,state_35862);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35231__auto____0;
cljs$core$async$state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35231__auto____1;
return cljs$core$async$state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto__))
})();
var state__35320__auto__ = (function (){var statearr_35883 = f__35319__auto__.call(null);
(statearr_35883[(6)] = c__35318__auto__);

return statearr_35883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto__))
);

return c__35318__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if(((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4211__auto__ = (((_ == null))?null:_);
var m__4212__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,_);
} else {
var m__4212__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35901 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35901 = (function (ch,cs,meta35902){
this.ch = ch;
this.cs = cs;
this.meta35902 = meta35902;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35901.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_35903,meta35902__$1){
var self__ = this;
var _35903__$1 = this;
return (new cljs.core.async.t_cljs$core$async35901(self__.ch,self__.cs,meta35902__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async35901.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_35903){
var self__ = this;
var _35903__$1 = this;
return self__.meta35902;
});})(cs))
;

cljs.core.async.t_cljs$core$async35901.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35901.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async35901.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35901.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35901.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35901.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async35901.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta35902","meta35902",1659335484,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async35901.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35901.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35901";

cljs.core.async.t_cljs$core$async35901.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async35901");
});})(cs))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35901.
 */
cljs.core.async.__GT_t_cljs$core$async35901 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async35901(ch__$1,cs__$1,meta35902){
return (new cljs.core.async.t_cljs$core$async35901(ch__$1,cs__$1,meta35902));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async35901(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__35318__auto___36123 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto___36123,cs,m,dchan,dctr,done){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto___36123,cs,m,dchan,dctr,done){
return (function (state_36038){
var state_val_36039 = (state_36038[(1)]);
if((state_val_36039 === (7))){
var inst_36034 = (state_36038[(2)]);
var state_36038__$1 = state_36038;
var statearr_36040_36124 = state_36038__$1;
(statearr_36040_36124[(2)] = inst_36034);

(statearr_36040_36124[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (20))){
var inst_35937 = (state_36038[(7)]);
var inst_35949 = cljs.core.first.call(null,inst_35937);
var inst_35950 = cljs.core.nth.call(null,inst_35949,(0),null);
var inst_35951 = cljs.core.nth.call(null,inst_35949,(1),null);
var state_36038__$1 = (function (){var statearr_36041 = state_36038;
(statearr_36041[(8)] = inst_35950);

return statearr_36041;
})();
if(cljs.core.truth_(inst_35951)){
var statearr_36042_36125 = state_36038__$1;
(statearr_36042_36125[(1)] = (22));

} else {
var statearr_36043_36126 = state_36038__$1;
(statearr_36043_36126[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (27))){
var inst_35979 = (state_36038[(9)]);
var inst_35906 = (state_36038[(10)]);
var inst_35986 = (state_36038[(11)]);
var inst_35981 = (state_36038[(12)]);
var inst_35986__$1 = cljs.core._nth.call(null,inst_35979,inst_35981);
var inst_35987 = cljs.core.async.put_BANG_.call(null,inst_35986__$1,inst_35906,done);
var state_36038__$1 = (function (){var statearr_36044 = state_36038;
(statearr_36044[(11)] = inst_35986__$1);

return statearr_36044;
})();
if(cljs.core.truth_(inst_35987)){
var statearr_36045_36127 = state_36038__$1;
(statearr_36045_36127[(1)] = (30));

} else {
var statearr_36046_36128 = state_36038__$1;
(statearr_36046_36128[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (1))){
var state_36038__$1 = state_36038;
var statearr_36047_36129 = state_36038__$1;
(statearr_36047_36129[(2)] = null);

(statearr_36047_36129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (24))){
var inst_35937 = (state_36038[(7)]);
var inst_35956 = (state_36038[(2)]);
var inst_35957 = cljs.core.next.call(null,inst_35937);
var inst_35915 = inst_35957;
var inst_35916 = null;
var inst_35917 = (0);
var inst_35918 = (0);
var state_36038__$1 = (function (){var statearr_36048 = state_36038;
(statearr_36048[(13)] = inst_35956);

(statearr_36048[(14)] = inst_35917);

(statearr_36048[(15)] = inst_35916);

(statearr_36048[(16)] = inst_35918);

(statearr_36048[(17)] = inst_35915);

return statearr_36048;
})();
var statearr_36049_36130 = state_36038__$1;
(statearr_36049_36130[(2)] = null);

(statearr_36049_36130[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (39))){
var state_36038__$1 = state_36038;
var statearr_36053_36131 = state_36038__$1;
(statearr_36053_36131[(2)] = null);

(statearr_36053_36131[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (4))){
var inst_35906 = (state_36038[(10)]);
var inst_35906__$1 = (state_36038[(2)]);
var inst_35907 = (inst_35906__$1 == null);
var state_36038__$1 = (function (){var statearr_36054 = state_36038;
(statearr_36054[(10)] = inst_35906__$1);

return statearr_36054;
})();
if(cljs.core.truth_(inst_35907)){
var statearr_36055_36132 = state_36038__$1;
(statearr_36055_36132[(1)] = (5));

} else {
var statearr_36056_36133 = state_36038__$1;
(statearr_36056_36133[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (15))){
var inst_35917 = (state_36038[(14)]);
var inst_35916 = (state_36038[(15)]);
var inst_35918 = (state_36038[(16)]);
var inst_35915 = (state_36038[(17)]);
var inst_35933 = (state_36038[(2)]);
var inst_35934 = (inst_35918 + (1));
var tmp36050 = inst_35917;
var tmp36051 = inst_35916;
var tmp36052 = inst_35915;
var inst_35915__$1 = tmp36052;
var inst_35916__$1 = tmp36051;
var inst_35917__$1 = tmp36050;
var inst_35918__$1 = inst_35934;
var state_36038__$1 = (function (){var statearr_36057 = state_36038;
(statearr_36057[(18)] = inst_35933);

(statearr_36057[(14)] = inst_35917__$1);

(statearr_36057[(15)] = inst_35916__$1);

(statearr_36057[(16)] = inst_35918__$1);

(statearr_36057[(17)] = inst_35915__$1);

return statearr_36057;
})();
var statearr_36058_36134 = state_36038__$1;
(statearr_36058_36134[(2)] = null);

(statearr_36058_36134[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (21))){
var inst_35960 = (state_36038[(2)]);
var state_36038__$1 = state_36038;
var statearr_36062_36135 = state_36038__$1;
(statearr_36062_36135[(2)] = inst_35960);

(statearr_36062_36135[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (31))){
var inst_35986 = (state_36038[(11)]);
var inst_35990 = done.call(null,null);
var inst_35991 = cljs.core.async.untap_STAR_.call(null,m,inst_35986);
var state_36038__$1 = (function (){var statearr_36063 = state_36038;
(statearr_36063[(19)] = inst_35990);

return statearr_36063;
})();
var statearr_36064_36136 = state_36038__$1;
(statearr_36064_36136[(2)] = inst_35991);

(statearr_36064_36136[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (32))){
var inst_35978 = (state_36038[(20)]);
var inst_35979 = (state_36038[(9)]);
var inst_35980 = (state_36038[(21)]);
var inst_35981 = (state_36038[(12)]);
var inst_35993 = (state_36038[(2)]);
var inst_35994 = (inst_35981 + (1));
var tmp36059 = inst_35978;
var tmp36060 = inst_35979;
var tmp36061 = inst_35980;
var inst_35978__$1 = tmp36059;
var inst_35979__$1 = tmp36060;
var inst_35980__$1 = tmp36061;
var inst_35981__$1 = inst_35994;
var state_36038__$1 = (function (){var statearr_36065 = state_36038;
(statearr_36065[(20)] = inst_35978__$1);

(statearr_36065[(22)] = inst_35993);

(statearr_36065[(9)] = inst_35979__$1);

(statearr_36065[(21)] = inst_35980__$1);

(statearr_36065[(12)] = inst_35981__$1);

return statearr_36065;
})();
var statearr_36066_36137 = state_36038__$1;
(statearr_36066_36137[(2)] = null);

(statearr_36066_36137[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (40))){
var inst_36006 = (state_36038[(23)]);
var inst_36010 = done.call(null,null);
var inst_36011 = cljs.core.async.untap_STAR_.call(null,m,inst_36006);
var state_36038__$1 = (function (){var statearr_36067 = state_36038;
(statearr_36067[(24)] = inst_36010);

return statearr_36067;
})();
var statearr_36068_36138 = state_36038__$1;
(statearr_36068_36138[(2)] = inst_36011);

(statearr_36068_36138[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (33))){
var inst_35997 = (state_36038[(25)]);
var inst_35999 = cljs.core.chunked_seq_QMARK_.call(null,inst_35997);
var state_36038__$1 = state_36038;
if(inst_35999){
var statearr_36069_36139 = state_36038__$1;
(statearr_36069_36139[(1)] = (36));

} else {
var statearr_36070_36140 = state_36038__$1;
(statearr_36070_36140[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (13))){
var inst_35927 = (state_36038[(26)]);
var inst_35930 = cljs.core.async.close_BANG_.call(null,inst_35927);
var state_36038__$1 = state_36038;
var statearr_36071_36141 = state_36038__$1;
(statearr_36071_36141[(2)] = inst_35930);

(statearr_36071_36141[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (22))){
var inst_35950 = (state_36038[(8)]);
var inst_35953 = cljs.core.async.close_BANG_.call(null,inst_35950);
var state_36038__$1 = state_36038;
var statearr_36072_36142 = state_36038__$1;
(statearr_36072_36142[(2)] = inst_35953);

(statearr_36072_36142[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (36))){
var inst_35997 = (state_36038[(25)]);
var inst_36001 = cljs.core.chunk_first.call(null,inst_35997);
var inst_36002 = cljs.core.chunk_rest.call(null,inst_35997);
var inst_36003 = cljs.core.count.call(null,inst_36001);
var inst_35978 = inst_36002;
var inst_35979 = inst_36001;
var inst_35980 = inst_36003;
var inst_35981 = (0);
var state_36038__$1 = (function (){var statearr_36073 = state_36038;
(statearr_36073[(20)] = inst_35978);

(statearr_36073[(9)] = inst_35979);

(statearr_36073[(21)] = inst_35980);

(statearr_36073[(12)] = inst_35981);

return statearr_36073;
})();
var statearr_36074_36143 = state_36038__$1;
(statearr_36074_36143[(2)] = null);

(statearr_36074_36143[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (41))){
var inst_35997 = (state_36038[(25)]);
var inst_36013 = (state_36038[(2)]);
var inst_36014 = cljs.core.next.call(null,inst_35997);
var inst_35978 = inst_36014;
var inst_35979 = null;
var inst_35980 = (0);
var inst_35981 = (0);
var state_36038__$1 = (function (){var statearr_36075 = state_36038;
(statearr_36075[(27)] = inst_36013);

(statearr_36075[(20)] = inst_35978);

(statearr_36075[(9)] = inst_35979);

(statearr_36075[(21)] = inst_35980);

(statearr_36075[(12)] = inst_35981);

return statearr_36075;
})();
var statearr_36076_36144 = state_36038__$1;
(statearr_36076_36144[(2)] = null);

(statearr_36076_36144[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (43))){
var state_36038__$1 = state_36038;
var statearr_36077_36145 = state_36038__$1;
(statearr_36077_36145[(2)] = null);

(statearr_36077_36145[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (29))){
var inst_36022 = (state_36038[(2)]);
var state_36038__$1 = state_36038;
var statearr_36078_36146 = state_36038__$1;
(statearr_36078_36146[(2)] = inst_36022);

(statearr_36078_36146[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (44))){
var inst_36031 = (state_36038[(2)]);
var state_36038__$1 = (function (){var statearr_36079 = state_36038;
(statearr_36079[(28)] = inst_36031);

return statearr_36079;
})();
var statearr_36080_36147 = state_36038__$1;
(statearr_36080_36147[(2)] = null);

(statearr_36080_36147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (6))){
var inst_35970 = (state_36038[(29)]);
var inst_35969 = cljs.core.deref.call(null,cs);
var inst_35970__$1 = cljs.core.keys.call(null,inst_35969);
var inst_35971 = cljs.core.count.call(null,inst_35970__$1);
var inst_35972 = cljs.core.reset_BANG_.call(null,dctr,inst_35971);
var inst_35977 = cljs.core.seq.call(null,inst_35970__$1);
var inst_35978 = inst_35977;
var inst_35979 = null;
var inst_35980 = (0);
var inst_35981 = (0);
var state_36038__$1 = (function (){var statearr_36081 = state_36038;
(statearr_36081[(20)] = inst_35978);

(statearr_36081[(30)] = inst_35972);

(statearr_36081[(9)] = inst_35979);

(statearr_36081[(21)] = inst_35980);

(statearr_36081[(29)] = inst_35970__$1);

(statearr_36081[(12)] = inst_35981);

return statearr_36081;
})();
var statearr_36082_36148 = state_36038__$1;
(statearr_36082_36148[(2)] = null);

(statearr_36082_36148[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (28))){
var inst_35978 = (state_36038[(20)]);
var inst_35997 = (state_36038[(25)]);
var inst_35997__$1 = cljs.core.seq.call(null,inst_35978);
var state_36038__$1 = (function (){var statearr_36083 = state_36038;
(statearr_36083[(25)] = inst_35997__$1);

return statearr_36083;
})();
if(inst_35997__$1){
var statearr_36084_36149 = state_36038__$1;
(statearr_36084_36149[(1)] = (33));

} else {
var statearr_36085_36150 = state_36038__$1;
(statearr_36085_36150[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (25))){
var inst_35980 = (state_36038[(21)]);
var inst_35981 = (state_36038[(12)]);
var inst_35983 = (inst_35981 < inst_35980);
var inst_35984 = inst_35983;
var state_36038__$1 = state_36038;
if(cljs.core.truth_(inst_35984)){
var statearr_36086_36151 = state_36038__$1;
(statearr_36086_36151[(1)] = (27));

} else {
var statearr_36087_36152 = state_36038__$1;
(statearr_36087_36152[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (34))){
var state_36038__$1 = state_36038;
var statearr_36088_36153 = state_36038__$1;
(statearr_36088_36153[(2)] = null);

(statearr_36088_36153[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (17))){
var state_36038__$1 = state_36038;
var statearr_36089_36154 = state_36038__$1;
(statearr_36089_36154[(2)] = null);

(statearr_36089_36154[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (3))){
var inst_36036 = (state_36038[(2)]);
var state_36038__$1 = state_36038;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36038__$1,inst_36036);
} else {
if((state_val_36039 === (12))){
var inst_35965 = (state_36038[(2)]);
var state_36038__$1 = state_36038;
var statearr_36090_36155 = state_36038__$1;
(statearr_36090_36155[(2)] = inst_35965);

(statearr_36090_36155[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (2))){
var state_36038__$1 = state_36038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36038__$1,(4),ch);
} else {
if((state_val_36039 === (23))){
var state_36038__$1 = state_36038;
var statearr_36091_36156 = state_36038__$1;
(statearr_36091_36156[(2)] = null);

(statearr_36091_36156[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (35))){
var inst_36020 = (state_36038[(2)]);
var state_36038__$1 = state_36038;
var statearr_36092_36157 = state_36038__$1;
(statearr_36092_36157[(2)] = inst_36020);

(statearr_36092_36157[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (19))){
var inst_35937 = (state_36038[(7)]);
var inst_35941 = cljs.core.chunk_first.call(null,inst_35937);
var inst_35942 = cljs.core.chunk_rest.call(null,inst_35937);
var inst_35943 = cljs.core.count.call(null,inst_35941);
var inst_35915 = inst_35942;
var inst_35916 = inst_35941;
var inst_35917 = inst_35943;
var inst_35918 = (0);
var state_36038__$1 = (function (){var statearr_36093 = state_36038;
(statearr_36093[(14)] = inst_35917);

(statearr_36093[(15)] = inst_35916);

(statearr_36093[(16)] = inst_35918);

(statearr_36093[(17)] = inst_35915);

return statearr_36093;
})();
var statearr_36094_36158 = state_36038__$1;
(statearr_36094_36158[(2)] = null);

(statearr_36094_36158[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (11))){
var inst_35937 = (state_36038[(7)]);
var inst_35915 = (state_36038[(17)]);
var inst_35937__$1 = cljs.core.seq.call(null,inst_35915);
var state_36038__$1 = (function (){var statearr_36095 = state_36038;
(statearr_36095[(7)] = inst_35937__$1);

return statearr_36095;
})();
if(inst_35937__$1){
var statearr_36096_36159 = state_36038__$1;
(statearr_36096_36159[(1)] = (16));

} else {
var statearr_36097_36160 = state_36038__$1;
(statearr_36097_36160[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (9))){
var inst_35967 = (state_36038[(2)]);
var state_36038__$1 = state_36038;
var statearr_36098_36161 = state_36038__$1;
(statearr_36098_36161[(2)] = inst_35967);

(statearr_36098_36161[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (5))){
var inst_35913 = cljs.core.deref.call(null,cs);
var inst_35914 = cljs.core.seq.call(null,inst_35913);
var inst_35915 = inst_35914;
var inst_35916 = null;
var inst_35917 = (0);
var inst_35918 = (0);
var state_36038__$1 = (function (){var statearr_36099 = state_36038;
(statearr_36099[(14)] = inst_35917);

(statearr_36099[(15)] = inst_35916);

(statearr_36099[(16)] = inst_35918);

(statearr_36099[(17)] = inst_35915);

return statearr_36099;
})();
var statearr_36100_36162 = state_36038__$1;
(statearr_36100_36162[(2)] = null);

(statearr_36100_36162[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (14))){
var state_36038__$1 = state_36038;
var statearr_36101_36163 = state_36038__$1;
(statearr_36101_36163[(2)] = null);

(statearr_36101_36163[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (45))){
var inst_36028 = (state_36038[(2)]);
var state_36038__$1 = state_36038;
var statearr_36102_36164 = state_36038__$1;
(statearr_36102_36164[(2)] = inst_36028);

(statearr_36102_36164[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (26))){
var inst_35970 = (state_36038[(29)]);
var inst_36024 = (state_36038[(2)]);
var inst_36025 = cljs.core.seq.call(null,inst_35970);
var state_36038__$1 = (function (){var statearr_36103 = state_36038;
(statearr_36103[(31)] = inst_36024);

return statearr_36103;
})();
if(inst_36025){
var statearr_36104_36165 = state_36038__$1;
(statearr_36104_36165[(1)] = (42));

} else {
var statearr_36105_36166 = state_36038__$1;
(statearr_36105_36166[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (16))){
var inst_35937 = (state_36038[(7)]);
var inst_35939 = cljs.core.chunked_seq_QMARK_.call(null,inst_35937);
var state_36038__$1 = state_36038;
if(inst_35939){
var statearr_36106_36167 = state_36038__$1;
(statearr_36106_36167[(1)] = (19));

} else {
var statearr_36107_36168 = state_36038__$1;
(statearr_36107_36168[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (38))){
var inst_36017 = (state_36038[(2)]);
var state_36038__$1 = state_36038;
var statearr_36108_36169 = state_36038__$1;
(statearr_36108_36169[(2)] = inst_36017);

(statearr_36108_36169[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (30))){
var state_36038__$1 = state_36038;
var statearr_36109_36170 = state_36038__$1;
(statearr_36109_36170[(2)] = null);

(statearr_36109_36170[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (10))){
var inst_35916 = (state_36038[(15)]);
var inst_35918 = (state_36038[(16)]);
var inst_35926 = cljs.core._nth.call(null,inst_35916,inst_35918);
var inst_35927 = cljs.core.nth.call(null,inst_35926,(0),null);
var inst_35928 = cljs.core.nth.call(null,inst_35926,(1),null);
var state_36038__$1 = (function (){var statearr_36110 = state_36038;
(statearr_36110[(26)] = inst_35927);

return statearr_36110;
})();
if(cljs.core.truth_(inst_35928)){
var statearr_36111_36171 = state_36038__$1;
(statearr_36111_36171[(1)] = (13));

} else {
var statearr_36112_36172 = state_36038__$1;
(statearr_36112_36172[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (18))){
var inst_35963 = (state_36038[(2)]);
var state_36038__$1 = state_36038;
var statearr_36113_36173 = state_36038__$1;
(statearr_36113_36173[(2)] = inst_35963);

(statearr_36113_36173[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (42))){
var state_36038__$1 = state_36038;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36038__$1,(45),dchan);
} else {
if((state_val_36039 === (37))){
var inst_35906 = (state_36038[(10)]);
var inst_35997 = (state_36038[(25)]);
var inst_36006 = (state_36038[(23)]);
var inst_36006__$1 = cljs.core.first.call(null,inst_35997);
var inst_36007 = cljs.core.async.put_BANG_.call(null,inst_36006__$1,inst_35906,done);
var state_36038__$1 = (function (){var statearr_36114 = state_36038;
(statearr_36114[(23)] = inst_36006__$1);

return statearr_36114;
})();
if(cljs.core.truth_(inst_36007)){
var statearr_36115_36174 = state_36038__$1;
(statearr_36115_36174[(1)] = (39));

} else {
var statearr_36116_36175 = state_36038__$1;
(statearr_36116_36175[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36039 === (8))){
var inst_35917 = (state_36038[(14)]);
var inst_35918 = (state_36038[(16)]);
var inst_35920 = (inst_35918 < inst_35917);
var inst_35921 = inst_35920;
var state_36038__$1 = state_36038;
if(cljs.core.truth_(inst_35921)){
var statearr_36117_36176 = state_36038__$1;
(statearr_36117_36176[(1)] = (10));

} else {
var statearr_36118_36177 = state_36038__$1;
(statearr_36118_36177[(1)] = (11));

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
});})(c__35318__auto___36123,cs,m,dchan,dctr,done))
;
return ((function (switch__35230__auto__,c__35318__auto___36123,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__35231__auto__ = null;
var cljs$core$async$mult_$_state_machine__35231__auto____0 = (function (){
var statearr_36119 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36119[(0)] = cljs$core$async$mult_$_state_machine__35231__auto__);

(statearr_36119[(1)] = (1));

return statearr_36119;
});
var cljs$core$async$mult_$_state_machine__35231__auto____1 = (function (state_36038){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_36038);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e36120){if((e36120 instanceof Object)){
var ex__35234__auto__ = e36120;
var statearr_36121_36178 = state_36038;
(statearr_36121_36178[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36038);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36120;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36179 = state_36038;
state_36038 = G__36179;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__35231__auto__ = function(state_36038){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__35231__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__35231__auto____1.call(this,state_36038);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__35231__auto____0;
cljs$core$async$mult_$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__35231__auto____1;
return cljs$core$async$mult_$_state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto___36123,cs,m,dchan,dctr,done))
})();
var state__35320__auto__ = (function (){var statearr_36122 = f__35319__auto__.call(null);
(statearr_36122[(6)] = c__35318__auto___36123);

return statearr_36122;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto___36123,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__36181 = arguments.length;
switch (G__36181) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m);
} else {
var m__4212__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,state_map);
} else {
var m__4212__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if(((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4211__auto__ = (((m == null))?null:m);
var m__4212__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,m,mode);
} else {
var m__4212__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4502__auto__ = [];
var len__4499__auto___36193 = arguments.length;
var i__4500__auto___36194 = (0);
while(true){
if((i__4500__auto___36194 < len__4499__auto___36193)){
args__4502__auto__.push((arguments[i__4500__auto___36194]));

var G__36195 = (i__4500__auto___36194 + (1));
i__4500__auto___36194 = G__36195;
continue;
} else {
}
break;
}

var argseq__4503__auto__ = ((((3) < args__4502__auto__.length))?(new cljs.core.IndexedSeq(args__4502__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4503__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__36187){
var map__36188 = p__36187;
var map__36188__$1 = ((((!((map__36188 == null)))?(((((map__36188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36188):map__36188);
var opts = map__36188__$1;
var statearr_36190_36196 = state;
(statearr_36190_36196[(1)] = cont_block);


var temp__4657__auto__ = cljs.core.async.do_alts.call(null,((function (map__36188,map__36188__$1,opts){
return (function (val){
var statearr_36191_36197 = state;
(statearr_36191_36197[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__36188,map__36188__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4657__auto__)){
var cb = temp__4657__auto__;
var statearr_36192_36198 = state;
(statearr_36192_36198[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

/** @this {Function} */
cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq36183){
var G__36184 = cljs.core.first.call(null,seq36183);
var seq36183__$1 = cljs.core.next.call(null,seq36183);
var G__36185 = cljs.core.first.call(null,seq36183__$1);
var seq36183__$2 = cljs.core.next.call(null,seq36183__$1);
var G__36186 = cljs.core.first.call(null,seq36183__$2);
var seq36183__$3 = cljs.core.next.call(null,seq36183__$2);
var self__4486__auto__ = this;
return self__4486__auto__.cljs$core$IFn$_invoke$arity$variadic(G__36184,G__36185,G__36186,seq36183__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,((((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos)))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async36199 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36199 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta36200){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta36200 = meta36200;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36199.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36201,meta36200__$1){
var self__ = this;
var _36201__$1 = this;
return (new cljs.core.async.t_cljs$core$async36199(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta36200__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36199.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_36201){
var self__ = this;
var _36201__$1 = this;
return self__.meta36200;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36199.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36199.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36199.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36199.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36199.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36199.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36199.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36199.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36199.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta36200","meta36200",-1891236433,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async36199.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36199.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36199";

cljs.core.async.t_cljs$core$async36199.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async36199");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36199.
 */
cljs.core.async.__GT_t_cljs$core$async36199 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async36199(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta36200){
return (new cljs.core.async.t_cljs$core$async36199(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta36200));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async36199(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35318__auto___36363 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto___36363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto___36363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_36303){
var state_val_36304 = (state_36303[(1)]);
if((state_val_36304 === (7))){
var inst_36218 = (state_36303[(2)]);
var state_36303__$1 = state_36303;
var statearr_36305_36364 = state_36303__$1;
(statearr_36305_36364[(2)] = inst_36218);

(statearr_36305_36364[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (20))){
var inst_36230 = (state_36303[(7)]);
var state_36303__$1 = state_36303;
var statearr_36306_36365 = state_36303__$1;
(statearr_36306_36365[(2)] = inst_36230);

(statearr_36306_36365[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (27))){
var state_36303__$1 = state_36303;
var statearr_36307_36366 = state_36303__$1;
(statearr_36307_36366[(2)] = null);

(statearr_36307_36366[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (1))){
var inst_36205 = (state_36303[(8)]);
var inst_36205__$1 = calc_state.call(null);
var inst_36207 = (inst_36205__$1 == null);
var inst_36208 = cljs.core.not.call(null,inst_36207);
var state_36303__$1 = (function (){var statearr_36308 = state_36303;
(statearr_36308[(8)] = inst_36205__$1);

return statearr_36308;
})();
if(inst_36208){
var statearr_36309_36367 = state_36303__$1;
(statearr_36309_36367[(1)] = (2));

} else {
var statearr_36310_36368 = state_36303__$1;
(statearr_36310_36368[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (24))){
var inst_36263 = (state_36303[(9)]);
var inst_36254 = (state_36303[(10)]);
var inst_36277 = (state_36303[(11)]);
var inst_36277__$1 = inst_36254.call(null,inst_36263);
var state_36303__$1 = (function (){var statearr_36311 = state_36303;
(statearr_36311[(11)] = inst_36277__$1);

return statearr_36311;
})();
if(cljs.core.truth_(inst_36277__$1)){
var statearr_36312_36369 = state_36303__$1;
(statearr_36312_36369[(1)] = (29));

} else {
var statearr_36313_36370 = state_36303__$1;
(statearr_36313_36370[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (4))){
var inst_36221 = (state_36303[(2)]);
var state_36303__$1 = state_36303;
if(cljs.core.truth_(inst_36221)){
var statearr_36314_36371 = state_36303__$1;
(statearr_36314_36371[(1)] = (8));

} else {
var statearr_36315_36372 = state_36303__$1;
(statearr_36315_36372[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (15))){
var inst_36248 = (state_36303[(2)]);
var state_36303__$1 = state_36303;
if(cljs.core.truth_(inst_36248)){
var statearr_36316_36373 = state_36303__$1;
(statearr_36316_36373[(1)] = (19));

} else {
var statearr_36317_36374 = state_36303__$1;
(statearr_36317_36374[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (21))){
var inst_36253 = (state_36303[(12)]);
var inst_36253__$1 = (state_36303[(2)]);
var inst_36254 = cljs.core.get.call(null,inst_36253__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36255 = cljs.core.get.call(null,inst_36253__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36256 = cljs.core.get.call(null,inst_36253__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_36303__$1 = (function (){var statearr_36318 = state_36303;
(statearr_36318[(10)] = inst_36254);

(statearr_36318[(13)] = inst_36255);

(statearr_36318[(12)] = inst_36253__$1);

return statearr_36318;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_36303__$1,(22),inst_36256);
} else {
if((state_val_36304 === (31))){
var inst_36285 = (state_36303[(2)]);
var state_36303__$1 = state_36303;
if(cljs.core.truth_(inst_36285)){
var statearr_36319_36375 = state_36303__$1;
(statearr_36319_36375[(1)] = (32));

} else {
var statearr_36320_36376 = state_36303__$1;
(statearr_36320_36376[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (32))){
var inst_36262 = (state_36303[(14)]);
var state_36303__$1 = state_36303;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36303__$1,(35),out,inst_36262);
} else {
if((state_val_36304 === (33))){
var inst_36253 = (state_36303[(12)]);
var inst_36230 = inst_36253;
var state_36303__$1 = (function (){var statearr_36321 = state_36303;
(statearr_36321[(7)] = inst_36230);

return statearr_36321;
})();
var statearr_36322_36377 = state_36303__$1;
(statearr_36322_36377[(2)] = null);

(statearr_36322_36377[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (13))){
var inst_36230 = (state_36303[(7)]);
var inst_36237 = inst_36230.cljs$lang$protocol_mask$partition0$;
var inst_36238 = (inst_36237 & (64));
var inst_36239 = inst_36230.cljs$core$ISeq$;
var inst_36240 = (cljs.core.PROTOCOL_SENTINEL === inst_36239);
var inst_36241 = ((inst_36238) || (inst_36240));
var state_36303__$1 = state_36303;
if(cljs.core.truth_(inst_36241)){
var statearr_36323_36378 = state_36303__$1;
(statearr_36323_36378[(1)] = (16));

} else {
var statearr_36324_36379 = state_36303__$1;
(statearr_36324_36379[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (22))){
var inst_36263 = (state_36303[(9)]);
var inst_36262 = (state_36303[(14)]);
var inst_36261 = (state_36303[(2)]);
var inst_36262__$1 = cljs.core.nth.call(null,inst_36261,(0),null);
var inst_36263__$1 = cljs.core.nth.call(null,inst_36261,(1),null);
var inst_36264 = (inst_36262__$1 == null);
var inst_36265 = cljs.core._EQ_.call(null,inst_36263__$1,change);
var inst_36266 = ((inst_36264) || (inst_36265));
var state_36303__$1 = (function (){var statearr_36325 = state_36303;
(statearr_36325[(9)] = inst_36263__$1);

(statearr_36325[(14)] = inst_36262__$1);

return statearr_36325;
})();
if(cljs.core.truth_(inst_36266)){
var statearr_36326_36380 = state_36303__$1;
(statearr_36326_36380[(1)] = (23));

} else {
var statearr_36327_36381 = state_36303__$1;
(statearr_36327_36381[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (36))){
var inst_36253 = (state_36303[(12)]);
var inst_36230 = inst_36253;
var state_36303__$1 = (function (){var statearr_36328 = state_36303;
(statearr_36328[(7)] = inst_36230);

return statearr_36328;
})();
var statearr_36329_36382 = state_36303__$1;
(statearr_36329_36382[(2)] = null);

(statearr_36329_36382[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (29))){
var inst_36277 = (state_36303[(11)]);
var state_36303__$1 = state_36303;
var statearr_36330_36383 = state_36303__$1;
(statearr_36330_36383[(2)] = inst_36277);

(statearr_36330_36383[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (6))){
var state_36303__$1 = state_36303;
var statearr_36331_36384 = state_36303__$1;
(statearr_36331_36384[(2)] = false);

(statearr_36331_36384[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (28))){
var inst_36273 = (state_36303[(2)]);
var inst_36274 = calc_state.call(null);
var inst_36230 = inst_36274;
var state_36303__$1 = (function (){var statearr_36332 = state_36303;
(statearr_36332[(15)] = inst_36273);

(statearr_36332[(7)] = inst_36230);

return statearr_36332;
})();
var statearr_36333_36385 = state_36303__$1;
(statearr_36333_36385[(2)] = null);

(statearr_36333_36385[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (25))){
var inst_36299 = (state_36303[(2)]);
var state_36303__$1 = state_36303;
var statearr_36334_36386 = state_36303__$1;
(statearr_36334_36386[(2)] = inst_36299);

(statearr_36334_36386[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (34))){
var inst_36297 = (state_36303[(2)]);
var state_36303__$1 = state_36303;
var statearr_36335_36387 = state_36303__$1;
(statearr_36335_36387[(2)] = inst_36297);

(statearr_36335_36387[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (17))){
var state_36303__$1 = state_36303;
var statearr_36336_36388 = state_36303__$1;
(statearr_36336_36388[(2)] = false);

(statearr_36336_36388[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (3))){
var state_36303__$1 = state_36303;
var statearr_36337_36389 = state_36303__$1;
(statearr_36337_36389[(2)] = false);

(statearr_36337_36389[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (12))){
var inst_36301 = (state_36303[(2)]);
var state_36303__$1 = state_36303;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36303__$1,inst_36301);
} else {
if((state_val_36304 === (2))){
var inst_36205 = (state_36303[(8)]);
var inst_36210 = inst_36205.cljs$lang$protocol_mask$partition0$;
var inst_36211 = (inst_36210 & (64));
var inst_36212 = inst_36205.cljs$core$ISeq$;
var inst_36213 = (cljs.core.PROTOCOL_SENTINEL === inst_36212);
var inst_36214 = ((inst_36211) || (inst_36213));
var state_36303__$1 = state_36303;
if(cljs.core.truth_(inst_36214)){
var statearr_36338_36390 = state_36303__$1;
(statearr_36338_36390[(1)] = (5));

} else {
var statearr_36339_36391 = state_36303__$1;
(statearr_36339_36391[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (23))){
var inst_36262 = (state_36303[(14)]);
var inst_36268 = (inst_36262 == null);
var state_36303__$1 = state_36303;
if(cljs.core.truth_(inst_36268)){
var statearr_36340_36392 = state_36303__$1;
(statearr_36340_36392[(1)] = (26));

} else {
var statearr_36341_36393 = state_36303__$1;
(statearr_36341_36393[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (35))){
var inst_36288 = (state_36303[(2)]);
var state_36303__$1 = state_36303;
if(cljs.core.truth_(inst_36288)){
var statearr_36342_36394 = state_36303__$1;
(statearr_36342_36394[(1)] = (36));

} else {
var statearr_36343_36395 = state_36303__$1;
(statearr_36343_36395[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (19))){
var inst_36230 = (state_36303[(7)]);
var inst_36250 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36230);
var state_36303__$1 = state_36303;
var statearr_36344_36396 = state_36303__$1;
(statearr_36344_36396[(2)] = inst_36250);

(statearr_36344_36396[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (11))){
var inst_36230 = (state_36303[(7)]);
var inst_36234 = (inst_36230 == null);
var inst_36235 = cljs.core.not.call(null,inst_36234);
var state_36303__$1 = state_36303;
if(inst_36235){
var statearr_36345_36397 = state_36303__$1;
(statearr_36345_36397[(1)] = (13));

} else {
var statearr_36346_36398 = state_36303__$1;
(statearr_36346_36398[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (9))){
var inst_36205 = (state_36303[(8)]);
var state_36303__$1 = state_36303;
var statearr_36347_36399 = state_36303__$1;
(statearr_36347_36399[(2)] = inst_36205);

(statearr_36347_36399[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (5))){
var state_36303__$1 = state_36303;
var statearr_36348_36400 = state_36303__$1;
(statearr_36348_36400[(2)] = true);

(statearr_36348_36400[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (14))){
var state_36303__$1 = state_36303;
var statearr_36349_36401 = state_36303__$1;
(statearr_36349_36401[(2)] = false);

(statearr_36349_36401[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (26))){
var inst_36263 = (state_36303[(9)]);
var inst_36270 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_36263);
var state_36303__$1 = state_36303;
var statearr_36350_36402 = state_36303__$1;
(statearr_36350_36402[(2)] = inst_36270);

(statearr_36350_36402[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (16))){
var state_36303__$1 = state_36303;
var statearr_36351_36403 = state_36303__$1;
(statearr_36351_36403[(2)] = true);

(statearr_36351_36403[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (38))){
var inst_36293 = (state_36303[(2)]);
var state_36303__$1 = state_36303;
var statearr_36352_36404 = state_36303__$1;
(statearr_36352_36404[(2)] = inst_36293);

(statearr_36352_36404[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (30))){
var inst_36263 = (state_36303[(9)]);
var inst_36254 = (state_36303[(10)]);
var inst_36255 = (state_36303[(13)]);
var inst_36280 = cljs.core.empty_QMARK_.call(null,inst_36254);
var inst_36281 = inst_36255.call(null,inst_36263);
var inst_36282 = cljs.core.not.call(null,inst_36281);
var inst_36283 = ((inst_36280) && (inst_36282));
var state_36303__$1 = state_36303;
var statearr_36353_36405 = state_36303__$1;
(statearr_36353_36405[(2)] = inst_36283);

(statearr_36353_36405[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (10))){
var inst_36205 = (state_36303[(8)]);
var inst_36226 = (state_36303[(2)]);
var inst_36227 = cljs.core.get.call(null,inst_36226,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_36228 = cljs.core.get.call(null,inst_36226,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_36229 = cljs.core.get.call(null,inst_36226,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_36230 = inst_36205;
var state_36303__$1 = (function (){var statearr_36354 = state_36303;
(statearr_36354[(16)] = inst_36227);

(statearr_36354[(17)] = inst_36229);

(statearr_36354[(18)] = inst_36228);

(statearr_36354[(7)] = inst_36230);

return statearr_36354;
})();
var statearr_36355_36406 = state_36303__$1;
(statearr_36355_36406[(2)] = null);

(statearr_36355_36406[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (18))){
var inst_36245 = (state_36303[(2)]);
var state_36303__$1 = state_36303;
var statearr_36356_36407 = state_36303__$1;
(statearr_36356_36407[(2)] = inst_36245);

(statearr_36356_36407[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (37))){
var state_36303__$1 = state_36303;
var statearr_36357_36408 = state_36303__$1;
(statearr_36357_36408[(2)] = null);

(statearr_36357_36408[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36304 === (8))){
var inst_36205 = (state_36303[(8)]);
var inst_36223 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36205);
var state_36303__$1 = state_36303;
var statearr_36358_36409 = state_36303__$1;
(statearr_36358_36409[(2)] = inst_36223);

(statearr_36358_36409[(1)] = (10));


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
});})(c__35318__auto___36363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__35230__auto__,c__35318__auto___36363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__35231__auto__ = null;
var cljs$core$async$mix_$_state_machine__35231__auto____0 = (function (){
var statearr_36359 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36359[(0)] = cljs$core$async$mix_$_state_machine__35231__auto__);

(statearr_36359[(1)] = (1));

return statearr_36359;
});
var cljs$core$async$mix_$_state_machine__35231__auto____1 = (function (state_36303){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_36303);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e36360){if((e36360 instanceof Object)){
var ex__35234__auto__ = e36360;
var statearr_36361_36410 = state_36303;
(statearr_36361_36410[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36303);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36360;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36411 = state_36303;
state_36303 = G__36411;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__35231__auto__ = function(state_36303){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__35231__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__35231__auto____1.call(this,state_36303);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__35231__auto____0;
cljs$core$async$mix_$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__35231__auto____1;
return cljs$core$async$mix_$_state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto___36363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__35320__auto__ = (function (){var statearr_36362 = f__35319__auto__.call(null);
(statearr_36362[(6)] = c__35318__auto___36363);

return statearr_36362;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto___36363,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__4212__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v,ch);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__36413 = arguments.length;
switch (G__36413) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if(((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4211__auto__ = (((p == null))?null:p);
var m__4212__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4211__auto__)]);
if(!((m__4212__auto__ == null))){
return m__4212__auto__.call(null,p,v);
} else {
var m__4212__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__4212__auto____$1 == null))){
return m__4212__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__36417 = arguments.length;
switch (G__36417) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__3922__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__3922__auto__)){
return or__3922__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3922__auto__,mults){
return (function (p1__36415_SHARP_){
if(cljs.core.truth_(p1__36415_SHARP_.call(null,topic))){
return p1__36415_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__36415_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3922__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async36418 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36418 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta36419){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta36419 = meta36419;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_36420,meta36419__$1){
var self__ = this;
var _36420__$1 = this;
return (new cljs.core.async.t_cljs$core$async36418(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta36419__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_36420){
var self__ = this;
var _36420__$1 = this;
return self__.meta36419;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4657__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4657__auto__)){
var m = temp__4657__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36418.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36418.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta36419","meta36419",1849312038,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async36418.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36418.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36418";

cljs.core.async.t_cljs$core$async36418.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async36418");
});})(mults,ensure_mult))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36418.
 */
cljs.core.async.__GT_t_cljs$core$async36418 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async36418(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36419){
return (new cljs.core.async.t_cljs$core$async36418(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta36419));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async36418(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__35318__auto___36538 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto___36538,mults,ensure_mult,p){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto___36538,mults,ensure_mult,p){
return (function (state_36492){
var state_val_36493 = (state_36492[(1)]);
if((state_val_36493 === (7))){
var inst_36488 = (state_36492[(2)]);
var state_36492__$1 = state_36492;
var statearr_36494_36539 = state_36492__$1;
(statearr_36494_36539[(2)] = inst_36488);

(statearr_36494_36539[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (20))){
var state_36492__$1 = state_36492;
var statearr_36495_36540 = state_36492__$1;
(statearr_36495_36540[(2)] = null);

(statearr_36495_36540[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (1))){
var state_36492__$1 = state_36492;
var statearr_36496_36541 = state_36492__$1;
(statearr_36496_36541[(2)] = null);

(statearr_36496_36541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (24))){
var inst_36471 = (state_36492[(7)]);
var inst_36480 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_36471);
var state_36492__$1 = state_36492;
var statearr_36497_36542 = state_36492__$1;
(statearr_36497_36542[(2)] = inst_36480);

(statearr_36497_36542[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (4))){
var inst_36423 = (state_36492[(8)]);
var inst_36423__$1 = (state_36492[(2)]);
var inst_36424 = (inst_36423__$1 == null);
var state_36492__$1 = (function (){var statearr_36498 = state_36492;
(statearr_36498[(8)] = inst_36423__$1);

return statearr_36498;
})();
if(cljs.core.truth_(inst_36424)){
var statearr_36499_36543 = state_36492__$1;
(statearr_36499_36543[(1)] = (5));

} else {
var statearr_36500_36544 = state_36492__$1;
(statearr_36500_36544[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (15))){
var inst_36465 = (state_36492[(2)]);
var state_36492__$1 = state_36492;
var statearr_36501_36545 = state_36492__$1;
(statearr_36501_36545[(2)] = inst_36465);

(statearr_36501_36545[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (21))){
var inst_36485 = (state_36492[(2)]);
var state_36492__$1 = (function (){var statearr_36502 = state_36492;
(statearr_36502[(9)] = inst_36485);

return statearr_36502;
})();
var statearr_36503_36546 = state_36492__$1;
(statearr_36503_36546[(2)] = null);

(statearr_36503_36546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (13))){
var inst_36447 = (state_36492[(10)]);
var inst_36449 = cljs.core.chunked_seq_QMARK_.call(null,inst_36447);
var state_36492__$1 = state_36492;
if(inst_36449){
var statearr_36504_36547 = state_36492__$1;
(statearr_36504_36547[(1)] = (16));

} else {
var statearr_36505_36548 = state_36492__$1;
(statearr_36505_36548[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (22))){
var inst_36477 = (state_36492[(2)]);
var state_36492__$1 = state_36492;
if(cljs.core.truth_(inst_36477)){
var statearr_36506_36549 = state_36492__$1;
(statearr_36506_36549[(1)] = (23));

} else {
var statearr_36507_36550 = state_36492__$1;
(statearr_36507_36550[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (6))){
var inst_36471 = (state_36492[(7)]);
var inst_36423 = (state_36492[(8)]);
var inst_36473 = (state_36492[(11)]);
var inst_36471__$1 = topic_fn.call(null,inst_36423);
var inst_36472 = cljs.core.deref.call(null,mults);
var inst_36473__$1 = cljs.core.get.call(null,inst_36472,inst_36471__$1);
var state_36492__$1 = (function (){var statearr_36508 = state_36492;
(statearr_36508[(7)] = inst_36471__$1);

(statearr_36508[(11)] = inst_36473__$1);

return statearr_36508;
})();
if(cljs.core.truth_(inst_36473__$1)){
var statearr_36509_36551 = state_36492__$1;
(statearr_36509_36551[(1)] = (19));

} else {
var statearr_36510_36552 = state_36492__$1;
(statearr_36510_36552[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (25))){
var inst_36482 = (state_36492[(2)]);
var state_36492__$1 = state_36492;
var statearr_36511_36553 = state_36492__$1;
(statearr_36511_36553[(2)] = inst_36482);

(statearr_36511_36553[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (17))){
var inst_36447 = (state_36492[(10)]);
var inst_36456 = cljs.core.first.call(null,inst_36447);
var inst_36457 = cljs.core.async.muxch_STAR_.call(null,inst_36456);
var inst_36458 = cljs.core.async.close_BANG_.call(null,inst_36457);
var inst_36459 = cljs.core.next.call(null,inst_36447);
var inst_36433 = inst_36459;
var inst_36434 = null;
var inst_36435 = (0);
var inst_36436 = (0);
var state_36492__$1 = (function (){var statearr_36512 = state_36492;
(statearr_36512[(12)] = inst_36433);

(statearr_36512[(13)] = inst_36436);

(statearr_36512[(14)] = inst_36434);

(statearr_36512[(15)] = inst_36458);

(statearr_36512[(16)] = inst_36435);

return statearr_36512;
})();
var statearr_36513_36554 = state_36492__$1;
(statearr_36513_36554[(2)] = null);

(statearr_36513_36554[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (3))){
var inst_36490 = (state_36492[(2)]);
var state_36492__$1 = state_36492;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36492__$1,inst_36490);
} else {
if((state_val_36493 === (12))){
var inst_36467 = (state_36492[(2)]);
var state_36492__$1 = state_36492;
var statearr_36514_36555 = state_36492__$1;
(statearr_36514_36555[(2)] = inst_36467);

(statearr_36514_36555[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (2))){
var state_36492__$1 = state_36492;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36492__$1,(4),ch);
} else {
if((state_val_36493 === (23))){
var state_36492__$1 = state_36492;
var statearr_36515_36556 = state_36492__$1;
(statearr_36515_36556[(2)] = null);

(statearr_36515_36556[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (19))){
var inst_36423 = (state_36492[(8)]);
var inst_36473 = (state_36492[(11)]);
var inst_36475 = cljs.core.async.muxch_STAR_.call(null,inst_36473);
var state_36492__$1 = state_36492;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36492__$1,(22),inst_36475,inst_36423);
} else {
if((state_val_36493 === (11))){
var inst_36447 = (state_36492[(10)]);
var inst_36433 = (state_36492[(12)]);
var inst_36447__$1 = cljs.core.seq.call(null,inst_36433);
var state_36492__$1 = (function (){var statearr_36516 = state_36492;
(statearr_36516[(10)] = inst_36447__$1);

return statearr_36516;
})();
if(inst_36447__$1){
var statearr_36517_36557 = state_36492__$1;
(statearr_36517_36557[(1)] = (13));

} else {
var statearr_36518_36558 = state_36492__$1;
(statearr_36518_36558[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (9))){
var inst_36469 = (state_36492[(2)]);
var state_36492__$1 = state_36492;
var statearr_36519_36559 = state_36492__$1;
(statearr_36519_36559[(2)] = inst_36469);

(statearr_36519_36559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (5))){
var inst_36430 = cljs.core.deref.call(null,mults);
var inst_36431 = cljs.core.vals.call(null,inst_36430);
var inst_36432 = cljs.core.seq.call(null,inst_36431);
var inst_36433 = inst_36432;
var inst_36434 = null;
var inst_36435 = (0);
var inst_36436 = (0);
var state_36492__$1 = (function (){var statearr_36520 = state_36492;
(statearr_36520[(12)] = inst_36433);

(statearr_36520[(13)] = inst_36436);

(statearr_36520[(14)] = inst_36434);

(statearr_36520[(16)] = inst_36435);

return statearr_36520;
})();
var statearr_36521_36560 = state_36492__$1;
(statearr_36521_36560[(2)] = null);

(statearr_36521_36560[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (14))){
var state_36492__$1 = state_36492;
var statearr_36525_36561 = state_36492__$1;
(statearr_36525_36561[(2)] = null);

(statearr_36525_36561[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (16))){
var inst_36447 = (state_36492[(10)]);
var inst_36451 = cljs.core.chunk_first.call(null,inst_36447);
var inst_36452 = cljs.core.chunk_rest.call(null,inst_36447);
var inst_36453 = cljs.core.count.call(null,inst_36451);
var inst_36433 = inst_36452;
var inst_36434 = inst_36451;
var inst_36435 = inst_36453;
var inst_36436 = (0);
var state_36492__$1 = (function (){var statearr_36526 = state_36492;
(statearr_36526[(12)] = inst_36433);

(statearr_36526[(13)] = inst_36436);

(statearr_36526[(14)] = inst_36434);

(statearr_36526[(16)] = inst_36435);

return statearr_36526;
})();
var statearr_36527_36562 = state_36492__$1;
(statearr_36527_36562[(2)] = null);

(statearr_36527_36562[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (10))){
var inst_36433 = (state_36492[(12)]);
var inst_36436 = (state_36492[(13)]);
var inst_36434 = (state_36492[(14)]);
var inst_36435 = (state_36492[(16)]);
var inst_36441 = cljs.core._nth.call(null,inst_36434,inst_36436);
var inst_36442 = cljs.core.async.muxch_STAR_.call(null,inst_36441);
var inst_36443 = cljs.core.async.close_BANG_.call(null,inst_36442);
var inst_36444 = (inst_36436 + (1));
var tmp36522 = inst_36433;
var tmp36523 = inst_36434;
var tmp36524 = inst_36435;
var inst_36433__$1 = tmp36522;
var inst_36434__$1 = tmp36523;
var inst_36435__$1 = tmp36524;
var inst_36436__$1 = inst_36444;
var state_36492__$1 = (function (){var statearr_36528 = state_36492;
(statearr_36528[(12)] = inst_36433__$1);

(statearr_36528[(13)] = inst_36436__$1);

(statearr_36528[(17)] = inst_36443);

(statearr_36528[(14)] = inst_36434__$1);

(statearr_36528[(16)] = inst_36435__$1);

return statearr_36528;
})();
var statearr_36529_36563 = state_36492__$1;
(statearr_36529_36563[(2)] = null);

(statearr_36529_36563[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (18))){
var inst_36462 = (state_36492[(2)]);
var state_36492__$1 = state_36492;
var statearr_36530_36564 = state_36492__$1;
(statearr_36530_36564[(2)] = inst_36462);

(statearr_36530_36564[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36493 === (8))){
var inst_36436 = (state_36492[(13)]);
var inst_36435 = (state_36492[(16)]);
var inst_36438 = (inst_36436 < inst_36435);
var inst_36439 = inst_36438;
var state_36492__$1 = state_36492;
if(cljs.core.truth_(inst_36439)){
var statearr_36531_36565 = state_36492__$1;
(statearr_36531_36565[(1)] = (10));

} else {
var statearr_36532_36566 = state_36492__$1;
(statearr_36532_36566[(1)] = (11));

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
});})(c__35318__auto___36538,mults,ensure_mult,p))
;
return ((function (switch__35230__auto__,c__35318__auto___36538,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__35231__auto__ = null;
var cljs$core$async$state_machine__35231__auto____0 = (function (){
var statearr_36533 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36533[(0)] = cljs$core$async$state_machine__35231__auto__);

(statearr_36533[(1)] = (1));

return statearr_36533;
});
var cljs$core$async$state_machine__35231__auto____1 = (function (state_36492){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_36492);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e36534){if((e36534 instanceof Object)){
var ex__35234__auto__ = e36534;
var statearr_36535_36567 = state_36492;
(statearr_36535_36567[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36534;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36568 = state_36492;
state_36492 = G__36568;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
cljs$core$async$state_machine__35231__auto__ = function(state_36492){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35231__auto____1.call(this,state_36492);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35231__auto____0;
cljs$core$async$state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35231__auto____1;
return cljs$core$async$state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto___36538,mults,ensure_mult,p))
})();
var state__35320__auto__ = (function (){var statearr_36536 = f__35319__auto__.call(null);
(statearr_36536[(6)] = c__35318__auto___36538);

return statearr_36536;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto___36538,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__36570 = arguments.length;
switch (G__36570) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__36573 = arguments.length;
switch (G__36573) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__36576 = arguments.length;
switch (G__36576) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__35318__auto___36643 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto___36643,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto___36643,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_36615){
var state_val_36616 = (state_36615[(1)]);
if((state_val_36616 === (7))){
var state_36615__$1 = state_36615;
var statearr_36617_36644 = state_36615__$1;
(statearr_36617_36644[(2)] = null);

(statearr_36617_36644[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36616 === (1))){
var state_36615__$1 = state_36615;
var statearr_36618_36645 = state_36615__$1;
(statearr_36618_36645[(2)] = null);

(statearr_36618_36645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36616 === (4))){
var inst_36579 = (state_36615[(7)]);
var inst_36581 = (inst_36579 < cnt);
var state_36615__$1 = state_36615;
if(cljs.core.truth_(inst_36581)){
var statearr_36619_36646 = state_36615__$1;
(statearr_36619_36646[(1)] = (6));

} else {
var statearr_36620_36647 = state_36615__$1;
(statearr_36620_36647[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36616 === (15))){
var inst_36611 = (state_36615[(2)]);
var state_36615__$1 = state_36615;
var statearr_36621_36648 = state_36615__$1;
(statearr_36621_36648[(2)] = inst_36611);

(statearr_36621_36648[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36616 === (13))){
var inst_36604 = cljs.core.async.close_BANG_.call(null,out);
var state_36615__$1 = state_36615;
var statearr_36622_36649 = state_36615__$1;
(statearr_36622_36649[(2)] = inst_36604);

(statearr_36622_36649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36616 === (6))){
var state_36615__$1 = state_36615;
var statearr_36623_36650 = state_36615__$1;
(statearr_36623_36650[(2)] = null);

(statearr_36623_36650[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36616 === (3))){
var inst_36613 = (state_36615[(2)]);
var state_36615__$1 = state_36615;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36615__$1,inst_36613);
} else {
if((state_val_36616 === (12))){
var inst_36601 = (state_36615[(8)]);
var inst_36601__$1 = (state_36615[(2)]);
var inst_36602 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_36601__$1);
var state_36615__$1 = (function (){var statearr_36624 = state_36615;
(statearr_36624[(8)] = inst_36601__$1);

return statearr_36624;
})();
if(cljs.core.truth_(inst_36602)){
var statearr_36625_36651 = state_36615__$1;
(statearr_36625_36651[(1)] = (13));

} else {
var statearr_36626_36652 = state_36615__$1;
(statearr_36626_36652[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36616 === (2))){
var inst_36578 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_36579 = (0);
var state_36615__$1 = (function (){var statearr_36627 = state_36615;
(statearr_36627[(7)] = inst_36579);

(statearr_36627[(9)] = inst_36578);

return statearr_36627;
})();
var statearr_36628_36653 = state_36615__$1;
(statearr_36628_36653[(2)] = null);

(statearr_36628_36653[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36616 === (11))){
var inst_36579 = (state_36615[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_36615,(10),Object,null,(9));
var inst_36588 = chs__$1.call(null,inst_36579);
var inst_36589 = done.call(null,inst_36579);
var inst_36590 = cljs.core.async.take_BANG_.call(null,inst_36588,inst_36589);
var state_36615__$1 = state_36615;
var statearr_36629_36654 = state_36615__$1;
(statearr_36629_36654[(2)] = inst_36590);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36615__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36616 === (9))){
var inst_36579 = (state_36615[(7)]);
var inst_36592 = (state_36615[(2)]);
var inst_36593 = (inst_36579 + (1));
var inst_36579__$1 = inst_36593;
var state_36615__$1 = (function (){var statearr_36630 = state_36615;
(statearr_36630[(10)] = inst_36592);

(statearr_36630[(7)] = inst_36579__$1);

return statearr_36630;
})();
var statearr_36631_36655 = state_36615__$1;
(statearr_36631_36655[(2)] = null);

(statearr_36631_36655[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36616 === (5))){
var inst_36599 = (state_36615[(2)]);
var state_36615__$1 = (function (){var statearr_36632 = state_36615;
(statearr_36632[(11)] = inst_36599);

return statearr_36632;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36615__$1,(12),dchan);
} else {
if((state_val_36616 === (14))){
var inst_36601 = (state_36615[(8)]);
var inst_36606 = cljs.core.apply.call(null,f,inst_36601);
var state_36615__$1 = state_36615;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36615__$1,(16),out,inst_36606);
} else {
if((state_val_36616 === (16))){
var inst_36608 = (state_36615[(2)]);
var state_36615__$1 = (function (){var statearr_36633 = state_36615;
(statearr_36633[(12)] = inst_36608);

return statearr_36633;
})();
var statearr_36634_36656 = state_36615__$1;
(statearr_36634_36656[(2)] = null);

(statearr_36634_36656[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36616 === (10))){
var inst_36583 = (state_36615[(2)]);
var inst_36584 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_36615__$1 = (function (){var statearr_36635 = state_36615;
(statearr_36635[(13)] = inst_36583);

return statearr_36635;
})();
var statearr_36636_36657 = state_36615__$1;
(statearr_36636_36657[(2)] = inst_36584);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36615__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36616 === (8))){
var inst_36597 = (state_36615[(2)]);
var state_36615__$1 = state_36615;
var statearr_36637_36658 = state_36615__$1;
(statearr_36637_36658[(2)] = inst_36597);

(statearr_36637_36658[(1)] = (5));


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
});})(c__35318__auto___36643,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__35230__auto__,c__35318__auto___36643,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__35231__auto__ = null;
var cljs$core$async$state_machine__35231__auto____0 = (function (){
var statearr_36638 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36638[(0)] = cljs$core$async$state_machine__35231__auto__);

(statearr_36638[(1)] = (1));

return statearr_36638;
});
var cljs$core$async$state_machine__35231__auto____1 = (function (state_36615){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_36615);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e36639){if((e36639 instanceof Object)){
var ex__35234__auto__ = e36639;
var statearr_36640_36659 = state_36615;
(statearr_36640_36659[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36615);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36639;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36660 = state_36615;
state_36615 = G__36660;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
cljs$core$async$state_machine__35231__auto__ = function(state_36615){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35231__auto____1.call(this,state_36615);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35231__auto____0;
cljs$core$async$state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35231__auto____1;
return cljs$core$async$state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto___36643,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__35320__auto__ = (function (){var statearr_36641 = f__35319__auto__.call(null);
(statearr_36641[(6)] = c__35318__auto___36643);

return statearr_36641;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto___36643,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__36663 = arguments.length;
switch (G__36663) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35318__auto___36717 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto___36717,out){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto___36717,out){
return (function (state_36695){
var state_val_36696 = (state_36695[(1)]);
if((state_val_36696 === (7))){
var inst_36674 = (state_36695[(7)]);
var inst_36675 = (state_36695[(8)]);
var inst_36674__$1 = (state_36695[(2)]);
var inst_36675__$1 = cljs.core.nth.call(null,inst_36674__$1,(0),null);
var inst_36676 = cljs.core.nth.call(null,inst_36674__$1,(1),null);
var inst_36677 = (inst_36675__$1 == null);
var state_36695__$1 = (function (){var statearr_36697 = state_36695;
(statearr_36697[(7)] = inst_36674__$1);

(statearr_36697[(9)] = inst_36676);

(statearr_36697[(8)] = inst_36675__$1);

return statearr_36697;
})();
if(cljs.core.truth_(inst_36677)){
var statearr_36698_36718 = state_36695__$1;
(statearr_36698_36718[(1)] = (8));

} else {
var statearr_36699_36719 = state_36695__$1;
(statearr_36699_36719[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (1))){
var inst_36664 = cljs.core.vec.call(null,chs);
var inst_36665 = inst_36664;
var state_36695__$1 = (function (){var statearr_36700 = state_36695;
(statearr_36700[(10)] = inst_36665);

return statearr_36700;
})();
var statearr_36701_36720 = state_36695__$1;
(statearr_36701_36720[(2)] = null);

(statearr_36701_36720[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (4))){
var inst_36665 = (state_36695[(10)]);
var state_36695__$1 = state_36695;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36695__$1,(7),inst_36665);
} else {
if((state_val_36696 === (6))){
var inst_36691 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
var statearr_36702_36721 = state_36695__$1;
(statearr_36702_36721[(2)] = inst_36691);

(statearr_36702_36721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (3))){
var inst_36693 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36695__$1,inst_36693);
} else {
if((state_val_36696 === (2))){
var inst_36665 = (state_36695[(10)]);
var inst_36667 = cljs.core.count.call(null,inst_36665);
var inst_36668 = (inst_36667 > (0));
var state_36695__$1 = state_36695;
if(cljs.core.truth_(inst_36668)){
var statearr_36704_36722 = state_36695__$1;
(statearr_36704_36722[(1)] = (4));

} else {
var statearr_36705_36723 = state_36695__$1;
(statearr_36705_36723[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (11))){
var inst_36665 = (state_36695[(10)]);
var inst_36684 = (state_36695[(2)]);
var tmp36703 = inst_36665;
var inst_36665__$1 = tmp36703;
var state_36695__$1 = (function (){var statearr_36706 = state_36695;
(statearr_36706[(11)] = inst_36684);

(statearr_36706[(10)] = inst_36665__$1);

return statearr_36706;
})();
var statearr_36707_36724 = state_36695__$1;
(statearr_36707_36724[(2)] = null);

(statearr_36707_36724[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (9))){
var inst_36675 = (state_36695[(8)]);
var state_36695__$1 = state_36695;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36695__$1,(11),out,inst_36675);
} else {
if((state_val_36696 === (5))){
var inst_36689 = cljs.core.async.close_BANG_.call(null,out);
var state_36695__$1 = state_36695;
var statearr_36708_36725 = state_36695__$1;
(statearr_36708_36725[(2)] = inst_36689);

(statearr_36708_36725[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (10))){
var inst_36687 = (state_36695[(2)]);
var state_36695__$1 = state_36695;
var statearr_36709_36726 = state_36695__$1;
(statearr_36709_36726[(2)] = inst_36687);

(statearr_36709_36726[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36696 === (8))){
var inst_36674 = (state_36695[(7)]);
var inst_36676 = (state_36695[(9)]);
var inst_36675 = (state_36695[(8)]);
var inst_36665 = (state_36695[(10)]);
var inst_36679 = (function (){var cs = inst_36665;
var vec__36670 = inst_36674;
var v = inst_36675;
var c = inst_36676;
return ((function (cs,vec__36670,v,c,inst_36674,inst_36676,inst_36675,inst_36665,state_val_36696,c__35318__auto___36717,out){
return (function (p1__36661_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__36661_SHARP_);
});
;})(cs,vec__36670,v,c,inst_36674,inst_36676,inst_36675,inst_36665,state_val_36696,c__35318__auto___36717,out))
})();
var inst_36680 = cljs.core.filterv.call(null,inst_36679,inst_36665);
var inst_36665__$1 = inst_36680;
var state_36695__$1 = (function (){var statearr_36710 = state_36695;
(statearr_36710[(10)] = inst_36665__$1);

return statearr_36710;
})();
var statearr_36711_36727 = state_36695__$1;
(statearr_36711_36727[(2)] = null);

(statearr_36711_36727[(1)] = (2));


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
});})(c__35318__auto___36717,out))
;
return ((function (switch__35230__auto__,c__35318__auto___36717,out){
return (function() {
var cljs$core$async$state_machine__35231__auto__ = null;
var cljs$core$async$state_machine__35231__auto____0 = (function (){
var statearr_36712 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36712[(0)] = cljs$core$async$state_machine__35231__auto__);

(statearr_36712[(1)] = (1));

return statearr_36712;
});
var cljs$core$async$state_machine__35231__auto____1 = (function (state_36695){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_36695);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e36713){if((e36713 instanceof Object)){
var ex__35234__auto__ = e36713;
var statearr_36714_36728 = state_36695;
(statearr_36714_36728[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36695);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36729 = state_36695;
state_36695 = G__36729;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
cljs$core$async$state_machine__35231__auto__ = function(state_36695){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35231__auto____1.call(this,state_36695);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35231__auto____0;
cljs$core$async$state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35231__auto____1;
return cljs$core$async$state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto___36717,out))
})();
var state__35320__auto__ = (function (){var statearr_36715 = f__35319__auto__.call(null);
(statearr_36715[(6)] = c__35318__auto___36717);

return statearr_36715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto___36717,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__36731 = arguments.length;
switch (G__36731) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35318__auto___36776 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto___36776,out){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto___36776,out){
return (function (state_36755){
var state_val_36756 = (state_36755[(1)]);
if((state_val_36756 === (7))){
var inst_36737 = (state_36755[(7)]);
var inst_36737__$1 = (state_36755[(2)]);
var inst_36738 = (inst_36737__$1 == null);
var inst_36739 = cljs.core.not.call(null,inst_36738);
var state_36755__$1 = (function (){var statearr_36757 = state_36755;
(statearr_36757[(7)] = inst_36737__$1);

return statearr_36757;
})();
if(inst_36739){
var statearr_36758_36777 = state_36755__$1;
(statearr_36758_36777[(1)] = (8));

} else {
var statearr_36759_36778 = state_36755__$1;
(statearr_36759_36778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36756 === (1))){
var inst_36732 = (0);
var state_36755__$1 = (function (){var statearr_36760 = state_36755;
(statearr_36760[(8)] = inst_36732);

return statearr_36760;
})();
var statearr_36761_36779 = state_36755__$1;
(statearr_36761_36779[(2)] = null);

(statearr_36761_36779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36756 === (4))){
var state_36755__$1 = state_36755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36755__$1,(7),ch);
} else {
if((state_val_36756 === (6))){
var inst_36750 = (state_36755[(2)]);
var state_36755__$1 = state_36755;
var statearr_36762_36780 = state_36755__$1;
(statearr_36762_36780[(2)] = inst_36750);

(statearr_36762_36780[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36756 === (3))){
var inst_36752 = (state_36755[(2)]);
var inst_36753 = cljs.core.async.close_BANG_.call(null,out);
var state_36755__$1 = (function (){var statearr_36763 = state_36755;
(statearr_36763[(9)] = inst_36752);

return statearr_36763;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36755__$1,inst_36753);
} else {
if((state_val_36756 === (2))){
var inst_36732 = (state_36755[(8)]);
var inst_36734 = (inst_36732 < n);
var state_36755__$1 = state_36755;
if(cljs.core.truth_(inst_36734)){
var statearr_36764_36781 = state_36755__$1;
(statearr_36764_36781[(1)] = (4));

} else {
var statearr_36765_36782 = state_36755__$1;
(statearr_36765_36782[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36756 === (11))){
var inst_36732 = (state_36755[(8)]);
var inst_36742 = (state_36755[(2)]);
var inst_36743 = (inst_36732 + (1));
var inst_36732__$1 = inst_36743;
var state_36755__$1 = (function (){var statearr_36766 = state_36755;
(statearr_36766[(8)] = inst_36732__$1);

(statearr_36766[(10)] = inst_36742);

return statearr_36766;
})();
var statearr_36767_36783 = state_36755__$1;
(statearr_36767_36783[(2)] = null);

(statearr_36767_36783[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36756 === (9))){
var state_36755__$1 = state_36755;
var statearr_36768_36784 = state_36755__$1;
(statearr_36768_36784[(2)] = null);

(statearr_36768_36784[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36756 === (5))){
var state_36755__$1 = state_36755;
var statearr_36769_36785 = state_36755__$1;
(statearr_36769_36785[(2)] = null);

(statearr_36769_36785[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36756 === (10))){
var inst_36747 = (state_36755[(2)]);
var state_36755__$1 = state_36755;
var statearr_36770_36786 = state_36755__$1;
(statearr_36770_36786[(2)] = inst_36747);

(statearr_36770_36786[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36756 === (8))){
var inst_36737 = (state_36755[(7)]);
var state_36755__$1 = state_36755;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36755__$1,(11),out,inst_36737);
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
});})(c__35318__auto___36776,out))
;
return ((function (switch__35230__auto__,c__35318__auto___36776,out){
return (function() {
var cljs$core$async$state_machine__35231__auto__ = null;
var cljs$core$async$state_machine__35231__auto____0 = (function (){
var statearr_36771 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36771[(0)] = cljs$core$async$state_machine__35231__auto__);

(statearr_36771[(1)] = (1));

return statearr_36771;
});
var cljs$core$async$state_machine__35231__auto____1 = (function (state_36755){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_36755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e36772){if((e36772 instanceof Object)){
var ex__35234__auto__ = e36772;
var statearr_36773_36787 = state_36755;
(statearr_36773_36787[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36772;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36788 = state_36755;
state_36755 = G__36788;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
cljs$core$async$state_machine__35231__auto__ = function(state_36755){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35231__auto____1.call(this,state_36755);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35231__auto____0;
cljs$core$async$state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35231__auto____1;
return cljs$core$async$state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto___36776,out))
})();
var state__35320__auto__ = (function (){var statearr_36774 = f__35319__auto__.call(null);
(statearr_36774[(6)] = c__35318__auto___36776);

return statearr_36774;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto___36776,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36790 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36790 = (function (f,ch,meta36791){
this.f = f;
this.ch = ch;
this.meta36791 = meta36791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36792,meta36791__$1){
var self__ = this;
var _36792__$1 = this;
return (new cljs.core.async.t_cljs$core$async36790(self__.f,self__.ch,meta36791__$1));
});

cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36792){
var self__ = this;
var _36792__$1 = this;
return self__.meta36791;
});

cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async36793 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36793 = (function (f,ch,meta36791,_,fn1,meta36794){
this.f = f;
this.ch = ch;
this.meta36791 = meta36791;
this._ = _;
this.fn1 = fn1;
this.meta36794 = meta36794;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36793.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_36795,meta36794__$1){
var self__ = this;
var _36795__$1 = this;
return (new cljs.core.async.t_cljs$core$async36793(self__.f,self__.ch,self__.meta36791,self__._,self__.fn1,meta36794__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async36793.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_36795){
var self__ = this;
var _36795__$1 = this;
return self__.meta36794;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36793.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36793.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36793.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async36793.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__36789_SHARP_){
return f1.call(null,(((p1__36789_SHARP_ == null))?null:self__.f.call(null,p1__36789_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async36793.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36791","meta36791",-56374917,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async36790","cljs.core.async/t_cljs$core$async36790",-666070068,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta36794","meta36794",-1896669313,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async36793.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36793.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36793";

cljs.core.async.t_cljs$core$async36793.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async36793");
});})(___$1))
;

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36793.
 */
cljs.core.async.__GT_t_cljs$core$async36793 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36793(f__$1,ch__$1,meta36791__$1,___$2,fn1__$1,meta36794){
return (new cljs.core.async.t_cljs$core$async36793(f__$1,ch__$1,meta36791__$1,___$2,fn1__$1,meta36794));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async36793(self__.f,self__.ch,self__.meta36791,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__3911__auto__ = ret;
if(cljs.core.truth_(and__3911__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__3911__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36790.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async36790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36791","meta36791",-56374917,null)], null);
});

cljs.core.async.t_cljs$core$async36790.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36790.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36790";

cljs.core.async.t_cljs$core$async36790.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async36790");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36790.
 */
cljs.core.async.__GT_t_cljs$core$async36790 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async36790(f__$1,ch__$1,meta36791){
return (new cljs.core.async.t_cljs$core$async36790(f__$1,ch__$1,meta36791));
});

}

return (new cljs.core.async.t_cljs$core$async36790(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async36796 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36796 = (function (f,ch,meta36797){
this.f = f;
this.ch = ch;
this.meta36797 = meta36797;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36796.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36798,meta36797__$1){
var self__ = this;
var _36798__$1 = this;
return (new cljs.core.async.t_cljs$core$async36796(self__.f,self__.ch,meta36797__$1));
});

cljs.core.async.t_cljs$core$async36796.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36798){
var self__ = this;
var _36798__$1 = this;
return self__.meta36797;
});

cljs.core.async.t_cljs$core$async36796.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36796.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36796.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36796.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36796.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36796.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async36796.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36797","meta36797",578988857,null)], null);
});

cljs.core.async.t_cljs$core$async36796.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36796.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36796";

cljs.core.async.t_cljs$core$async36796.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async36796");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36796.
 */
cljs.core.async.__GT_t_cljs$core$async36796 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async36796(f__$1,ch__$1,meta36797){
return (new cljs.core.async.t_cljs$core$async36796(f__$1,ch__$1,meta36797));
});

}

return (new cljs.core.async.t_cljs$core$async36796(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async36799 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async36799 = (function (p,ch,meta36800){
this.p = p;
this.ch = ch;
this.meta36800 = meta36800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async36799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_36801,meta36800__$1){
var self__ = this;
var _36801__$1 = this;
return (new cljs.core.async.t_cljs$core$async36799(self__.p,self__.ch,meta36800__$1));
});

cljs.core.async.t_cljs$core$async36799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_36801){
var self__ = this;
var _36801__$1 = this;
return self__.meta36800;
});

cljs.core.async.t_cljs$core$async36799.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36799.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36799.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async36799.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36799.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async36799.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async36799.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async36799.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta36800","meta36800",1976287611,null)], null);
});

cljs.core.async.t_cljs$core$async36799.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async36799.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async36799";

cljs.core.async.t_cljs$core$async36799.cljs$lang$ctorPrWriter = (function (this__4161__auto__,writer__4162__auto__,opt__4163__auto__){
return cljs.core._write.call(null,writer__4162__auto__,"cljs.core.async/t_cljs$core$async36799");
});

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async36799.
 */
cljs.core.async.__GT_t_cljs$core$async36799 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async36799(p__$1,ch__$1,meta36800){
return (new cljs.core.async.t_cljs$core$async36799(p__$1,ch__$1,meta36800));
});

}

return (new cljs.core.async.t_cljs$core$async36799(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__36803 = arguments.length;
switch (G__36803) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35318__auto___36843 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto___36843,out){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto___36843,out){
return (function (state_36824){
var state_val_36825 = (state_36824[(1)]);
if((state_val_36825 === (7))){
var inst_36820 = (state_36824[(2)]);
var state_36824__$1 = state_36824;
var statearr_36826_36844 = state_36824__$1;
(statearr_36826_36844[(2)] = inst_36820);

(statearr_36826_36844[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (1))){
var state_36824__$1 = state_36824;
var statearr_36827_36845 = state_36824__$1;
(statearr_36827_36845[(2)] = null);

(statearr_36827_36845[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (4))){
var inst_36806 = (state_36824[(7)]);
var inst_36806__$1 = (state_36824[(2)]);
var inst_36807 = (inst_36806__$1 == null);
var state_36824__$1 = (function (){var statearr_36828 = state_36824;
(statearr_36828[(7)] = inst_36806__$1);

return statearr_36828;
})();
if(cljs.core.truth_(inst_36807)){
var statearr_36829_36846 = state_36824__$1;
(statearr_36829_36846[(1)] = (5));

} else {
var statearr_36830_36847 = state_36824__$1;
(statearr_36830_36847[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (6))){
var inst_36806 = (state_36824[(7)]);
var inst_36811 = p.call(null,inst_36806);
var state_36824__$1 = state_36824;
if(cljs.core.truth_(inst_36811)){
var statearr_36831_36848 = state_36824__$1;
(statearr_36831_36848[(1)] = (8));

} else {
var statearr_36832_36849 = state_36824__$1;
(statearr_36832_36849[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (3))){
var inst_36822 = (state_36824[(2)]);
var state_36824__$1 = state_36824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36824__$1,inst_36822);
} else {
if((state_val_36825 === (2))){
var state_36824__$1 = state_36824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36824__$1,(4),ch);
} else {
if((state_val_36825 === (11))){
var inst_36814 = (state_36824[(2)]);
var state_36824__$1 = state_36824;
var statearr_36833_36850 = state_36824__$1;
(statearr_36833_36850[(2)] = inst_36814);

(statearr_36833_36850[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (9))){
var state_36824__$1 = state_36824;
var statearr_36834_36851 = state_36824__$1;
(statearr_36834_36851[(2)] = null);

(statearr_36834_36851[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (5))){
var inst_36809 = cljs.core.async.close_BANG_.call(null,out);
var state_36824__$1 = state_36824;
var statearr_36835_36852 = state_36824__$1;
(statearr_36835_36852[(2)] = inst_36809);

(statearr_36835_36852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (10))){
var inst_36817 = (state_36824[(2)]);
var state_36824__$1 = (function (){var statearr_36836 = state_36824;
(statearr_36836[(8)] = inst_36817);

return statearr_36836;
})();
var statearr_36837_36853 = state_36824__$1;
(statearr_36837_36853[(2)] = null);

(statearr_36837_36853[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36825 === (8))){
var inst_36806 = (state_36824[(7)]);
var state_36824__$1 = state_36824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36824__$1,(11),out,inst_36806);
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
});})(c__35318__auto___36843,out))
;
return ((function (switch__35230__auto__,c__35318__auto___36843,out){
return (function() {
var cljs$core$async$state_machine__35231__auto__ = null;
var cljs$core$async$state_machine__35231__auto____0 = (function (){
var statearr_36838 = [null,null,null,null,null,null,null,null,null];
(statearr_36838[(0)] = cljs$core$async$state_machine__35231__auto__);

(statearr_36838[(1)] = (1));

return statearr_36838;
});
var cljs$core$async$state_machine__35231__auto____1 = (function (state_36824){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_36824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e36839){if((e36839 instanceof Object)){
var ex__35234__auto__ = e36839;
var statearr_36840_36854 = state_36824;
(statearr_36840_36854[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36839;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36855 = state_36824;
state_36824 = G__36855;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
cljs$core$async$state_machine__35231__auto__ = function(state_36824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35231__auto____1.call(this,state_36824);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35231__auto____0;
cljs$core$async$state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35231__auto____1;
return cljs$core$async$state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto___36843,out))
})();
var state__35320__auto__ = (function (){var statearr_36841 = f__35319__auto__.call(null);
(statearr_36841[(6)] = c__35318__auto___36843);

return statearr_36841;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto___36843,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__36857 = arguments.length;
switch (G__36857) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__35318__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto__){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto__){
return (function (state_36920){
var state_val_36921 = (state_36920[(1)]);
if((state_val_36921 === (7))){
var inst_36916 = (state_36920[(2)]);
var state_36920__$1 = state_36920;
var statearr_36922_36960 = state_36920__$1;
(statearr_36922_36960[(2)] = inst_36916);

(statearr_36922_36960[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36921 === (20))){
var inst_36886 = (state_36920[(7)]);
var inst_36897 = (state_36920[(2)]);
var inst_36898 = cljs.core.next.call(null,inst_36886);
var inst_36872 = inst_36898;
var inst_36873 = null;
var inst_36874 = (0);
var inst_36875 = (0);
var state_36920__$1 = (function (){var statearr_36923 = state_36920;
(statearr_36923[(8)] = inst_36875);

(statearr_36923[(9)] = inst_36897);

(statearr_36923[(10)] = inst_36872);

(statearr_36923[(11)] = inst_36874);

(statearr_36923[(12)] = inst_36873);

return statearr_36923;
})();
var statearr_36924_36961 = state_36920__$1;
(statearr_36924_36961[(2)] = null);

(statearr_36924_36961[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36921 === (1))){
var state_36920__$1 = state_36920;
var statearr_36925_36962 = state_36920__$1;
(statearr_36925_36962[(2)] = null);

(statearr_36925_36962[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36921 === (4))){
var inst_36861 = (state_36920[(13)]);
var inst_36861__$1 = (state_36920[(2)]);
var inst_36862 = (inst_36861__$1 == null);
var state_36920__$1 = (function (){var statearr_36926 = state_36920;
(statearr_36926[(13)] = inst_36861__$1);

return statearr_36926;
})();
if(cljs.core.truth_(inst_36862)){
var statearr_36927_36963 = state_36920__$1;
(statearr_36927_36963[(1)] = (5));

} else {
var statearr_36928_36964 = state_36920__$1;
(statearr_36928_36964[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36921 === (15))){
var state_36920__$1 = state_36920;
var statearr_36932_36965 = state_36920__$1;
(statearr_36932_36965[(2)] = null);

(statearr_36932_36965[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36921 === (21))){
var state_36920__$1 = state_36920;
var statearr_36933_36966 = state_36920__$1;
(statearr_36933_36966[(2)] = null);

(statearr_36933_36966[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36921 === (13))){
var inst_36875 = (state_36920[(8)]);
var inst_36872 = (state_36920[(10)]);
var inst_36874 = (state_36920[(11)]);
var inst_36873 = (state_36920[(12)]);
var inst_36882 = (state_36920[(2)]);
var inst_36883 = (inst_36875 + (1));
var tmp36929 = inst_36872;
var tmp36930 = inst_36874;
var tmp36931 = inst_36873;
var inst_36872__$1 = tmp36929;
var inst_36873__$1 = tmp36931;
var inst_36874__$1 = tmp36930;
var inst_36875__$1 = inst_36883;
var state_36920__$1 = (function (){var statearr_36934 = state_36920;
(statearr_36934[(8)] = inst_36875__$1);

(statearr_36934[(10)] = inst_36872__$1);

(statearr_36934[(11)] = inst_36874__$1);

(statearr_36934[(12)] = inst_36873__$1);

(statearr_36934[(14)] = inst_36882);

return statearr_36934;
})();
var statearr_36935_36967 = state_36920__$1;
(statearr_36935_36967[(2)] = null);

(statearr_36935_36967[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36921 === (22))){
var state_36920__$1 = state_36920;
var statearr_36936_36968 = state_36920__$1;
(statearr_36936_36968[(2)] = null);

(statearr_36936_36968[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36921 === (6))){
var inst_36861 = (state_36920[(13)]);
var inst_36870 = f.call(null,inst_36861);
var inst_36871 = cljs.core.seq.call(null,inst_36870);
var inst_36872 = inst_36871;
var inst_36873 = null;
var inst_36874 = (0);
var inst_36875 = (0);
var state_36920__$1 = (function (){var statearr_36937 = state_36920;
(statearr_36937[(8)] = inst_36875);

(statearr_36937[(10)] = inst_36872);

(statearr_36937[(11)] = inst_36874);

(statearr_36937[(12)] = inst_36873);

return statearr_36937;
})();
var statearr_36938_36969 = state_36920__$1;
(statearr_36938_36969[(2)] = null);

(statearr_36938_36969[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36921 === (17))){
var inst_36886 = (state_36920[(7)]);
var inst_36890 = cljs.core.chunk_first.call(null,inst_36886);
var inst_36891 = cljs.core.chunk_rest.call(null,inst_36886);
var inst_36892 = cljs.core.count.call(null,inst_36890);
var inst_36872 = inst_36891;
var inst_36873 = inst_36890;
var inst_36874 = inst_36892;
var inst_36875 = (0);
var state_36920__$1 = (function (){var statearr_36939 = state_36920;
(statearr_36939[(8)] = inst_36875);

(statearr_36939[(10)] = inst_36872);

(statearr_36939[(11)] = inst_36874);

(statearr_36939[(12)] = inst_36873);

return statearr_36939;
})();
var statearr_36940_36970 = state_36920__$1;
(statearr_36940_36970[(2)] = null);

(statearr_36940_36970[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36921 === (3))){
var inst_36918 = (state_36920[(2)]);
var state_36920__$1 = state_36920;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36920__$1,inst_36918);
} else {
if((state_val_36921 === (12))){
var inst_36906 = (state_36920[(2)]);
var state_36920__$1 = state_36920;
var statearr_36941_36971 = state_36920__$1;
(statearr_36941_36971[(2)] = inst_36906);

(statearr_36941_36971[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36921 === (2))){
var state_36920__$1 = state_36920;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36920__$1,(4),in$);
} else {
if((state_val_36921 === (23))){
var inst_36914 = (state_36920[(2)]);
var state_36920__$1 = state_36920;
var statearr_36942_36972 = state_36920__$1;
(statearr_36942_36972[(2)] = inst_36914);

(statearr_36942_36972[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36921 === (19))){
var inst_36901 = (state_36920[(2)]);
var state_36920__$1 = state_36920;
var statearr_36943_36973 = state_36920__$1;
(statearr_36943_36973[(2)] = inst_36901);

(statearr_36943_36973[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36921 === (11))){
var inst_36872 = (state_36920[(10)]);
var inst_36886 = (state_36920[(7)]);
var inst_36886__$1 = cljs.core.seq.call(null,inst_36872);
var state_36920__$1 = (function (){var statearr_36944 = state_36920;
(statearr_36944[(7)] = inst_36886__$1);

return statearr_36944;
})();
if(inst_36886__$1){
var statearr_36945_36974 = state_36920__$1;
(statearr_36945_36974[(1)] = (14));

} else {
var statearr_36946_36975 = state_36920__$1;
(statearr_36946_36975[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36921 === (9))){
var inst_36908 = (state_36920[(2)]);
var inst_36909 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_36920__$1 = (function (){var statearr_36947 = state_36920;
(statearr_36947[(15)] = inst_36908);

return statearr_36947;
})();
if(cljs.core.truth_(inst_36909)){
var statearr_36948_36976 = state_36920__$1;
(statearr_36948_36976[(1)] = (21));

} else {
var statearr_36949_36977 = state_36920__$1;
(statearr_36949_36977[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36921 === (5))){
var inst_36864 = cljs.core.async.close_BANG_.call(null,out);
var state_36920__$1 = state_36920;
var statearr_36950_36978 = state_36920__$1;
(statearr_36950_36978[(2)] = inst_36864);

(statearr_36950_36978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36921 === (14))){
var inst_36886 = (state_36920[(7)]);
var inst_36888 = cljs.core.chunked_seq_QMARK_.call(null,inst_36886);
var state_36920__$1 = state_36920;
if(inst_36888){
var statearr_36951_36979 = state_36920__$1;
(statearr_36951_36979[(1)] = (17));

} else {
var statearr_36952_36980 = state_36920__$1;
(statearr_36952_36980[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36921 === (16))){
var inst_36904 = (state_36920[(2)]);
var state_36920__$1 = state_36920;
var statearr_36953_36981 = state_36920__$1;
(statearr_36953_36981[(2)] = inst_36904);

(statearr_36953_36981[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36921 === (10))){
var inst_36875 = (state_36920[(8)]);
var inst_36873 = (state_36920[(12)]);
var inst_36880 = cljs.core._nth.call(null,inst_36873,inst_36875);
var state_36920__$1 = state_36920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36920__$1,(13),out,inst_36880);
} else {
if((state_val_36921 === (18))){
var inst_36886 = (state_36920[(7)]);
var inst_36895 = cljs.core.first.call(null,inst_36886);
var state_36920__$1 = state_36920;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36920__$1,(20),out,inst_36895);
} else {
if((state_val_36921 === (8))){
var inst_36875 = (state_36920[(8)]);
var inst_36874 = (state_36920[(11)]);
var inst_36877 = (inst_36875 < inst_36874);
var inst_36878 = inst_36877;
var state_36920__$1 = state_36920;
if(cljs.core.truth_(inst_36878)){
var statearr_36954_36982 = state_36920__$1;
(statearr_36954_36982[(1)] = (10));

} else {
var statearr_36955_36983 = state_36920__$1;
(statearr_36955_36983[(1)] = (11));

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
});})(c__35318__auto__))
;
return ((function (switch__35230__auto__,c__35318__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__35231__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__35231__auto____0 = (function (){
var statearr_36956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36956[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__35231__auto__);

(statearr_36956[(1)] = (1));

return statearr_36956;
});
var cljs$core$async$mapcat_STAR__$_state_machine__35231__auto____1 = (function (state_36920){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_36920);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e36957){if((e36957 instanceof Object)){
var ex__35234__auto__ = e36957;
var statearr_36958_36984 = state_36920;
(statearr_36958_36984[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36920);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36985 = state_36920;
state_36920 = G__36985;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__35231__auto__ = function(state_36920){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__35231__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__35231__auto____1.call(this,state_36920);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__35231__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__35231__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto__))
})();
var state__35320__auto__ = (function (){var statearr_36959 = f__35319__auto__.call(null);
(statearr_36959[(6)] = c__35318__auto__);

return statearr_36959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto__))
);

return c__35318__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__36987 = arguments.length;
switch (G__36987) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__36990 = arguments.length;
switch (G__36990) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__36993 = arguments.length;
switch (G__36993) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35318__auto___37040 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto___37040,out){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto___37040,out){
return (function (state_37017){
var state_val_37018 = (state_37017[(1)]);
if((state_val_37018 === (7))){
var inst_37012 = (state_37017[(2)]);
var state_37017__$1 = state_37017;
var statearr_37019_37041 = state_37017__$1;
(statearr_37019_37041[(2)] = inst_37012);

(statearr_37019_37041[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37018 === (1))){
var inst_36994 = null;
var state_37017__$1 = (function (){var statearr_37020 = state_37017;
(statearr_37020[(7)] = inst_36994);

return statearr_37020;
})();
var statearr_37021_37042 = state_37017__$1;
(statearr_37021_37042[(2)] = null);

(statearr_37021_37042[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37018 === (4))){
var inst_36997 = (state_37017[(8)]);
var inst_36997__$1 = (state_37017[(2)]);
var inst_36998 = (inst_36997__$1 == null);
var inst_36999 = cljs.core.not.call(null,inst_36998);
var state_37017__$1 = (function (){var statearr_37022 = state_37017;
(statearr_37022[(8)] = inst_36997__$1);

return statearr_37022;
})();
if(inst_36999){
var statearr_37023_37043 = state_37017__$1;
(statearr_37023_37043[(1)] = (5));

} else {
var statearr_37024_37044 = state_37017__$1;
(statearr_37024_37044[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37018 === (6))){
var state_37017__$1 = state_37017;
var statearr_37025_37045 = state_37017__$1;
(statearr_37025_37045[(2)] = null);

(statearr_37025_37045[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37018 === (3))){
var inst_37014 = (state_37017[(2)]);
var inst_37015 = cljs.core.async.close_BANG_.call(null,out);
var state_37017__$1 = (function (){var statearr_37026 = state_37017;
(statearr_37026[(9)] = inst_37014);

return statearr_37026;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37017__$1,inst_37015);
} else {
if((state_val_37018 === (2))){
var state_37017__$1 = state_37017;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37017__$1,(4),ch);
} else {
if((state_val_37018 === (11))){
var inst_36997 = (state_37017[(8)]);
var inst_37006 = (state_37017[(2)]);
var inst_36994 = inst_36997;
var state_37017__$1 = (function (){var statearr_37027 = state_37017;
(statearr_37027[(10)] = inst_37006);

(statearr_37027[(7)] = inst_36994);

return statearr_37027;
})();
var statearr_37028_37046 = state_37017__$1;
(statearr_37028_37046[(2)] = null);

(statearr_37028_37046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37018 === (9))){
var inst_36997 = (state_37017[(8)]);
var state_37017__$1 = state_37017;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37017__$1,(11),out,inst_36997);
} else {
if((state_val_37018 === (5))){
var inst_36997 = (state_37017[(8)]);
var inst_36994 = (state_37017[(7)]);
var inst_37001 = cljs.core._EQ_.call(null,inst_36997,inst_36994);
var state_37017__$1 = state_37017;
if(inst_37001){
var statearr_37030_37047 = state_37017__$1;
(statearr_37030_37047[(1)] = (8));

} else {
var statearr_37031_37048 = state_37017__$1;
(statearr_37031_37048[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37018 === (10))){
var inst_37009 = (state_37017[(2)]);
var state_37017__$1 = state_37017;
var statearr_37032_37049 = state_37017__$1;
(statearr_37032_37049[(2)] = inst_37009);

(statearr_37032_37049[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37018 === (8))){
var inst_36994 = (state_37017[(7)]);
var tmp37029 = inst_36994;
var inst_36994__$1 = tmp37029;
var state_37017__$1 = (function (){var statearr_37033 = state_37017;
(statearr_37033[(7)] = inst_36994__$1);

return statearr_37033;
})();
var statearr_37034_37050 = state_37017__$1;
(statearr_37034_37050[(2)] = null);

(statearr_37034_37050[(1)] = (2));


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
});})(c__35318__auto___37040,out))
;
return ((function (switch__35230__auto__,c__35318__auto___37040,out){
return (function() {
var cljs$core$async$state_machine__35231__auto__ = null;
var cljs$core$async$state_machine__35231__auto____0 = (function (){
var statearr_37035 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37035[(0)] = cljs$core$async$state_machine__35231__auto__);

(statearr_37035[(1)] = (1));

return statearr_37035;
});
var cljs$core$async$state_machine__35231__auto____1 = (function (state_37017){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_37017);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e37036){if((e37036 instanceof Object)){
var ex__35234__auto__ = e37036;
var statearr_37037_37051 = state_37017;
(statearr_37037_37051[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37017);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37052 = state_37017;
state_37017 = G__37052;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
cljs$core$async$state_machine__35231__auto__ = function(state_37017){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35231__auto____1.call(this,state_37017);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35231__auto____0;
cljs$core$async$state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35231__auto____1;
return cljs$core$async$state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto___37040,out))
})();
var state__35320__auto__ = (function (){var statearr_37038 = f__35319__auto__.call(null);
(statearr_37038[(6)] = c__35318__auto___37040);

return statearr_37038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto___37040,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__37054 = arguments.length;
switch (G__37054) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35318__auto___37120 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto___37120,out){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto___37120,out){
return (function (state_37092){
var state_val_37093 = (state_37092[(1)]);
if((state_val_37093 === (7))){
var inst_37088 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
var statearr_37094_37121 = state_37092__$1;
(statearr_37094_37121[(2)] = inst_37088);

(statearr_37094_37121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (1))){
var inst_37055 = (new Array(n));
var inst_37056 = inst_37055;
var inst_37057 = (0);
var state_37092__$1 = (function (){var statearr_37095 = state_37092;
(statearr_37095[(7)] = inst_37057);

(statearr_37095[(8)] = inst_37056);

return statearr_37095;
})();
var statearr_37096_37122 = state_37092__$1;
(statearr_37096_37122[(2)] = null);

(statearr_37096_37122[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (4))){
var inst_37060 = (state_37092[(9)]);
var inst_37060__$1 = (state_37092[(2)]);
var inst_37061 = (inst_37060__$1 == null);
var inst_37062 = cljs.core.not.call(null,inst_37061);
var state_37092__$1 = (function (){var statearr_37097 = state_37092;
(statearr_37097[(9)] = inst_37060__$1);

return statearr_37097;
})();
if(inst_37062){
var statearr_37098_37123 = state_37092__$1;
(statearr_37098_37123[(1)] = (5));

} else {
var statearr_37099_37124 = state_37092__$1;
(statearr_37099_37124[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (15))){
var inst_37082 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
var statearr_37100_37125 = state_37092__$1;
(statearr_37100_37125[(2)] = inst_37082);

(statearr_37100_37125[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (13))){
var state_37092__$1 = state_37092;
var statearr_37101_37126 = state_37092__$1;
(statearr_37101_37126[(2)] = null);

(statearr_37101_37126[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (6))){
var inst_37057 = (state_37092[(7)]);
var inst_37078 = (inst_37057 > (0));
var state_37092__$1 = state_37092;
if(cljs.core.truth_(inst_37078)){
var statearr_37102_37127 = state_37092__$1;
(statearr_37102_37127[(1)] = (12));

} else {
var statearr_37103_37128 = state_37092__$1;
(statearr_37103_37128[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (3))){
var inst_37090 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37092__$1,inst_37090);
} else {
if((state_val_37093 === (12))){
var inst_37056 = (state_37092[(8)]);
var inst_37080 = cljs.core.vec.call(null,inst_37056);
var state_37092__$1 = state_37092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37092__$1,(15),out,inst_37080);
} else {
if((state_val_37093 === (2))){
var state_37092__$1 = state_37092;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37092__$1,(4),ch);
} else {
if((state_val_37093 === (11))){
var inst_37072 = (state_37092[(2)]);
var inst_37073 = (new Array(n));
var inst_37056 = inst_37073;
var inst_37057 = (0);
var state_37092__$1 = (function (){var statearr_37104 = state_37092;
(statearr_37104[(7)] = inst_37057);

(statearr_37104[(8)] = inst_37056);

(statearr_37104[(10)] = inst_37072);

return statearr_37104;
})();
var statearr_37105_37129 = state_37092__$1;
(statearr_37105_37129[(2)] = null);

(statearr_37105_37129[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (9))){
var inst_37056 = (state_37092[(8)]);
var inst_37070 = cljs.core.vec.call(null,inst_37056);
var state_37092__$1 = state_37092;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37092__$1,(11),out,inst_37070);
} else {
if((state_val_37093 === (5))){
var inst_37065 = (state_37092[(11)]);
var inst_37057 = (state_37092[(7)]);
var inst_37060 = (state_37092[(9)]);
var inst_37056 = (state_37092[(8)]);
var inst_37064 = (inst_37056[inst_37057] = inst_37060);
var inst_37065__$1 = (inst_37057 + (1));
var inst_37066 = (inst_37065__$1 < n);
var state_37092__$1 = (function (){var statearr_37106 = state_37092;
(statearr_37106[(12)] = inst_37064);

(statearr_37106[(11)] = inst_37065__$1);

return statearr_37106;
})();
if(cljs.core.truth_(inst_37066)){
var statearr_37107_37130 = state_37092__$1;
(statearr_37107_37130[(1)] = (8));

} else {
var statearr_37108_37131 = state_37092__$1;
(statearr_37108_37131[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (14))){
var inst_37085 = (state_37092[(2)]);
var inst_37086 = cljs.core.async.close_BANG_.call(null,out);
var state_37092__$1 = (function (){var statearr_37110 = state_37092;
(statearr_37110[(13)] = inst_37085);

return statearr_37110;
})();
var statearr_37111_37132 = state_37092__$1;
(statearr_37111_37132[(2)] = inst_37086);

(statearr_37111_37132[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (10))){
var inst_37076 = (state_37092[(2)]);
var state_37092__$1 = state_37092;
var statearr_37112_37133 = state_37092__$1;
(statearr_37112_37133[(2)] = inst_37076);

(statearr_37112_37133[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37093 === (8))){
var inst_37065 = (state_37092[(11)]);
var inst_37056 = (state_37092[(8)]);
var tmp37109 = inst_37056;
var inst_37056__$1 = tmp37109;
var inst_37057 = inst_37065;
var state_37092__$1 = (function (){var statearr_37113 = state_37092;
(statearr_37113[(7)] = inst_37057);

(statearr_37113[(8)] = inst_37056__$1);

return statearr_37113;
})();
var statearr_37114_37134 = state_37092__$1;
(statearr_37114_37134[(2)] = null);

(statearr_37114_37134[(1)] = (2));


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
});})(c__35318__auto___37120,out))
;
return ((function (switch__35230__auto__,c__35318__auto___37120,out){
return (function() {
var cljs$core$async$state_machine__35231__auto__ = null;
var cljs$core$async$state_machine__35231__auto____0 = (function (){
var statearr_37115 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37115[(0)] = cljs$core$async$state_machine__35231__auto__);

(statearr_37115[(1)] = (1));

return statearr_37115;
});
var cljs$core$async$state_machine__35231__auto____1 = (function (state_37092){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_37092);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e37116){if((e37116 instanceof Object)){
var ex__35234__auto__ = e37116;
var statearr_37117_37135 = state_37092;
(statearr_37117_37135[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37092);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37116;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37136 = state_37092;
state_37092 = G__37136;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
cljs$core$async$state_machine__35231__auto__ = function(state_37092){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35231__auto____1.call(this,state_37092);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35231__auto____0;
cljs$core$async$state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35231__auto____1;
return cljs$core$async$state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto___37120,out))
})();
var state__35320__auto__ = (function (){var statearr_37118 = f__35319__auto__.call(null);
(statearr_37118[(6)] = c__35318__auto___37120);

return statearr_37118;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto___37120,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__37138 = arguments.length;
switch (G__37138) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__35318__auto___37208 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__35318__auto___37208,out){
return (function (){
var f__35319__auto__ = (function (){var switch__35230__auto__ = ((function (c__35318__auto___37208,out){
return (function (state_37180){
var state_val_37181 = (state_37180[(1)]);
if((state_val_37181 === (7))){
var inst_37176 = (state_37180[(2)]);
var state_37180__$1 = state_37180;
var statearr_37182_37209 = state_37180__$1;
(statearr_37182_37209[(2)] = inst_37176);

(statearr_37182_37209[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37181 === (1))){
var inst_37139 = [];
var inst_37140 = inst_37139;
var inst_37141 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_37180__$1 = (function (){var statearr_37183 = state_37180;
(statearr_37183[(7)] = inst_37140);

(statearr_37183[(8)] = inst_37141);

return statearr_37183;
})();
var statearr_37184_37210 = state_37180__$1;
(statearr_37184_37210[(2)] = null);

(statearr_37184_37210[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37181 === (4))){
var inst_37144 = (state_37180[(9)]);
var inst_37144__$1 = (state_37180[(2)]);
var inst_37145 = (inst_37144__$1 == null);
var inst_37146 = cljs.core.not.call(null,inst_37145);
var state_37180__$1 = (function (){var statearr_37185 = state_37180;
(statearr_37185[(9)] = inst_37144__$1);

return statearr_37185;
})();
if(inst_37146){
var statearr_37186_37211 = state_37180__$1;
(statearr_37186_37211[(1)] = (5));

} else {
var statearr_37187_37212 = state_37180__$1;
(statearr_37187_37212[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37181 === (15))){
var inst_37170 = (state_37180[(2)]);
var state_37180__$1 = state_37180;
var statearr_37188_37213 = state_37180__$1;
(statearr_37188_37213[(2)] = inst_37170);

(statearr_37188_37213[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37181 === (13))){
var state_37180__$1 = state_37180;
var statearr_37189_37214 = state_37180__$1;
(statearr_37189_37214[(2)] = null);

(statearr_37189_37214[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37181 === (6))){
var inst_37140 = (state_37180[(7)]);
var inst_37165 = inst_37140.length;
var inst_37166 = (inst_37165 > (0));
var state_37180__$1 = state_37180;
if(cljs.core.truth_(inst_37166)){
var statearr_37190_37215 = state_37180__$1;
(statearr_37190_37215[(1)] = (12));

} else {
var statearr_37191_37216 = state_37180__$1;
(statearr_37191_37216[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37181 === (3))){
var inst_37178 = (state_37180[(2)]);
var state_37180__$1 = state_37180;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37180__$1,inst_37178);
} else {
if((state_val_37181 === (12))){
var inst_37140 = (state_37180[(7)]);
var inst_37168 = cljs.core.vec.call(null,inst_37140);
var state_37180__$1 = state_37180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37180__$1,(15),out,inst_37168);
} else {
if((state_val_37181 === (2))){
var state_37180__$1 = state_37180;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37180__$1,(4),ch);
} else {
if((state_val_37181 === (11))){
var inst_37148 = (state_37180[(10)]);
var inst_37144 = (state_37180[(9)]);
var inst_37158 = (state_37180[(2)]);
var inst_37159 = [];
var inst_37160 = inst_37159.push(inst_37144);
var inst_37140 = inst_37159;
var inst_37141 = inst_37148;
var state_37180__$1 = (function (){var statearr_37192 = state_37180;
(statearr_37192[(7)] = inst_37140);

(statearr_37192[(11)] = inst_37160);

(statearr_37192[(8)] = inst_37141);

(statearr_37192[(12)] = inst_37158);

return statearr_37192;
})();
var statearr_37193_37217 = state_37180__$1;
(statearr_37193_37217[(2)] = null);

(statearr_37193_37217[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37181 === (9))){
var inst_37140 = (state_37180[(7)]);
var inst_37156 = cljs.core.vec.call(null,inst_37140);
var state_37180__$1 = state_37180;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_37180__$1,(11),out,inst_37156);
} else {
if((state_val_37181 === (5))){
var inst_37148 = (state_37180[(10)]);
var inst_37144 = (state_37180[(9)]);
var inst_37141 = (state_37180[(8)]);
var inst_37148__$1 = f.call(null,inst_37144);
var inst_37149 = cljs.core._EQ_.call(null,inst_37148__$1,inst_37141);
var inst_37150 = cljs.core.keyword_identical_QMARK_.call(null,inst_37141,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_37151 = ((inst_37149) || (inst_37150));
var state_37180__$1 = (function (){var statearr_37194 = state_37180;
(statearr_37194[(10)] = inst_37148__$1);

return statearr_37194;
})();
if(cljs.core.truth_(inst_37151)){
var statearr_37195_37218 = state_37180__$1;
(statearr_37195_37218[(1)] = (8));

} else {
var statearr_37196_37219 = state_37180__$1;
(statearr_37196_37219[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37181 === (14))){
var inst_37173 = (state_37180[(2)]);
var inst_37174 = cljs.core.async.close_BANG_.call(null,out);
var state_37180__$1 = (function (){var statearr_37198 = state_37180;
(statearr_37198[(13)] = inst_37173);

return statearr_37198;
})();
var statearr_37199_37220 = state_37180__$1;
(statearr_37199_37220[(2)] = inst_37174);

(statearr_37199_37220[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37181 === (10))){
var inst_37163 = (state_37180[(2)]);
var state_37180__$1 = state_37180;
var statearr_37200_37221 = state_37180__$1;
(statearr_37200_37221[(2)] = inst_37163);

(statearr_37200_37221[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37181 === (8))){
var inst_37148 = (state_37180[(10)]);
var inst_37140 = (state_37180[(7)]);
var inst_37144 = (state_37180[(9)]);
var inst_37153 = inst_37140.push(inst_37144);
var tmp37197 = inst_37140;
var inst_37140__$1 = tmp37197;
var inst_37141 = inst_37148;
var state_37180__$1 = (function (){var statearr_37201 = state_37180;
(statearr_37201[(7)] = inst_37140__$1);

(statearr_37201[(14)] = inst_37153);

(statearr_37201[(8)] = inst_37141);

return statearr_37201;
})();
var statearr_37202_37222 = state_37180__$1;
(statearr_37202_37222[(2)] = null);

(statearr_37202_37222[(1)] = (2));


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
});})(c__35318__auto___37208,out))
;
return ((function (switch__35230__auto__,c__35318__auto___37208,out){
return (function() {
var cljs$core$async$state_machine__35231__auto__ = null;
var cljs$core$async$state_machine__35231__auto____0 = (function (){
var statearr_37203 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37203[(0)] = cljs$core$async$state_machine__35231__auto__);

(statearr_37203[(1)] = (1));

return statearr_37203;
});
var cljs$core$async$state_machine__35231__auto____1 = (function (state_37180){
while(true){
var ret_value__35232__auto__ = (function (){try{while(true){
var result__35233__auto__ = switch__35230__auto__.call(null,state_37180);
if(cljs.core.keyword_identical_QMARK_.call(null,result__35233__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__35233__auto__;
}
break;
}
}catch (e37204){if((e37204 instanceof Object)){
var ex__35234__auto__ = e37204;
var statearr_37205_37223 = state_37180;
(statearr_37205_37223[(5)] = ex__35234__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37180);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37204;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__35232__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37224 = state_37180;
state_37180 = G__37224;
continue;
} else {
return ret_value__35232__auto__;
}
break;
}
});
cljs$core$async$state_machine__35231__auto__ = function(state_37180){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__35231__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__35231__auto____1.call(this,state_37180);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__35231__auto____0;
cljs$core$async$state_machine__35231__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__35231__auto____1;
return cljs$core$async$state_machine__35231__auto__;
})()
;})(switch__35230__auto__,c__35318__auto___37208,out))
})();
var state__35320__auto__ = (function (){var statearr_37206 = f__35319__auto__.call(null);
(statearr_37206[(6)] = c__35318__auto___37208);

return statearr_37206;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__35320__auto__);
});})(c__35318__auto___37208,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1531954930214
